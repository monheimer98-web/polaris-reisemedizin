/**
 * Länderseite Mexiko (DE/EN). Inhalte nach STIKO/DTG (Epid Bull 27/2026 inkl.
 * Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026), WHO-Länderliste
 * (ITH 2022) und Auswärtigem Amt (Stand 28.10.2026); Masern-Lage nach PAHO.
 * Bewusst ohne Präparatenamen (HWG); Malaria-Vorbeugung nur als „vorbeugende
 * Tabletteneinnahme" bzw. „Notfallmedikament" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  entryRulesCallout, feverCallout, malariaLink, rabiesLink, typhoidLink, altitudeLink, planningSection,
} from '../laenderBausteine';

/** Neue Quellen – zum Einpflegen in `sources.ts`. `pahoMasern2026` wird auch von der Peru-Seite referenziert. */
export const mexikoQuellen = {
  aaMexiko: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Mexiko: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'Mexico: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/mexiko-node/mexikosicherheit-213648',
    retrieved: new Date('2026-10-28'),
  },
  pahoMasern2026: {
    publisher: 'Pan American Health Organization (PAHO/WHO)',
    title: {
      de: 'Masern in der Region Amerika – Lagebericht Nr. 14 (22.10.2026)',
      en: 'Measles in the Region of the Americas – Regional Situation Report No. 14 (22 October 2026)',
    },
    url: 'https://www.paho.org/sites/default/files/2026/10/paho-measles-sitrep14.pdf',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Bestätigte Fälle 2026 bis Kalenderwoche 41, u. a. Mexiko und Peru.',
      en: 'Confirmed cases in 2026 up to epidemiological week 41, including Mexico and Peru.',
    },
  },
} satisfies Record<string, Source>;

