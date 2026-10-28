/**
 * Länderseite Südafrika (DE/EN). Inhalte nach STIKO/DTG (Epid Bull 27/2026 inkl.
 * Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026), Auswärtigem Amt
 * (Stand 28.10.2026) sowie den Gelbfieber-Einreiseregeln der südafrikanischen
 * Regierung (DIRCO). Bewusst ohne Präparatenamen (HWG); Malaria-Vorbeugung nur als
 * „vorbeugende Tabletteneinnahme" bzw. „Notfallmedikament" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  feverCallout, malariaLink, yellowFeverLink, rabiesLink, typhoidLink, planningSection,
} from '../laenderBausteine';

/** Neue, landesspezifische Quellen – zum Einpflegen in `sources.ts`. */
export const suedafrikaQuellen = {
  aaSuedafrika: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Südafrika: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'South Africa: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/suedafrika-node/suedafrikasicherheit-208400',
    retrieved: new Date('2026-10-28'),
  },
  suedafrikaGelbfieberDirco: {
    publisher: 'Department of International Relations and Cooperation (DIRCO), Republik Südafrika',
    title: {
      de: 'Gelbfieber: Nachweispflicht bei der Einreise nach Südafrika',
      en: 'Yellow fever: certificate requirements for entering South Africa',
    },
    url: 'https://dirco.gov.za/canberra/yellow-fever/',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Angaben der südafrikanischen Hochkommission in Canberra: Länderliste, Transit über 12 Stunden, Zurückweisung oder Quarantäne-Beobachtung bis zu sechs Tage ohne gültigen Nachweis.',
      en: 'Information from the South African High Commission in Canberra: list of countries, transit of more than 12 hours, refusal of entry or quarantine surveillance of up to six days without a valid certificate.',
    },
  },
  nicdTollwutRobben: {
    publisher: 'National Institute for Communicable Diseases (NICD), Südafrika',
    title: {
      de: 'Tollwut bei Robben in Südafrika – Faktenblatt (August 2025)',
      en: 'What you need to know about rabies in seals in South Africa – fact sheet (August 2025)',
    },
    url: 'https://www.nicd.ac.za/wp-content/uploads/2025/08/Rabies-and-seals-_-August-2025-final.pdf',
    retrieved: new Date('2026-10-28'),
  },
  cdcSuedafrika: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: {
      de: 'Südafrika – Gesundheitsinformationen für Reisende',
      en: 'South Africa – health information for travelers',
    },
    url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/south-africa',
    retrieved: new Date('2026-10-28'),
  },
} satisfies Record<string, Source>;

