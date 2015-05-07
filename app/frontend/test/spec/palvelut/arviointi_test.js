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

describe('Arviointi', function() {
  beforeEach(module('osaan.palvelut.arviointi'));

  var Arviointi;

  beforeEach(inject(function(_Arviointi_) {
    Arviointi = _Arviointi_;
  }));

  beforeEach(function() {
    Arviointi.asetaTutkintoJaPeruste('324601', '41/011/2005');
    Arviointi.asetaOsatunnukset(['100001', '100002']);
  });

  it('Valinnat saa luettua', function() {
    expect(Arviointi.valittuTutkintotunnus()).toEqual('324601');
    expect(Arviointi.valittuPeruste()).toEqual('41/011/2005');
    expect(Arviointi.valitutOsatunnukset()).toEqual(['100001', '100002']);
  });

  it('Edellinen osatunnus', function() {
    expect(Arviointi.edellinenOsatunnus('100002')).toEqual('100001');
    expect(Arviointi.edellinenOsatunnus('100001')).toEqual(undefined);
  });

  it('Seuraava osatunnus', function() {
    expect(Arviointi.seuraavaOsatunnus()).toEqual('100001');
    expect(Arviointi.seuraavaOsatunnus('100001')).toEqual('100002');
  });

  it('Luo kopiot sisään tulevista tietorakenteista', function() {
    var osatunnukset = ['100001', '100002'];

    Arviointi.asetaOsatunnukset(osatunnukset);
    osatunnukset.push('100003');
    expect(Arviointi.valitutOsatunnukset()).toEqual(['100001', '100002']);

    var arviot = {'-1':{'arvio':1}};
    Arviointi.asetaArviot('100001', arviot);
    arviot['-2'] = {'arvio':3};
    expect(Arviointi.haeArviot('100001')).toEqual({'-1':{'arvio':1}});
  });

  it('Luo kopiot ulos annettavista tietorakenteista', function() {
    var osatunnukset = Arviointi.valitutOsatunnukset();
    var osatunnuksetAlkup = angular.copy(osatunnukset);

    osatunnukset.push('100003');
    expect(Arviointi.valitutOsatunnukset()).toEqual(osatunnuksetAlkup);

    Arviointi.asetaArviot('100001', {'-1':{'arvio':1}});
    var arviot = Arviointi.haeArviot('100001');
    var arviotAlkup = angular.copy(arviot);
    arviot['-2'] = {'arvio':3};
    expect(Arviointi.haeArviot('100001')).toEqual(arviotAlkup);
  });
});
