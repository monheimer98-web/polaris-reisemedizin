/**
 * Länderseiten unter /reiseziele/<region>/<land> (DE/EN). Inhalte nach
 * STIKO/DTG (Epid Bull 27/2026 inkl. Ländertabellen), DTG-Malaria 2026 und
 * Auswärtigem Amt, Stand 18.10.2026. Bewusst ohne Präparatenamen (HWG);
 * Malaria-Vorbeugung nur als „vorbeugende Tabletteneinnahme" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage, Localized } from '../types';

export interface DestinationCountry {
  /** URL-Slug unter /reiseziele/<region>/ (DE und EN gleich). */
  slug: string;
  /** Slug der Region aus `regions.ts`. */
  region: string;
  name: Localized;
  page: ClinicalPage;
}

import {
  REVIEWED, entryRulesCallout, feverCallout, malariaLink, yellowFeverLink, rabiesLink, jeLink, typhoidLink, altitudeLink, planningSection,
} from './laenderBausteine';
import { vietnam } from './laender/vietnam';
import { sriLanka } from './laender/sri-lanka';
import { philippinen } from './laender/philippinen';
import { brasilien } from './laender/brasilien';
import { peru } from './laender/peru';
import { mexiko } from './laender/mexiko';
import { suedafrika } from './laender/suedafrika';
import { dominikanischeRepublik } from './laender/dominikanische-republik';

// ---------------------------------------------------------------------------
// Thailand
// ---------------------------------------------------------------------------
const thailand: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Thailand', en: 'Travel vaccinations for Thailand' },
    description: {
      de: 'Thailand-Reise: Welche Impfungen sind sinnvoll? Hepatitis A, Tollwut, Japanische Enzephalitis und Malaria-Hinweise nach STIKO/DTG 2026 – Beratung in Langenfeld.',
      en: 'Travelling to Thailand: which vaccinations make sense? Hepatitis A, rabies, Japanese encephalitis and malaria advice per STIKO/DTG 2026 – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Asien', en: 'Destination Asia' },
    lead: {
      de: 'Thailand ist für viele der Einstieg in Fernreisen. Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben – sinnvoll sind aber einige. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'For many people Thailand is their first long-haul destination. No vaccination is required when entering directly from Germany – but several are advisable. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: Gelbfieber-Nachweis', en: 'Entry: yellow fever certificate' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Wer aus einem Gelbfieber-Gebiet einreist oder dort mehr als zwölf Stunden im Transit war, muss ab einem Alter von neun Monaten eine Gelbfieberimpfung nachweisen. Das betrifft etwa Reisende, die Thailand mit Afrika oder Südamerika kombinieren.',
          'In Thailand selbst wird Gelbfieber nicht übertragen; eine Impfung zum eigenen Schutz ist deshalb nicht nötig.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. Travellers aged nine months and older who arrive from a yellow fever area, or who spent more than twelve hours in transit there, must show proof of yellow fever vaccination. This applies, for example, to travellers combining Thailand with Africa or South America.',
          'Yellow fever is not transmitted in Thailand itself, so vaccination for your own protection is not needed.',
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
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, Tattoos oder Piercings, medizinischen Eingriffen oder neuen Sexualkontakten.',
          'Tollwut: vorbeugend bei Aufenthalten über vier Wochen oder wiederholten Reisen, wenn zusätzlich die Versorgung nach einem Biss vor Ort nicht gesichert ist, einfache Reisebedingungen bestehen oder Aktivitäten mit erhöhtem Risiko für Tierkontakte geplant sind (etwa Rad- oder Rollerfahren, Joggen); bei Kindern großzügig.',
          'Japanische Enzephalitis: landesweit, Übertragung ganzjährig möglich; Hauptsaison Mai bis Oktober, besonders im Norden. Empfohlen vor allem bei Aufenthalten über vier Wochen, wiederholten Reisen, Ausbrüchen und absehbaren Aufenthalten nahe Reisfeldern oder Schweinehaltung – auch außerhalb ländlicher Gebiete.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen, etwa nach einer früheren, im Labor nachgewiesenen Dengue-Infektion. Das klären wir in der Beratung.',
        ],
        en: [
          'Routine vaccinations: check tetanus, diphtheria, whooping cough, polio and especially measles, and boost if needed.',
          'Hepatitis A: recommended for all travellers.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: pre-exposure vaccination for stays of more than four weeks or repeated trips if, in addition, care after a bite is not assured locally, travel conditions are basic or activities with a higher risk of animal contact are planned (such as cycling, riding a scooter or jogging); generously for children.',
          'Japanese encephalitis: nationwide, transmission possible all year round; main season May to October, especially in the north. Recommended mainly for stays of more than four weeks, repeated trips, outbreaks and foreseeable stays near rice fields or pig farming – including outside rural areas.',
          'Dengue and chikungunya: vaccination only in specific situations, for example after a previous laboratory-confirmed dengue infection. We clarify this in the consultation.',
        ],
      },
      links: [jeLink, rabiesLink, { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: [
          'In den typischen Urlaubsregionen ist das Malariarisiko gering. Die DTG empfiehlt dort konsequenten Mückenschutz, aber keine vorbeugende Tabletteneinnahme.',
        ],
        en: [
          'In the typical holiday regions the malaria risk is low. DTG recommends consistent mosquito protection there, but no preventive tablets.',
        ],
      },
      list: {
        de: [
          'Malariafrei: die Städte Bangkok, Chiang Mai, Chiang Rai und Pattaya (nicht das ländliche Umland).',
          'Geringes Risiko: das übrige Land, auch Phuket, Koh Samui, Koh Phangan, Koh Lanta und andere Inseln – Mückenschutz.',
          'Mittleres Risiko: der Grenzgürtel zu Myanmar und die Insel Little Koh Chang in der Andamanensee (Provinz Ranong – nicht die Ferieninsel Koh Chang im Golf von Thailand) – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
        ],
        en: [
          'Malaria-free: the cities of Bangkok, Chiang Mai, Chiang Rai and Pattaya (not the surrounding countryside).',
          'Low risk: the rest of the country, including Phuket, Koh Samui, Koh Phangan, Koh Lanta and other islands – mosquito protection.',
          'Moderate risk: the border belt with Myanmar and the island of Little Koh Chang in the Andaman Sea (Ranong province – not the holiday island of Koh Chang in the Gulf of Thailand) – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
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
          'Dengue ganzjährig, vor allem in der Regenzeit – Mückenschutz auch tagsüber.',
          'Tollwut: Kontakt zu Hunden, Katzen und Affen meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Reisedurchfall, Hepatitis A und Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
          'Leptospirose und Melioidose nach Kontakt mit Süßwasser, Schlamm oder Erde, besonders nach Überschwemmungen.',
          'Luftverschmutzung in Bangkok und Chiang Mai, vor allem in der Trockenzeit von November bis April.',
        ],
        en: [
          'Dengue all year round, especially in the rainy season – mosquito protection during the day as well.',
          'Rabies: avoid contact with dogs, cats and monkeys. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          "Travellers' diarrhoea, hepatitis A and typhoid: pay attention to drinking water and food hygiene.",
          'Leptospirosis and melioidosis after contact with fresh water, mud or soil, especially after flooding.',
          'Air pollution in Bangkok and Chiang Mai, especially in the dry season from November to April.',
        ],
      },
    },
    planningSection(),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Thailand eine Gelbfieberimpfung?', en: 'Do I need a yellow fever vaccination for Thailand?' },
      a: {
        de: 'Bei direkter Einreise aus Deutschland nicht. Ein Nachweis ist ab neun Monaten nötig, wenn Sie aus einem Gelbfieber-Gebiet einreisen oder dort mehr als zwölf Stunden im Transit waren. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'Not when entering directly from Germany. Proof is required from nine months of age if you arrive from a yellow fever area or spent more than twelve hours in transit there. The entry requirements of the destination country apply.',
      },
    },
    {
      q: { de: 'Muss ich für Phuket oder Koh Samui Malaria-Tabletten einnehmen?', en: 'Do I need malaria tablets for Phuket or Koh Samui?' },
      a: {
        de: 'Nach den DTG-Empfehlungen 2026 ist das Malariarisiko dort gering. Empfohlen wird konsequenter Mückenschutz; eine vorbeugende Tabletteneinnahme ist für diese Ziele nicht vorgesehen.',
        en: 'According to the DTG recommendations 2026, the malaria risk there is low. Consistent mosquito protection is recommended; preventive tablets are not intended for these destinations.',
      },
    },
    {
      q: { de: 'Ist die Impfung gegen Japanische Enzephalitis für Thailand nötig?', en: 'Is the Japanese encephalitis vaccine necessary for Thailand?' },
      a: {
        de: 'Nicht für jede Reise. Sie wird vor allem bei längeren oder wiederholten Aufenthalten und bei Aufenthalten nahe Reisfeldern oder Schweinehaltung empfohlen. Die zwei Impfdosen sollten mindestens eine Woche vor Reisebeginn abgeschlossen sein.',
        en: 'Not for every trip. It is recommended mainly for longer or repeated stays and for stays near rice fields or pig farming. The two doses should be completed at least one week before the trip.',
      },
    },
  ],
  sourceIds: ['stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026', 'aaThailand', 'whoYellowFeverCountries'],
  lastReviewed: REVIEWED,
  related: [
    { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
    { label: { de: 'Bali & Indonesien', en: 'Bali & Indonesia' }, path: '/reiseziele/asien/indonesien-bali' },
  ],
};

