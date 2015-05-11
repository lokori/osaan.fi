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

angular.module('osaan.raportti.raporttiui', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/raportti', {
        controller: 'RaporttiController',
        templateUrl: 'template/raportti/raportti.html',
        label: 'Raportti'
      });
  }])

  .factory('RaporttiApurit', [function() {
    return {
      liitaTutkinnonOsiinArviot: function(osatunnukset, haeArvio) {
        return _.zipObject(
          _.map(osatunnukset, function(osatunnus) {return [osatunnus, haeArvio(osatunnus)];})
        );
      },
      valitseTutkinnonOsat: function(tutkinnonosat, valitutOsatunnukset) {
        return _(tutkinnonosat).groupBy('osatunnus').pick(valitutOsatunnukset).values().flatten().value();
      }
    };
  }])

  .controller('RaporttiController', ['$location', '$routeParams', '$scope', 'ArvioinninKohde', 'Arviointi', 'RaporttiApurit', 'Tutkinnonosa', 'Tutkinto', function($location, $routeParams, $scope, ArvioinninKohde, Arviointi, RaporttiApurit, Tutkinnonosa, Tutkinto) {

    Tutkinto.haePerusteella(Arviointi.valittuPeruste()).then(function(tutkinto) {
      $scope.tutkinto = tutkinto;
    });

    Tutkinnonosa.hae(Arviointi.valittuPeruste(), Arviointi.valittuTutkintotunnus())
      .then(function(tutkinnonosat) {
        $scope.tutkinnonosat = RaporttiApurit.valitseTutkinnonOsat(tutkinnonosat, Arviointi.valitutOsatunnukset());
      });

    ArvioinninKohde.haeKohdealueetTutkinnonosille(Arviointi.valitutOsatunnukset())
      .then(function(kohdealueet) {
        $scope.kohdealueet = kohdealueet;
      });

    $scope.arviot = RaporttiApurit.liitaTutkinnonOsiinArviot(Arviointi.valitutOsatunnukset(),
      function(osatunnus) {return Arviointi.haeArviot(osatunnus);}
    );

    $scope.paivays = new Date();

    $scope.palaaArviointiin = function() {
      $location.url('/osien-valinta/arviointi?osa=' + Arviointi.seuraavaOsatunnus());
    };
  }])
;
