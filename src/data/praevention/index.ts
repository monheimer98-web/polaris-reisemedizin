/**
 * Bereich „Prävention & Lebensstil": Angebotsliste (Reihenfolge = Navigation)
 * und Inhalte der Bereichsseite /praevention. Eine Praxis, eine Website: der
 * Bereich hat eigene Farbe und Navigation, gehört aber zur Praxis Polaris.
 */
import type { Localized } from '../types';
import type { PreventionGroup, PreventionOffer } from './types';
import { praeventionsCheck } from './angebote/praeventions-check';
import { kompassMaenner } from './angebote/kompass-maenner';
import { kompass60Plus } from './angebote/kompass-60-plus';
import { muskelKompass } from './angebote/muskel-kompass';
import { gewichtUndStoffwechsel } from './angebote/gewicht-und-stoffwechsel';
import { wechseljahre } from './angebote/wechseljahre';
import { schlafUndJetlag } from './angebote/schlaf-und-jetlag';
import { werteEinordnen } from './angebote/werte-einordnen';

export const PREVENTION_PATH = '/praevention';
/** Eigene Terminseite des Bereichs; Reise-Terminarten erscheinen hier nicht. */
export const PREVENTION_BOOKING_PATH = '/praevention/termin';
/** Beispielkosten statt Festbeträgen auf Karten und Terminseite. */
export { BEISPIELKOSTEN_PATH as PREVENTION_COSTS_PATH } from './ablauf';
/**
 * Online-Buchung der Präventions-Terminarten an? Erst mit dem App-Update
 * (`/buchung?bereich=praevention`) einschalten; bis dahin Telefon und E-Mail.
 */
export const preventionOnlineBooking = false;

/** Alle vorbereiteten Angebote (auch Stufe 2). */
export const allPreventionOffers: PreventionOffer[] = [
  praeventionsCheck,
  werteEinordnen,
  gewichtUndStoffwechsel,
  wechseljahre,
  kompassMaenner,
  schlafUndJetlag,
  muskelKompass,
  kompass60Plus,
];

/** Jetzt buchbare Angebote: nur sie erhalten Seite, Navigationseintrag und Kachel. */
export const preventionOffers = allPreventionOffers.filter((o) => o.stage === 1);

export function preventionPath(slug: string): string {
  return `${PREVENTION_PATH}/${slug}`;
}

/**
 * Wer die Sprechstunde betreut (Satz auf jeder Präventionsseite). Neutral, ohne
 * Namen: wen wir nach außen nennen, entscheidet Nicki (Entscheidungs-PDF).
 */
export const preventionDoctor: Localized = {
  de: 'Die Sprechstunde betreut unser ärztliches Team.',
  en: 'Consultations are provided by our medical team.',
};

/** Satz unter Karten und Terminliste statt fester Beträge (kosten-goae.md 4.3). */
export const preventionCostNote: Localized = {
  de: 'Kosten: je nach Leistung, abgerechnet nach der Gebührenordnung für Ärzte (GOÄ). Welche Werte für Sie sinnvoll sind, besprechen wir im Kurztermin. Vor der Blutentnahme erhalten Sie die voraussichtlichen Kosten schriftlich.',
  en: 'Costs: depending on the service, billed under the German fee schedule for doctors (GOÄ). We discuss which tests make sense for you in the short appointment. You receive the expected costs in writing before any blood is taken.',
};

export const preventionGroups: { id: PreventionGroup; title: Localized; lead: Localized }[] = [
  {
    id: 'checks',
    title: { de: 'Checks mit Plan', en: 'Check-ups with a plan' },
    lead: {
      de: 'Einmal gründlich hinsehen und mit drei Prioritäten nach Hause gehen.',
      en: 'One thorough look, and you go home with three priorities.',
    },
  },
  {
    id: 'begleitung',
    title: { de: 'Begleitung über Monate', en: 'Support over several months' },
    lead: {
      de: 'Feste Termine, dieselbe ärztliche Ansprechperson und ein Verlauf, der zeigt, was sich verändert.',
      en: 'Fixed appointments, the same doctor each time and a record that shows what is changing.',
    },
  },
  {
    id: 'einordnen',
    title: { de: 'Einordnen und nachfragen', en: 'Making sense of things' },
    lead: {
      de: 'Für Werte, Daten und Fragen, die Sie schon haben.',
      en: 'For results, data and questions you already have.',
    },
  },
];

