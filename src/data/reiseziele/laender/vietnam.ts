/**
 * Länderseite Vietnam (DE/EN). Inhalte nach STIKO/DTG (Epid Bull 27/2026 inkl.
 * Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026) und
 * Auswärtigem Amt (Stand 28.10.2026). Bewusst ohne Präparatenamen (HWG);
 * Malaria-Vorbeugung nur als „vorbeugende Tabletteneinnahme" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  entryRulesCallout, feverCallout, malariaLink, rabiesLink, jeLink, planningSection,
} from '../laenderBausteine';

/** Neue, landesspezifische Quellen – zum Einpflegen in `sources.ts`. */
export const vietnamQuellen = {
  aaVietnam: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Vietnam: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'Vietnam: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/vietnam-node/vietnamsicherheit-217274',
    retrieved: new Date('2026-10-28'),
  },
  cdcVietnam: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: {
      de: 'Vietnam – Gesundheitsinformationen für Reisende',
      en: 'Vietnam – health information for travelers',
    },
    url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/vietnam',
    retrieved: new Date('2026-10-28'),
  },
  /** Allgemeine Quelle, wird auch von der Sri-Lanka-Seite referenziert. */
  ecdcDengue2026: {
    publisher: 'European Centre for Disease Prevention and Control (ECDC)',
    title: {
      de: 'Dengue weltweit – monatliches Lage-Update',
      en: 'Dengue worldwide overview – monthly update',
    },
    url: 'https://www.ecdc.europa.eu/en/dengue-monthly',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Lage-Update September 2026, u. a. zu Vietnam und Sri Lanka.',
      en: 'Situation update September 2026, including Vietnam and Sri Lanka.',
    },
  },
} satisfies Record<string, Source>;

