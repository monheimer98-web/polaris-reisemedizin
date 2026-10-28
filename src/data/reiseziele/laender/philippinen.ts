/**
 * Länderseite Philippinen (DE/EN). Inhalte nach STIKO/DTG (Epid Bull 27/2026 inkl.
 * Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026, Regionalkarte
 * Malaiischer Archipel) und Auswärtigem Amt (Stand 28.10.2026). Bewusst ohne
 * Präparatenamen (HWG); Malaria-Vorbeugung nur als „vorbeugende Tabletteneinnahme"
 * beschrieben. Einreise- und Ausbruchslagen ändern sich – jährlich und
 * anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  entryRulesCallout, feverCallout, malariaLink, rabiesLink, jeLink, planningSection,
} from '../laenderBausteine';

/** Neue, landesspezifische Quellen – zum Einpflegen in `sources.ts`. */
export const philippinenQuellen = {
  aaPhilippinen: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Philippinen: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'Philippines: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/philippinen-node/philippinensicherheit-212492',
    retrieved: new Date('2026-10-28'),
  },
  cdcPhilippines: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: {
      de: 'Philippinen – Gesundheitsinformationen für Reisende',
      en: 'Philippines – health information for travelers',
    },
    url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/philippines',
    retrieved: new Date('2026-10-28'),
  },
} satisfies Record<string, Source>;