// ---------------------------------------------------------------------------
// Kenia
// ---------------------------------------------------------------------------
const kenia: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Kenia', en: 'Travel vaccinations for Kenya' },
    description: {
      de: 'Kenia-Reise und Safari: Gelbfieber-Regeln, Malaria-Vorsorge nach DTG 2026 und empfohlene Impfungen – reisemedizinische Beratung in Langenfeld.',
      en: 'Kenya trip and safari: yellow fever rules, malaria prevention per DTG 2026 and recommended vaccinations – travel medicine consultation in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Afrika', en: 'Destination Africa' },
    lead: {
      de: 'Kenia verbindet Safari, Hochland und Küste – und damit unterschiedliche Gesundheitsrisiken. Besonders wichtig sind Gelbfieber und Malaria. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Kenya combines safari, highlands and coast – and with them different health risks. Yellow fever and malaria are particularly important. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'gelbfieber',
      heading: { de: 'Gelbfieber: Pflicht und Empfehlung', en: 'Yellow fever: requirement and recommendation' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Reisende ab einem Jahr, die aus einem Gelbfieber-Gebiet einreisen, müssen eine Gelbfieberimpfung nachweisen.',
          'Unabhängig von der Pflicht empfehlen WHO, STIKO und DTG die Gelbfieberimpfung für die meisten Landesteile. Nicht generell empfohlen ist sie, wenn Sie ausschließlich Nairobi, Mombasa, die Küstenbezirke Kilifi, Kwale, Lamu, Malindi und Tana River oder den Nordosten besuchen. 2022 sind im Landesinneren Gelbfieberfälle aufgetreten, die sich teils auch auf diese Gebiete ausgebreitet haben. STIKO und DTG raten deshalb bis auf Weiteres, die Impfung für Reisen in ganz Kenia großzügig einzusetzen – auch wenn Sie nur die genannten Gebiete besuchen.',
          'Geimpft wird nur in einer staatlich autorisierten Gelbfieber-Impfstelle; die erste Impfung muss mindestens zehn Tage vor der Einreise erfolgen. Das Zertifikat gilt lebenslang. Liegt Ihre Impfung zehn Jahre oder länger zurück, empfiehlt die STIKO vor einer erneuten Reise in ein Gelbfiebergebiet einmalig eine Auffrischung; für Kinder, Schwangere und Menschen mit geschwächtem Immunsystem gelten besondere Regeln.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. Travellers aged one year and older arriving from a yellow fever area must show proof of yellow fever vaccination.',
          'Regardless of the requirement, WHO, STIKO and DTG recommend yellow fever vaccination for most parts of the country. It is not generally recommended if you visit only Nairobi, Mombasa, the coastal districts of Kilifi, Kwale, Lamu, Malindi and Tana River, or the north-east. In 2022, yellow fever cases occurred inland and in part spread to these areas as well. STIKO and DTG therefore currently advise using the vaccination generously for travel anywhere in Kenya – even if you visit only the areas listed.',
          'Vaccination is only given at a state-authorised yellow fever vaccination centre; the first dose must be given at least ten days before entry. The certificate is valid for life. If your vaccination was ten or more years ago, STIKO recommends a single booster before travelling to a yellow fever area again; special rules apply to children, pregnant women and people with a weakened immune system.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Weiterreise aus Kenia', en: 'Travelling on from Kenya' },
        text: {
          de: 'Kenia gilt selbst als Gelbfieber-Gebiet. Wer danach nach Tansania, Sansibar, Indien oder in andere Länder mit Nachweispflicht weiterreist, braucht dort eine gültige Impfung. Maßgeblich sind die Einreisevorschriften des jeweiligen Ziellandes.',
          en: 'Kenya itself counts as a yellow fever area. Anyone travelling on to Tanzania, Zanzibar, India or other countries with a certificate requirement needs a valid vaccination there. The entry requirements of each destination country apply.',
        },
      },
      links: [yellowFeverLink, { label: { de: 'Gelbfieber', en: 'Yellow fever' }, path: '/krankheitsbilder/gelbfieber' }],
    },
    {
      id: 'impfungen',
      heading: { de: 'Weitere empfohlene Impfungen', en: 'Other recommended vaccinations' },
      body: {
        de: ['Neben Gelbfieber empfehlen STIKO und DTG für alle Reisenden aktuelle Standardimpfungen, Hepatitis A und einen vollständigen Polio-Schutz. Je nach Reise kommen weitere hinzu:'],
        en: ['Besides yellow fever, STIKO and DTG recommend up-to-date routine vaccinations, hepatitis A and complete polio protection for all travellers. Depending on the trip, others are added:'],
      },
      list: {
        de: [
          'Standardimpfungen prüfen und auffrischen, insbesondere Masern – in Kenia kommt es wiederholt zu Ausbrüchen.',
          'Hepatitis A: für alle Reisenden.',
          'Polio: vollständige Grundimmunisierung und mindestens eine Auffrischimpfung; fehlende Impfungen holen wir nach.',
          'Tollwut: Das Risiko durch Hunde ist hoch, Impfstoff und vor allem Immunglobulin sind vor Ort nur begrenzt verfügbar. STIKO und DTG empfehlen die vorbeugende Impfung – unabhängig von der Reisedauer –, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, bei einfachen Reisebedingungen oder bei Aktivitäten mit erhöhtem Risiko für Tierkontakte, etwa Rad- oder Rollerfahren und Joggen; bei Kindern großzügig.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung.',
          'Meningokokken ACWY: bei längeren Aufenthalten mit engem Kontakt zur Bevölkerung (z. B. Familienbesuche, Arbeit in Schulen), bei Ausbrüchen sowie für medizinisches Personal und Hilfseinsätze; Erkrankungen häufen sich in den Trockenzeiten (Dezember bis März, Juni bis Oktober).',
        ],
        en: [
          'Check and boost routine vaccinations, especially measles – Kenya has repeated outbreaks.',
          'Hepatitis A: for all travellers.',
          'Polio: a complete primary course and at least one booster; we catch up on any missing doses.',
          'Rabies: the risk from dogs is high, and vaccine and especially immunoglobulin are only available to a limited extent locally. STIKO and DTG recommend pre-exposure vaccination – regardless of trip length – if care after a bite is not assured locally, for basic travel conditions, or for activities with a higher risk of animal contact such as cycling, riding a scooter or jogging; generously for children.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment.',
          'Meningococcal ACWY: for longer stays with close contact with the local population (e.g. visiting family, working in schools), during outbreaks, and for healthcare staff and aid work; cases cluster in the dry seasons (December to March, June to October).',
        ],
      },
      links: [rabiesLink, typhoidLink, { label: { de: 'Meningokokken', en: 'Meningococcal disease' }, path: '/krankheitsbilder/meningokokken' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['Malaria ist in Kenia das wichtigste Infektionsrisiko für Reisende. Fast alle Infektionen sind Malaria tropica, die gefährlichste Form.'],
        en: ['Malaria is the most important infection risk for travellers in Kenya. Almost all infections are falciparum malaria, the most dangerous form.'],
      },
      list: {
        de: [
          'Hohes Risiko ganzjährig im ganzen Land unterhalb von 2.500 Metern – auch an der Küste (Mombasa, Diani, Malindi, Lamu) und in den Safari-Gebieten wie Masai Mara und Tsavo. Die DTG empfiehlt hier zusätzlich zum Mückenschutz eine vorbeugende Tabletteneinnahme.',
          'Geringes Risiko im Stadtzentrum von Nairobi und oberhalb von 2.500 Metern – hier genügt konsequenter Mückenschutz.',
          'Die typische Rundreise mit Nairobi, Safari und Küste führt durch Gebiete mit hohem Risiko.',
        ],
        en: [
          'High risk all year round throughout the country below 2,500 metres – including the coast (Mombasa, Diani, Malindi, Lamu) and safari areas such as the Masai Mara and Tsavo. DTG recommends preventive tablets here in addition to mosquito protection.',
          'Low risk in central Nairobi and above 2,500 metres – consistent mosquito protection is sufficient there.',
          'The typical round trip with Nairobi, safari and coast passes through high-risk areas.',
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
          'Weitere durch Mücken und Zecken übertragene Infektionen, etwa Dengue, Chikungunya, Rift-Valley-Fieber und Zeckenbissfieber.',
          'Bilharziose in Seen und Flüssen – dort nicht baden.',
          'Höhenkrankheit bei einer Besteigung des Mount Kenya.',
          'Reisedurchfall, Hepatitis A und Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
        ],
        en: [
          'Other mosquito- and tick-borne infections, such as dengue, chikungunya, Rift Valley fever and tick bite fever.',
          'Schistosomiasis (bilharzia) in lakes and rivers – do not swim there.',
          'Altitude sickness when climbing Mount Kenya.',
          "Travellers' diarrhoea, hepatitis A and typhoid: pay attention to drinking water and food hygiene.",
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Aktuelle Lage (Stand Oktober 2026)', en: 'Current situation (as of October 2026)' },
        text: {
          de: 'Anfang Oktober 2026 wurde in Kenia ein aus der DR Kongo eingeschleppter Ebola-Fall gemeldet; an den Flughäfen Nairobi und Mombasa wird bei der Einreise Fieber gemessen. Andere Länder können nach einem Kenia-Aufenthalt zusätzliche Kontrollen oder Quarantäne verlangen. Prüfen Sie vor der Abreise die aktuellen Hinweise des Auswärtigen Amts.',
          en: 'In early October 2026 an Ebola case imported from the DR Congo was reported in Kenya; temperature screening takes place on arrival at Nairobi and Mombasa airports. Other countries may require additional checks or quarantine after a stay in Kenya. Check the current advice of the German Federal Foreign Office before departure.',
        },
      },
      links: [altitudeLink],
    },
    planningSection({
      de: 'Die Gelbfieberimpfung erhalten Sie direkt bei uns – mit Eintrag in den internationalen Impfausweis.',
      en: 'You can get the yellow fever vaccination directly from us, with an entry in your international certificate of vaccination.',
    }),
  ],
  faq: [
    {
      q: { de: 'Ist die Gelbfieberimpfung für Kenia Pflicht?', en: 'Is yellow fever vaccination mandatory for Kenya?' },
      a: {
        de: 'Bei direkter Einreise aus Deutschland nicht. Empfohlen wird sie aber für die meisten Regionen, und Folgeziele wie Tansania, Sansibar oder Indien verlangen nach einem Kenia-Aufenthalt einen Nachweis. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'Not when entering directly from Germany. It is, however, recommended for most regions, and onward destinations such as Tanzania, Zanzibar or India require proof after a stay in Kenya. The entry requirements of the destination country apply.',
      },
    },
    {
      q: { de: 'Brauche ich für eine Safari Malaria-Tabletten?', en: 'Do I need malaria tablets for a safari?' },
      a: {
        de: 'Für Safari-Gebiete und die Küste unterhalb von 2.500 Metern empfiehlt die DTG zusätzlich zum Mückenschutz eine vorbeugende Tabletteneinnahme. Welches Mittel zu Ihnen passt, besprechen wir in der Beratung.',
        en: 'For safari areas and the coast below 2,500 metres, DTG recommends preventive tablets in addition to mosquito protection. We discuss which option suits you in the consultation.',
      },
    },
    {
      q: { de: 'Wie kurzfristig kann ich mich vor einer Kenia-Reise noch impfen lassen?', en: 'How late can I still get vaccinated before a trip to Kenya?' },
      a: {
        de: 'Die Gelbfieberimpfung muss mindestens zehn Tage vor der Einreise erfolgen; Hepatitis A ist auch kurz vor der Abreise noch sinnvoll. Ideal ist ein Termin sechs bis acht Wochen vorher.',
        en: 'The yellow fever vaccination must be given at least ten days before entry; hepatitis A is still worthwhile shortly before departure. Ideally, come six to eight weeks beforehand.',
      },
    },
  ],
  sourceIds: ['stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026', 'aaKenia', 'whoYellowFeverCountries'],
  lastReviewed: REVIEWED,
  related: [
    { label: { de: 'Afrika südlich der Sahara', en: 'Sub-Saharan Africa' }, path: '/reiseziele/afrika' },
    { label: { de: 'Tansania & Sansibar', en: 'Tanzania & Zanzibar' }, path: '/reiseziele/afrika/tansania-sansibar' },
  ],
};

