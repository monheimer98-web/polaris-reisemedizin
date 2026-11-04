/**
 * Datenmodell des Bereichs „Prävention & Lebensstil". Jedes Angebot ist eine
 * normale `ClinicalPage` (Abschnitte, Quellen, FAQ, Prüfdatum) plus die
 * Bausteine, die nur der Präventionsbereich zeigt: Steckbrief, Ablauf in
 * Schritten und Kosten-Absatz.
 */
import type { ClinicalPage, Localized } from '../types';

/** Gruppen der Bereichsseite (Kacheln) und der Bereichsnavigation. */
export type PreventionGroup = 'checks' | 'begleitung' | 'einordnen';

export interface PreventionStep {
  title: Localized;
  text: Localized;
}

export interface PreventionOffer {
  /** Pfadsegment unter /praevention/ (Deutsch und Englisch gleich). */
  slug: string;
  /**
   * Terminart-ID der praxis-app (neutral `pv-…`, damit Kalender, Erinnerung
   * und Storno-Seite kein Thema verraten). Die Präventions-Terminarten legt erst das
   * App-Update an; bis dahin ignoriert das Buchungsformular die Vorbelegung.
   */
  bookingType: string;
  group: PreventionGroup;
  /**
   * Startstufe: 1 = jetzt buchbar (Seite, Navigation, Kachel); 2 = fertig
   * vorbereitet, geht erst nach Fortbildung/Startbedingung online (ab 01/2027).
   */
  stage: 1 | 2;
  /** Kurzname für Bereichsnavigation und Kacheln. */
  shortName: Localized;
  /** Ein Satz für die Kachel auf der Bereichsseite. */
  teaser: Localized;
  /** Steckbrief oben auf der Angebotsseite. */
  facts: {
    forWhom: Localized;
    appointments: Localized;
    fee: Localized;
    lab: Localized;
  };
  /** „So läuft es ab" in 3–5 Schritten. */
  steps: PreventionStep[];
  /** Kosten-Absätze (Richtwerte nach GOÄ, Regelsatz). */
  costs: Localized<string[]>;
  page: ClinicalPage;
}