export const philippinen: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für die Philippinen', en: 'Travel vaccinations for the Philippines' },
    description: {
      de: 'Philippinen-Reise: Welche Impfungen sind sinnvoll? Hepatitis A, Tollwut, Japanische Enzephalitis und Malaria-Risiko auf Palawan nach STIKO/DTG 2026 – Beratung in Langenfeld.',
      en: 'Travelling to the Philippines: which vaccinations make sense? Hepatitis A, rabies, Japanese encephalitis and malaria risk on Palawan per STIKO/DTG 2026 – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Asien', en: 'Destination Asia' },
    lead: {
      de: 'Die Philippinen bestehen aus mehr als 7.000 Inseln – viele verbinden Manila mit Cebu, Bohol, Boracay oder Palawan. Wichtige Themen sind Tollwut und, auf Palawan, Malaria. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'The Philippines consist of more than 7,000 islands – many travellers combine Manila with Cebu, Bohol, Boracay or Palawan. Important topics are rabies and, on Palawan, malaria. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: Gelbfieber-Nachweis', en: 'Entry: yellow fever certificate' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Wer aus einem Gelbfieber-Gebiet einreist oder dort mehr als zwölf Stunden im Transit war, muss ab einem Alter von neun Monaten eine Gelbfieberimpfung nachweisen – etwa bei einer Kombination mit Afrika oder Südamerika. Wer aus einem Land mit hohem Polio-Risiko einreist, kann zusätzlich einen Nachweis über eine Polio-Impfung benötigen.',
          'Auf den Philippinen selbst wird Gelbfieber nicht übertragen; eine Impfung zum eigenen Schutz ist deshalb nicht nötig.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. Travellers aged nine months and older who arrive from a yellow fever area, or who spent more than twelve hours in transit there, must show proof of yellow fever vaccination – for example when combining the trip with Africa or South America. Travellers arriving from a country with a high polio risk may also need proof of polio vaccination.',
          'Yellow fever is not transmitted in the Philippines itself, so vaccination for your own protection is not needed.',
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
          'Tollwut: STIKO und DTG stufen das Risiko durch Hunde auf den Philippinen als hoch ein; Impfstoff und Immunglobulin sind nach Angaben des Auswärtigen Amts nicht überall oder nur begrenzt erhältlich. Empfohlen wird die vorbeugende Impfung deshalb – unabhängig von der Reisedauer –, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, bei einfachen Reisebedingungen oder bei Aktivitäten mit erhöhtem Risiko für Tierkontakte, etwa Rad- oder Rollerfahren und Joggen; bei Kindern großzügig. Wer vorbeugend mit mindestens zwei Dosen geimpft ist, braucht nach einem Biss in der Regel kein Immunglobulin mehr, aber trotzdem sofort eine Wundreinigung und weitere Impfungen.',
          'Japanische Enzephalitis: landesweit, Übertragung ganzjährig möglich; Hauptsaison Juli bis Oktober. Empfohlen vor allem bei Aufenthalten über vier Wochen, wiederholten Reisen, Ausbrüchen und absehbaren Aufenthalten nahe Reisfeldern oder Schweinehaltung – auch außerhalb ländlicher Gebiete.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen – gegen Dengue etwa nach einer früheren, im Labor nachgewiesenen Dengue-Infektion, gegen Chikungunya bei aktuellen Ausbrüchen oder bei längeren Aufenthalten mit erhöhtem Risiko für schwere Verläufe, etwa ab 60 Jahren. Das klären wir in der Beratung.',
        ],
        en: [
          'Routine vaccinations: check tetanus, diphtheria, whooping cough, polio and especially measles, and boost if needed.',
          'Hepatitis A: recommended for all travellers.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: STIKO and DTG rate the risk from dogs in the Philippines as high; according to the German Federal Foreign Office, vaccine and immunoglobulin are not available everywhere, or only to a limited extent. Pre-exposure vaccination is therefore recommended – regardless of trip length – if care after a bite is not assured locally, for basic travel conditions, or for activities with a higher risk of animal contact such as cycling, riding a scooter or jogging; generously for children. If you have had at least two doses of pre-exposure vaccine, you usually no longer need immunoglobulin after a bite, but you still need immediate wound cleaning and further vaccine doses.',
          'Japanese encephalitis: nationwide, transmission possible all year round; main season July to October. Recommended mainly for stays of more than four weeks, repeated trips, outbreaks and foreseeable stays near rice fields or pig farming – including outside rural areas.',
          'Dengue and chikungunya: vaccination only in specific situations – against dengue, for example, after a previous laboratory-confirmed dengue infection; against chikungunya during current outbreaks or for longer stays with a higher risk of severe illness, for example from the age of 60. We clarify this in the consultation.',
        ],
      },
      links: [rabiesLink, jeLink, { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: [
          'Auf den meisten Inseln besteht kein Malariarisiko. Wichtigste Ausnahme ist Palawan: Dort steigt das Risiko von Norden nach Süden an.',
        ],
        en: [
          'Most islands have no malaria risk. The main exception is Palawan, where the risk increases from north to south.',
        ],
      },
      list: {
        de: [
          'Malariafrei: Manila und andere große Städte sowie alle hier nicht genannten Landesteile, etwa Bohol und Boracay.',
          'Geringes Risiko: die nördliche Hälfte Palawans mit El Nido sowie Inseln wie Busuanga und Coron, Culion, Cuyo, Cebu und Mindanao mit den Inseln südlich davon – die DTG empfiehlt konsequenten Mückenschutz, aber keine vorbeugenden Tabletten.',
          'Mittleres Risiko: das mittlere Drittel Palawans – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
          'Hohes Risiko: das südliche Drittel Palawans – hier empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme.',
        ],
        en: [
          'Malaria-free: Manila and other large cities, and all parts of the country not listed here, such as Bohol and Boracay.',
          'Low risk: the northern half of Palawan including El Nido, and islands such as Busuanga and Coron, Culion, Cuyo, Cebu, and Mindanao with the islands south of it – DTG recommends consistent mosquito protection but no preventive tablets.',
          'Moderate risk: the middle third of Palawan – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
          'High risk: the southern third of Palawan – DTG additionally recommends preventive tablets there.',
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
          'Dengue ganzjährig im ganzen Land, dazu Chikungunya und Zika – Mückenschutz auch tagsüber. Zika kann in der Schwangerschaft das Kind schädigen; Schwangere und Paare mit Kinderwunsch sollten sich vor der Reise ärztlich beraten lassen.',
          'Tollwut: Kontakt zu Hunden, Katzen und Affen meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Bilharziose in Seen, Flüssen und anderen Binnengewässern – dort nicht baden oder schwimmen.',
          'Leptospirose nach Kontakt mit Süß- oder Überschwemmungswasser, besonders nach Taifunen.',
          'Reisedurchfall, Hepatitis A und E sowie Typhus: auf Trinkwasser- und Lebensmittelhygiene achten.',
        ],
        en: [
          'Dengue all year round throughout the country, as well as chikungunya and Zika – mosquito protection during the day as well. Zika can harm the unborn child during pregnancy; pregnant women and couples planning a pregnancy should seek medical advice before the trip.',
          'Rabies: avoid contact with dogs, cats and monkeys. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          'Schistosomiasis (bilharzia) in lakes, rivers and other inland waters – do not bathe or swim there.',
          'Leptospirosis after contact with fresh water or floodwater, especially after typhoons.',
          "Travellers' diarrhoea, hepatitis A and E, and typhoid: pay attention to drinking water and food hygiene.",
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
          'Taifune: Jährlich ziehen durchschnittlich etwa 20 Taifune über die Philippinen, vor allem in der Regenzeit von Juni bis Dezember. Wetterwarnungen, etwa des philippinischen Wetterdienstes PAGASA, beachten.',
          'Fähren und Boote sind häufig überladen und nicht immer ausreichend mit Rettungsmitteln ausgestattet – wenn möglich andere Verbindungen wählen und Nachtfahrten vermeiden.',
          'Tauchen: Lassen Sie sich vor einem Tauchurlaub tauchmedizinisch untersuchen und beraten.',
          'Medizinische Versorgung: in Manila und anderen großen Städten in der Regel gegeben, auf dem Land einschließlich Rettungswesen oft nicht – eine Auslandsreisekrankenversicherung mit Rücktransport abschließen.',
          'Sicherheit: Für Teile Mindanaos und den Sulu-Archipel gilt eine Teilreisewarnung des Auswärtigen Amts.',
        ],
        en: [
          'Typhoons: on average around 20 typhoons pass over the Philippines every year, mainly in the rainy season from June to December. Follow weather warnings, for example from the Philippine weather service PAGASA.',
          'Ferries and boats are often overloaded and not always adequately equipped with life-saving equipment – choose other connections where possible and avoid night crossings.',
          'Diving: have a diving medical examination and advice before a diving holiday.',
          'Medical care: generally available in Manila and other large cities, often not in rural areas, including emergency services – take out travel health insurance that covers repatriation.',
          'Safety: the German Federal Foreign Office has issued a partial travel warning for parts of Mindanao and the Sulu Archipelago.',
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
      q: { de: 'Brauche ich für Palawan Malaria-Tabletten?', en: 'Do I need malaria tablets for Palawan?' },
      a: {
        de: 'Das hängt vom Ziel auf der Insel ab. Für El Nido und die nördliche Hälfte Palawans stuft die DTG das Risiko als gering ein; dort genügt konsequenter Mückenschutz. Für das südliche Drittel empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme. Für das mittlere Drittel klären wir in der Beratung, ob ein Notfallmedikament sinnvoll ist.',
        en: 'It depends on where on the island you are going. For El Nido and the northern half of Palawan, DTG rates the risk as low; consistent mosquito protection is sufficient there. For the southern third, DTG additionally recommends preventive tablets. For the middle third, we clarify in the consultation whether an emergency standby treatment makes sense.',
      },
    },
    {
      q: { de: 'Brauche ich für die Philippinen eine Tollwutimpfung?', en: 'Do I need a rabies vaccination for the Philippines?' },
      a: {
        de: 'STIKO und DTG stufen das Tollwutrisiko auf den Philippinen als hoch ein. Die vorbeugende Impfung wird deshalb unabhängig von der Reisedauer empfohlen, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, Sie unter einfachen Bedingungen reisen oder Aktivitäten mit erhöhtem Risiko für Tierkontakte planen, etwa Roller- oder Radfahren. Nach einem Biss oder Kratzer ist in jedem Fall sofort ärztliche Hilfe nötig – auch wenn Sie geimpft sind.',
        en: 'STIKO and DTG rate the rabies risk in the Philippines as high. Pre-exposure vaccination is therefore recommended regardless of trip length if care after a bite is not assured locally, if you travel under basic conditions or if you plan activities with a higher risk of animal contact, such as riding a scooter or bicycle. After a bite or scratch, immediate medical help is needed in any case – even if you are vaccinated.',
      },
    },
    {
      q: { de: 'Welche Impfungen sind für Cebu und Bohol sinnvoll?', en: 'Which vaccinations make sense for Cebu and Bohol?' },
      a: {
        de: 'Grundlage sind Hepatitis A und aktuelle Standardimpfungen. Tollwut, Typhus oder Japanische Enzephalitis klären wir im Gespräch – abhängig von Unterkunft, Aktivitäten und möglichen Tierkontakten. Malaria-Tabletten sind nicht nötig: Bohol gilt als malariafrei, auf Cebu ist das Risiko gering.',
        en: 'The basis is hepatitis A and up-to-date routine vaccinations. We discuss rabies, typhoid or Japanese encephalitis in the consultation, depending on accommodation, activities and possible animal contact. Malaria tablets are not needed: Bohol is considered malaria-free, and the risk on Cebu is low.',
      },
    },
  ],
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaPhilippinen', 'cdcPhilippines', 'whoYellowFeverCountries',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
    { label: { de: 'Bali & Indonesien', en: 'Bali & Indonesia' }, path: '/reiseziele/asien/indonesien-bali' },
  ],
};