// ---------------------------------------------------------------------------
// Tansania & Sansibar
// ---------------------------------------------------------------------------
const tansania: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Tansania und Sansibar', en: 'Travel vaccinations for Tanzania and Zanzibar' },
    description: {
      de: 'Tansania & Sansibar: Gelbfieber-Regeln, Malaria-Vorsorge, Polio-Hinweise und empfohlene Reiseimpfungen nach STIKO/DTG 2026 – Beratung in Langenfeld.',
      en: 'Tanzania & Zanzibar: yellow fever rules, malaria prevention, polio advice and recommended travel vaccinations per STIKO/DTG 2026 – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Afrika', en: 'Destination Africa' },
    lead: {
      de: 'Ob Safari im Norden, Kilimandscharo oder Strandurlaub auf Sansibar: Für Tansania lohnt sich eine Beratung mit Blick auf die ganze Route. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Whether a safari in the north, Kilimanjaro or a beach holiday on Zanzibar: for Tanzania it pays to plan with the whole route in mind. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'gelbfieber',
      heading: { de: 'Gelbfieber: Wann ein Nachweis nötig ist', en: 'Yellow fever: when proof is required' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland – auch nach Sansibar – ist keine Gelbfieberimpfung vorgeschrieben. Das gilt auch bei einem Umstieg in einem Gelbfieber-Gebiet, solange er kürzer als zwölf Stunden ist und Sie den Flughafen nicht verlassen.',
          'Einen Nachweis brauchen Reisende ab einem Jahr, die aus einem Gelbfieber-Gebiet wie Kenia oder Uganda einreisen oder dort länger als zwölf Stunden im Transit waren. Sansibar prüft das auch bei Ankunft vom tansanischen Festland. Fehlt der Nachweis, wird nach Angaben der tansanischen Botschaft am Einreiseort auf eigene Kosten geimpft – das ersetzt keine rechtzeitige Impfung vor der Reise.',
          'Zum eigenen Schutz wird die Gelbfieberimpfung für Tansania nicht empfohlen, weil das Übertragungsrisiko dort gering ist.',
        ],
        en: [
          'No yellow fever vaccination is required when entering directly from Germany – including Zanzibar. This also applies to a stopover in a yellow fever area as long as it lasts less than twelve hours and you do not leave the airport.',
          'Proof is required for travellers aged one year and older who arrive from a yellow fever area such as Kenya or Uganda, or who spent more than twelve hours in transit there. Zanzibar also checks this on arrival from the Tanzanian mainland. Without proof, according to the Tanzanian embassy you will be vaccinated at the point of entry at your own expense – this is no substitute for timely vaccination before the trip.',
          'Yellow fever vaccination for your own protection is not recommended for Tanzania, as the transmission risk there is low.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Kombination mit Kenia', en: 'Combined with Kenya' },
        text: {
          de: 'Wer nach einer Kenia-Safari nach Sansibar oder aufs tansanische Festland weiterreist, braucht einen gültigen Gelbfieber-Nachweis. Die erste Impfung muss mindestens zehn Tage vor der Einreise erfolgen. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
          en: 'If you travel on to Zanzibar or mainland Tanzania after a Kenya safari, you need a valid yellow fever certificate. The first vaccination must be given at least ten days before entry. The entry requirements of the destination country apply.',
        },
      },
      links: [yellowFeverLink, { label: { de: 'Kenia', en: 'Kenya' }, path: '/reiseziele/afrika/kenia' }],
    },
    {
      id: 'impfungen',
      heading: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      body: {
        de: ['Für alle Reisenden empfehlen STIKO und DTG aktuelle Standardimpfungen, Hepatitis A und einen vollständigen Polio-Schutz. Je nach Reise kommen weitere hinzu:'],
        en: ['For all travellers, STIKO and DTG recommend up-to-date routine vaccinations, hepatitis A and complete polio protection. Depending on the trip, others are added:'],
      },
      list: {
        de: [
          'Standardimpfungen prüfen und auffrischen, insbesondere Masern.',
          'Hepatitis A: für alle Reisenden.',
          'Polio: vollständiger, aufgefrischter Schutz. Bei Aufenthalten über vier Wochen empfiehlt die WHO, dass die letzte Polio-Impfung vier Wochen bis zwölf Monate vor der Ausreise aus Tansania liegt und im Internationalen Impfausweis eingetragen ist.',
          'Tollwut: Das Risiko durch Hunde ist hoch, Impfstoff und Immunglobulin sind vor Ort teils nur begrenzt verfügbar. STIKO und DTG empfehlen die vorbeugende Impfung – unabhängig von der Reisedauer –, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, bei einfachen Reisebedingungen oder bei Aktivitäten mit erhöhtem Risiko für Tierkontakte, etwa Rad- oder Rollerfahren und Joggen; bei Kindern großzügig.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung.',
          'Meningokokken ACWY: bei längeren Aufenthalten mit engem Kontakt zur Bevölkerung (z. B. Familienbesuche, Arbeit in Schulen), bei Ausbrüchen sowie für medizinisches Personal und Hilfseinsätze; Erkrankungen treten vor allem von Januar bis April im Norden und Westen auf.',
          'Cholera: für Touristen in der Regel nicht nötig, nur bei besonderer Gefährdung, etwa in Hilfseinsätzen.',
        ],
        en: [
          'Check and boost routine vaccinations, especially measles.',
          'Hepatitis A: for all travellers.',
          'Polio: complete, boosted protection. For stays of more than four weeks, the WHO recommends that the last polio dose be given four weeks to twelve months before you leave Tanzania and recorded in the international certificate of vaccination.',
          'Rabies: the risk from dogs is high, and vaccine and immunoglobulin may be only partly available locally. STIKO and DTG recommend pre-exposure vaccination – regardless of trip length – if care after a bite is not assured locally, for basic travel conditions, or for activities with a higher risk of animal contact such as cycling, riding a scooter or jogging; generously for children.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment.',
          'Meningococcal ACWY: for longer stays with close contact with the local population (e.g. visiting family, working in schools), during outbreaks, and for healthcare staff and aid work; cases occur mainly from January to April in the north and west.',
          'Cholera: usually not needed for tourists, only in special risk situations such as aid work.',
        ],
      },
      links: [rabiesLink, typhoidLink],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['Fast alle Malariainfektionen in Tansania sind Malaria tropica, die gefährlichste Form.'],
        en: ['Almost all malaria infections in Tanzania are falciparum malaria, the most dangerous form.'],
      },
      list: {
        de: [
          'Hohes Risiko ganzjährig im ganzen Land unterhalb von 2.500 Metern – auch in den Nationalparks wie Serengeti, Ngorongoro und Tarangire, in Daressalam und auf Sansibar, Pemba und Mafia. Die DTG empfiehlt zusätzlich zum Mückenschutz eine vorbeugende Tabletteneinnahme.',
          'Geringes Risiko nur oberhalb von 2.500 Metern, etwa am oberen Kilimandscharo. Da An- und Abreise über Moshi oder Arusha führen, gilt die Empfehlung zur Vorbeugung meist für die gesamte Reise.',
        ],
        en: [
          'High risk all year round throughout the country below 2,500 metres – including national parks such as the Serengeti, Ngorongoro and Tarangire, Dar es Salaam and the islands of Zanzibar, Pemba and Mafia. DTG recommends preventive tablets in addition to mosquito protection.',
          'Low risk only above 2,500 metres, for example on upper Kilimanjaro. As arrival and departure go via Moshi or Arusha, the recommendation for prevention usually applies to the whole trip.',
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
          'Höhenkrankheit am Kilimandscharo und Mount Meru – lassen Sie sich vor der Besteigung höhenmedizinisch beraten. Eine Bergrettung gibt es dort praktisch nicht.',
          'Afrikanisches Zeckenbissfieber in den Nationalparks; Schlafkrankheit durch Tsetsefliegen in Teilen der Serengeti, im Tarangire und im Westen.',
          'Bilharziose in Seen und Flüssen – dort nicht baden.',
          'Reisedurchfall und Hepatitis A: auf Trinkwasser- und Lebensmittelhygiene achten.',
        ],
        en: [
          'Altitude sickness on Kilimanjaro and Mount Meru – get altitude medicine advice before the climb. There is practically no mountain rescue service there.',
          'African tick bite fever in the national parks; sleeping sickness from tsetse flies in parts of the Serengeti, Tarangire and the west.',
          'Schistosomiasis (bilharzia) in lakes and rivers – do not swim there.',
          "Travellers' diarrhoea and hepatitis A: pay attention to drinking water and food hygiene.",
        ],
      },
      links: [altitudeLink],
    },
    planningSection(),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Sansibar eine Gelbfieberimpfung?', en: 'Do I need a yellow fever vaccination for Zanzibar?' },
      a: {
        de: 'Bei direkter Anreise aus Deutschland ohne längeren Aufenthalt in einem Gelbfieber-Gebiet nicht. Kommen Sie aus Kenia oder einem anderen Gelbfieber-Land, wird der Nachweis ab einem Jahr verlangt – auch bei Weiterreise vom Festland. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'Not when arriving directly from Germany without a longer stay in a yellow fever area. If you come from Kenya or another yellow fever country, proof is required from one year of age – also when travelling on from the mainland. The entry requirements of the destination country apply.',
      },
    },
    {
      q: { de: 'Ist auf Sansibar eine Malaria-Vorbeugung nötig?', en: 'Is malaria prevention needed on Zanzibar?' },
      a: {
        de: 'Ja. Die DTG stuft Sansibar wie das Festland unterhalb von 2.500 Metern als Gebiet mit hohem Malariarisiko ein und empfiehlt zusätzlich zum Mückenschutz eine vorbeugende Tabletteneinnahme.',
        en: 'Yes. DTG classifies Zanzibar, like the mainland below 2,500 metres, as a high-risk malaria area and recommends preventive tablets in addition to mosquito protection.',
      },
    },
    {
      q: { de: 'Was gilt für die Polio-Impfung bei längeren Aufenthalten?', en: 'What applies to polio vaccination for longer stays?' },
      a: {
        de: 'Bei Aufenthalten über vier Wochen empfiehlt die WHO, dass die letzte Polio-Impfung vier Wochen bis zwölf Monate vor der Ausreise aus Tansania erfolgt und im Internationalen Impfausweis eingetragen ist. Bei kürzeren Reisen genügt ein vollständiger, aufgefrischter Schutz.',
        en: 'For stays of more than four weeks, the WHO recommends that the last polio dose be given four weeks to twelve months before you leave Tanzania and recorded in the international certificate of vaccination. For shorter trips, complete and boosted protection is sufficient.',
      },
    },
  ],
  sourceIds: ['stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026', 'aaTansania', 'tansaniaGelbfieberSansibar', 'whoYellowFeverCountries'],
  lastReviewed: REVIEWED,
  related: [
    { label: { de: 'Afrika südlich der Sahara', en: 'Sub-Saharan Africa' }, path: '/reiseziele/afrika' },
    { label: { de: 'Kenia', en: 'Kenya' }, path: '/reiseziele/afrika/kenia' },
  ],
};

