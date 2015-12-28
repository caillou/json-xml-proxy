var MockData = function() {};

MockData.prototype.endpoints = {
  'getRequestSystemList': {
    'get': {
      'data': `<?xml version="1.0" encoding="UTF-8"?>
<Api>
	<ApiCms cmsCommand="getRequestSystemList" Standard="">
		<RequestSystemList>
			<RequestSystem RequestSystem="NEWSNT-DEV" RequestSystemName="NewsNT Entwicklungssystem" Standard="true"/>
			<RequestSystem RequestSystem="NEWSNT-STAGE"  RequestSystemName="NewsNT Stagesystem" Standard="false"/>
			<RequestSystem RequestSystem="NEWSNT-PROD" RequestSystemName="NewsNT Produktionssystem" Standard="false"/>
			<RequestSystem RequestSystem="WW-DEV" RequestSystemName="WoodWing Entwicklungssystem" Standard="false"/>
			<RequestSystem RequestSystem="WW-STAGE" RequestSystemName="WoodWing Stagesystem" Standard="false"/>
			<RequestSystem RequestSystem="WW-PROD" RequestSystemName="WoodWing Produktionssystem" Standard="false"/>
			<RequestSystem RequestSystem="huGO-DEV" RequestSystemName="huGO-Enterprise Entwicklungssystem" Standard="false"/>
			<RequestSystem RequestSystem="huGO-STAGE" RequestSystemName="huGO-Enterprise Stagesystem" Standard="false"/>
			<RequestSystem RequestSystem="huGO-RPROD" RequestSystemName="huGO-Enterprise Produktionssystem" Standard="false"/>
		</RequestSystemList>
	</ApiCms>
</Api>
`
    }
  },

  'getPublicationList': {
    'get': {
      'data': `<?xml version="1.0" encoding="UTF-8"?>
<Api>
	<ApiCms cmsCommand="getPublicationList" Standard="">
		<PublicationsList>
			<Publication Publikation="inzz" PublikationName="NZZ Inter.Offenbach" Standard="false"/>
			<Publication Publikation="nzz"  PublikationName="Neue Zürcher Zeitung" Standard="true"/>
			<Publication Publikation="nzzs" PublikationName="NZZ am Sonntag" Standard="false"/>
			<Publication Publikation="gese" PublikationName="NZZaS Gesellschaft" Standard="false"/>
			<Publication Publikation="stil" PublikationName="NZZaS Stil-Magazin" Standard="false"/>
			<Publication Publikation="gese" PublikationName="NZZaS Z-Magazin" Standard="false"/>
		</PublicationsList>
	</ApiCms>
</Api>
`
    }
  },

  'getPublicationDays': {
    'get': {
      'data': `<?xml version="1.0" encoding="UTF-8"?>
<Api>
	<ApiCms cmsCommand="getPublicationDays" Publikation="nzz" VonDatum="17.12.2015" BisDatum="24.12.2015">
		<PublicationDaysList>
			<PublicationDay Publikation="nzz" Erscheinungstag="17.12.2015" AktuellerET="false"/>
			<PublicationDay Publikation="nzz" Erscheinungstag="18.12.2015" AktuellerET="true"/>
			<PublicationDay Publikation="nzz" Erscheinungstag="19.12.2015" AktuellerET="false"/>
			<PublicationDay Publikation="nzz" Erscheinungstag="21.12.2015" AktuellerET="false"/>
			<PublicationDay Publikation="nzz" Erscheinungstag="22.12.2015" AktuellerET="false"/>
			<PublicationDay Publikation="nzz" Erscheinungstag="23.12.2015" AktuellerET="false"/>
			<PublicationDay Publikation="nzz" Erscheinungstag="24.12.2015" AktuellerET="false"/>
		</PublicationDaysList>
	</ApiCms>
</Api>
`
    }
  },

  'getDepartmentList': {
    'get': {
      'data': `<?xml version="1.0" encoding="UTF-8"?>
<Api>
	<ApiCms cmsCommand="getDepartmentList" Publikation="nzz" RessortgruppeZugehoerigkeit="" RessortKurz="">
		<DepartmentsList>
			<Department Publikation="nzz" Ressortgruppe="true"  RessortgruppeZugehoerigkeit=""   Ressortkurz="AL" RessortLang="INTERNATIONAL"/>
			<Department Publikation="nzz" Ressortgruppe="false" RessortgruppeZugehoerigkeit="AL" Ressortkurz="fp" RessortLang="Front"/>
			<Department Publikation="nzz" Ressortgruppe="false" RessortgruppeZugehoerigkeit="AL" Ressortkurz="al" RessortLang="International"/>
			<Department Publikation="nzz" Ressortgruppe="true"  RessortgruppeZugehoerigkeit=""   Ressortkurz="SP" RessortLang="SPORT"/>
			<Department Publikation="nzz" Ressortgruppe="false" RessortgruppeZugehoerigkeit="SP" Ressortkurz="sp" RessortLang="Sport"/>
			<Department Publikation="nzz" Ressortgruppe="false" RessortgruppeZugehoerigkeit="SP" Ressortkurz="os" RessortLang="Olympische Sommerspiele"/>
			<Department Publikation="nzz" Ressortgruppe="false" RessortgruppeZugehoerigkeit="SP" Ressortkurz="ow" RessortLang="Olympische Winterspiele"/>
			<Department Publikation="nzz" Ressortgruppe="false" RessortgruppeZugehoerigkeit=""   Ressortkurz="xx" RessortLang="Einmaliges"/>
			<Department Publikation="nzz" Ressortgruppe="false" RessortgruppeZugehoerigkeit=""   Ressortkurz="un" RessortLang="Unbekannte Meldung"/>
		</DepartmentsList>
	</ApiCms>
</Api>
`
    }
  },

  'getTemplateList': {
    'get': {
      'data': `<?xml version="1.0" encoding="UTF-8"?>
<Api>
	<ApiCms cmsCommand="getTemplateList" Publikation="nzz" Ressort="" Spalten="" Dateiname="">
		<TemplatesList>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="4.0" Stichwort="Art. A 4sp" Dateiname="MPUEZ"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="5.0" Stichwort="Art. A 5sp" Dateiname="MPUF0"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="2.0" Stichwort="Art. B 2sp" Dateiname="MPUF3"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="3.0" Stichwort="Art. B 3sp" Dateiname="MPUF4"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="4.0" Stichwort="Art. B 4sp" Dateiname="MPUF5"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="5.0" Stichwort="Art. B 5sp" Dateiname="MPUF6"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="2.0" Stichwort="Art. C 2sp" Dateiname="MPUFB"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="3.0" Stichwort="Art. C 3sp" Dateiname="MPUFC"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="4.0" Stichwort="Art. C 4sp" Dateiname="MPUFD"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="5.0" Stichwort="Art. C 5sp" Dateiname="MPUFE"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="" Spalten="1.0" Stichwort="Art. D 1sp" Dateiname="MPUFJ"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KOMM" Schluessel="210" Spalten="2.0" Stichwort="Ressortkom 2sp/1Z" Dateiname="MRC5V"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KOMM" Schluessel="211" Spalten="2.0" Stichwort="Ressortkom 2sp/2Z" Dateiname="MRC5W"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="205" Spalten="1.0" Stichwort="Kat.D - OnlVerw 1z" Dateiname="MRCKI"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="212" Spalten="1.0" Stichwort="Kat.C - OnlVerweis" Dateiname="MRCKJ"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="213" Spalten="1.0" Stichwort="Kat.B - OnlVerweis" Dateiname="MRCKK"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="1.0" Stichwort="Kopf_Reklame" Dateiname="MRFRX"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KAST" Schluessel="130" Spalten="1.0" Stichwort="Servicebox 1sp" Dateiname="MRKX3"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="CHAPE" Schluessel="135" Spalten="5.0" Stichwort="Chapeau" Dateiname="MRM00"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="INHA" Schluessel="221" Spalten="1.0" Stichwort="Skybox links" Dateiname="MRUOO"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="INHA" Schluessel="222" Spalten="1.0" Stichwort="Skybox rechts" Dateiname="MRVDM"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="1.0" Stichwort="Kopf In Kürze 1sp" Dateiname="MRCGQ"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="INTE" Schluessel="" Spalten="3.0" Stichwort="Interview" Dateiname="MSBA7"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KOMM" Schluessel="225" Spalten="4.0" Stichwort="schaufenster" Dateiname="MSQ47"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KURZ" Schluessel="" Spalten="1.0" Stichwort="Art. Kurzmeldungen" Dateiname="MRCGR"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="1.0" Stichwort="Kopf Rez.Bücher" Dateiname="MT2JM"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KOLU" Schluessel="" Spalten="1.0" Stichwort="KOLU allg." Dateiname="MT2WL"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KOLU" Schluessel="" Spalten="1.0" Stichwort="KOLU 1spaltig Bild" Dateiname="MT2X1"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="1.0" Stichwort="Kopf Kino in Kürze" Dateiname="MT5YL"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KOMM" Schluessel="209" Spalten="1.0" Stichwort="Ressortkommentar 1sp" Dateiname="MRC5U"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="ZUSA" Schluessel="200" Spalten="1.0" Stichwort="Zusatztext 1sp+Form" Dateiname="MRCDW"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="ZUSA" Schluessel="200" Spalten="2.0" Stichwort="Zusatztext 2sp+Form" Dateiname="MRCDX"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="215" Spalten="1.0" Stichwort="Kat.B1 - Zeit.Verw1z" Dateiname="MRCKM"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="216" Spalten="1.0" Stichwort="Kat.B2 - Zeit.Verw1z" Dateiname="MRCKN"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="217" Spalten="1.0" Stichwort="Kat.A1- Zeit.Verw1z" Dateiname="MRCKO"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="218" Spalten="1.0" Stichwort="Kat.A2 - Zeit.Verw1z" Dateiname="MRCKP"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="" Schluessel="219" Spalten="3.0" Stichwort="Art. Kat. c1 m.Serie" Dateiname="MRCM5"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="220" Spalten="1.0" Stichwort="Verweis Serie" Dateiname="MRCM6"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KAST" Schluessel="131" Spalten="2.0" Stichwort="Servicebox 2sp" Dateiname="MRKX2"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KAST" Schluessel="132" Spalten="3.0" Stichwort="Servicebox 3sp" Dateiname="MRLBO"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="ZITAT" Schluessel="203" Spalten="1.0" Stichwort="Zitat allg. Name" Dateiname="MS21P"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="ZITAT" Schluessel="204" Spalten="1.0" Stichwort="Zitat allg. no name" Dateiname="MS22G"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="250" Spalten="1.0" Stichwort="Portraitbild  1 Foto" Dateiname="MSUGL"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="251" Spalten="1.0" Stichwort="Portraitbild  2 Foto" Dateiname="MSVYU"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="252" Spalten="1.0" Stichwort="Buchinfo Bild" Dateiname="MSW8J"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="253" Spalten="1.0" Stichwort="Buchinfo m. Einzug" Dateiname="MSWLB"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="254" Spalten="1.0" Stichwort="Lesez. Bild Ti1Zeile" Dateiname="MSXGE"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="255" Spalten="1.0" Stichwort="Lesez. Bild Ti2Zeile" Dateiname="MSXOO"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="256" Spalten="1.0" Stichwort="Lesezeichen" Dateiname="MSXQA"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KURZ" Schluessel="" Spalten="1.0" Stichwort="Rezensionen" Dateiname="MT2JO"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="1.0" Stichwort="Kopf Rez.Austellung" Dateiname="MT2US"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KURZ" Schluessel="" Spalten="1.0" Stichwort="Kino Wertung" Dateiname="MT4SP"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="GEDI" Schluessel="260" Spalten="1.0" Stichwort="Gedicht          1sp" Dateiname="MTK8M"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="ZITAT" Schluessel="310" Spalten="1.0" Stichwort="Zitat_WE      5.BUND" Dateiname="MU2ON"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="5.0" Stichwort="SeitKopf li 5sp" Dateiname="MUMUS"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="5.0" Stichwort="SeitKopf re 5sp" Dateiname="MUMUT"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="272" Spalten="2.0" Stichwort="Bildartikel  4/2sp" Dateiname="MV78W"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="273" Spalten="3.0" Stichwort="Bildartikel  4/3sp" Dateiname="MV7GL"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="274" Spalten="4.0" Stichwort="Bildartikel  4/4sp" Dateiname="MV7IB"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="275" Spalten="1.0" Stichwort="Bild  4/1sp gestürzt" Dateiname="MV7K6"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="277" Spalten="1.0" Stichwort="Bildartikel  4/1sp" Dateiname="MWS36"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="5.0" Stichwort="SeitKopf li 5sp INZZ" Dateiname="MYEE6"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="KÖPF" Schluessel="" Spalten="5.0" Stichwort="SeitKopf re 5sp INZZ" Dateiname="MYEFP"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="ZUSA" Schluessel="200" Spalten="3.0" Stichwort="Zusatztext 3sp+Form" Dateiname="MRCDY"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="HINW" Schluessel="214" Spalten="1.0" Stichwort="Kat.A - OnlVerweis" Dateiname="MRCKL"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="267" Spalten="2.0" Stichwort="Bildartikel  5/2sp" Dateiname="MQ8AU"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="268" Spalten="3.0" Stichwort="Bildartikel  5/3sp" Dateiname="MQ8AV"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="269" Spalten="4.0" Stichwort="Bildartikel  5/4sp" Dateiname="MQ8AW"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="105" Spalten="5.0" Stichwort="Fototableau" Dateiname="MRE0E"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="106" Spalten="3.0" Stichwort="Bildkasten Front" Dateiname="MRMND"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="103" Spalten="1.0" Stichwort="Bildartikel  5/1sp" Dateiname="MWRJA"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="108" Spalten="1.0" Stichwort="Infografik  5/1sp" Dateiname="MWSAG"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="109" Spalten="2.0" Stichwort="Infografik  5/2sp" Dateiname="MWSEK"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="BILD" Schluessel="278" Spalten="3.0" Stichwort="Bildkasten innen" Dateiname="N194G"/>
			<Template Publikation="mfne" Ressort="mf" Gruppe="ZUSA" Schluessel="200" Spalten="4.0" Stichwort="Zusatztext 4sp+Form" Dateiname="N1FC5"/>
		</TemplatesList>
	</ApiCms>
</Api>
`
    }
  },

  'getLayoutList': {
    'get': {
      'data': `<?xml version="1.0" encoding="UTF-8"?>
<Api>
	<ApiCms cmsCommand="getLayoutList" Publikation="nzz" Erscheinungstag="15.01.2014" Seite="11" Ressort="" Dateiname="">
		<LayoutList>
			<Artikel Publikation="nzz" Erscheinungstag="15.01.2014" Seite="11" Ressort="vm" Gruppe="KAST" Spalten="1.0" Stichwort="Testkasten Matterhorn" Dateiname="M5DVT"/>
			<Artikel Publikation="nzz" Erscheinungstag="15.01.2014" Seite="11" Ressort="vm" Gruppe="SPIEL" Spalten="1.0" Stichwort="Spiel kakuro" Dateiname="M5DVX"/>
			<Artikel Publikation="nzz" Erscheinungstag="15.01.2014" Seite="11" Ressort="vm" Gruppe="AUFM" Spalten="3.0" Stichwort="Matterhorn" Dateiname="M5DVY"/>
			<Artikel Publikation="nzz" Erscheinungstag="15.01.2014" Seite="11" Ressort="vm" Gruppe="" Spalten="2.0" Stichwort="Merkel" Dateiname="M5DVZ"/>
		</LayoutList>
	</ApiCms>
</Api>
`
    }
  },

  'getPreview': {
    'post': {
      'data': ``
    }
  },

  'export': {
    'post': {
      'data': `<?xml version="1.0" encoding="UTF-8"?><Api><ApiCms Status="OK"></ApiCms></Api>`
    }
  }

};

module.exports = new MockData();