/**
 * Gemeinsame Sätze der Angebote mit zwei Terminen (Ersttermin mit
 * Blutabnahme, danach Befundbesprechung; Nickis Vorgabe vom 20.11.2026):
 * Gesundheitscheck, Laborwerte-Check, Sprechstunde Gewicht und Stoffwechsel.
 * Eine Stelle, damit Kosten und Abrechnung auf allen Seiten gleich klingen.
 * Keine Festpreise, kein „inklusive", keine Pakete; Beträge stehen als „ca."
 * auf den Angebotsseiten (Regelsatz aus `../preise`).
 */
import type { Localized } from '../../types';

/** Pflichtsatz im Kosten-Abschnitt: Kosten vorab schriftlich, GOÄ, Labor rechnet selbst ab. */
export const kostenVorab: Localized = {
  de: 'Die voraussichtlichen Kosten nennen wir Ihnen vor dem Termin schriftlich. Abgerechnet wird nach der Gebührenordnung für Ärzte (GOÄ), je Termin und nur für das, was stattfindet, ohne Pakete und ohne Abo. Einfache Laborwerte stehen auf unserer Rechnung, die übrigen rechnet das Labor selbst mit Ihnen ab.',
  en: 'We tell you the expected costs in writing before the appointment. We bill under the German fee schedule for doctors (GOÄ), per appointment and only for what takes place, with no packages and no subscription. Simple lab values appear on our invoice, the laboratory bills the others to you directly.',
};

/** Erstattung für Privatversicherte und Beihilfe, ohne Zusage. */
export const erstattung: Localized = {
  de: 'Private Krankenversicherungen und Beihilfe erstatten je nach Tarif. Leistungen, die Sie ohne medizinischen Anlass wünschen, kennzeichnen wir auf der Rechnung; sie werden meist nicht erstattet. Gesetzlich Versicherte zahlen bei uns selbst. Bitte klären Sie die Erstattung vorab.',
  en: 'Private health insurers and Beihilfe reimburse depending on the tariff. We mark services you request without a medical reason on the invoice; they are usually not reimbursed. People with statutory insurance pay themselves. Please check reimbursement in advance.',
};

/** Hinweis vor der Blutabnahme: Nahrungsergänzung mit Biotin kann Messungen stören. */
export const biotinHinweis: Localized = {
  de: 'Bitte nennen Sie uns Ihre Nahrungsergänzung. Präparate mit Biotin können einige Messungen stören, zum Beispiel Schilddrüsenwerte, und sollten vorher pausiert werden. Wie lange, besprechen wir vorher mit Ihnen.',
  en: 'Please tell us about your supplements. Products containing biotin can interfere with some tests, for example thyroid values, and should be paused beforehand. We discuss with you beforehand for how long.',
};
