/**
 * Reiseapotheke — praktische Checkliste, was auf Reisen ins Gepäck gehört
 * (DE/EN), belegt über das Quellen-Register. Sachlich und ohne Heilversprechen
 * (HWG-konform): bewusst ohne Handelsnamen von Arzneimitteln, mit klarem
 * Hinweis, dass verschreibungspflichtige Mittel und die Malaria-Vorsorge
 * individuell in der Beratung zusammengestellt werden. Strukturgleich zu den
 * übrigen Reisetipp-/Fachseiten (ClinicalPage), damit Auto-Inhaltsverzeichnis,
 * Quellenbox und Disclaimer automatisch greifen.
 */
import type { ClinicalPage } from './types';

export const travelKitPage: ClinicalPage = {
  meta: {
    title: { de: 'Reiseapotheke', en: 'Travel first-aid kit' },
    description: {
      de: 'Checkliste Reiseapotheke: Grundausstattung, Magen-Darm, Mücken- und Sonnenschutz, Malaria und wichtige Dokumente – kompakt und mit Quellen belegt.',
      en: 'Travel first-aid kit checklist: basics, gastrointestinal items, insect and sun protection, malaria and key documents – concise and fully referenced.',
    },
    eyebrow: { de: 'Reisevorbereitung', en: 'Trip preparation' },
    lead: {
      de: 'Eine gut sortierte Reiseapotheke gehört zu jeder Reise – besonders in Regionen mit eingeschränkter medizinischer Versorgung. Diese Checkliste fasst zusammen, was sich für die meisten Reisen bewährt hat. Sie ist bewusst allgemein gehalten: Welche verschreibungspflichtigen Mittel und welche Malaria-Vorsorge für Sie sinnvoll sind, stimmen wir individuell in der reisemedizinischen Beratung ab.',
      en: 'A well-stocked travel first-aid kit belongs on every trip – especially in regions with limited medical care. This checklist summarises what has proven useful for most journeys. It is deliberately general: which prescription items and which malaria prevention make sense for you is something we tailor individually in the travel-medicine consultation.',
    },
  },
  sections: [
    {
      id: 'grundausstattung',
      heading: { de: 'Grundausstattung', en: 'Basic kit' },
      body: {
        de: [
          'Die Basis jeder Reiseapotheke deckt kleine Verletzungen, Schmerzen und Fieber ab. Setzen Sie auf Bewährtes und nehmen Sie von allem lieber etwas mehr mit, als Sie zu brauchen glauben – Nachschub ist unterwegs nicht immer verfügbar oder von verlässlicher Qualität.',
        ],
        en: [
          'The basis of every travel kit covers minor injuries, pain and fever. Rely on tried-and-tested items and pack a little more of everything than you think you will need – resupply on the road is not always available or of reliable quality.',
        ],
      },
      list: {
        de: [
          'Pflaster, sterile Wundauflagen, Mullbinden und Heftpflaster',
          'Wund- und Hautdesinfektionsmittel',
          'Pinzette, kleine Schere und Einmalhandschuhe',
          'Fieberthermometer (digital, bruchsicher)',
          'Ein Schmerz- und Fiebermittel sowie bei Bedarf ein krampflösendes Mittel',
          'Persönliche Dauermedikamente in ausreichender Menge für die gesamte Reise plus Reserve',
        ],
        en: [
          'Plasters, sterile wound dressings, gauze bandages and adhesive tape',
          'Wound and skin disinfectant',
          'Tweezers, small scissors and disposable gloves',
          'Clinical thermometer (digital, shatterproof)',
          'A painkiller and fever reducer, plus an antispasmodic if needed',
          'Your regular long-term medication in sufficient quantity for the whole trip plus a reserve',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Persönliche Medikamente zuerst', en: 'Personal medication first' },
        text: {
          de: 'Denken Sie zuerst an Ihre Dauermedikamente: ausreichend Vorrat, in der Originalverpackung und im Handgepäck. Eine Liste der Wirkstoffe (nicht nur der Handelsnamen) hilft bei Kontrollen und im Notfall im Ausland.',
          en: 'Think of your long-term medication first: a sufficient supply, in its original packaging and in your hand luggage. A list of the active ingredients (not just the brand names) helps at checks and in an emergency abroad.',
        },
      },
      links: [
        { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      ],
    },
    {
      id: 'magen-darm',
      heading: { de: 'Magen-Darm', en: 'Stomach and bowel' },
      body: {
        de: [
          'Magen-Darm-Beschwerden zählen zu den häufigsten Reisekrankheiten. Für leichte Verläufe gehört das Wichtigste in jede Reiseapotheke – im Vordergrund steht dann, ausreichend zu trinken und den Flüssigkeits- und Salzverlust auszugleichen.',
        ],
        en: [
          'Gastrointestinal complaints are among the most common travel ailments. For mild cases the essentials belong in every travel kit – the priority is then to drink enough and to replace the loss of fluid and salts.',
        ],
      },
      list: {
        de: [
          'Elektrolyt-/Rehydratationslösung (orale Rehydratationssalze) zum Ausgleich von Flüssigkeit und Salzen',
          'Ein Mittel gegen Durchfall sowie gegen Übelkeit',
          'Etwas gegen Sodbrennen oder Verstopfung, falls Sie dazu neigen',
          'Händedesinfektionsmittel für unterwegs',
        ],
        en: [
          'Electrolyte/rehydration solution (oral rehydration salts) to replace fluid and salts',
          'Something for diarrhoea as well as for nausea',
          'Something for heartburn or constipation if you are prone to it',
          'Hand sanitiser for on the go',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Wann ärztlich abklären?', en: 'When to seek medical advice' },
        text: {
          de: 'Bei hohem Fieber, blutigem Durchfall, anhaltendem Erbrechen oder Anzeichen von Austrocknung – besonders bei Kindern, älteren oder vorerkrankten Menschen – ist ärztliche Hilfe gefragt.',
          en: 'In case of high fever, bloody diarrhoea, persistent vomiting or signs of dehydration – especially in children, older people or those with pre-existing conditions – medical help is needed.',
        },
      },
      links: [{ label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' }],
    },
    {
      id: 'mueckenschutz-sonne',
      heading: { de: 'Mücken- und Sonnenschutz', en: 'Insect and sun protection' },
      body: {
        de: [
          'Der Schutz vor Mückenstichen ist echte Krankheitsvorbeugung – er beugt zugleich mehreren Erkrankungen vor, gegen die es teils keine Impfung gibt. In sonnenreichen Regionen kommt konsequenter UV-Schutz hinzu.',
        ],
        en: [
          'Protection against mosquito bites is genuine disease prevention – it guards against several illnesses at once, some of which cannot be vaccinated against. In sunny regions, consistent UV protection is added to this.',
        ],
      },
      list: {
        de: [
          'Mückenschutzmittel (Repellent) mit bewährtem Wirkstoff wie DEET oder Icaridin',
          'Moskitonetz (möglichst imprägniert) für Regionen mit nachtaktiven Mücken',
          'Sonnencreme mit hohem Lichtschutzfaktor und etwas für die Hautpflege nach der Sonne',
          'Sonnenbrille und Kopfbedeckung',
        ],
        en: [
          'Insect repellent with a proven active ingredient such as DEET or icaridin',
          'A mosquito net (impregnated if possible) for regions with night-active mosquitoes',
          'Sunscreen with a high sun protection factor and something for after-sun skin care',
          'Sunglasses and a head covering',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Reihenfolge beachten', en: 'Mind the order' },
        text: {
          de: 'Werden Sonnencreme und Mückenschutz zusammen verwendet, kommt zuerst die Sonnencreme und danach das Repellent auf die Haut.',
          en: 'If sunscreen and insect repellent are used together, apply the sunscreen first and the repellent afterwards.',
        },
      },
      links: [
        { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
        { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
      ],
    },
    {
      id: 'malaria-besondere',
      heading: { de: 'Malaria und besondere Reisen', en: 'Malaria and special trips' },
      body: {
        de: [
          'Für Reisen in Malariagebiete kann eine medikamentöse Vorbeugung oder ein Notfallmedikament für den Ernstfall („Standby") sinnvoll sein. Beides ist verschreibungspflichtig und richtet sich nach Reiseziel, Reisezeit und Ihrem Gesundheitszustand – wir besprechen das individuell in der Beratung.',
          'Auch für große Höhen oder einen besonderen Reisestil (etwa Trekking oder Langzeitreisen) lässt sich die Reiseapotheke gezielt ergänzen.',
        ],
        en: [
          'For trips to malaria areas, preventive medication or an emergency standby treatment may make sense. Both are prescription-only and depend on your destination, travel season and state of health – we discuss this individually in the consultation.',
          'For high altitudes or a particular travel style (such as trekking or long-term trips), the travel kit can also be supplemented in a targeted way.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Verschreibungspflichtiges nur nach Beratung', en: 'Prescription items only after consultation' },
        text: {
          de: 'Malaria-Vorbeugung, Notfallmedikamente und weitere verschreibungspflichtige Mittel stellen wir individuell und nach ärztlicher Rücksprache zusammen – nicht pauschal „auf Vorrat".',
          en: 'Malaria prevention, emergency medication and other prescription-only items are put together individually and after medical consultation – not as a blanket "just in case" supply.',
        },
      },
      links: [
        { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
        { label: { de: 'Höhenmedizin', en: 'Altitude medicine' }, path: '/leistungen/hoehenmedizin' },
        { label: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' }, path: '/reiseziele' },
      ],
    },
    {
      id: 'dokumente',
      heading: { de: 'Dokumente und Organisation', en: 'Documents and organisation' },
      body: {
        de: [
          'Zur Reiseapotheke gehören auch die passenden Unterlagen – und die richtige Aufbewahrung. Bewahren Sie wichtige Medikamente im Handgepäck auf, damit sie verfügbar bleiben und keinen extremen Temperaturen ausgesetzt sind.',
        ],
        en: [
          'A travel kit also includes the right paperwork – and the right way to store it. Keep important medication in your hand luggage so that it stays available and is not exposed to extreme temperatures.',
        ],
      },
      list: {
        de: [
          'Impfpass und – falls vorhanden – internationaler Impfnachweis (ICVP)',
          'Liste Ihrer Medikamente mit den Wirkstoffnamen (für Zoll und Notfall)',
          'Versichertenkarte und Nachweis der Auslandskrankenversicherung mit Rücktransport',
          'Kopien wichtiger Dokumente, getrennt vom Original aufbewahrt',
          'Medikamente in der Originalverpackung, im Handgepäck und in ausreichender Menge',
        ],
        en: [
          'Vaccination record and – if you have one – the international certificate of vaccination (ICVP)',
          'A list of your medication with the active-ingredient names (for customs and emergencies)',
          'Health insurance card and proof of international health insurance covering repatriation',
          'Copies of important documents, kept separately from the originals',
          'Medication in its original packaging, in your hand luggage and in sufficient quantity',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Manche Medikamente sind im Ausland eingeschränkt', en: 'Some medicines are restricted abroad' },
        text: {
          de: 'Einzelne Wirkstoffe – auch frei verkäufliche – unterliegen in manchen Ländern Beschränkungen oder Einfuhrverboten. Prüfen Sie vor der Reise die Hinweise des Auswärtigen Amts und führen Sie bei Bedarf eine ärztliche Bescheinigung mit.',
          en: 'Some active ingredients – including over-the-counter ones – are subject to restrictions or import bans in certain countries. Check the German Federal Foreign Office information before travelling and carry a medical certificate if needed.',
        },
      },
      links: [
        { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
        { label: { de: 'Ablauf der Beratung', en: 'How the consultation works' }, path: '/ablauf' },
      ],
    },
  ],
  sourceIds: ['dtgReiseimpfungen', 'whoTravelHealth', 'auswaertigesAmt', 'rkiMalaria'],
  lastReviewed: new Date('2026-06-13'),
  related: [
    { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
    { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
    { label: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' }, path: '/reiseziele' },
  ],
};
