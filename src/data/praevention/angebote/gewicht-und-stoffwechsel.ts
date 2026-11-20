/**
 * Sprechstunde Gewicht und Stoffwechsel (DE/EN). Seit 20.11.2026 in zwei
 * Terminen: Ersttermin mit Gespräch, Messung, Untersuchung von Kopf bis Fuß und
 * Blutabnahme, danach Befund und Plan; Begleitung danach freiwillig.
 * Streng nach § 10 HWG und BGH I ZR 74/25 (schon die erkennbare Wirkstoffklasse
 * genügt): kein Arzneimittel, keine Wirkstoffgruppe, keine Andeutung einer
 * Behandlung mit Mitteln, keine Kilogramm- oder Gewichtsversprechen, keine
 * Vorher-nachher-Bilder, keine Patientenstimmen, keine Pakete.
 * Erlaubt: Beratung, Untersuchung, Blutwerte, Ernährung, Bewegung, Schlaf,
 * persönlicher Plan, Begleitung.
 */
import type { Localized } from '../../types';
import type { PreventionOffer } from '../types';
import { honorar, labor, zweiTermine, zweiTermineWeg, caDe, caEn, euroDe, euroEn } from '../preise';
import { erstattung, kostenVorab } from './zwei-termine';

/** Arbeitsname des Angebots – nur hier ändern (Kachel, Navigation, Überschrift, Verweise). */
const name: Localized = {
  de: 'Sprechstunde Gewicht und Stoffwechsel',
  en: 'Weight and metabolism consultation',
};

