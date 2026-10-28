/**
 * Länderseite Sri Lanka (DE/EN). Inhalte nach STIKO/DTG (Epid Bull 27/2026 inkl.
 * Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026) und
 * Auswärtigem Amt (Stand 28.10.2026). Bewusst ohne Präparatenamen (HWG);
 * Malaria-Vorbeugung nur als „vorbeugende Tabletteneinnahme" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  entryRulesCallout, malariaLink, rabiesLink, jeLink, typhoidLink, planningSection,
} from '../laenderBausteine';

/** Neue, landesspezifische Quellen – zum Einpflegen in `sources.ts`. */
export const sriLankaQuellen = {
  aaSriLanka: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Sri Lanka: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'Sri Lanka: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/srilanka-node/srilankasicherheit-212254',
    retrieved: new Date('2026-10-28'),
  },
  whoSriLankaMalariaFree: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'WHO zertifiziert Sri Lanka als malariafrei (Pressemitteilung vom 05.09.2016)',
      en: 'WHO certifies Sri Lanka malaria-free (news release, 5 September 2016)',
    },
    url: 'https://www.who.int/southeastasia/news/detail/05-09-2016-who-certifies-sri-lanka-malaria-free',
    retrieved: new Date('2026-10-28'),
  },
} satisfies Record<string, Source>;

