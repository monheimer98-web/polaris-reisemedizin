/**
 * Leistung „Höhenmedizin / Höhenberatung" (DE/EN) — Höhenkrankheit verstehen
 * und vorbeugen, belegt über das Quellen-Register. Sachlich, ohne
 * Heilversprechen, ohne Preisangaben und ohne konkrete Medikamenten-Dosierungen
 * (HWG-konform). Maßgeblich ist die individuelle ärztliche Beratung.
 */
import type { ClinicalPage } from '../types';

export const hoehenmedizinService: ClinicalPage = {
  meta: {
    title: { de: 'Höhenmedizin & Höhenberatung', en: 'Altitude medicine & consultation' },
    description: {
      de: 'Sicher in die Höhe: Akklimatisation, Warnzeichen der Höhenkrankheit (AMS, HACE, HAPE), Verhaltensregeln und medikamentöse Vorbeugung – individuell für Trekking, Bergreisen und Expeditionen.',
      en: 'Safely to altitude: acclimatisation, warning signs of altitude illness (AMS, HACE, HAPE), rules of conduct and preventive medication – individually for trekking, mountain travel and expeditions.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Wer in große Höhen reist – etwa zum Trekking oder auf Bergreisen – sollte die Höhenkrankheit kennen. Wir beraten Sie zu Akklimatisation, Warnzeichen und, wo sinnvoll, zu einer medikamentösen Vorbeugung.',
      en: 'Anyone travelling to high altitude – for example trekking or on mountain trips – should know about altitude illness. We advise you on acclimatisation, warning signs and, where sensible, preventive medication.',
    },
  },
  sections: [
    {
      id: 'was',
      heading: { de: 'Was ist die Höhenkrankheit?', en: 'What is altitude illness?' },
      body: {
        de: [
          'Mit zunehmender Höhe sinkt der Sauerstoffgehalt der Luft. Steigt man zu schnell auf, kann der Körper sich nicht ausreichend anpassen – es entsteht die akute Höhenkrankheit (AMS) mit Kopfschmerzen, Übelkeit, Appetitlosigkeit und Schlafstörungen. Beschwerden treten typischerweise ab etwa 2.500 Metern auf.',
          'Seltener, aber gefährlich sind das Höhenhirnödem (HACE) mit Gang- und Bewusstseinsstörungen und das Höhenlungenödem (HAPE) mit Atemnot und Leistungsknick. Beide sind Notfälle und erfordern den sofortigen Abstieg.',
        ],
        en: [
          'As altitude increases, the oxygen content of the air falls. If you ascend too quickly, the body cannot adapt sufficiently – acute mountain sickness (AMS) develops, with headache, nausea, loss of appetite and sleep disturbance. Symptoms typically occur from around 2,500 metres.',
          'Rarer but dangerous are high-altitude cerebral oedema (HACE) with disturbances of gait and consciousness, and high-altitude pulmonary oedema (HAPE) with shortness of breath and a drop in performance. Both are emergencies and require immediate descent.',
        ],
      },
    },
    {
      id: 'akklimatisation',
      heading: { de: 'Akklimatisation: langsam aufsteigen', en: 'Acclimatisation: ascend slowly' },
      body: {
        de: [
          'Die wichtigste Vorbeugung ist ein langsamer Aufstieg, der dem Körper Zeit zur Anpassung gibt. Als Faustregeln gelten:',
        ],
        en: [
          'The most important prevention is a slow ascent that gives the body time to adapt. As rules of thumb:',
        ],
      },
      list: {
        de: [
          'oberhalb von etwa 2.500 m die Schlafhöhe pro Nacht nur um rund 300–500 m steigern,',
          'nach jeweils 600–1.000 m Höhengewinn einen Ruhetag einlegen,',
          'tagsüber höher steigen, aber tiefer schlafen („climb high, sleep low"),',
          'ausreichend trinken, auf Alkohol und Schlafmittel verzichten,',
          'auf den eigenen Körper hören und Warnzeichen ernst nehmen.',
        ],
        en: [
          'above about 2,500 m, increase your sleeping altitude by only around 300–500 m per night,',
          'take a rest day after every 600–1,000 m of altitude gained,',
          'climb higher during the day but sleep lower ("climb high, sleep low"),',
          'drink enough, avoid alcohol and sleeping pills,',
          'listen to your body and take warning signs seriously.',
        ],
      },
    },
    {
      id: 'warnzeichen',
      heading: { de: 'Warnzeichen erkennen', en: 'Recognising warning signs' },
      body: {
        de: [
          'Halten Kopfschmerzen trotz Pause und Flüssigkeit an oder kommen Übelkeit, Schwindel und Abgeschlagenheit hinzu, sind das Zeichen der Höhenkrankheit. Die Grundregel lautet: nicht weiter aufsteigen, bis die Beschwerden abgeklungen sind.',
        ],
        en: [
          'If headache persists despite rest and fluids, or if nausea, dizziness and exhaustion are added, these are signs of altitude illness. The basic rule is: do not ascend further until the symptoms have subsided.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Bei Verschlechterung: absteigen', en: 'If it worsens: descend' },
        text: {
          de: 'Verschlechtern sich die Beschwerden oder treten Atemnot in Ruhe, Gangunsicherheit oder Bewusstseinsstörungen auf, ist sofortiger Abstieg die wichtigste Maßnahme. Der Abstieg rettet im Zweifel Leben – warten Sie nicht ab.',
          en: 'If symptoms worsen, or if shortness of breath at rest, unsteadiness of gait or disturbance of consciousness occur, immediate descent is the most important measure. When in doubt, descent saves lives – do not wait.',
        },
      },
    },
    {
      id: 'medikamente',
      heading: { de: 'Medikamentöse Vorbeugung', en: 'Preventive medication' },
      body: {
        de: [
          'Bei unvermeidbar raschem Aufstieg – etwa bei Flugreisen direkt in große Höhe – oder bei früheren Höhenproblemen kann eine medikamentöse Vorbeugung sinnvoll sein, die die Akklimatisation unterstützt. Sie ersetzt nicht den langsamen Aufstieg, sondern ergänzt ihn.',
          'Ob ein solches Medikament für Sie infrage kommt, welches geeignet ist und worauf zu achten ist, klären wir individuell – unter Berücksichtigung Ihrer Vorerkrankungen und Ihres Reiseprofils.',
        ],
        en: [
          'In the case of unavoidably rapid ascent – for example flying directly to high altitude – or previous altitude problems, preventive medication that supports acclimatisation may be sensible. It does not replace a slow ascent but complements it.',
          'Whether such a medication is suitable for you, which one is appropriate and what to bear in mind, we clarify individually – taking your pre-existing conditions and travel profile into account.',
        ],
      },
    },
    {
      id: 'beratung',
      heading: { de: 'Unsere Höhenberatung', en: 'Our altitude consultation' },
      body: {
        de: [
          'Für Trekkingtouren, Bergreisen und Expeditionen bieten wir eine gezielte Höhenberatung an – auf Wunsch als eigenständigen Termin oder als Teil der reisemedizinischen Beratung. Wir besprechen Ihr Höhenprofil, Verhaltensregeln, die Zusammenstellung einer passenden Reiseapotheke und, falls sinnvoll, eine medikamentöse Vorbeugung.',
        ],
        en: [
          'For trekking tours, mountain travel and expeditions we offer a dedicated altitude consultation – on request as a separate appointment or as part of the travel-medicine consultation. We discuss your altitude profile, rules of conduct, the assembly of a suitable travel first-aid kit and, if sensible, preventive medication.',
        ],
      },
    },
  ],
  sourceIds: ['cdcAltitude', 'dtgReiseimpfungen', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-04'),
  related: [
    { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Kosten & GOÄ', en: 'Costs & GOÄ' }, path: '/kosten' },
  ],
};