export const mexiko: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Mexiko', en: 'Travel vaccinations for Mexico' },
    description: {
      de: 'Mexiko-Reise: Masern-Schutz, Hepatitis A, Dengue und Malaria-Hinweise nach STIKO/DTG 2026 – keine Gelbfieberimpfung nötig. Reisemedizinische Beratung in Langenfeld.',
      en: 'Travelling to Mexico: measles protection, hepatitis A, dengue and malaria advice per STIKO/DTG 2026 – no yellow fever vaccination needed. Travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Lateinamerika', en: 'Destination Latin America' },
    lead: {
      de: 'Ob Cancún und Tulum, Mexiko-Stadt, Oaxaca oder Chiapas: Für Mexiko ist keine Impfung vorgeschrieben. Wichtig sind ein vollständiger Masernschutz, Hepatitis A und guter Mückenschutz. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Whether Cancún and Tulum, Mexico City, Oaxaca or Chiapas: no vaccination is required for Mexico. Complete measles protection, hepatitis A and good mosquito protection are important. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: kein Gelbfieber-Nachweis', en: 'Entry: no yellow fever certificate' },
      body: {
        de: [
          'Mexiko verlangt keine Gelbfieberimpfung – weder bei Einreise aus Deutschland noch bei Einreise aus anderen Ländern. In Mexiko selbst wird Gelbfieber nicht übertragen; eine Impfung zum eigenen Schutz ist deshalb nicht nötig.',
          'Wer Mexiko mit einem Gelbfieber-Land wie Brasilien, Peru oder Kolumbien kombiniert, sollte die Einreiseregeln der weiteren Reiseziele prüfen: Einige Länder in Mittelamerika und der Karibik, etwa Guatemala, Costa Rica, Panama oder Kuba, verlangen bei Einreise aus einem Gelbfieber-Gebiet einen Nachweis.',
        ],
        en: [
          'Mexico does not require yellow fever vaccination – neither when arriving from Germany nor from other countries. Yellow fever is not transmitted in Mexico itself, so vaccination for your own protection is not needed.',
          'If you combine Mexico with a yellow fever country such as Brazil, Peru or Colombia, check the entry rules of your other destinations: some countries in Central America and the Caribbean, such as Guatemala, Costa Rica, Panama or Cuba, require proof when arriving from a yellow fever area.',
        ],
      },
      callout: entryRulesCallout,
    },
    {
      id: 'impfungen',
      heading: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      body: {
        de: ['Für alle Reisenden empfehlen STIKO und DTG aktuelle Standardimpfungen und die Impfung gegen Hepatitis A. Welche weiteren Impfungen sinnvoll sind, hängt von Reisestil, Dauer und Gesundheit ab.'],
        en: ['For all travellers, STIKO and DTG recommend up-to-date routine vaccinations and vaccination against hepatitis A. Which further vaccinations make sense depends on travel style, duration and health.'],
      },
      list: {
        de: [
          'Masern: Mexiko hat seit 2025 einen großen Masern-Ausbruch. 2026 wurden bis Mitte Oktober über 13.600 Fälle bestätigt, vor allem in Jalisco, Mexiko-Stadt und Chiapas (PAHO). Prüfen Sie Ihren Impfschutz und holen Sie fehlende Impfungen nach – auch als Erwachsene. Bei Säuglingen kann die erste Masern-Impfung vor einer solchen Reise schon ab neun Monaten erfolgen.',
          'Weitere Standardimpfungen wie Tetanus, Diphtherie, Keuchhusten und Polio prüfen und bei Bedarf auffrischen.',
          'Hepatitis A: für alle Reisenden.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, Tattoos oder Piercings, medizinischen Eingriffen oder neuen Sexualkontakten.',
          'Tollwut: Hunde gelten in Mexiko als weitgehend tollwutfrei; STIKO und DTG empfehlen deshalb keine routinemäßige Impfung. Tollwut kommt aber bei Fledermäusen und anderen Wildtieren vor. Bei absehbarem Umgang mit Wildtieren oder Fledermäusen, etwa bei Höhlenforschung oder Arbeit mit Tieren, ist die vorbeugende Impfung sinnvoll.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen, etwa nach einer früheren, im Labor nachgewiesenen Dengue-Infektion oder bei erhöhtem Risiko für einen schweren Chikungunya-Verlauf. Das klären wir in der Beratung.',
        ],
        en: [
          'Measles: Mexico has had a large measles outbreak since 2025. In 2026, more than 13,600 cases were confirmed by mid-October, mainly in Jalisco, Mexico City and Chiapas (PAHO). Check your protection and catch up on missing doses – adults too. Before such a trip, infants can receive their first measles vaccination from nine months of age.',
          'Check other routine vaccinations such as tetanus, diphtheria, whooping cough and polio, and boost if needed.',
          'Hepatitis A: for all travellers.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: dogs in Mexico are considered largely free of rabies, so STIKO and DTG do not recommend routine vaccination. Rabies does, however, occur in bats and other wild animals. If you expect to handle wild animals or bats, for example when caving or working with animals, pre-exposure vaccination makes sense.',
          'Dengue and chikungunya: vaccination only in specific situations, for example after a previous laboratory-confirmed dengue infection or with an increased risk of severe chikungunya. We clarify this in the consultation.',
        ],
      },
      links: [{ label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' }, typhoidLink, rabiesLink],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['In den typischen Urlaubsregionen gibt es keine Malaria. Wo sie vorkommt, handelt es sich ausschließlich um Malaria tertiana, nicht um die gefährlichere Malaria tropica. Die DTG empfiehlt für Mexiko keine vorbeugende Tabletteneinnahme.'],
        en: ['There is no malaria in the typical holiday regions. Where it does occur, it is exclusively vivax malaria, not the more dangerous falciparum malaria. DTG does not recommend preventive tablets for Mexico.'],
      },
      list: {
        de: [
          'Malariafrei: der größte Teil des Landes, darunter die Bundesstaaten Quintana Roo und Yucatán mit Cancún, Playa del Carmen, Tulum und Mérida, Mexiko-Stadt, die Stadt Oaxaca, Puerto Vallarta und Baja California.',
          'Geringes Risiko: der Bundesstaat Chiapas (etwa San Cristóbal de las Casas und Palenque), einige Gebiete in Campeche, Chihuahua, Sinaloa, Tabasco und Veracruz sowie die Region um San Pedro Tapanatepec und Juchitán de Zaragoza in Oaxaca – konsequenter Mückenschutz.',
        ],
        en: [
          'Malaria-free: most of the country, including the states of Quintana Roo and Yucatán with Cancún, Playa del Carmen, Tulum and Mérida, Mexico City, the city of Oaxaca, Puerto Vallarta and Baja California.',
          'Low risk: the state of Chiapas (for example San Cristóbal de las Casas and Palenque), some areas of Campeche, Chihuahua, Sinaloa, Tabasco and Veracruz, and the area around San Pedro Tapanatepec and Juchitán de Zaragoza in Oaxaca – consistent mosquito protection.',
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
          'Dengue in vielen Landesteilen, zunehmend auch bei Reisenden; dazu Chikungunya und Zika. Alle drei werden von tagaktiven Mücken übertragen – Mückenschutz vor allem tagsüber.',
          'Zika kann in der Schwangerschaft zu Fehlbildungen beim Kind führen und auch sexuell übertragen werden. Schwangere und Paare mit Kinderwunsch sollten sich vor der Reise ärztlich beraten lassen.',
          'Reisedurchfall: kein Leitungswasser trinken, auch nicht zum Zähneputzen, und auf Lebensmittelhygiene achten. Eine Cholera-Impfung ist für Reisende nur in seltenen Ausnahmefällen nötig.',
          'Leishmaniose der Haut in vielen Landesteilen; Leptospirose nach Kontakt mit Süßwasser; selten Chagas-Krankheit in einfachen ländlichen Unterkünften – dort unter einem Bettnetz schlafen.',
          'Höhe und Luft: Mexiko-Stadt liegt auf rund 2.240 Metern, die Luftverschmutzung ist hoch. Bei Besteigungen der Vulkane über 4.000 Meter kann Höhenkrankheit auftreten; der Popocatépetl ist wegen erhöhter Aktivität gesperrt.',
          'Tollwut: Kontakt zu Tieren meiden, auch zu Fledermäusen. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
        ],
        en: [
          'Dengue in many parts of the country, increasingly also among travellers; also chikungunya and Zika. All three are transmitted by day-biting mosquitoes – mosquito protection especially during the day.',
          'Zika can cause birth defects during pregnancy and can also be transmitted sexually. Pregnant women and couples planning a pregnancy should seek medical advice before the trip.',
          "Travellers' diarrhoea: do not drink tap water, not even for brushing your teeth, and pay attention to food hygiene. Cholera vaccination is only needed for travellers in rare exceptional cases.",
          'Cutaneous leishmaniasis in many parts of the country; leptospirosis after contact with fresh water; rarely Chagas disease in basic rural accommodation – sleep under a bed net there.',
          'Altitude and air: Mexico City lies at around 2,240 metres and air pollution is high. Altitude sickness can occur when climbing volcanoes above 4,000 metres; Popocatépetl is closed due to increased activity.',
          'Rabies: avoid contact with animals, including bats. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
        ],
      },
      links: [{ label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' }, altitudeLink],
    },
    {
      id: 'reisetipps',
      heading: { de: 'Tipps für unterwegs', en: 'Tips for your trip' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Mückenschutz: Mittel gegen Mücken auf freie Haut auftragen und lange, helle Kleidung tragen – besonders tagsüber und in der Regenzeit.',
          'Versicherung: Private Kliniken und Ärzte verlangen in der Regel Vorkasse. Eine Auslandskrankenversicherung mit Rücktransport und ein ausreichender Kreditkartenrahmen sind wichtig.',
          'Hurrikan-Saison von Juni bis November: An den Küsten ist dann mit Tropenstürmen, Starkregen und Überschwemmungen zu rechnen.',
          'Reiseapotheke, Sonnenschutz und regelmäßig benötigte Medikamente mitnehmen.',
        ],
        en: [
          'Mosquito protection: apply insect repellent to exposed skin and wear long, light-coloured clothing – especially during the day and in the rainy season.',
          'Insurance: private clinics and doctors usually require advance payment. Travel health insurance including repatriation and a sufficient credit card limit are important.',
          'Hurricane season from June to November: expect tropical storms, heavy rain and flooding on the coasts.',
          'Take a travel first-aid kit, sun protection and any regular medication.',
        ],
      },
      links: [
        { label: { de: 'Reiseapotheke', en: 'Travel first-aid kit' }, path: '/reiseapotheke' },
        { label: { de: 'Reisetipps', en: 'Travel tips' }, path: '/reisetipps' },
      ],
    },
    planningSection(),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Mexiko eine Gelbfieberimpfung?', en: 'Do I need a yellow fever vaccination for Mexico?' },
      a: {
        de: 'Nein. Mexiko verlangt keinen Nachweis, und im Land wird Gelbfieber nicht übertragen. Kombinieren Sie die Reise mit Südamerika, kann ein Folgeziel einen Nachweis verlangen. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'No. Mexico does not require proof, and yellow fever is not transmitted in the country. If you combine the trip with South America, an onward destination may require proof. The entry requirements of the destination country apply.',
      },
    },
    {
      q: { de: 'Muss ich für Cancún oder Tulum Malaria-Tabletten einnehmen?', en: 'Do I need malaria tablets for Cancún or Tulum?' },
      a: {
        de: 'Nein. Nach den DTG-Empfehlungen 2026 sind Quintana Roo und Yucatán malariafrei. Auch für Gebiete mit geringem Risiko wie Chiapas empfiehlt die DTG konsequenten Mückenschutz, aber keine vorbeugenden Tabletten.',
        en: 'No. According to the DTG recommendations 2026, Quintana Roo and Yucatán are malaria-free. Even for low-risk areas such as Chiapas, DTG recommends consistent mosquito protection but no preventive tablets.',
      },
    },
    {
      q: { de: 'Warum ist die Masernimpfung vor einer Mexiko-Reise so wichtig?', en: 'Why is measles vaccination so important before a trip to Mexico?' },
      a: {
        de: 'Mexiko meldet seit 2025 sehr viele Masernfälle – 2026 bis Mitte Oktober über 13.600. Masern sind hoch ansteckend und können schwer verlaufen. Wir prüfen Ihren Impfpass und holen fehlende Impfungen nach; bei mitreisenden Säuglingen ist die erste Impfung schon ab neun Monaten möglich.',
        en: 'Mexico has reported very many measles cases since 2025 – more than 13,600 in 2026 by mid-October. Measles is highly contagious and can be severe. We check your vaccination record and catch up on missing doses; for infants travelling with you, the first dose is possible from nine months of age.',
      },
    },
  ],
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaMexiko', 'pahoMasern2026', 'whoYellowFeverCountries',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Lateinamerika & Karibik', en: 'Latin America & Caribbean' }, path: '/reiseziele/lateinamerika' },
    { label: { de: 'Brasilien', en: 'Brazil' }, path: '/reiseziele/lateinamerika/brasilien' },
    { label: { de: 'Peru', en: 'Peru' }, path: '/reiseziele/lateinamerika/peru' },
  ],
};
