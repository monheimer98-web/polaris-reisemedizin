/**
 * Zentrale Praxis-Konfiguration — EINZIGE Quelle der Wahrheit.
 *
 * Alle mit „[…]" markierten Werte sind Platzhalter und müssen vor dem
 * Go-Live durch die realen Praxisdaten ersetzt werden. Der Markenname
 * „Polaris" lässt sich hier mit einer Zeile austauschen.
 */

export type Locale = 'de' | 'en';

export const LOCALES: Locale[] = ['de', 'en'];
export const DEFAULT_LOCALE: Locale = 'de';

/** Produktiv-Domain (für Canonical-URLs, Sitemap, hreflang). */
export const SITE_URL = 'https://www.polaris-reisemedizin.de';

export interface TeamMember {
  /** Anzeigename inkl. Titel, z. B. „Dr. med. …". */
  name: string;
  /** Funktion/Rolle, z. B. „Arzt – Reise- & Impfmedizin" oder „Medizinischer Mitarbeiter". */
  role: { de: string; en: string };
  /** Kurzvita / Schwerpunkte. */
  bio: { de: string; en: string };
  /** Pfad zum Porträtfoto unter `public/`, z. B. „/images/team/…webp". */
  photo: string;
  /**
   * Optionaler CSS-`object-position`-Wert für den quadratischen Avatar
   * (rein gestalterisch, nicht-destruktiv – das Originalfoto bleibt
   * unverändert). Rahmt das Gesicht im 1:1-Ausschnitt. Default: `center`.
   */
  focal?: string;
  /**
   * Ist diese Person approbierte:r Ärzt:in? Steuert die korrekte
   * Differenzierung (Arzt vs. medizinische:r Mitarbeiter:in) – relevant für
   * Texte und ein späteres `Physician`-JSON-LD (nur echte Ärzt:innen).
   */
  isPhysician: boolean;
}

export interface OpeningHours {
  day: { de: string; en: string };
  hours: { de: string; en: string };
}

