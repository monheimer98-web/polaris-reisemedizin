/**
 * ENTWURF vom 12.11.2026: vor Veröffentlichung ärztlich gegenlesen.
 *
 * Quellen für die Seiten zu HPV und Gürtelrose (Leistungen und Krankheitsbilder),
 * zum Einpflegen in `sources.ts`. Alle Adressen am 12.11.2026 abgerufen und gelesen.
 * Titel und Hinweise bewusst ohne Präparate- und Herstellernamen (HWG); die
 * Fachinformationen sind über die Arzneimittellisten des Paul-Ehrlich-Instituts
 * verlinkt (wie bei `peiFsme`), damit auch im Linkziel kein Handelsname steht.
 */
import type { Source } from './sources';

export const hpvGuertelroseQuellen = {
  rkiHpvFaq: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'Antworten auf häufig gestellte Fragen zu HPV-Impfung und HPV-Infektion',
      en: 'Answers to frequently asked questions on HPV vaccination and HPV infection',
    },
    url: 'https://www.rki.de/SharedDocs/FAQs/DE/Impfen/HPV/FAQ-Liste_HPV_Impfen.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Stand 29.05.2026: STIKO-Empfehlung, Impfschema ab 15 Jahren, Impfung ab 18 Jahren im Einzelfall, Zulassung ab 9 Jahren ohne Altersobergrenze, Kostenübernahme, Sicherheit.',
      en: 'As of 29 May 2026: STIKO recommendation, schedule from age 15, vaccination from age 18 in individual cases, authorisation from age 9 without an upper age limit, cost coverage, safety.',
    },
  },
  rkiHpvRatgeber: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Humane Papillomvirus-assoziierte Erkrankungen',
      en: 'RKI guide: Human papillomavirus-associated diseases',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_HPV.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Vollständig aktualisierte Fassung, Stand 24.09.2026 (Epidemiologisches Bulletin 39/2026): Erreger, Übertragung, Häufigkeit, Verlauf, Früherkennung, Impfung ab 18 Jahren.',
      en: 'Fully updated version as of 24 September 2026 (Epidemiological Bulletin 39/2026): pathogen, transmission, frequency, course, screening, vaccination from age 18.',
    },
  },
  rkiHpvFaktenblatt: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'Kurz & Knapp: Faktenblatt zur HPV-Impfung',
      en: 'In brief: fact sheet on HPV vaccination',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Informationsmaterialien/Faktenblaetter-zum-Impfen/Uebersetzung/HPV/Uebersetzung-HPV-inhalt.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Stand September 2026: Schutzwirkung nach Impfalter; gesetzliche Krankenkassen sind nur bis zum 18. Geburtstag zur Kostenübernahme verpflichtet.',
      en: 'As of September 2026: protection by age at vaccination; statutory insurers are only obliged to cover the costs until the 18th birthday.',
    },
  },
  rkiHpvAufklaerung: {
    publisher: 'Robert Koch-Institut (RKI) / Deutsches Grünes Kreuz',
    title: {
      de: 'Aufklärungsinformationen zur Schutzimpfung gegen Humane Papillomviren',
      en: 'Information sheet on vaccination against human papillomaviruses',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Informationsmaterialien/verschiedene-Sprachen/HPV/HPV-Impfaufklaerung.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Aufklärungsmerkblatt, Stand Oktober 2024: Impfstoffart, Impfschema, Gegenanzeigen, Schwangerschaft und Stillzeit, Impfreaktionen.',
      en: 'Information sheet as of October 2024: vaccine type, schedule, contraindications, pregnancy and breastfeeding, reactions.',
    },
  },
  peiHpv: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen HPV (Humane Papillomviren)',
      en: 'HPV (human papillomavirus) vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/gebaermutterhalskrebs-hpv/hpv-node.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Zulassung (ab einem Lebensalter von 9 Jahren) und Fachinformation zu den HPV-Impfstoffen; Liste aktualisiert am 04.11.2026.',
      en: 'Authorisation (from 9 years of age) and product information for the HPV vaccines; list updated on 4 November 2026.',
    },
  },
  gbaSiRlHpvZoster: {
    publisher: 'Gemeinsamer Bundesausschuss (G-BA)',
    title: {
      de: 'Schutzimpfungs-Richtlinie (SI-RL), Fassung in Kraft seit 29.10.2026',
      en: 'Vaccination Directive (Schutzimpfungs-Richtlinie), version in force since 29 October 2026',
    },
    url: 'https://www.g-ba.de/richtlinien/60/',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Kassenleistung nach § 11 und Anlage 1: HPV-Impfung von 9 bis 14 Jahren, Nachholen bis zum vollendeten 18. Lebensjahr; Herpes zoster ab 60 Jahren sowie ab 18 Jahren bei erhöhter gesundheitlicher Gefährdung.',
      en: 'Statutory benefit under section 11 and Annex 1: HPV vaccination from 9 to 14 years, catch-up until the 18th birthday; herpes zoster from age 60 and from age 18 for people at increased health risk.',
    },
  },
  rkiZosterFaq: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'Gürtelrose (Herpes zoster): Antworten auf häufig gestellte Fragen zu Erkrankung und Impfung',
      en: 'Shingles (herpes zoster): answers to frequently asked questions on the disease and vaccination',
    },
    url: 'https://www.rki.de/SharedDocs/FAQs/DE/Herpes_zoster/FAQ_Uebersicht_HZ.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Stand 04.02.2026: STIKO-Empfehlung, Zulassung, Impfschema, Sicherheit, Gegenanzeigen, Impfung nach durchgemachter Gürtelrose, Krankheitsbild.',
      en: 'As of 4 February 2026: STIKO recommendation, authorisation, schedule, safety, contraindications, vaccination after shingles, clinical picture.',
    },
  },
  rkiVarizellenZosterRatgeber: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Windpocken (Varizellen), Gürtelrose (Herpes zoster)',
      en: 'RKI guide: Chickenpox (varicella), shingles (herpes zoster)',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Varizellen.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Stand 27.01.2026: Erreger, Ansteckungsfähigkeit, Verlauf, Komplikationen und Behandlung.',
      en: 'As of 27 January 2026: pathogen, infectiousness, course, complications and treatment.',
    },
  },
  rkiZosterFaktenblatt: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'Kurz & Knapp: Faktenblatt zur Herpes-zoster-Impfung',
      en: 'In brief: fact sheet on herpes zoster vaccination',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Informationsmaterialien/Faktenblaetter-zum-Impfen/Zoster.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Stand Februar 2026: Häufigkeit der postherpetischen Neuralgie, Impfreaktionen, Impfschema.',
      en: 'As of February 2026: frequency of postherpetic neuralgia, reactions, schedule.',
    },
  },
  rkiZosterAufklaerung: {
    publisher: 'Robert Koch-Institut (RKI) / Deutsches Grünes Kreuz',
    title: {
      de: 'Aufklärungsinformationen zur Schutzimpfung gegen Gürtelrose mit Totimpfstoff',
      en: 'Information sheet on vaccination against shingles with the inactivated vaccine',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Informationsmaterialien/verschiedene-Sprachen/HZV/Herpes-zoster-Impfaufklaerung.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Aufklärungsmerkblatt, Stand November 2025: Zulassung, Impfschema, Gegenanzeigen, Schwangerschaft und Stillzeit, Impfreaktionen.',
      en: 'Information sheet as of November 2025: authorisation, schedule, contraindications, pregnancy and breastfeeding, reactions.',
    },
  },
  stikoZoster2025: {
    publisher: 'Robert Koch-Institut (RKI) / STIKO',
    title: {
      de: 'Erweiterung der Indikationsimpfempfehlung zur Herpes-zoster-Impfung – Epidemiologisches Bulletin 45/2025',
      en: 'Extension of the indication-based recommendation for herpes zoster vaccination – Epidemiological Bulletin 45/2025',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/Epidemiologisches-Bulletin/2025/45_25.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Beschluss und wissenschaftliche Begründung der STIKO vom 06.11.2025: Impfung mit dem Totimpfstoff für Personen ab 18 Jahren mit erhöhtem Risiko, an Herpes zoster zu erkranken.',
      en: 'STIKO decision and scientific rationale of 6 November 2025: vaccination with the inactivated vaccine for people aged 18 and over at increased risk of herpes zoster.',
    },
  },
  gbaZoster2025: {
    publisher: 'Gemeinsamer Bundesausschuss (G-BA)',
    title: {
      de: 'Beschluss vom 18.12.2025: Erweiterung der Herpes-zoster-Indikationsimpfung in der Schutzimpfungs-Richtlinie',
      en: 'Decision of 18 December 2025: extension of the indication-based herpes zoster vaccination in the Vaccination Directive',
    },
    url: 'https://www.g-ba.de/beschluesse/7598/',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Veröffentlicht im Bundesanzeiger (BAnz AT 12.02.2026 B3), in Kraft seit 13.02.2026: Kassenleistung ab 18 statt bisher ab 50 Jahren bei erhöhter gesundheitlicher Gefährdung.',
      en: 'Published in the Federal Gazette (BAnz AT 12.02.2026 B3), in force since 13 February 2026: statutory benefit from age 18 instead of 50 for people at increased health risk.',
    },
  },
  peiZoster: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Gürtelrose (Herpes zoster)',
      en: 'Shingles (herpes zoster) vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/guertelrose-herpes-zoster/guertelrose--node.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Zulassung und Fachinformation zum Totimpfstoff (rekombinant, adjuvantiert): für Erwachsene ab 50 Jahren sowie ab 18 Jahren bei erhöhtem Risiko für Herpes zoster; Liste aktualisiert am 04.11.2026.',
      en: 'Authorisation and product information for the inactivated vaccine (recombinant, adjuvanted): for adults aged 50 and over and from age 18 at increased risk of herpes zoster; list updated on 4 November 2026.',
    },
  },
} satisfies Record<string, Source>;
