/**
 * Ärztliches Honorar der Präventionsangebote nach GOÄ zum Regelsatz
 * (ärztliche Leistungen 2,3; Blutentnahme Nr. 250 1,8), ohne Steigerung und
 * ohne Honorarvereinbarung. Eine Stelle für alle Beträge der Präventionsseiten,
 * damit Website, Beispielkosten, App-Schnellwahl und Preisliste gleich bleiben.
 * Labor rechnet das Labor direkt ab; Laborbeträge sind gerundete Richtwerte
 * (Faktor 1,15).
 *
 * Stand 04.11.2026: Ablauf bei Angeboten mit Blutwerten „Kurztermin →
 * Blutabnahme → Befundtermin“ (team-2026-11-04/kosten-goae.md). Nr. 3 steht
 * nur allein oder neben Untersuchungsziffern (Legende Nr. 3), deshalb im
 * Befundtermin Nr. 1 oder Nr. 29 neben Nr. 75. Entwurf, vor Veröffentlichung
 * mit der Abrechnungsstelle abgleichen.
 */

/** Summe auf den Cent gerundet (Gleitkomma). */
function summe(...betraege: number[]): number {
  return Math.round(betraege.reduce((s, b) => s + b, 0) * 100) / 100;
}

/** Einzelne Termine im Ablauf mit Blutwerten. */
export const termin = {
  /** Nr. 3 – Kurztermin ab 10 Minuten: welche Werte, warum, was sie kosten */
  kurz: 20.11,
  /** Nr. 3 + 5 – Kurztermin mit gezielter Messung (Gewicht, Taille, Blutdruck) */
  kurzMitMessung: 30.83,
  /** Nr. 1 + 250 – Kurztermin mit Blutabnahme in derselben Sitzung (Option bei weitem Weg) */
  kurzMitBlut: 14.92,
  /** Nr. 250 – Blutabnahme im Laborfenster */
  blutabnahme: 4.2,
  /** Nr. 29 + 75 – Befundtermin: Gesundheitsuntersuchung und schriftlicher Plan */
  befundCheck: 76.42,
  /** Nr. 1 + 8 + 75 – Gewicht: Befund- und Starttermin mit Ganzkörperstatus und Plan */
  befundGewicht: 63.01,
  /** Nr. 1 + 76 – Gewicht: individueller Ernährungsplan */
  ernaehrungsplan: 20.1,
} as const;

/**
 * Stand 20.11.2026: Ablauf in zwei Terminen (Nickis Vorgabe). Ersttermin mit
 * Gespräch, Untersuchung und Blutabnahme, danach Befundbesprechung mit
 * schriftlichem Befundbericht (Nr. 75). Beträge zum Regelsatz; ob und in
 * welcher Höhe eine Vereinbarung nach § 2 GOÄ dazukommt, steht in
 * `vereinbarung` (wird nach Nickis Entscheidung gesetzt).
 */
export const zweiTermine = {
  /**
   * Gesundheitscheck wie die Pakete der Praxissoftware (Schema 52, live seit 20.11.):
   * Termin 1 Nr. 1 + 250 – Gespräch, Messungen, Blutabnahme mit Basislabor.
   */
  checkErst: 14.92,
  /** Termin 2 Nr. 29 + 75 – Untersuchung von Kopf bis Fuß, Besprechung der Werte, schriftlicher Befundbericht */
  checkBefund: 76.42,
  /** Nr. 651 – Ruhe-EKG auf Wunsch im Termin 2 (nur mit eigenem Gerät) */
  ekg: 26.54,
  /** Nr. 1 + 75 – Befundbesprechung mit schriftlichem Befundbericht (Laborwerte-Check, Gewicht) */
  befund: 28.15,
  /** Nr. 1 + 250 – Laborwerte-Check, Ersttermin: welche Werte, warum, Blutabnahme */
  werteErst: 14.92,
  /** Nr. 1 + 8 + 250 – Gewicht und Stoffwechsel, Ersttermin mit Ganzkörperstatus und Blutabnahme */
  gewichtErst: 49.78,
} as const;

