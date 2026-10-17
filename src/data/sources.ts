/**
 * Zentrales Quellen-/Zitations-Register.
 *
 * Jede Fachseite referenziert ihre Belege ausschließlich über die hier
 * registrierten IDs (`SourceId`). Dadurch erzwingt TypeScript, dass keine
 * unbelegte oder nicht registrierte Quelle verwendet werden kann — die
 * Entsprechung zum „sources[] ist Pflicht"-Schema, nur ohne MDX/Zod.
 *
 * `retrieved` = Datum des letzten Abrufs/der letzten Prüfung der Quelle.
 * URLs zuletzt am 04.06.2026 auf Erreichbarkeit geprüft; vor Go-Live im
 * jährlichen Zyklus erneut gegenprüfen (siehe README / Übergabe).
 */
import type { Locale } from '../config/site';

type Loc = Record<Locale, string>;

export interface Source {
  /** Herausgeber/Institution, z. B. „WHO", „Robert Koch-Institut (RKI)". */
  publisher: string;
  /** Titel des referenzierten Dokuments (lokalisiert). */
  title: Loc;
  /** Stabile URL zur Quelle. */
  url: string;
  /** Datum des letzten Abrufs/der letzten inhaltlichen Prüfung. */
  retrieved: Date;
  /** Optionaler Zusatz (Ausgabe, Fundstelle, Kurzhinweis). */
  note?: Loc;
}

/**
 * Registrierte Quellen. Keys sind die zitierbaren IDs (`SourceId`).
 * Gelbfieber (Phase 3), FSME (Phase 4) und Risikogebiete (Phase 5).
 */
