/**
 * Muskel-Kompass 40+ (DE/EN). Kraft und Gleichgewicht messen, Ausdauer
 * einordnen, Bewegungsrezept, Eiweiß aus Lebensmitteln, Re-Test nach 12 Wochen.
 * Keine Leistungsdiagnostik, kein „Sportmedizin", keine Präparate.
 */
import type { PreventionOffer } from '../types';
import { honorar, euroDe, euroEn } from '../preise';

export const muskelKompass: PreventionOffer = {
  slug: 'muskel-kompass',
  bookingType: 'praevention-muskel',
  group: 'checks',
  stage: 2,
  shortName: { de: 'Muskel-Kompass 40+', en: 'Muscle compass 40+' },
  teaser: {
    de: 'Kraft und Gleichgewicht gemessen, Ausdauer eingeordnet, Eiweiß geklärt – mit 12-Wochen-Plan und Re-Test.',
    en: 'Strength and balance measured, endurance assessed, protein clarified – with a 12-week plan and a re-test.',
  },
  facts: {
    forWhom: {
      de: 'Menschen etwa ab 40, die (wieder) stärker werden möchten – auch Einsteigerinnen und Einsteiger.',
      en: 'People from about 40 who want to get stronger (again) – including beginners.',
    },
    appointments: {
      de: 'Erster Termin ca. 45 Min., Re-Test ca. 20 Min. nach 12 Wochen.',
      en: 'First appointment approx. 45 min, re-test approx. 20 min after 12 weeks.',
    },
    fee: {
      de: `${euroDe(honorar.muskel)} nach GOÄ, Re-Test ${euroDe(honorar.gespraech)}`,
      en: `${euroEn(honorar.muskel)} under the GOÄ, re-test ${euroEn(honorar.gespraech)}`,
    },
    lab: {
      de: 'routinemäßig keins; nur bei Beschwerden oder besonderer Ernährung',
      en: 'none as routine; only with symptoms or a special diet',
    },
  },
  steps: [
    {
      title: { de: 'Fragebogen vor dem Training', en: 'Pre-exercise questionnaire' },
      text: {
        de: 'Ein kurzer Fragebogen klärt, ob vor mehr Bewegung etwas abgeklärt werden sollte. Bitte bringen Sie Sportkleidung und feste Schuhe mit.',
        en: 'A short questionnaire checks whether anything should be assessed before you increase activity. Please bring sportswear and sturdy shoes.',
      },
    },
    {
      title: { de: 'Messen und einordnen', en: 'Measure and assess' },
      text: {
        de: 'Handkraft, Aufstehen vom Stuhl, Gehgeschwindigkeit und Gleichgewicht; dazu Blutdruck, Herz und Lunge. Ausdauerwerte aus Ihrer Uhr ordnen wir ein.',
        en: 'Grip strength, rising from a chair, walking speed and balance; plus blood pressure, heart and lungs. We assess endurance estimates from your watch.',
      },
    },
    {
      title: { de: 'Ihr 12-Wochen-Plan', en: 'Your 12-week plan' },
      text: {
        de: 'Kraft an zwei bis drei Tagen mit Steigerung, Ausdauer nach WHO-Empfehlung, Gleichgewicht und Eiweiß aus Lebensmitteln – schriftlich, mit Re-Test-Datum.',
        en: 'Strength on two to three days with progression, endurance according to WHO recommendations, balance and protein from food – in writing, with a re-test date.',
      },
    },
    {
      title: { de: 'Re-Test', en: 'Re-test' },
      text: {
        de: 'Nach 12 Wochen messen wir dasselbe noch einmal und planen den nächsten Abschnitt.',
        en: 'After 12 weeks we repeat the same measurements and plan the next phase.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz): ${euroDe(honorar.muskel)} für Untersuchung, Messungen, Beratung und schriftlichen Plan; Re-Test ${euroDe(honorar.gespraech)}.`,
      'Ohne Belastungs-EKG und ohne Tauglichkeitsbescheinigung. Zertifizierte Bewegungskurse bezuschussen viele Krankenkassen; auf Wunsch erhalten Sie dafür eine Präventionsempfehlung.',
    ],
    en: [
      `Medical fee under the GOÄ (standard rate): ${euroEn(honorar.muskel)} for examination, measurements, advice and written plan; re-test ${euroEn(honorar.gespraech)}.`,
      'Without exercise ECG and without a fitness certificate. Many health insurers subsidise certified exercise courses; on request you receive a prevention recommendation for them.',
    ],
  },
  page: {
    meta: {
      title: { de: 'Muskel-Kompass 40+: Kraft, Ausdauer und Eiweiß mit Plan', en: 'Muscle compass 40+: strength, endurance and protein with a plan' },
      description: {
        de: 'Muskel-Kompass 40+ in Langenfeld: Handkraft, Gleichgewicht und Ausdauer einordnen, Check vor dem Training, Eiweiß nach DGE und 12-Wochen-Plan mit Re-Test. Honorar nach GOÄ.',
        en: 'Muscle compass 40+ in Langenfeld: grip strength, balance and endurance assessed, pre-exercise check, protein according to DGE and a 12-week plan with re-test. Fees under the GOÄ.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Ab etwa 40 Jahren baut der Körper ohne Training langsam Muskulatur ab. Kraft und Ausdauer helfen im Alltag, auf Reisen und für die Gesundheit von Herz, Stoffwechsel und Knochen. Im Muskel-Kompass messen wir Ihre Ausgangswerte und geben Ihnen einen Plan, der zu Ihnen passt.',
        en: 'From about 40 the body slowly loses muscle without training. Strength and endurance help in everyday life, on trips and for the health of heart, metabolism and bones. In the Muscle compass we measure your starting values and give you a plan that suits you.',
      },
    },
    sections: [
      {
        id: 'messen',
        heading: { de: 'Was wir messen', en: 'What we measure' },
        body: {
          de: [
            'Einfache, gut untersuchte Tests sagen viel über Ihre Kraft: Handkraft mit einem Messgerät, wie schnell Sie fünfmal vom Stuhl aufstehen, Ihre Gehgeschwindigkeit und Ihr Gleichgewicht. Ihre Ausdauer schätzen wir mit einem Gehtest oder den Werten Ihrer Uhr ein.',
          ],
          en: [
            'Simple, well-researched tests say a lot about your strength: grip strength with a measuring device, how quickly you can rise from a chair five times, your walking speed and your balance. We estimate your endurance with a walking test or the values from your watch.',
          ],
        },
      },
      {
        id: 'eiweiss',
        heading: { de: 'Eiweiß: wie viel ist sinnvoll?', en: 'Protein: how much makes sense?' },
        body: {
          de: [
            'Zum Eiweißbedarf kursieren sehr unterschiedliche Zahlen. Wir erklären die Empfehlung der Deutschen Gesellschaft für Ernährung, wann mehr sinnvoll ist (zum Beispiel ab 65 Jahren oder beim Abnehmen) und wie Sie es mit Lebensmitteln erreichen. Präparate ordnen wir ein, empfehlen aber keine.',
          ],
          en: [
            'Very different figures circulate on protein needs. We explain the German Nutrition Society’s recommendation, when more makes sense (for example from 65 or while losing weight) and how to reach it with food. We assess supplements but do not recommend any.',
          ],
        },
      },
      {
        id: 'nicht-dazu',
        heading: { de: 'Was wir nicht anbieten', en: 'What we do not offer' },
        body: { de: ['Bewusst nicht im Angebot sind:'], en: ['We deliberately do not offer:'] },
        list: {
          de: [
            'Leistungsdiagnostik, Belastungs-EKG und Laktatmessung,',
            'Tauglichkeitsbescheinigungen,',
            'Trainingsbetreuung und Personal Training,',
            'Präparate oder Hormone zum Muskelaufbau.',
          ],
          en: [
            'performance diagnostics, exercise ECG and lactate testing,',
            'fitness certificates,',
            'training supervision and personal training,',
            'supplements or hormones for muscle building.',
          ],
        },
      },
    ],
    sourceIds: ['whoBewegung2020', 'ewgsop2', 'dgeProtein', 'dvoOsteoporose'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Gewicht & Stoffwechsel', en: 'Weight & metabolism' }, path: '/praevention/gewicht-und-stoffwechsel' },
      { label: { de: 'Wechseljahre', en: 'Menopause' }, path: '/praevention/wechseljahre' },
      { label: { de: 'Kompass 60+', en: 'Compass 60+' }, path: '/praevention/kompass-60-plus' },
    ],
    faq: [
      {
        q: { de: 'Ich habe lange keinen Sport gemacht. Ist das Angebot trotzdem etwas für mich?', en: 'I have not exercised for a long time. Is this still for me?' },
        a: {
          de: 'Gerade dann. Der Check vor dem Training klärt, ob etwas dagegen spricht, und der Plan beginnt bei Ihrem Ausgangspunkt.',
          en: 'Especially then. The pre-exercise check clarifies whether anything speaks against it, and the plan starts at your current level.',
        },
      },
    ],
  },
};
