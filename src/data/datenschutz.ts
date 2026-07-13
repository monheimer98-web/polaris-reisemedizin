/**
 * Inhalte der Datenschutz-Seite (DE+EN).
 *
 * Aufbau wie bei den übrigen selbsttragenden Seiten: hier liegt ausschließlich
 * die redaktionelle, zweisprachige Rechtsprosa als `LegalSection[]`. Der
 * Verantwortliche (Name/Anschrift/Kontakt) wird erst in `DatenschutzContent.astro`
 * zentral aus `site.ts` eingesetzt. Die Online-Terminbuchung ist derzeit
 * deaktiviert; anbieterabhängig sind der Hosting-Anbieter
 * (`{hostingProvider}`/`{hostingProviderAddress}`) und der Kartendienst
 * (`{mapProvider}`), jeweils aufgelöst aus `site.ts` – analog zum
 * `{provider}`-Muster der Consent-Texte.
 *
 * Rechtsstand-Hinweise (2026): TMG → DDG (Mai 2024); TTDSG → TDDDG; Art. 9
 * Abs. 2 lit. h DSGVO i. V. m. § 22 BDSG für Gesundheitsdaten; § 203 StGB
 * (Schweigepflicht). Der Hosting-Anbieter wird zentral aus `site.hosting`
 * gespeist (`{hostingProvider}`/`{hostingProviderAddress}`); der US-Anbieter
 * (GitHub Pages) trägt den Drittland-/SCC-Hinweis im Hosting-Abschnitt.
 */
import type { Localized, LegalSection } from './types';

export interface DatenschutzPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  /** Stand der Erklärung (für die „Stand: …"-Zeile). */
  lastUpdated: Date;
  /** Überschrift + Einleitung des aus `site.ts` gespeisten Verantwortlichen-Blocks. */
  controllerHeading: Localized;
  controllerIntro: Localized;
  contactLabels: {
    phone: Localized;
    email: Localized;
  };
  /** Die übrigen Abschnitte (Rechtsgrundlagen, Hosting, Consent, Rechte …). */
  sections: LegalSection[];
  /** Abschluss-Hinweis (maßgebliche Sprachfassung). */
  closingNote: Localized;
}

