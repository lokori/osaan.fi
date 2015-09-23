Osaan.fi 
========

Osaan.fi palvelun uudistettu versio. 

# Lähdekoodin haku

## Osaan.fi

Hae tämän projektin lähdekoodi esimerkiksi hakemistoon `osaan.fi`.

## Clojure-utils

Hae tämän projektin rinnalle projekti [clojure-utils](https://github.com/Opetushallitus/clojure-utils). Muiden Opetushallituksen Clojure-projektien kanssa yhteistä koodia käytetään tällä hetkellä suhteellisella hakemistoviitteellä.

# Paikallinen ympäristö sovelluksen ajoon

Seuraavilla askelilla sovellus voidaan käynnistää paikallisella Unix-koneella.

1. Kehitystyötä varten tarvittavat ohjelmat
  - Java SE JDK
  - [NodeJS](https://nodejs.org/)
  - [Vagrant](https://www.vagrantup.com/)
  - [VirtualBox](https://www.virtualbox.org/)
  - [Ansible](http://www.ansible.com/)
      - [asennusohjeet](http://docs.ansible.com/ansible/intro_installation.html)
      - Ansible on saatavilla vain Unix-koneille
2. Tietokannan pystyttäminen

  ```
  dev-scripts/init-db.sh
  ```
3. Sovelluspalvelimen pystyttäminen ja sovelluksen asentaminen

  ```
  dev-scripts/init-app.sh
  ```
4. Sovellus löytyy osoitteesta http://192.168.50.72/osaan/
