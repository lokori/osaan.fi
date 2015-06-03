// Copyright (c) 2015 The Finnish National Board of Education - Opetushallitus
//
// This program is free software:  Licensed under the EUPL, Version 1.1 or - as
// soon as they will be approved by the European Commission - subsequent versions
// of the EUPL (the "Licence");
//
// You may not use this work except in compliance with the Licence.
// You may obtain a copy of the Licence at: http://www.osor.eu/eupl/
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// European Union Public Licence for more details.

'use strict';

angular.module('osaan.palvelut.raportti', [])

  .factory('Raportti', ['Arviointi', function(Arviointi) {
    var service = {};

    service.luoRaportti = function(tutkinto, tutkinnonosat, kohdealueet) {
      var raportti = angular.copy(tutkinto);

      var tutkintoSumma = 0;
      var tutkintoArvioita = 0;

      raportti.tutkinnonosat = [];
      _.forEach(tutkinnonosat, function(tutkinnonosa_) {
        var tutkinnonosa = angular.copy(tutkinnonosa_);
        var arviot = Arviointi.haeArviot(tutkinnonosa.osatunnus);
        var arvioidutAmmattitaidonKuvausIdt = _.map(_.keys(arviot), function(x) { return parseInt(x); });
        var tutkinnonosaSumma = 0;
        var tutkinnonosaArvioita = 0;

        var osanKohdealueet = [];
        _.forEach(kohdealueet[tutkinnonosa.osatunnus], function(kohdealue_) {
          var kohdealue = angular.copy(kohdealue_);
          var ammattitaidonKuvausIdt = _.pluck(kohdealue.kuvaukset, 'ammattitaidonkuvaus_id');
          var kohdealueenArvioIdt = _.intersection(arvioidutAmmattitaidonKuvausIdt, ammattitaidonKuvausIdt);
          var kohdealueenArviot = _.filter(_.map(kohdealueenArvioIdt, function(id) { return arviot[id].arvio; }), _.isNumber);
          var summa = _.reduce(kohdealueenArviot, function(total, n) { return total + n; }, 0);
          var arvioita = kohdealueenArviot.length;
          tutkinnonosaSumma += summa;
          tutkinnonosaArvioita += arvioita;

          _.forEach(kohdealue.kuvaukset, function(kuvaus) {
            if (arviot[kuvaus.ammattitaidonkuvaus_id] !== undefined) {
              kuvaus.arvio = angular.copy(arviot[kuvaus.ammattitaidonkuvaus_id]);
            }
          });

          kohdealue.keskiarvo = arvioita > 0 ? (summa / arvioita) : 0;
          osanKohdealueet.push(kohdealue);
        });
        tutkinnonosa.kohdealueet = osanKohdealueet;
        tutkinnonosa.keskiarvo = tutkinnonosaArvioita > 0 ? (tutkinnonosaSumma / tutkinnonosaArvioita) : 0;

        tutkintoSumma += tutkinnonosaSumma;
        tutkintoArvioita += tutkinnonosaArvioita;

        raportti.tutkinnonosat.push(tutkinnonosa);
      });

      raportti.keskiarvo = tutkintoArvioita > 0 ? (tutkintoSumma / tutkintoArvioita) : 0;

      return raportti;
    };

    return service;
  }])
;
