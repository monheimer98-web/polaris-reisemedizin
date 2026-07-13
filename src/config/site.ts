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

export interface Review {
  /**
   * Bewertungstext – VERBATIM in der Originalsprache der Bewertung (echte
   * Kundenstimmen werden nicht maschinell übersetzt). Ohne Anführungszeichen.
   */
  quote: string;
  /** Datensparsamer Anzeigename, z. B. „Familie K." oder „Sandra M.". */
  author: string;
  /** Sternebewertung 1–5 (optional). */
  rating?: number;
  /** ISO-Datum der Bewertung, z. B. „2026-05-04" (optional, für <time>). */
  date?: string;
  /** Quelle der Bewertung, z. B. „Google" (optional, dezent ausgewiesen). */
  source?: string;
}

export const site = {
  brand: {
    /** Markenname — hier zentral änderbar. */
    name: 'Polaris',
    tagline: {
      de: 'Praxis für Reise- & Impfmedizin',
      en: 'Practice for Travel & Vaccination Medicine',
    },
    /** Vollständige rechtliche Bezeichnung (für Impressum/Datenschutz). */
    legalName: 'Polaris – Privatpraxis für Reise- und Impfmedizin · Gelbfieberimpfstelle Langenfeld',
    /**
     * Praxisinhaber (natürliche Person) — Einzelpraxis. Wird im Impressum sowie
     * als Verantwortlicher der Datenschutzerklärung namentlich ausgewiesen.
     */
    owner: 'Alexander Mayer',
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
    /** Bundesland — für JSON-LD `addressRegion` und die lokale Auffindbarkeit. */
    region: { de: 'Nordrhein-Westfalen', en: 'North Rhine-Westphalia' },
    country: { de: 'Deutschland', en: 'Germany' },
    /**
     * Geokoordinaten der Praxis (für das JSON-LD `geo` → bessere lokale
     * Auffindbarkeit / Distanz- und Kartenfunktionen bei Suchmaschinen).
     * Vor Go-Live mit dem EXAKTEN Pin füllen: in Google Maps die Adresse
     * rechtsklicken und die beiden Zahlen (Breitengrad, Längengrad) als
     * `lat`/`lng` eintragen. Solange leer, wird `geo` bewusst NICHT ausgegeben
     * (kein erfundener Standort) – analog zu den übrigen Platzhaltern.
     */
    geo: { lat: '', lng: '' },
    phone: '02173 9990280',
    phoneHref: 'tel:+4921739990280',
    fax: '',
    email: 'info@polaris-reisemedizin.de',
    emailHref: 'mailto:info@polaris-reisemedizin.de',
    /**
     * POST-Endpunkt des Kontaktformulars (Route `/api/kontakt` der praxis-app,
     * über den Reverse-Proxy). Gleiche Sicherheitslogik wie `booking.endpoint`:
     * der Proxy injiziert das geheime BOOKING_TOKEN serverseitig als
     * `X-Booking-Token`-Header – das Token darf NIE im Browser stehen. Das
     * Formular sendet nur eine Nachricht per E-Mail an die Praxis (Reply-To =
     * Absenderadresse), es entsteht KEINE Datenbank-/Patientenakte.
     *
     * Per Build-Env überschreibbar (Muster wie PUBLIC_BOOKING_EMBED_URL):
     * Test-/LAN-Builds setzen PUBLIC_CONTACT_ENDPOINT, der öffentliche
     * Pages-Build bleibt leer (→ Platzhalter mit Telefon/E-Mail-Fallback),
     * bis der Endpunkt über den Tunnel erreichbar ist.
     */
    formEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? '',
  },

  /**
   * Sprechzeiten. Die Praxis arbeitet bewusst OHNE feste Öffnungszeiten:
   * Reisemedizin braucht planbare, individuelle Zeitfenster (Beratung,
   * Impf-Serien, Gelbfieber). Termine werden daher persönlich vergeben –
   * das ist kundenfreundlich (auch Abend-/Samstagstermine möglich) und
   * verspricht keine Uhrzeiten, die im Alltag nicht immer gehalten werden
   * können. Die Anzeige (`openingHours`) bleibt ein Zwei-Spalten-Eintrag,
   * damit alle bestehenden Render-Stellen unverändert funktionieren.
   */
  openingHours: [
    { day: { de: 'Termine', en: 'Appointments' }, hours: { de: 'nach Vereinbarung', en: 'by appointment' } },
  ] as OpeningHours[],

  /**
   * Maschinenlesbare Sprechzeiten für das JSON-LD (schema.org
   * `openingHoursSpecification`). Bewusst LEER: Ohne feste Öffnungszeiten
   * werden keine erfundenen Uhrzeiten an Suchmaschinen gemeldet (das wäre
   * für Nutzer:innen irreführend). Solange leer, gibt `SEO.astro` die
   * Eigenschaft gar nicht erst aus. Terminvereinbarung erfolgt persönlich.
   */
  openingHoursSpec: [] as { days: string[]; opens: string; closes: string }[],

  /**
   * Öffentlich auf der Website gezeigt wird – auf Wunsch der Praxis – nur der
   * Arzt Alexander Mayer (Name und Foto real). Es arbeiten weitere Personen in
   * der Praxis, die jedoch bewusst NICHT im Internet erscheinen sollen; daher
   * steht hier nur ein Eintrag. Die Seitentexte sprechen dennoch vom „Praxisteam",
   * um die Praxis nicht fälschlich als Einzelperson darzustellen. `isPhysician`
   * unterscheidet die Rolle (für künftige Einträge).
   */
  team: [
    {
      name: 'Alexander Mayer',
      role: { de: 'Arzt – Reise- & Impfmedizin', en: 'Physician – Travel & Vaccination Medicine' },
      bio: {
        de: 'Als Arzt der Praxis verantwortet er Beratung und Impfungen. Er nimmt sich Zeit für Ihre Reisepläne und erklärt jede Empfehlung verständlich.',
        en: 'As the practice’s physician, he is responsible for consultations and vaccinations. He takes time for your travel plans and explains every recommendation clearly.',
      },
      photo: '/images/team/alexander-mayer.webp',
      focal: 'center 20%',
      isPhysician: true,
    },
  ] as TeamMember[],

  /** Berufsrechtliche Angaben (Pflicht im Impressum). */
  professional: {
    jobTitle: { de: 'Ärztin / Arzt', en: 'Physician (Ärztin / Arzt)' },
    /** Land, in dem die Approbation/Berufsbezeichnung verliehen wurde. */
    jobTitleCountry: { de: 'verliehen in der Bundesrepublik Deutschland', en: 'awarded in the Federal Republic of Germany' },
    chamberName: 'Ärztekammer Nordrhein, Tersteegenstraße 9, 40474 Düsseldorf',
    chamberUrl: 'https://www.aekno.de',
    /** Berufsordnung der zuständigen Kammer. */
    professionalRules: 'Berufsordnung der Ärztekammer Nordrhein (auf Grundlage des Heilberufsgesetzes NRW – HeilBerG NRW)',
    professionalRulesUrl: 'https://www.aekno.de/aerzte/berufsordnung',
    /** Umsatzsteuer-ID, falls vorhanden (Heilbehandlungen sind i. d. R. umsatzsteuerbefreit). */
    vatId: '',
  },

  /** Zulassung als Gelbfieberimpfstelle. */
  yellowFever: {
    /** Zuständige Behörde / Bundesland, das die Impfstelle autorisiert hat. */
    authority: 'Ministerium für Arbeit, Gesundheit und Soziales des Landes Nordrhein-Westfalen (MAGS NRW)',
  },

  /**
   * Berufshaftpflichtversicherung. Eine solche zu unterhalten ist für
   * niedergelassene Ärzt:innen berufsrechtlich Pflicht; die Angabe im Impressum
   * ist jedoch nicht zwingend (ärztliche Heilbehandlung ist vom Anwendungsbereich
   * der Dienstleistungs-Informationspflichten-Verordnung ausgenommen). Solange
   * `insurer` leer ist, wird der Abschnitt im Impressum ausgeblendet; bei Bedarf
   * Versicherer (Name & Sitz) und Geltungsbereich eintragen.
   */
  liabilityInsurance: {
    insurer: '',
    scope: { de: 'Geltungsbereich: Deutschland', en: 'Coverage area: Germany' },
  },

  /**
   * Hosting der ÖFFENTLICHEN Website (für die Datenschutzerklärung).
   *
   * IST-STAND: GitHub Pages (GitHub, Inc.) auf der Standard-`github.io`-Domain –
   * ein US-Anbieter; daher der Drittland-/SCC-Hinweis im Hosting-Abschnitt.
   * `provider` = Kurzname (Empfänger-Liste), `providerAddress` = Name + Anschrift
   * (Hosting-Abschnitt). Bei einem Umzug auf einen EU-Hoster nur hier ändern –
   * die Rechtstexte ziehen die Werte per `{hostingProvider}` /
   * `{hostingProviderAddress}` automatisch nach (siehe DatenschutzContent.astro).
   */
  hosting: {
    provider: 'GitHub, Inc.',
    providerAddress: 'GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA',
  },

  /**
   * Online-Terminbuchung über das EIGENE Praxis-Terminsystem (praxis-app) –
   * kein Drittanbieter. Das Anfrageformular (`BookingForm`) sendet die Daten per
   * POST an `endpoint`; dort entsteht ein Termin mit Status „angefragt", den das
   * Backoffice bestätigt.
   *
   * SICHERHEIT: `endpoint` zeigt auf einen Reverse-Proxy vor der praxis-app, der
   * das geheime BOOKING_TOKEN serverseitig als `X-Booking-Token`-Header injiziert
   * – das Token darf NIE im Browser/JS stehen. Empfohlen wird ein SAME-ORIGIN-
   * Pfad (z. B. „/api/buchung"), damit keine CORS-Konfiguration nötig ist.
   * Details, Backend-Vertrag und Terminart-IDs: siehe README („Terminbuchung").
   *
   * `endpoint` leer lassen, bis Proxy/praxis-app erreichbar sind → das Formular
   * zeigt dann einen neutralen Platzhalter mit Telefon/E-Mail-Fallback.
   */
  booking: {
    /** Anzeigename des eigenen Terminsystems (u. a. in der Datenschutzerklärung). */
    provider: 'Polaris-Terminsystem',
    /**
     * ÖFFENTLICHE URL der App-Buchungsseite (`/buchung` der praxis-app) für die
     * iframe-Einbettung des fertigen Buchungstools (Live-Slots, Sofortbestätigung).
     * Empfehlung: `…/buchung` über den EU-Mini-Proxy (nur Buchungs-Routen +
     * `/static` öffentlich; Patientendaten bleiben im Praxisnetz). Die App muss die
     * Einbettung erlauben (CSP `frame-ancestors` → Website-Origin) und meldet ihre
     * Höhe per postMessage (nahtlose Auto-Höhe). Leer = kein Embed.
     * Vorrang: `embedUrl` → iframe-Tool; sonst `endpoint` → natives Formular; sonst Platzhalter.
     */
    // Per Build-Env überschreibbar (Muster wie PUBLIC_SITE_URL/PUBLIC_BASE_PATH):
    // Test-/LAN-Builds setzen PUBLIC_BOOKING_EMBED_URL, der öffentliche
    // Pages-Build bleibt ohne (→ Platzhalter), bis die öffentliche URL existiert.
    embedUrl: import.meta.env.PUBLIC_BOOKING_EMBED_URL ?? '',
    /** POST-Endpunkt (Reverse-Proxy vor der praxis-app) für das native Formular. Leer = Platzhalter. */
    endpoint: '',
  },

  /**
   * Anfahrts-Karte (Anfahrt-Seite) — Google Maps, eingebunden über dieselbe
   * 2-Klick-Lösung wie die Terminbuchung (`ConsentEmbed`): Die Karte lädt erst
   * nach aktiver Einwilligung; vorher gibt es KEINEN Request an Google. Der
   * `embedUrl` ist die schlüssellose Google-Maps-Einbettung der Praxisadresse;
   * `externalUrl` startet die Routenplanung bei Google (reiner Outbound-Link,
   * lädt ohne Klick nichts).
   *
   * Vor Go-Live: Pin-Position gegen die reale Praxisadresse prüfen und Google
   * Maps datenschutzrechtlich final abnehmen (Google = US-Anbieter; der
   * 2-Klick-Gate hält den Request bis zur Einwilligung zurück).
   */
  map: {
    /** Anzeigename des Kartendienstes (erscheint im Consent-Dialog). */
    provider: 'Google Maps',
    /**
     * Schlüssellose Einbettungs-URL über den Google-`/maps/embed`-Endpunkt.
     * WICHTIG: NICHT die `…/maps?q=…&output=embed`-Form verwenden — die
     * antwortet mit `301` → `X-Frame-Options: SAMEORIGIN` und wird im iframe
     * abgewiesen (`ERR_ABORTED`, leere Karte). Dieser `…/maps/embed?pb=…`-
     * Endpunkt liefert `200` ohne Frame-Sperre (genau das Ziel, auf das Google
     * selbst weiterleitet). Der `pb`-Block kodiert Suchadresse + Zoom 16 und
     * setzt einen Marker auf die geokodierte Praxisadresse.
     */
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m3!2m1!1sLeipziger+Weg+5,+40764+Langenfeld!6i16',
    /** Datenschutzerklärung des Kartendienstes (für die Consent-Information). */
    providerPrivacyUrl: 'https://policies.google.com/privacy',
    /** „Route planen" — Outbound-Link zu Google Maps (öffnet in neuem Tab). */
    externalUrl: 'https://www.google.com/maps/dir/?api=1&destination=Leipziger+Weg+5%2C+40764+Langenfeld',
  },

  /**
   * Kundenstimmen / Google-Bewertungen.
   *
   * BEWUSST AUFGESETZT, ABER INAKTIV: Solange `enabled: false` ist ODER `items`
   * leer ist, rendert die `Reviews`-Sektion NICHTS – die Startseite bleibt
   * unverändert. Erst wenn echte, mit ausdrücklicher Einwilligung freigegebene
   * Bewertungen vorliegen, hier eintragen und `enabled` auf `true` setzen.
   * KEINE erfundenen Testimonials – das wäre wettbewerbs- und berufsrechtlich
   * unzulässig.
   *
   * Datensparsam & DSGVO-freundlich: Bewertungen werden first-party gerendert
   * (kein Google-/Drittanbieter-Widget, kein externer Request, kein Tracking).
   * `googleProfileUrl` ist ein reiner Outbound-Link (lädt ohne Klick nichts).
   * `aggregate` nur ausfüllen, wenn es echte Bewertungen widerspiegelt – eine
   * Schema.org-`aggregateRating` ohne reale Basis verstößt gegen die
   * Suchmaschinen-Richtlinien und wird hier daher erst später (separat) ergänzt.
   */
  reviews: {
    /** Master-Schalter. `false` = Sektion komplett ausgeblendet (Default). */
    enabled: false,
    /** Öffentliches Google-Unternehmensprofil (Outbound-Link). Leer = ausgeblendet. */
    googleProfileUrl: 'https://share.google/69X2xI03EUsjb8YPK',
    /** Gesamtbewertung – nur ausfüllen, wenn durch echte Bewertungen gedeckt. */
    aggregate: { ratingValue: '', reviewCount: '' },
    /** Echte, freigegebene Kundenstimmen. Leer lassen, bis welche vorliegen. */
    items: [] as Review[],
  },

  /**
   * Reichweitenmessung (Web-Analyse) — datenschutzfreundlich & STANDARDMÄSSIG AUS.
   *
   * Enterprise-Ansatz: eine **cookielose**, auf **EU-/eigener Infrastruktur**
   * betriebene Analyse (empfohlen: Plausible oder Matomo, Matomo cookielos
   * konfiguriert). KEINE Cookies, KEINE geräteübergreifenden Kennungen, KEINE
   * personenbezogenen Profile; die IP wird nur anonymisiert/kurzzeitig
   * verarbeitet. Dadurch ist die Messung auf Grundlage des berechtigten
   * Interesses (Art. 6 Abs. 1 lit. f DSGVO) ohne Cookie-Banner möglich; ein
   * „Do-Not-Track"/GPC-Signal des Browsers wird automatisch respektiert.
   *
   * AUSLIEFERUNG INAKTIV: Solange `enabled: false` ist ODER `scriptUrl`/`domain`
   * leer sind, wird KEIN Analyse-Skript geladen und in der Datenschutzerklärung
   * KEIN Analyse-Abschnitt angezeigt (beide hängen am selben Schalter → bleibt
   * wahrheitsgemäß). Erst nach Einrichtung eines eigenen Analyse-Hosts
   * aktivieren. Bei Wechsel auf eine Cookie-/Einwilligungs-Variante wäre ein
   * Consent-Banner nötig (siehe README).
   */
  analytics: {
    /** Master-Schalter. `false` = kein Skript, kein Datenschutz-Abschnitt (Default). */
    enabled: false,
    /** Anbieter (für die Datenschutzerklärung & die Lade-Logik): 'Plausible' | 'Matomo'. */
    provider: 'Plausible',
    /** URL des Analyse-Skripts (Plausible: …/js/script.js, Matomo: …/matomo.js). Leer = aus. */
    scriptUrl: '',
    /** Plausible: `data-domain` (die Domain). Matomo: ebenfalls hier die Domain. Leer = aus. */
    domain: '',
    /** Matomo: numerische `siteId` (bei Plausible leer lassen). */
    siteId: '',
    /** „Do-Not-Track"/GPC des Browsers respektieren (empfohlen: true). */
    respectDoNotTrack: true,
    /** Anzeigename/Standort des Analyse-Hosts (für AVV/Datenschutz), z. B. „[EU-Hoster]". */
    host: '[PLATZHALTER: EU-Analyse-Hoster]',
  },

  /** Soziale Profile (optional). */
  social: {
    instagram: '',
    linkedin: '',
  },
} as const;

export type Site = typeof site;
