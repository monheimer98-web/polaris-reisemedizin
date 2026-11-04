/**
 * Polaris Kompass – Präventions-Check (DE/EN). Ablauf seit 04.11.2026:
 * Kurztermin (welche Werte, Kosten), Blutabnahme, Befundtermin mit Plan.
 * Ohne Ganzkörper-Screening, ohne Komplettlabor, ohne Heilversprechen.
 */
import type { PreventionOffer } from '../types';
import { labor, termin, weg, euroDe, euroEn } from '../preise';
import { blutabnahmeSchritt, bezahlenAbsatz, frageDreiTermine, honorarDreischritt, kurzterminSchritt, termineDreischritt } from '../ablauf';

export const praeventionsCheck: PreventionOffer = {
  slug: 'gesundheitscheck',
  bookingType: 'pv-v1',
  group: 'checks',
  stage: 1,
  shortName: { de: 'Gesundheitscheck', en: 'Health check-up' },
  teaser: {
    de: 'Blutdruck, Blutfette, Blutzucker, Niere, Lebensstil und Impfschutz – eingeordnet in einen schriftlichen Plan mit drei Prioritäten.',
    en: 'Blood pressure, blood lipids, blood sugar, kidneys, lifestyle and vaccinations – summed up in a written plan with three priorities.',
  },
  facts: {
    forWhom: {
      de: 'Erwachsene ohne Beschwerden, die wissen möchten, wo sie stehen – besonders ab etwa 35 Jahren.',
      en: 'Adults without symptoms who want to know where they stand – especially from about 35.',
    },
    appointments: termineDreischritt('45'),
    fee: honorarDreischritt,
    lab: {
      de: `ca. ${euroDe(labor.check)}, mit einmaliger Lp(a)-Bestimmung ca. ${euroDe(labor.checkMitLpa)}, eigene Rechnung vom Labor`,
      en: `approx. ${euroEn(labor.check)}, with a one-off Lp(a) test approx. ${euroEn(labor.checkMitLpa)}, separate invoice from the laboratory`,
    },
  },
  steps: [
    kurzterminSchritt,
    blutabnahmeSchritt,
    {
      title: { de: 'Befundtermin mit allen Werten', en: 'Results appointment with all values' },
      text: {
        de: 'Etwa eine Woche später liegen alle Werte vor. Vorher füllen Sie einen Fragebogen zu Familie, Bewegung, Ernährung, Schlaf und Ihren Zielen aus. Wir untersuchen Sie, messen Blutdruck und Taillenumfang, schätzen Ihr Herz-Kreislauf-Risiko ein und besprechen, was für Sie zählt.',
        en: 'About a week later all results are available. Beforehand you complete a questionnaire on family history, activity, diet, sleep and your goals. We examine you, measure blood pressure and waist circumference, estimate your cardiovascular risk and discuss what matters for you.',
      },
    },
    {
      title: { de: 'Ihr Plan zum Mitnehmen', en: 'Your plan to take home' },
      text: {
        de: 'Sie gehen mit einem schriftlichen Präventionsplan nach Hause: Ihre Werte in verständlichen Worten, drei Prioritäten, Ihr Impfplan und, wenn nötig, ein Brief an Ihre Hausarztpraxis.',
        en: 'You leave with a written prevention plan: your results in plain language, three priorities, your vaccination plan and, if needed, a letter to your GP.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz), je Termin: Kurztermin ${euroDe(termin.kurz)}, Blutabnahme ${euroDe(termin.blutabnahme)}, Befundtermin mit Untersuchung, Risikoeinschätzung, Beratung und schriftlichem Plan ${euroDe(termin.befundCheck)}. Zusammen ${euroDe(weg.check)}. Ein Verlaufsgespräch nach einigen Monaten kostet ${euroDe(termin.kurz)}.`,
      `Dazu kommen die Laborkosten: Das Labor untersucht Ihre Blutprobe und schickt Ihnen dafür eine eigene Rechnung, ca. ${euroDe(labor.check)}, mit einmaliger Lp(a)-Bestimmung ca. ${euroDe(labor.checkMitLpa)}. Weitere Werte nur, wenn wir sie im Kurztermin gemeinsam für sinnvoll halten.`,
      bezahlenAbsatz.de,
      'Private Krankenversicherungen und Beihilfe erstatten Gesundheitsuntersuchungen je nach Tarif, häufig in den Abständen des gesetzlichen Check-ups (ab 35 Jahren alle drei Jahre). Bitte klären Sie die Erstattung vorab.',
    ],
    en: [
      `Medical fee under the GOÄ (standard rate), per appointment: short appointment ${euroEn(termin.kurz)}, blood sample ${euroEn(termin.blutabnahme)}, results appointment with examination, risk assessment, advice and a written plan ${euroEn(termin.befundCheck)}. Together ${euroEn(weg.check)}. A follow-up conversation after a few months costs ${euroEn(termin.kurz)}.`,
      `Lab costs come on top: the laboratory analyses your blood sample and sends you its own invoice, approx. ${euroEn(labor.check)}, with a one-off Lp(a) test approx. ${euroEn(labor.checkMitLpa)}. Further tests only if we agree in the short appointment that they make sense.`,
      bezahlenAbsatz.en,
      'Private health insurers and civil-service allowances (Beihilfe) reimburse health check-ups depending on the tariff, often at the intervals of the statutory check-up (every three years from age 35). Please check reimbursement in advance.',
    ],
  },
  page: {
    meta: {
      title: {
        de: 'Gesundheitscheck: Herz, Stoffwechsel und Lebensstil mit Plan',
        en: 'Health check-up: heart, metabolism and lifestyle with a plan',
      },
      description: {
        de: 'Für Privatversicherte und Selbstzahler: Blutdruck, Blutfette, Langzeitzucker, Lp(a) nach Bedarf, Lebensstil. Ärztlich eingeordnet, mit schriftlichem Plan.',
        en: 'For privately insured and self-paying patients: blood pressure, lipids, long-term blood sugar, Lp(a) if useful and lifestyle, with a written plan.',
      },
      eyebrow: {
        de: 'Polaris Kompass',
        en: 'Polaris Compass',
      },
      lead: {
        de: 'Viele Menschen fühlen sich gesund und möchten wissen, wo sie stehen. Im Polaris Kompass sehen wir uns die Faktoren an, die für Herz, Gefäße und Stoffwechsel nach heutigem Wissen besonders zählen. Am Ende erhalten Sie einen schriftlichen Plan mit drei Prioritäten.',
        en: 'Many people feel healthy and want to know where they stand. In the Polaris Compass we look at the factors that, according to current knowledge, matter most for the heart, blood vessels and metabolism. At the end you receive a written plan with three priorities.',
      },
    },
    sections: [
      {
        id: 'was-wir-ansehen',
        heading: { de: 'Was wir uns ansehen', en: 'What we look at' },
        body: {
          de: [
            'Der Check konzentriert sich auf Werte, aus denen sich etwas ableiten lässt. Wir messen nicht möglichst viel, sondern das, was für Ihre Gesundheit in den nächsten Jahren zählt.',
          ],
          en: [
            'The check-up focuses on results that lead to a decision. We do not measure as much as possible, but what matters for your health over the coming years.',
          ],
        },
        list: {
          de: [
            'Blutdruck nach Standard, Gewicht, Taillenumfang und das Verhältnis von Taille zu Körpergröße,',
            'Blutfette, Blutzucker-Langzeitwert (HbA1c) und Nierenfunktion,',
            'Ihr Risiko für Herz-Kreislauf-Erkrankungen in den nächsten zehn Jahren, berechnet nach der europäischen Leitlinie,',
            'Bewegung, Ernährung, Schlaf, Rauchen, Alkohol und Belastung im Alltag,',
            'Ihren Impfschutz anhand Ihres Impfpasses.',
          ],
          en: [
            'blood pressure measured to standard, weight, waist circumference and waist-to-height ratio,',
            'blood lipids, long-term blood sugar (HbA1c) and kidney function,',
            'your ten-year risk of cardiovascular disease, calculated according to the European guideline,',
            'physical activity, diet, sleep, smoking, alcohol and everyday stress,',
            'your vaccination status based on your vaccination record.',
          ],
        },
      },
      {
        id: 'lpa',
        heading: { de: 'Lipoprotein(a): einmal im Leben', en: 'Lipoprotein(a): once in a lifetime' },
        body: {
          de: [
            'Lipoprotein(a), kurz Lp(a), ist ein Blutfett, dessen Höhe vor allem vererbt ist. Ein hoher Wert erhöht das Risiko für Herz-Kreislauf-Erkrankungen, auch wenn die übrigen Blutfette unauffällig sind. Die europäische Fachgesellschaft empfiehlt, Lp(a) bei Erwachsenen mindestens einmal zu bestimmen.',
            'Ob die Bestimmung bei Ihnen sinnvoll ist, besprechen wir im Kurztermin. Wurde der Wert schon einmal gemessen, ist keine Wiederholung nötig.',
          ],
          en: [
            'Lipoprotein(a), Lp(a) for short, is a blood lipid whose level is largely inherited. A high level increases the risk of cardiovascular disease even when other lipids are normal. The European society recommends measuring Lp(a) at least once in adults.',
            'We discuss in the short appointment whether the test makes sense for you. If it has been measured before, there is no need to repeat it.',
          ],
        },
      },
      {
        id: 'plan',
        heading: { de: 'Ihr Plan', en: 'Your plan' },
        body: {
          de: [
            'Der Plan ist das Ergebnis des Checks: zwei bis drei Seiten mit Ihren Werten in verständlichen Worten, drei Prioritäten für die nächsten Monate, Ihrem Impfplan und einem Termin zur Wiedervorlage. Auf Wunsch erhalten Sie ein Bewegungsrezept, eine Präventionsempfehlung für zertifizierte Kurse Ihrer Krankenkasse oder einen Brief an Ihre Hausarztpraxis.',
          ],
          en: [
            'The plan is the result of the check-up: two to three pages with your results in plain language, three priorities for the coming months, your vaccination plan and a date for review. On request you receive an exercise prescription, a prevention recommendation for certified courses offered by your health insurer, or a letter to your GP.',
          ],
        },
        callout: {
          variant: 'info',
          title: { de: 'Dauerbehandlung bleibt bei Ihrer Hausarztpraxis', en: 'Long-term care stays with your GP' },
          text: {
            de: 'Ergibt der Check einen Befund, der eine Behandlung braucht, schreiben wir Ihrer Hausarztpraxis – mit Ihrem Einverständnis – und nennen Ihnen den nächsten Schritt.',
            en: 'If the check-up reveals a finding that needs treatment, we write to your GP – with your consent – and tell you the next step.',
          },
        },
      },
      {
        id: 'nicht-dazu',
        heading: { de: 'Was nicht dazugehört', en: 'What is not included' },
        body: {
          de: [
            'Der Check ersetzt nicht die gesetzlichen Früherkennungsuntersuchungen. Untersuchungen ohne Konsequenz bieten wir bewusst nicht an.',
          ],
          en: [
            'The check-up does not replace statutory screening examinations. We deliberately do not offer tests that would not change anything.',
          ],
        },
        list: {
          de: [
            'kein „Komplettlabor", keine Vitamin-, Hormon- oder Gentests ohne Anlass,',
            'kein EKG, kein Ultraschall und keine Lungenfunktion als Routine,',
            'keine Dauerbehandlung und keine Gutachten.',
          ],
          en: [
            'no “full blood panel”, no vitamin, hormone or genetic tests without a reason,',
            'no routine ECG, ultrasound or lung function test,',
            'no long-term treatment and no expert reports.',
          ],
        },
      },
    ],
    sourceIds: ['escPraevention2021', 'easLpa2022', 'nvlHypertonie', 'gbaGesundheitsuntersuchung', 'whoBewegung2020', 'stikoImpfempfehlungen'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Check-up Männer 40+', en: 'Men’s check-up 40+' }, path: '/praevention/maenner-check-up' },
      { label: { de: 'Gewicht & Stoffwechsel', en: 'Weight & metabolism' }, path: '/praevention/gewicht-und-stoffwechsel' },
      { label: { de: 'Blutwerte besprechen', en: 'Blood results explained' }, path: '/praevention/blutwerte-besprechen' },
      { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    ],
    faq: [
      {
        q: { de: 'Muss ich zur Blutentnahme nüchtern sein?', en: 'Do I need to fast for the blood test?' },
        a: {
          de: 'In der Regel nicht. Die Werte des Checks lassen sich ohne Nüchternheit bestimmen. Nehmen Sie Ihre Medikamente wie gewohnt ein. Wenn etwas anderes gilt, sagen wir es Ihnen vorab.',
          en: 'Usually not. The check-up values can be measured without fasting. Take your medication as usual. If anything else applies, we will tell you beforehand.',
        },
      },
      frageDreiTermine,
      {
        q: { de: 'Ich bin gesetzlich versichert. Kann ich trotzdem kommen?', en: 'I have statutory health insurance. Can I still come?' },
        a: {
          de: 'Ja. Polaris ist eine Privatpraxis; Sie zahlen das Honorar nach GOÄ selbst. Den gesetzlichen Check-up ab 35 Jahren erhalten Sie ohne Zuzahlung in Ihrer Hausarztpraxis.',
          en: 'Yes. Polaris is a private practice; you pay the fee under the GOÄ yourself. The statutory check-up from age 35 is available at no extra cost from your GP.',
        },
      },
    ],
  },
};