// ---------------------------------------------------------------------------
// Indien
// ---------------------------------------------------------------------------
const indien: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Indien', en: 'Travel vaccinations for India' },
    description: {
      de: 'Indien-Reise: Typhus und Hepatitis A für alle, Gelbfieber-Kontrolle bei Einreise, Tollwut und Malaria nach STIKO/DTG 2026 – reisemedizinische Beratung in Langenfeld.',
      en: 'Travelling to India: typhoid and hepatitis A for everyone, yellow fever checks on entry, rabies and malaria per STIKO/DTG 2026 – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Asien', en: 'Destination Asia' },
    lead: {
      de: 'Indien ist vielfältig – von Delhi und Mumbai über Rajasthan bis zu den Stränden von Goa und Kerala. Besonders wichtig sind Typhus, Hepatitis A und Tollwut. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'India is diverse – from Delhi and Mumbai to Rajasthan and the beaches of Goa and Kerala. Typhoid, hepatitis A and rabies are particularly important. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: strenge Gelbfieber-Kontrolle', en: 'Entry: strict yellow fever checks' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben.',
          'Wer innerhalb von sechs Tagen vor der Ankunft in einem Gelbfieber-Gebiet war, auch im Transit, muss ab einem Alter von neun Monaten eine Gelbfieberimpfung nachweisen. Ohne Nachweis ist eine Isolation von bis zu sechs Tagen möglich. Das betrifft etwa Reisende, die vorher in Kenia oder Äthiopien waren; Indien führt dazu eine eigene Länderliste.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany.',
          'Anyone who was in a yellow fever area within six days before arrival, including in transit, must show proof of yellow fever vaccination from nine months of age. Without proof, isolation of up to six days is possible. This affects, for example, travellers who were previously in Kenya or Ethiopia; India keeps its own list of countries for this purpose.',
        ],
      },
      callout: entryRulesCallout,
      links: [yellowFeverLink],
    },
    {
      id: 'impfungen',
      heading: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      body: {
        de: [
          'Für alle Indien-Reisenden sind neben aktuellen Standardimpfungen die Impfungen gegen Hepatitis A und Typhus sinnvoll. Die Typhus-Impfung empfehlen die DTG und die gemeinsame Arbeitsgruppe Reiseimpfungen von STIKO und DTG unabhängig von Reisestil und Reisedauer, weil Typhus auf dem indischen Subkontinent häufig ist und zunehmend resistente Erreger auftreten. Dabei handelt es sich um einen Expertenkonsens, der über die formale STIKO-Empfehlung hinausgeht.',
        ],
        en: [
          'For all travellers to India, hepatitis A and typhoid vaccinations are advisable in addition to up-to-date routine vaccinations. DTG and the joint STIKO–DTG working group on travel vaccinations recommend typhoid vaccination regardless of travel style and trip length, because typhoid is common on the Indian subcontinent and increasingly resistant strains are emerging. This is an expert consensus that goes beyond the formal STIKO recommendation.',
        ],
      },
      list: {
        de: [
          'Standardimpfungen prüfen und auffrischen, etwa Masern, Tetanus und Polio.',
          'Hepatitis A: für alle Reisenden.',
          'Typhus: für alle Reisenden, auch bei kurzen Reisen und guten Hotels.',
          'Tollwut: Auf Indien entfällt rund ein Drittel der weltweiten Tollwut-Todesfälle, und außerhalb der Großstädte ist die Behandlung nach einem Biss nicht gesichert. STIKO und DTG empfehlen die vorbeugende Impfung deshalb – unabhängig von der Reisedauer –, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, bei einfachen Reisebedingungen oder bei Aktivitäten mit erhöhtem Risiko für Tierkontakte, etwa Rad- oder Rollerfahren und Joggen; bei Kindern großzügig.',
          'Hepatitis B: nach individueller Einschätzung.',
          'Japanische Enzephalitis: in vielen Bundesstaaten, auch in Goa und Kerala; Hauptsaison Mai bis November, besonders im Norden – im Süden teils länger oder ganzjährig. Empfohlen vor allem bei Aufenthalten über vier Wochen, wiederholten Reisen, Ausbrüchen und absehbaren Aufenthalten nahe Reisfeldern oder Schweinehaltung – auch außerhalb ländlicher Gebiete.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen. Im August 2026 wurden in Kerala (vor allem Thiruvananthapuram) gehäuft Chikungunya-Fälle gemeldet – bei Reisen dorthin prüfen wir, ob eine Impfung sinnvoll ist.',
        ],
        en: [
          'Check and boost routine vaccinations, such as measles, tetanus and polio.',
          'Hepatitis A: for all travellers.',
          'Typhoid: for all travellers, even on short trips and in good hotels.',
          'Rabies: India accounts for around a third of rabies deaths worldwide, and outside the big cities treatment after a bite is not assured. STIKO and DTG therefore recommend pre-exposure vaccination – regardless of trip length – if care after a bite is not assured locally, for basic travel conditions, or for activities with a higher risk of animal contact such as cycling, riding a scooter or jogging; generously for children.',
          'Hepatitis B: based on individual assessment.',
          'Japanese encephalitis: in many states, including Goa and Kerala; main season May to November, especially in the north – in the south sometimes longer or all year round. Recommended mainly for stays of more than four weeks, repeated trips, outbreaks and foreseeable stays near rice fields or pig farming – including outside rural areas.',
          'Dengue and chikungunya: vaccination only in specific situations. In August 2026 a cluster of chikungunya cases was reported in Kerala (mainly Thiruvananthapuram) – for trips there we check whether vaccination makes sense.',
        ],
      },
      links: [typhoidLink, rabiesLink, jeLink],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['Auf den klassischen Reiserouten ist das Malariarisiko gering.'],
        en: ['On the classic travel routes the malaria risk is low.'],
      },
      list: {
        de: [
          'Geringes Risiko: Delhi, Mumbai, Kalkutta, Rajasthan, Goa, Kerala, die meisten anderen Regionen und Städte sowie die Andamanen und Nikobaren – die DTG empfiehlt konsequenten Mückenschutz.',
          'Mittleres Risiko: Teilgebiete im Osten und Nordosten – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
          'Hohes Risiko: ein Gebiet im Süden von Chhattisgarh um die Stadt Geedam – hier empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme.',
          'Malariafrei: Höhenlagen über 2.500 Meter in Himachal Pradesh, Jammu und Kaschmir sowie Sikkim.',
        ],
        en: [
          'Low risk: Delhi, Mumbai, Kolkata, Rajasthan, Goa, Kerala, most other regions and cities, and the Andaman and Nicobar Islands – DTG recommends consistent mosquito protection.',
          'Moderate risk: parts of the east and north-east – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
          'High risk: an area in southern Chhattisgarh around the town of Geedam – DTG additionally recommends preventive tablets there.',
          'Malaria-free: altitudes above 2,500 metres in Himachal Pradesh, Jammu and Kashmir, and Sikkim.',
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
          'Reisedurchfall, Hepatitis A und E sowie Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
          'Dengue, Chikungunya und Japanische Enzephalitis, vor allem während und nach dem Monsun – Mückenschutz auch tagsüber.',
          'Tollwut: Streunende Hunde sind häufig; Tierkontakt meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Starke Luftverschmutzung in den Metropolen, vor allem in den Wintermonaten.',
          'Höhenkrankheit beim Trekking im Himalaya.',
        ],
        en: [
          "Travellers' diarrhoea, hepatitis A and E, and typhoid: pay attention to drinking water and food hygiene.",
          'Dengue, chikungunya and Japanese encephalitis, especially during and after the monsoon – mosquito protection during the day as well.',
          'Rabies: stray dogs are common; avoid animal contact. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          'Severe air pollution in the major cities, especially in the winter months.',
          'Altitude sickness when trekking in the Himalayas.',
        ],
      },
      links: [altitudeLink],
    },
    planningSection(),
  ],
  faq: [
    {
      q: { de: 'Ist die Typhus-Impfung für Indien wirklich nötig?', en: 'Is the typhoid vaccine really necessary for India?' },
      a: {
        de: 'Die DTG und die gemeinsame Arbeitsgruppe Reiseimpfungen von STIKO und DTG raten allen Indien-Reisenden dazu – unabhängig von Reisestil und Reisedauer (ein Expertenkonsens, der über die formale STIKO-Empfehlung hinausgeht). Der Grund ist das hohe Typhus-Risiko auf dem indischen Subkontinent mit zunehmend resistenten Erregern. Hygiene bleibt trotzdem wichtig, denn die Impfung schützt nicht vollständig.',
        en: 'DTG and the joint STIKO–DTG working group on travel vaccinations advise it for all travellers to India, regardless of travel style and trip length (an expert consensus that goes beyond the formal STIKO recommendation). The reason is the high typhoid risk on the Indian subcontinent with increasingly resistant strains. Hygiene still matters, as the vaccine does not protect completely.',
      },
    },
    {
      q: { de: 'Was passiert, wenn ich aus Afrika nach Indien einreise?', en: 'What happens if I enter India from Africa?' },
      a: {
        de: 'Entscheidend ist ein vorheriger Aufenthalt in einem Land auf Indiens Gelbfieber-Liste, etwa Kenia, Äthiopien oder Uganda. Wer innerhalb von sechs Tagen vor der Ankunft in einem solchen Gebiet war, auch im Transit, muss ab neun Monaten eine Gelbfieberimpfung nachweisen; sonst droht eine Isolation von bis zu sechs Tagen. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: "What matters is a previous stay in a country on India's yellow fever list, such as Kenya, Ethiopia or Uganda. Anyone who was in such an area within six days before arrival, including in transit, must show proof of yellow fever vaccination from nine months of age; otherwise isolation of up to six days may follow. The entry requirements of the destination country apply.",
      },
    },
    {
      q: { de: 'Brauche ich für eine Rundreise durch Rajasthan Malaria-Tabletten?', en: 'Do I need malaria tablets for a tour of Rajasthan?' },
      a: {
        de: 'Nach den DTG-Empfehlungen 2026 ist das Malariarisiko in Rajasthan, Delhi und den meisten Städten gering; empfohlen wird konsequenter Mückenschutz. Für einzelne Gebiete im Osten gelten andere Empfehlungen, die wir in der Beratung klären.',
        en: 'According to the DTG recommendations 2026, the malaria risk in Rajasthan, Delhi and most cities is low; consistent mosquito protection is recommended. Other recommendations apply to some areas in the east, which we clarify in the consultation.',
      },
    },
  ],
  sourceIds: ['stikoReise2026', 'stikoReiseLaender2026', 'dtgReiseimpfungen2026', 'dtgMalariaLaender2026', 'dtgMalaria2026', 'aaIndien', 'ecdcChikungunya2026', 'whoYellowFeverCountries'],
  lastReviewed: REVIEWED,
  related: [
    { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
    { label: { de: 'Thailand', en: 'Thailand' }, path: '/reiseziele/asien/thailand' },
  ],
};

