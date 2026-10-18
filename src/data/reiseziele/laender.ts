/**
 * Länderseiten unter /reiseziele/<region>/<land> (DE/EN). Inhalte nach
 * STIKO/DTG (Epid Bull 27/2026 inkl. Ländertabellen), DTG-Malaria 2026 und
 * Auswärtigem Amt, Stand 18.10.2026. Bewusst ohne Präparatenamen (HWG);
 * Malaria-Vorbeugung nur als „vorbeugende Tabletteneinnahme" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage, ContentSection, Localized, SectionCallout } from '../types';

export interface DestinationCountry {
  /** URL-Slug unter /reiseziele/<region>/ (DE und EN gleich). */
  slug: string;
  /** Slug der Region aus `regions.ts`. */
  region: string;
  name: Localized;
  page: ClinicalPage;
}

const REVIEWED = new Date('2026-10-18');

const entryRulesCallout: SectionCallout = {
  variant: 'important',
  title: { de: 'Einreisevorschriften prüfen', en: 'Check the entry requirements' },
  text: {
    de: 'Maßgeblich sind die Einreisevorschriften des Ziellandes. Prüfen Sie vor der Abreise die aktuellen Hinweise des Auswärtigen Amts – besonders bei Kombinationsreisen und langen Umstiegen.',
    en: 'The entry requirements of the destination country apply. Check the current advice of the German Federal Foreign Office before departure – especially for combined trips and long layovers.',
  },
};

const feverCallout: SectionCallout = {
  variant: 'caution',
  title: { de: 'Fieber nach der Reise', en: 'Fever after the trip' },
  text: {
    de: 'Fieber während oder bis zu Monate nach einer Reise in ein Malariagebiet muss sofort ärztlich abgeklärt werden. Weisen Sie dabei auf Ihre Reise hin.',
    en: 'Fever during or up to months after a trip to a malaria area must be checked by a doctor immediately. Mention your trip.',
  },
};

