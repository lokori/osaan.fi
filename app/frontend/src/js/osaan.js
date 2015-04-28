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

angular.module('osaan.fi', [
  'ng-breadcrumbs',
  'ngRoute',
  'taiPlaceholder',
  'ui.bootstrap',

  'yhteiset.palvelut.lokalisointi',

  'osaan.etusivu.etusivuui',
  'osaan.direktiivit.kielen-vaihto',
  'osaan.direktiivit.ohje',
  'osaan.osien-valinta.osien-valintaui',
  'osaan.arviointi.arviointiui',
  'osaan.rest.koulutusala',
  'osaan.rest.tutkinnonosa',
  'osaan.rest.tutkinto',
  'osaan.tekstit']).

  controller('OsaanController', ['$scope', 'breadcrumbs', function($scope, breadcrumbs){
    $scope.breadcrumbs = breadcrumbs;
  }])
;
