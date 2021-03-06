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

angular.module('osaan.osien-valinta.osien-valintaui', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/osien-valinta', {
        controller: 'OsienValintaController',
        templateUrl: 'template/osien-valinta/osien-valinta.html',
        title: 'yleiset.valitse_tutkinnon_osat'
      });
  }])

  .controller('OsienValintaController', ['$location', '$routeParams', '$scope', '$translate', 'Arviointi', 'Osaamisala', 'Tutkinnonosa', 'Tutkinto', 'varmistus', function($location, $routeParams, $scope, $translate, Arviointi, Osaamisala, Tutkinnonosa, Tutkinto, varmistus) {
    var peruste = $routeParams.peruste;
    var tutkintotunnus = $routeParams.tutkinto;

    if (peruste === undefined || tutkintotunnus === undefined) {
      $location.url('/');
      return;
    }

    Arviointi.asetaTutkintoJaPeruste(tutkintotunnus, peruste);

    var valitutOsatunnukset = function() {
      return _($scope.tutkinnonosat)
        .map('osatunnus')
        .filter(function(tunnus) { return $scope.valinnat[tunnus]; })
        .value();
    };

    var paivitaValittujenMaarat = function() {
      _.forEach($scope.osaamisalat, function(ala) {
        var valittuja = _($scope.valinnat[ala.osaamisalatunnus]).filter().size();
        $scope.valittujaOsia[ala.osaamisalatunnus] = valittuja > 0 ? valittuja + '/' + ala.tutkinnonosat.length : '';
      });
    };

    $scope.valinnat = {undefined: {}};

    // Kun sivulle palataan uudestaan, palauta valinnat
    _.forEach(Arviointi.valitutOsat(), function(tutkinnonosat, alatunnus) {
      $scope.valinnat[alatunnus] = tutkinnonosat;
    });

    Tutkinto.haePerusteella(peruste).then(function(tutkinto) {
      $scope.tutkinto = tutkinto;
    });

    $scope.onkoArvioita = function() {
      return Arviointi.onkoArvioita();
    };

    $scope.poistaArviot = function() {
      varmistus.varmista($translate.instant('osien-valinta.tyhjenna_arviot_otsikko'), $translate.instant('osien-valinta.tyhjenna_arviot_varoitus'), $translate.instant('osien-valinta.tyhjenna_arviot')).then(function() {
        _.forEach($scope.valinnat, function (valittu, osatunnus) {
          if (valittu) {
            Arviointi.poistaArviot(osatunnus);
          }
        });
      });
    };

    $scope.seuraavaTutkinnonosa = function() {
      return Arviointi.seuraavaOsatunnus();
    };

    $scope.eteenpain = function() {
      $location.url('/arviointi?osa=' + Arviointi.seuraavaOsatunnus());
    };

    Osaamisala.hae(peruste).then(function(osaamisalat) {
      $scope.osaamisalat = osaamisalat;
      $scope.accordionAuki = new Array(osaamisalat.length);
      $scope.valittujaOsia = new Array(osaamisalat.length);
      for(var i = 0; i < osaamisalat.length; i++) {
        var tunnus = osaamisalat[i].osaamisalatunnus;
        $scope.accordionAuki[tunnus] = false;
        if($scope.valinnat[tunnus] === undefined) {
          $scope.valinnat[tunnus] = {};
        }
      }
      paivitaValittujenMaarat(valitutOsatunnukset());
    });

    Tutkinnonosa.hae(peruste, tutkintotunnus).then(function(tutkinnonosat) {
      $scope.tutkinnonosat = tutkinnonosat;

      // valitutOsatunnukset() vaatii tutkinnonosat järjestyksen saamiseksi
      $scope.$watch('valinnat', function() {
        Arviointi.asetaOsat($scope.valinnat);
        paivitaValittujenMaarat();
      }, true);
    });
  }])
;
