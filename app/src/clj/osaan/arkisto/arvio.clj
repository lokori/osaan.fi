;; Copyright (c) 2015 The Finnish National Board of Education - Opetushallitus
;;
;; This program is free software:  Licensed under the EUPL, Version 1.1 or - as
;; soon as they will be approved by the European Commission - subsequent versions
;; of the EUPL (the "Licence");
;;
;; You may not use this work except in compliance with the Licence.
;; You may obtain a copy of the Licence at: http://www.osor.eu/eupl/
;;
;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; European Union Public Licence for more details.

(ns osaan.arkisto.arvio
  (:require [korma.core :as sql]
            [oph.korma.common :as sql-util]
            [clj-time.coerce :refer [to-sql-time]]))

(defn ^:integration-api poista-vanhat-arviot!
  [paivamaara]
  (let [paivamaara (to-sql-time paivamaara)]
    (sql/delete :kohdearvio
      (sql/where {:arviotunnus [in (sql/subselect :arvio
                                     (sql/fields :tunniste)
                                     (sql/where {:luotuaika [< paivamaara]}))]}))
  (sql/delete :arvio_tutkinnonosa
    (sql/where {:arviotunnus [in (sql/subselect :arvio
                                   (sql/fields :tunniste)
                                   (sql/where {:luotuaika [< paivamaara]}))]}))
  (sql/delete :arvio
    (sql/where {:luotuaika [< paivamaara]}))))

(defn ^:private hae-arvio
  [arviotunnus]
  (sql-util/select-unique-or-nil :arvio
    (sql/join :peruste (= :peruste.peruste_id :peruste))
    (sql/fields :peruste [:peruste.tutkinto :tutkintotunnus] :luotuaika)
    (sql/where {:tunniste arviotunnus})))

(defn ^:private hae-kohdearviot
  [arviotunnus]
  (sql/select :kohdearvio
    (sql/join :ammattitaidon_kuvaus (= :ammattitaidon_kuvaus.ammattitaidonkuvaus_id :ammattitaidon_kuvaus))
    (sql/join :arvioinnin_kohdealue (= :arvioinnin_kohdealue.arvioinninkohdealue_id :ammattitaidon_kuvaus.arvioinninkohdealue))
    (sql/fields [:arvioinnin_kohdealue.osa :tutkinnonosa] :ammattitaidon_kuvaus :arvio [:kommentti :vapaateksti])
    (sql/where {:arviotunnus arviotunnus})))

(defn ^:private hae-tutkinnonosat
  [arviotunnus]
  (sql/select :arvio_tutkinnonosa
    (sql/fields :osa)
    (sql/where {:arviotunnus arviotunnus})))

(defn ^:private luo-arviotunniste
  []
  (let [chars (map char (concat (range 48 58) (range 65 91) (range 97 123)))
        tunniste (take 16 (repeatedly #(rand-nth chars)))]
    (reduce str tunniste)))

(defn hae
  [arviotunnus]
  (when-let [arvio (hae-arvio arviotunnus)]
    (let [kohdearviot (hae-kohdearviot arviotunnus)
          tutkinnonosa->kohde->arviot (reduce #(assoc-in %1 [(:tutkinnonosa %2) (:ammattitaidon_kuvaus %2)] (dissoc %2 :tutkinnonosa :ammattitaidon_kuvaus)) {} kohdearviot)
          tutkinnonosat (hae-tutkinnonosat arviotunnus)]
      (assoc arvio :kohdearviot tutkinnonosa->kohde->arviot
                   :tutkinnonosat (map :osa tutkinnonosat)))))

(defn tallenna
  [tila]
  (let [{:keys [peruste tutkinnonosat kohdearviot]} tila
        tunniste (luo-arviotunniste)]
    (sql/insert :arvio
      (sql/values {:tunniste tunniste
                   :peruste peruste}))
    (sql/insert :arvio_tutkinnonosa
      (sql/values (for [osa tutkinnonosat]
                    {:arviotunnus tunniste
                     :osa osa})))
    (sql/insert :kohdearvio
      (sql/values (for [[ammattitaidon_kuvaus {:keys [arvio vapaateksti]}] (into {} (vals kohdearviot))]
                    {:arviotunnus tunniste
                     :ammattitaidon_kuvaus (Integer/parseInt (name ammattitaidon_kuvaus))
                     :arvio arvio
                     :kommentti vapaateksti})))
    tunniste))

(defn hae-arviotunnukset []
  (map
    :tunniste
    (sql/select :arvio
      (sql/fields :tunniste))))
