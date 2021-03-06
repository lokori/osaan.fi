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

(ns osaan-e2e.arvion-tekeminen-test
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [clj-webdriver.taxi :as w]
            [osaan-e2e.sivu.etusivu :as etusivu]
            [osaan-e2e.sivu.osien-valinta :as osien-valinta-sivu]
            [osaan-e2e.util :refer :all]))

(deftest arvion-tekeminen-test
  (with-webdriver
    (testing
      "arvion tekeminen"
      (etusivu/avaa-sivu)
      (etusivu/aseta-tutkinnon-nimi "audio"))))
