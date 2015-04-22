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

(ns osaan.rest-api.koulutusala
  (:require [compojure.core :as c]
            [oph.common.util.http-util :refer [json-response]]
            [osaan.compojure-util :as cu]
            [osaan.skeema :as skeema]))

(def koulutusalat '({:opintoalat ({:opintoala_tkkoodi "101", :opintoala_nimi_sv "Fritidsverksamhet och ungdomsarbete", :opintoala_nimi_fi "Vapaa-aika- ja nuorisotyö"} {:opintoala_tkkoodi "106", :opintoala_nimi_sv "Undervisning och fostran", :opintoala_nimi_fi "Opetus- ja kasvatustyö"} {:opintoala_tkkoodi "102", :opintoala_nimi_sv "Språkvetenskaper", :opintoala_nimi_fi "Kielitieteet"} {:opintoala_tkkoodi "199", :opintoala_nimi_sv "Övrig utbildning inom det humanistiska och pedagogiska området", :opintoala_nimi_fi "Muu humanistisen ja kasvatusalan koulutus"}), :koulutusala_nimi_sv "Det humanistiska och pedagogiska området", :koulutusala_nimi_fi "Humanistinen ja kasvatusala", :koulutusala_tkkoodi "1"} {:opintoalat ({:opintoala_tkkoodi "204", :opintoala_nimi_sv "Teater och dans", :opintoala_nimi_fi "Teatteri ja tanssi"} {:opintoala_tkkoodi "206", :opintoala_nimi_sv "Bildkonst", :opintoala_nimi_fi "Kuvataide"} {:opintoala_tkkoodi "201", :opintoala_nimi_sv "Hantverk och konstindustri", :opintoala_nimi_fi "Käsi- ja taideteollisuus"} {:opintoala_tkkoodi "202", :opintoala_nimi_sv "Mediekultur och informationsvetenskaper", :opintoala_nimi_fi "Viestintä ja informaatiotieteet"} {:opintoala_tkkoodi "205", :opintoala_nimi_sv "Musik", :opintoala_nimi_fi "Musiikki"}), :koulutusala_nimi_sv "Kultur", :koulutusala_nimi_fi "Kulttuuriala", :koulutusala_tkkoodi "2"} {:opintoalat ({:opintoala_tkkoodi "303", :opintoala_nimi_sv "Administration", :opintoala_nimi_fi "Hallinto"} {:opintoala_tkkoodi "301", :opintoala_nimi_sv "Företagsekonomi och handel", :opintoala_nimi_fi "Liiketalous ja kauppa"}), :koulutusala_nimi_sv "Det samhällsvetenskapliga, företagsekonomiska och administrativa området", :koulutusala_nimi_fi "Yhteiskuntatieteiden, liiketalouden ja hallinnon ala", :koulutusala_tkkoodi "3"} {:opintoalat ({:opintoala_tkkoodi "402", :opintoala_nimi_sv "Databehandling", :opintoala_nimi_fi "Tietojenkäsittely"}), :koulutusala_nimi_sv "Det naturvetenskapliga området", :koulutusala_nimi_fi "Luonnontieteiden ala", :koulutusala_tkkoodi "4"} {:opintoalat ({:opintoala_tkkoodi "507", :opintoala_nimi_sv "Process-, kemi- och materialteknik", :opintoala_nimi_fi "Prosessi-, kemian- ja materiaalitekniikka"} {:opintoala_tkkoodi "509", :opintoala_nimi_sv "Fordons- och transportteknik", :opintoala_nimi_fi "Ajoneuvo- ja kuljetustekniikka"} {:opintoala_tkkoodi "599", :opintoala_nimi_sv "Övrig utbildning inom teknik och kommunikation", :opintoala_nimi_fi "Muu tekniikan ja liikenteen alan koulutus"} {:opintoala_tkkoodi "501", :opintoala_nimi_sv "Arkitektur och byggande", :opintoala_nimi_fi "Arkkitehtuuri ja rakentaminen"} {:opintoala_tkkoodi "502", :opintoala_nimi_sv "Maskin-, metall- och energiteknik", :opintoala_nimi_fi "Kone-, metalli- ja energiatekniikka"} {:opintoala_tkkoodi "503", :opintoala_nimi_sv "El- och automationsteknik", :opintoala_nimi_fi "Sähkö- ja automaatiotekniikka"} {:opintoala_tkkoodi "504", :opintoala_nimi_sv "Informations- och kommunikationsteknik", :opintoala_nimi_fi "Tieto- ja tietoliikennetekniikka"} {:opintoala_tkkoodi "505", :opintoala_nimi_sv "Grafisk teknik och medieteknik", :opintoala_nimi_fi "Graafinen ja viestintätekniikka"} {:opintoala_tkkoodi "506", :opintoala_nimi_sv "Livsmedelsbranschen och bioteknik", :opintoala_nimi_fi "Elintarvikeala ja biotekniikka"} {:opintoala_tkkoodi "508", :opintoala_nimi_sv "Textil- och beklädnadsteknik", :opintoala_nimi_fi "Tekstiili- ja vaatetustekniikka"}), :koulutusala_nimi_sv "Teknik och kommunikation", :koulutusala_nimi_fi "Tekniikan ja liikenteen ala", :koulutusala_tkkoodi "5"} {:opintoalat ({:opintoala_tkkoodi "603", :opintoala_nimi_sv "Fiskeri", :opintoala_nimi_fi "Kalatalous"} {:opintoala_tkkoodi "699", :opintoala_nimi_sv "Övrig utbildning inom naturbruk och miljöområdet", :opintoala_nimi_fi "Muu luonnonvara- ja ympäristöalan koulutus"} {:opintoala_tkkoodi "605", :opintoala_nimi_sv "Natur- och miljöområdet", :opintoala_nimi_fi "Luonto- ja ympäristöala"} {:opintoala_tkkoodi "601", :opintoala_nimi_sv "Lantbruk", :opintoala_nimi_fi "Maatilatalous"} {:opintoala_tkkoodi "602", :opintoala_nimi_sv "Trädgårdsskötsel", :opintoala_nimi_fi "Puutarhatalous"} {:opintoala_tkkoodi "604", :opintoala_nimi_sv "Skogsbruk", :opintoala_nimi_fi "Metsätalous"}), :koulutusala_nimi_sv "Naturbruk och miljöområdet", :koulutusala_nimi_fi "Luonnonvara- ja ympäristöala", :koulutusala_tkkoodi "6"} {:opintoalat ({:opintoala_tkkoodi "702", :opintoala_nimi_sv "Hälsoområdet", :opintoala_nimi_fi "Terveysala"} {:opintoala_tkkoodi "701", :opintoala_nimi_sv "Socialområdet", :opintoala_nimi_fi "Sosiaaliala"} {:opintoala_tkkoodi "703", :opintoala_nimi_sv "Social- och hälsoområdet (gemensamma program)", :opintoala_nimi_fi "Sosiaali- ja terveysala (alojen yhteiset ohjelmat)"} {:opintoala_tkkoodi "704", :opintoala_nimi_sv "Odontologi och annan tandvård", :opintoala_nimi_fi "Hammaslääketiede ja muu hammashuolto"} {:opintoala_tkkoodi "705", :opintoala_nimi_sv "Rehabilitering och idrott", :opintoala_nimi_fi "Kuntoutus ja liikunta"} {:opintoala_tkkoodi "706", :opintoala_nimi_sv "Teknisk hälsoservice", :opintoala_nimi_fi "Tekniset terveyspalvelut"} {:opintoala_tkkoodi "707", :opintoala_nimi_sv "Farmaci och annan läkemedelsförsörjning", :opintoala_nimi_fi "Farmasia ja muu lääkehuolto"} {:opintoala_tkkoodi "710", :opintoala_nimi_sv "Skönhetsområdet", :opintoala_nimi_fi "Kauneudenhoitoala"}), :koulutusala_nimi_sv "Social-, hälso- och idrottsområdet", :koulutusala_nimi_fi "Sosiaali-, terveys- ja liikunta-ala", :koulutusala_tkkoodi "7"} {:opintoalat ({:opintoala_tkkoodi "801", :opintoala_nimi_sv "Turism", :opintoala_nimi_fi "Matkailuala"} {:opintoala_tkkoodi "804", :opintoala_nimi_sv "Huslig ekonomi och konsumentservice", :opintoala_nimi_fi "Kotitalous- ja kuluttajapalvelut"} {:opintoala_tkkoodi "805", :opintoala_nimi_sv "Rengöringsservice", :opintoala_nimi_fi "Puhdistuspalvelut"} {:opintoala_tkkoodi "802", :opintoala_nimi_sv "Inkvarterings- och kosthållsbranschen", :opintoala_nimi_fi "Majoitus- ja ravitsemisala"}), :koulutusala_nimi_sv "Turism-, kosthålls- och ekonomibranschen", :koulutusala_nimi_fi "Matkailu-, ravitsemis- ja talousala", :koulutusala_tkkoodi "8"} {:opintoalat ({:opintoala_tkkoodi "903", :opintoala_nimi_sv "Polisbranschen", :opintoala_nimi_fi "Poliisiala"} {:opintoala_tkkoodi "969", :opintoala_nimi_sv "Övrig utbildning utanför UVM:s förvaltningsområde", :opintoala_nimi_fi "Muu OPM:n hallinnonalan ulkopuolella järjestettävä koulutus"} {:opintoala_tkkoodi "904", :opintoala_nimi_sv "Fångvård", :opintoala_nimi_fi "Vankeinhoito"}), :koulutusala_nimi_sv "Övrig utbildning", :koulutusala_nimi_fi "Muu koulutus", :koulutusala_tkkoodi "9"}))

(c/defroutes reitit
  (cu/defapi :julkinen nil :get "/" []
    (json-response koulutusalat [skeema/Koulutusala])))
