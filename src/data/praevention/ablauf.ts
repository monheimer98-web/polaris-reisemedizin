/**
 * Gemeinsame Bausteine des Ablaufs „Kurztermin → Blutabnahme → Befundtermin"
 * (Nickis Vorgabe vom 04.11.2026). Check, Männer 40+ und 60+ nutzen dieselben
 * Texte, damit Ablauf und Abrechnung auf allen Seiten gleich beschrieben sind.
 *
 * Der Kurztermin dient nur der Auswahl der Werte, der Entscheidungshilfe und
 * den Kosten. Anamnese, Risikoprofil und Beratung gehören in den Befundtermin
 * (Nr. 29); sonst wäre der Kurztermin Teil der Gesundheitsuntersuchung
 * (§ 4 Abs. 2a GOÄ, kosten-goae.md 1.3).
 */
import type { Localized } from '../types';
import type { PreventionStep } from './types';
import { caDe, caEn, weg } from './preise';

/** Seite mit Beispielkosten aller Angebote (kein Lockpreis auf den Buchungskarten). */
export const BEISPIELKOSTEN_PATH = '/praevention/kosten';

export const kurzterminSchritt: PreventionStep = {
  title: { de: 'Kurztermin: welche Werte für Sie sinnvoll sind', en: 'Short appointment: which tests make sense for you' },
  text: {
    de: 'Etwa 15 Minuten in der Praxis, am Telefon oder per Video. Wir besprechen, welche Blutwerte bei Ihnen etwas aussagen, welche nicht nötig sind und was sie kosten. Die voraussichtlichen Kosten erhalten Sie danach schriftlich.',
    en: 'About 15 minutes at the practice, by phone or by video. We discuss which blood tests tell us something in your case, which are not needed and what they cost. You then receive the expected costs in writing.',
  },
};

export const blutabnahmeSchritt: PreventionStep = {
  title: { de: 'Blutabnahme am Morgen', en: 'Blood sample in the morning' },
  text: {
    de: 'Ein kurzer Termin von etwa 10 Minuten in unserem Laborfenster. Sie müssen in der Regel nicht nüchtern sein. Wenn Ihr Kurztermin morgens in der Praxis stattfindet und Sie einen weiten Weg haben, nehmen wir auf Wunsch direkt im Anschluss Blut ab.',
    en: 'A short appointment of about 10 minutes in our lab window. You usually do not need to fast. If your short appointment takes place at the practice in the morning and you have a long way to travel, we can take the sample straight afterwards on request.',
  },
};

/** Steckbrief-Zeile „Termine" für Check, Männer 40+, 60+. */
export function termineDreischritt(befundMin: string): Localized {
  return {
    de: `Kurztermin ca. 15 Min. (auch per Telefon oder Video), Blutabnahme ca. 10 Min. am Morgen, etwa eine Woche später Befundtermin ca. ${befundMin} Min. in der Praxis.`,
    en: `Short appointment approx. 15 min (also by phone or video), blood sample approx. 10 min in the morning, about a week later results appointment approx. ${befundMin} min at the practice.`,
  };
}

/** Steckbrief-Zeile „Ärztliches Honorar" für Check, Männer 40+, 60+ – ohne Lockpreis. */
export const honorarDreischritt: Localized = {
  de: `Je nachdem, was Sie brauchen, nach GOÄ. Typisch für alle drei Termine zusammen: ${caDe(weg.check)}.`,
  en: `Depending on what you need, under the German fee schedule (GOÄ). Typically for all three appointments together: ${caEn(weg.check)}.`,
};

/** Kosten-Absatz zum Bezahlen, für alle Angebote mit Blutwerten. */
export const bezahlenAbsatz: Localized = {
  de: 'Berechnet wird nur, was stattfindet: Wenn Sie nach dem Kurztermin nicht weitermachen möchten, zahlen Sie nur den Kurztermin. Jeder Termin wird nach GOÄ abgerechnet, ohne Pakete, Abos oder Vorkasse. Bezahlt wird einmal, im Termin mit Ihren Ergebnissen, mit Karte.',
  en: 'You only pay for what takes place: if you decide not to continue after the short appointment, you only pay for that appointment. Every appointment is billed under the GOÄ, with no packages, subscriptions or prepayment. You pay once, at the appointment where we discuss your results, by card.',
};

/** Gemeinsame Frage für Check, Männer 40+, 60+. */
export const frageDreiTermine = {
  q: { de: 'Warum drei Termine?', en: 'Why three appointments?' },
  a: {
    de: 'Damit wir nur messen, was für Sie etwas ändert. Im Kurztermin legen wir die Werte fest und nennen die Kosten, bevor Blut abgenommen wird. Im Befundtermin liegen dann alle Ergebnisse vor, und Ihr Plan wird im Termin fertig. Den Kurztermin können Sie auch am Telefon oder per Video wahrnehmen; in die Praxis kommen Sie dann nur zweimal.',
    en: 'So that we only measure what makes a difference for you. In the short appointment we decide on the tests and tell you the costs before any blood is taken. All results are then available at the results appointment, and your plan is finished during it. You can also have the short appointment by phone or video; you then only come to the practice twice.',
  },
};
