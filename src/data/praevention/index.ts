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

/** Wer die Sprechstunde betreut (Satz auf jeder Präventionsseite). */
export const preventionDoctor: Localized = {
  de: 'Die Sprechstunde betreut Nicole Ziegler, Ärztin.',
  en: 'Consultations are provided by Nicole Ziegler, physician.',
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
      de: 'Feste Termine, eine Ärztin, die Ihre Geschichte kennt, und ein Verlauf, der zeigt, was sich verändert.',
      en: 'Fixed appointments, a doctor who knows your story and a record that shows what is changing.',
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
  { label: { de: 'Ich möchte wissen, wo ich stehe', en: 'I want to know where I stand' }, slug: 'praeventions-check' },
  { label: { de: 'Ich habe schon vieles probiert, um abzunehmen', en: 'I have tried a lot to lose weight' }, slug: 'gewicht-und-stoffwechsel' },
  { label: { de: 'Ich bin über 40 und merke die Wechseljahre', en: 'I am over 40 and notice menopause' }, slug: 'wechseljahre' },
  { label: { de: 'Ich habe Werte oder eine Smartwatch-Meldung', en: 'I have results or a smartwatch alert' }, slug: 'werte-einordnen' },
  { label: { de: 'Ich bin 60 oder älter und möchte fit bleiben', en: 'I am 60 or older and want to stay fit' }, slug: 'kompass-60-plus' },
  { label: { de: 'Ich bin Mann, über 40 und will es genau wissen', en: 'I am a man over 40 and want to know exactly' }, slug: 'kompass-maenner' },
];

export const preventionHub = {
  meta: {
    title: { de: 'Prävention & Lebensstil: Orientierung für Ihre Gesundheit', en: 'Prevention & lifestyle: guidance for your health' },
    description: {
      de: 'Prävention & Lebensstil bei Polaris in Langenfeld: Präventions-Check, Begleitung bei Gewicht und Stoffwechsel, Sprechstunde Wechseljahre, Schlaf und Muskeln – ärztlich, mit Zeit und schriftlichem Plan.',
      en: 'Prevention & lifestyle at Polaris in Langenfeld: prevention check-up, support for weight and metabolism, menopause consultation, sleep and muscles – medical, with time and a written plan.',
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
      title: { de: 'Labor zuerst', en: 'Lab tests first' },
      text: {
        de: 'Bei den Checks nehmen wir morgens kurz Blut ab. Im Haupttermin liegen dann alle Werte vor, und Ihr Plan wird im Termin fertig.',
        en: 'For check-ups we take a quick blood sample in the morning. All results are then ready for the main appointment, and your plan is finished during it.',
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
      title: { de: 'Preise offen nach GOÄ', en: 'Transparent fees under the GOÄ' },
      text: {
        de: 'Jeder Termin wird einzeln nach der Gebührenordnung abgerechnet – ohne Pakete, Abos oder Vorkasse. Die Kosten nennen wir Ihnen vorab schriftlich.',
        en: 'Each appointment is billed individually under the German fee schedule – no packages, subscriptions or prepayment. We tell you the costs in writing beforehand.',
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
    de: 'Polaris ist eine Privatpraxis. Abrechnung nach GOÄ, Labor direkt vom Labor.',
    en: 'Polaris is a private practice. Fees under the GOÄ; lab tests are billed directly by the laboratory.',
  },
};