export const sources = {
  rkiGelbfieber: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Gelbfieber',
      en: 'RKI guide: Yellow fever (Gelbfieber)',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Gelbfieber.html',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte.',
      en: 'Epidemiological guidance for physicians.',
    },
  },
  whoYellowFever: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Gelbfieber',
      en: 'Fact sheet: Yellow fever',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/yellow-fever',
    retrieved: new Date('2026-05-15'),
  },
  whoPositionPaper: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Gelbfieber-Impfstoffe: WHO-Positionspapier (2013) & Internationale Gesundheitsvorschriften (IHR)',
      en: 'Yellow fever vaccines: WHO position paper (2013) & International Health Regulations (IHR)',
    },
    url: 'https://www.who.int/publications/i/item/who-wer8827',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Weekly Epidemiological Record 88(27):269–283; IHR-Anhang 7: Gültigkeit des Impfnachweises lebenslang (seit 11.07.2016).',
      en: 'Weekly Epidemiological Record 88(27):269–283; IHR Annex 7: certificate validity for the life of the vaccinee (since 11 July 2016).',
    },
  },
  peiGelbfieber: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Gelbfieber',
      en: 'Yellow fever vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/gelbfieber/gelbfieber-node.html',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Zulassung und Fachinformation zu Stamaril® (Lebendimpfstoff, Stamm 17D-204).',
      en: 'Authorisation and product information for Stamaril® (live vaccine, strain 17D-204).',
    },
  },
  dtgReiseimpfungen: {
    publisher: 'Deutsche Gesellschaft für Tropenmedizin, Reisemedizin und Globale Gesundheit (DTG)',
    title: {
      de: 'Empfehlungen zu Reiseimpfungen',
      en: 'Recommendations on travel vaccinations',
    },
    url: 'https://www.dtg.org/empfehlungen-und-leitlinien.html',
    retrieved: new Date('2026-05-15'),
  },
  auswaertigesAmt: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Reise- und Sicherheitshinweise (inkl. Gesundheit/Impfschutz)',
      en: 'Travel and safety information (incl. health/vaccination)',
    },
    url: 'https://www.auswaertiges-amt.de/de/reiseundsicherheit/reise-und-sicherheitshinweise',
    retrieved: new Date('2026-05-15'),
  },
  rkiFsme: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Frühsommer-Meningoenzephalitis (FSME)',
      en: 'RKI guide: Tick-borne encephalitis (FSME/TBE)',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_FSME.html',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte.',
      en: 'Epidemiological guidance for physicians.',
    },
  },
  rkiFsmeRisikogebiete: {
    publisher: 'Robert Koch-Institut (RKI) / STIKO',
    title: {
      de: 'FSME-Risikogebiete in Deutschland & STIKO-Impfempfehlung',
      en: 'TBE risk areas in Germany & STIKO vaccination recommendation',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Infektionskrankheiten-A-Z/F/FSME/Karte.html',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Jährlich aktualisierte Bewertung der Risikogebiete (Epidemiologisches Bulletin) sowie Empfehlung der Ständigen Impfkommission (STIKO).',
      en: 'Annually updated assessment of risk areas (Epidemiological Bulletin) and recommendation of the German Standing Committee on Vaccination (STIKO).',
    },
  },
  peiFsme: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen FSME',
      en: 'TBE (FSME) vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/fsme/fsme-node.html',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Zulassung und Fachinformation zu FSME-Immun® und Encepur®.',
      en: 'Authorisation and product information for FSME-Immun® and Encepur®.',
    },
  },
  whoYellowFeverCountries: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Länder mit Gelbfieber-Übertragungsrisiko und Länder mit Impfnachweis-Pflicht',
      en: 'Countries with risk of yellow fever transmission and countries requiring yellow fever vaccination',
    },
    url: 'https://www.who.int/publications/m/item/countries-with-risk-of-yellow-fever-transmission-and-countries-requiring-yellow-fever-vaccination-(november-2022)',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Periodisch aktualisierte Länderliste der WHO (International Travel and Health); maßgeblich für Einreisebestimmungen — vor der Reise prüfen.',
      en: 'WHO country list (International Travel and Health), updated periodically; authoritative for entry requirements — check before travelling.',
    },
  },
  ecdcTbe: {
    publisher: 'European Centre for Disease Prevention and Control (ECDC)',
    title: {
      de: 'Frühsommer-Meningoenzephalitis (FSME) in Europa',
      en: 'Tick-borne encephalitis (TBE) in Europe',
    },
    url: 'https://www.ecdc.europa.eu/en/tick-borne-encephalitis',
    retrieved: new Date('2026-05-15'),
    note: {
      de: 'Surveillance-Daten und Verbreitung der FSME in Europa.',
      en: 'Surveillance data and distribution of TBE across Europe.',
    },
  },
  stikoImpfempfehlungen: {
    publisher: 'Robert Koch-Institut (RKI) / STIKO',
    title: {
      de: 'Empfehlungen der Ständigen Impfkommission (STIKO) & Impfkalender',
      en: 'Recommendations of the German Standing Committee on Vaccination (STIKO) & vaccination schedule',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Staendige-Impfkommission/Empfehlungen-der-STIKO/empfehlungen-der-stiko-node.html',
    retrieved: new Date('2026-10-17'),
    note: {
      de: 'Maßgebliche Grundlage für Standard-, Indikations- und Reiseimpfungen in Deutschland; jährlich im Epidemiologischen Bulletin aktualisiert.',
      en: 'Authoritative basis for standard, indication and travel vaccinations in Germany; updated annually in the Epidemiological Bulletin.',
    },
  },
  stikoReise2026: {
    publisher: 'Robert Koch-Institut (RKI) / STIKO, DTG, StAR',
    title: {
      de: 'Empfehlungen zu Reiseimpfungen – Epidemiologisches Bulletin 27/2026',
      en: 'Recommendations on travel vaccinations – Epidemiological Bulletin 27/2026',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/Epidemiologisches-Bulletin/2026/27_26.pdf',
    retrieved: new Date('2026-10-17'),
    note: {
      de: 'Gemeinsame Reiseimpfempfehlungen von STIKO, DTG und StAR (veröffentlicht 02.07.2026), u. a. zu Gelbfieber-Auffrischung, Tollwut, Japanischer Enzephalitis und Typhus.',
      en: 'Joint travel-vaccination recommendations of STIKO, DTG and StAR (published 2 July 2026), including yellow fever boosters, rabies, Japanese encephalitis and typhoid.',
    },
  },
  peiIxchiqRhb: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Rote-Hand-Brief zum Chikungunya-Lebendimpfstoff (14.07.2026)',
      en: 'Dear Healthcare Professional Communication on the live chikungunya vaccine (14 July 2026)',
    },
    url: 'https://www.pei.de/DE/newsroom/veroffentlichungen-arzneimittel/sicherheitsinformationen-human/2026/ablage2026/2026-07-14-rhb-ixchiq.html',
    retrieved: new Date('2026-10-17'),
    note: {
      de: 'Einschränkung der Anwendung auf Personen mit hohem Risiko für eine Chikungunya-Infektion.',
      en: 'Use restricted to persons at high risk of chikungunya infection.',
    },
  },
  rkiMalaria: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Malaria',
      en: 'RKI guide: Malaria',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Malaria.html',
    retrieved: new Date('2026-06-04'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte.',
      en: 'Epidemiological guidance for physicians.',
    },
  },
  whoMalaria: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Malaria',
      en: 'Fact sheet: Malaria',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/malaria',
    retrieved: new Date('2026-06-04'),
  },
  cdcAltitude: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: {
      de: 'CDC Yellow Book: Reisen in große Höhen & Höhenkrankheit',
      en: 'CDC Yellow Book: High-Elevation Travel & Altitude Illness',
    },
    url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/environmental-hazards-risks/high-elevation-travel-and-altitude-illness',
    retrieved: new Date('2026-06-04'),
    note: {
      de: 'International anerkannte reisemedizinische Übersicht zu Akklimatisation und Höhenkrankheit.',
      en: 'Internationally recognised travel-medicine overview of acclimatisation and altitude illness.',
    },
  },
  whoTravelHealth: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Internationale Reisen und Gesundheit (Reisemedizinische Empfehlungen)',
      en: 'International travel and health',
    },
    url: 'https://www.who.int/health-topics/travel-and-health',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Allgemeine reisemedizinische Empfehlungen u. a. zu Mückenschutz, Lebensmittel- und Wasserhygiene.',
      en: 'General travel-health recommendations including mosquito-bite protection and food and water hygiene.',
    },
  },
  rkiDengue: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber / FAQ: Dengue-Fieber',
      en: 'RKI guide / FAQ: Dengue fever',
    },
    url: 'https://www.rki.de/SharedDocs/FAQs/DE/Dengue/FAQ-Liste.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Fachliche Information zu Erreger, Übertragung, Verlauf und Vorbeugung.',
      en: 'Information on pathogen, transmission, course of disease and prevention.',
    },
  },
  whoDengue: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Dengue und schweres Dengue',
      en: 'Fact sheet: Dengue and severe dengue',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue',
    retrieved: new Date('2026-06-12'),
  },
  stikoDengue: {
    publisher: 'Robert Koch-Institut (RKI) / STIKO',
    title: {
      de: 'STIKO-Empfehlung zur Dengue-Impfung (Qdenga®)',
      en: 'STIKO recommendation on dengue vaccination (Qdenga®)',
    },
    url: 'https://www.rki.de/SharedDocs/FAQs/DE/Dengue/FAQ-Liste.html',
    retrieved: new Date('2026-10-17'),
    note: {
      de: 'Reiseimpfempfehlung: Personen ab 4 Jahren mit labordiagnostisch gesicherter, früher durchgemachter Dengue-Infektion bei Reisen mit erhöhtem Expositionsrisiko (Epidemiologisches Bulletin 48/2023, bestätigt in 27/2026).',
      en: 'Travel recommendation: persons aged 4+ with a laboratory-confirmed previous dengue infection travelling with increased exposure risk (Epidemiological Bulletin 48/2023, confirmed in 27/2026).',
    },
  },
  emaQdenga: {
    publisher: 'European Medicines Agency (EMA)',
    title: {
      de: 'Qdenga® (Dengue-Impfstoff, tetravalent, attenuiert) – EPAR/Produktinformation',
      en: 'Qdenga® (dengue tetravalent vaccine, live, attenuated) – EPAR/product information',
    },
    url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/qdenga',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'EU-Zulassung seit 05.12.2022; Fachinformation zu Impfschema und Gegenanzeigen.',
      en: 'EU authorisation since 5 Dec 2022; product information on schedule and contraindications.',
    },
  },
  rkiChikungunya: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI: Chikungunya-Fieber – Infektion und Krankheitsbild',
      en: 'RKI: Chikungunya fever – infection and clinical picture',
    },
    url: 'https://www.rki.de/SharedDocs/FAQs/DE/Impfen/Chikungunya/FAQ-Liste_gesamt.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Fachliche Information zu Erreger, Übertragung, Verlauf und Vorbeugung.',
      en: 'Information on pathogen, transmission, course of disease and prevention.',
    },
  },
  whoChikungunya: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Chikungunya',
      en: 'Fact sheet: Chikungunya',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/chikungunya',
    retrieved: new Date('2026-06-12'),
  },
  stikoChikungunya: {
    publisher: 'Robert Koch-Institut (RKI) / STIKO',
    title: {
      de: 'STIKO-Empfehlung zur Chikungunya-Impfung',
      en: 'STIKO recommendation on chikungunya vaccination',
    },
    url: 'https://www.rki.de/SharedDocs/FAQs/DE/Impfen/Chikungunya/FAQ-Liste_Impfempfehlung.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Indikationsimpfung ab 12 Jahren für bestimmte Reisende (Epidemiologisches Bulletin 27/2026, RKI-FAQ Stand 15.07.2026); Lebendimpfstoff seit Juli 2026 nur noch bei hohem Infektionsrisiko.',
      en: 'Indication vaccination from age 12 for certain travellers (Epidemiological Bulletin 27/2026, RKI FAQ as of 15 July 2026); since July 2026 the live vaccine is restricted to persons at high risk of infection.',
    },
  },
  emaIxchiq: {
    publisher: 'European Medicines Agency (EMA)',
    title: {
      de: 'Ixchiq® (Chikungunya-Impfstoff, lebend-attenuiert) – EPAR/Produktinformation',
      en: 'Ixchiq® (chikungunya vaccine, live, attenuated) – EPAR/product information',
    },
    url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/ixchiq',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'EU-Zulassung 28.06.2024; 2025 verschärfte Warnhinweise; seit 06/2026 Indikation auf Personen mit hohem Infektionsrisiko eingeschränkt (PEI-Rote-Hand-Brief 14.07.2026).',
      en: 'EU authorisation 28 June 2024; strengthened warnings in 2025; since 06/2026 indication restricted to persons at high risk of infection (PEI communication of 14 July 2026).',
    },
  },
  emaVimkunya: {
    publisher: 'European Medicines Agency (EMA)',
    title: {
      de: 'Vimkunya® (Chikungunya-Impfstoff, VLP/nicht-lebend) – EPAR/Produktinformation',
      en: 'Vimkunya® (chikungunya vaccine, VLP/non-live) – EPAR/product information',
    },
    url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/vimkunya',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'EU-Zulassung 28.02.2025; rekombinanter Virus-ähnlicher-Partikel-Impfstoff (nicht-lebend), ab 12 Jahren.',
      en: 'EU authorisation 28 Feb 2025; recombinant virus-like-particle (non-live) vaccine, from age 12.',
    },
  },
  rkiHepatitisA: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Hepatitis A',
      en: 'RKI guide: Hepatitis A',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_HepatitisA.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte.',
      en: 'Epidemiological guidance for physicians.',
    },
  },
  whoHepatitisA: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Hepatitis A',
      en: 'Fact sheet: Hepatitis A',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-a',
    retrieved: new Date('2026-06-12'),
  },
  peiHepatitisA: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Hepatitis A',
      en: 'Hepatitis A vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/hepatitis-a/hepatitis-a-node.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Zulassung und Fachinformation zu den verfügbaren Totimpfstoffen (auch Kombinationsimpfstoffe).',
      en: 'Authorisation and product information for the available inactivated vaccines (incl. combination vaccines).',
    },
  },
  rkiHepatitisB: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Hepatitis B und D',
      en: 'RKI guide: Hepatitis B and D',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_HepatitisB.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte.',
      en: 'Epidemiological guidance for physicians.',
    },
  },
  whoHepatitisB: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Hepatitis B',
      en: 'Fact sheet: Hepatitis B',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-b',
    retrieved: new Date('2026-06-12'),
  },
  peiHepatitisB: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Hepatitis B',
      en: 'Hepatitis B vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/hepatitis-b/hepatitis-b-node.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Zulassung und Fachinformation zu den rekombinanten Totimpfstoffen (auch Kombinationsimpfstoffe).',
      en: 'Authorisation and product information for the recombinant inactivated vaccines (incl. combination vaccines).',
    },
  },
  rkiTyphus: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Typhus abdominalis, Paratyphus',
      en: 'RKI guide: Typhoid and paratyphoid fever',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Typhus_Paratyphus.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte (akt. 2025; Hinweis auf zunehmende Antibiotika-Resistenzen).',
      en: 'Epidemiological guidance for physicians (updated 2025; notes rising antibiotic resistance).',
    },
  },
  whoTyphus: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Typhus (Typhoid)',
      en: 'Fact sheet: Typhoid',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/typhoid',
    retrieved: new Date('2026-06-12'),
  },
  peiTyphus: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Typhus',
      en: 'Typhoid vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/typhus/typhus-node.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Zulassung und Fachinformation zum oralen Lebendimpfstoff (Ty21a) und zum Vi-Polysaccharid-Totimpfstoff.',
      en: 'Authorisation and product information for the oral live vaccine (Ty21a) and the Vi polysaccharide inactivated vaccine.',
    },
  },
  rkiTollwut: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Tollwut',
      en: 'RKI guide: Rabies',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Tollwut.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte (inkl. Postexpositionsprophylaxe).',
      en: 'Epidemiological guidance for physicians (incl. post-exposure prophylaxis).',
    },
  },
  whoRabies: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Tollwut (Rabies)',
      en: 'Fact sheet: Rabies',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/rabies',
    retrieved: new Date('2026-06-12'),
  },
  peiTollwut: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Tollwut',
      en: 'Rabies vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/tollwut/tollwut-node.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Zulassung und Fachinformation zu den Totimpfstoffen sowie zum Tollwut-Immunglobulin.',
      en: 'Authorisation and product information for the inactivated vaccines and rabies immunoglobulin.',
    },
  },
  rkiJapanischeEnzephalitis: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI: Impfung gegen Japanische Enzephalitis (Impfungen A–Z)',
      en: 'RKI: Japanese encephalitis vaccination (Vaccinations A–Z)',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Impfungen-A-Z/Japanische-Enzephalitis/JapanEnzephalitis.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Fachliche Information zu Erreger, Verbreitung und Impfung (für die Japanische Enzephalitis besteht kein klassischer RKI-Ratgeber).',
      en: 'Information on pathogen, distribution and vaccination (no classic RKI guide exists for Japanese encephalitis).',
    },
  },
  whoJapaneseEncephalitis: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Japanische Enzephalitis',
      en: 'Fact sheet: Japanese encephalitis',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/japanese-encephalitis',
    retrieved: new Date('2026-06-12'),
  },
  peiJapanischeEnzephalitis: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Japanische Enzephalitis',
      en: 'Japanese encephalitis vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/japanische-enzephalitis/japanische-enzephalitis-node.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Zulassung und Fachinformation zum inaktivierten Totimpfstoff (IXIARO®).',
      en: 'Authorisation and product information for the inactivated vaccine (IXIARO®).',
    },
  },
  rkiMeningokokken: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI-Ratgeber: Meningokokken, invasive Erkrankungen',
      en: 'RKI guide: Meningococcal invasive disease',
    },
    url: 'https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Meningokokken.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Epidemiologisch-fachlicher Ratgeber für Ärztinnen und Ärzte.',
      en: 'Epidemiological guidance for physicians.',
    },
  },
  whoMeningitis: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Meningitis (inkl. Meningokokken)',
      en: 'Fact sheet: Meningitis (incl. meningococcal)',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/meningitis',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Konsolidiertes WHO-Fact-Sheet (Stand 01.04.2025); ersetzt das frühere eigenständige Meningokokken-Blatt.',
      en: 'Consolidated WHO fact sheet (as of 1 April 2025); replaces the former standalone meningococcal sheet.',
    },
  },
  peiMeningokokken: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Meningokokken',
      en: 'Meningococcal vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/meningokokken/meningokokken-node.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Zulassung und Fachinformation zu den Konjugat- (ACWY/C) und Protein-Impfstoffen (Serogruppe B).',
      en: 'Authorisation and product information for the conjugate (ACWY/C) and protein (serogroup B) vaccines.',
    },
  },
  rkiCholera: {
    publisher: 'Robert Koch-Institut (RKI)',
    title: {
      de: 'RKI: Impfung gegen Cholera (Impfungen A–Z)',
      en: 'RKI: Cholera vaccination (Vaccinations A–Z)',
    },
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Impfungen-A-Z/Cholera/Cholera.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Fachliche Information zu Erreger, Verbreitung und Impfung (für die Cholera besteht kein klassischer RKI-Ratgeber).',
      en: 'Information on pathogen, distribution and vaccination (no classic RKI guide exists for cholera).',
    },
  },
  whoCholera: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Fact Sheet: Cholera',
      en: 'Fact sheet: Cholera',
    },
    url: 'https://www.who.int/news-room/fact-sheets/detail/cholera',
    retrieved: new Date('2026-06-12'),
  },
  peiCholera: {
    publisher: 'Paul-Ehrlich-Institut (PEI)',
    title: {
      de: 'Impfstoffe gegen Cholera',
      en: 'Cholera vaccines',
    },
    url: 'https://www.pei.de/DE/arzneimittel/impfstoffe/cholera/cholera-node.html',
    retrieved: new Date('2026-06-12'),
    note: {
      de: 'Zulassung und Fachinformation zu den oralen Impfstoffen (inaktiviert sowie Lebendimpfstoff).',
      en: 'Authorisation and product information for the oral vaccines (inactivated and live).',
    },
  },
} satisfies Record<string, Source>;

/** Zitierbare Quellen-ID (Union aller registrierten Quellen). */
export type SourceId = keyof typeof sources;

/** Eine Quelle inkl. ihrer ID. */
export type SourceWithId = Source & { id: SourceId };

/** Registrierte Quellen zu den angegebenen IDs auflösen (Reihenfolge bleibt erhalten). */
export function getSources(ids: SourceId[]): SourceWithId[] {
  return ids.map((id) => ({ id, ...sources[id] }));
}