/**
 * Haarsprechstunde zum Regelsatz (haare-seitentexte.md der Sitzung „PRP und
 * Haarsprechstunde“, Variante ohne Auflichtgerät, [OFFEN: 1]).
 */
export const haarPreis = {
  /** Nr. 1 + 5 + 250 – Haarsprechstunde mit Untersuchung und Blutabnahme */
  sprechstunde: 25.64,
  /** Nr. 3 – Befund und Plan, auch am Telefon */
  befund: 20.11,
  /** Nr. 1 + 5 – späterer Verlaufstermin */
  verlauf: 21.44,
  /** Labor: Ferritin, kleines Blutbild, TSH (Richtwert, Rechnung vom Labor) */
  labor: 38,
} as const;

/** Ganze Wege in zwei Terminen (Praxis, ohne Labor), Regelsatz. */
export const zweiTermineWeg = {
  check: summe(zweiTermine.checkErst, zweiTermine.checkBefund),
  checkMitEkg: summe(zweiTermine.checkErst, zweiTermine.checkBefund, zweiTermine.ekg),
  werte: summe(zweiTermine.werteErst, zweiTermine.befund),
  gewicht: summe(zweiTermine.gewichtErst, zweiTermine.befund),
  haare: summe(haarPreis.sprechstunde, haarPreis.befund),
} as const;

/** Beträge einzelner Termine außerhalb des Ablaufs mit Blutwerten. */
export const honorar = {
  /** Nr. 250 – Blutentnahme */
  blutentnahme: termin.blutabnahme,
  /** Nr. 3 – Befund- oder Folgegespräch ab 10 Minuten, auch telefonisch */
  gespraech: 20.11,
  /** Nr. 1 – kurzes Befundgespräch unter 10 Minuten, auch telefonisch */
  kurzgespraech: 10.72,
  /** Nr. 375 – Impfung im selben Termin */
  impfung: 10.72,
  /** Nr. 377 – jede weitere Impfung im selben Termin */
  weitereImpfung: 6.7,
  /** Nr. 3 + 7 – Erstgespräch mit Untersuchung (Wechseljahre, Jahresgespräch) */
  erstgespraech: 41.56,
  /** Nr. 1 + 75 – Gespräch mit schriftlichem Plan bzw. Werte-Bogen */
  planTermin: 28.15,
  /** Nr. 3 + 5 – Verlaufstermin mit Untersuchung */
  verlauf: 30.83,
  /** Nr. 1 + 5 + 75 – Termin mit Untersuchung und schriftlichem Bericht */
  bilanz: 38.87,
  /** Nr. 1 + 7 + 75 – Muskel-Kompass */
  muskel: 49.6,
  /** Nr. 1 + 7 + 250 – Abklärung Müdigkeit mit Untersuchung und Blutentnahme */
  abklaerung: 36.37,
} as const;

/** Ganze Wege, wie sie die Beispielkosten zeigen (Praxis, ohne Labor). */
export const weg = {
  /** Check, Männer 40+, 60+: Kurztermin, Blutabnahme, Befundtermin */
  check: summe(termin.kurz, termin.blutabnahme, termin.befundCheck),
  /** Gewicht, erster Monat: Kurztermin mit Messung, Blutabnahme, Befund und Start */
  gewichtStart: summe(termin.kurzMitMessung, termin.blutabnahme, termin.befundGewicht),
  /** Gewicht, erster Monat mit Ernährungsplan */
  gewichtMonat1: summe(termin.kurzMitMessung, termin.blutabnahme, termin.befundGewicht, termin.ernaehrungsplan),
  /** Gewicht, typisches erstes Jahr (kosten-goae.md 2.2) */
  gewichtJahr: 336.99,
  /** Wechseljahre, erstes Jahr: Erstgespräch, Plantermin, zwei Verläufe */
  wechseljahreJahr: summe(honorar.erstgespraech, honorar.planTermin, honorar.verlauf, honorar.verlauf),
  /** Einzelne Blutwerte auf Wunsch: Gespräch mit Blutabnahme, später kurzes Befundgespräch */
  einzelwerteKurz: summe(termin.kurzMitBlut, honorar.kurzgespraech),
  /** Einzelne Blutwerte auf Wunsch: Gespräch mit Blutabnahme, später Befundgespräch ab 10 Minuten */
  einzelwerte: summe(termin.kurzMitBlut, honorar.gespraech),
} as const;

