/**
 * Länderseite Peru (DE/EN). Inhalte nach STIKO/DTG (Epid Bull 27/2026 inkl.
 * Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026), WHO-Länderliste
 * (ITH 2022) und Auswärtigem Amt (Stand 28.10.2026); Lagedaten von PAHO und CDC.
 * Bewusst ohne Präparatenamen (HWG); Malaria-Vorbeugung nur als „vorbeugende
 * Tabletteneinnahme" bzw. „Notfallmedikament" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  feverCallout, malariaLink, yellowFeverLink, rabiesLink, typhoidLink, altitudeLink, planningSection,
} from '../laenderBausteine';

/**
 * Neue Quellen – zum Einpflegen in `sources.ts`. Außerdem referenziert die Seite
 * `pahoGelbfieber2026`, `cdcOropouche`, `cdcOropoucheSchwangerschaft` (aus
 * `brasilienQuellen`) und `pahoMasern2026` (aus `mexikoQuellen`).
 */
export const peruQuellen = {
  aaPeru: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Peru: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'Peru: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/peru-node/perusicherheit-211938',
    retrieved: new Date('2026-10-28'),
  },
} satisfies Record<string, Source>;

export const peru: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Peru', en: 'Travel vaccinations for Peru' },
    description: {
      de: 'Peru-Reise: Gelbfieber im Amazonas-Tiefland, Höhe in Cusco und am Titicacasee, Malaria nach DTG 2026 und empfohlene Impfungen – reisemedizinische Beratung in Langenfeld.',
      en: 'Travelling to Peru: yellow fever in the Amazon lowlands, altitude in Cusco and at Lake Titicaca, malaria per DTG 2026 and recommended vaccinations – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Lateinamerika', en: 'Destination Latin America' },
    lead: {
      de: 'Peru reicht von der Wüstenküste über die Anden mit Cusco, Machu Picchu und dem Titicacasee bis ins Amazonas-Tiefland. Je nach Route stehen Höhe, Gelbfieber oder Malaria im Vordergrund. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Peru stretches from the desert coast across the Andes with Cusco, Machu Picchu and Lake Titicaca to the Amazon lowlands. Depending on the route, altitude, yellow fever or malaria take centre stage. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'gelbfieber',
      heading: { de: 'Gelbfieber: im Tiefland ja, im Hochland nein', en: 'Yellow fever: yes in the lowlands, no in the highlands' },
      body: {
        de: [
          'Peru verlangt bei der Einreise keinen Gelbfieber-Nachweis – weder bei Einreise aus Deutschland noch aus anderen Ländern.',
          'Zum eigenen Schutz empfehlen WHO, STIKO und DTG die Impfung ab einem Alter von neun Monaten für Reisen in Gebiete unterhalb von 2.300 Metern in den Regionen Amazonas, Loreto, Madre de Dios, San Martín, Ucayali, Cusco, Puno, Junín, Pasco und Huánuco sowie in ausgewiesene Gebiete von Apurímac, Áncash, Ayacucho, Cajamarca, Huancavelica, La Libertad und Piura. Dazu gehören beliebte Ziele im Regenwald wie Iquitos, Puerto Maldonado mit Tambopata und das Tiefland des Manú-Nationalparks.',
          'Nicht empfohlen ist die Impfung, wenn Sie ausschließlich Lima, Cusco-Stadt, das Heilige Tal, Machu Picchu, den Inka-Pfad, den Titicacasee oder andere Gebiete oberhalb von 2.300 Metern besuchen, ebenso für Gebiete westlich der Anden wie die Küste mit Paracas und Nazca oder Arequipa. Für einzelne Gebiete im äußersten Norden (Tumbes, Lambayeque, Teile von Piura und Cajamarca) wird sie nicht generell empfohlen.',
          'Gelbfieber tritt in Peru regelmäßig auf: 2025 meldete die Panamerikanische Gesundheitsorganisation (PAHO) 49 bestätigte Erkrankungen und 19 Todesfälle; auch Anfang 2026 kam es zu neuen Fällen.',
          'Geimpft wird nur in einer staatlich autorisierten Gelbfieber-Impfstelle, spätestens zehn Tage vor der Reise. Das Zertifikat gilt lebenslang. Liegt Ihre Impfung zehn Jahre oder länger zurück, empfiehlt die STIKO vor einer erneuten Reise in ein Gelbfiebergebiet einmalig eine Auffrischung; für Kinder, Schwangere und Menschen mit geschwächtem Immunsystem gelten besondere Regeln. Ab 60 Jahren soll nach STIKO nur bei einem deutlichen, nicht vermeidbaren Infektionsrisiko geimpft werden – das wägen wir gemeinsam ab.',
        ],
        en: [
          'Peru does not require a yellow fever certificate on entry – neither when arriving from Germany nor from other countries.',
          'For your own protection, WHO, STIKO and DTG recommend vaccination from nine months of age for travel to areas below 2,300 metres in the regions of Amazonas, Loreto, Madre de Dios, San Martín, Ucayali, Cusco, Puno, Junín, Pasco and Huánuco, and to designated areas of Apurímac, Áncash, Ayacucho, Cajamarca, Huancavelica, La Libertad and Piura. This includes popular rainforest destinations such as Iquitos, Puerto Maldonado with Tambopata and the lowlands of Manú National Park.',
          'Vaccination is not recommended if you only visit Lima, Cusco city, the Sacred Valley, Machu Picchu, the Inca Trail, Lake Titicaca or other areas above 2,300 metres, nor for areas west of the Andes such as the coast with Paracas and Nazca, or Arequipa. For some areas in the far north (Tumbes, Lambayeque, parts of Piura and Cajamarca) it is not generally recommended.',
          'Yellow fever occurs regularly in Peru: in 2025 the Pan American Health Organization (PAHO) reported 49 confirmed cases and 19 deaths, and further cases occurred in early 2026.',
          'Vaccination is only given at a state-authorised yellow fever vaccination centre, at least ten days before the trip. The certificate is valid for life. If your vaccination was ten or more years ago, STIKO recommends a single booster before travelling to a yellow fever area again; special rules apply to children, pregnant women and people with a weakened immune system. From the age of 60, STIKO advises vaccinating only if there is a significant, unavoidable risk of infection – we weigh this up together.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Cusco mit Regenwald kombiniert', en: 'Cusco combined with the rainforest' },
        text: {
          de: 'Viele verbinden Cusco und Machu Picchu mit einigen Tagen im Regenwald, etwa in Tambopata oder Manú. Dann ist die Gelbfieberimpfung empfohlen. Für die Weiterreise verlangen unter anderem Bolivien, Paraguay, Costa Rica und Indien nach einem Peru-Aufenthalt einen Nachweis. Maßgeblich sind die Einreisevorschriften des jeweiligen Ziellandes.',
          en: 'Many travellers combine Cusco and Machu Picchu with a few days in the rainforest, for example in Tambopata or Manú. In that case yellow fever vaccination is recommended. For onward travel, Bolivia, Paraguay, Costa Rica and India, among others, require proof after a stay in Peru. The entry requirements of each destination country apply.',
        },
      },
      links: [yellowFeverLink, { label: { de: 'Gelbfieber', en: 'Yellow fever' }, path: '/krankheitsbilder/gelbfieber' }],
    },
    {
      id: 'hoehe',
      heading: { de: 'Höhe: Cusco, Machu Picchu und Titicacasee', en: 'Altitude: Cusco, Machu Picchu and Lake Titicaca' },
      body: {
        de: [
          'Cusco liegt auf rund 3.400 Metern, Puno am Titicacasee auf rund 3.800 Metern, Machu Picchu auf rund 2.400 Metern. Wer aus Lima nach Cusco oder an den Titicacasee fliegt, steigt innerhalb weniger Stunden um mehrere tausend Meter auf. Höhenkrankheit kann ab etwa 2.500 Metern alle Altersgruppen treffen – auch gut trainierte Menschen. Die Beschwerden zeigen sich oft erst nach einigen Stunden oder am Tag nach der Ankunft.',
          'Warnzeichen sind Kopfschmerzen, Appetitlosigkeit, Übelkeit oder Erbrechen, Schwindel und Schlafstörungen. Dann nicht weiter aufsteigen; bessern sich die Beschwerden nach einem Ruhetag nicht oder werden sie stärker, absteigen. Sofort absteigen und ärztliche Hilfe suchen bei Atemnot in Ruhe, Husten, starker Schwäche, Verwirrtheit oder unsicherem Gang – das können Zeichen eines lebensbedrohlichen Höhenlungen- oder Höhenhirnödems sein. Koka-Tee (Mate de Coca) schützt nicht sicher.',
        ],
        en: [
          'Cusco lies at around 3,400 metres, Puno on Lake Titicaca at around 3,800 metres and Machu Picchu at around 2,400 metres. Flying from Lima to Cusco or Lake Titicaca means climbing several thousand metres within a few hours. Altitude sickness can affect all age groups from around 2,500 metres – including fit people. Symptoms often appear only after several hours or on the day after arrival.',
          'Warning signs are headache, loss of appetite, nausea or vomiting, dizziness and poor sleep. Do not go any higher; if symptoms do not improve after a rest day or get worse, descend. Descend immediately and seek medical help if you are breathless at rest, have a cough, feel very weak, become confused or unsteady on your feet – these can be signs of life-threatening fluid on the lungs or brain. Coca tea (mate de coca) does not reliably protect.',
        ],
      },
      list: {
        de: [
          'Die ersten ein bis zwei Tage in der Höhe ruhig angehen, ausreichend trinken und auf Alkohol verzichten.',
          'Route anpassen: Viele übernachten zuerst im tiefer gelegenen Heiligen Tal und fahren erst danach nach Cusco.',
          'Ausflüge auf 4.000 bis 5.000 Meter, etwa zum Regenbogenberg (Vinicunca), erst nach einigen Tagen Akklimatisierung unternehmen.',
          'Vorbeugende Medikamente sind verschreibungspflichtig und nur nach ärztlicher Beratung sinnvoll. Bei Herz- oder Lungenerkrankungen, in der Schwangerschaft und mit Kindern lassen Sie sich vor der Reise beraten.',
        ],
        en: [
          'Take the first one or two days at altitude easy, drink enough and avoid alcohol.',
          'Adapt your route: many travellers first spend the night in the lower-lying Sacred Valley and only then go to Cusco.',
          'Only make excursions to 4,000–5,000 metres, such as Rainbow Mountain (Vinicunca), after a few days of acclimatisation.',
          'Preventive medication requires a prescription and only makes sense after medical advice. If you have heart or lung disease, are pregnant or travel with children, seek advice before the trip.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Medizinische Versorgung in Cusco', en: 'Medical care in Cusco' },
        text: {
          de: 'Nach Angaben des Auswärtigen Amts reichen die Behandlungsmöglichkeiten in Cusco für schwer Erkrankte oder Verletzte oft nicht aus; sie werden nach Lima verlegt. Eine Auslandskrankenversicherung mit Rücktransport ist deshalb wichtig.',
          en: 'According to the German Federal Foreign Office, treatment options in Cusco are often insufficient for seriously ill or injured people, who are transferred to Lima. Travel health insurance including repatriation is therefore important.',
        },
      },
      links: [altitudeLink],
    },
    {
      id: 'impfungen',
      heading: { de: 'Weitere empfohlene Impfungen', en: 'Other recommended vaccinations' },
      body: {
        de: ['Neben Gelbfieber – je nach Route – empfehlen STIKO und DTG für alle Reisenden aktuelle Standardimpfungen und Hepatitis A. Je nach Reise kommen weitere hinzu:'],
        en: ['Besides yellow fever – depending on the route – STIKO and DTG recommend up-to-date routine vaccinations and hepatitis A for all travellers. Depending on the trip, others are added:'],
      },
      list: {
        de: [
          'Masern: Peru hat 2026 einen anhaltenden Masern-Ausbruch mit bis Mitte Oktober fast 2.700 bestätigten Fällen (PAHO). Prüfen Sie Ihren Impfschutz und holen Sie fehlende Impfungen nach. Bei Säuglingen kann die erste Masern-Impfung vor einer solchen Reise schon ab neun Monaten erfolgen.',
          'Weitere Standardimpfungen wie Tetanus, Diphtherie, Keuchhusten und Polio prüfen und bei Bedarf auffrischen.',
          'Hepatitis A: für alle Reisenden.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, Tattoos oder Piercings, medizinischen Eingriffen oder neuen Sexualkontakten.',
          'Tollwut: STIKO und DTG stufen das Risiko durch Hunde als moderat ein; Impfstoff und Immunglobulin sind im Land nach Angaben des Auswärtigen Amts nicht oder nur sehr begrenzt erhältlich. Vorbeugend geimpft wird bei Aufenthalten über vier Wochen oder wiederholten Reisen, wenn zusätzlich die Versorgung nach einem Biss vor Ort nicht gesichert ist, einfache Reisebedingungen bestehen oder Aktivitäten mit erhöhtem Risiko für Tierkontakte geplant sind (etwa Rad fahren, Joggen) – sowie unabhängig von der Reisedauer bei absehbarem Umgang mit Wildtieren oder Fledermäusen. Bei Kindern großzügig.',
          'Dengue und Chikungunya: Impfung nur in bestimmten Situationen, etwa nach einer früheren, im Labor nachgewiesenen Dengue-Infektion oder bei erhöhtem Risiko für einen schweren Chikungunya-Verlauf. Das klären wir in der Beratung.',
        ],
        en: [
          'Measles: Peru has an ongoing measles outbreak in 2026 with almost 2,700 confirmed cases by mid-October (PAHO). Check your protection and catch up on missing doses. Before such a trip, infants can receive their first measles vaccination from nine months of age.',
          'Check other routine vaccinations such as tetanus, diphtheria, whooping cough and polio, and boost if needed.',
          'Hepatitis A: for all travellers.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: STIKO and DTG rate the risk from dogs as moderate; according to the German Federal Foreign Office, vaccine and immunoglobulin are not or only very sparingly available in the country. Pre-exposure vaccination is given for stays of more than four weeks or repeated trips if, in addition, care after a bite is not assured locally, travel conditions are basic or activities with a higher risk of animal contact are planned (such as cycling or jogging) – and, regardless of trip length, if you expect to handle wild animals or bats. Generously for children.',
          'Dengue and chikungunya: vaccination only in specific situations, for example after a previous laboratory-confirmed dengue infection or with an increased risk of severe chikungunya. We clarify this in the consultation.',
        ],
      },
      links: [rabiesLink, typhoidLink, { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['An der Küste und im Hochland gibt es keine Malaria; ein Risiko besteht nur im Tiefland östlich der Anden. Rund 80 Prozent der Infektionen sind Malaria tertiana. Die gefährlichere Malaria tropica (18 Prozent) kommt vor allem in den Regionen Loreto und Amazonas vor.'],
        en: ['There is no malaria on the coast or in the highlands; a risk exists only in the lowlands east of the Andes. Around 80 per cent of infections are vivax malaria. The more dangerous falciparum malaria (18 per cent) occurs mainly in the Loreto and Amazonas regions.'],
      },
      list: {
        de: [
          'Malariafrei: Lima und alle Gebiete westlich der Anden, die Städte Arequipa, Ica, Nazca und Puno sowie Hochlandziele wie Cusco, Machu Picchu und der Titicacasee.',
          'Geringes Risiko: das übrige Tiefland östlich der Anden unterhalb von 2.500 Metern und die tiefer gelegenen Andentäler, einschließlich der Stadt Puerto Maldonado – die DTG empfiehlt konsequenten Mückenschutz.',
          'Mittleres Risiko: Teilgebiete östlich der Anden, die Stadt Iquitos und Flusskreuzfahrten mit Übernachtung auf großen Schiffen in Hochrisikogebieten – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
          'Hohes Risiko: die Region Loreto außerhalb der Stadt Iquitos – auch die Dörfer in der direkten Umgebung und die Gebiete an den Amazonas-Zuflüssen – sowie der Norden der Region Amazonas. Hier empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme.',
        ],
        en: [
          'Malaria-free: Lima and all areas west of the Andes, the cities of Arequipa, Ica, Nazca and Puno, and highland destinations such as Cusco, Machu Picchu and Lake Titicaca.',
          'Low risk: the rest of the lowlands east of the Andes below 2,500 metres and the lower Andean valleys, including the city of Puerto Maldonado – DTG recommends consistent mosquito protection.',
          'Moderate risk: parts of the area east of the Andes, the city of Iquitos and river cruises with overnight stays on large ships in high-risk areas – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
          'High risk: the Loreto region outside the city of Iquitos – including the villages in the immediate surroundings and the areas along the Amazon tributaries – and the north of the Amazonas region. DTG additionally recommends preventive tablets there.',
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
          'Dengue, Chikungunya, Zika und Oropouche-Fieber kommen in Peru vor, vor allem in tiefer gelegenen, warmen Regionen – Mückenschutz auch tagsüber. Oropouche wird vor allem durch winzige Gnitzen übertragen; die meisten Ausbrüche gab es im Amazonasgebiet.',
          'Zika und Oropouche können in der Schwangerschaft auf das ungeborene Kind übergehen und es schädigen. Schwangere und Paare mit Kinderwunsch sollten sich vor der Reise ärztlich beraten lassen.',
          'Leishmaniose und Chagas-Krankheit: auf dem Land in einfachen Unterkünften unter einem Bettnetz schlafen und nicht industriell verarbeitete Frucht- und Zuckerrohrsäfte meiden.',
          'Tollwut: Kontakt zu Hunden und anderen Tieren meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Reisedurchfall sowie Hepatitis A und E: auf Trinkwasser- und Lebensmittelhygiene achten.',
          'Intensive Sonne, besonders in der Höhe – Sonnenschutz für Haut und Augen.',
        ],
        en: [
          'Dengue, chikungunya, Zika and Oropouche fever occur in Peru, mainly in lower-lying, warm regions – mosquito protection during the day as well. Oropouche is mainly transmitted by tiny biting midges; most outbreaks have been in the Amazon region.',
          'Zika and Oropouche can pass to the unborn child during pregnancy and harm it. Pregnant women and couples planning a pregnancy should seek medical advice before the trip.',
          'Leishmaniasis and Chagas disease: in rural areas, sleep under a bed net in basic accommodation and avoid fruit and sugar-cane juices that are not industrially processed.',
          'Rabies: avoid contact with dogs and other animals. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          "Travellers' diarrhoea and hepatitis A and E: pay attention to drinking water and food hygiene.",
          'Intense sun, especially at altitude – protect your skin and eyes.',
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
          'Mückenschutz im Tiefland: Mittel gegen Mücken auf freie Haut auftragen, lange, helle Kleidung tragen und unter einem Moskitonetz schlafen.',
          'Versicherung: Außerhalb von Lima ist die medizinische Versorgung oft eingeschränkt. Eine Auslandskrankenversicherung mit Rücktransport ist wichtig.',
          'Reiseapotheke und regelmäßig benötigte Medikamente mitnehmen, bei Bedarf mit ärztlicher Bescheinigung auf Englisch.',
          'Impfausweis im Original mitführen, besonders bei Weiterreise in Nachbarländer.',
        ],
        en: [
          'Mosquito protection in the lowlands: apply insect repellent to exposed skin, wear long, light-coloured clothing and sleep under a mosquito net.',
          'Insurance: outside Lima, medical care is often limited. Travel health insurance including repatriation is important.',
          'Take a travel first-aid kit and any regular medication, if necessary with a medical certificate in English.',
          'Carry your original vaccination certificate, especially when travelling on to neighbouring countries.',
        ],
      },
      links: [
        { label: { de: 'Reiseapotheke', en: 'Travel first-aid kit' }, path: '/reiseapotheke' },
        { label: { de: 'Reisetipps', en: 'Travel tips' }, path: '/reisetipps' },
      ],
    },
    planningSection({
      de: 'Die Gelbfieberimpfung erhalten Sie direkt bei uns – mit Eintrag in den internationalen Impfausweis. Vor Reisen in große Höhen beraten wir Sie auch höhenmedizinisch.',
      en: 'You can get the yellow fever vaccination directly from us, with an entry in your international certificate of vaccination. Before trips to high altitude we also provide altitude medicine advice.',
    }),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Machu Picchu eine Gelbfieberimpfung?', en: 'Do I need a yellow fever vaccination for Machu Picchu?' },
      a: {
        de: 'Nein, wenn sich Ihre Reise auf Lima, Cusco, das Heilige Tal, Machu Picchu und den Inka-Pfad beschränkt, empfehlen WHO, STIKO und DTG keine Gelbfieberimpfung. Planen Sie zusätzlich Tage im Amazonas-Tiefland, etwa in Tambopata, Manú oder bei Iquitos, ist sie empfohlen – mindestens zehn Tage vor der Reise.',
        en: 'No – if your trip is limited to Lima, Cusco, the Sacred Valley, Machu Picchu and the Inca Trail, WHO, STIKO and DTG do not recommend yellow fever vaccination. If you also plan days in the Amazon lowlands, for example in Tambopata, Manú or near Iquitos, it is recommended – at least ten days before the trip.',
      },
    },
    {
      q: { de: 'Muss ich für Peru Malaria-Tabletten einnehmen?', en: 'Do I need malaria tablets for Peru?' },
      a: {
        de: 'Für Lima, die Küste, Cusco, Machu Picchu und den Titicacasee nicht – dort gibt es keine Malaria. Für die Stadt Puerto Maldonado stuft die DTG das Risiko als gering ein; konsequenter Mückenschutz genügt. Für die Region Loreto außerhalb von Iquitos und den Norden der Region Amazonas empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme. Bei Lodges im Regenwald prüfen wir den genauen Ort.',
        en: 'Not for Lima, the coast, Cusco, Machu Picchu or Lake Titicaca – there is no malaria there. DTG rates the risk in the city of Puerto Maldonado as low; consistent mosquito protection is sufficient. For the Loreto region outside Iquitos and the north of the Amazonas region, DTG recommends preventive tablets in addition. For rainforest lodges we check the exact location.',
      },
    },
    {
      q: { de: 'Wie beuge ich der Höhenkrankheit in Cusco vor?', en: 'How can I prevent altitude sickness in Cusco?' },
      a: {
        de: 'Am wichtigsten ist ein langsamer Aufstieg: die ersten Tage ruhig angehen und – wenn möglich – zuerst im tiefer gelegenen Heiligen Tal übernachten. Ob vorbeugende Medikamente für Sie sinnvoll sind, besprechen wir in der höhenmedizinischen Beratung. Werden die Beschwerden stärker, ist Abstieg die wichtigste Maßnahme.',
        en: 'The most important thing is a slow ascent: take the first days easy and, if possible, spend the first nights in the lower-lying Sacred Valley. Whether preventive medication makes sense for you we discuss in an altitude medicine consultation. If symptoms get worse, descending is the most important measure.',
      },
    },
  ],
  // pahoGelbfieber2026, cdcOropouche, cdcOropoucheSchwangerschaft (brasilien.ts),
  // pahoMasern2026 (mexiko.ts).
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaPeru', 'whoYellowFeverCountries', 'pahoGelbfieber2026',
    'pahoMasern2026', 'cdcOropouche', 'cdcOropoucheSchwangerschaft',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Lateinamerika & Karibik', en: 'Latin America & Caribbean' }, path: '/reiseziele/lateinamerika' },
    { label: { de: 'Brasilien', en: 'Brazil' }, path: '/reiseziele/lateinamerika/brasilien' },
    { label: { de: 'Höhenmedizin', en: 'Altitude medicine' }, path: '/leistungen/hoehenmedizin' },
  ],
};
