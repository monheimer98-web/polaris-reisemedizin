/**
 * Kompass für Männer 40+ (DE/EN). Kompass-Kern mit Schlaf und Muskeln;
 * Hormonwerte nur bei passenden Beschwerden. Auf der Website bewusst ohne
 * PSA/Prostata, ohne „Testosteron", „Männerarzt" oder „Manager-Check-up".
 */
import type { PreventionOffer } from '../types';
import { honorar, labor, euroDe, euroEn } from '../preise';

export const kompassMaenner: PreventionOffer = {
  slug: 'kompass-maenner',
  bookingType: 'praevention-maenner',
  group: 'checks',
  stage: 1,
  shortName: { de: 'Kompass für Männer 40+', en: 'Compass for men 40+' },
  teaser: {
    de: 'Herz, Stoffwechsel, Schlaf und Muskeln – sachlich eingeordnet, mit drei Prioritäten, die sich umsetzen lassen.',
    en: 'Heart, metabolism, sleep and muscles – assessed objectively, with three priorities you can act on.',
  },
  facts: {
    forWhom: {
      de: 'Männer etwa zwischen 40 und 65, die wissen möchten, wo sie stehen.',
      en: 'Men aged roughly 40 to 65 who want to know where they stand.',
    },
    appointments: {
      de: 'Labortermin ca. 10 Min. am Morgen, 3–7 Tage später Haupttermin ca. 60 Min.',
      en: 'Lab appointment approx. 10 min in the morning, main appointment approx. 60 min 3–7 days later.',
    },
    fee: {
      de: `${euroDe(honorar.check)} nach GOÄ, einschließlich Blutentnahme`,
      en: `${euroEn(honorar.check)} under the GOÄ, including the blood draw`,
    },
    lab: {
      de: `ca. ${euroDe(labor.maenner)} mit einmaliger Lp(a)-Bestimmung, direkt vom Labor; weitere Werte nur nach Beratung`,
      en: `approx. ${euroEn(labor.maenner)} including a one-off Lp(a) test, billed directly by the laboratory; further tests only after advice`,
    },
  },
  steps: [
    {
      title: { de: 'Buchen und Fragebogen', en: 'Book and questionnaire' },
      text: {
        de: 'Mit der Buchung legen wir Labortermin und Haupttermin an. Der Fragebogen fragt auch nach Schlaf, Schnarchen und Tagesmüdigkeit.',
        en: 'When you book, we schedule the lab appointment and the main appointment. The questionnaire also asks about sleep, snoring and daytime tiredness.',
      },
    },
    {
      title: { de: 'Labortermin am Morgen', en: 'Morning lab appointment' },
      text: {
        de: 'Kurz und früh am Tag, damit es vor der Arbeit passt. Welche Werte sinnvoll sind, besprechen wir vorher.',
        en: 'Short and early in the day so that it fits before work. We discuss beforehand which tests make sense.',
      },
    },
    {
      title: { de: 'Haupttermin mit Plan', en: 'Main appointment with plan' },
      text: {
        de: 'Untersuchung, Herz-Kreislauf-Risiko nach Leitlinie, Schlaf, Bewegung und Alltag. Sie gehen mit einem schriftlichen Plan und drei Prioritäten nach Hause.',
        en: 'Examination, cardiovascular risk according to the guideline, sleep, activity and everyday life. You leave with a written plan and three priorities.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz): ${euroDe(honorar.check)} für Blutentnahme, Untersuchung, Risikoeinschätzung, Beratung und schriftlichen Plan.`,
      `Labor ca. ${euroDe(labor.maenner)} direkt vom Labor; weitere Werte nur nach Beratung. Die voraussichtlichen Kosten nennen wir Ihnen vorab schriftlich.`,
    ],
    en: [
      `Medical fee under the GOÄ (standard rate): ${euroEn(honorar.check)} for blood draw, examination, risk assessment, advice and a written plan.`,
      `Lab approx. ${euroEn(labor.maenner)} billed directly by the laboratory; further tests only after advice. We tell you the expected costs in writing beforehand.`,
    ],
  },
  page: {
    meta: {
      title: { de: 'Kompass für Männer 40+: Herz, Stoffwechsel und Schlaf', en: 'Compass for men 40+: heart, metabolism and sleep' },
      description: {
        de: 'Gesundheits-Check für Männer ab 40 in Langenfeld: Blutdruck, Blutfette, Blutzucker, Schlaf und Muskeln – mit schriftlichem Plan. Honorar nach GOÄ, Termine früh am Morgen.',
        en: 'Health check-up for men over 40 in Langenfeld: blood pressure, lipids, blood sugar, sleep and muscles – with a written plan. Fees under the GOÄ, early-morning appointments.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Männer ab 40 haben ein höheres Risiko für Herz-Kreislauf-Erkrankungen, als viele denken, und nächtliche Atemaussetzer bleiben oft lange unbemerkt. Im Kompass für Männer sehen wir uns Blutdruck, Blutfette, Blutzucker, Schlaf, Bewegung und Ihren Alltag an und vereinbaren mit Ihnen drei Prioritäten, die sich umsetzen lassen.',
        en: 'Men over 40 are at higher risk of cardiovascular disease than many think, and breathing pauses at night often go unnoticed for a long time. In the Compass for men we look at blood pressure, lipids, blood sugar, sleep, activity and your everyday life and agree three priorities you can act on.',
      },
    },
    sections: [
      {
        id: 'herz',
        heading: { de: 'Herz und Gefäße', en: 'Heart and blood vessels' },
        body: {
          de: [
            'Wir messen Blutdruck und Taillenumfang, bestimmen Blutfette, Blutzucker-Langzeitwert, Nierenwerte und einmal im Leben das vererbte Blutfett Lp(a) und schätzen Ihr Risiko für die nächsten zehn Jahre nach der europäischen Leitlinie.',
          ],
          en: [
            'We measure blood pressure and waist circumference, test lipids, long-term blood sugar, kidney function and – once in a lifetime – the inherited lipid Lp(a), and estimate your ten-year risk according to the European guideline.',
          ],
        },
      },
      {
        id: 'schlaf',
        heading: { de: 'Schlaf und nächtliche Atemaussetzer', en: 'Sleep and breathing pauses at night' },
        body: {
          de: [
            'Lautes Schnarchen, beobachtete Atempausen und starke Tagesmüdigkeit können auf eine schlafbezogene Atmungsstörung hinweisen. Mit einem kurzen Fragebogen schätzen wir das Risiko ein und nennen Ihnen, wenn nötig, den Weg zur schlafmedizinischen Abklärung.',
          ],
          en: [
            'Loud snoring, observed breathing pauses and severe daytime sleepiness can indicate a sleep-related breathing disorder. With a short questionnaire we estimate the risk and, if necessary, tell you how to get a sleep-medicine assessment.',
          ],
        },
      },
      {
        id: 'muskeln-und-laborwerte',
        heading: { de: 'Muskeln, Bewegung und Laborwerte nur bei Beschwerden', en: 'Muscles, activity and tests only when there are symptoms' },
        body: {
          de: [
            'Kraft und Ausdauer gehören zu den stärksten Hebeln für Ihre Gesundheit. Wir messen Ihre Handkraft und geben Ihnen ein Bewegungsrezept.',
            'Hormonwerte bestimmen wir nur, wenn Beschwerden dazu passen, und nach Leitlinie. Hormonbehandlungen bieten wir nicht an; bei auffälligen Werten nennen wir Ihnen die passende Fachpraxis.',
          ],
          en: [
            'Strength and endurance are among the most powerful levers for your health. We measure your grip strength and give you an exercise prescription.',
            'We only test hormone levels when symptoms fit and in line with the guideline. We do not offer hormone treatments; if results are abnormal, we refer you to the appropriate specialist practice.',
          ],
        },
      },
      {
        id: 'fragen',
        heading: { de: 'Fragen, die Sie sonst nicht stellen', en: 'Questions you would not usually ask' },
        body: {
          de: [
            'Im Termin ist Raum für Themen, über die Männer selten sprechen: Stress, Stimmung, Alkohol, Erektionsprobleme – oft ein frühes Herz-Kreislauf-Signal – oder Präparate aus dem Fitnessstudio. Wir ordnen sie sachlich ein – ohne Wertung.',
          ],
          en: [
            'The appointment leaves room for topics men rarely talk about: stress, mood, alcohol, erection problems – often an early cardiovascular signal – or supplements from the gym. We assess them objectively – without judgement.',
          ],
        },
        callout: {
          variant: 'caution',
          title: { de: 'Hilfe sofort', en: 'Immediate help' },
          text: {
            de: 'Bei Gedanken, sich das Leben zu nehmen: sofort 112 oder am selben Tag in die Notaufnahme. Die Telefonseelsorge ist rund um die Uhr erreichbar: 0800 111 0 111 oder 0800 111 0 222.',
            en: 'If you have thoughts of taking your own life: call 112 immediately or go to an emergency department the same day. The German crisis line (Telefonseelsorge) is available around the clock: 0800 111 0 111 or 0800 111 0 222.',
          },
        },
      },
    ],
    sourceIds: ['escPraevention2021', 'easLpa2022', 'awmfSchlafapnoe', 'whoBewegung2020', 'nvlHypertonie'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Präventions-Check', en: 'Prevention check-up' }, path: '/praevention/praeventions-check' },
      { label: { de: 'Muskel-Kompass 40+', en: 'Muscle compass 40+' }, path: '/praevention/muskel-kompass' },
      { label: { de: 'Schlaf, Energie & Jetlag', en: 'Sleep, energy & jet lag' }, path: '/praevention/schlaf-und-jetlag' },
      { label: { de: 'Werte einordnen', en: 'Making sense of your results' }, path: '/praevention/werte-einordnen' },
    ],
    faq: [
      {
        q: { de: 'Was unterscheidet den Kompass für Männer vom Präventions-Check?', en: 'How does it differ from the prevention check-up?' },
        a: {
          de: 'Der Kern ist gleich. Im Kompass für Männer achten wir zusätzlich auf Schlaf und nächtliche Atemaussetzer, Muskeln und die typischen Fragen von Männern ab 40.',
          en: 'The core is the same. In the Compass for men we also focus on sleep and breathing pauses at night, muscles and the typical questions of men over 40.',
        },
      },
      {
        q: { de: 'Kann ich vor der Arbeit kommen?', en: 'Can I come before work?' },
        a: {
          de: 'Ja. Die Labortermine liegen morgens. Für den Haupttermin gibt es auch Zeiten am späten Nachmittag.',
          en: 'Yes. Lab appointments are in the morning. For the main appointment there are also late-afternoon slots.',
        },
      },
    ],
  },
};