export const datenschutzPage: DatenschutzPage = {
  meta: {
    title: {
      de: 'Datenschutzerklärung',
      en: 'Privacy policy',
    },
    description: {
      de: 'Datenschutzerklärung nach Art. 13/14 DSGVO: Verarbeitung personenbezogener Daten und Gesundheitsdaten, ärztliche Schweigepflicht und Ihre Rechte.',
      en: 'Privacy policy pursuant to Art. 13/14 GDPR: processing of personal and health data, medical confidentiality, retention periods and your rights.',
    },
    eyebrow: {
      de: 'Rechtliches',
      en: 'Legal',
    },
    lead: {
      de: 'Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO).',
      en: 'Information on the processing of your personal data pursuant to Articles 13 and 14 of the General Data Protection Regulation (GDPR).',
    },
  },
  lastUpdated: new Date('2026-06-12'),
  controllerHeading: {
    de: 'Verantwortlicher',
    en: 'Controller',
  },
  controllerIntro: {
    de: 'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO ist:',
    en: 'The controller responsible for data processing on this website within the meaning of the GDPR is:',
  },
  contactLabels: {
    phone: { de: 'Telefon', en: 'Phone' },
    email: { de: 'E-Mail', en: 'Email' },
  },
  sections: [
    {
      id: 'ueberblick',
      heading: {
        de: 'Überblick und Geltungsbereich',
        en: 'Overview and scope',
      },
      body: {
        de: [
          'Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten wir beim Besuch dieser Website und im Rahmen der Terminvereinbarung verarbeiten, zu welchen Zwecken und auf welcher Rechtsgrundlage dies geschieht und welche Rechte Ihnen zustehen.',
          'Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Eine Nutzung dieser Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich; für eine Terminvereinbarung oder Kontaktaufnahme benötigen wir jedoch bestimmte Angaben.',
        ],
        en: [
          'Protecting your personal data is important to us. This privacy policy informs you which personal data we process when you visit this website and when arranging an appointment, for what purposes and on what legal basis this takes place, and what rights you have.',
          'Personal data is any information relating to an identified or identifiable natural person. In principle, this website can be used without providing personal data; however, to arrange an appointment or to contact us we require certain information.',
        ],
      },
    },
    {
      id: 'datenkategorien',
      heading: {
        de: 'Verarbeitete Datenkategorien',
        en: 'Categories of data processed',
      },
      body: {
        de: [
          'Je nach Anlass – Websitebesuch, Terminvereinbarung, Beratung und Impfung – verarbeiten wir folgende Kategorien personenbezogener Daten:',
        ],
        en: [
          'Depending on the context – visiting the website, arranging an appointment, consultation and vaccination – we process the following categories of personal data:',
        ],
      },
      list: {
        de: [
          'Stammdaten: Name, Vorname, Geburtsdatum und Anschrift,',
          'Kontaktdaten: Telefonnummer und E-Mail-Adresse,',
          'Gesundheitsdaten (Art. 9 DSGVO): Anamnese, Vorerkrankungen, Medikation, Reiseziele und Impfstatus sowie die Impfdokumentation einschließlich Impfstoff und Chargennummer,',
          'Abrechnungsdaten: Zahlungsart und Rechnungsbetrag.',
        ],
        en: [
          'Master data: surname, first name, date of birth and address,',
          'Contact data: telephone number and email address,',
          'Health data (Art. 9 GDPR): medical history, pre-existing conditions, medication, travel destinations and vaccination status, as well as the vaccination record including vaccine and batch number,',
          'Billing data: payment method and invoice amount.',
        ],
      },
    },
    {
      id: 'rechtsgrundlagen',
      heading: {
        de: 'Rechtsgrundlagen der Verarbeitung',
        en: 'Legal bases for processing',
      },
      body: {
        de: [
          'Soweit wir personenbezogene Daten verarbeiten, stützen wir uns – je nach Zweck – auf folgende Rechtsgrundlagen:',
        ],
        en: [
          'Insofar as we process personal data, we rely – depending on the purpose – on the following legal bases:',
        ],
      },
      list: {
        de: [
          'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) – z. B. für das Laden eingebetteter Dienste über die 2-Klick-Lösung.',
          'Vertrag bzw. vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO) – z. B. zur Anbahnung und Durchführung der Behandlung.',
          'Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO) – z. B. ärztliche Dokumentations- und Aufbewahrungspflichten.',
          'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) – z. B. der technisch sichere und stabile Betrieb der Website.',
          'Für Gesundheitsdaten (besondere Kategorien): Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit § 22 Abs. 1 Bundesdatenschutzgesetz (BDSG) – Verarbeitung zum Zweck der Gesundheitsvorsorge und Behandlung durch ärztliches Personal, das der Schweigepflicht unterliegt.',
        ],
        en: [
          'Consent (Art. 6 (1) (a) GDPR) – e.g. to load embedded services via the two-click solution.',
          'Contract or pre-contractual measures (Art. 6 (1) (b) GDPR) – e.g. to initiate and carry out treatment.',
          'Legal obligation (Art. 6 (1) (c) GDPR) – e.g. medical documentation and retention duties.',
          'Legitimate interest (Art. 6 (1) (f) GDPR) – e.g. the technically secure and stable operation of the website.',
          'For health data (special categories): Art. 9 (2) (h) GDPR in conjunction with Section 22 (1) of the German Federal Data Protection Act (BDSG) – processing for the purposes of preventive healthcare and treatment by medical staff bound by professional confidentiality.',
        ],
      },
    },
    {
      id: 'gesundheitsdaten',
      heading: {
        de: 'Gesundheitsdaten und ärztliche Schweigepflicht',
        en: 'Health data and medical confidentiality',
      },
      body: {
        de: [
          'Im Rahmen der reisemedizinischen Beratung und Impfung verarbeiten wir Gesundheitsdaten. Diese gehören nach Art. 9 DSGVO zu den besonderen Kategorien personenbezogener Daten und genießen einen erhöhten Schutz.',
          'Die Verarbeitung erfolgt ausschließlich zu Zwecken der Gesundheitsvorsorge, der Beurteilung der Impffähigkeit, der Durchführung und Dokumentation der Impfung sowie der damit verbundenen Beratung – auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO i. V. m. § 22 BDSG. Sämtliche Mitarbeitenden sind zur Verschwiegenheit verpflichtet; es gilt zudem die ärztliche Schweigepflicht nach § 203 Strafgesetzbuch (StGB). Wir verarbeiten nur die Daten, die für den jeweiligen Zweck erforderlich sind (Datenminimierung).',
        ],
        en: [
          'In the course of travel-medicine advice and vaccination, we process health data. Under Art. 9 GDPR, this belongs to the special categories of personal data and enjoys enhanced protection.',
          'Processing takes place exclusively for the purposes of preventive healthcare, assessing fitness for vaccination, carrying out and documenting the vaccination and the associated advice – on the basis of Art. 9 (2) (h) GDPR in conjunction with Section 22 BDSG. All staff are obliged to maintain confidentiality; medical confidentiality under Section 203 of the German Criminal Code (StGB) also applies. We process only the data required for the respective purpose (data minimisation).',
        ],
      },
    },
    {
      id: 'hosting',
      heading: {
        de: 'Hosting und Server-Logfiles',
        en: 'Hosting and server log files',
      },
      body: {
        de: [
          'Diese Website wird bei einem externen Dienstleister gehostet: {hostingProviderAddress}. Beim Aufruf der Website übermittelt Ihr Browser technisch notwendige Daten, die der Anbieter in Server-Logfiles verarbeitet.',
          'Hierzu zählen insbesondere: die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite bzw. Datei, die übertragene Datenmenge, der verweisende URL (Referrer) sowie Browsertyp und Betriebssystem. Diese Verarbeitung dient dem technisch sicheren, stabilen und funktionsfähigen Betrieb der Website; Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).',
          'Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Sollte der Anbieter Daten in einem Drittland (z. B. USA) verarbeiten, erfolgt dies auf Grundlage geeigneter Garantien (insbesondere EU-Standardvertragsklauseln). Eine Verlagerung auf einen Hoster mit Sitz und Serverstandort in der EU ist vorgesehen.',
        ],
        en: [
          'This website is hosted by an external service provider: {hostingProviderAddress}. When you access the website, your browser transmits technically necessary data that the provider processes in server log files.',
          'These include in particular: the IP address, the date and time of access, the page or file requested, the volume of data transferred, the referring URL (referrer) as well as browser type and operating system. This processing serves the technically secure, stable and functional operation of the website; the legal basis is our legitimate interest (Art. 6 (1) (f) GDPR).',
          'A data processing agreement pursuant to Art. 28 GDPR is in place with the hosting provider. Should the provider process data in a third country (e.g. the USA), this is carried out on the basis of appropriate safeguards (in particular EU standard contractual clauses). A move to a hosting provider domiciled with servers located in the EU is planned.',
        ],
      },
    },
    {
      id: 'tls',
      heading: {
        de: 'TLS-/SSL-Verschlüsselung',
        en: 'TLS/SSL encryption',
      },
      body: {
        de: [
          'Diese Website nutzt aus Sicherheitsgründen eine TLS-/SSL-Verschlüsselung (erkennbar an „https://" und dem Schloss-Symbol in der Adresszeile Ihres Browsers). Dadurch sind die Daten, die Sie an uns übermitteln, für Dritte nicht ohne Weiteres mitlesbar.',
        ],
        en: [
          'For security reasons, this website uses TLS/SSL encryption (recognisable by “https://” and the padlock symbol in your browser’s address bar). This means that the data you transmit to us cannot readily be read by third parties.',
        ],
      },
    },
    {
      id: 'schriftarten',
      heading: {
        de: 'Schriftarten (selbst gehostet)',
        en: 'Fonts (self-hosted)',
      },
      body: {
        de: [
          'Zur einheitlichen Darstellung verwenden wir die Schriftarten „Inter" und „Fraunces", die lokal auf unserem Server bzw. im Seiten-Bundle gehostet werden. Beim Aufruf der Website werden dadurch keine Verbindungen zu Servern Dritter (etwa Google Fonts) aufgebaut und keine Daten an solche Dienste übertragen. Es werden hierfür weder Cookies gesetzt noch IP-Adressen an Dritte übermittelt.',
        ],
        en: [
          'For consistent presentation, we use the fonts “Inter” and “Fraunces”, which are hosted locally on our server or within the page bundle. As a result, no connections to third-party servers (such as Google Fonts) are established when you access the website, and no data is transferred to such services. No cookies are set and no IP addresses are transmitted to third parties for this purpose.',
        ],
      },
    },
    {
      id: 'cookies',
      heading: {
        de: 'Cookies und lokale Speicherung',
        en: 'Cookies and local storage',
      },
      body: {
        de: [
          'Wir setzen keine Cookies zu Tracking-, Profiling- oder Marketingzwecken und binden keine Werbe-Netzwerke ein. Für die 2-Klick-Einbettung der Anfahrtskarte speichern wir Ihre Einwilligung ausschließlich lokal in Ihrem Browser (im sogenannten „localStorage") unter dem Schlüssel „polaris:consent:map".',
          'Diese Speicherung ist technisch erforderlich, um Ihre Entscheidung zu merken, und überträgt keine Daten an uns oder Dritte. Rechtsgrundlage für das Speichern bzw. Auslesen dieser für den von Ihnen gewünschten Dienst unbedingt erforderlichen Information ist § 25 Abs. 2 Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG); die Einwilligung gilt, bis Sie sie widerrufen. Sie können die gespeicherte Einwilligung jederzeit über die Schaltfläche an der Einbettung oder durch Löschen der Browserdaten widerrufen.',
        ],
        en: [
          'We do not use cookies for tracking, profiling or marketing purposes and do not embed any advertising networks. For the two-click embed of the location map we store your consent exclusively locally in your browser (in what is known as “localStorage”) under the key “polaris:consent:map”.',
          'This storage is technically necessary in order to remember your decision and does not transmit any data to us or to third parties. The legal basis for storing or reading this information, which is strictly necessary for the service you have requested, is Section 25 (2) of the German Telecommunications Digital Services Data Protection Act (TDDDG); the consent applies until you revoke it. You can withdraw the stored consent at any time using the button on the embed or by deleting your browser data.',
        ],
      },
    },
    {
      id: 'analytics',
      heading: {
        de: 'Reichweitenmessung (Web-Analyse)',
        en: 'Reach measurement (web analytics)',
      },
      body: {
        de: [
          'Zur statistischen Auswertung der Nutzung unserer Website und zur bedarfsgerechten Verbesserung unseres Angebots setzen wir die cookielose Web-Analyse-Lösung {analyticsProvider} ein, die wir datenschutzfreundlich bei einem Auftragsverarbeiter in der Europäischen Union betreiben ({analyticsHost}). Die Auswertung erfolgt ohne Cookies und ohne sonstige Speicherung oder Auslesung von Informationen auf Ihrem Endgerät; es werden keine geräteübergreifenden Profile gebildet und keine Daten zu Werbezwecken verwendet oder an Dritte weitergegeben.',
          'Verarbeitet werden ausschließlich aggregierte, nicht auf Sie zurückführbare Angaben – etwa aufgerufene Seiten, die verweisende Seite, die ungefähre Herkunft (Land), der verwendete Browser- und Gerätetyp sowie Datum und Uhrzeit des Zugriffs. Ihre IP-Adresse wird dabei nur kurzzeitig zur Verarbeitung des Zugriffs verwendet, umgehend anonymisiert und nicht gespeichert. Eine Identifizierung einzelner Besucherinnen und Besucher ist uns hierüber nicht möglich.',
          'Da hierfür keine Informationen auf Ihrem Endgerät gespeichert oder ausgelesen werden, ist eine Einwilligung nach § 25 Abs. 1 TDDDG nicht erforderlich. Rechtsgrundlage für die Verarbeitung ist unser berechtigtes Interesse an einer bedarfsgerechten Gestaltung und der statistischen Auswertung unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Mit dem Analyse-Anbieter haben wir einen Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.',
          'Sie können dieser Verarbeitung jederzeit mit Wirkung für die Zukunft widersprechen (Art. 21 DSGVO). Darüber hinaus respektiert unsere Reichweitenmessung die Signale „Do Not Track" (DNT) und „Global Privacy Control" (GPC) Ihres Browsers: Ist eines dieser Signale gesetzt, wird das Analyse-Skript bereits nicht geladen und keinerlei Auswertung vorgenommen.',
        ],
        en: [
          'To statistically evaluate the use of our website and to improve our services in line with actual needs, we use the cookieless web analytics solution {analyticsProvider}, which we operate in a privacy-friendly manner with a processor in the European Union ({analyticsHost}). The analysis works without cookies and without any other storage or reading of information on your device; no cross-device profiles are created and no data is used for advertising purposes or passed on to third parties.',
          'Only aggregated information that cannot be traced back to you is processed – such as the pages accessed, the referring page, the approximate origin (country), the browser and device type used, and the date and time of access. Your IP address is used only briefly to process the access, is anonymised immediately and is not stored. We are unable to identify individual visitors on this basis.',
          'As no information is stored on or read from your device for this purpose, consent under Section 25 (1) TDDDG is not required. The legal basis for the processing is our legitimate interest in the needs-based design and statistical evaluation of our website (Art. 6 (1) (f) GDPR). We have concluded a data processing agreement pursuant to Art. 28 GDPR with the analytics provider.',
          'You can object to this processing at any time with effect for the future (Art. 21 GDPR). In addition, our reach measurement respects the “Do Not Track” (DNT) and “Global Privacy Control” (GPC) signals of your browser: if either of these signals is set, the analytics script is not even loaded and no analysis is carried out.',
        ],
      },
    },
    {
      id: 'terminbuchung',
      heading: {
        de: 'Online-Terminbuchung',
        en: 'Online appointment booking',
      },
      body: {
        de: [
          'Die Online-Terminbuchung über unsere Website ist derzeit deaktiviert (im Umbau). Auf unserer Terminseite wird kein Anfrageformular ausgeliefert; es werden dort keine personenbezogenen Daten erhoben oder an unser Terminsystem übermittelt.',
          'Terminwünsche vereinbaren Sie zurzeit telefonisch oder per E-Mail. Wie wir dabei mit Ihren Angaben umgehen, ist im Abschnitt „Kontaktaufnahme" beschrieben. Sobald die Online-Terminbuchung wieder verfügbar ist, aktualisieren wir diese Datenschutzerklärung entsprechend.',
        ],
        en: [
          'Online appointment booking via our website is currently deactivated (undergoing maintenance). No enquiry form is served on our appointments page; no personal data is collected there or transmitted to our scheduling system.',
          'For now, please arrange appointments by phone or email. How we handle your details in that case is described in the “Contacting us” section. As soon as online booking is available again, we will update this privacy policy accordingly.',
        ],
      },
    },
    {
      id: 'kartendienst',
      heading: {
        de: 'Kartendienst / Anfahrt',
        en: 'Map service / directions',
      },
      body: {
        de: [
          'Auf der Kontaktseite bieten wir eine interaktive Anfahrtskarte des Dienstes {mapProvider} an – ebenfalls über eine 2-Klick-Lösung. Die Karte wird erst nach Ihrer aktiven Einwilligung geladen; vorher wird keine Verbindung zum Kartendienst hergestellt.',
          'Beim Laden der Karte stellt Ihr Browser eine direkte Verbindung zu den Servern des Kartendienstes her und überträgt dabei Ihre IP-Adresse; der Dienst kann hierfür Cookies oder vergleichbare Technologien einsetzen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Der ebenfalls angebotene Link „Route planen" ist ein reiner Verweis, der erst beim Anklicken eine Seite des Kartendienstes in einem neuen Tab öffnet und ohne Klick keine Daten überträgt.',
        ],
        en: [
          'On the contact page we offer an interactive location map from the service {mapProvider} – likewise via a two-click solution. The map is only loaded after your active consent; beforehand, no connection to the map service is established.',
          'When the map is loaded, your browser establishes a direct connection to the map service’s servers and transmits your IP address in the process; the service may use cookies or comparable technologies for this. The legal basis is your consent (Art. 6 (1) (a) GDPR). The “Plan route” link that is also offered is a mere reference that only opens a page of the map service in a new tab when clicked and transmits no data without a click.',
        ],
      },
    },
    {
      id: 'kontakt',
      heading: {
        de: 'Kontaktaufnahme',
        en: 'Contacting us',
      },
      body: {
        de: [
          'Wenn Sie uns telefonisch, per E-Mail oder über die angegebenen Kontaktdaten erreichen, verarbeiten wir die von Ihnen mitgeteilten Angaben (z. B. Name, Kontaktdaten und den Inhalt Ihrer Anfrage), um Ihr Anliegen zu bearbeiten und zu beantworten.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss oder die Durchführung eines Behandlungsvertrags gerichtet ist, andernfalls unser berechtigtes Interesse an der Beantwortung (Art. 6 Abs. 1 lit. f DSGVO). Enthält Ihre Nachricht Gesundheitsdaten, erfolgt die Verarbeitung auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO i. V. m. § 22 BDSG. Wir bitten Sie, uns sensible Gesundheitsdaten nicht unverschlüsselt per E-Mail zu übermitteln.',
        ],
        en: [
          'If you contact us by phone, email or using the contact details provided, we process the information you supply (e.g. name, contact details and the content of your enquiry) in order to handle and respond to your request.',
          'The legal basis is Art. 6 (1) (b) GDPR insofar as your enquiry is aimed at concluding or performing a treatment contract; otherwise our legitimate interest in responding (Art. 6 (1) (f) GDPR). If your message contains health data, processing takes place on the basis of Art. 9 (2) (h) GDPR in conjunction with Section 22 BDSG. We ask that you do not send us sensitive health data by unencrypted email.',
        ],
      },
    },
    {
      id: 'empfaenger',
      heading: {
        de: 'Empfänger und Auftragsverarbeiter',
        en: 'Recipients and processors',
      },
      body: {
        de: [
          'Ihre Daten werden grundsätzlich vertraulich behandelt und nur weitergegeben, soweit dies zur Erfüllung der genannten Zwecke erforderlich ist, Sie eingewilligt haben oder eine gesetzliche Grundlage besteht. Mit Dienstleistern, die in unserem Auftrag Daten verarbeiten, schließen wir Verträge zur Auftragsverarbeitung nach Art. 28 DSGVO. Eingesetzt werden insbesondere:',
        ],
        en: [
          'Your data is treated as confidential in principle and only passed on insofar as this is necessary to fulfil the stated purposes, you have consented or there is a legal basis. With service providers that process data on our behalf, we conclude data processing agreements pursuant to Art. 28 GDPR. In particular, the following are used:',
        ],
      },
      list: {
        de: [
          'Hosting und Auslieferung der Website: {hostingProvider}',
          'Kartendienst / Anfahrt: {mapProvider} (nur nach Einwilligung).',
          'Gegebenenfalls weitere technische Dienstleister zur Unterstützung von Betrieb und Sicherheit der Website – jeweils als Auftragsverarbeiter.',
        ],
        en: [
          'Hosting and delivery of the website: {hostingProvider}',
          'Map service / directions: {mapProvider} (only after consent).',
          'Where applicable, further technical service providers supporting the operation and security of the website – each as a processor.',
        ],
      },
    },
    {
      id: 'offenlegung',
      heading: {
        de: 'Weitergabe aufgrund gesetzlicher Pflichten oder auf Ihren Wunsch',
        en: 'Disclosure due to legal obligations or at your request',
      },
      body: {
        de: [
          'Über die genannten Auftragsverarbeiter hinaus geben wir Ihre Daten nur weiter, wenn wir gesetzlich dazu verpflichtet sind, dies zur Geltendmachung oder Abwehr von Rechtsansprüchen erforderlich ist oder Sie ausdrücklich eingewilligt haben.',
          'Dies betrifft insbesondere: infektionsschutzrechtliche Meldepflichten gegenüber dem zuständigen Gesundheitsamt nach dem Infektionsschutzgesetz (IfSG); die Übermittlung an mit- oder weiterbehandelnde Ärztinnen und Ärzte auf Ihren Wunsch; sowie die Weitergabe von Rechnungs- und Buchhaltungsdaten an unsere Steuerberatung zur Erfüllung steuerlicher Pflichten. Eine Weitergabe zu Werbezwecken oder ein Verkauf Ihrer Daten findet nicht statt.',
        ],
        en: [
          'Beyond the processors named above, we only disclose your data where we are legally obliged to do so, where it is necessary to assert or defend legal claims, or where you have given your explicit consent.',
          'This concerns in particular: reporting obligations towards the competent public health authority under the German Infection Protection Act (IfSG); transmission to co-treating or subsequently treating physicians at your request; and the disclosure of invoice and accounting data to our tax advisors in order to meet tax obligations. We do not disclose your data for advertising purposes, nor do we sell it.',
        ],
      },
    },
    {
      id: 'drittland',
      heading: {
        de: 'Übermittlung in Drittländer',
        en: 'Transfers to third countries',
      },
      body: {
        de: [
          'Eine Übermittlung personenbezogener Daten in Länder außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums findet nur statt, wenn dies gesetzlich zulässig ist. Soweit einzelne der oben genannten Dienstleister Daten in einem Drittland (z. B. USA) verarbeiten, geschieht dies auf Grundlage geeigneter Garantien im Sinne der Art. 44 ff. DSGVO – insbesondere der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) – oder Ihrer ausdrücklichen Einwilligung. Wir sind bestrebt, vorrangig Dienstleister mit Sitz und Datenverarbeitung in der EU einzusetzen.',
        ],
        en: [
          'Personal data is only transferred to countries outside the European Union or the European Economic Area where this is legally permissible. Insofar as individual providers named above process data in a third country (e.g. the USA), this takes place on the basis of appropriate safeguards within the meaning of Art. 44 et seq. GDPR – in particular the EU standard contractual clauses (Art. 46 (2) (c) GDPR) – or your explicit consent. We endeavour to use providers domiciled and processing data within the EU as a priority.',
        ],
      },
    },
    {
      id: 'speicherdauer',
      heading: {
        de: 'Speicherdauer und Löschung',
        en: 'Retention period and deletion',
      },
      body: {
        de: [
          'Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen es verlangen. Anschließend werden die Daten gelöscht oder anonymisiert.',
          'Behandlungs- und Impfdokumentationen unterliegen ärztlichen Aufbewahrungspflichten und werden grundsätzlich für mindestens zehn Jahre nach Abschluss der Behandlung aufbewahrt (§ 630f Bürgerliches Gesetzbuch sowie die Berufsordnung); für bestimmte Unterlagen können längere gesetzliche Fristen gelten. Rechnungs- und Buchhaltungsunterlagen bewahren wir nach den handels- und steuerrechtlichen Vorgaben (insbesondere § 257 Handelsgesetzbuch – HGB und § 147 Abgabenordnung – AO) regelmäßig zehn Jahre auf. Einwilligungen (lokal in Ihrem Browser) gelten bis zum Widerruf. Server-Logfiles werden nur kurzfristig verarbeitet und regelmäßig gelöscht.',
        ],
        en: [
          'We store personal data only for as long as is necessary for the stated purposes or as required by statutory retention periods. The data is then deleted or anonymised.',
          'Treatment and vaccination records are subject to medical retention obligations and are generally retained for at least ten years after completion of treatment (Section 630f of the German Civil Code and the code of professional conduct); longer statutory periods may apply to certain documents. Invoice and accounting records are retained in accordance with commercial and tax law requirements (in particular Section 257 of the German Commercial Code – HGB and Section 147 of the German Fiscal Code – AO), generally for ten years. Consents (stored locally in your browser) apply until withdrawn. Server log files are processed only for a short time and deleted regularly.',
        ],
      },
    },
    {
      id: 'rechte',
      heading: {
        de: 'Ihre Rechte als betroffene Person',
        en: 'Your rights as a data subject',
      },
      body: {
        de: [
          'Ihnen stehen im Rahmen der gesetzlichen Voraussetzungen folgende Rechte zu:',
        ],
        en: [
          'Subject to the statutory requirements, you have the following rights:',
        ],
      },
      list: {
        de: [
          'Auskunft über die zu Ihnen gespeicherten Daten (Art. 15 DSGVO),',
          'Berichtigung unrichtiger Daten (Art. 16 DSGVO),',
          'Löschung (Art. 17 DSGVO) – soweit keine Aufbewahrungspflichten entgegenstehen,',
          'Einschränkung der Verarbeitung (Art. 18 DSGVO),',
          'Datenübertragbarkeit (Art. 20 DSGVO),',
          'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO),',
          'Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).',
        ],
        en: [
          'Access to the data stored about you (Art. 15 GDPR),',
          'Rectification of inaccurate data (Art. 16 GDPR),',
          'Erasure (Art. 17 GDPR) – insofar as no retention obligations preclude it,',
          'Restriction of processing (Art. 18 GDPR),',
          'Data portability (Art. 20 GDPR),',
          'Objection to processing (Art. 21 GDPR),',
          'Withdrawal of a given consent with effect for the future (Art. 7 (3) GDPR).',
        ],
      },
    },
    {
      id: 'beschwerde',
      heading: {
        de: 'Beschwerderecht bei einer Aufsichtsbehörde',
        en: 'Right to lodge a complaint with a supervisory authority',
      },
      body: {
        de: [
          'Unbeschadet anderweitiger Rechtsbehelfe haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.',
          'Die für uns zuständige Aufsichtsbehörde ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf. Sie können sich auch an die Aufsichtsbehörde Ihres üblichen Aufenthaltsorts oder Arbeitsplatzes wenden.',
        ],
        en: [
          'Without prejudice to any other legal remedy, you have the right to lodge a complaint with a data protection supervisory authority if you consider that the processing of your personal data infringes the GDPR.',
          'The supervisory authority responsible for us is the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, Germany. You may also contact the supervisory authority of your habitual residence or place of work.',
        ],
      },
    },
    {
      id: 'automatisierte-entscheidungen',
      heading: {
        de: 'Keine automatisierte Entscheidungsfindung',
        en: 'No automated decision-making',
      },
      body: {
        de: [
          'Eine ausschließlich automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO findet nicht statt.',
        ],
        en: [
          'Automated decision-making, including profiling within the meaning of Art. 22 GDPR, does not take place.',
        ],
      },
    },
    {
      id: 'aktualitaet',
      heading: {
        de: 'Aktualität und Änderung dieser Datenschutzerklärung',
        en: 'Validity and changes to this privacy policy',
      },
      body: {
        de: [
          'Diese Datenschutzerklärung hat den oben genannten Stand. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, sie anzupassen. Die jeweils aktuelle Fassung ist auf dieser Seite abrufbar.',
        ],
        en: [
          'This privacy policy reflects the status stated above. As our website develops or due to changed legal or regulatory requirements, it may become necessary to amend it. The current version is always available on this page.',
        ],
      },
    },
  ],
  closingNote: {
    de: 'Diese Datenschutzerklärung wird an Änderungen unserer Datenverarbeitung oder der Rechtslage angepasst. Maßgeblich ist die deutsche Fassung; die englische Übersetzung dient ausschließlich der Information.',
    en: 'This privacy policy is updated to reflect changes in our data processing or the legal framework. The German version shall prevail; the English translation is provided for information only.',
  },
};
