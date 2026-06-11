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
    url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Impfen/Impfempfehlungen/Impfempfehlungen_node.html',
    retrieved: new Date('2026-06-04'),
    note: {
      de: 'Maßgebliche Grundlage für Standard-, Indikations- und Reiseimpfungen in Deutschland; jährlich im Epidemiologischen Bulletin aktualisiert.',
      en: 'Authoritative basis for standard, indication and travel vaccinations in Germany; updated annually in the Epidemiological Bulletin.',
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
} satisfies Record<string, Source>;

/** Zitierbare Quellen-ID (Union aller registrierten Quellen). */
export type SourceId = keyof typeof sources;

/** Eine Quelle inkl. ihrer ID. */
export type SourceWithId = Source & { id: SourceId };

/** Registrierte Quellen zu den angegebenen IDs auflösen (Reihenfolge bleibt erhalten). */
export function getSources(ids: SourceId[]): SourceWithId[] {
  return ids.map((id) => ({ id, ...sources[id] }));
}