export const vietnam: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Vietnam', en: 'Travel vaccinations for Vietnam' },
    description: {
      de: 'Vietnam-Reise: Welche Impfungen sind sinnvoll? Hepatitis A, Japanische Enzephalitis, Tollwut und Malaria-Hinweise nach STIKO/DTG 2026 – Beratung in Langenfeld.',
      en: 'Travelling to Vietnam: which vaccinations make sense? Hepatitis A, Japanese encephalitis, rabies and malaria advice per STIKO/DTG 2026 – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Asien', en: 'Destination Asia' },
    lead: {
      de: 'Vietnam reicht von den Bergen im Norden über die Halong-Bucht und Hoi An bis ins Mekong-Delta. Für die Einreise ist keine Impfung vorgeschrieben – sinnvoll sind aber einige. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Vietnam stretches from the mountains in the north via Ha Long Bay and Hoi An to the Mekong Delta. No vaccination is required for entry – but several are advisable. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: keine Pflichtimpfung', en: 'Entry: no mandatory vaccinations' },
      body: {
        de: [
          'Für die Einreise nach Vietnam ist keine Impfung vorgeschrieben. Nach der Länderliste der WHO, auf die sich auch STIKO und DTG stützen, verlangt Vietnam auch dann keinen Gelbfieber-Nachweis, wenn Sie aus einem Gelbfieber-Gebiet einreisen.',
          'In Vietnam selbst wird Gelbfieber nicht übertragen; eine Impfung zum eigenen Schutz ist deshalb nicht nötig. Wer Vietnam mit Afrika oder Südamerika kombiniert, sollte die Vorschriften der übrigen Länder auf der Route prüfen – Thailand etwa verlangt nach einem Aufenthalt in einem Gelbfieber-Gebiet einen Nachweis.',
        ],
        en: [
          'No vaccination is required to enter Vietnam. According to the WHO country list, on which STIKO and DTG also rely, Vietnam does not require proof of yellow fever vaccination even if you arrive from a yellow fever area.',
          'Yellow fever is not transmitted in Vietnam itself, so vaccination for your own protection is not needed. If you combine Vietnam with Africa or South America, check the requirements of the other countries on your route – Thailand, for example, requires proof after a stay in a yellow fever area.',
        ],
      },
      callout: entryRulesCallout,
    },
    {
      id: 'impfungen',
      heading: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      body: {
        de: [
          'Für alle Reisenden empfehlen STIKO und DTG aktuelle Standardimpfungen und die Impfung gegen Hepatitis A. Welche weiteren Impfungen sinnvoll sind, hängt von Reisestil, Dauer und Gesundheit ab.',
        ],
        en: [
          'For all travellers, STIKO and DTG recommend up-to-date routine vaccinations and vaccination against hepatitis A. Which further vaccinations make sense depends on travel style, duration and health.',
        ],
      },
      list: {
        de: [
          'Standardimpfungen: Tetanus, Diphtherie, Keuchhusten, Polio und besonders Masern prüfen und bei Bedarf auffrischen.',
          'Hepatitis A: für alle Reisenden empfohlen.',
          'Typhus: in Vietnam verbreitet. Empfohlen bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, Tattoos oder Piercings, medizinischen Eingriffen oder neuen Sexualkontakten.',
          'Tollwut: STIKO und DTG stufen das Risiko durch Hunde in Vietnam als moderat ein; nach Angaben des Auswärtigen Amts ist die Behandlung nach einem Biss vor Ort nicht immer möglich. Vorbeugend empfohlen bei Aufenthalten über vier Wochen oder wiederholten Reisen, wenn zusätzlich die Versorgung nach einem Biss vor Ort nicht gesichert ist, einfache Reisebedingungen bestehen oder Aktivitäten mit erhöhtem Risiko für Tierkontakte geplant sind (etwa Rad- oder Rollerfahren, Joggen); bei Kindern großzügig.',
          'Japanische Enzephalitis: landesweit, Übertragung ganzjährig möglich; Hauptsaison Mai bis Oktober, besonders im Norden. Empfohlen vor allem bei Aufenthalten über vier Wochen, wiederholten Reisen, Ausbrüchen und absehbaren Aufenthalten nahe Reisfeldern oder Schweinehaltung – auch außerhalb ländlicher Gebiete.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen – gegen Dengue etwa nach einer früheren, im Labor nachgewiesenen Dengue-Infektion, gegen Chikungunya bei aktuellen Ausbrüchen oder bei längeren Aufenthalten mit erhöhtem Risiko für schwere Verläufe, etwa ab 60 Jahren. Das klären wir in der Beratung.',
        ],
        en: [
          'Routine vaccinations: check tetanus, diphtheria, whooping cough, polio and especially measles, and boost if needed.',
          'Hepatitis A: recommended for all travellers.',
          'Typhoid: common in Vietnam. Recommended for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: STIKO and DTG rate the risk from dogs in Vietnam as moderate; according to the German Federal Foreign Office, treatment after a bite is not always possible locally. Pre-exposure vaccination is recommended for stays of more than four weeks or repeated trips if, in addition, care after a bite is not assured locally, travel conditions are basic or activities with a higher risk of animal contact are planned (such as cycling, riding a scooter or jogging); generously for children.',
          'Japanese encephalitis: nationwide, transmission possible all year round; main season May to October, especially in the north. Recommended mainly for stays of more than four weeks, repeated trips, outbreaks and foreseeable stays near rice fields or pig farming – including outside rural areas.',
          'Dengue and chikungunya: vaccination only in specific situations – against dengue, for example, after a previous laboratory-confirmed dengue infection; against chikungunya during current outbreaks or for longer stays with a higher risk of severe illness, for example from the age of 60. We clarify this in the consultation.',
        ],
      },
      links: [jeLink, rabiesLink, { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: [
          'Nach den DTG-Empfehlungen 2026 ist das Malariarisiko in ganz Vietnam gering. Die DTG empfiehlt konsequenten Mückenschutz, aber keine vorbeugende Tabletteneinnahme.',
        ],
        en: [
          'According to the DTG recommendations 2026, the malaria risk is low throughout Vietnam. DTG recommends consistent mosquito protection, but no preventive tablets.',
        ],
      },
      list: {
        de: [
          'Malariafrei: die Zentren großer Städte wie Hanoi und Ho-Chi-Minh-Stadt.',
          'Geringes Risiko: das übrige Land einschließlich der Inseln wie Phu Quoc – auch bei Rundreisen, Trekking- und Motorradtouren im Bergland. Mückenschutz, besonders in der Dämmerung und nachts.',
        ],
        en: [
          'Malaria-free: the centres of large cities such as Hanoi and Ho Chi Minh City.',
          'Low risk: the rest of the country including islands such as Phu Quoc – also on round trips, trekking and motorbike tours in the highlands. Mosquito protection, especially at dusk and at night.',
        ],
      },
      callout: feverCallout,
      links: [malariaLink],
    },
    {
      id: 'risiken',
      heading: { de: 'Weitere Gesundheitsrisiken', en: 'Other health risks' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Dengue ganzjährig, vor allem in der Regenzeit. 2026 wurden bis Anfang September rund 116.000 Fälle gemeldet – gut 40 Prozent mehr als im Vorjahreszeitraum, die meisten im Süden. Mückenschutz auch tagsüber.',
          'Chikungunya und Zika werden ebenfalls von tagaktiven Mücken übertragen. Zika kann in der Schwangerschaft das Kind schädigen; Schwangere und Paare mit Kinderwunsch sollten sich vor der Reise ärztlich beraten lassen.',
          'Tollwut: Kontakt zu Hunden, Katzen und Affen meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Reisedurchfall, Hepatitis A und Typhus, gehäuft während und nach der Regenzeit: nur Wasser aus sicheren Quellen trinken – auch zum Zähneputzen – und auf Lebensmittelhygiene achten.',
          'Methanolvergiftungen durch selbstgebrannten oder gepanschten Alkohol, etwa in Homestays oder als kostenlose „Welcome Shots“ in Bars – nur original verschlossene Getränke trinken.',
          'Vogelgrippe: Geflügelmärkte und Kontakt zu Geflügel meiden.',
          'Luftverschmutzung in Hanoi und anderen großen Städten, vor allem in den Wintermonaten.',
        ],
        en: [
          'Dengue all year round, especially in the rainy season. By early September 2026 around 116,000 cases had been reported – just over 40 per cent more than in the same period of the previous year, most of them in the south. Mosquito protection during the day as well.',
          'Chikungunya and Zika are also transmitted by day-biting mosquitoes. Zika can harm the unborn child during pregnancy; pregnant women and couples planning a pregnancy should seek medical advice before the trip.',
          'Rabies: avoid contact with dogs, cats and monkeys. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          "Travellers' diarrhoea, hepatitis A and typhoid, more frequent during and after the rainy season: drink only water from safe sources – also for brushing your teeth – and pay attention to food hygiene.",
          'Methanol poisoning from home-distilled or adulterated alcohol, for example in homestays or as free "welcome shots" in bars – drink only factory-sealed drinks.',
          'Bird flu: avoid poultry markets and contact with poultry.',
          'Air pollution in Hanoi and other large cities, especially in the winter months.',
        ],
      },
      links: [{ label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' }],
    },
    {
      id: 'reisetipps',
      heading: { de: 'Tipps für unterwegs', en: 'Tips for your trip' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Straßenverkehr: Das Unfallrisiko ist um ein Vielfaches höher als in Deutschland; mehrfach gab es schwere Motorradunfälle von Reisenden, vor allem in der Provinz Ha Giang. Helm und Schutzkleidung tragen, nicht nach Einbruch der Dunkelheit fahren; es gilt 0,0 Promille.',
          'Führerschein: Für Motorräder und Roller über 50 cm³ reicht die Klasse B nicht – auch nicht mit Schlüsselzahl 196. Zusätzlich zum deutschen ist ein internationaler Führerschein erforderlich.',
          'Medizinische Versorgung: Besser ausgestattete Kliniken gibt es vor allem in Hanoi und Ho-Chi-Minh-Stadt; auf dem Land ist die Versorgung eingeschränkt, Rettungsflüge innerhalb des Landes gibt es nicht. Eine Auslandsreisekrankenversicherung mit Rücktransport ist wichtig.',
          'Taifune und Starkregen: je nach Region zwischen Juni und Dezember, mit Überschwemmungen und Erdrutschen im Bergland – Wetterwarnungen beachten.',
          'Reiseapotheke mitnehmen und unterwegs vor Hitze schützen.',
        ],
        en: [
          'Road traffic: the accident risk is many times higher than in Germany; there have been several serious motorbike accidents involving travellers, especially in Ha Giang province. Wear a helmet and protective clothing and do not ride after dark; the alcohol limit is zero.',
          'Driving licence: a German car licence (category B) is not sufficient for motorbikes and scooters over 50 cc – not even with code 196. An international driving permit is required in addition to your German licence.',
          'Medical care: better-equipped clinics are found mainly in Hanoi and Ho Chi Minh City; in rural areas care is limited, and there are no domestic air ambulance services. Travel health insurance that covers repatriation is important.',
          'Typhoons and heavy rain: between June and December depending on the region, with flooding and landslides in the mountains – follow weather warnings.',
          'Take a travel health kit and protect it from heat on the way.',
        ],
      },
      links: [
        { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
        { label: { de: 'Reiseapotheke – Checkliste', en: 'Travel first-aid kit – checklist' }, path: '/reiseapotheke' },
      ],
    },
    planningSection({
      de: 'Die Impfungen gegen Japanische Enzephalitis und Tollwut brauchen jeweils mindestens zwei Termine – planen Sie dafür etwas Vorlauf ein.',
      en: 'The vaccinations against Japanese encephalitis and rabies each need at least two appointments – allow some lead time.',
    }),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Vietnam Malaria-Tabletten?', en: 'Do I need malaria tablets for Vietnam?' },
      a: {
        de: 'Nach den DTG-Empfehlungen 2026 nicht. Das Malariarisiko ist im ganzen Land gering, die Zentren großer Städte gelten als malariafrei. Empfohlen wird konsequenter Mückenschutz.',
        en: 'Not according to the DTG recommendations 2026. The malaria risk is low throughout the country, and the centres of large cities are considered malaria-free. Consistent mosquito protection is recommended.',
      },
    },
    {
      q: { de: 'Ist für Vietnam eine Gelbfieberimpfung vorgeschrieben?', en: 'Is yellow fever vaccination required for Vietnam?' },
      a: {
        de: 'Nein. Nach der WHO-Länderliste verlangt Vietnam keinen Gelbfieber-Nachweis, auch nicht bei Einreise aus einem Gelbfieber-Gebiet. Bei Kombinationsreisen können andere Länder auf der Route einen Nachweis verlangen. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'No. According to the WHO country list, Vietnam does not require proof of yellow fever vaccination, not even when arriving from a yellow fever area. On combined trips, other countries on the route may require proof. The entry requirements of the destination country apply.',
      },
    },
    {
      q: { de: 'Welche Impfungen sind für eine Motorradtour durch Nordvietnam sinnvoll?', en: 'Which vaccinations make sense for a motorbike tour of northern Vietnam?' },
      a: {
        de: 'Grundlage sind Hepatitis A und aktuelle Standardimpfungen. Bei Touren abseits der Städte prüfen wir Tollwut, Typhus und – je nach Reisezeit und Nähe zu Reisfeldern – Japanische Enzephalitis. Mindestens so wichtig sind Helm, vorsichtiges Fahren und eine Versicherung mit Rücktransport.',
        en: 'The basis is hepatitis A and up-to-date routine vaccinations. For tours away from the cities we check rabies, typhoid and – depending on the season and proximity to rice fields – Japanese encephalitis. A helmet, careful riding and insurance that covers repatriation are at least as important.',
      },
    },
  ],
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaVietnam', 'cdcVietnam', 'ecdcDengue2026', 'whoYellowFeverCountries',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
    { label: { de: 'Thailand', en: 'Thailand' }, path: '/reiseziele/asien/thailand' },
  ],
};
