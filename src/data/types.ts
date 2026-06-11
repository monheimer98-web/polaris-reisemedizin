/**
 * Typen für das strukturierte, zweisprachige Inhaltsmodell der Fachseiten
 * (Krankheitsbilder & Leistungen). Fließtext liegt als reine Strings vor —
 * leicht pfleg- und übersetzbar, typsicher und ohne MDX/Content-Collections.
 */
import type { Locale } from '../config/site';
import type { SourceId } from './sources';

/** Wert in allen unterstützten Sprachen. */
export type Localized<T = string> = Record<Locale, T>;

/**
 * Zweisprachige Beschriftungen für das 2-Klick-Consent-Gate `ConsentEmbed`
 * (Terminbuchung, Anfahrts-Karte …). In der jeweiligen Sprache aufgelöst und
 * an die React-Insel übergeben. `lead` enthält den Platzhalter `{provider}`.
 */
export interface ConsentEmbedText {
  title: Localized;
  lead: Localized;
  /** Stichpunkte: was beim Laden passiert (Transparenz/DSGVO). */
  points: Localized<string[]>;
  privacyIntro: Localized;
  providerPrivacyLabel: Localized;
  ourPrivacyLabel: Localized;
  loadButton: Localized;
  externalLabel: Localized;
  iframeTitle: Localized;
  loadedNote: Localized;
  revokeLabel: Localized;
  /** Zustand, solange `embedUrl` leer ist (kein Anbieter-Konto/AVV). */
  placeholderTitle: Localized;
  placeholderBody: Localized<string[]>;
}

/** Hervorhebungs-Varianten für `Callout` (Kernfakt, wichtiger Hinweis, Vorsicht). */
export type CalloutVariant = 'info' | 'important' | 'caution';

/** Hervorgehobener Hinweis innerhalb eines Abschnitts. */
export interface SectionCallout {
  variant: CalloutVariant;
  /** Optionale Überschrift des Hinweises. */
  title?: Localized;
  /** Hinweistext. */
  text: Localized;
}

/** Ein Inhaltsabschnitt mit Überschrift, Absätzen und optionalen Extras. */
export interface ContentSection {
  /** Stabiler Anker (dient als Sprungmarke und Schlüssel). */
  id: string;
  heading: Localized;
  /** Fließtext-Absätze. */
  body: Localized<string[]>;
  /** Optionale Aufzählung nach dem Fließtext. */
  list?: Localized<string[]>;
  /** Optionaler hervorgehobener Hinweis am Abschnittsende. */
  callout?: SectionCallout;
}

/**
 * Abschnitt einer Rechtsseite (Impressum/Datenschutz): Überschrift, Fließtext-
 * Absätze und eine optionale Aufzählung. Bewusst schlanker als `ContentSection`
 * (keine Quellen/Callouts) – reine, gut pflegbare Rechtsprosa in beiden Sprachen.
 */
export interface LegalSection {
  /** Stabiler Anker (Sprungmarke/Schlüssel). */
  id: string;
  heading: Localized;
  /** Fließtext-Absätze. */
  body: Localized<string[]>;
  /** Optionale Aufzählung nach dem Fließtext. */
  list?: Localized<string[]>;
}

/** Querverweis auf eine verwandte Seite. */
export interface RelatedLink {
  label: Localized;
  /** Logischer Pfad ohne Locale-Präfix (z. B. „/leistungen/gelbfieberimpfung"). */
  path: string;
}

/** Vollständiges Modell einer zitierten Fachseite. */
export interface ClinicalPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  sections: ContentSection[];
  /** Pflichtfeld — erzwingt Belege; nur registrierte Quellen-IDs sind zulässig. */
  sourceIds: SourceId[];
  /** Datum der letzten inhaltlichen Prüfung. */
  lastReviewed: Date;
  /** Optionale Querverweise (z. B. Krankheitsbild ↔ Leistung). */
  related?: RelatedLink[];
}
