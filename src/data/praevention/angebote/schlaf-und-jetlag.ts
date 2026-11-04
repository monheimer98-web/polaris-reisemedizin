/**
 * Schlaf, Energie & Jetlag (DE/EN). Leitliniengerecht: Insomnie-Basis mit
 * Elementen der kognitiven Verhaltenstherapie, Abklärung von Müdigkeit,
 * Jetlag-Plan. Keine Schlafmittel- oder Wirkstoffnamen, kein „Schlafmedizin",
 * „Burnout-Diagnostik" oder „nie wieder müde".
 */
import type { PreventionOffer } from '../types';
import { honorar, labor, euroDe, euroEn } from '../preise';

export const schlafUndJetlag: PreventionOffer = {
  slug: 'schlaf-und-jetlag',
  bookingType: 'pv-e4',
  group: 'begleitung',
  stage: 2,
  shortName: { de: 'Schlaf, Energie & Jetlag', en: 'Sleep, energy & jet lag' },
  teaser: {
    de: 'Wenn der Schlaf nicht kommt oder die Energie fehlt: Ursachen klären, Rhythmus finden – und vor Fernreisen ein Jetlag-Plan.',
    en: 'When sleep will not come or energy is missing: clarify causes, find a rhythm – and a jet-lag plan before long-haul trips.',
  },
  facts: {
    forWhom: {
      de: 'Menschen mit Schlafproblemen oder anhaltender Müdigkeit; Fernreisende ab etwa fünf Zeitzonen.',
      en: 'People with sleep problems or persistent tiredness; long-haul travellers crossing about five time zones or more.',
    },
    appointments: {
      de: 'Schlaf: Erstgespräch ca. 30 Min., Folgetermine ca. 15–20 Min.; Müdigkeit: 30 + 15 Min.; Jetlag-Plan ca. 15 Min.',
      en: 'Sleep: first consultation approx. 30 min, follow-ups approx. 15–20 min; tiredness: 30 + 15 min; jet-lag plan approx. 15 min.',
    },
    fee: {
      de: `Schlafgespräch ${euroDe(honorar.bilanz)}, Folgegespräch ${euroDe(honorar.gespraech)}, Jetlag-Plan ${euroDe(honorar.planTermin)} (GOÄ)`,
      en: `Sleep consultation ${euroEn(honorar.bilanz)}, follow-up ${euroEn(honorar.gespraech)}, jet-lag plan ${euroEn(honorar.planTermin)} (GOÄ)`,
    },
    lab: {
      de: `Schlaf und Jetlag keins; bei anhaltender Müdigkeit ca. ${euroDe(labor.muedigkeit)}, direkt vom Labor`,
      en: `none for sleep and jet lag; approx. ${euroEn(labor.muedigkeit)} for persistent tiredness, billed directly by the laboratory`,
    },
  },
  steps: [
    {
      title: { de: 'Fragebogen und Schlaftagebuch', en: 'Questionnaire and sleep diary' },
      text: {
        de: 'Vorab erfassen Sie Ihren Schlaf zwei Wochen lang in einem einfachen Tagebuch. Das zeigt mehr als jede einzelne Nacht.',
        en: 'Beforehand you record your sleep for two weeks in a simple diary. It shows more than any single night.',
      },
    },
    {
      title: { de: 'Erstgespräch', en: 'First consultation' },
      text: {
        de: 'Wir suchen nach Ursachen: Atemaussetzer, unruhige Beine, Stimmung, Belastung, Medikamente, Gewohnheiten. Danach erhalten Sie einen persönlichen Schlafplan.',
        en: 'We look for causes: breathing pauses, restless legs, mood, stress, medication, habits. You then receive a personal sleep plan.',
      },
    },
    {
      title: { de: 'Folgetermine', en: 'Follow-ups' },
      text: {
        de: 'Nach etwa 2, 4 und 6–8 Wochen passen wir den Plan an. Bessert sich nichts, nennen wir Ihnen den nächsten Schritt.',
        en: 'After about 2, 4 and 6–8 weeks we adjust the plan. If nothing improves, we tell you the next step.',
      },
    },
  ],
  costs: {
    de: [
      `Abrechnung je Termin nach GOÄ (Regelsatz): Gespräch bei Schlafproblemen mit Untersuchung und schriftlichem Plan ${euroDe(honorar.bilanz)}, Folgegespräch ${euroDe(honorar.gespraech)}.`,
      `Abklärung anhaltender Müdigkeit: ${euroDe(honorar.abklaerung)} mit Untersuchung und Blutentnahme, Befundgespräch ${euroDe(honorar.gespraech)}, zzgl. Labor ca. ${euroDe(labor.muedigkeit)} direkt vom Labor.`,
      `Jetlag-Plan für Ihre Fernreise: ${euroDe(honorar.planTermin)}. In der Reiseberatung ist der Jetlag-Plan Teil Ihres Reiseplans.`,
    ],
    en: [
      `Billed per appointment under the GOÄ (standard rate): consultation for sleep problems with examination and written plan ${euroEn(honorar.bilanz)}, follow-up ${euroEn(honorar.gespraech)}.`,
      `Assessment of persistent tiredness: ${euroEn(honorar.abklaerung)} with examination and blood draw, results consultation ${euroEn(honorar.gespraech)}, plus approx. ${euroEn(labor.muedigkeit)} billed directly by the laboratory.`,
      `Jet-lag plan for your long-haul trip: ${euroEn(honorar.planTermin)}. In a travel health consultation the jet-lag plan is part of your travel plan.`,
    ],
  },
  page: {
    meta: {
      title: { de: 'Schlaf, Energie & Jetlag: Ursachen klären, Rhythmus finden', en: 'Sleep, energy & jet lag: clarify causes, find your rhythm' },
      description: {
        de: 'Sprechstunde Schlaf und Jetlag in Langenfeld: Schlafprobleme und anhaltende Müdigkeit leitliniengerecht abklären, persönlicher Schlafplan, Jetlag-Plan vor Fernreisen.',
        en: 'Sleep and jet-lag consultation in Langenfeld: guideline-based assessment of sleep problems and persistent tiredness, a personal sleep plan and a jet-lag plan before long-haul trips.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Schlecht schlafen und ständig müde sein gehören zu den häufigsten Gründen, warum sich Menschen nicht gut fühlen. Wir gehen nach der Leitlinie vor: Ursachen klären, Schlaf mit bewährten Regeln neu ordnen und klar sagen, wann eine weitere Abklärung nötig ist.',
        en: 'Sleeping badly and always feeling tired are among the most common reasons why people do not feel well. We follow the guideline: clarify causes, reorganise sleep with proven rules and say clearly when further assessment is needed.',
      },
    },
    sections: [
      {
        id: 'schlaf',
        heading: { de: 'Wenn der Schlaf nicht kommt', en: 'When sleep will not come' },
        body: {
          de: [
            'Bei anhaltenden Ein- und Durchschlafproblemen empfiehlt die Leitlinie als Erstes Verfahren aus der kognitiven Verhaltenstherapie: feste Bettzeiten, das Bett nur zum Schlafen, ein Bettzeitfenster, das zu Ihrem tatsächlichen Schlaf passt, und ein ruhiger Abend. Wir erklären die Schritte und begleiten Sie über einige Wochen.',
            'Wenn eine digitale Gesundheitsanwendung oder eine Psychotherapie besser passt, zeigen wir Ihnen den Weg.',
          ],
          en: [
            'For persistent problems falling or staying asleep, the guideline recommends methods from cognitive behavioural therapy first: fixed bedtimes, using the bed only for sleep, a time-in-bed window that matches how much you actually sleep, and a calm evening. We explain the steps and support you over several weeks.',
            'If a digital health application or psychotherapy is a better fit, we show you how to access it.',
          ],
        },
      },
      {
        id: 'energie',
        heading: { de: 'Wenn die Energie fehlt', en: 'When energy is missing' },
        body: {
          de: [
            'Anhaltende Müdigkeit hat viele mögliche Ursachen. Wir fragen gezielt nach, untersuchen Sie und bestimmen wenige, sinnvolle Laborwerte, zum Beispiel Blutbild, Blutzucker, Schilddrüse und Entzündungswerte. Im Befundgespräch besprechen wir das Ergebnis und Ihren Plan zu Schlaf, Bewegung und Belastung.',
          ],
          en: [
            'Persistent tiredness has many possible causes. We ask specific questions, examine you and measure a few meaningful lab values, for example blood count, blood sugar, thyroid and inflammation markers. In the results consultation we discuss the outcome and your plan for sleep, activity and stress.',
          ],
        },
      },
      {
        id: 'jetlag',
        heading: { de: 'Jetlag-Plan für Fernreisen', en: 'Jet-lag plan for long-haul trips' },
        body: {
          de: [
            'Vor einer Fernreise über mehrere Zeitzonen erstellen wir Ihnen auf Wunsch einen Jetlag-Plan: wann Tageslicht hilft und wann Sie es besser meiden, wie Sie Schlafzeiten schon vor dem Abflug verschieben und wie Sie die ersten Tage am Ziel gestalten. Sie erhalten ihn als Tabelle Tag für Tag.',
          ],
          en: [
            'Before a long-haul trip across several time zones we can create a jet-lag plan for you: when daylight helps and when to avoid it, how to shift your sleep before departure and how to plan your first days at the destination. You receive it as a day-by-day table.',
          ],
        },
      },
      {
        id: 'verweis',
        heading: { de: 'Wohin wir verweisen', en: 'When we refer you' },
        body: {
          de: [
            'Bei Hinweisen auf nächtliche Atemaussetzer, starker Tagesschläfrigkeit – besonders bei Berufsfahrerinnen und -fahrern – oder ausgeprägter seelischer Belastung nennen wir Ihnen den Weg zur passenden Abklärung.',
          ],
          en: [
            'If there are signs of breathing pauses at night, severe daytime sleepiness – especially for professional drivers – or significant psychological strain, we show you the way to the right assessment.',
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
    sourceIds: ['awmfInsomnie', 'awmfMuedigkeit', 'awmfSchlafapnoe'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Sprechstunde Wechseljahre', en: 'Menopause consultation' }, path: '/praevention/wechseljahre' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel health consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Blutwerte besprechen', en: 'Blood results explained' }, path: '/praevention/blutwerte-besprechen' },
    ],
    faq: [
      {
        q: { de: 'Was hilft bei anhaltenden Schlafproblemen?', en: 'What helps with persistent sleep problems?' },
        a: {
          de: 'Die Leitlinie empfiehlt zuerst Verfahren aus der kognitiven Verhaltenstherapie. Was in Ihrer Situation passt, besprechen wir im Termin.',
          en: 'The guideline recommends methods from cognitive behavioural therapy first. We discuss in the appointment what suits your situation.',
        },
      },
      {
        q: { de: 'Machen Sie eine Schlaflabor-Untersuchung?', en: 'Do you carry out sleep-lab studies?' },
        a: {
          de: 'Nein. Wenn eine Messung im Schlaf nötig ist, nennen wir Ihnen eine schlafmedizinische Einrichtung.',
          en: 'No. If a sleep study is needed, we tell you which sleep-medicine centre to contact.',
        },
      },
    ],
  },
};