export const suedafrika: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Südafrika', en: 'Travel vaccinations for South Africa' },
    description: {
      de: 'Südafrika und Safari: Gelbfieber-Nachweis beim Transit, saisonale Malaria im Krüger-Park nach DTG 2026 und empfohlene Impfungen – reisemedizinische Beratung in Langenfeld.',
      en: 'South Africa and safari: yellow fever proof after transit, seasonal malaria in Kruger per DTG 2026 and recommended vaccinations – travel medicine consultation in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Afrika', en: 'Destination Africa' },
    lead: {
      de: 'Kapstadt, Garden Route und Safari im Krüger-Nationalpark: Südafrika vereint malariafreie Regionen mit saisonalen Malariagebieten. Streng kontrolliert wird der Gelbfieber-Nachweis bei Anreise über Gelbfieber-Länder. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Cape Town, the Garden Route and a safari in Kruger National Park: South Africa combines malaria-free regions with seasonal malaria areas. Proof of yellow fever vaccination is strictly checked if you arrive via yellow fever countries. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'gelbfieber',
      heading: { de: 'Einreise: strenge Gelbfieber-Regeln', en: 'Entry: strict yellow fever rules' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Reisende ab einem Jahr, die aus einem Gelbfieber-Gebiet einreisen, müssen eine Gelbfieberimpfung nachweisen. Das gilt auch, wenn Sie beim Umsteigen mehr als zwölf Stunden auf dem Flughafen eines Gelbfieber-Landes verbracht haben.',
          'Südafrika kontrolliert das streng: Wer ohne gültigen Nachweis ankommt, kann nach Angaben der südafrikanischen Regierung zurückgewiesen oder bis zu sechs Tage unter Quarantäne-Beobachtung gestellt werden. Wer aus medizinischen Gründen nicht geimpft werden darf, braucht eine ärztliche Befreiungsbescheinigung; auch dann ist eine Überwachung durch die Gesundheitsbehörden möglich.',
          'Welche Länder als Gelbfieber-Gebiet gelten, legt Südafrika selbst fest – darunter zum Beispiel Kenia, Uganda, Ruanda, Äthiopien, Ghana, Nigeria, Brasilien, Kolumbien und Peru. Für Tansania und Sambia verlangt Südafrika nach eigenen Angaben derzeit keinen Nachweis; solche Regeln haben sich in der Vergangenheit aber geändert.',
          'Geimpft wird nur in einer staatlich autorisierten Gelbfieber-Impfstelle; die Impfung muss mindestens zehn Tage vor der Ankunft erfolgen. Das Zertifikat gilt lebenslang. In Südafrika selbst wird Gelbfieber nicht übertragen – zum eigenen Schutz ist die Impfung dort nicht nötig.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. Travellers aged one year and older arriving from a yellow fever area must show proof of yellow fever vaccination. This also applies if you spent more than twelve hours at the airport of a yellow fever country while changing planes.',
          'South Africa enforces this strictly: according to the South African government, anyone arriving without a valid certificate may be refused entry or placed under quarantine surveillance for up to six days. If you cannot be vaccinated for medical reasons, you need a medical exemption certificate; even then, monitoring by the health authorities is possible.',
          'South Africa sets its own list of yellow fever countries – including, for example, Kenya, Uganda, Rwanda, Ethiopia, Ghana, Nigeria, Brazil, Colombia and Peru. According to South Africa, no certificate is currently required after a stay in Tanzania or Zambia; however, such rules have changed in the past.',
          'Vaccination is only given at a state-authorised yellow fever vaccination centre and must be given at least ten days before arrival. The certificate is valid for life. Yellow fever is not transmitted in South Africa itself, so vaccination for your own protection is not needed there.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Umstieg in Nairobi oder Addis Abeba', en: 'Changing planes in Nairobi or Addis Ababa' },
        text: {
          de: 'Viele Flugverbindungen nach Südafrika führen über Gelbfieber-Länder wie Kenia oder Äthiopien. Ab zwölf Stunden Transit ist der Nachweis Pflicht. Das Auswärtige Amt empfiehlt die Impfung auch bei kürzeren Umstiegen, weil sich Flüge verspäten können und die Transitzeit nicht immer nachvollziehbar ist. Maßgeblich sind die Einreisevorschriften des Ziellandes – prüfen Sie diese vor der Abreise.',
          en: 'Many flights to South Africa route via yellow fever countries such as Kenya or Ethiopia. From twelve hours of transit, proof is mandatory. The German Federal Foreign Office recommends vaccination even for shorter layovers, because flights can be delayed and the transit time cannot always be verified. The entry requirements of the destination country apply – check them before departure.',
        },
      },
      links: [yellowFeverLink, { label: { de: 'Gelbfieber', en: 'Yellow fever' }, path: '/krankheitsbilder/gelbfieber' }],
    },
    {
      id: 'impfungen',
      heading: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      body: {
        de: ['Für alle Reisenden empfehlen STIKO und DTG aktuelle Standardimpfungen und die Impfung gegen Hepatitis A. Welche weiteren Impfungen sinnvoll sind, hängt von Reisestil, Dauer und Aktivitäten ab:'],
        en: ['For all travellers, STIKO and DTG recommend up-to-date routine vaccinations and vaccination against hepatitis A. Which further vaccinations make sense depends on travel style, duration and activities:'],
      },
      list: {
        de: [
          'Standardimpfungen: Tetanus, Diphtherie, Keuchhusten, Polio und besonders Masern prüfen und bei Bedarf auffrischen.',
          'Hepatitis A: für alle Reisenden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, medizinischen Eingriffen, Tattoos oder Piercings oder neuen Sexualkontakten.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Tollwut: STIKO und DTG stufen das Risiko durch Hunde als moderat ein. Vorbeugend geimpft wird bei Aufenthalten über vier Wochen oder wiederholten Reisen, wenn zusätzlich die Versorgung nach einem Biss vor Ort nicht gesichert ist, einfache Reisebedingungen bestehen oder Aktivitäten mit erhöhtem Risiko für Tierkontakte geplant sind (etwa Radfahren, Joggen oder Selbstfahrer-Touren mit Camping); bei Kindern großzügig. Wer absehbar mit Wildtieren umgeht – zum Beispiel als Volunteer in einer Auffangstation – oder häufig taucht oder surft (Tollwut bei Robben, siehe unten), sollte die Impfung unabhängig von der Reisedauer besprechen.',
          'Dengue und Chikungunya: Für Südafrika sehen STIKO und DTG keine Impfindikation. Anders kann es bei einer Kombination mit Nachbarländern wie Mosambik oder Namibia sein – das klären wir in der Beratung.',
        ],
        en: [
          'Routine vaccinations: check tetanus, diphtheria, whooping cough, polio and especially measles, and boost if needed.',
          'Hepatitis A: for all travellers.',
          'Hepatitis B: based on individual assessment, for example for longer stays, medical procedures, tattoos or piercings, or new sexual contacts.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Rabies: STIKO and DTG rate the risk from dogs as moderate. Pre-exposure vaccination is given for stays of more than four weeks or repeated trips if, in addition, care after a bite is not assured locally, travel conditions are basic or activities with a higher risk of animal contact are planned (such as cycling, jogging or self-drive camping tours); generously for children. Anyone who will foreseeably handle wild animals – for example as a volunteer at a wildlife rescue centre – or who dives or surfs frequently (rabies in seals, see below) should discuss vaccination regardless of trip length.',
          'Dengue and chikungunya: STIKO and DTG see no indication for vaccination for South Africa. This may be different when combining the trip with neighbouring countries such as Mozambique or Namibia – we clarify this in the consultation.',
        ],
      },
      links: [rabiesLink, typhoidLink, { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['Der größte Teil Südafrikas ist malariafrei. Ein Risiko besteht nur im Norden und Nordosten – dort fast ausschließlich durch Malaria tropica, die gefährlichste Form. Nach den DTG-Empfehlungen 2026 gilt:'],
        en: ['Most of South Africa is malaria-free. There is a risk only in the north and north-east – almost exclusively falciparum malaria, the most dangerous form. According to the DTG recommendations 2026:'],
      },
      list: {
        de: [
          'Saisonal hohes Risiko von September bis Mai im Nordosten der Provinzen Limpopo und Mpumalanga, einschließlich Krüger-Nationalpark und der angrenzenden Schutzgebiete: Die DTG empfiehlt in dieser Zeit zusätzlich zum Mückenschutz eine vorbeugende Tabletteneinnahme.',
          'Saisonal mittleres Risiko von Juni bis August in denselben Gebieten – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
          'Geringes Risiko ganzjährig in den übrigen nördlichen Regionen: in KwaZulu-Natal einschließlich iSimangaliso Wetland Park, Hluhluwe-iMfolozi, Tembe Elephant Park und Ndumo Game Reserve sowie in den übrigen Teilen von Limpopo und Mpumalanga mit der Waterberg-Region und den Schutzgebieten Marakele und Madikwe – konsequenter Mückenschutz, keine vorbeugende Tabletteneinnahme.',
          'Malariafrei: die südlichen Landesteile, etwa Kapstadt, das Westkap mit der Garden Route und das Ostkap.',
        ],
        en: [
          'Seasonally high risk from September to May in the north-east of Limpopo and Mpumalanga provinces, including Kruger National Park and the adjoining reserves: during this period, DTG recommends preventive tablets in addition to mosquito protection.',
          'Seasonally moderate risk from June to August in the same areas – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
          'Low risk all year round in the other northern regions: KwaZulu-Natal including iSimangaliso Wetland Park, Hluhluwe-iMfolozi, Tembe Elephant Park and Ndumo Game Reserve, as well as the remaining parts of Limpopo and Mpumalanga with the Waterberg region and the Marakele and Madikwe reserves – consistent mosquito protection, no preventive tablets.',
          'Malaria-free: the southern parts of the country, such as Cape Town, the Western Cape with the Garden Route, and the Eastern Cape.',
        ],
      },
      callout: feverCallout,
      links: [malariaLink],
    },
    {
      id: 'safari',
      heading: { de: 'Safari: Krüger-Park und Wildreservate', en: 'Safari: Kruger and game reserves' },
      body: {
        de: ['Für eine Safari lohnt es sich, Reisezeit, Route und Aktivitäten auch mit Blick auf die Gesundheit zu planen:'],
        en: ['For a safari it pays to plan the season, route and activities with your health in mind:'],
      },
      list: {
        de: [
          'Reisezeit: Im südafrikanischen Winter von Juni bis August ist das Malariarisiko im Krüger-Park geringer als von September bis Mai.',
          'Schwangere und kleine Kinder: Die DTG rät Schwangeren und Kindern unter fünf Jahren von Aufenthalten in Malaria-Hochrisikogebieten ab. Eine Alternative sind Wildreservate im malariafreien Süden, etwa im Ostkap.',
          'Zecken: Bei Pirschgängen und im Buschland übertragen Zecken unter anderem das Afrikanische Zeckenbissfieber. Lange Hosen, Mückenschutzmittel auf Haut und Kleidung und das Absuchen des Körpers nach Ausflügen senken das Risiko.',
          'Tiere: Abstand zu Wildtieren halten und keine Tiere füttern, auch keine Affen oder Paviane an Camps und Rastplätzen. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind. Impfstoff für die Behandlung nach einem Biss ist in den meisten Landesteilen erhältlich.',
          'Bilharziose: Übertragung in Süßwasser in Limpopo, Mpumalanga, KwaZulu-Natal und im Ostkap bei Gqeberha (Port Elizabeth) – dort nicht in Flüssen, Seen oder Stauseen baden.',
        ],
        en: [
          'Season: in the South African winter from June to August, the malaria risk in Kruger is lower than from September to May.',
          'Pregnant women and young children: DTG advises pregnant women and children under five against stays in high-risk malaria areas. An alternative is a game reserve in the malaria-free south, for example in the Eastern Cape.',
          'Ticks: on bush walks and in the bush, ticks transmit African tick bite fever, among other infections. Long trousers, repellent on skin and clothing, and checking your body after excursions reduce the risk.',
          'Animals: keep your distance from wild animals and do not feed them, including monkeys and baboons at camps and rest stops. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated. Vaccine for treatment after a bite is available in most parts of the country.',
          'Schistosomiasis (bilharzia): transmitted in fresh water in Limpopo, Mpumalanga, KwaZulu-Natal and the Eastern Cape near Gqeberha (Port Elizabeth) – do not swim in rivers, lakes or reservoirs there.',
        ],
      },
    },
    {
      id: 'risiken',
      heading: { de: 'Weitere Gesundheitsrisiken', en: 'Other health risks' },
      body: { de: [], en: [] },
      list: {
        de: [
          'HIV ist in Südafrika sehr häufig: Etwa jeder sechste Erwachsene ist infiziert, in manchen Provinzen mehr. Kondome senken das Risiko für HIV und anderen sexuell übertragbaren Infektionen wie Hepatitis B.',
          'Tuberkulose ist weit verbreitet, für Reisende aber vor allem bei engem Kontakt ein Risiko, etwa bei Arbeit in Gesundheitseinrichtungen oder längerem Wohnen in beengten Unterkünften.',
          'Reisedurchfall und Hepatitis A: auf Trinkwasser- und Lebensmittelhygiene achten, besonders außerhalb der Städte.',
          'Hohe UV-Strahlung im ganzen Land – auch bei kühlem Wind an der Küste.',
        ],
        en: [
          'HIV is very common in South Africa: about one in six adults is infected, more in some provinces. Condoms reduce the risk of HIV and other sexually transmitted infections such as hepatitis B.',
          'Tuberculosis is widespread, but for travellers it is mainly a risk with close contact, for example when working in healthcare facilities or living in crowded accommodation for longer periods.',
          "Travellers' diarrhoea and hepatitis A: pay attention to drinking water and food hygiene, especially outside the cities.",
          'High UV radiation throughout the country – even when a cool wind is blowing on the coast.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Tollwut bei Robben an der Westküste', en: 'Rabies in seals on the west coast' },
        text: {
          de: 'Seit 2024 wird Tollwut bei Kap-Pelzrobben an der Küste des West- und Nordkaps nachgewiesen; das südafrikanische Gesundheitsinstitut NICD geht von einer dauerhaften Verbreitung aus. Halten Sie an Stränden, in Häfen und bei Ausflügen zu Robbenkolonien Abstand. Nach einem Robbenbiss die Wunde sofort gründlich mit Seife und Wasser auswaschen und umgehend ärztliche Hilfe suchen.',
          en: "Since 2024, rabies has been detected in Cape fur seals along the coast of the Western and Northern Cape; South Africa's National Institute for Communicable Diseases (NICD) considers it established in the seal population. Keep your distance on beaches, in harbours and on trips to seal colonies. After a seal bite, wash the wound immediately and thoroughly with soap and water and seek medical help at once.",
        },
      },
      links: [rabiesLink],
    },
    {
      id: 'tipps',
      heading: { de: 'Reisetipps', en: 'Travel tips' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Auslandskrankenversicherung mit Rücktransport abschließen: Private Kliniken in den Großstädten haben europäisches Niveau, verlangen aber meist Vorauskasse; auf dem Land ist die Versorgung einfacher.',
          'Für den Nordosten Mückenschutzmittel, helle lange Kleidung für Abend und Nacht und gegebenenfalls ein Moskitonetz einpacken.',
          'Sonnenschutz: Kopfbedeckung, Sonnenbrille und Sonnencreme mit hohem Lichtschutzfaktor, besonders bei Pirschfahrten im offenen Wagen.',
          'Straßenverkehr: In Südafrika herrscht Linksverkehr. Das Auswärtige Amt rät von Überlandfahrten nach Einbruch der Dunkelheit ab – auch wegen Tieren auf der Fahrbahn.',
          'Reiseapotheke mit Mitteln gegen Durchfall, Fieber und Insektenstiche sowie ausreichend Dauermedikamenten mitnehmen.',
        ],
        en: [
          'Take out travel health insurance that covers repatriation: private hospitals in the major cities are of European standard but usually require payment in advance; in rural areas, care is more basic.',
          'For the north-east, pack mosquito repellent, light-coloured long clothing for evenings and nights and, if needed, a mosquito net.',
          'Sun protection: a hat, sunglasses and high-SPF sunscreen, especially on game drives in open vehicles.',
          'Road traffic: South Africa drives on the left. The German Federal Foreign Office advises against driving long distances after dark – partly because of animals on the road.',
          'Bring a travel first-aid kit with remedies for diarrhoea, fever and insect bites, plus enough of your regular medication.',
        ],
      },
      links: [
        { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
        { label: { de: 'Reiseapotheke – Checkliste', en: 'Travel first-aid kit – checklist' }, path: '/reiseapotheke' },
      ],
    },
    planningSection({
      de: 'Die Gelbfieberimpfung erhalten Sie direkt bei uns – mit Eintrag in den internationalen Impfausweis.',
      en: 'You can get the yellow fever vaccination directly from us, with an entry in your international certificate of vaccination.',
    }),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Südafrika eine Gelbfieberimpfung?', en: 'Do I need a yellow fever vaccination for South Africa?' },
      a: {
        de: 'Bei direkter Einreise aus Deutschland nicht. Ein Nachweis ist ab einem Jahr nötig, wenn Sie aus einem Gelbfieber-Gebiet einreisen oder dort mehr als zwölf Stunden im Transit waren – etwa nach einer Safari in Kenia oder einem langen Umstieg in Addis Abeba. Ohne Nachweis drohen Zurückweisung oder Quarantäne-Beobachtung. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'Not when entering directly from Germany. Proof is required from one year of age if you arrive from a yellow fever area or spent more than twelve hours in transit there – for example after a safari in Kenya or a long layover in Addis Ababa. Without proof, you risk refusal of entry or quarantine surveillance. The entry requirements of the destination country apply.',
      },
    },
    {
      q: { de: 'Brauche ich für den Krüger-Nationalpark Malaria-Tabletten?', en: 'Do I need malaria tablets for Kruger National Park?' },
      a: {
        de: 'Von September bis Mai empfiehlt die DTG für den Krüger-Park und die angrenzenden Schutzgebiete zusätzlich zum Mückenschutz eine vorbeugende Tabletteneinnahme. Von Juni bis August genügt in der Regel konsequenter Mückenschutz; für Schwangere gelten strengere Empfehlungen. Welches Vorgehen zu Ihnen passt, besprechen wir in der Beratung.',
        en: 'From September to May, DTG recommends preventive tablets in addition to mosquito protection for Kruger and the adjoining reserves. From June to August, consistent mosquito protection is usually sufficient; stricter recommendations apply to pregnant women. We discuss which approach suits you in the consultation.',
      },
    },
    {
      q: { de: 'Gibt es in Südafrika Safaris ohne Malariarisiko?', en: 'Are there safaris in South Africa without malaria risk?' },
      a: {
        de: 'Ja. Wildreservate im malariafreien Süden, etwa im Ostkap, sind eine Alternative – besonders für Schwangere und Familien mit Kindern unter fünf Jahren. Auch Kapstadt und die Garden Route sind nach den DTG-Empfehlungen 2026 malariafrei.',
        en: 'Yes. Game reserves in the malaria-free south, for example in the Eastern Cape, are an alternative – especially for pregnant women and families with children under five. Cape Town and the Garden Route are also malaria-free according to the DTG recommendations 2026.',
      },
    },
  ],
  // Neue Keys (aaSuedafrika, suedafrikaGelbfieberDirco, nicdTollwutRobben, cdcSuedafrika)
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaSuedafrika', 'suedafrikaGelbfieberDirco', 'nicdTollwutRobben', 'cdcSuedafrika',
    'whoYellowFeverCountries',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Afrika südlich der Sahara', en: 'Sub-Saharan Africa' }, path: '/reiseziele/afrika' },
    { label: { de: 'Kenia', en: 'Kenya' }, path: '/reiseziele/afrika/kenia' },
  ],
};
