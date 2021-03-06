set session osaan.kayttaja='JARJESTELMA';

insert into kayttaja(oid, etunimi, sukunimi, voimassa, muutettuaika, luotuaika, luotu_kayttaja, muutettu_kayttaja)
values ('SAMPO', 'Seppo', 'Ilmarinen', true, current_timestamp, current_timestamp, 'JARJESTELMA', 'JARJESTELMA');

insert into koulutusala(koulutusalatunnus, nimi_fi,nimi_sv, voimassa_alkupvm) values ('6', 'Kulttuuriala', 'Kultur', to_date('1997-01-01', 'YYYY-MM-DD'));
insert into opintoala (opintoalatunnus, koulutusala, nimi_fi, nimi_sv, voimassa_alkupvm)
 values ('202', '6', 'Viestintä ja informaatiotieteet', 'Mediekultur och informationsvetenskaper', to_date('1997-01-01', 'YYYY-MM-DD')),
        ('201', '6', 'Käsi- ja taideteollisuus', 'Hantverk och konstindustri', to_date('1997-01-01', 'YYYY-MM-DD'));

 insert into tutkinto(tutkintotunnus, opintoala, nimi_fi, nimi_sv, voimassa_alkupvm, tutkintotaso)
   values 
    ('324601', '202', 'Audiovisuaalisen viestinnän perustutkinto', 'Audiovisuaalisen viestinnän perustutkinto (sv)', to_date('1997-01-01', 'YYYY-MM-DD'), 'ammattitutkinto'),
    ('327128', '201', 'Käsityömestarin erikoisammattitutkinto', 'Käsityömestarin erikoisammattitutkinto (sv)', to_date('1997-01-01', 'YYYY-MM-DD'), 'erikoisammattitutkinto'),
    ('987654', '202', 'Tekoälymasentajan keksitty tutkinto', 'Tekoälymasentajan keksitty tutkinto (sv)', to_date('2050-01-01', 'YYYY-MM-DD'), 'erikoisammattitutkinto');

insert into tutkintonimike(nimiketunnus, nimi_fi, nimi_sv)
   values ('10092', 'Media-assistentti', 'Medieassistent');

insert into peruste (diaarinumero, voimassa_alkupvm, tutkinto, tyyppi, eperustetunnus, peruste_id)
 values
   ('41/011/2005', to_date('2005-01-01', 'YYYY-MM-DD'), '324601', 'ops', 611, -1),
   ('38/011/2014', to_date('2005-01-01', 'YYYY-MM-DD'), '324601', 'naytto', 611, -2),
   ('34/011/2010', to_date('2005-01-01', 'YYYY-MM-DD'), '327128', 'naytto', 986531, -3),
   ('01/011/2040', to_date('2040-01-01', 'YYYY-MM-DD'), '987654', 'naytto', 999999, -4);

insert into peruste_ja_tutkintonimike (peruste, tutkintonimike)
  values
    (-1, '10092'),
    (-2, '10092');

insert into tutkinnonosa(osatunnus, nimi_fi, nimi_sv) values
  ('100001','Audiovisuaalinen tuotanto', 'Audiovisuaalinen tuotanto (sv)'),
  ('100002','Video- ja elokuvatuotanto', 'Video- ja elokuvatuotanto (sv)'),
  ('100003','Televisiotuotanto', 'Televisiotuotanto (sv)');

insert into tutkinnonosa_ja_peruste(osa, peruste, jarjestys, tyyppi)
values ('100001', (select peruste_id from peruste where diaarinumero = '41/011/2005'), 1, 'pakollinen'),
 ('100002', (select peruste_id from peruste where diaarinumero = '41/011/2005'), 2, 'pakollinen'),
 ('100003', (select peruste_id from peruste where diaarinumero = '41/011/2005'), 3, 'pakollinen');

insert into arvioinnin_kohdealue(arvioinninkohdealue_id, osa, nimi_fi, nimi_sv, jarjestys)
 values
   (-1, '100001', '1. Työprosessin hallinta', 'Behärskande av arbetsprocessen', 1),
   (-2, '100001', '2. Työmenetelmien, -välineiden ja materiaalin hallinta', 'Behärskande av arbetsmetoder, -redskap och material', 2);

insert into ammattitaidon_kuvaus(ammattitaidonkuvaus_id, arvioinninkohdealue, nimi_fi, nimi_sv, jarjestys)
  values
    (-1, -1, 'Esituotanto','Förproduktion', 1),
    (-2, -1, 'Tuotanto', 'Produktion', 2), 
    (-3, -1, 'Jälkituotanto', 'Efterproduktion', 3),
    (-4, -2, 'Oman työn suunnittelu', 'Planering av det egna arbetet', 1),
    (-5, -2, 'Aineiston tuottaminen', 'Produktion av material', 2);

insert into osaamisala (osaamisalatunnus, nimi_fi, nimi_sv) values ('2002', 'Kuvauksen ja valaisun osaamisala', '');
insert into osaamisala (osaamisalatunnus, nimi_fi, nimi_sv) values ('2003', 'Mediatyön osaamisala', '');

insert into osaamisala_ja_peruste (osaamisala, peruste) values ('2002', -2), ('2003', -2);
insert into tutkinnonosa_ja_osaamisala_ja_peruste (osa, osaamisala, peruste, jarjestys, tyyppi) values ('100001', '2002', -2, 1, 'pakollinen');
insert into tutkinnonosa_ja_osaamisala_ja_peruste (osa, osaamisala, peruste, jarjestys, tyyppi) values ('100002', '2002', -2, 2, 'valinnainen');
insert into tutkinnonosa_ja_osaamisala_ja_peruste (osa, osaamisala, peruste, jarjestys, tyyppi) values ('100002', '2003', -2, 1, 'pakollinen');
insert into tutkinnonosa_ja_osaamisala_ja_peruste (osa, osaamisala, peruste, jarjestys, tyyppi) values ('100001', '2003', -2, 2, 'valinnainen');
insert into tutkinnonosa_ja_osaamisala_ja_peruste (osa, osaamisala, peruste, jarjestys, tyyppi) values ('100003', '2003', -2, 3, 'valinnainen');

insert into arvio (tunniste, peruste) values ('testiarvio', (select peruste_id from peruste where diaarinumero = '41/011/2005'));
insert into arvio_tutkinnonosa (arviotunnus, osa)  values ('testiarvio', '100001');
insert into kohdearvio (arviotunnus, ammattitaidon_kuvaus, arvio, kommentti)
  values
    ('testiarvio', -1, 1, null),
    ('testiarvio', -2, 3, null),
    ('testiarvio', -3, 3, null),
    ('testiarvio', -4, 4, null),
    ('testiarvio', -5, null, 'En täysin ymmärtänyt miten eri osaamistasot tässä osa-alueessa tulisi arvioida.');
