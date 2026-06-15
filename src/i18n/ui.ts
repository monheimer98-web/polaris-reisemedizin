/**
 * UI-Wörterbuch (DE/EN) für wiederkehrende Oberflächentexte.
 * Lange Fachinhalte liegen in Content-Collections, nicht hier.
 */
import type { Locale } from '../config/site';

export const ui = {
  de: {
    // Navigation
    'nav.home': 'Start',
    'nav.services': 'Leistungen',
    'nav.diseases': 'Krankheitsbilder',
    'nav.yellowFever': 'Gelbfieber',
    'nav.dengue': 'Dengue-Fieber',
    'nav.chikungunya': 'Chikungunya',
    'nav.fsme': 'FSME',
    'nav.hepatitisA': 'Hepatitis A',
    'nav.hepatitisB': 'Hepatitis B',
    'nav.typhus': 'Typhus',
    'nav.rabies': 'Tollwut',
    'nav.japaneseEncephalitis': 'Japanische Enzephalitis',
    'nav.meningococcal': 'Meningokokken',
    'nav.cholera': 'Cholera',
    'nav.consultation': 'Reisemedizinische Beratung',
    'nav.travelVaccinations': 'Reiseimpfungen',
    'nav.yellowFeverVaccination': 'Gelbfieberimpfung',
    'nav.fsmeVaccination': 'FSME-Impfung',
    'nav.malaria': 'Malaria-Vorsorge',
    'nav.altitude': 'Höhenmedizin',
    'nav.riskAreas': 'Risikogebiete',
    'nav.destinations': 'Reiseziele',
    'nav.destAfrica': 'Afrika',
    'nav.destAsia': 'Asien',
    'nav.destLatinAmerica': 'Lateinamerika',
    'nav.destMiddleEast': 'Naher Osten',
    'nav.destEurope': 'Europa',
    'nav.destOceania': 'Ozeanien',
    'nav.process': 'Ablauf',
    'nav.travelTips': 'Reisetipps',
    'nav.travelKit': 'Reiseapotheke',
    'nav.costs': 'Kosten',
    'nav.business': 'Für Unternehmen',
    'nav.team': 'Team',
    'nav.faq': 'Fragen & Antworten',
    'nav.contact': 'Kontakt',
    'nav.booking': 'Termin buchen',
    'nav.imprint': 'Impressum',
    'nav.privacy': 'Datenschutz',

    // Allgemeine Aktionen
    'cta.book': 'Termin buchen',
    'cta.bookAria': 'Termin online buchen',
    'cta.services': 'Unsere Leistungen',
    'cta.learnMore': 'Mehr erfahren',
    'cta.allRiskAreas': 'Risikogebiete ansehen',

    // Kopf-/Fußzeile, Steuerung
    'skip.toContent': 'Zum Inhalt springen',
    'header.openMenu': 'Menü öffnen',
    'header.closeMenu': 'Menü schließen',
    'header.toggleSubmenu': 'Untermenü ein- oder ausklappen',
    'header.primaryNav': 'Hauptnavigation',
    'lang.label': 'Sprache',
    'lang.switchToEn': 'Switch to English',
    'lang.switchToDe': 'Auf Deutsch wechseln',

    'footer.servicesTitle': 'Leistungen',
    'footer.infoTitle': 'Information',
    'footer.contactTitle': 'Kontakt',
    'footer.hoursTitle': 'Sprechzeiten',
    'footer.legalTitle': 'Rechtliches',
    'footer.disclaimerTitle': 'Medizinischer Hinweis',
    'footer.disclaimer':
      'Die Inhalte dieser Website dienen der allgemeinen Information und ersetzen keine individuelle ärztliche Beratung, Diagnose oder Behandlung. Maßgeblich ist stets das persönliche Aufklärungsgespräch in der Praxis.',
    'footer.sourcesNote':
      'Medizinische Angaben beruhen auf etablierten Fachquellen (u. a. RKI/STIKO, WHO, Paul-Ehrlich-Institut, DTG, Auswärtiges Amt). Der jeweilige Stand ist auf den Fachseiten angegeben.',
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Startseite — Hero
    'home.eyebrow': 'Privatpraxis für Reise- & Impfmedizin',
    'home.heroTitle': 'Sicher reisen. Gut geschützt.',
    'home.heroLead':
      'Ihre reisemedizinische Privatpraxis: persönliche Beratung, Reiseimpfungen und Vorsorge – ärztlich fundiert und auf dem aktuellen Stand der Wissenschaft.',
    'home.badgeYellowFever': 'Staatlich autorisierte Gelbfieberimpfstelle',

    // Startseite — Vertrauensleiste
    'trust.ariaLabel': 'Vertrauen und Qualität',
    'trust.authorizedTitle': 'Autorisierte Gelbfieberimpfstelle',
    'trust.authorizedText':
      'Staatlich zugelassen für die Gelbfieberimpfung – inklusive international gültigem Eintrag im Impfausweis.',
    'trust.specialistTitle': 'Ärztlich fundiert',
    'trust.specialistText':
      'Beratung und Impfung in ärztlicher Verantwortung – individuell auf Ihre Reise abgestimmt.',
    'trust.sourcesTitle': 'Gesicherte Fachquellen',
    'trust.sourcesText':
      'Unsere Empfehlungen orientieren sich an RKI/STIKO, WHO und Paul-Ehrlich-Institut – mit Angabe des Stands.',
    'trust.personalTitle': 'Persönlich & planbar',
    'trust.personalText':
      'Feste Ansprechpersonen, klare Abläufe und Termine ohne anonyme Warteschleife.',

    // Startseite — Leistungs-Überblick
    'home.servicesEyebrow': 'Unsere Leistungen',
    'home.servicesTitle': 'Umfassende Reisemedizin – mit voller Sorgfalt',
    'home.servicesLead':
      'Von der persönlichen Beratung über Reiseimpfungen bis zur Malaria- und Höhenvorsorge: Wir begleiten Ihre Reise mit fachlicher Tiefe und nehmen uns Zeit für eine sorgfältige Aufklärung.',
    'home.serviceConsultationTitle': 'Reisemedizinische Beratung',
    'home.serviceConsultationText':
      'Persönliche Beratung mit Feststellung der Impftauglichkeit und schriftlichem Impf- und Reiseplan – individuell auf Ihr Ziel abgestimmt.',
    'home.serviceTravelVaccTitle': 'Reiseimpfungen',
    'home.serviceTravelVaccText':
      'Von Hepatitis bis Tollwut: Überblick über Standard- und Reiseimpfungen – die passende Auswahl klären wir gemeinsam.',
    'home.serviceYfTitle': 'Gelbfieberimpfung',
    'home.serviceYfText':
      'Einmalige Impfung mit lebenslangem Impfschutz gemäß WHO – für viele Länder Afrikas und Südamerikas Pflicht bei der Einreise.',
    'home.serviceYfFact1': 'Impfstoff Stamaril® (ab dem Alter von 9 Monaten)',
    'home.serviceYfFact2': 'International gültiger Impfeintrag ab Tag 10',
    'home.serviceYfFact3': 'Nur in autorisierten Impfstellen möglich',
    'home.serviceFsmeTitle': 'FSME-Impfung',
    'home.serviceFsmeText':
      'Schutz vor der von Zecken übertragenen Frühsommer-Meningoenzephalitis – relevant in vielen Regionen Deutschlands und Europas.',
    'home.serviceFsmeFact1': 'Grundimmunisierung mit drei Impfdosen',
    'home.serviceFsmeFact2': 'Empfohlen bei Aufenthalt in Risikogebieten',
    'home.serviceFsmeFact3': 'Auffrischungen regelmäßig gemäß STIKO',
    'home.serviceMalariaTitle': 'Malaria-Vorsorge',
    'home.serviceMalariaText':
      'Risikobewertung, konsequenter Mückenschutz und – wenn sinnvoll – medikamentöse Vorbeugung für Ihre Reise.',
    'home.serviceAltitudeTitle': 'Höhenmedizin',
    'home.serviceAltitudeText':
      'Sicher in die Höhe: Akklimatisation, Warnzeichen und Vorbeugung für Trekking, Bergreisen und Expeditionen.',
    'home.serviceConsultationFact1': 'Individuelle Risikobewertung für Ihr Reiseziel',
    'home.serviceConsultationFact2': 'Persönlicher schriftlicher Impf- und Reiseplan',
    'home.serviceConsultationFact3': 'Beratung in ärztlicher Verantwortung',
    'home.serviceTravelVaccFact1': 'Empfohlene und vorgeschriebene Reiseimpfungen',
    'home.serviceTravelVaccFact2': 'Impfstoffe individuell für Sie bestellt',
    'home.serviceTravelVaccFact3': 'Dokumentation im Impfausweis',
    'home.servicesMoreTitle': 'Spezielle Themen & Pflichtimpfungen',
    'home.servicesAllLink': 'Alle Leistungen ansehen',
    'cta.serviceDetail': 'Zur Leistung',

    // Startseite — Abschluss-CTA
    'home.ctaTitle': 'Planen Sie Ihren Impftermin',
    'home.ctaLead':
      'Vereinbaren Sie Ihren Termin zur reisemedizinischen Beratung und Impfung – wir nehmen uns die Zeit, die eine sorgfältige Aufklärung braucht.',
    'home.ctaNote':
      'Bitte beachten Sie für die Gelbfieberimpfung eine Frist von mindestens 10 Tagen vor Abreise.',

    // Startseite — Kundenstimmen (nur sichtbar, wenn in site.ts aktiviert)
    'reviews.ariaLabel': 'Kundenstimmen',
    'reviews.eyebrow': 'Das sagen Reisende',
    'reviews.title': 'Erfahrungen unserer Patientinnen und Patienten',
    'reviews.lead':
      'Was Reisende über die Beratung und Betreuung in unserer Praxis berichten.',
    'reviews.outOfFive': 'von 5',
    'reviews.reviewsWord': 'Bewertungen',
    'reviews.googleCta': 'Alle Bewertungen bei Google ansehen',

    // Rechtsseiten (Impressum & Datenschutz)
    'legal.lastUpdated': 'Stand:',

    // Fachseiten (Krankheitsbilder & Leistungen)
    'content.sourcesTitle': 'Quellen & Stand',
    'content.lastReviewedLabel': 'Inhaltlich geprüft:',
    'content.retrievedLabel': 'abgerufen am',
    'content.annualUpdate':
      'Diese Angaben werden regelmäßig, mindestens einmal jährlich, auf Aktualität geprüft.',
    'content.relatedTitle': 'Weiterführend',
    'content.breadcrumb': 'Brotkrumennavigation',
    'content.onThisPage': 'Auf dieser Seite',
    'content.moreOnTopic': 'Mehr dazu',

    // Steckbrief / Kernfakten-Box (Krankheitsbilder)
    'facts.title': 'Steckbrief',
    'facts.pathogen': 'Erreger',
    'facts.transmission': 'Übertragung',
    'facts.regions': 'Verbreitung',
    'facts.vaccine': 'Reiseimpfung',
    'facts.note': 'Gut zu wissen',

    // Übersichtsseiten (Eltern-Navigation)
    'overview.servicesTitle': 'Unsere Leistungen',
    'overview.servicesLead':
      'Reisemedizin aus einer Hand: persönliche Beratung, Reiseimpfungen sowie Malaria- und Höhenvorsorge. Wählen Sie eine Leistung für alle Details zu Ablauf, Eignung und Kosten.',
    'overview.diseasesTitle': 'Krankheitsbilder im Überblick',
    'overview.diseasesLead':
      'Fachlich fundierte Informationen zu den Erkrankungen, vor denen unsere Impfungen schützen – mit Angabe der Quellen und des jeweiligen Stands.',
    'overview.diseaseYfText':
      'Durch Stechmücken übertragene Viruserkrankung in den Tropen Afrikas und Südamerikas. Der wirksamste Schutz ist die Impfung.',
    'overview.diseaseDengueText':
      'Weltweit häufigste durch Stechmücken übertragene Viruserkrankung der Tropen und Subtropen – mit konsequentem Mückenschutz und in bestimmten Fällen einer Impfung.',
    'overview.diseaseChikText':
      'Tropische Virusinfektion mit hohem Fieber und teils langanhaltenden Gelenkschmerzen – übertragen durch tagaktive Stechmücken.',
    'overview.diseaseFsmeText':
      'Durch Zecken übertragene Viruserkrankung, die das Nervensystem befallen kann – relevant in Risikogebieten in Deutschland und Europa.',
    'overview.diseaseHepAText':
      'Virusbedingte Leberentzündung, die über Wasser und Lebensmittel übertragen wird – eine der häufigsten impfpräventablen Reiseinfektionen.',
    'overview.diseaseHepBText':
      'Über Blut und Körperflüssigkeiten übertragene Leberentzündung, die chronisch verlaufen kann – durch eine Impfung vermeidbar.',
    'overview.diseaseTyphusText':
      'Bakterielle Allgemeininfektion mit hohem Fieber, übertragen über verunreinigtes Wasser und Lebensmittel – vor allem in Südasien.',
    'overview.diseaseRabiesText':
      'Durch Tierbisse übertragene Virusinfektion, die nach Ausbruch nahezu immer tödlich ist – durch Vorbeugung zuverlässig vermeidbar.',
    'overview.diseaseJeText':
      'Durch Stechmücken übertragene Virusinfektion mit seltener, aber schwerer Hirnentzündung – vor allem im ländlichen Asien.',
    'overview.diseaseMeningoText':
      'Bakterien, die eine Hirnhautentzündung und Blutvergiftung auslösen können – impfpräventabel, mit Nachweispflicht für Pilgerreisen.',
    'overview.diseaseCholeraText':
      'Bakterielle Durchfallerkrankung über verunreinigtes Wasser – für gewöhnliche Reisende ein sehr geringes Risiko.',
    'cta.diseaseDetail': 'Zum Krankheitsbild',

    // 404
    'notFound.title': 'Seite nicht gefunden',
    'notFound.lead':
      'Die aufgerufene Seite existiert nicht (mehr). Möglicherweise hat sich die Adresse geändert.',
    'notFound.back': 'Zur Startseite',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.diseases': 'Diseases',
    'nav.yellowFever': 'Yellow fever',
    'nav.dengue': 'Dengue fever',
    'nav.chikungunya': 'Chikungunya',
    'nav.fsme': 'TBE (FSME)',
    'nav.hepatitisA': 'Hepatitis A',
    'nav.hepatitisB': 'Hepatitis B',
    'nav.typhus': 'Typhoid fever',
    'nav.rabies': 'Rabies',
    'nav.japaneseEncephalitis': 'Japanese encephalitis',
    'nav.meningococcal': 'Meningococcal disease',
    'nav.cholera': 'Cholera',
    'nav.consultation': 'Travel medicine consultation',
    'nav.travelVaccinations': 'Travel vaccinations',
    'nav.yellowFeverVaccination': 'Yellow fever vaccination',
    'nav.fsmeVaccination': 'TBE vaccination',
    'nav.malaria': 'Malaria prevention',
    'nav.altitude': 'Altitude medicine',
    'nav.riskAreas': 'Risk areas',
    'nav.destinations': 'Destinations',
    'nav.destAfrica': 'Africa',
    'nav.destAsia': 'Asia',
    'nav.destLatinAmerica': 'Latin America',
    'nav.destMiddleEast': 'Middle East',
    'nav.destEurope': 'Europe',
    'nav.destOceania': 'Oceania',
    'nav.process': 'How it works',
    'nav.travelTips': 'Travel tips',
    'nav.travelKit': 'Travel first-aid kit',
    'nav.costs': 'Costs',
    'nav.business': 'For businesses',
    'nav.team': 'Team',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.booking': 'Book appointment',
    'nav.imprint': 'Imprint',
    'nav.privacy': 'Privacy',

    // General actions
    'cta.book': 'Book appointment',
    'cta.bookAria': 'Book an appointment online',
    'cta.services': 'Our services',
    'cta.learnMore': 'Learn more',
    'cta.allRiskAreas': 'View risk areas',

    // Header/footer, controls
    'skip.toContent': 'Skip to content',
    'header.openMenu': 'Open menu',
    'header.closeMenu': 'Close menu',
    'header.toggleSubmenu': 'Expand or collapse submenu',
    'header.primaryNav': 'Primary navigation',
    'lang.label': 'Language',
    'lang.switchToEn': 'Switch to English',
    'lang.switchToDe': 'Auf Deutsch wechseln',

    'footer.servicesTitle': 'Services',
    'footer.infoTitle': 'Information',
    'footer.contactTitle': 'Contact',
    'footer.hoursTitle': 'Opening hours',
    'footer.legalTitle': 'Legal',
    'footer.disclaimerTitle': 'Medical notice',
    'footer.disclaimer':
      'The content on this website is for general information only and does not replace individual medical advice, diagnosis or treatment. The personal consultation at the practice is always decisive.',
    'footer.sourcesNote':
      'Medical information is based on established expert sources (incl. RKI/STIKO, WHO, Paul-Ehrlich-Institut, DTG, the German Federal Foreign Office). The relevant review date is noted on each clinical page.',
    'footer.rights': 'All rights reserved.',

    // Home — hero
    'home.eyebrow': 'Private practice for travel & vaccination medicine',
    'home.heroTitle': 'Travel safely. Well protected.',
    'home.heroLead':
      'Your travel-medicine private practice: personal advice, travel vaccinations and prevention – medically grounded and based on the current state of science.',
    'home.badgeYellowFever': 'State-authorised yellow fever vaccination centre',

    // Home — trust bar
    'trust.ariaLabel': 'Trust and quality',
    'trust.authorizedTitle': 'Authorised yellow fever centre',
    'trust.authorizedText':
      'State-approved for the yellow fever vaccination – including the internationally valid entry in your vaccination certificate.',
    'trust.specialistTitle': 'Physician-led',
    'trust.specialistText':
      'Advice and vaccination under medical responsibility – tailored individually to your trip.',
    'trust.sourcesTitle': 'Trusted expert sources',
    'trust.sourcesText':
      'Our recommendations follow RKI/STIKO, WHO and the Paul-Ehrlich-Institut – with the review date stated.',
    'trust.personalTitle': 'Personal & plannable',
    'trust.personalText':
      'Consistent contacts, clear processes and appointments without an anonymous queue.',

    // Home — services overview
    'home.servicesEyebrow': 'Our services',
    'home.servicesTitle': 'Comprehensive travel medicine – with full diligence',
    'home.servicesLead':
      'From personal advice through travel vaccinations to malaria and altitude prevention: we accompany your trip with clinical depth and take the time that careful counselling requires.',
    'home.serviceConsultationTitle': 'Travel medicine consultation',
    'home.serviceConsultationText':
      'A personal consultation including the assessment of fitness for vaccination and a written vaccination and travel plan – tailored to your destination.',
    'home.serviceTravelVaccTitle': 'Travel vaccinations',
    'home.serviceTravelVaccText':
      'From hepatitis to rabies: an overview of standard and travel vaccinations – we determine the right selection together.',
    'home.serviceYfTitle': 'Yellow fever vaccination',
    'home.serviceYfText':
      'A single vaccination with lifelong protection according to the WHO – mandatory for entry into many countries in Africa and South America.',
    'home.serviceYfFact1': 'Stamaril® vaccine (from the age of 9 months)',
    'home.serviceYfFact2': 'Internationally valid certificate from day 10',
    'home.serviceYfFact3': 'Only available at authorised vaccination centres',
    'home.serviceFsmeTitle': 'TBE vaccination',
    'home.serviceFsmeText':
      'Protection against tick-borne encephalitis (TBE/FSME) – relevant in many regions of Germany and Europe.',
    'home.serviceFsmeFact1': 'Primary immunisation with three doses',
    'home.serviceFsmeFact2': 'Recommended when staying in risk areas',
    'home.serviceFsmeFact3': 'Regular boosters according to STIKO',
    'home.serviceMalariaTitle': 'Malaria prevention',
    'home.serviceMalariaText':
      'Risk assessment, consistent mosquito protection and – where sensible – preventive medication for your trip.',
    'home.serviceAltitudeTitle': 'Altitude medicine',
    'home.serviceAltitudeText':
      'Safely to altitude: acclimatisation, warning signs and prevention for trekking, mountain travel and expeditions.',
    'home.serviceConsultationFact1': 'Individual risk assessment for your destination',
    'home.serviceConsultationFact2': 'Personal written vaccination and travel plan',
    'home.serviceConsultationFact3': 'Advice under medical responsibility',
    'home.serviceTravelVaccFact1': 'Recommended and required travel vaccinations',
    'home.serviceTravelVaccFact2': 'Vaccines ordered individually for you',
    'home.serviceTravelVaccFact3': 'Documented in your vaccination certificate',
    'home.servicesMoreTitle': 'Specific topics & required vaccinations',
    'home.servicesAllLink': 'View all services',
    'cta.serviceDetail': 'View service',

    // Home — closing CTA
    'home.ctaTitle': 'Plan your vaccination appointment',
    'home.ctaLead':
      'Arrange your appointment for travel-medicine advice and vaccination – we take the time that careful counselling requires.',
    'home.ctaNote':
      'For the yellow fever vaccination, please allow at least 10 days before departure.',

    // Home — testimonials (only shown when enabled in site.ts)
    'reviews.ariaLabel': 'Patient testimonials',
    'reviews.eyebrow': 'What travellers say',
    'reviews.title': 'Experiences from our patients',
    'reviews.lead':
      'What travellers report about the advice and care they received at our practice.',
    'reviews.outOfFive': 'out of 5',
    'reviews.reviewsWord': 'reviews',
    'reviews.googleCta': 'View all reviews on Google',

    // Legal pages (imprint & privacy)
    'legal.lastUpdated': 'Last updated:',

    // Clinical pages (diseases & services)
    'content.sourcesTitle': 'Sources & last review',
    'content.lastReviewedLabel': 'Content last reviewed:',
    'content.retrievedLabel': 'retrieved on',
    'content.annualUpdate':
      'This information is reviewed for accuracy regularly, at least once a year.',
    'content.relatedTitle': 'Related pages',
    'content.breadcrumb': 'Breadcrumb',
    'content.onThisPage': 'On this page',
    'content.moreOnTopic': 'Learn more',

    // Steckbrief / Kernfakten-Box (Krankheitsbilder)
    'facts.title': 'At a glance',
    'facts.pathogen': 'Pathogen',
    'facts.transmission': 'Transmission',
    'facts.regions': 'Distribution',
    'facts.vaccine': 'Travel vaccine',
    'facts.note': 'Good to know',

    // Overview pages (parent navigation)
    'overview.servicesTitle': 'Our services',
    'overview.servicesLead':
      'Travel medicine from a single source: personal advice, travel vaccinations and malaria and altitude prevention. Choose a service for all the details on procedure, suitability and costs.',
    'overview.diseasesTitle': 'Diseases at a glance',
    'overview.diseasesLead':
      'Evidence-based information on the diseases our vaccinations protect against – with the relevant sources and review date stated.',
    'overview.diseaseYfText':
      'A mosquito-borne viral disease in tropical Africa and South America. The most effective protection is vaccination.',
    'overview.diseaseDengueText':
      'The most common mosquito-borne viral disease of the tropics and subtropics worldwide – managed with consistent mosquito protection and, in certain cases, vaccination.',
    'overview.diseaseChikText':
      'A tropical viral infection with high fever and sometimes long-lasting joint pain – transmitted by day-biting mosquitoes.',
    'overview.diseaseFsmeText':
      'A tick-borne viral disease that can affect the nervous system – relevant in risk areas in Germany and Europe.',
    'overview.diseaseHepAText':
      'A viral inflammation of the liver transmitted via water and food – one of the most common vaccine-preventable travel infections.',
    'overview.diseaseHepBText':
      'An inflammation of the liver transmitted via blood and body fluids that can become chronic – avoidable through vaccination.',
    'overview.diseaseTyphusText':
      'A systemic bacterial infection with high fever, transmitted via contaminated water and food – particularly in South Asia.',
    'overview.diseaseRabiesText':
      'A viral infection transmitted by animal bites that is almost always fatal once it breaks out – reliably avoidable through prevention.',
    'overview.diseaseJeText':
      'A mosquito-borne viral infection with rare but severe inflammation of the brain – mainly in rural Asia.',
    'overview.diseaseMeningoText':
      'Bacteria that can cause meningitis and blood poisoning – vaccine-preventable, with a proof requirement for pilgrimages.',
    'overview.diseaseCholeraText':
      'A bacterial diarrhoeal disease from contaminated water – a very low risk for ordinary travellers.',
    'cta.diseaseDetail': 'View disease',

    // 404
    'notFound.title': 'Page not found',
    'notFound.lead': 'The page you requested does not exist (any more). The address may have changed.',
    'notFound.back': 'Back to home',
  },
} satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['de'];
