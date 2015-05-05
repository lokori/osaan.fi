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

(ns osaan.skeema
  (:require [schema.core :as s]))

(def Opintoala {:nimi_fi s/Str
                :nimi_sv s/Str
                :opintoalatunnus s/Str})

(def Koulutusala {:koulutusalatunnus s/Str
                  :nimi_fi s/Str
                  :nimi_sv s/Str
                  :opintoalat [Opintoala]})

(def Tutkinto {:nimi_fi s/Str
               :nimi_sv (s/maybe s/Str)
               :tutkintotunnus s/Str
               :peruste_diaarinumero s/Str
               :opintoala_nimi_fi s/Str
               :opintoala_nimi_sv s/Str})

(def Tutkinnonosa {:nimi_fi s/Str
                   :nimi_sv s/Str
                   :osatunnus s/Str
                   :pakollinen s/Bool})