export const site = {
  brand: {
    /** Markenname — hier zentral änderbar. */
    name: 'Polaris',
    tagline: {
      de: 'Praxis für Reise- & Impfmedizin',
      en: 'Practice for Travel & Vaccination Medicine',
    },
    /** Vollständige rechtliche Bezeichnung (für Impressum). */
    legalName: '[PLATZHALTER: vollständige rechtliche Bezeichnung der Praxis bzw. des Praxisinhabers, z. B. „Praxis Polaris – Alexander Mayer"]',
    domain: 'polaris-reisemedizin.de',
    url: SITE_URL,
    /** Gründungsbezug für Texte; rein redaktionell. */
    foundedYear: 2026,
  },

  contact: {
    street: 'Leipziger Weg 5',
    /**
     * Optionaler Anschriften-Zusatz (Etage/Aufgang). Bewusst getrennt von
     * `street`, damit das JSON-LD-`streetAddress` schlank bleibt; wird nur
     * sichtbar (Footer/Kontaktseite) ausgegeben.
     */
    addressNote: { de: '1. Etage', en: '1st floor' },
    zip: '40764',
    city: 'Langenfeld',
    country: { de: 'Deutschland', en: 'Germany' },
    phone: '[PLATZHALTER: +49 …]',
    phoneHref: 'tel:+490000000000',
    fax: '',
    email: '[PLATZHALTER: kontakt@polaris-reisemedizin.de]',
    emailHref: 'mailto:kontakt@polaris-reisemedizin.de',
  },

  /** Öffnungs-/Sprechzeiten. */
  openingHours: [
    { day: { de: 'Mo, Di, Do', en: 'Mon, Tue, Thu' }, hours: { de: '08:30 – 12:30 & 14:30 – 18:00 Uhr', en: '8:30 am – 12:30 pm & 2:30 – 6:00 pm' } },
    { day: { de: 'Mittwoch', en: 'Wednesday' }, hours: { de: '08:30 – 13:00 Uhr', en: '8:30 am – 1:00 pm' } },
    { day: { de: 'Freitag', en: 'Friday' }, hours: { de: '08:30 – 14:00 Uhr', en: '8:30 am – 2:00 pm' } },
    { day: { de: 'Sa, So', en: 'Sat, Sun' }, hours: { de: 'geschlossen', en: 'closed' } },
  ] as OpeningHours[],

  /**
   * Das Praxisteam. Namen und Fotos sind real; die Kurzvita bleibt vorerst
   * Platzhalter (vor Go-Live ergänzen). Ein Arzt (Alexander Mayer) + ein
   * medizinischer Mitarbeiter ohne Approbation (Konstantin Mayer).
   */
  team: [
    {
      name: 'Alexander Mayer',
      role: { de: 'Arzt – Reise- & Impfmedizin', en: 'Physician – Travel & Vaccination Medicine' },
      bio: {
        de: '[Kurzvita: Approbation, reisemedizinische Qualifikation (z. B. DTG-Zertifikat), Schwerpunkte.]',
        en: '[Short bio: medical license, travel-medicine qualification (e.g. DTG certificate), focus areas.]',
      },
      photo: '/images/team/alexander-mayer.webp',
      focal: 'center 20%',
      isPhysician: true,
    },
    {
      name: 'Konstantin Mayer',
      role: { de: 'Medizinischer Mitarbeiter', en: 'Medical team member' },
      bio: {
        de: '[Kurzvita: unterstützt die Praxis organisatorisch und im Ablauf – z. B. Terminkoordination, Vorbereitung der Beratung und Impfdokumentation.]',
        en: '[Short bio: supports the practice organisationally and operationally – e.g. appointment coordination, consultation preparation and vaccination documentation.]',
      },
      photo: '/images/team/konstantin-mayer.webp',
      focal: 'center 25%',
      isPhysician: false,
    },
  ] as TeamMember[],

  /** Berufsrechtliche Angaben (Pflicht im Impressum). */
  professional: {
    jobTitle: { de: 'Ärztin / Arzt', en: 'Physician (Ärztin / Arzt)' },
    /** Land, in dem die Approbation/Berufsbezeichnung verliehen wurde. */
    jobTitleCountry: { de: 'verliehen in der Bundesrepublik Deutschland', en: 'awarded in the Federal Republic of Germany' },
    chamberName: '[PLATZHALTER: zuständige Ärztekammer, z. B. „Ärztekammer Nordrhein"]',
    chamberUrl: '[PLATZHALTER: https://www.aekno.de]',
    /** Berufsordnung der zuständigen Kammer. */
    professionalRules: 'Berufsordnung der zuständigen Ärztekammer',
    professionalRulesUrl: '[PLATZHALTER: URL zur Berufsordnung]',
    /** Umsatzsteuer-ID, falls vorhanden (Heilbehandlungen sind i. d. R. umsatzsteuerbefreit). */
    vatId: '',
  },

  /** Zulassung als Gelbfieberimpfstelle. */
  yellowFever: {
    /** Aktenzeichen/Registriernummer der Zulassung. */
    authorizationRef: '[PLATZHALTER: Aktenzeichen der Zulassung]',
    /** Zuständige Behörde / Bundesland, das die Impfstelle autorisiert hat. */
    authority: '[PLATZHALTER: zuständige Behörde / Bundesland]',
  },

  /** Berufshaftpflichtversicherung (Pflicht für niedergelassene Ärzt:innen). */
  liabilityInsurance: {
    insurer: '[PLATZHALTER: Name & Sitz des Versicherers]',
    scope: { de: 'Geltungsbereich: Deutschland', en: 'Coverage area: Germany' },
  },

  /**
   * Online-Terminbuchung über ein zertifiziertes Praxis-Terminsystem.
   * Wird per 2-Klick-Lösung (Einwilligung) eingebunden — siehe ConsentEmbed.
   * `embedUrl` leer lassen, bis ein Anbieter-Konto + AVV vorliegt.
   */
  booking: {
    /** Anzeigename des Anbieters (z. B. „Dr. Flex", „Doctolib", „samedi"). */
    provider: 'Dr. Flex',
    /** Einbettungs-URL des Buchungs-Widgets (vom Anbieter). Leer = Platzhalter. */
    embedUrl: '',
    /** Datenschutzerklärung des Anbieters (für die Consent-Information). */
    providerPrivacyUrl: '',
    /** Direkter Buchungslink als Fallback (öffnet beim Anbieter). */
    externalUrl: '',
  },

  /**
   * Anfahrts-Karte (Anfahrt-Seite). Ebenfalls 2-Klick-Lösung — der Karten-
   * `embedUrl` wird erst nach geklärter datenschutzkonformer Einbettung (samt
   * AVV/Consent-Text) gesetzt. `externalUrl` ist ein reiner Outbound-Link zur
   * Routenplanung (lädt ohne Klick nichts) und darf vorbelegt sein.
   */
  map: {
    /** Anzeigename des Kartendienstes (anbieter-agnostisch). */
    provider: 'OpenStreetMap',
    /** Einbettungs-URL der interaktiven Karte. Leer = Platzhalter. */
    embedUrl: '',
    /** Datenschutzerklärung des Kartendienstes (für die Consent-Information). */
    providerPrivacyUrl: '',
    /** „Route planen" — Outbound-Link zum Kartendienst (öffnet in neuem Tab). */
    externalUrl: 'https://www.openstreetmap.org/search?query=Leipziger%20Weg%205%2C%2040764%20Langenfeld',
  },

  /** Soziale Profile (optional). */
  social: {
    instagram: '',
    linkedin: '',
  },
} as const;

export type Site = typeof site;
