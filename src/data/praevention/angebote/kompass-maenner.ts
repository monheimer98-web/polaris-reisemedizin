/**
 * Kompass für Männer 40+ (DE/EN). Kompass-Kern mit Schlaf und Muskeln;
 * Hormonwerte nur bei passenden Beschwerden. Auf der Website bewusst ohne
 * PSA/Prostata, ohne „Testosteron", „Männerarzt" oder „Manager-Check-up".
 */
import type { PreventionOffer } from '../types';
import { labor, termin, weg, euroDe, euroEn } from '../preise';
import { blutabnahmeSchritt, bezahlenAbsatz, frageDreiTermine, honorarDreischritt, kurzterminSchritt, termineDreischritt } from '../ablauf';

export const kompassMaenner: PreventionOffer = {
  slug: 'maenner-check-up',
  bookingType: 'pv-v2',
  group: 'checks',
  stage: 1,
  shortName: { de: 'Check-up Männer 40+', en: 'Men’s check-up 40+' },
  teaser: {
    de: 'Herz, Stoffwechsel, Schlaf und Muskeln – sachlich eingeordnet, mit drei Prioritäten, die sich umsetzen lassen.',
    en: 'Heart, metabolism, sleep and muscles – assessed objectively, with three priorities you can act on.',
  },
  facts: {
    forWhom: {
      de: 'Männer etwa zwischen 40 und 65, die wissen möchten, wo sie stehen.',
      en: 'Men aged roughly 40 to 65 who want to know where they stand.',
    },
    appointments: termineDreischritt('45'),
    fee: honorarDreischritt,
    lab: {
      de: `ca. ${euroDe(labor.maenner)} mit einmaliger Lp(a)-Bestimmung, direkt vom Labor; weitere Werte nur nach Beratung`,
      en: `approx. ${euroEn(labor.maenner)} including a one-off Lp(a) test, billed directly by the laboratory; further tests only after advice`,
    },
  },
  steps: [
    kurzterminSchritt,
    {
      ...blutabnahmeSchritt,
      text: {
        de: 'Kurz und früh am Tag, damit es vor der Arbeit passt. Für manche Werte gelten feste Zeiten, etwa nüchtern am Morgen; das sagen wir Ihnen im Kurztermin.',
        en: 'Short and early in the day so that it fits before work. Some tests need fixed times, for example fasting in the morning; we tell you in the short appointment.',
      },
    },
    {
      title: { de: 'Befundtermin mit Plan', en: 'Results appointment with plan' },
      text: {
        de: 'Etwa eine Woche später: Untersuchung, Herz-Kreislauf-Risiko nach Leitlinie, Schlaf, Bewegung und Alltag. Vorher füllen Sie einen Fragebogen aus, der auch nach Schlaf, Schnarchen und Tagesmüdigkeit fragt. Sie gehen mit einem schriftlichen Plan und drei Prioritäten nach Hause.',
        en: 'About a week later: examination, cardiovascular risk according to the guideline, sleep, activity and everyday life. Beforehand you complete a questionnaire that also asks about sleep, snoring and daytime tiredness. You leave with a written plan and three priorities.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz), je Termin: Kurztermin ${euroDe(termin.kurz)}, Blutabnahme ${euroDe(termin.blutabnahme)}, Befundtermin mit Untersuchung, Risikoeinschätzung, Beratung und schriftlichem Plan ${euroDe(termin.befundCheck)}. Zusammen ${euroDe(weg.check)}.`,
      `Dazu kommen die Laborkosten von ca. ${euroDe(labor.maenner)}, eigene Rechnung vom Labor. Weitere Werte nur, wenn wir sie im Kurztermin gemeinsam für sinnvoll halten; mit allen Zusatzwerten höchstens ca. ${euroDe(labor.maennerMax)}. Braucht ein Wert eine zweite Blutabnahme, kostet sie nochmals ${euroDe(termin.blutabnahme)}.`,
      bezahlenAbsatz.de,
    ],
    en: [
      `Medical fee under the GOÄ (standard rate), per appointment: short appointment ${euroEn(termin.kurz)}, blood sample ${euroEn(termin.blutabnahme)}, results appointment with examination, risk assessment, advice and a written plan ${euroEn(termin.befundCheck)}. Together ${euroEn(weg.check)}.`,
      `Lab costs of approx. ${euroEn(labor.maenner)} come on top, with a separate invoice from the laboratory. Further tests only if we agree in the short appointment that they make sense; with all additional tests at most approx. ${euroEn(labor.maennerMax)}. If a test needs a second blood sample, it costs another ${euroEn(termin.blutabnahme)}.`,
      bezahlenAbsatz.en,
    ],
  },
  page: {
    meta: {
      title: {
        de: 'Check-up für Männer ab 40: Herz, Stoffwechsel und Schlaf',
        en: 'Check-up for men over 40: heart, metabolism and sleep',
      },
      description: {
        de: 'Blutdruck, Blutfette, Blutzucker, Schlaf und Schnarchen, Muskeln: Check-up für Männer ab 40 mit Plan und drei Prioritäten. Privatpraxis Langenfeld.',
        en: 'Blood pressure, lipids, blood sugar, sleep and snoring, muscles: a check-up for men over 40 with a written plan and three priorities. Langenfeld.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Männer ab 40 haben ein höheres Risiko für Herz-Kreislauf-Erkrankungen, als viele denken, und nächtliche Atemaussetzer bleiben oft lange unbemerkt. Im Check-up für Männer sehen wir uns Blutdruck, Blutfette, Blutzucker, Schlaf, Bewegung und Ihren Alltag an und vereinbaren mit Ihnen drei Prioritäten, die sich umsetzen lassen.',
        en: 'Men over 40 are at higher risk of cardiovascular disease than many think, and breathing pauses at night often go unnoticed for a long time. In the men’s check-up we look at blood pressure, lipids, blood sugar, sleep, activity and your everyday life and agree three priorities you can act on.',
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
      { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
      { label: { de: 'Muskel-Kompass 40+', en: 'Muscle compass 40+' }, path: '/praevention/muskel-kompass' },
      { label: { de: 'Schlaf, Energie & Jetlag', en: 'Sleep, energy & jet lag' }, path: '/praevention/schlaf-und-jetlag' },
      { label: { de: 'Blutwerte besprechen', en: 'Blood results explained' }, path: '/praevention/blutwerte-besprechen' },
    ],
    faq: [
      frageDreiTermine,
      {
        q: { de: 'Was unterscheidet den Check-up für Männer vom Gesundheitscheck?', en: 'How does it differ from the health check-up?' },
        a: {
          de: 'Der Kern ist gleich. Im Check-up für Männer achten wir zusätzlich auf Schlaf und nächtliche Atemaussetzer, Muskeln und die typischen Fragen von Männern ab 40.',
          en: 'The core is the same. In the men’s check-up we also focus on sleep and breathing pauses at night, muscles and the typical questions of men over 40.',
        },
      },
      {
        q: { de: 'Kann ich vor der Arbeit kommen?', en: 'Can I come before work?' },
        a: {
          de: 'Ja. Die Blutabnahme liegt morgens, den Kurztermin können Sie auch am Telefon oder per Video wahrnehmen. Für den Befundtermin gibt es auch Zeiten am späten Nachmittag.',
          en: 'Yes. The blood sample is taken in the morning, and you can have the short appointment by phone or video. For the results appointment there are also late-afternoon slots.',
        },
      },
    ],
  },
};
