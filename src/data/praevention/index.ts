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
  gewichtUndStoffwechsel,
  wechseljahre,
  kompassMaenner,
  werteEinordnen,
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
  { label: { de: 'Ich möchte wissen, wo ich stehe', en: 'I want to know where I stand' }, slug: 'gesundheitscheck' },
  { label: { de: 'Ich habe schon vieles probiert, um abzunehmen', en: 'I have tried a lot to lose weight' }, slug: 'gewicht-und-stoffwechsel' },
  { label: { de: 'Ich bin über 40 und merke die Wechseljahre', en: 'I am over 40 and notice menopause' }, slug: 'wechseljahre' },
  { label: { de: 'Ich habe Werte oder eine Smartwatch-Meldung', en: 'I have results or a smartwatch alert' }, slug: 'blutwerte-besprechen' },
  { label: { de: 'Ich bin 60 oder älter und möchte fit bleiben', en: 'I am 60 or older and want to stay fit' }, slug: 'check-up-60-plus' },
  { label: { de: 'Ich bin Mann, über 40 und will es genau wissen', en: 'I am a man over 40 and want to know exactly' }, slug: 'maenner-check-up' },
];

export const preventionHub = {
  meta: {
    title: { de: 'Prävention & Lebensstil in Langenfeld: Orientierung für Ihre Gesundheit', en: 'Prevention & lifestyle in Langenfeld: guidance for your health' },
    description: {
      de: 'Gesundheitscheck, Blutwerte besprechen, Sprechstunde Wechseljahre, Gewicht & Stoffwechsel: ärztlich, mit Zeit und Plan. Privatpraxis in Langenfeld.',
      en: 'Health check-up, blood results, menopause consultation, weight & metabolism: medical care with time and a written plan. Private practice in Langenfeld.',
    },
    eyebrow: { de: 'Ein Bereich der Praxis Polaris', en: 'Part of the Polaris practice' },
    lead: {
      de: 'Gesundheit ist mehr als die Abwesenheit von Krankheit. Wir nehmen uns Zeit, ordnen ein, was belegt ist, und geben Ihnen einen schriftlichen Plan, der zu Ihrem Alltag passt.',
      en: 'Health is more than the absence of illness. We take time, explain what is supported by evidence and give you a written plan that fits your everyday life.',
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
      title: { de: 'Erst besprechen, dann messen', en: 'Discuss first, then measure' },
      text: {
        de: 'Bei Angeboten mit Blutwerten beginnen wir mit einem Kurztermin, auch am Telefon oder per Video. Dort legen wir die Werte fest. Morgens nehmen wir kurz Blut ab, und im Befundtermin liegen alle Ergebnisse vor.',
        en: 'For services with blood tests we start with a short appointment, also by phone or video. There we decide on the tests. We take a quick blood sample in the morning, and all results are ready for the results appointment.',
      },
    },
    {
      title: { de: 'Ein schriftlicher Plan', en: 'A written plan' },
      text: {
        de: 'Jedes Angebot endet mit einem Plan zum Mitnehmen: Prioritäten, nächste Schritte und, wenn nötig, ein Brief an Ihre Hausarztpraxis.',
        en: 'Every service ends with a plan to take home: priorities, next steps and, if needed, a letter to your GP.',
      },
    },
    {
      title: { de: 'Kosten je nach Bedarf, vorher schriftlich', en: 'Costs as needed, in writing beforehand' },
      text: {
        de: 'Jeder Termin wird einzeln nach der Gebührenordnung abgerechnet, ohne Pakete, Abos oder Vorkasse. Die voraussichtlichen Kosten erhalten Sie vorab schriftlich, bezahlt wird einmal mit Karte.',
        en: 'Each appointment is billed individually under the German fee schedule, with no packages, subscriptions or prepayment. You receive the expected costs in writing beforehand and pay once by card.',
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
  ctaTitle: { de: 'Ihr Termin in der Präventionssprechstunde', en: 'Your appointment in our prevention clinic' },
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
        de: 'Beim Gesundheitscheck, den Check-ups und bei Gewicht & Stoffwechsel buchen Sie zuerst den Kurztermin. Die Blutabnahme und den Befundtermin vereinbaren wir danach mit Ihnen. Für die Sprechstunde Wechseljahre und für mitgebrachte Blutwerte buchen Sie direkt das Gespräch.',
        en: 'For the health check-up, the check-ups and weight & metabolism, you first book the short appointment. We then arrange the blood sample and the results appointment with you. For the menopause consultation and for results you bring with you, book the consultation directly.',
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
