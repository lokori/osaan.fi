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

angular.module('osaan.tekstit', ['pascalprecht.translate'])
  .constant('tekstit', {
    fi: {
      'arviointi.arvioi_osaamisesi': 'Arvioi osaamisesi',
      'arviointi.arvioita_puuttuu': 'Et ole antanut arvioita kaikista ammattitaidoista!',
      'arviointi.arvioitu': 'Arvioitu',
      'arviointi.asteikko1': 'En osaa',
      'arviointi.asteikko2': 'Osaan vähän',
      'arviointi.asteikko3': 'Osaan hyvin',
      'arviointi.asteikko4': 'Osaan erinomaisesti',
      'arviointi.ei_kohteita': 'Arviointikohteita ei ole tällä hetkellä saatavissa.',
      'arviointi.eos': 'En osaa sanoa',
      'arviointi.miten': 'Miten seuraavat väittämät kuvaavat osaamistasi?',
      'arviointi.raportti': 'Näytä raportti',
      'arviointi.tekstivastaus': 'Tekstivastaus',
      'arviointi.tekstivastaus_placeholder': 'Kirjoita vastauksesi tähän',
      'etusivu.jagkan': 'osaan.fi',
      'etusivu.opintoala': 'Ala',
      'etusivu.otsikko': 'Osaamisen tunnistaminen',
      'etusivu.teksti': 'Voit arvioida osaamistasi valitsemassasi ammatillisessa perustutkinnossa, ammattitutkinnossa tai erikoisammattitutkinnossa.\n\nArviointi tehdään tutkinnoissa edellytettyjen ammattitaitovaatimusten perusteella, jotka on laadittu yhteistyössä työelämän kanssa. Tutkinnon suorittamisessa huomioidaan aiempi osaamisesi, joka voi olla hankittu esimerkiksi työssä, opinnoissa tai muussa toiminnassa. Kun hakeudut suorittamaan tutkintoa, oppilaitos selvittää aiemman osaamisesi. Jos olet kiinnostunut suorittamaan tutkinnon, ole yhteydessä näyttötutkinnon tai koulutuksen järjestäjiin, jotka näet linkkien kautta.\n\nNäyttötutkinto on erityisesti aikuisille suunniteltu tutkinnon suorittamistapa. Ammatillinen peruskoulutus on erityisesti nuorille suunniteltua koulutusta.',
      'etusivu.tutkinnon_nimi': 'Tutkinnon nimi',
      'etusivu.tutkinnon_nimi_placeholder': 'Kirjoita tutkinnon nimi tai nimen osa',
      'footer.ohje': 'Ammattitaitovaatimukset perustuvat voimassa oleviin tutkinnon perusteisiin. Tarkempia tietoja tutkinnon suorittamisesta ja koulutukseen hakeutumisesta löydät oppilaitosten sivuilta ja',
      'footer.ohje_url': 'https://opintopolku.fi/wp/fi/valintojen-tuki/ohjaus-ja-neuvontapalvelut',
      'footer.ohje_url_title': 'Opintopolku.fi-palvelusta.',
      'footer.ota_yhteytta': 'Osaan.fi-palvelun käyttöä koskevan palautteen voi lähettää sähköpostilla osoitteeseen',
      'footer.ota_yhteytta_email': 'aitu-tuki@oph.fi',
      'footer.otsikko': 'Palvelun tarjoaa Opetushallitus',
      'footer.rekisteriseloste': 'Palvelua voi käyttää anonyymisti.',
      'footer.rekisteriseloste_url': 'img/Rekisteriseloste Osaan fi_14_022_2015.pdf',
      'footer.rekisteriseloste_url_title': 'Rekisteriseloste',
      'http-virhe.ei_yhteytta': 'Palvelimeen ei juuri nyt saada yhteyttä. Palvelu yrittää automaattisesti uudelleen hetken kuluttua.',
      'http-virhe.virhe': 'Palvelimella tapahtui virhe.',
      'http-virhe.yrita_uudelleen': 'Yritä ladata sivu uudelleen.',
      'lataa.palaa_etusivulle': 'Palaa etusivulle',
      'lataa.virhe': 'Virheellinen latauslinkki.',
      'osien-valinta.arvio_ladattu': '{{luotuaika}} luotu arviointisi on nyt ladattu. Voit jatkaa arviointiasi ja tallentaa uuden arvion.',
      'osien-valinta.arvio_ladattu_otsikko': 'Arvio on ladattu',
      'osien-valinta.arvioita_on': 'Valituille osille löytyy arvioita',
      'osien-valinta.eteenpain': 'Eteenpäin',
      'osien-valinta.katso-ohje': 'Katso tutkinnon perusteista tai selvitä yhdessä oppilaitoksen tai oppisopimustoimipisteen kanssa mitkä tutkinnon osat voit valita, jos tavoitteenasi on koko tutkinnon suorittaminen.',
      'osien-valinta.pakolliset_osat': 'Pakolliset osat',
      'osien-valinta.tyhjenna_arviot': 'Tyhjennä arviot',
      'osien-valinta.tyhjenna_arviot_otsikko': 'Haluatko varmasti tyhjentää jo annetut arviot?',
      'osien-valinta.tyhjenna_arviot_varoitus': 'Arvioita ei voi palauttaa.',
      'osien-valinta.tyhjenna-teksti': 'Jos haluat arvoida näiden osien osaamisesi uudestaan voit tyhjentää aiemmat arviosi',
      'osien-valinta.valinnaiset_osat': 'Valinnaiset osat',
      'osien-valinta.yhteiset_osat': 'Yhteiset osat',
      'raportti.ammattitaidon_kuvaus': 'Ammattitaidon kuvaus',
      'raportti.arvio': 'Arvio',
      'raportti.keskiarvot': 'Arviointien keskiarvot tutkinnon osittain',
      'raportti.kommentti': 'Kommentti',
      'raportti.lataa_tekstiraportti': 'Lataa tekstiraportti',
      'raportti.nayta_kommentit': 'Näytä kaikki kommentit',
      'raportti.otsikko_ohje': 'Tutkinto suoritetaan Opetushallituksen määräämien tutkinnon perusteiden mukaisesti. Tutkinnon perusteissa määritellään tutkintoon kuuluvat tutkinnon osat, tutkinnon muodostuminen, vaadittava ammattitaito, arvioinnin perusteet sekä ammattitaidon osoittamistavat. Tutkinnon perusteet näet osoitteesta http://eperusteet.opintopolku.fi/. Tutkinnon muodostumisesta lisätietoja antavat kyseistä tutkintoa järjestävät oppilaitokset sekä oppisopimustoimipisteet.',
      'raportti.paivays': 'Päiväys',
      'raportti.pakolliset': 'Pakolliset',
      'raportti.tyyppi_tekstiraportti': 'Tekstiraportti',
      'raportti.valinnaiset': 'Valinnaiset',
      'raportti.valintojen_selitykset': 'Numeroiden selitykset:',
      'raportti.valittu': 'valittu',
      'raportti.vastausprosentit': 'Vastausprosentit',
      'raportti.tulostus': 'Tulostettu Opetushallituksen Osaan.fi-palvelusta.',
      'tallennus.kopioi_ohje': 'Valitse linkki ja kopioi se leikepöydälle painamalla:',
      'tallennus.laheta_sahkopostilla': 'Tai lähetä linkki sähköpostilla.',
      'tallennus.otsikko': 'Arvio tallennettu',
      'tallennus.sulje': 'Sulje',
      'tallennus.teksti': 'Vastauksesi on nyt tallennettu. Voit palata katsomaan, muuttamaan tai täydentämään sitä alla olevan linkin kautta.\n\nTallenna linkki itsellesi. Pääset arvioosi myöhemminkin kopioimalla tämän linkin selaimen osoiteriville. Vastauksesi tunnistetaan ohjelman arpoman koodin perusteella. Henkilötietoja ei kysytä. Jos muutat tai täydennät vastauksiasi, jokainen uusi tallennus luo uuden linkin. Myös aikaisemmat arviosi ovat käytettävissäsi aiemmin saadun linkin kautta. Vastauksia säilytetään kolmen vuoden ajan tallennushetkestä. Sen jälkeen ne poistetaan automaattisesti.\n\nJos olet sopinut esimerkiksi oppilaitoksen tai oppisopimustoimiston kanssa, että lähetät vastauksesi heille, voit lähettää tämän linkin.',
      'tutkinto.ei_loytynyt': 'Tutkintoja ei löytynyt',
      'tutkinto.eperusteet_linkki': 'Katso tutkinnon perusteet ePerusteet-järjestelmässä',
      'tutkinto.eperusteet_linkki_info': 'Tutkinnon perusteasiakirjasta näet, mistä pakollisista ja valinnaisista tutkinnon osista tutkinto muodostuu sekä tarkempaa tietoa tutkinnosta ja sen vaatimuksista.',
      'tutkinto.koulutustarjonta_linkki': 'Katso koulutuksen järjestäjät',
      'tutkinto.koulutustarjonta_linkki_info': 'Tahot, jotka järjestävät ammatillista peruskoulutusta tähän tutkintoon. Ammatillinen peruskoulutus on erityisesti nuorille suunniteltu tutkinnon suorittamistapa.',
      'tutkinto.nayttotutkinnonjarjestajat_linkki': 'Katso näyttötutkinnon järjestäjät',
      'tutkinto.nayttotutkinnonjarjestajat_linkki_info': 'Tahot, jotka järjestävät tätä tutkintoa näyttötutkintona. Näyttötutkinto on erityisesti aikuisille suunniteltu tutkinnon suorittamistapa.',
      'tutkinto.otsikko': 'Aloita etsimällä ja valitsemalla haluamasi tutkinto',
      'tutkinto.peruste_tyyppi_naytto': 'Näyttötutkinto',
      'tutkinto.peruste_tyyppi_ops': 'Peruskoulutus',
      'tutkinto.tyyppi': 'Tutkintotyyppi',
      'tutkinto.tyyppi_ammattitutkinto': 'Ammattitutkinto',
      'tutkinto.tyyppi_erikoisammattitutkinto': 'Erikoisammattitutkinto',
      'tutkinto.tyyppi_kaikki': 'Kaikki',
      'tutkinto.tyyppi_perustutkinto': 'Perustutkinto',
      'tutkinto.voimaantulevat': 'Näytä myös tutkinnot, joiden tutkinnon perusteet ovat tulossa voimaan.',
      'tutkinto_osa.valitse': 'Valitse tutkinnon osat jotka haluat arvioida',
      'varmistus.peruuta': 'Peruuta',
      'vastaukset-muistissa': 'Vastauksesi ovat muistissa siihen asti kun lopetat palvelun käytön. Jos haluat tallentaa tähän tutkintoon tekemäsi arvion, valitse Tallenna arviot.',
      'yleiset.arvioi_osaaminen': 'Arvioi osaaminen',
      'yleiset.hakutulosta': 'hakutulosta',
      'yleiset.kielen_vaihto': 'På svenska',
      'yleiset.raportti': 'Raportti',
      'yleiset.sivun_loppuun': 'Sivun loppuun',
      'yleiset.tallenna': 'Tallenna arviot',
      'yleiset.valitse_tutkinnon_osat': 'Valitse tutkinnon osat',
      'yleiset.valitse_tutkinto': 'Valitse tutkinto'
    },
    sv: {
      'arviointi.arvioi_osaamisesi': 'Arvioi osaamisesi (sv)',
      'arviointi.arvioita_puuttuu': 'Et ole antanut arvioita kaikista ammattitaidoista! (sv)',
      'arviointi.arvioitu': 'Arvioitu (sv)',
      'arviointi.asteikko1': 'En osaa (sv)',
      'arviointi.asteikko2': 'Osaan vähän (sv)',
      'arviointi.asteikko3': 'Osaan hyvin (sv)',
      'arviointi.asteikko4': 'Osaan erinomaisesti (sv)',
      'arviointi.ei_kohteita': 'Inga föremål för bedömningen finns för närvarande.',
      'arviointi.eos': 'En osaa sanoa (sv)',
      'arviointi.miten': 'Miten seuraavat väittämät kuvaavat osaamistasi? (sv)',
      'arviointi.raportti': 'Näytä raportti (sv)',
      'arviointi.tekstivastaus': 'Tekstivastaus (sv)',
      'arviointi.tekstivastaus_placeholder': 'Kirjoita vastauksesi tähän (sv)',
      'etusivu.jagkan': 'jagkan.fi',
      'etusivu.opintoala': 'Ala (sv)',
      'etusivu.otsikko': 'Osaamisen tunnistaminen (sv)',
      'etusivu.teksti': 'Voit arvioida osaamistasi valitsemassasi ammatillisessa perustutkinnossa, ammattitutkinnossa tai erikoisammattitutkinnossa.\n\nArviointi tehdään tutkinnoissa edellytettyjen ammattitaitovaatimusten perusteella, jotka on laadittu yhteistyössä työelämän kanssa. Tutkinnon suorittamisessa huomioidaan aiempi osaamisesi, joka voi olla hankittu esimerkiksi työssä, opinnoissa tai muussa toiminnassa. Kun hakeudut suorittamaan tutkintoa, oppilaitos selvittää aiemman osaamisesi. Jos olet kiinnostunut suorittamaan tutkinnon, ole yhteydessä näyttötutkinnon tai koulutuksen järjestäjiin, jotka näet linkkien kautta.\n\nEn fristående examen är ett sätt att avlägga en examen som är speciellt planerat med tanke på vuxna. Grundläggande yrkesutbildning är speciellt planerad med tanke på unga. (sv)',
      'etusivu.tutkinnon_nimi': 'Tutkinnon nimi (sv)',
      'etusivu.tutkinnon_nimi_placeholder': 'Kirjoita tutkinnon nimi tai nimen osa (sv)',
      'footer.ohje': 'Ammattitaitovaatimukset perustuvat voimassa oleviin tutkinnon perusteisiin. Tarkempia tietoja tutkinnon suorittamisesta ja koulutukseen hakeutumisesta löydät oppilaitosten sivuilta ja (sv)',
      'footer.ohje_url': 'https://opintopolku.fi/wp/sv/stod-for-studievalet/radgivning-och-handledning/',
      'footer.ohje_url_title': 'Opintopolku.fi-palvelusta. (sv)',
      'footer.ota_yhteytta': 'Osaan.fi-palvelun käyttöä koskevan palautteen voi lähettää sähköpostilla osoitteeseen (sv)',
      'footer.ota_yhteytta_email': 'aitu-tuki@oph.fi',
      'footer.otsikko': 'Palvelun tarjoaa Opetushallitus (sv)',
      'footer.rekisteriseloste': 'Palvelua voi käyttää anonyymisti. (sv)',
      'footer.rekisteriseloste_url': 'img/Registerbeskrivning_Jagkan_14_22_2015.pdf',
      'footer.rekisteriseloste_url_title': 'Rekisteriseloste (sv)',
      'http-virhe.ei_yhteytta': 'Palvelimeen ei juuri nyt saada yhteyttä. Palvelu yrittää automaattisesti uudelleen hetken kuluttua. (sv)',
      'http-virhe.virhe': 'Palvelimella tapahtui virhe. (sv)',
      'http-virhe.yrita_uudelleen': 'Yritä ladata sivu uudelleen. (sv)',
      'lataa.palaa_etusivulle': 'Palaa etusivulle (sv)',
      'lataa.virhe': 'Virheellinen latauslinkki. (sv)',
      'osien-valinta.arvio_ladattu': '{{luotuaika}} luotu arviointisi on nyt ladattu. Voit jatkaa arviointiasi ja tallentaa uuden arvion. (sv)',
      'osien-valinta.arvio_ladattu_otsikko': 'Arvio on ladattu (sv)',
      'osien-valinta.arvioita_on': 'Valituille osille löytyy arvioita (sv)',
      'osien-valinta.eteenpain': 'Eteenpäin (sv)',
      'osien-valinta.katso-ohje': 'Se i examensgrunderna eller utred tillsammans med läroanstalten eller läroavtalsbyrån vilka examensdelar du kan välja, om du har för avsikt att avlägga en hel examen.',
      'osien-valinta.pakolliset_osat': 'Pakolliset osat (sv)',
      'osien-valinta.tyhjenna_arviot': 'Tyhjennä arviot (sv)',
      'osien-valinta.tyhjenna_arviot_otsikko': 'Haluatko varmasti tyhjentää jo annetut arviot? (sv)',
      'osien-valinta.tyhjenna_arviot_varoitus': 'Arvioita ei voi palauttaa. (sv)',
      'osien-valinta.tyhjenna-teksti': 'Jos haluat arvoida näiden osien osaamisesi uudestaan voit tyhjentää aiemmat arviosi (sv)',
      'osien-valinta.valinnaiset_osat': 'Valinnaiset osat (sv)',
      'osien-valinta.yhteiset_osat': 'Yhteiset osat (sv)',
      'raportti.ammattitaidon_kuvaus': 'Ammattitaidon kuvaus (sv)',
      'raportti.arvio': 'Arvio (sv)',
      'raportti.keskiarvot': 'Medeltal för bedömningen enligt examensdelar.',
      'raportti.kommentti': 'Kommentti (sv)',
      'raportti.lataa_tekstiraportti': 'Lataa tekstiraportti (sv)',
      'raportti.nayta_kommentit': 'Näytä kaikki kommentit (sv)',
      'raportti.otsikko_ohje': 'Examen avläggs enligt de examensgrunder som fastställts av Utbildningsstyrelsen. I grunderna för examen definieras examensdelarna, uppbyggnaden av examen, kraven på yrkesskicklighet, bedömningsgrunderna och sätten att påvisa sina yrkeskunskaper. Examensgrunderna hittar du via adressen egrunder.studieinfo.fi. Mer info om uppbyggnaden av en viss examen får du från de läroanstalter och läroavtalsbyråer som anordnar examen.',
      'raportti.paivays': 'Päiväys (sv)',
      'raportti.pakolliset': 'Pakolliset (sv)',
      'raportti.tyyppi_tekstiraportti': 'Tekstiraportti (sv)',
      'raportti.valinnaiset': 'Valinnaiset (sv)',
      'raportti.valintojen_selitykset': 'Numeroiden selitykset: (sv)',
      'raportti.valittu': 'valittu (sv)',
      'raportti.vastausprosentit': 'Vastausprosentit (sv)',
      'raportti.tulostus': 'Utskrift från Utbildningsstyrelsens Jagkan.fi-tjänst.',
      'tallennus.kopioi_ohje': 'Valitse linkki ja kopioi se leikepöydälle painamalla: (sv)',
      'tallennus.laheta_sahkopostilla': 'Tai lähetä linkki sähköpostilla. (sv)',
      'tallennus.otsikko': 'Arvio tallennettu',
      'tallennus.sulje': 'Sulje',
      'tallennus.teksti': 'Vastauksesi on nyt tallennettu. Voit palata katsomaan, muuttamaan tai täydentämään sitä alla olevan linkin kautta.\n\nTallenna linkki itsellesi. Pääset arvioosi myöhemminkin kopioimalla tämän linkin selaimen osoiteriville. Vastauksesi tunnistetaan ohjelman arpoman koodin perusteella. Henkilötietoja ei kysytä. Jos muutat tai täydennät vastauksiasi, jokainen uusi tallennus luo uuden linkin. Myös aikaisemmat arviosi ovat käytettävissäsi aiemmin saadun linkin kautta. Vastauksia säilytetään kolmen vuoden ajan tallennushetkestä. Sen jälkeen ne poistetaan automaattisesti.\n\nJos olet sopinut esimerkiksi oppilaitoksen tai oppisopimustoimiston kanssa, että lähetät vastauksesi heille, voit lähettää tämän linkin. (sv)',
      'tutkinto.ei_loytynyt': 'Tutkintoja ei löytynyt (sv)',
      'tutkinto.eperusteet_linkki': 'Katso tutkinnon perusteet ePerusteet-järjestelmässä (sv)',
      'tutkinto.eperusteet_linkki_info': 'Tutkinnon perusteasiakirjasta näet, mistä pakollisista ja valinnaisista tutkinnon osista tutkinto muodostuu sekä tarkempaa tietoa tutkinnosta ja sen vaatimuksista. (sv)',
      'tutkinto.koulutustarjonta_linkki': 'Katso koulutuksen järjestäjät (sv)',
      'tutkinto.koulutustarjonta_linkki_info': 'Tahot, jotka järjestävät ammatillista peruskoulutusta tähän tutkintoon. Ammatillinen peruskoulutus on erityisesti nuorille suunniteltu tutkinnon suorittamistapa. (sv)',
      'tutkinto.nayttotutkinnonjarjestajat_linkki': 'Katso näyttötutkinnon järjestäjät (sv)',
      'tutkinto.nayttotutkinnonjarjestajat_linkki_info': 'Tahot, jotka järjestävät tätä tutkintoa näyttötutkintona. Näyttötutkinto on erityisesti aikuisille suunniteltu tutkinnon suorittamistapa. (sv)',
      'tutkinto.otsikko': 'Aloita etsimällä ja valitsemalla haluamasi tutkinto (sv)',
      'tutkinto.peruste_tyyppi_naytto': 'Näyttötutkinto (sv)',
      'tutkinto.peruste_tyyppi_ops': 'Peruskoulutus (sv)',
      'tutkinto.tyyppi': 'Tutkintotyyppi (sv)',
      'tutkinto.tyyppi_ammattitutkinto': 'Ammattitutkinto (sv)',
      'tutkinto.tyyppi_erikoisammattitutkinto': 'Erikoisammattitutkinto (sv)',
      'tutkinto.tyyppi_kaikki': 'Kaikki (sv)',
      'tutkinto.tyyppi_perustutkinto': 'Perustutkinto (sv)',
      'tutkinto.voimaantulevat': 'Visa också de examina vars examensgrunder kommer att träda i kraft.',
      'tutkinto_osa.valitse': 'Valitse tutkinnon osat jotka haluat arvioida (sv)',
      'varmistus.peruuta': 'Peruuta (sv)',
      'vastaukset-muistissa': 'Dina svar finns lagrade så länge du använder servicen. Om du vill spara din bedömning inom denna examen, välj Spara bedömningen.',
      'yleiset.arvioi_osaaminen': 'Arvioi osaaminen (sv)',
      'yleiset.hakutulosta': 'hakutulosta (sv)',
      'yleiset.kielen_vaihto': 'Suomeksi',
      'yleiset.raportti': 'Raportti (sv)',
      'yleiset.sivun_loppuun': 'Sivun loppuun (sv)',
      'yleiset.tallenna': 'Tallenna arviot (sv)',
      'yleiset.valitse_tutkinnon_osat': 'Valitse tutkinnon osat (sv)',
      'yleiset.valitse_tutkinto': 'Valitse tutkinto (sv)'
    }
  })

  .config(['$translateProvider', 'tekstit', function ($translateProvider, tekstit) {
    $translateProvider.translations('fi', tekstit.fi);
    $translateProvider.translations('sv', tekstit.sv);

    $translateProvider.use(localStorage.getItem('kieli') || 'fi');
  }])

  .factory('kieli', [function () {
    return localStorage.getItem('kieli') || 'fi';
  }])
;