// ---------------------------------------------------------------------------
// Bali & Indonesien
// ---------------------------------------------------------------------------
const indonesien: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Bali und Indonesien', en: 'Travel vaccinations for Bali and Indonesia' },
    description: {
      de: 'Bali & Indonesien: empfohlene Impfungen, Tollwut auf Bali, Malaria-Risiko nach DTG 2026 und Mückenschutz – reisemedizinische Beratung in Langenfeld.',
      en: 'Bali & Indonesia: recommended vaccinations, rabies on Bali, malaria risk per DTG 2026 and mosquito protection – travel medicine consultation in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Asien', en: 'Destination Asia' },
    lead: {
      de: 'Bali ist das beliebteste Reiseziel Indonesiens; viele kombinieren die Insel mit Java, Lombok oder Flores. Ein wichtiges Thema ist Tollwut. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: "Bali is Indonesia's most popular destination; many combine the island with Java, Lombok or Flores. Rabies is an important topic. Here are the STIKO and DTG recommendations (as of October 2026).",
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: Gelbfieber-Nachweis', en: 'Entry: yellow fever certificate' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Wer aus einem Gelbfieber-Gebiet einreist, muss ab einem Alter von neun Monaten eine Gelbfieberimpfung nachweisen – etwa bei einer Kombination mit Afrika oder Südamerika.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. Travellers aged nine months and older arriving from a yellow fever area must show proof of yellow fever vaccination – for example when combining the trip with Africa or South America.',
        ],
      },
      callout: entryRulesCallout,
    },
    {
      id: 'impfungen',
      heading: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      body: {
        de: ['Für alle Reisenden empfehlen STIKO und DTG aktuelle Standardimpfungen, Hepatitis A und einen vollständigen Polio-Schutz. Je nach Reise kommen weitere hinzu:'],
        en: ['For all travellers, STIKO and DTG recommend up-to-date routine vaccinations, hepatitis A and complete polio protection. Depending on the trip, others are added:'],
      },
      list: {
        de: [
          'Standardimpfungen prüfen und auffrischen, insbesondere Masern.',
          'Hepatitis A: für alle Reisenden.',
          'Polio: vollständige Grundimmunisierung und mindestens eine Auffrischimpfung; fehlende Impfungen holen wir nach.',
          'Tollwut: Auf Bali kommt Tollwut bei Hunden seit Jahren vor; STIKO und DTG stufen das Risiko in Indonesien als hoch ein. Sie empfehlen die vorbeugende Impfung – unabhängig von der Reisedauer –, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, bei einfachen Reisebedingungen oder bei Aktivitäten mit erhöhtem Risiko für Tierkontakte, etwa Rad- oder Rollerfahren und Joggen; bei Kindern großzügig. Wer vorbeugend mit mindestens zwei Dosen geimpft ist, braucht nach einem Biss in der Regel kein – oft schwer erhältliches – Immunglobulin mehr, aber trotzdem sofort eine Wundreinigung und zwei weitere Impfungen. Bei geschwächtem Immunsystem gelten andere Regeln.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei Tattoos, Piercings oder medizinischen Eingriffen.',
          'Japanische Enzephalitis: landesweit, auch auf Bali, ganzjährig. Empfohlen vor allem bei Aufenthalten über vier Wochen, wiederholten Reisen, Ausbrüchen und absehbaren Aufenthalten nahe Reisfeldern oder Schweinehaltung – auch außerhalb ländlicher Gebiete.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen. Das klären wir in der Beratung.',
        ],
        en: [
          'Check and boost routine vaccinations, especially measles.',
          'Hepatitis A: for all travellers.',
          'Polio: a complete primary course and at least one booster; we catch up on any missing doses.',
          'Rabies: rabies in dogs has been present on Bali for years; STIKO and DTG rate the risk in Indonesia as high. They recommend pre-exposure vaccination – regardless of trip length – if care after a bite is not assured locally, for basic travel conditions, or for activities with a higher risk of animal contact such as cycling, riding a scooter or jogging; generously for children. If you have had at least two doses of pre-exposure vaccine, you usually no longer need immunoglobulin – which is often hard to obtain – after a bite, but you still need immediate wound cleaning and two further vaccine doses. Different rules apply if your immune system is weakened.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for tattoos, piercings or medical procedures.',
          'Japanese encephalitis: nationwide, including Bali, all year round. Recommended mainly for stays of more than four weeks, repeated trips, outbreaks and foreseeable stays near rice fields or pig farming – including outside rural areas.',
          'Dengue and chikungunya: vaccination only in specific situations. We clarify this in the consultation.',
        ],
      },
      links: [rabiesLink, jeLink],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['Auf Bali und den meisten beliebten Inseln ist das Malariarisiko gering.'],
        en: ['On Bali and most popular islands the malaria risk is low.'],
      },
      list: {
        de: [
          'Geringes Risiko: Bali, Java, Sumatra, Lombok bis Sumbawa einschließlich der Gili-Inseln sowie West-Flores mit Labuan Bajo und der Komodo-Region – die DTG empfiehlt konsequenten Mückenschutz, aber keine vorbeugenden Tabletten. Jakarta und weitere große Städte gelten als malariafrei.',
          'Mittleres Risiko: unter anderem Kalimantan (Borneo), Ost-Flores, Raja Ampat und die meisten Inseln der Provinz Maluku – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
          'Hohes Risiko: Westneuguinea (Papua) und die Insel Sumba – hier empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme.',
        ],
        en: [
          'Low risk: Bali, Java, Sumatra, Lombok to Sumbawa including the Gili Islands, and western Flores with Labuan Bajo and the Komodo region – DTG recommends consistent mosquito protection but no preventive tablets. Jakarta and other large cities are considered malaria-free.',
          'Moderate risk: among others Kalimantan (Borneo), eastern Flores, Raja Ampat and most islands of Maluku province – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
          'High risk: Western New Guinea (Papua) and the island of Sumba – DTG additionally recommends preventive tablets there.',
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
          'Dengue ganzjährig; bei Reiserückkehrern von Bali wurden 2025/2026 zudem einzelne Zika-Infektionen festgestellt. Zika kann in der Schwangerschaft das Kind schädigen und auch sexuell übertragen werden. Mückenschutz am Tag ist deshalb wichtig; Schwangere und Paare mit Kinderwunsch sollten sich vor der Reise ärztlich beraten lassen.',
          'Tollwut: Kontakt zu Hunden und Affen meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Reisedurchfall, Hepatitis A und Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
          'Methanolvergiftungen durch gepanschte alkoholische Getränke auf Bali und Lombok – nur original verschlossene Getränke trinken, bei Cocktails und Spirituosen besonders vorsichtig sein.',
        ],
        en: [
          'Dengue all year round; in 2025/2026 individual Zika infections were also found in travellers returning from Bali. Zika can harm the unborn child during pregnancy and can also be transmitted sexually. Daytime mosquito protection is therefore important; pregnant women and couples planning a pregnancy should seek medical advice before the trip.',
          'Rabies: avoid contact with dogs and monkeys. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          "Travellers' diarrhoea, hepatitis A and typhoid: pay attention to drinking water and food hygiene.",
          'Methanol poisoning from adulterated alcoholic drinks on Bali and Lombok – drink only factory-sealed drinks and take particular care with cocktails and spirits.',
        ],
      },
      links: [{ label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' }],
    },
    planningSection(),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Bali eine Tollwutimpfung?', en: 'Do I need a rabies vaccination for Bali?' },
      a: {
        de: 'Auf Bali kommt Tollwut bei Hunden vor; STIKO und DTG stufen das Risiko in Indonesien als hoch ein. Die vorbeugende Impfung wird deshalb unabhängig von der Reisedauer empfohlen, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, Sie unter einfachen Bedingungen reisen oder Aktivitäten mit erhöhtem Risiko für Tierkontakte planen, etwa Roller- oder Radfahren, Joggen oder Besuche von Affenwäldern. Nach einem Biss oder Kratzer ist in jedem Fall sofort ärztliche Hilfe nötig – auch wenn Sie geimpft sind.',
        en: 'Rabies occurs in dogs on Bali, and STIKO and DTG rate the risk in Indonesia as high. Pre-exposure vaccination is therefore recommended regardless of trip length if care after a bite is not assured locally, if you travel under basic conditions, or if you plan activities with a higher risk of animal contact, such as riding a scooter or bicycle, jogging or visiting monkey forests. After a bite or scratch, immediate medical help is needed in any case – even if you are vaccinated.',
      },
    },
    {
      q: { de: 'Muss ich für Bali Malaria-Tabletten einnehmen?', en: 'Do I need malaria tablets for Bali?' },
      a: {
        de: 'Nein. Nach den DTG-Empfehlungen 2026 ist das Risiko auf Bali gering und konsequenter Mückenschutz ausreichend. Für Papua, Sumba oder andere Inseln mit höherem Risiko gelten andere Empfehlungen.',
        en: 'No. According to the DTG recommendations 2026, the risk on Bali is low and consistent mosquito protection is sufficient. Other recommendations apply to Papua, Sumba or other islands with a higher risk.',
      },
    },
    {
      q: { de: 'Welche Impfungen sind für zwei Wochen Bali sinnvoll?', en: 'Which vaccinations make sense for two weeks on Bali?' },
      a: {
        de: 'Grundlage sind Hepatitis A, Polio und aktuelle Standardimpfungen. Tollwut, Typhus oder Japanische Enzephalitis klären wir im Gespräch – abhängig von Unterkunft, Aktivitäten und möglichen Tierkontakten.',
        en: 'The basis is hepatitis A, polio and up-to-date routine vaccinations. We discuss rabies, typhoid or Japanese encephalitis in the consultation, depending on accommodation, activities and possible animal contact.',
      },
    },
  ],
  sourceIds: ['stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026', 'aaIndonesien', 'cdcIndonesia', 'whoYellowFeverCountries'],
  lastReviewed: REVIEWED,
  related: [
    { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
    { label: { de: 'Thailand', en: 'Thailand' }, path: '/reiseziele/asien/thailand' },
  ],
};