/** Richtwerte Labor (direkt vom Labor, Faktor 1,15), gerundet (medizin-labor.md 4). */
export const labor = {
  /** Blutfette, HbA1c, Kreatinin */
  check: 27,
  /** dazu einmal im Leben Lp(a) */
  checkMitLpa: 47,
  /** Männer 40+ mit einmaligem Lp(a) */
  maenner: 47,
  /** Männer mit allen Zusatzwerten nach Beratung (zweimal Testosteron, PSA) */
  maennerMax: 140,
  /** Gewicht: Blutfette, HbA1c, Kreatinin, Leberwerte, kleines Blutbild */
  gewichtStart: 36,
  /** dasselbe ab BMI 30 mit TSH */
  gewichtStartMitTsh: 53,
  /** erstes Jahr: Start, nach 3 und nach 12 Monaten */
  gewichtJahrVon: 92,
  gewichtJahrBis: 109,
  /** Abklärung Müdigkeit nach DEGAM, mit Differenzierung und Leberwert */
  muedigkeit: 52,
  /** Wechseljahre: meist keins, bei Anlass bis ca. */
  wechseljahreBis: 82,
} as const;

/**
 * Einzelne Laborwerte (direkt vom Labor, Faktor 1,15; medizin-labor.md 5),
 * auf den Cent wie in der Laborliste. Für die Ratgeber zu Blutbild und
 * Vitamin D, B12, Eisen; vor Veröffentlichung mit dem Labor abgleichen.
 */
export const laborwert = {
  /** Nr. 3550 – kleines Blutbild */
  kleinesBlutbild: 4.02,
  /** Nr. 3550 + 3551 – großes Blutbild (kleines Blutbild und Differenzierung) */
  grossesBlutbild: 5.36,
  /** Blutfette, HbA1c, Kreatinin wie im Gesundheitscheck */
  checkBasis: 26.81,
  /** ALT, AST, GGT */
  leberwerte: 8.04,
  /** Nr. 4138 – 25-OH-Vitamin D */
  vitaminD: 32.17,
  /** Nr. 4140 – Vitamin B12 */
  vitaminB12: 16.76,
  /** Nr. 3742 + 3550 – Ferritin mit kleinem Blutbild */
  ferritinMitBlutbild: 20.78,
} as const;

/** „80,62 €" */
export function euroDe(betrag: number): string {
  const ganz = Number.isInteger(betrag);
  return `${betrag.toLocaleString('de-DE', { minimumFractionDigits: ganz ? 0 : 2, maximumFractionDigits: 2 })} €`;
}

/** „€80.62" */
export function euroEn(betrag: number): string {
  const ganz = Number.isInteger(betrag);
  return `€${betrag.toLocaleString('en-GB', { minimumFractionDigits: ganz ? 0 : 2, maximumFractionDigits: 2 })}`;
}

/** Gerundet auf ganze Euro für „ca."-Angaben: „ca. 101 €" */
export function caDe(betrag: number): string {
  return `ca. ${Math.round(betrag)} €`;
}

/** „approx. €101" */
export function caEn(betrag: number): string {
  return `approx. €${Math.round(betrag)}`;
}
