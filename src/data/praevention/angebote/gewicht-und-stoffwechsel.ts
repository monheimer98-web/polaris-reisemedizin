/**
 * Gewicht & Stoffwechsel – ärztliche Begleitung über 6–12 Monate (DE/EN).
 * Für Menschen, die schon vieles probiert haben. HWG: keine Wirkstoff-,
 * Präparate- oder „Abnehmspritzen"-Begriffe, keine Kilogramm-Versprechen,
 * keine Vorher-Nachher-Bilder, keine Pakete. Medikamente werden nicht erwähnt
 * (§ 10 HWG; BGH I ZR 74/25: schon die erkennbare Wirkstoffklasse genügt).
 */
import type { PreventionOffer } from '../types';
import { honorar, labor, euroDe, euroEn } from '../preise';

const start = honorar.blutentnahme + honorar.gewichtStart;

export const gewichtUndStoffwechsel: PreventionOffer = {
  slug: 'gewicht-und-stoffwechsel',
  bookingType: 'p-gew-start',
  group: 'begleitung',
  stage: 1,
  shortName: { de: 'Gewicht & Stoffwechsel', en: 'Weight & metabolism' },
  teaser: {
    de: 'Ärztliche Begleitung über 6–12 Monate: Werte, Ernährung mit Plan, Muskeln und regelmäßige Termine – ohne Pakete und ohne Versprechen.',
    en: 'Medical support over 6–12 months: test results, a nutrition plan, muscle strength and regular appointments – no packages, no promises.',
  },
  facts: {
    forWhom: {
      de: 'Erwachsene mit Übergewicht oder erhöhten Stoffwechselwerten – auch wenn Sie schon vieles ausprobiert haben.',
      en: 'Adults with excess weight or raised metabolic values – including those who have already tried a lot.',
    },
    appointments: {
      de: 'Labortermin ca. 10 Min., Start ca. 45 Min., Plantermin mit Ernährungsplan ca. 30 Min., danach Verlaufstermine ca. 15–20 Min. etwa monatlich; ca. 10–12 Termine im ersten Jahr.',
      en: 'Lab appointment approx. 10 min, start approx. 45 min, plan appointment with nutrition plan approx. 30 min, then follow-ups of approx. 15–20 min about monthly; approx. 10–12 appointments in the first year.',
    },
    fee: {
      de: `Start einschließlich Blutabnahme ${euroDe(start)}, die Untersuchung der Blutprobe im Labor kostet extra (ca. ${euroDe(labor.gewichtStart)}); Plantermin ${euroDe(honorar.gewichtPlan)}, Verlauf ${euroDe(honorar.verlauf)} (GOÄ, je Termin)`,
      en: `Start including the blood draw ${euroEn(start)}, analysing the sample in the laboratory costs extra (approx. ${euroEn(labor.gewichtStart)}); plan appointment ${euroEn(honorar.gewichtPlan)}, follow-up ${euroEn(honorar.verlauf)} (GOÄ, per appointment)`,
    },
    lab: {
      de: `zu Beginn sowie nach 3 und 12 Monaten, zusammen ca. ${euroDe(labor.gewichtJahr)} im ersten Jahr, eigene Rechnung vom Labor`,
      en: `at the start and after 3 and 12 months, together approx. ${euroEn(labor.gewichtJahr)} in the first year, separate invoice from the laboratory`,
    },
  },
  steps: [
    {
      title: { de: 'Fragebogen und Labortermin', en: 'Questionnaire and lab appointment' },
      text: {
        de: 'Vorab erzählen Sie uns Ihre Gewichtsgeschichte: was Sie schon versucht haben, was geholfen hat und was nicht. Im kurzen Labortermin nehmen wir Blut ab.',
        en: 'Beforehand you tell us your weight history: what you have tried, what helped and what did not. In the short lab appointment we take a blood sample.',
      },
    },
    {
      title: { de: 'Start mit allen Werten', en: 'Start with all results' },
      text: {
        de: 'Wir untersuchen Sie, messen Gewicht, Taille, Blutdruck und Muskelkraft und sehen auf Leber, Blutzucker, Blutfette, Schlaf und Medikamente, die das Gewicht beeinflussen können.',
        en: 'We examine you, measure weight, waist, blood pressure and muscle strength, and look at liver, blood sugar, lipids, sleep and medicines that can affect weight.',
      },
    },
    {
      title: { de: 'Ernährungsprotokoll und Plantermin', en: 'Food diary and plan appointment' },
      text: {
        de: 'Sie schreiben eine Woche lang auf, was Sie essen und trinken. Im Plantermin legen wir realistische Ziele fest – nicht nur für die Waage, sondern auch für Taille, Blutdruck, Blutzucker und Kraft – und Sie erhalten Ihren persönlichen Ernährungsplan mit Beispielen aus Ihrem Alltag.',
        en: 'For one week you note what you eat and drink. In the plan appointment we set realistic goals – not only for the scales, but also for waist, blood pressure, blood sugar and strength – and you receive your personal nutrition plan with examples from your everyday life.',
      },
    },
    {
      title: { de: 'Regelmäßige Begleitung', en: 'Regular support' },
      text: {
        de: 'Etwa einmal im Monat sehen wir uns: Was hat funktioniert, was nicht? Wir passen den Plan an, und der Verlaufsbogen zeigt, was sich verändert. Nach 3 und 12 Monaten kontrollieren wir die Laborwerte, nach 6 und 12 Monaten ziehen wir Bilanz.',
        en: 'About once a month we meet: what worked, what did not? We adjust the plan, and the progress chart shows what is changing. After 3 and 12 months we recheck the lab values, and after 6 and 12 months we review progress.',
      },
    },
  ],
  costs: {
    de: [
      `Jeder Termin wird einzeln nach GOÄ (Regelsatz) abgerechnet – ohne Pakete, Monatsbeiträge oder Vorauszahlung: Start mit Blutentnahme ${euroDe(start)}, Plantermin mit persönlichem Ernährungsplan ${euroDe(honorar.gewichtPlan)}, Verlaufstermin ${euroDe(honorar.verlauf)}, Halbjahres- und Jahresbilanz je ${euroDe(honorar.bilanz)}.`,
      `Ein erstes Jahr mit 10 bis 12 Terminen kostet ca. 330–400 € ärztliches Honorar, dazu Laborkosten von ca. ${euroDe(labor.gewichtJahr)} mit eigener Rechnung vom Labor. Sie erhalten vorab eine schriftliche Kostenschätzung und zahlen nur, was stattfindet.`,
      'Private Krankenversicherungen und Beihilfe erstatten ärztliche Behandlungen je nach Tarif und Diagnose. Gesetzlich Versicherte zahlen die Termine selbst. Bitte klären Sie die Erstattung vorab.',
    ],
    en: [
      `Each appointment is billed individually under the GOÄ (standard rate) – no packages, monthly fees or prepayment: start with blood draw ${euroEn(start)}, plan appointment with personal nutrition plan ${euroEn(honorar.gewichtPlan)}, follow-up ${euroEn(honorar.verlauf)}, six-month and annual review ${euroEn(honorar.bilanz)} each.`,
      `A first year with 10 to 12 appointments costs approx. €330–400 in medical fees, plus lab costs of approx. ${euroEn(labor.gewichtJahr)} with a separate invoice from the laboratory. You receive a written cost estimate beforehand and only pay for what takes place.`,
      'Private health insurers and Beihilfe reimburse medical treatment depending on the tariff and diagnosis. People with statutory insurance pay for the appointments themselves. Please check reimbursement in advance.',
    ],
  },
  page: {
    meta: {
      title: { de: 'Gewicht & Stoffwechsel: ärztlich begleitet, Schritt für Schritt', en: 'Weight & metabolism: medical support, step by step' },
      description: {
        de: 'Ärztliche Begleitung bei Gewicht und Stoffwechsel in Langenfeld: Start-Check mit Laborwerten, Ernährungsplan, Muskelkraft und regelmäßige Termine über 6–12 Monate. Abrechnung je Termin nach GOÄ.',
        en: 'Medical support for weight and metabolism in Langenfeld: start check with lab tests, nutrition plan, muscle strength and regular appointments over 6–12 months. Billed per appointment under the GOÄ.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Gewicht ist mehr als eine Zahl auf der Waage. Im Start-Check sehen wir uns Ihre Blutwerte, Blutdruck, Leber, Muskelkraft und Ihren Alltag an und vereinbaren mit Ihnen realistische Ziele. Danach begleiten wir Sie über sechs bis zwölf Monate mit regelmäßigen Terminen und einem Verlaufsbogen, der zeigt, was sich verändert.',
        en: 'Weight is more than a number on the scales. In the start check we look at your blood values, blood pressure, liver, muscle strength and everyday life and agree realistic goals with you. We then support you over six to twelve months with regular appointments and a progress chart that shows what is changing.',
      },
    },
    sections: [
      {
        id: 'schon-vieles-probiert',
        heading: { de: 'Wenn Sie schon vieles probiert haben', en: 'If you have already tried a lot' },
        body: {
          de: [
            'Viele, die zu uns kommen, haben Diäten, Apps und Programme hinter sich – und das Gefühl, damit allein gelassen worden zu sein. Wir fangen nicht bei null an: Wir sehen uns gemeinsam an, was bisher geholfen hat, was nicht und warum. Daraus entsteht ein Plan, der zu Ihrem Alltag passt.',
            'Sie haben feste Termine, eine Ärztin, die Ihre Geschichte kennt, und einen Verlaufsbogen, der auch die Fortschritte zeigt, die keine Waage misst.',
          ],
          en: [
            'Many people who come to us have been through diets, apps and programmes – and feel they were left on their own. We do not start from scratch: together we look at what has helped so far, what has not, and why. This becomes a plan that fits your everyday life.',
            'You have fixed appointments, a doctor who knows your story and a progress chart that also shows the progress no scales can measure.',
          ],
        },
      },
      {
        id: 'ernaehrung',
        heading: { de: 'Ernährung mit Plan', en: 'Nutrition with a plan' },
        body: {
          de: [
            'Statt eines starren Diätplans erhalten Sie nach einer Woche Ernährungsprotokoll einen persönlichen Ernährungsplan mit Zielen und Beispielen: genug Eiweiß, damit beim Abnehmen die Muskeln erhalten bleiben, ballaststoffreiche Kost, feste Mahlzeiten-Strukturen, Einkauf und Alltag. Grundlage sind die Empfehlungen der Deutschen Gesellschaft für Ernährung.',
            'Wer eine ausführliche Ernährungstherapie über mehrere Sitzungen möchte, kann sie zusätzlich bei einer qualifizierten Ernährungsfachkraft Ihrer Wahl machen. Bei bestimmten Diagnosen beteiligen sich Krankenkassen an den Kosten; eine ärztliche Bescheinigung stellen wir aus, wenn eine behandlungsbedürftige Erkrankung vorliegt.',
          ],
          en: [
            'Instead of a rigid diet plan, after a week of keeping a food diary you receive a personal nutrition plan with goals and examples: enough protein to preserve muscle while losing weight, a diet rich in fibre, regular meal structures, shopping and everyday life. It is based on the recommendations of the German Nutrition Society (DGE).',
            'If you would like more detailed nutrition therapy over several sessions, you can also see a qualified nutrition professional of your choice. For certain diagnoses health insurers contribute to the costs; we issue a medical certificate if there is a condition that requires treatment.',
          ],
        },
      },
      {
        id: 'muskeln',
        heading: { de: 'Bewegung und Muskeln', en: 'Activity and muscles' },
        body: {
          de: [
            'Krafttraining an zwei bis drei Tagen pro Woche schützt beim Abnehmen die Muskulatur und hilft Herz, Stoffwechsel und Knochen. Wir messen Ihre Handkraft und wie schnell Sie vom Stuhl aufstehen, und geben Ihnen ein Bewegungsrezept, das zu Ihrem Ausgangspunkt passt.',
          ],
          en: [
            'Strength training on two to three days a week protects muscle during weight loss and helps the heart, metabolism and bones. We measure your grip strength and how quickly you can rise from a chair, and give you an exercise prescription that fits your starting point.',
          ],
        },
      },
      {
        id: 'nach-leitlinie',
        heading: { de: 'Nach Leitlinie, mit Ihnen gemeinsam', en: 'Guideline-based, decided together' },
        body: {
          de: [
            'Grundlage der Begleitung ist die S3-Leitlinie zur Adipositas: Ernährung, Bewegung und Verhalten, angepasst an Ihren Ausgangspunkt. Welche Schritte für Sie passen, entscheiden wir gemeinsam im persönlichen Termin, nach Untersuchung und Laborwerten.',
            'Sie sind bereits in Behandlung? Dann begleiten wir Sie mit Messungen, Labor, Ernährung mit genug Eiweiß und Krafttraining.',
          ],
          en: [
            'The support is based on the German S3 guideline on obesity: nutrition, physical activity and behaviour, adapted to your starting point. Which steps suit you is decided together in person, after examination and lab tests.',
            'Already in treatment? Then we support you with measurements, lab tests, a diet with enough protein and strength training.',
          ],
        },
      },
      {
        id: 'nicht-dazu',
        heading: { de: 'Was wir nicht anbieten', en: 'What we do not offer' },
        body: { de: ['Bewusst nicht im Angebot sind:'], en: ['We deliberately do not offer:'] },
        list: {
          de: [
            'Programm- oder Monatspreise, Pakete und Vorkasse,',
            'Formula-Diäten, Nahrungsergänzung und den Verkauf von Produkten,',
            'Behandlungen zur Fettauflösung, Hormonkuren und Infusionen,',
            'Behandlung von Essstörungen – hier vermitteln wir den passenden Weg.',
          ],
          en: [
            'programme or monthly prices, packages and prepayment,',
            'meal-replacement diets, supplements and product sales,',
            'fat-dissolving treatments, hormone cures and infusions,',
            'treatment of eating disorders – here we help you find the right support.',
          ],
        },
      },
    ],
    sourceIds: ['awmfAdipositas', 'dgeEmpfehlungen', 'dgeProtein', 'whoBewegung2020', 'escPraevention2021'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Muskel-Kompass 40+', en: 'Muscle compass 40+' }, path: '/praevention/muskel-kompass' },
      { label: { de: 'Präventions-Check', en: 'Prevention check-up' }, path: '/praevention/praeventions-check' },
      { label: { de: 'Wechseljahre', en: 'Menopause' }, path: '/praevention/wechseljahre' },
      { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    ],
    faq: [
      {
        q: { de: 'Wie viel werde ich abnehmen?', en: 'How much weight will I lose?' },
        a: {
          de: 'Das können wir nicht versprechen. Die Leitlinie hält eine moderate, schrittweise Abnahme für realistisch; ebenso wichtig sind Taille, Blutdruck, Blutzucker und Kraft.',
          en: 'We cannot promise that. The guideline considers moderate, gradual weight loss realistic; waist, blood pressure, blood sugar and strength matter just as much.',
        },
      },
      {
        q: { de: 'Muss ich mich für ein Jahr verpflichten?', en: 'Do I have to commit for a year?' },
        a: {
          de: 'Nein. Jeder Termin wird einzeln abgerechnet. Den nächsten Termin vereinbaren wir jeweils gemeinsam; Sie können jederzeit aufhören oder in Ihre Hausarztpraxis wechseln.',
          en: 'No. Each appointment is billed individually. We agree the next appointment together each time; you can stop at any time or return to your GP.',
        },
      },
      {
        q: { de: 'Sind auch Termine per Video möglich?', en: 'Are video appointments possible?' },
        a: {
          de: 'Der Start und die Termine mit Untersuchung finden immer in der Praxis statt. Ob einzelne Verlaufsgespräche später auch per Video möglich sind, sagen wir Ihnen, sobald dieser Weg eingerichtet ist.',
          en: 'The start and appointments with an examination always take place in the practice. We will let you know once individual follow-up conversations can also be held by video.',
        },
      },
    ],
  },
};