export const countryList: DestinationCountry[] = [
  { slug: 'thailand', region: 'asien', name: { de: 'Thailand', en: 'Thailand' }, page: thailand },
  { slug: 'indonesien-bali', region: 'asien', name: { de: 'Bali & Indonesien', en: 'Bali & Indonesia' }, page: indonesien },
  { slug: 'indien', region: 'asien', name: { de: 'Indien', en: 'India' }, page: indien },
  { slug: 'kenia', region: 'afrika', name: { de: 'Kenia', en: 'Kenya' }, page: kenia },
  { slug: 'tansania-sansibar', region: 'afrika', name: { de: 'Tansania & Sansibar', en: 'Tanzania & Zanzibar' }, page: tansania },
  { slug: 'vietnam', region: 'asien', name: { de: 'Vietnam', en: 'Vietnam' }, page: vietnam },
  { slug: 'sri-lanka', region: 'asien', name: { de: 'Sri Lanka', en: 'Sri Lanka' }, page: sriLanka },
  { slug: 'philippinen', region: 'asien', name: { de: 'Philippinen', en: 'Philippines' }, page: philippinen },
  { slug: 'brasilien', region: 'lateinamerika', name: { de: 'Brasilien', en: 'Brazil' }, page: brasilien },
  { slug: 'peru', region: 'lateinamerika', name: { de: 'Peru', en: 'Peru' }, page: peru },
  { slug: 'mexiko', region: 'lateinamerika', name: { de: 'Mexiko', en: 'Mexico' }, page: mexiko },
  { slug: 'suedafrika', region: 'afrika', name: { de: 'Südafrika', en: 'South Africa' }, page: suedafrika },
  { slug: 'dominikanische-republik', region: 'lateinamerika', name: { de: 'Dominikanische Republik', en: 'Dominican Republic' }, page: dominikanischeRepublik },
];

export function countriesOfRegion(region: string): DestinationCountry[] {
  return countryList.filter((c) => c.region === region);
}