const malariaLink = { label: { de: 'Malaria-Beratung', en: 'Malaria advice' }, path: '/leistungen/malaria' };
const yellowFeverLink = { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' };
const rabiesLink = { label: { de: 'Tollwut', en: 'Rabies' }, path: '/krankheitsbilder/tollwut' };
const jeLink = { label: { de: 'Japanische Enzephalitis', en: 'Japanese encephalitis' }, path: '/krankheitsbilder/japanische-enzephalitis' };
const typhoidLink = { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' };
const altitudeLink = { label: { de: 'Höhenmedizin', en: 'Altitude medicine' }, path: '/leistungen/hoehenmedizin' };

/** Gemeinsamer Abschlussabschnitt „Reise planen". */
function planningSection(extra?: Localized): ContentSection {
  return {
    id: 'planung',
    heading: { de: 'Reise planen', en: 'Planning your trip' },
    body: {
      de: [
        'In unserer reisemedizinischen Sprechstunde in Langenfeld prüfen wir Ihren Impfpass und stellen einen Impf- und Vorsorgeplan für Ihre gesamte Route zusammen – idealerweise sechs bis acht Wochen vor der Abreise. Auch kurzfristig ist noch einiges möglich.',
        ...(extra ? [extra.de] : []),
      ],
      en: [
        'In our travel medicine clinic in Langenfeld we review your vaccination record and draw up a vaccination and prevention plan for your entire route – ideally six to eight weeks before departure. Even at short notice a lot is still possible.',
        ...(extra ? [extra.en] : []),
      ],
    },
    links: [
      { label: { de: 'Wann vor der Reise impfen?', en: 'When to get vaccinated?' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
      { label: { de: 'Kosten & Erstattung', en: 'Costs & reimbursement' }, path: '/ratgeber/reiseimpfung-kosten-krankenkasse' },
      { label: { de: 'Termin buchen', en: 'Book an appointment' }, path: '/termin' },
    ],
  };
}

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
          'Tollwut: vorbeugend bei Aufenthalten über vier Wochen oder wiederholten Reisen, wenn zusätzlich Tierkontakte wahrscheinlich sind oder die Behandlung nach einem Biss vor Ort nicht gesichert ist; bei Kindern großzügig.',
          'Japanische Enzephalitis: landesweit, Hauptsaison Mai bis Oktober, besonders im Norden. Empfohlen vor allem bei längeren oder wiederholten Aufenthalten und bei Aufenthalten nahe Reisfeldern oder Schweinehaltung.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen, etwa nach einer früheren, im Labor nachgewiesenen Dengue-Infektion. Das klären wir in der Beratung.',
        ],
        en: [
          'Routine vaccinations: check tetanus, diphtheria, whooping cough, polio and especially measles, and boost if needed.',
          'Hepatitis A: recommended for all travellers.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: pre-exposure vaccination for stays of more than four weeks or repeated trips if, in addition, animal contact is likely or treatment after a bite is not assured locally; generously for children.',
          'Japanese encephalitis: nationwide, main season May to October, especially in the north. Recommended mainly for longer or repeated stays and for stays near rice fields or pig farming.',
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
          'Malariafrei: Bangkok, Chiang Mai, Chiang Rai und Pattaya.',
          'Geringes Risiko: das übrige Land, auch Phuket, Koh Samui, Koh Phangan, Koh Lanta und andere Inseln – Mückenschutz.',
          'Mittleres Risiko: das Grenzgebiet zu Myanmar und die Insel Little Koh Chang – Mückenschutz; bei Reisen fern ärztlicher Versorgung gegebenenfalls ein Notfallmedikament zur Selbstbehandlung nach ärztlicher Beratung.',
        ],
        en: [
          'Malaria-free: Bangkok, Chiang Mai, Chiang Rai and Pattaya.',
          'Low risk: the rest of the country, including Phuket, Koh Samui, Koh Phangan, Koh Lanta and other islands – mosquito protection.',
          'Moderate risk: the border area with Myanmar and the island of Little Koh Chang – mosquito protection; for trips far from medical care, possibly an emergency standby treatment after medical advice.',
        ],
      },
      links: [malariaLink],
    },
    {
      id: 'risiken',
      heading: { de: 'Weitere Gesundheitsrisiken', en: 'Other health risks' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Dengue ganzjährig, vor allem in der Regenzeit – Mückenschutz auch tagsüber.',
          'Tollwut: Kontakt zu Hunden, Katzen und Affen meiden; Bisse und Kratzer sofort ärztlich versorgen lassen.',
          'Reisedurchfall, Hepatitis A und Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
          'Leptospirose und Melioidose nach Kontakt mit Süßwasser, Schlamm oder Erde, besonders nach Überschwemmungen.',
          'Luftverschmutzung in Bangkok und Chiang Mai, vor allem in der Trockenzeit von November bis April.',
        ],
        en: [
          'Dengue all year round, especially in the rainy season – mosquito protection during the day as well.',
          'Rabies: avoid contact with dogs, cats and monkeys; have bites and scratches treated by a doctor immediately.',
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
          'Unabhängig von der Pflicht empfehlen WHO, STIKO und DTG die Gelbfieberimpfung für die meisten Landesteile. Nicht generell empfohlen ist sie, wenn Sie ausschließlich Nairobi, Mombasa, die Küstenbezirke Kilifi, Kwale, Lamu, Malindi und Tana River oder den Nordosten besuchen. Nach Gelbfieberfällen im Landesinneren raten STIKO und DTG jedoch, die Impfung großzügig zu empfehlen.',
          'Geimpft wird nur in einer staatlich autorisierten Gelbfieber-Impfstelle, mindestens zehn Tage vor der Einreise. Das Zertifikat gilt lebenslang.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. Travellers aged one year and older arriving from a yellow fever area must show proof of yellow fever vaccination.',
          'Regardless of the requirement, WHO, STIKO and DTG recommend yellow fever vaccination for most parts of the country. It is not generally recommended if you visit only Nairobi, Mombasa, the coastal districts of Kilifi, Kwale, Lamu, Malindi and Tana River, or the north-east. After yellow fever cases inland, however, STIKO and DTG advise recommending the vaccination generously.',
          'Vaccination is only given at a state-authorised yellow fever vaccination centre, at least ten days before entry. The certificate is valid for life.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Weiterreise nach Kenia', en: 'Travelling on from Kenya' },
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
          'Polio: vollständiger Schutz; Auffrischung, wenn die letzte Impfung länger als zehn Jahre zurückliegt.',
          'Tollwut: Das Risiko durch Hunde ist hoch, Impfstoff und vor allem Immunglobulin sind vor Ort nur begrenzt verfügbar. STIKO und DTG empfehlen die vorbeugende Impfung unabhängig von der Reisedauer, wenn die Versorgung nach einem Biss nicht gesichert ist oder Tierkontakte wahrscheinlich sind.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung.',
          'Meningokokken ACWY: bei engem Kontakt zur Bevölkerung, längeren Aufenthalten oder Arbeit im Gesundheitswesen; Erkrankungen häufen sich in den Trockenzeiten.',
        ],
        en: [
          'Check and boost routine vaccinations, especially measles – Kenya has repeated outbreaks.',
          'Hepatitis A: for all travellers.',
          'Polio: complete protection; booster if the last dose was more than ten years ago.',
          'Rabies: the risk from dogs is high, and vaccine and especially immunoglobulin are only available to a limited extent locally. STIKO and DTG recommend pre-exposure vaccination regardless of trip length if care after a bite is not assured or animal contact is likely.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment.',
          'Meningococcal ACWY: for close contact with the local population, longer stays or healthcare work; cases cluster in the dry seasons.',
        ],
      },
      links: [rabiesLink, typhoidLink, { label: { de: 'Meningokokken', en: 'Meningococcal disease' }, path: '/krankheitsbilder/meningokokken' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['Malaria ist in Kenia das wichtigste Reiserisiko. Fast alle Infektionen sind Malaria tropica, die gefährlichste Form.'],
        en: ['Malaria is the most important travel risk in Kenya. Almost all infections are falciparum malaria, the most dangerous form.'],
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
          de: 'Anfang Oktober 2026 wurde in Kenia ein eingeschleppter Ebola-Fall gemeldet; an den Flughäfen Nairobi und Mombasa wird bei der Einreise Fieber gemessen. Prüfen Sie vor der Abreise die aktuellen Hinweise des Auswärtigen Amts.',
          en: 'In early October 2026 an imported Ebola case was reported in Kenya; temperature screening takes place on arrival at Nairobi and Mombasa airports. Check the current advice of the German Federal Foreign Office before departure.',
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
          'Einen Nachweis brauchen Reisende ab einem Jahr, die aus einem Gelbfieber-Gebiet wie Kenia oder Uganda einreisen oder dort länger als zwölf Stunden im Transit waren. Sansibar prüft das auch bei Ankunft vom tansanischen Festland. Fehlt der Nachweis, kann am Einreiseort auf eigene Kosten geimpft werden.',
          'Zum eigenen Schutz wird die Gelbfieberimpfung für Tansania nicht empfohlen, weil das Übertragungsrisiko dort gering ist.',
        ],
        en: [
          'No yellow fever vaccination is required when entering directly from Germany – including Zanzibar. This also applies to a stopover in a yellow fever area as long as it lasts less than twelve hours and you do not leave the airport.',
          'Proof is required for travellers aged one year and older who arrive from a yellow fever area such as Kenya or Uganda, or who spent more than twelve hours in transit there. Zanzibar also checks this on arrival from the Tanzanian mainland. Without proof, you may be vaccinated at the point of entry at your own expense.',
          'Yellow fever vaccination for your own protection is not recommended for Tanzania, as the transmission risk there is low.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Kombination mit Kenia', en: 'Combined with Kenya' },
        text: {
          de: 'Die beliebte Kombination aus Kenia-Safari und Sansibar erfordert einen gültigen Gelbfieber-Nachweis. Die Impfung muss mindestens zehn Tage vor der Einreise erfolgen. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
          en: 'The popular combination of a Kenya safari and Zanzibar requires a valid yellow fever certificate. The vaccination must be given at least ten days before entry. The entry requirements of the destination country apply.',
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
          'Polio: vollständiger, aufgefrischter Schutz. Bei Aufenthalten über vier Wochen soll die letzte Polio-Impfung nach WHO-Vorgabe vier Wochen bis zwölf Monate vor der Ausreise liegen und im Internationalen Impfausweis eingetragen sein.',
          'Tollwut: Das Risiko durch Hunde ist hoch, Impfstoff und Immunglobulin sind vor Ort teils nur begrenzt verfügbar. STIKO und DTG empfehlen die vorbeugende Impfung unabhängig von der Reisedauer, wenn die Versorgung nach einem Biss nicht gesichert ist oder Tierkontakte wahrscheinlich sind.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung.',
          'Meningokokken ACWY: bei engem Kontakt zur Bevölkerung oder längeren Aufenthalten; Erkrankungen treten vor allem von Januar bis April im Norden und Westen auf.',
          'Cholera: für Touristen in der Regel nicht nötig, nur bei besonderer Gefährdung, etwa in Hilfseinsätzen.',
        ],
        en: [
          'Check and boost routine vaccinations, especially measles.',
          'Hepatitis A: for all travellers.',
          'Polio: complete, boosted protection. For stays of more than four weeks, the WHO requires the last polio dose to be given four weeks to twelve months before departure from the country and recorded in the international certificate of vaccination.',
          'Rabies: the risk from dogs is high, and vaccine and immunoglobulin may be only partly available locally. STIKO and DTG recommend pre-exposure vaccination regardless of trip length if care after a bite is not assured or animal contact is likely.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment.',
          'Meningococcal ACWY: for close contact with the local population or longer stays; cases occur mainly from January to April in the north and west.',
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
        de: 'Bei Aufenthalten über vier Wochen soll nach WHO-Vorgabe die letzte Polio-Impfung vier Wochen bis zwölf Monate vor der Ausreise erfolgt und im Internationalen Impfausweis eingetragen sein. Bei kürzeren Reisen genügt ein vollständiger, aufgefrischter Schutz.',
        en: 'For stays of more than four weeks, the WHO requires the last polio dose to be given four weeks to twelve months before departure and recorded in the international certificate of vaccination. For shorter trips, complete and boosted protection is sufficient.',
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
          'Nach den gemeinsamen Reiseimpfempfehlungen von STIKO und DTG sind für alle Indien-Reisenden neben aktuellen Standardimpfungen die Impfungen gegen Hepatitis A und Typhus sinnvoll – Typhus unabhängig vom Reisestil, weil die Krankheit auf dem indischen Subkontinent häufig ist und zunehmend resistente Erreger auftreten.',
        ],
        en: [
          'According to the joint travel vaccination recommendations of STIKO and DTG, all travellers to India should have hepatitis A and typhoid vaccinations in addition to up-to-date routine vaccinations – typhoid regardless of travel style, because the disease is common on the Indian subcontinent and increasingly resistant strains are emerging.',
        ],
      },
      list: {
        de: [
          'Standardimpfungen prüfen und auffrischen, etwa Masern, Tetanus und Polio.',
          'Hepatitis A: für alle Reisenden.',
          'Typhus: für alle Reisenden, auch bei kurzen Reisen und guten Hotels.',
          'Tollwut: Auf Indien entfällt rund ein Drittel der weltweiten Tollwut-Todesfälle, und außerhalb der Großstädte ist die Behandlung nach einem Biss nicht gesichert. STIKO und DTG empfehlen die vorbeugende Impfung deshalb unabhängig von der Reisedauer, wenn die Versorgung vor Ort eingeschränkt ist oder Tierkontakte wahrscheinlich sind.',
          'Hepatitis B: nach individueller Einschätzung.',
          'Japanische Enzephalitis: in vielen Bundesstaaten, auch in Goa und Kerala; Hauptsaison Mai bis November. Empfohlen vor allem bei längeren oder wiederholten Aufenthalten und bei Aufenthalten nahe Reisfeldern oder Schweinehaltung.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen. 2026 wurden in Kerala gehäuft Chikungunya-Fälle gemeldet – bei Reisen dorthin prüfen wir, ob eine Impfung sinnvoll ist.',
        ],
        en: [
          'Check and boost routine vaccinations, such as measles, tetanus and polio.',
          'Hepatitis A: for all travellers.',
          'Typhoid: for all travellers, even on short trips and in good hotels.',
          'Rabies: India accounts for around a third of rabies deaths worldwide, and outside the big cities treatment after a bite is not assured. STIKO and DTG therefore recommend pre-exposure vaccination regardless of trip length if local care is limited or animal contact is likely.',
          'Hepatitis B: based on individual assessment.',
          'Japanese encephalitis: in many states, including Goa and Kerala; main season May to November. Recommended mainly for longer or repeated stays and for stays near rice fields or pig farming.',
          'Dengue and chikungunya: vaccination only in specific situations. In 2026 a cluster of chikungunya cases was reported in Kerala – for trips there we check whether vaccination makes sense.',
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
          'Mittleres Risiko: Teilgebiete im Osten und Nordosten – Mückenschutz; bei Reisen fern ärztlicher Versorgung gegebenenfalls ein Notfallmedikament zur Selbstbehandlung nach ärztlicher Beratung.',
          'Hohes Risiko: ein Gebiet in Chhattisgarh – hier empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme.',
          'Malariafrei: Höhenlagen über 2.500 Meter in Himachal Pradesh, Jammu und Kaschmir sowie Sikkim.',
        ],
        en: [
          'Low risk: Delhi, Mumbai, Kolkata, Rajasthan, Goa, Kerala, most other regions and cities, and the Andaman and Nicobar Islands – DTG recommends consistent mosquito protection.',
          'Moderate risk: parts of the east and north-east – mosquito protection; for trips far from medical care, possibly an emergency standby treatment after medical advice.',
          'High risk: one area in Chhattisgarh – DTG additionally recommends preventive tablets there.',
          'Malaria-free: altitudes above 2,500 metres in Himachal Pradesh, Jammu and Kashmir, and Sikkim.',
        ],
      },
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
          'Tollwut: Streunende Hunde sind häufig; Tierkontakt meiden und Bisse sofort ärztlich versorgen lassen.',
          'Starke Luftverschmutzung in den Metropolen, vor allem in den Wintermonaten.',
          'Höhenkrankheit beim Trekking im Himalaya.',
        ],
        en: [
          "Travellers' diarrhoea, hepatitis A and E, and typhoid: pay attention to drinking water and food hygiene.",
          'Dengue, chikungunya and Japanese encephalitis, especially during and after the monsoon – mosquito protection during the day as well.',
          'Rabies: stray dogs are common; avoid animal contact and have bites treated by a doctor immediately.',
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
        de: 'Die gemeinsamen Empfehlungen von STIKO und DTG sehen sie für alle Indien-Reisenden vor, unabhängig vom Reisestil. Der Grund ist das hohe Typhus-Risiko auf dem indischen Subkontinent mit zunehmend resistenten Erregern. Hygiene bleibt trotzdem wichtig, denn die Impfung schützt nicht vollständig.',
        en: 'The joint STIKO and DTG recommendations advise it for all travellers to India, regardless of travel style. The reason is the high typhoid risk on the Indian subcontinent with increasingly resistant strains. Hygiene still matters, as the vaccine does not protect completely.',
      },
    },
    {
      q: { de: 'Was passiert, wenn ich aus Afrika nach Indien einreise?', en: 'What happens if I enter India from Africa?' },
      a: {
        de: 'Wer innerhalb von sechs Tagen vor der Ankunft in einem Gelbfieber-Gebiet war, auch im Transit, muss ab neun Monaten eine Gelbfieberimpfung nachweisen; sonst droht eine Isolation von bis zu sechs Tagen. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'Anyone who was in a yellow fever area within six days before arrival, including in transit, must show proof of yellow fever vaccination from nine months of age; otherwise isolation of up to six days may follow. The entry requirements of the destination country apply.',
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
          'Polio: vollständiger Schutz; Auffrischung, wenn die letzte Impfung länger als zehn Jahre zurückliegt.',
          'Tollwut: Auf Bali kommt Tollwut bei Hunden seit Jahren vor; STIKO und DTG stufen das Risiko in Indonesien als hoch ein. Sie empfehlen die vorbeugende Impfung unabhängig von der Reisedauer, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist oder Tierkontakte wahrscheinlich sind. Wer vorbeugend geimpft ist, braucht nach einem Biss kein – oft schwer erhältliches – Immunglobulin.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei Tattoos, Piercings oder medizinischen Eingriffen.',
          'Japanische Enzephalitis: landesweit, auch auf Bali, ganzjährig. Empfohlen vor allem bei längeren oder wiederholten Aufenthalten und bei Aufenthalten nahe Reisfeldern oder Schweinehaltung.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen. Das klären wir in der Beratung.',
        ],
        en: [
          'Check and boost routine vaccinations, especially measles.',
          'Hepatitis A: for all travellers.',
          'Polio: complete protection; booster if the last dose was more than ten years ago.',
          'Rabies: rabies in dogs has been present on Bali for years; STIKO and DTG rate the risk in Indonesia as high. They recommend pre-exposure vaccination regardless of trip length if care after a bite is not assured locally or animal contact is likely. If you are vaccinated in advance, you do not need immunoglobulin – which is often hard to obtain – after a bite.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for tattoos, piercings or medical procedures.',
          'Japanese encephalitis: nationwide, including Bali, all year round. Recommended mainly for longer or repeated stays and for stays near rice fields or pig farming.',
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
          'Mittleres Risiko: unter anderem Kalimantan (Borneo), Ost-Flores, Raja Ampat und die meisten Molukken-Inseln – Mückenschutz; bei Reisen fern ärztlicher Versorgung gegebenenfalls ein Notfallmedikament zur Selbstbehandlung nach ärztlicher Beratung.',
          'Hohes Risiko: Westneuguinea (Papua) und die Insel Sumba – hier empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme.',
        ],
        en: [
          'Low risk: Bali, Java, Sumatra, Lombok to Sumbawa including the Gili Islands, and western Flores with Labuan Bajo and the Komodo region – DTG recommends consistent mosquito protection but no preventive tablets. Jakarta and other large cities are considered malaria-free.',
          'Moderate risk: among others Kalimantan (Borneo), eastern Flores, Raja Ampat and most of the Maluku Islands – mosquito protection; for trips far from medical care, possibly an emergency standby treatment after medical advice.',
          'High risk: Western New Guinea (Papua) and the island of Sumba – DTG additionally recommends preventive tablets there.',
        ],
      },
      links: [malariaLink],
    },
    {
      id: 'risiken',
      heading: { de: 'Weitere Gesundheitsrisiken', en: 'Other health risks' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Dengue ganzjährig; bei Reisenden aus Bali wurden zudem einzelne Zika-Infektionen festgestellt. Mückenschutz am Tag ist deshalb wichtig – besonders für Schwangere und Paare mit Kinderwunsch.',
          'Tollwut: Kontakt zu Hunden und Affen meiden; Bisse und Kratzer sofort ärztlich versorgen lassen.',
          'Reisedurchfall, Hepatitis A und Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
          'Methanolvergiftungen durch gepanschte alkoholische Getränke auf Bali und Lombok.',
        ],
        en: [
          'Dengue all year round; individual Zika infections have also been found in travellers returning from Bali. Daytime mosquito protection is therefore important – especially for pregnant women and couples planning a pregnancy.',
          'Rabies: avoid contact with dogs and monkeys; have bites and scratches treated by a doctor immediately.',
          "Travellers' diarrhoea, hepatitis A and typhoid: pay attention to drinking water and food hygiene.",
          'Methanol poisoning from adulterated alcoholic drinks on Bali and Lombok.',
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
        de: 'Auf Bali kommt Tollwut bei Hunden vor, STIKO und DTG stufen das Risiko in Indonesien als hoch ein. Ob eine vorbeugende Impfung sinnvoll ist, hängt von Reisedauer, Aktivitäten und Versorgung vor Ort ab. Nach einem Biss ist in jedem Fall sofort ärztliche Hilfe nötig.',
        en: 'Rabies occurs in dogs on Bali, and STIKO and DTG rate the risk in Indonesia as high. Whether pre-exposure vaccination makes sense depends on trip length, activities and local care. After a bite, immediate medical help is needed in any case.',
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
];

export function countriesOfRegion(region: string): DestinationCountry[] {
  return countryList.filter((c) => c.region === region);
}