export const gewichtUndStoffwechsel: PreventionOffer = {
  slug: 'gewicht-und-stoffwechsel',
  bookingType: 'pv-v4',
  group: 'begleitung',
  stage: 1,
  shortName: name,
  teaser: {
    de: 'Ärztliche Beratung mit Zeit: Untersuchung, Blutwerte, Ernährung, Bewegung und Schlaf – mit persönlichem Plan und Begleitung, wenn Sie möchten.',
    en: 'Medical advice with time to talk: examination, blood tests, diet, activity and sleep – with a personal plan and ongoing support if you wish.',
  },
  facts: {
    forWhom: {
      de: 'Erwachsene mit Übergewicht oder erhöhten Stoffwechselwerten, die mit ärztlicher Begleitung etwas ändern möchten – auch wenn Sie schon vieles ausprobiert haben.',
      en: 'Adults with excess weight or raised metabolic values who want to make changes with medical support – including those who have already tried a lot.',
    },
    appointments: {
      de: 'Ersttermin ca. 40 Min. in der Praxis, Befund und Plan ca. 30 Min., wenn alle Werte vorliegen, meist etwa eine Woche später. Danach auf Wunsch Verlaufstermine ca. 15–20 Min.',
      en: 'First appointment approx. 40 min at the practice, results and plan approx. 30 min once all values are available, usually about a week later. After that, follow-ups of approx. 15–20 min if you wish.',
    },
    fee: {
      de: `Nach GOÄ, je nachdem, was Sie brauchen. Typisch für beide Termine zusammen: ${caDe(zweiTermineWeg.gewicht)}; ein Verlaufstermin ${caDe(honorar.verlauf)}.`,
      en: `Under the GOÄ, depending on what you need. Typically for both appointments together: ${caEn(zweiTermineWeg.gewicht)}; a follow-up ${caEn(honorar.verlauf)}.`,
    },
    lab: {
      de: `ca. ${labor.gewichtStart}–${euroDe(labor.gewichtStartMitTsh)}, je nach Wert auf unserer Rechnung oder vom Labor`,
      en: `approx. ${euroEn(labor.gewichtStart)}–${euroEn(labor.gewichtStartMitTsh)}, on our invoice or from the laboratory, depending on the test`,
    },
  },
  steps: [
    {
      title: { de: 'Ersttermin: Ihre Geschichte', en: 'First appointment: your story' },
      text: {
        de: 'Etwa 40 Minuten in der Praxis. Sie erzählen uns Ihre Gewichtsgeschichte: was Sie schon versucht haben, was geholfen hat und was nicht. Wir fragen nach Alltag, Essen, Bewegung, Schlaf und Belastung und nach Ihren Zielen.',
        en: 'About 40 minutes at the practice. You tell us your weight history: what you have tried, what helped and what did not. We ask about your everyday life, eating, activity, sleep and stress, and about your goals.',
      },
    },
    {
      title: { de: 'Messen und untersuchen', en: 'Measurements and examination' },
      text: {
        de: 'Wir messen Gewicht, Größe, Taille und Blutdruck und untersuchen Sie von Kopf bis Fuß. Dazu kommen zwei einfache Kraftmessungen: Handkraft und Aufstehen vom Stuhl.',
        en: 'We measure weight, height, waist and blood pressure and examine you from head to toe. We add two simple strength tests: grip strength and rising from a chair.',
      },
    },
    {
      title: { de: 'Blutabnahme im selben Termin', en: 'Blood sample in the same appointment' },
      text: {
        de: 'Am Ende des Ersttermins nehmen wir Blut ab: Blutzucker-Langzeitwert, Blutfette, Leber- und Nierenwerte, ein kleines Blutbild und, wenn er für Sie etwas aussagt, den Schilddrüsenwert. Sie müssen dafür in der Regel nicht nüchtern sein.',
        en: 'At the end of the first appointment we take a blood sample: long-term blood sugar, blood lipids, liver and kidney values, a basic blood count and, if it is informative for you, the thyroid value. You usually do not need to fast.',
      },
    },
    {
      title: { de: 'Befund und Plan', en: 'Results and plan' },
      text: {
        de: 'Wenn alle Werte vorliegen, besprechen wir sie mit Ihnen, in etwa 30 Minuten. Sie erhalten Ihren schriftlichen Plan: realistische Ziele nicht nur für die Waage, sondern auch für Taille, Blutdruck, Blutwerte, Kraft und Schlaf, und konkrete Schritte für Ernährung und Bewegung.',
        en: 'Once all values are available, we discuss them with you in about 30 minutes. You receive your written plan: realistic goals not only for the scales but also for waist, blood pressure, blood values, strength and sleep, and concrete steps for diet and activity.',
      },
    },
    {
      title: { de: 'Begleitung, wenn Sie möchten', en: 'Ongoing support if you wish' },
      text: {
        de: 'Auf Wunsch sehen wir uns danach etwa einmal im Monat: Was hat funktioniert, was nicht? Wir passen den Plan an, und ein Verlaufsbogen zeigt, was sich verändert. Blutwerte kontrollieren wir etwa nach drei und nach zwölf Monaten.',
        en: 'If you wish, we then meet about once a month: what worked, what did not? We adjust the plan, and a progress chart shows what is changing. We recheck blood values after about three and twelve months.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz), je Termin: Ersttermin mit Gespräch, Messung, Untersuchung von Kopf bis Fuß und Blutabnahme ${caDe(zweiTermine.gewichtErst)}, Befund und Plan mit schriftlichem Plan ${caDe(zweiTermine.befund)}. Zusammen ${caDe(zweiTermineWeg.gewicht)}. Ein persönlicher Ernährungsplan wird auf Wunsch zusätzlich nach GOÄ berechnet.`,
      `Jeder weitere Termin ist freiwillig. Ein Verlaufstermin kostet ${caDe(honorar.verlauf)}.`,
      `Dazu kommen die Laborkosten, ca. ${labor.gewichtStart}–${euroDe(labor.gewichtStartMitTsh)}, je nachdem, welche Werte wir gemeinsam auswählen. Kontrollen im Verlauf bestimmen wir nur, wenn sie für Ihren Plan etwas ändern.`,
      kostenVorab.de,
      erstattung.de,
    ],
    en: [
      `Medical fee under the GOÄ (standard rate), per appointment: first appointment with conversation, measurements, head-to-toe examination and blood sample ${caEn(zweiTermine.gewichtErst)}, results and plan with a written plan ${caEn(zweiTermine.befund)}. Together ${caEn(zweiTermineWeg.gewicht)}. A personal nutrition plan, if you would like one, is billed additionally under the GOÄ.`,
      `Every further appointment is optional. A follow-up costs ${caEn(honorar.verlauf)}.`,
      `Lab costs come on top, approx. ${euroEn(labor.gewichtStart)}–${euroEn(labor.gewichtStartMitTsh)}, depending on which tests we choose together. We only recheck values later if this changes something in your plan.`,
      kostenVorab.en,
      erstattung.en,
    ],
  },
  page: {
    meta: {
      title: {
        de: `${name.de}: ärztlich begleitet`,
        en: `${name.en}: medical support`,
      },
      description: {
        de: 'Ärztliche Beratung zu Ernährung, Gewicht und Stoffwechsel in Langenfeld bei Düsseldorf: Untersuchung, Blutwerte, Bewegung, Schlaf und ein persönlicher Plan.',
        en: 'Medical advice on nutrition, weight and metabolic health in Langenfeld near Düsseldorf: examination, blood tests, activity, sleep and a personal plan.',
      },
      eyebrow: { de: 'Prävention', en: 'Prevention' },
      lead: {
        de: 'Gewicht ist mehr als eine Zahl auf der Waage. Im Ersttermin hören wir zu, messen, untersuchen Sie und nehmen Blut ab. Im zweiten Termin besprechen wir die Ergebnisse und Ihren persönlichen Plan für Ernährung, Bewegung und Schlaf. Wenn Sie möchten, begleiten wir Sie danach mit regelmäßigen Terminen.',
        en: 'Weight is more than a number on the scales. In the first appointment we listen, take measurements, examine you and take a blood sample. In the second appointment we discuss the results and your personal plan for diet, activity and sleep. If you wish, we then support you with regular appointments.',
      },
    },
    sections: [
      {
        id: 'schon-vieles-probiert',
        heading: { de: 'Wenn Sie schon vieles probiert haben', en: 'If you have already tried a lot' },
        body: {
          de: [
            'Viele Menschen haben Diäten, Apps und Programme hinter sich – und das Gefühl, damit allein gelassen worden zu sein. Wir fangen nicht bei null an: Wir sehen uns gemeinsam an, was bisher geholfen hat, was nicht und warum. Daraus entsteht ein Plan, der zu Ihrem Alltag passt.',
            'Wenn Sie möchten, begleiten wir Sie danach mit festen Terminen und derselben ärztlichen Ansprechperson. Ein Verlaufsbogen zeigt auch Veränderungen, die keine Waage misst.',
          ],
          en: [
            'Many people have been through diets, apps and programmes – and feel they were left on their own. We do not start from scratch: together we look at what has helped so far, what has not, and why. This becomes a plan that fits your everyday life.',
            'If you wish, we then support you with fixed appointments and the same doctor each time. A progress chart also shows changes no scales can measure.',
          ],
        },
      },
      {
        id: 'was-wir-ansehen',
        heading: { de: 'Was wir uns im Ersttermin ansehen', en: 'What we look at in the first appointment' },
        body: {
          de: ['Wir nehmen uns Zeit für Ihre Geschichte und sehen uns an, was für Ihren Plan zählt:'],
          en: ['We take time for your story and look at what matters for your plan:'],
        },
        list: {
          de: [
            'Gewicht, Größe, Taillenumfang und das Verhältnis von Taille zu Körpergröße,',
            'Blutdruck, mehrfach in Ruhe gemessen, und eine Untersuchung von Kopf bis Fuß,',
            'Blutzucker-Langzeitwert (HbA1c), Blutfette, Leber- und Nierenwerte, kleines Blutbild, bei Bedarf der Schilddrüsenwert,',
            'Handkraft und Aufstehen vom Stuhl als einfache Maße für Ihre Muskelkraft,',
            'Essen, Bewegung, Schlaf, Belastung und was Sie bisher versucht haben.',
          ],
          en: [
            'weight, height, waist circumference and waist-to-height ratio,',
            'blood pressure, measured several times at rest, and a head-to-toe examination,',
            'long-term blood sugar (HbA1c), blood lipids, liver and kidney values, a basic blood count and, if needed, the thyroid value,',
            'grip strength and rising from a chair as simple measures of muscle strength,',
            'eating, activity, sleep, stress and what you have tried so far.',
          ],
        },
        links: [{ label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' }],
      },
      {
        id: 'ernaehrung',
        heading: { de: 'Ernährung mit Plan', en: 'Nutrition with a plan' },
        body: {
          de: [
            'Statt eines starren Diätplans geht es um Ziele und Beispiele aus Ihrem Alltag: genug Eiweiß, damit die Muskeln erhalten bleiben, ballaststoffreiche Kost, feste Mahlzeiten, Einkauf und Essen unterwegs. Grundlage sind die Empfehlungen der Deutschen Gesellschaft für Ernährung.',
            'Auf Wunsch erhalten Sie einen persönlichen Ernährungsplan. Dafür schreiben Sie zwischen den beiden Terminen drei Tage lang auf, was Sie essen und trinken.',
            'Wer eine ausführliche Ernährungstherapie über mehrere Sitzungen möchte, kann sie zusätzlich bei einer qualifizierten Ernährungsfachkraft Ihrer Wahl machen. Bei bestimmten Diagnosen beteiligen sich Krankenkassen an den Kosten; eine ärztliche Bescheinigung stellen wir aus, wenn eine behandlungsbedürftige Erkrankung vorliegt.',
          ],
          en: [
            'Instead of a rigid diet plan, it is about goals and examples from your everyday life: enough protein to preserve muscle, a diet rich in fibre, regular meals, shopping and eating on the go. It is based on the recommendations of the German Nutrition Society (DGE).',
            'If you wish, you receive a personal nutrition plan. For this, you note for three days between the two appointments what you eat and drink.',
            'If you would like more detailed nutrition therapy over several sessions, you can also see a qualified nutrition professional of your choice. For certain diagnoses health insurers contribute to the costs; we issue a medical certificate if there is a condition that requires treatment.',
          ],
        },
      },
      {
        id: 'bewegung',
        heading: { de: 'Bewegung und Muskeln', en: 'Activity and muscles' },
        body: {
          de: [
            'Krafttraining an zwei bis drei Tagen pro Woche erhält die Muskulatur und hilft Herz, Stoffwechsel und Knochen. Ausgehend von Ihren Kraftmessungen erhalten Sie ein Bewegungsrezept, das zu Ihrem Ausgangspunkt passt.',
          ],
          en: [
            'Strength training on two to three days a week preserves muscle and helps the heart, metabolism and bones. Based on your strength tests you receive an exercise prescription that fits your starting point.',
          ],
        },
      },
      {
        id: 'schlaf',
        heading: { de: 'Schlaf und Alltag', en: 'Sleep and everyday life' },
        body: {
          de: [
            'Schlaf, Stress und Schichtarbeit wirken auf Hunger, Energie und Bewegung. Wir fragen danach und beziehen sie in Ihren Plan ein.',
            'Lautes Schnarchen, beobachtete Atemaussetzer und starke Tagesmüdigkeit können auf eine schlafbezogene Atmungsstörung hinweisen. Dann nennen wir Ihnen den Weg zur schlafmedizinischen Abklärung.',
          ],
          en: [
            'Sleep, stress and shift work affect hunger, energy and activity. We ask about them and include them in your plan.',
            'Loud snoring, observed breathing pauses and severe daytime sleepiness can indicate a sleep-related breathing disorder. We then tell you how to get a sleep-medicine assessment.',
          ],
        },
      },
      {
        id: 'nach-leitlinie',
        heading: { de: 'Nach Leitlinie, mit Ihnen gemeinsam', en: 'Guideline-based, decided together' },
        body: {
          de: [
            'Grundlage ist die S3-Leitlinie zur Prävention und Therapie der Adipositas. Sie stellt Ernährung, Bewegung und Verhalten in den Mittelpunkt. Darauf baut Ihr Plan auf, angepasst an Ihren Ausgangspunkt und Ihren Alltag. Die Ziele legen wir gemeinsam fest.',
          ],
          en: [
            'The basis is the German S3 guideline on the prevention and treatment of obesity. It puts nutrition, physical activity and behaviour at the centre. Your plan builds on this, adapted to your starting point and your everyday life. We set the goals together.',
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
            'Infusionen und Kuren,',
            'Behandlung von Essstörungen – hier vermitteln wir den passenden Weg.',
          ],
          en: [
            'programme or monthly prices, packages and prepayment,',
            'meal-replacement diets, supplements and product sales,',
            'infusions and cures,',
            'treatment of eating disorders – here we help you find the right support.',
          ],
        },
      },
    ],
    sourceIds: ['awmfAdipositas', 'dgeEmpfehlungen', 'dgeProtein', 'whoBewegung2020', 'awmfSchlafapnoe', 'escPraevention2021'],
    lastReviewed: new Date('2026-11-20'),
    related: [
      { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
      { label: { de: 'Laborwerte-Check', en: 'Blood test check' }, path: '/praevention/laborwerte-check' },
      { label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' },
      { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    ],
    faq: [
      {
        q: { de: 'Wie viel werde ich abnehmen?', en: 'How much weight will I lose?' },
        a: {
          de: 'Das versprechen wir nicht. Jeder Körper und jeder Alltag ist anders. Wir achten nicht nur auf die Waage, sondern auch auf Taille, Blutdruck, Blutwerte, Kraft und Schlaf.',
          en: 'We do not promise that. Every body and every everyday life is different. We look not only at the scales but also at waist, blood pressure, blood values, strength and sleep.',
        },
      },
      {
        q: { de: 'Warum zwei Termine?', en: 'Why two appointments?' },
        a: {
          de: 'Im Ersttermin lernen wir Sie kennen, untersuchen Sie und nehmen Blut ab. Bis alle Werte vorliegen, dauert es einige Tage. Im zweiten Termin liegen alle Ergebnisse vor, und Ihr Plan baut auf ihnen auf.',
          en: 'In the first appointment we get to know you, examine you and take a blood sample. It takes a few days until all values are available. In the second appointment all results are ready, and your plan builds on them.',
        },
      },
      {
        q: { de: 'Muss ich mich für längere Zeit verpflichten?', en: 'Do I have to commit for a longer period?' },
        a: {
          de: 'Nein. Jeder Termin wird einzeln abgerechnet. Nach Befund und Plan entscheiden Sie, ob Sie weitere Termine möchten. Sie können jederzeit aufhören oder in Ihre Hausarztpraxis wechseln.',
          en: 'No. Each appointment is billed individually. After the results and plan appointment you decide whether you would like further appointments. You can stop at any time or return to your GP.',
        },
      },
      {
        q: { de: 'Sind auch Termine per Video möglich?', en: 'Are video appointments possible?' },
        a: {
          de: 'Der Ersttermin mit Untersuchung findet immer in der Praxis statt. Ob einzelne Verlaufsgespräche später auch per Video möglich sind, sagen wir Ihnen, sobald dieser Weg eingerichtet ist.',
          en: 'The first appointment with examination always takes place at the practice. We will let you know once individual follow-up conversations can also be held by video.',
        },
      },
    ],
  },
};