/** „Wo fange ich an?" – Einstieg nach Lebenslage. */
export const preventionEntryPoints: { label: Localized; slug: string }[] = [
  { label: { de: 'Ich möchte wissen, wo ich gesundheitlich stehe', en: 'I want to know where I stand with my health' }, slug: 'gesundheitscheck' },
  { label: { de: 'Ich möchte bestimmte Blutwerte prüfen lassen', en: 'I want specific blood values checked' }, slug: 'laborwerte-check' },
  { label: { de: 'Ich möchte mein Gewicht ärztlich angehen', en: 'I want medical support with my weight' }, slug: 'gewicht-und-stoffwechsel' },
];

export const preventionHub = {
  meta: {
    title: { de: 'Prävention in Langenfeld: Gesundheitscheck und Blutwerte', en: 'Prevention in Langenfeld: health check-up and blood values' },
    description: {
      de: 'Gesundheitscheck mit Befundbericht, Laborwerte-Check und Sprechstunde Gewicht: in zwei Terminen, mit Zeit. Privatpraxis in Langenfeld bei Düsseldorf.',
      en: 'Health check-up with written report, lab value check and weight consultation: two appointments, with time. Private practice in Langenfeld near Düsseldorf.',
    },
    eyebrow: { de: 'Prävention bei Polaris', en: 'Prevention at Polaris' },
    lead: {
      de: 'Wissen, wo Sie stehen: Im ersten Termin besprechen wir, was sinnvoll ist, untersuchen Sie und nehmen Blut ab. Im zweiten Termin bekommen Sie Ihre Ergebnisse erklärt und schriftlich zum Mitnehmen.',
      en: 'Know where you stand: in the first appointment we discuss what makes sense, examine you and take a blood sample. In the second appointment we explain your results and give them to you in writing.',
    },
  },
  principlesTitle: { de: 'So arbeiten wir', en: 'How we work' },
  principles: [
    {
      title: { de: 'Orientierung statt Werteflut', en: 'Guidance, not a flood of numbers' },
      text: {
        de: 'Wir bestimmen nur Werte, aus denen sich etwas ableiten lässt – und erklären jeden in verständlichen Worten.',
        en: 'We only measure what leads to a decision – and explain every result in plain language.',
      },
    },
    {
      title: { de: 'Zwei Termine, ein klares Ergebnis', en: 'Two appointments, one clear result' },
      text: {
        de: 'Im Ersttermin legen wir gemeinsam fest, was untersucht wird, untersuchen Sie und nehmen Blut ab. Etwa eine Woche später liegen alle Werte vor, und wir besprechen sie im Befundtermin.',
        en: 'In the first appointment we decide together what to examine, examine you and take a blood sample. About a week later all results are ready and we go through them in the results appointment.',
      },
    },
    {
      title: { de: 'Ihr Befundbericht zum Mitnehmen', en: 'Your written report to take home' },
      text: {
        de: 'Sie bekommen Ihre Werte übersichtlich mit Grafik und Einordnung, dazu Prioritäten und nächste Schritte. Beim nächsten Check sehen Sie den Verlauf. Auf Wunsch geht ein Bericht an Ihre Hausarztpraxis.',
        en: 'You receive your values clearly laid out with charts and interpretation, plus priorities and next steps. At your next check-up you see how they have changed. On request we send a report to your GP.',
      },
    },
    {
      title: { de: 'Kosten je nach Bedarf, vorher schriftlich', en: 'Costs as needed, in writing beforehand' },
      text: {
        de: 'Jeder Termin wird einzeln nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet, ohne Festpreis, Abo oder Vorkasse. Die voraussichtlichen Kosten erhalten Sie vor dem Termin schriftlich.',
        en: 'Each appointment is billed individually under the German fee schedule for doctors (GOÄ), with no fixed price, subscription or prepayment. You receive the expected costs in writing before the appointment.',
      },
    },
  ],
  entryTitle: { de: 'Wo fange ich an?', en: 'Where do I start?' },
  notOfferedTitle: { de: 'Was wir bewusst nicht anbieten', en: 'What we deliberately do not offer' },
  notOffered: {
    de: [
      '„Komplettlabor", Longevity-Profile und Tests auf ein „biologisches Alter",',
      'Infusionen, Vitamin-Kuren und den Verkauf von Präparaten,',
      'Hormonbehandlungen zur „Optimierung",',
      'Diagnosen per Online-Fragebogen – jede Behandlung beginnt mit einem persönlichen Termin.',
    ],
    en: [
      '“full blood panels”, longevity profiles and tests for a “biological age”,',
      'infusions, vitamin cures and the sale of supplements,',
      'hormone treatments for “optimisation”,',
      'diagnoses via online questionnaire – every treatment starts with an in-person appointment.',
    ],
  },
  ctaTitle: { de: 'Ihr Ersttermin in der Prävention', en: 'Your first prevention appointment' },
  ctaLead: {
    de: 'Wählen Sie bei der Buchung das passende Angebot. Unsicher? Rufen Sie uns an, wir helfen Ihnen beim Einstieg.',
    en: 'Choose the right service when booking. Not sure? Call us and we will help you get started.',
  },
  ctaNote: {
    de: 'Polaris ist eine Privatpraxis. Kosten je nach Leistung nach GOÄ. Laborkosten kommen je nach Angebot hinzu; das Labor rechnet sie direkt mit Ihnen ab.',
    en: 'Polaris is a private practice. Costs depend on the service, under the GOÄ. Depending on the service, lab costs are added; the laboratory bills them directly to you.',
  },
  faqTitle: { de: 'Häufige Fragen', en: 'Frequently asked questions' },
  faq: [
    {
      q: { de: 'Ich bin gesetzlich versichert. Kann ich trotzdem kommen?', en: 'I have statutory health insurance. Can I still come?' },
      a: {
        de: 'Ja, als Selbstzahlerin oder Selbstzahler. Leistungen Ihrer Krankenkasse, etwa die Gesundheitsuntersuchung oder empfohlene Impfungen, erhalten Sie weiter in Ihrer Hausarztpraxis.',
        en: 'Yes, as a self-paying patient. Services covered by your health insurer, such as the statutory health check or recommended vaccinations, remain available from your GP.',
      },
    },
    {
      q: { de: 'Brauche ich eine Überweisung?', en: 'Do I need a referral?' },
      a: { de: 'Nein.', en: 'No.' },
    },
    {
      q: { de: 'Was buche ich zuerst?', en: 'What do I book first?' },
      a: {
        de: 'Sie buchen online den Ersttermin des passenden Angebots. Den Befundtermin legen wir im Ersttermin mit Ihnen fest, etwa eine Woche später, wenn alle Werte vorliegen. Wer schon Blutwerte hat, bringt sie zum Ersttermin mit.',
        en: 'Book the first appointment for the right service online. We arrange the results appointment with you during the first appointment, about a week later when all results are in. If you already have blood results, bring them along.',
      },
    },
    {
      q: { de: 'Was kostet ein Termin?', en: 'What does an appointment cost?' },
      a: {
        de: 'Das hängt davon ab, was Sie brauchen. Wir rechnen je Termin nach der GOÄ ab und nennen Ihnen die voraussichtlichen Kosten vorher schriftlich. Typische Beispiele finden Sie auf unserer Seite mit Beispielkosten.',
        en: 'That depends on what you need. We bill per appointment under the GOÄ and tell you the expected costs in writing beforehand. You can find typical examples on our page with example fees.',
      },
    },
    {
      q: { de: 'Ersetzt Polaris meine Hausarztpraxis?', en: 'Does Polaris replace my GP?' },
      a: {
        de: 'Nein, wir ergänzen sie. Auf Wunsch schicken wir Ihrer Hausarztpraxis einen Bericht.',
        en: 'No, we complement your GP. On request we send your GP a report.',
      },
    },
  ],
};
