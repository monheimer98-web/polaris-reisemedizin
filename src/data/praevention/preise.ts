/**
 * Ärztliches Honorar der Präventionsangebote nach GOÄ zum Regelsatz
 * (ärztliche Leistungen 2,3; Blutentnahme Nr. 250 1,8), ohne Steigerung und
 * ohne Honorarvereinbarung. Eine Stelle für alle Beträge der Präventionsseiten,
 * damit Website, App-Schnellwahl und Preisliste gleich bleiben. Nr. 3 steht nur
 * allein oder neben Untersuchungsziffern (Legende Nr. 3), deshalb 1 + 75 statt
 * 3 + 75. Labor rechnet das Labor direkt ab; Laborbeträge sind gerundete
 * Richtwerte (Faktor 1,15).
 *
 * Stand: Preisliste der GOÄ-Prüfung vom 28.10.2026 (Entwurf, vor
 * Veröffentlichung mit der Abrechnungsstelle abgleichen).
 */
export const honorar = {
  /** Nr. 250 – Blutentnahme im Laborfenster */
  blutentnahme: 4.2,
  /** Nr. 3 – Befund- oder Folgegespräch ab 10 Minuten, auch telefonisch */
  gespraech: 20.11,
  /** Nr. 250 → Nr. 29 + 75 – Kompass: Labortermin, dann Haupttermin mit Plan */
  check: 80.62,
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
  /** Nr. 3 + 8 – Gewicht: Start mit Ganzkörperuntersuchung */
  gewichtStart: 54.97,
  /** Nr. 1 + 75 + 76 – Gewicht: Plantermin mit Behandlungs- und Ernährungsplan */
  gewichtPlan: 37.53,
  /** Nr. 1 + 7 + 75 – Muskel-Kompass */
  muskel: 49.6,
  /** Nr. 1 + 7 + 250 – Abklärung Müdigkeit mit Untersuchung und Blutentnahme */
  abklaerung: 36.37,
} as const;

/** Richtwerte Labor (direkt vom Labor, Faktor 1,15), gerundet. */
export const labor = {
  check: 27,
  checkMitLpa: 47,
  check60: 31,
  maenner: 47,
  /** Start mit TSH (S3-Leitlinie) */
  gewichtStart: 56,
  /** Start, Verlauf nach 3 und 12 Monaten */
  gewichtJahr: 110,
  muedigkeit: 48,
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