export const sriLanka: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Sri Lanka', en: 'Travel vaccinations for Sri Lanka' },
    description: {
      de: 'Sri-Lanka-Reise: Hepatitis A, Tollwut, Typhus und Dengue-Schutz nach STIKO/DTG 2026 – Malaria-Tabletten sind nicht nötig. Reisemedizinische Beratung in Langenfeld.',
      en: 'Travelling to Sri Lanka: hepatitis A, rabies, typhoid and dengue protection per STIKO/DTG 2026 – no malaria tablets needed. Travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Asien', en: 'Destination Asia' },
    lead: {
      de: 'Sri Lanka verbindet Kulturdreieck, Teeplantagen im Bergland, Nationalparks und lange Strände. Malaria gibt es dort nicht mehr – wichtig sind dafür Dengue, Tollwut und Hygiene. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Sri Lanka combines the Cultural Triangle, tea plantations in the hill country, national parks and long beaches. There is no longer any malaria – dengue, rabies and hygiene matter instead. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: Gelbfieber-Nachweis', en: 'Entry: yellow fever certificate' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Wer aus einem Gelbfieber-Gebiet einreist oder dort mehr als zwölf Stunden im Transit war, muss ab einem Alter von neun Monaten eine Gelbfieberimpfung nachweisen – etwa bei einer Kombination mit Ostafrika oder Südamerika.',
          'In Sri Lanka selbst wird Gelbfieber nicht übertragen; eine Impfung zum eigenen Schutz ist deshalb nicht nötig.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. Travellers aged nine months and older who arrive from a yellow fever area, or who spent more than twelve hours in transit there, must show proof of yellow fever vaccination – for example when combining the trip with East Africa or South America.',
          'Yellow fever is not transmitted in Sri Lanka itself, so vaccination for your own protection is not needed.',
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
          'Typhus: in Sri Lanka verbreitet. Empfohlen bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden. Die Empfehlung für alle Reisenden, die für Indien gilt, besteht für Sri Lanka nicht.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, Tattoos oder Piercings, medizinischen Eingriffen oder neuen Sexualkontakten.',
          'Tollwut: STIKO und DTG stufen das Risiko durch Hunde in Sri Lanka als hoch ein; übertragen wird Tollwut auch durch Affen, etwa an Tempelanlagen. Impfstoff und Immunglobulin sind im Land nach Angaben des Auswärtigen Amts nicht immer oder nur begrenzt erhältlich. Empfohlen wird die vorbeugende Impfung deshalb – unabhängig von der Reisedauer –, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, bei einfachen Reisebedingungen oder bei Aktivitäten mit erhöhtem Risiko für Tierkontakte, etwa Rad- oder Rollerfahren und Joggen; bei Kindern großzügig.',
          'Japanische Enzephalitis: im ganzen Land außer im zentralen Bergland, Übertragung ganzjährig möglich; Hauptsaison November bis Februar. Empfohlen vor allem bei Aufenthalten über vier Wochen, wiederholten Reisen, Ausbrüchen und absehbaren Aufenthalten nahe Reisfeldern oder Schweinehaltung – auch außerhalb ländlicher Gebiete.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen. Wer bereits eine im Labor nachgewiesene Dengue-Infektion hatte, sollte die Dengue-Impfung wegen der hohen Fallzahlen 2026 besonders prüfen lassen. Gegen Chikungunya kommt eine Impfung bei Ausbrüchen oder bei längeren Aufenthalten mit erhöhtem Risiko für schwere Verläufe infrage, etwa ab 60 Jahren. Das klären wir in der Beratung.',
        ],
        en: [
          'Routine vaccinations: check tetanus, diphtheria, whooping cough, polio and especially measles, and boost if needed.',
          'Hepatitis A: recommended for all travellers.',
          'Typhoid: common in Sri Lanka. Recommended for basic travel conditions, longer stays or visits to family and friends. The recommendation for all travellers that applies to India does not apply to Sri Lanka.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: STIKO and DTG rate the risk from dogs in Sri Lanka as high; rabies is also transmitted by monkeys, for example at temple sites. According to the German Federal Foreign Office, vaccine and immunoglobulin are not always available in the country, or only to a limited extent. Pre-exposure vaccination is therefore recommended – regardless of trip length – if care after a bite is not assured locally, for basic travel conditions, or for activities with a higher risk of animal contact such as cycling, riding a scooter or jogging; generously for children.',
          'Japanese encephalitis: throughout the country except the central hill country, transmission possible all year round; main season November to February. Recommended mainly for stays of more than four weeks, repeated trips, outbreaks and foreseeable stays near rice fields or pig farming – including outside rural areas.',
          'Dengue and chikungunya: vaccination only in specific situations. Anyone who has already had a laboratory-confirmed dengue infection should have dengue vaccination checked in particular, given the high case numbers in 2026. Vaccination against chikungunya may be considered during outbreaks or for longer stays with a higher risk of severe illness, for example from the age of 60. We clarify this in the consultation.',
        ],
      },
      links: [rabiesLink, typhoidLink, jeLink],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: [
          'Sri Lanka ist malariafrei: Die WHO hat das Land 2016 als frei von Malaria zertifiziert, und auch nach den DTG-Empfehlungen 2026 besteht kein Malariarisiko. Eine vorbeugende Tabletteneinnahme oder ein Notfallmedikament ist nicht nötig.',
        ],
        en: [
          'Sri Lanka is malaria-free: WHO certified the country as free of malaria in 2016, and according to the DTG recommendations 2026 there is no malaria risk either. Neither preventive tablets nor an emergency standby treatment is needed.',
        ],
      },
      list: {
        de: [
          'Einzelne eingeschleppte Malariafälle können vorkommen.',
          'Mückenschutz bleibt trotzdem wichtig – wegen Dengue, Chikungunya und Japanischer Enzephalitis.',
          'Wer Sri Lanka mit einem Malariagebiet kombiniert, etwa Indien oder Ostafrika, braucht für diesen Reiseabschnitt eine eigene Malaria-Beratung.',
        ],
        en: [
          'Isolated imported malaria cases can occur.',
          'Mosquito protection is still important – because of dengue, chikungunya and Japanese encephalitis.',
          'If you combine Sri Lanka with a malaria area, such as India or East Africa, you need separate malaria advice for that part of the trip.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Fieber nach der Reise', en: 'Fever after the trip' },
        text: {
          de: 'Fieber während der Reise oder in den Wochen danach sollte ärztlich abgeklärt werden – in Sri Lanka vor allem wegen Dengue. Weisen Sie dabei auf Ihre Reise hin. Waren Sie zusätzlich in einem Malariagebiet, muss Fieber sofort abgeklärt werden.',
          en: 'Fever during the trip or in the weeks afterwards should be checked by a doctor – in Sri Lanka mainly because of dengue. Mention your trip. If you were also in a malaria area, fever must be checked immediately.',
        },
      },
      links: [malariaLink],
    },
    {
      id: 'risiken',
      heading: { de: 'Weitere Gesundheitsrisiken', en: 'Other health risks' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Dengue: Sri Lanka hat 2026 bis Ende September mehr als 100.000 Fälle gemeldet, gut die Hälfte in der Westprovinz mit Colombo und Gampaha. Mückenschutz auch tagsüber ist besonders wichtig.',
          'Chikungunya wird ebenfalls von tagaktiven Mücken übertragen und kann lange anhaltende Gelenkschmerzen verursachen.',
          'Tollwut: Kontakt zu Hunden, Katzen und Affen meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Leptospirose und Hantavirus-Infektionen nach Kontakt mit Süßwasser, Schlamm oder Ausscheidungen von Nagetieren, besonders nach Überschwemmungen – stehende und langsam fließende Gewässer meiden.',
          'Reisedurchfall, Hepatitis A und E sowie Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
          'Giftschlangen: auf dem Land feste Schuhe tragen und nachts eine Taschenlampe benutzen.',
        ],
        en: [
          'Dengue: by the end of September 2026 Sri Lanka had reported more than 100,000 cases, just over half of them in Western Province with Colombo and Gampaha. Mosquito protection during the day as well is particularly important.',
          'Chikungunya is also transmitted by day-biting mosquitoes and can cause long-lasting joint pain.',
          'Rabies: avoid contact with dogs, cats and monkeys. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          'Leptospirosis and hantavirus infections after contact with fresh water, mud or rodent excreta, especially after flooding – avoid standing and slow-flowing water.',
          "Travellers' diarrhoea, hepatitis A and E, and typhoid: pay attention to drinking water and food hygiene.",
          'Venomous snakes: wear sturdy shoes in rural areas and use a torch at night.',
        ],
      },
      links: [
        { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' },
        { label: { de: 'Chikungunya', en: 'Chikungunya' }, path: '/krankheitsbilder/chikungunya' },
      ],
    },
    {
      id: 'reisetipps',
      heading: { de: 'Tipps für unterwegs', en: 'Tips for your trip' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Straßenverkehr: Das Auswärtige Amt rät nachdrücklich davon ab, selbst ein Fahrzeug zu mieten. Besser sind Bahn oder ein Mietwagen mit einheimischem Fahrer; Nachtfahrten außerhalb der Städte vermeiden. Nach einem Unfall drohen langwierige Verfahren und Ausreisesperren.',
          'Medikamente: Nicht alle Medikamente sind im Land verlässlich erhältlich, besonders auf dem Land. Regelmäßig benötigte Medikamente in ausreichender Menge mitnehmen, am besten mit einer ärztlichen Bescheinigung auf Englisch.',
          'Medizinische Versorgung: in Colombo teils auf hohem Niveau, auf dem Land eingeschränkt – eine Auslandsreisekrankenversicherung mit Rücktransport abschließen.',
          'Monsun: Regenzeit im Südwesten etwa Juni bis Oktober, im Nordosten Dezember bis März; Starkregen und Überschwemmungen sind aber das ganze Jahr möglich.',
          'Affen an Tempeln und Aussichtspunkten nicht füttern und Essen verschlossen halten.',
          'Die UV-Strahlung ist intensiv: Sonnenschutz, Kopfbedeckung und ausreichend trinken.',
        ],
        en: [
          'Road traffic: the German Federal Foreign Office strongly advises against renting a vehicle yourself. Trains or a hire car with a local driver are better; avoid driving at night outside towns. After an accident, lengthy proceedings and exit bans are likely.',
          'Medicines: not all medicines are reliably available in the country, especially in rural areas. Bring enough of any medicines you take regularly, ideally with a doctor\'s certificate in English.',
          'Medical care: partly of a high standard in Colombo, limited in rural areas – take out travel health insurance that covers repatriation.',
          'Monsoon: rainy season in the south-west roughly June to October, in the north-east December to March; heavy rain and flooding are possible all year round, however.',
          'Do not feed monkeys at temples and viewpoints, and keep food sealed.',
          'UV radiation is intense: use sun protection, wear a hat and drink enough.',
        ],
      },
      links: [
        { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
        { label: { de: 'Reiseapotheke – Checkliste', en: 'Travel first-aid kit – checklist' }, path: '/reiseapotheke' },
      ],
    },
    planningSection({
      de: 'Für die vorbeugende Tollwutimpfung sind mindestens zwei Termine im Abstand von einer Woche nötig – planen Sie dafür etwas Vorlauf ein.',
      en: 'Pre-exposure rabies vaccination needs at least two appointments one week apart – allow some lead time.',
    }),
  ],
  faq: [
    {
      q: { de: 'Gibt es in Sri Lanka Malaria?', en: 'Is there malaria in Sri Lanka?' },
      a: {
        de: 'Nein. Die WHO hat Sri Lanka 2016 als malariafrei zertifiziert; nach den DTG-Empfehlungen 2026 besteht kein Malariarisiko. Malaria-Tabletten sind deshalb nicht nötig – Mückenschutz wegen Dengue aber schon.',
        en: 'No. WHO certified Sri Lanka as malaria-free in 2016; according to the DTG recommendations 2026 there is no malaria risk. Malaria tablets are therefore not needed – mosquito protection against dengue is, however.',
      },
    },
    {
      q: { de: 'Brauche ich für Sri Lanka eine Tollwutimpfung?', en: 'Do I need a rabies vaccination for Sri Lanka?' },
      a: {
        de: 'STIKO und DTG stufen das Tollwutrisiko in Sri Lanka als hoch ein, und Impfstoff sowie Immunglobulin sind vor Ort nicht immer verfügbar. Die vorbeugende Impfung wird deshalb unabhängig von der Reisedauer empfohlen, wenn die Versorgung nach einem Biss nicht gesichert ist, Sie unter einfachen Bedingungen reisen oder Aktivitäten mit erhöhtem Risiko für Tierkontakte planen. Nach einem Biss oder Kratzer ist in jedem Fall sofort ärztliche Hilfe nötig – auch wenn Sie geimpft sind.',
        en: 'STIKO and DTG rate the rabies risk in Sri Lanka as high, and vaccine and immunoglobulin are not always available locally. Pre-exposure vaccination is therefore recommended regardless of trip length if care after a bite is not assured, if you travel under basic conditions or if you plan activities with a higher risk of animal contact. After a bite or scratch, immediate medical help is needed in any case – even if you are vaccinated.',
      },
    },
    {
      q: { de: 'Wie ernst ist Dengue in Sri Lanka?', en: 'How serious is dengue in Sri Lanka?' },
      a: {
        de: 'Dengue ist 2026 in Sri Lanka sehr häufig, besonders in der Westprovinz mit Colombo. Meist verläuft sie mit Fieber, Hautausschlag und starken Gliederschmerzen, selten aber auch schwer. Der wichtigste Schutz ist Mückenschutz am Tag. Eine Impfung kommt vor allem für Menschen infrage, die bereits eine im Labor nachgewiesene Dengue-Infektion hatten.',
        en: 'Dengue is very common in Sri Lanka in 2026, especially in Western Province with Colombo. It usually causes fever, a rash and severe aches in the limbs, but can occasionally be serious. The most important protection is daytime mosquito protection. Vaccination is mainly an option for people who have already had a laboratory-confirmed dengue infection.',
      },
    },
  ],
  // ecdcDengue2026 ist in vietnam.ts (vietnamQuellen) definiert.
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgReiseimpfungen2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaSriLanka', 'whoSriLankaMalariaFree', 'ecdcDengue2026', 'whoYellowFeverCountries',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
    { label: { de: 'Indien', en: 'India' }, path: '/reiseziele/asien/indien' },
  ],
};
