/**
 * Reiseziele — Regionenmodell.
 *
 * Die Reiseziele-Sektion ist nach Weltregionen statt nach einzelnen Ländern
 * organisiert: Eine starke Übersichtsseite (Hub) führt über eine Karten-
 * Navigation zu je einer ausführlichen, zitierten Detailseite pro Region. So
 * bleibt die Pflege überschaubar, die Navigation klar und der Inhalt fachlich
 * fundiert.
 *
 * Bewusst OHNE volatile, fest verdrahtete Länder-/Pflichtlisten: maßgeblich
 * bleiben die laufend aktualisierten Quellen (WHO, RKI, Auswärtiges Amt), die in
 * der „Quellen & Stand"-Box jeder Detailseite verlinkt sind. Sachlich und
 * HWG-konform (keine Heilversprechen, keine Preise) — die verbindliche
 * Empfehlung erfolgt in der persönlichen Beratung.
 *
 * Jede Region trägt Hub-Karten-Felder (name, summary, examples, vaccines) und
 * eine vollständige `ClinicalPage` (identisch DE/EN), die über die dynamische
 * Route `/reiseziele/[region]` im ContentLayout gerendert wird.
 */
import type { ClinicalPage, Localized } from '../types';

/** Icon-Schlüssel (Inline-SVG in der Hub-Komponente). */
export type RegionIcon =
  | 'afrika'
  | 'asien'
  | 'lateinamerika'
  | 'naherOsten'
  | 'europa'
  | 'ozeanien';

export interface DestinationRegion {
  /** URL-Slug (deutsch, auf beiden Sprachen: /reiseziele/<slug>, /en/reiseziele/<slug>). */
  slug: string;
  icon: RegionIcon;
  /** Vollständiger Regionenname (Kartentitel + Hero). */
  name: Localized;
  /** Kurzform (Navigation/Chips). */
  shortName: Localized;
  /** 1–2 Sätze für die Übersichtskarte. */
  summary: Localized;
  /** Beispielländer als „·"-getrennte Zeile (illustrativ, nicht abschließend). */
  examples: Localized;
  /** Kurz-Chips der wichtigsten Impfthemen für die Karte. */
  vaccines: Localized<string[]>;
  /** Ausführliche, zitierte Detailseite (ClinicalPage). */
  page: ClinicalPage;
}

const LAST_REVIEWED = new Date('2026-06-15');

const afrika: DestinationRegion = {
  slug: 'afrika',
  icon: 'afrika',
  name: { de: 'Afrika südlich der Sahara', en: 'Sub-Saharan Africa' },
  shortName: { de: 'Afrika', en: 'Africa' },
  summary: {
    de: 'Safari, Westafrika und der Sahel: Hier stehen Gelbfieber mit internationalem Impfnachweis, Malaria und ein breiter Reiseimpfschutz im Mittelpunkt.',
    en: 'Safari, West Africa and the Sahel: yellow fever with an international certificate, malaria and broad travel protection are central here.',
  },
  examples: {
    de: 'Kenia · Tansania · Südafrika · Namibia · Ghana · Senegal',
    en: 'Kenya · Tanzania · South Africa · Namibia · Ghana · Senegal',
  },
  vaccines: {
    de: ['Gelbfieber', 'Hepatitis A', 'Typhus', 'Tollwut', 'Meningokokken'],
    en: ['Yellow fever', 'Hepatitis A', 'Typhoid', 'Rabies', 'Meningococcal'],
  },
  page: {
    meta: {
      title: { de: 'Reiseimpfungen für Afrika südlich der Sahara', en: 'Travel vaccinations for Sub-Saharan Africa' },
      description: {
        de: 'Welche Impfungen für Safari, Westafrika und den Sahel? Überblick zu Gelbfieber (ICVP), Hepatitis A, Typhus, Tollwut, Meningokokken und Malaria.',
        en: 'Which vaccinations for safari, West Africa and the Sahel? Overview of yellow fever (ICVP), hepatitis A, typhoid, rabies, meningococcal and malaria.',
      },
      eyebrow: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' },
      lead: {
        de: 'Ob Safari in Ostafrika, Rundreise im südlichen Afrika oder Aufenthalt in Westafrika – das subsaharische Afrika zählt zu den Regionen mit dem breitesten Vorsorgebedarf. Im Mittelpunkt stehen Gelbfieber samt Impfnachweis, der Schutz vor Malaria und Mückenstichen sowie ein solider Reiseimpfschutz.',
        en: 'Whether a safari in East Africa, a tour of southern Africa or a stay in West Africa – Sub-Saharan Africa is among the regions with the broadest preventive needs. The focus is on yellow fever including the certificate, protection against malaria and mosquito bites, and solid travel vaccination cover.',
      },
    },
    sections: [
      {
        id: 'ueberblick',
        heading: { de: 'Überblick: Afrika südlich der Sahara', en: 'Overview: Sub-Saharan Africa' },
        body: {
          de: [
            'Ob Safari in Kenia und Tansania, Rundreise durch Namibia, Botswana oder Südafrika oder Aufenthalt in Westafrika (etwa Ghana, Senegal, Gambia): Klima, Tierwelt und die Bedingungen vor Ort machen einen guten Impf- und Expositionsschutz besonders wichtig.',
            'Welche Impfungen für Sie sinnvoll oder vorgeschrieben sind, hängt von Reiseroute, Reisestil und Saison ab – eine zweiwöchige Lodge-Safari stellt andere Anforderungen als eine mehrmonatige Rucksackreise durch den Sahel. Dieser Überblick ordnet die wichtigsten Themen ein; die verbindliche Empfehlung treffen wir in der persönlichen Beratung.',
          ],
          en: [
            'Whether a safari in Kenya and Tanzania, a tour through Namibia, Botswana or South Africa, or a stay in West Africa (such as Ghana, Senegal, the Gambia): the climate, wildlife and local conditions make good vaccination and exposure protection particularly important.',
            'Which vaccinations are advisable or required for you depends on the route, travel style and season – a two-week lodge safari has different needs than a multi-month backpacking trip through the Sahel. This overview puts the key topics in context; the binding recommendation is made in a personal consultation.',
          ],
        },
      },
      {
        id: 'impfungen',
        heading: { de: 'Empfohlene Reiseimpfungen', en: 'Recommended travel vaccinations' },
        body: {
          de: [
            'Vor jeder Afrikareise sollte zunächst der Standardimpfschutz nach STIKO vollständig sein – Tetanus, Diphtherie, Keuchhusten und Polio sowie Masern-Mumps-Röteln. Hepatitis A wird für nahezu alle Reisen empfohlen, Typhus vor allem bei einfachen Reisebedingungen, längeren Aufenthalten oder Reisen abseits der Hotelroute.',
            'Je nach Reise kommen weitere Impfungen in Betracht: Tollwut bei Tier- und Naturnähe oder abgelegenen Zielen, Meningokokken (ACWY) insbesondere im Sahel, Hepatitis B bei längeren Aufenthalten oder medizinischen Risiken. Die Gelbfieberimpfung wird wegen ihrer Sonderrolle (Empfehlung und häufige Nachweispflicht) unten gesondert beschrieben.',
          ],
          en: [
            'Before any trip to Africa, your routine vaccination cover under STIKO should first be complete – tetanus, diphtheria, whooping cough and polio as well as measles-mumps-rubella. Hepatitis A is recommended for almost all trips, typhoid especially with simple travel conditions, longer stays or travel off the hotel route.',
            'Depending on the trip, further vaccinations may be considered: rabies with animal contact, rural travel or remote destinations, meningococcal disease (ACWY) particularly in the Sahel, hepatitis B for longer stays or medical risks. Yellow fever vaccination is described separately below because of its special role (recommendation and a frequent certificate requirement).',
          ],
        },
        list: {
          de: [
            'Standardimpfungen prüfen und auffrischen (Tetanus, Diphtherie, Polio, MMR)',
            'Hepatitis A – für nahezu alle Reisen empfohlen',
            'Typhus – bei einfachen Bedingungen und längeren Aufenthalten',
            'Tollwut – bei Tierkontakt, Trekking und abgelegenen Zielen',
            'Meningokokken ACWY – v. a. im Sahel („Meningitisgürtel")',
          ],
          en: [
            'Check and update routine vaccinations (tetanus, diphtheria, polio, MMR)',
            'Hepatitis A – recommended for almost all trips',
            'Typhoid – with simple conditions and longer stays',
            'Rabies – with animal contact, trekking and remote destinations',
            'Meningococcal ACWY – mainly in the Sahel ("meningitis belt")',
          ],
        },
        links: [
          { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
          { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' },
          { label: { de: 'Tollwut', en: 'Rabies' }, path: '/krankheitsbilder/tollwut' },
          { label: { de: 'Meningokokken', en: 'Meningococcal disease' }, path: '/krankheitsbilder/meningokokken' },
          { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations overview' }, path: '/leistungen/reiseimpfungen' },
        ],
      },
      {
        id: 'gelbfieber',
        heading: { de: 'Gelbfieber & internationaler Impfnachweis (ICVP)', en: 'Yellow fever & international certificate (ICVP)' },
        body: {
          de: [
            'In weiten Teilen des tropischen Afrikas besteht ein Gelbfieberrisiko. Zahlreiche Länder verlangen bei der Einreise einen gültigen internationalen Impfnachweis (ICVP) – teils für alle Reisenden, teils nur bei Einreise aus einem weiteren Gelbfiebergebiet. Welche Regelung für Ihre Route gilt, hängt von den einzelnen Ländern und der Reihenfolge Ihrer Stationen ab.',
            'Die Gelbfieberimpfung ist eine einmalige Impfung und bietet nach Empfehlung der WHO einen lebenslangen Schutz. Der Nachweis wird jedoch erst ab dem 10. Tag nach der Impfung gültig. Als staatlich autorisierte Gelbfieberimpfstelle führen wir die Impfung durch und stellen den international gültigen Eintrag aus.',
          ],
          en: [
            'In large parts of tropical Africa there is a yellow fever risk. Many countries require a valid international certificate of vaccination (ICVP) on entry – sometimes for all travellers, sometimes only when arriving from another yellow fever area. Which rule applies to your route depends on the individual countries and the order of your stops.',
            'Yellow fever vaccination is a single dose and, according to the WHO, provides lifelong protection. The certificate, however, only becomes valid from day 10 after vaccination. As a state-authorised yellow fever vaccination centre, we perform the vaccination and issue the internationally valid entry.',
          ],
        },
        callout: {
          variant: 'important',
          title: { de: 'Gelbfiebernachweis rechtzeitig planen', en: 'Plan your yellow fever certificate in good time' },
          text: {
            de: 'Da der ICVP erst ab dem 10. Tag nach der Impfung gilt, sollte der Termin rechtzeitig vor Abreise liegen. Die aktuellen Einreisebestimmungen Ihres Reiselandes prüfen wir gemeinsam – maßgeblich sind die Vorgaben der Länder und die Hinweise des Auswärtigen Amts.',
            en: 'Because the ICVP only applies from day 10 after vaccination, the appointment should be well before departure. We check the current entry requirements for your destination together – the decisive sources are the countries’ rules and the German Federal Foreign Office travel advice.',
          },
        },
        links: [
          { label: { de: 'Gelbfieber (Krankheitsbild)', en: 'Yellow fever (disease)' }, path: '/krankheitsbilder/gelbfieber' },
          { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
          { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
        ],
      },
      {
        id: 'malaria',
        heading: { de: 'Malaria & Mückenschutz', en: 'Malaria & mosquito protection' },
        body: {
          de: [
            'In vielen Regionen südlich der Sahara besteht ganzjährig oder saisonal ein Malariarisiko – stellenweise hoch. Malaria ist nicht durch eine Impfung vermeidbar; entscheidend sind ein konsequenter Schutz vor Mückenstichen und, je nach Ziel und Reisestil, eine medikamentöse Vorbeugung (Chemoprophylaxe) oder ein Notfallmedikament (Standby).',
            'Welche Strategie für Sie passt, hängt vom konkreten Reisegebiet, der Saison und Ihrer Gesundheit ab. In der Beratung bewerten wir Ihr individuelles Risiko und besprechen Mückenschutz, Prophylaxe und Verhaltensregeln. Der Schutz vor Mückenstichen wirkt zugleich gegen weitere Erkrankungen wie Dengue.',
          ],
          en: [
            'In many regions south of the Sahara there is a year-round or seasonal malaria risk – locally high. Malaria cannot be prevented by vaccination; what matters is consistent protection against mosquito bites and, depending on the destination and travel style, preventive medication (chemoprophylaxis) or an emergency standby medication.',
            'Which strategy suits you depends on the specific area, the season and your health. In the consultation we assess your individual risk and discuss mosquito protection, prophylaxis and rules of conduct. Protection against mosquito bites also works against other illnesses such as dengue.',
          ],
        },
        list: {
          de: [
            'Mückenschutz: imprägnierte Kleidung, Repellentien, Moskitonetz',
            'Chemoprophylaxe oder Standby-Notfallmedikation je nach Gebiet',
            'Risiko abhängig von Region, Höhenlage und Saison',
          ],
          en: [
            'Mosquito protection: treated clothing, repellents, bed net',
            'Chemoprophylaxis or standby emergency medication depending on the area',
            'Risk depending on region, altitude and season',
          ],
        },
        links: [
          { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
          { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' },
        ],
      },
      {
        id: 'planung',
        heading: { de: 'Planung & persönliche Beratung', en: 'Planning & personal advice' },
        body: {
          de: [
            'Planen Sie die reisemedizinische Beratung möglichst 4 bis 6 Wochen vor Abreise – manche Impfungen brauchen mehrere Dosen oder einen zeitlichen Vorlauf, und der Gelbfiebernachweis gilt erst ab dem 10. Tag. Bringen Sie Ihren Impfausweis und Ihre Reisedaten (Route, Termine, Reisestil) mit.',
            'Auch kurzfristige Reisen lassen sich sinnvoll begleiten. Wir stimmen Ihren Schutz auf Reiseziel, Route und Gesundheit ab und planen den zeitlichen Ablauf gemeinsam.',
          ],
          en: [
            'Plan the travel-medicine consultation ideally 4 to 6 weeks before departure – some vaccinations need several doses or lead time, and the yellow fever certificate only applies from day 10. Bring your vaccination record and your travel details (route, dates, travel style).',
            'Short-notice trips can be supported sensibly as well. We tailor your protection to the destination, route and health, and plan the timing together.',
          ],
        },
        links: [
          { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
          { label: { de: 'Ablauf des Termins', en: 'How the appointment works' }, path: '/ablauf' },
        ],
      },
    ],
    sourceIds: [
      'stikoImpfempfehlungen',
      'dtgReiseimpfungen',
      'whoYellowFeverCountries',
      'rkiMalaria',
      'rkiMeningokokken',
      'auswaertigesAmt',
    ],
    lastReviewed: LAST_REVIEWED,
    related: [
      { label: { de: 'Lateinamerika & Karibik', en: 'Latin America & Caribbean' }, path: '/reiseziele/lateinamerika' },
      { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Risikogebiete – Gelbfieber & FSME', en: 'Risk areas – yellow fever & TBE' }, path: '/risikogebiete' },
    ],
  },
};

const asien: DestinationRegion = {
  slug: 'asien',
  icon: 'asien',
  name: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' },
  shortName: { de: 'Asien', en: 'Asia' },
  summary: {
    de: 'Von Stadt und Strand bis Trekking: Hepatitis A, Typhus und Mückenschutz – bei längeren oder ländlichen Reisen auch Japanische Enzephalitis und Tollwut.',
    en: 'From city and beach to trekking: hepatitis A, typhoid and mosquito protection – plus Japanese encephalitis and rabies on longer or rural trips.',
  },
  examples: {
    de: 'Thailand · Vietnam · Bali · Indien · Nepal · Sri Lanka',
    en: 'Thailand · Vietnam · Bali · India · Nepal · Sri Lanka',
  },
  vaccines: {
    de: ['Hepatitis A', 'Typhus', 'Tollwut', 'Japanische Enzephalitis', 'Dengue'],
    en: ['Hepatitis A', 'Typhoid', 'Rabies', 'Japanese encephalitis', 'Dengue'],
  },
  page: {
    meta: {
      title: { de: 'Reiseimpfungen für Süd- & Südostasien', en: 'Travel vaccinations for South & Southeast Asia' },
      description: {
        de: 'Welche Impfungen für Thailand, Bali, Indien & Co.? Überblick zu Hepatitis A, Typhus, Tollwut, Japanischer Enzephalitis, Dengue und Malaria.',
        en: 'Which vaccinations for Thailand, Bali, India & co.? Overview of hepatitis A, typhoid, rabies, Japanese encephalitis, dengue and malaria.',
      },
      eyebrow: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' },
      lead: {
        de: 'Von Thailand und Bali über Vietnam bis nach Indien und Nepal: Süd- und Südostasien gehören zu den beliebtesten Fernreisezielen. Im Vordergrund stehen Lebensmittel- und Wasserhygiene (Hepatitis A, Typhus) sowie der Schutz vor Mückenstichen – bei längeren oder ländlichen Reisen kommen weitere Impfungen hinzu.',
        en: 'From Thailand and Bali through Vietnam to India and Nepal: South and Southeast Asia are among the most popular long-haul destinations. The focus is on food and water hygiene (hepatitis A, typhoid) and protection against mosquito bites – with further vaccinations for longer or rural trips.',
      },
    },
    sections: [
      {
        id: 'ueberblick',
        heading: { de: 'Überblick: Süd- & Südostasien', en: 'Overview: South & Southeast Asia' },
        body: {
          de: [
            'Das Spektrum der Reisestile ist groß – von Städtereise und Strandurlaub über Tempeltouren bis zu Trekking im Himalaya – und entsprechend unterschiedlich fällt die Vorsorge aus. Eine Pauschalreise in ein Resort stellt andere Anforderungen als eine Rundreise über Land oder ein Aufenthalt auf dem indischen Subkontinent.',
            'Gelbfieber kommt in Asien nicht vor; ein Impfnachweis kann jedoch verlangt werden, wenn Sie aus einem Gelbfiebergebiet (etwa Teile Afrikas oder Südamerikas) einreisen. Im Mittelpunkt der Vorsorge stehen Hygiene bei Essen und Trinken sowie der Schutz vor Mückenstichen.',
          ],
          en: [
            'The range of travel styles is wide – from city breaks and beach holidays through temple tours to trekking in the Himalayas – and prevention varies accordingly. A package trip to a resort has different needs than an overland tour or a stay on the Indian subcontinent.',
            'Yellow fever does not occur in Asia; however, a certificate may be required if you enter from a yellow fever area (such as parts of Africa or South America). The focus of prevention is hygiene with food and drink and protection against mosquito bites.',
          ],
        },
      },
      {
        id: 'impfungen',
        heading: { de: 'Empfohlene Reiseimpfungen', en: 'Recommended travel vaccinations' },
        body: {
          de: [
            'Wie bei jeder Fernreise gilt: zuerst den Standardschutz nach STIKO vervollständigen (Tetanus, Diphtherie, Keuchhusten, Polio, MMR). Hepatitis A wird für nahezu alle Reisen empfohlen, Typhus besonders auf dem indischen Subkontinent (Indien, Nepal, Pakistan, Bangladesch) sowie bei einfachen Reisebedingungen.',
            'Bei längeren Aufenthalten, Rucksack- oder Individualreisen kommen Tollwut und Hepatitis B hinzu. Für bestimmte ländliche Langzeitaufenthalte ist die Impfung gegen Japanische Enzephalitis möglich – dazu unten mehr.',
          ],
          en: [
            'As with any long-haul trip: first complete the routine cover under STIKO (tetanus, diphtheria, whooping cough, polio, MMR). Hepatitis A is recommended for almost all trips, typhoid especially on the Indian subcontinent (India, Nepal, Pakistan, Bangladesh) and with simple travel conditions.',
            'For longer stays, backpacking or independent travel, rabies and hepatitis B are added. For certain rural, long-term stays, vaccination against Japanese encephalitis is possible – more on this below.',
          ],
        },
        list: {
          de: [
            'Hepatitis A – für nahezu alle Reisen empfohlen',
            'Typhus – v. a. Südasien / indischer Subkontinent',
            'Tollwut – bei Tierkontakt, längeren oder ländlichen Reisen',
            'Hepatitis B – bei längeren Aufenthalten und medizinischen Risiken',
          ],
          en: [
            'Hepatitis A – recommended for almost all trips',
            'Typhoid – mainly South Asia / Indian subcontinent',
            'Rabies – with animal contact, longer or rural travel',
            'Hepatitis B – for longer stays and medical risks',
          ],
        },
        links: [
          { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
          { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' },
          { label: { de: 'Tollwut', en: 'Rabies' }, path: '/krankheitsbilder/tollwut' },
          { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations overview' }, path: '/leistungen/reiseimpfungen' },
        ],
      },
      {
        id: 'besondere-risiken',
        heading: { de: 'Japanische Enzephalitis & Dengue', en: 'Japanese encephalitis & dengue' },
        body: {
          de: [
            'Die Japanische Enzephalitis ist eine seltene, aber schwer verlaufende Virusinfektion, die durch Mücken vor allem in ländlichen Gebieten mit Reisanbau und Schweinehaltung übertragen wird. Eine Impfung ist sinnvoll bei längeren Aufenthalten oder wiederholten Reisen in Risikogebiete während der Übertragungssaison.',
            'Dengue ist in weiten Teilen Süd- und Südostasiens verbreitet und wird durch tagaktive Mücken übertragen. Den wichtigsten Schutz bietet konsequentes Mückenmanagement; eine Impfung kommt nur in bestimmten Konstellationen in Betracht und wird individuell geprüft.',
          ],
          en: [
            'Japanese encephalitis is a rare but severe viral infection transmitted by mosquitoes, mainly in rural areas with rice cultivation and pig farming. Vaccination is advisable for longer stays or repeated trips to risk areas during the transmission season.',
            'Dengue is widespread across much of South and Southeast Asia and is transmitted by day-biting mosquitoes. The most important protection is consistent mosquito management; vaccination is considered only in certain constellations and is assessed individually.',
          ],
        },
        callout: {
          variant: 'info',
          title: { de: 'Mückenschutz wirkt mehrfach', en: 'Mosquito protection works on several fronts' },
          text: {
            de: 'Konsequenter Schutz vor Mückenstichen – tagsüber wie nachts – senkt zugleich das Risiko für Dengue, Japanische Enzephalitis, Chikungunya und Malaria. Geeignete Repellentien, Kleidung und Verhaltensregeln besprechen wir in der Beratung.',
            en: 'Consistent protection against mosquito bites – by day and by night – also lowers the risk of dengue, Japanese encephalitis, chikungunya and malaria. We discuss suitable repellents, clothing and rules of conduct in the consultation.',
          },
        },
        links: [
          { label: { de: 'Japanische Enzephalitis', en: 'Japanese encephalitis' }, path: '/krankheitsbilder/japanische-enzephalitis' },
          { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' },
          { label: { de: 'Chikungunya', en: 'Chikungunya' }, path: '/krankheitsbilder/chikungunya' },
        ],
      },
      {
        id: 'malaria',
        heading: { de: 'Malaria & Mückenschutz', en: 'Malaria & mosquito protection' },
        body: {
          de: [
            'In einzelnen Regionen Süd- und Südostasiens besteht ein – meist geringes bis mittleres – Malariarisiko, etwa in ländlichen Grenzgebieten. In vielen touristischen Zentren und Städten ist das Risiko niedrig. Ob eine medikamentöse Vorbeugung oder ein Standby-Notfallmedikament sinnvoll ist, hängt stark vom konkreten Reisegebiet ab.',
            'Wir bewerten Ihr individuelles Risiko anhand Ihrer Route und Saison und besprechen Mückenschutz sowie – wo nötig – die passende Malariavorsorge.',
          ],
          en: [
            'In individual regions of South and Southeast Asia there is a – usually low to moderate – malaria risk, for example in rural border areas. In many tourist centres and cities the risk is low. Whether preventive medication or a standby emergency medication makes sense depends strongly on the specific area.',
            'We assess your individual risk based on your route and season and discuss mosquito protection and – where needed – the appropriate malaria prevention.',
          ],
        },
        list: {
          de: [
            'Risiko meist gering, regional sehr unterschiedlich',
            'Mückenschutz als Basis jeder Strategie',
            'Chemoprophylaxe oder Standby je nach Gebiet',
          ],
          en: [
            'Risk usually low, varying greatly by region',
            'Mosquito protection as the basis of every strategy',
            'Chemoprophylaxis or standby depending on the area',
          ],
        },
        links: [{ label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' }],
      },
      {
        id: 'planung',
        heading: { de: 'Planung & persönliche Beratung', en: 'Planning & personal advice' },
        body: {
          de: [
            'Planen Sie die Beratung möglichst 4 bis 6 Wochen vor Abreise, damit mehrteilige Impfserien (etwa Tollwut oder Japanische Enzephalitis) rechtzeitig abgeschlossen werden können. Bringen Sie Ihren Impfausweis und Ihre Reisedaten mit.',
            'Auch für kurzfristige Reisen finden wir eine sinnvolle Lösung. In der Beratung stimmen wir Ihren Schutz auf Reiseziel, Route und Gesundheit ab.',
          ],
          en: [
            'Plan the consultation ideally 4 to 6 weeks before departure so that multi-dose series (such as rabies or Japanese encephalitis) can be completed in time. Bring your vaccination record and travel details.',
            'We will find a sensible solution for short-notice trips too. In the consultation we tailor your protection to the destination, route and health.',
          ],
        },
        links: [
          { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
          { label: { de: 'Ablauf des Termins', en: 'How the appointment works' }, path: '/ablauf' },
        ],
      },
    ],
    sourceIds: [
      'stikoImpfempfehlungen',
      'dtgReiseimpfungen',
      'whoTravelHealth',
      'rkiJapanischeEnzephalitis',
      'rkiDengue',
      'rkiMalaria',
      'auswaertigesAmt',
    ],
    lastReviewed: LAST_REVIEWED,
    related: [
      { label: { de: 'Afrika südlich der Sahara', en: 'Sub-Saharan Africa' }, path: '/reiseziele/afrika' },
      { label: { de: 'Ozeanien & Pazifik', en: 'Oceania & the Pacific' }, path: '/reiseziele/ozeanien' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Risikogebiete – Gelbfieber & FSME', en: 'Risk areas – yellow fever & TBE' }, path: '/risikogebiete' },
    ],
  },
};

const lateinamerika: DestinationRegion = {
  slug: 'lateinamerika',
  icon: 'lateinamerika',
  name: { de: 'Lateinamerika & Karibik', en: 'Latin America & Caribbean' },
  shortName: { de: 'Lateinamerika', en: 'Latin America' },
  summary: {
    de: 'Amazonas, Anden und Karibik: Gelbfieber in den Tropen, Hepatitis A und Mückenschutz – in der Höhe kommt die Akklimatisierung hinzu.',
    en: 'Amazon, Andes and Caribbean: yellow fever in the tropics, hepatitis A and mosquito protection – with acclimatisation at altitude.',
  },
  examples: {
    de: 'Brasilien · Peru · Mexiko · Costa Rica · Kolumbien · Kuba',
    en: 'Brazil · Peru · Mexico · Costa Rica · Colombia · Cuba',
  },
  vaccines: {
    de: ['Gelbfieber', 'Hepatitis A', 'Typhus', 'Dengue', 'Höhenmedizin'],
    en: ['Yellow fever', 'Hepatitis A', 'Typhoid', 'Dengue', 'Altitude'],
  },
  page: {
    meta: {
      title: { de: 'Reiseimpfungen für Lateinamerika & Karibik', en: 'Travel vaccinations for Latin America & the Caribbean' },
      description: {
        de: 'Welche Impfungen für Brasilien, Peru, Mexiko & Co.? Überblick zu Gelbfieber (Amazonas, ICVP), Hepatitis A, Typhus, Dengue, Höhe und Malaria.',
        en: 'Which vaccinations for Brazil, Peru, Mexico & co.? Overview of yellow fever (Amazon, ICVP), hepatitis A, typhoid, dengue, altitude and malaria.',
      },
      eyebrow: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' },
      lead: {
        de: 'Von der Karibik über Mittelamerika und das Amazonasgebiet bis in die Anden und nach Patagonien: Lateinamerika ist landschaftlich wie reisemedizinisch vielfältig. Im Mittelpunkt stehen Gelbfieber in den Tropen, Hepatitis A und der Schutz vor Mückenstichen – in der Höhe kommt die Akklimatisierung hinzu.',
        en: 'From the Caribbean through Central America and the Amazon to the Andes and Patagonia: Latin America is varied both in landscape and in travel medicine. The focus is on yellow fever in the tropics, hepatitis A and protection against mosquito bites – with acclimatisation added at altitude.',
      },
    },
    sections: [
      {
        id: 'ueberblick',
        heading: { de: 'Überblick: Lateinamerika & Karibik', en: 'Overview: Latin America & Caribbean' },
        body: {
          de: [
            'Lateinamerika reicht von tropischen Regenwäldern und Karibikinseln über Hochgebirge bis in gemäßigte Zonen im Süden. Diese Vielfalt spiegelt sich in der Vorsorge: Eine Amazonas-Tour erfordert anderen Schutz als eine Städtereise nach Buenos Aires oder ein Badeurlaub in der Karibik.',
            'Für viele Reisen ist die Gelbfieberimpfung ein Thema – als Empfehlung und teils als Nachweispflicht. Daneben spielen Hepatitis A, Typhus und durch Mücken übertragene Erkrankungen wie Dengue eine Rolle.',
          ],
          en: [
            'Latin America ranges from tropical rainforests and Caribbean islands through high mountains to temperate zones in the south. This variety is reflected in prevention: an Amazon tour requires different protection than a city break to Buenos Aires or a beach holiday in the Caribbean.',
            'For many trips, yellow fever vaccination is a topic – as a recommendation and partly as a certificate requirement. Hepatitis A, typhoid and mosquito-borne illnesses such as dengue also play a role.',
          ],
        },
      },
      {
        id: 'impfungen',
        heading: { de: 'Empfohlene Reiseimpfungen', en: 'Recommended travel vaccinations' },
        body: {
          de: [
            'Zunächst sollte der Standardimpfschutz nach STIKO vollständig sein. Hepatitis A wird für nahezu alle Reisen empfohlen, Typhus vor allem bei einfachen Reisebedingungen, längeren Aufenthalten oder Reisen in ländliche Gebiete.',
            'Bei naturnahen Reisen, Trekking oder längeren Aufenthalten kommen Tollwut und Hepatitis B in Betracht. Die Gelbfieberimpfung wird je nach Reisegebiet gesondert betrachtet (siehe unten).',
          ],
          en: [
            'First, your routine cover under STIKO should be complete. Hepatitis A is recommended for almost all trips, typhoid especially with simple travel conditions, longer stays or travel to rural areas.',
            'For nature-based travel, trekking or longer stays, rabies and hepatitis B come into consideration. Yellow fever vaccination is assessed separately depending on the area (see below).',
          ],
        },
        list: {
          de: [
            'Standardimpfungen prüfen und auffrischen',
            'Hepatitis A – für nahezu alle Reisen empfohlen',
            'Typhus – bei einfachen Bedingungen und ländlichen Reisen',
            'Tollwut – bei Tierkontakt und naturnahen Reisen',
          ],
          en: [
            'Check and update routine vaccinations',
            'Hepatitis A – recommended for almost all trips',
            'Typhoid – with simple conditions and rural travel',
            'Rabies – with animal contact and nature-based travel',
          ],
        },
        links: [
          { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
          { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' },
          { label: { de: 'Tollwut', en: 'Rabies' }, path: '/krankheitsbilder/tollwut' },
          { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations overview' }, path: '/leistungen/reiseimpfungen' },
        ],
      },
      {
        id: 'gelbfieber-hoehe',
        heading: { de: 'Gelbfieber im Amazonas & Höhe in den Anden', en: 'Yellow fever in the Amazon & altitude in the Andes' },
        body: {
          de: [
            'In tropischen Gebieten – vor allem im Amazonasbecken von Brasilien, Peru, Bolivien, Ecuador und Kolumbien – besteht ein Gelbfieberrisiko. Einzelne Länder verlangen einen Impfnachweis (ICVP), insbesondere bei Einreise aus einem weiteren Gelbfiebergebiet. Als staatlich autorisierte Gelbfieberimpfstelle führen wir die Impfung durch und stellen den Nachweis aus.',
            'Wer in die Anden reist – etwa Cusco, Machu Picchu, La Paz oder den Titicacasee –, sollte die Höhenanpassung einplanen, um der Höhenkrankheit vorzubeugen. Ein langsamer Aufstieg, ausreichend Akklimatisierungszeit und das Erkennen von Warnzeichen sind entscheidend.',
          ],
          en: [
            'In tropical areas – above all the Amazon basin of Brazil, Peru, Bolivia, Ecuador and Colombia – there is a yellow fever risk. Some countries require a certificate (ICVP), particularly when entering from another yellow fever area. As a state-authorised yellow fever vaccination centre, we perform the vaccination and issue the certificate.',
            'Anyone travelling to the Andes – for example Cusco, Machu Picchu, La Paz or Lake Titicaca – should plan for acclimatisation to prevent altitude sickness. A slow ascent, sufficient time to acclimatise and recognising warning signs are decisive.',
          ],
        },
        callout: {
          variant: 'important',
          title: { de: 'Gelbfieber: Nachweis erst ab Tag 10', en: 'Yellow fever: certificate only from day 10' },
          text: {
            de: 'Der internationale Impfnachweis (ICVP) gilt erst ab dem 10. Tag nach der Impfung – planen Sie den Termin rechtzeitig. Welche Gebiete als Gelbfieberrisikogebiet gelten und welche Länder einen Nachweis verlangen, prüfen wir gemeinsam.',
            en: 'The international certificate (ICVP) only applies from day 10 after vaccination – schedule the appointment in good time. Which areas count as a yellow fever risk area and which countries require a certificate, we check together.',
          },
        },
        links: [
          { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
          { label: { de: 'Gelbfieber (Krankheitsbild)', en: 'Yellow fever (disease)' }, path: '/krankheitsbilder/gelbfieber' },
          { label: { de: 'Höhenmedizin', en: 'Altitude medicine' }, path: '/leistungen/hoehenmedizin' },
          { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
        ],
      },
      {
        id: 'muecken',
        heading: { de: 'Dengue & Mückenschutz', en: 'Dengue & mosquito protection' },
        body: {
          de: [
            'Dengue ist in tropischen Teilen Lateinamerikas und der Karibik weit verbreitet und wird durch tagaktive Mücken übertragen. Auch Chikungunya und Zika kommen vor. Den wichtigsten Schutz bietet konsequentes Mückenmanagement bei Tag und Nacht.',
            'In einzelnen Regionen – vor allem im Amazonasgebiet – besteht zudem ein Malariarisiko. Ob eine medikamentöse Vorbeugung sinnvoll ist, klären wir individuell anhand Ihrer Route.',
          ],
          en: [
            'Dengue is widespread in tropical parts of Latin America and the Caribbean and is transmitted by day-biting mosquitoes. Chikungunya and Zika also occur. The most important protection is consistent mosquito management by day and night.',
            'In individual regions – above all the Amazon – there is also a malaria risk. Whether preventive medication makes sense we clarify individually based on your route.',
          ],
        },
        list: {
          de: [
            'Dengue, Chikungunya, Zika – tagaktive Mücken',
            'Mückenschutz konsequent bei Tag und Nacht',
            'Malaria v. a. im Amazonasgebiet – individuell prüfen',
          ],
          en: [
            'Dengue, chikungunya, Zika – day-biting mosquitoes',
            'Consistent mosquito protection by day and night',
            'Malaria mainly in the Amazon – assessed individually',
          ],
        },
        links: [
          { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' },
          { label: { de: 'Chikungunya', en: 'Chikungunya' }, path: '/krankheitsbilder/chikungunya' },
          { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
        ],
      },
      {
        id: 'planung',
        heading: { de: 'Planung & persönliche Beratung', en: 'Planning & personal advice' },
        body: {
          de: [
            'Planen Sie die Beratung möglichst 4 bis 6 Wochen vor Abreise – der Gelbfiebernachweis gilt erst ab dem 10. Tag, und manche Impfungen brauchen mehrere Dosen. Bringen Sie Ihren Impfausweis und Ihre Reisedaten mit.',
            'Auch kurzfristige Reisen lassen sich sinnvoll begleiten. In der Beratung stimmen wir Ihren Schutz auf Reiseziel, Route und Gesundheit ab und planen den zeitlichen Ablauf.',
          ],
          en: [
            'Plan the consultation ideally 4 to 6 weeks before departure – the yellow fever certificate only applies from day 10, and some vaccinations need several doses. Bring your vaccination record and travel details.',
            'Short-notice trips can be supported sensibly as well. In the consultation we tailor your protection to the destination, route and health, and plan the timing.',
          ],
        },
        links: [
          { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
          { label: { de: 'Ablauf des Termins', en: 'How the appointment works' }, path: '/ablauf' },
        ],
      },
    ],
    sourceIds: [
      'stikoImpfempfehlungen',
      'dtgReiseimpfungen',
      'whoYellowFeverCountries',
      'rkiDengue',
      'cdcAltitude',
      'rkiMalaria',
      'auswaertigesAmt',
    ],
    lastReviewed: LAST_REVIEWED,
    related: [
      { label: { de: 'Afrika südlich der Sahara', en: 'Sub-Saharan Africa' }, path: '/reiseziele/afrika' },
      { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Risikogebiete – Gelbfieber & FSME', en: 'Risk areas – yellow fever & TBE' }, path: '/risikogebiete' },
    ],
  },
};

const naherOsten: DestinationRegion = {
  slug: 'naher-osten-nordafrika',
  icon: 'naherOsten',
  name: { de: 'Naher Osten & Nordafrika', en: 'Middle East & North Africa' },
  shortName: { de: 'Naher Osten', en: 'Middle East' },
  summary: {
    de: 'Mittelmeer, Levante und Arabische Halbinsel: meist solider Grundschutz – für Mekka-Pilger gilt eine Meningokokken-Nachweispflicht.',
    en: 'Mediterranean, Levant and Arabian Peninsula: usually solid basic protection – with a meningococcal certificate required for Mecca pilgrims.',
  },
  examples: {
    de: 'Ägypten · Marokko · Tunesien · Jordanien · VAE · Saudi-Arabien',
    en: 'Egypt · Morocco · Tunisia · Jordan · UAE · Saudi Arabia',
  },
  vaccines: {
    de: ['Hepatitis A', 'Typhus', 'Meningokokken (Hadsch)', 'Standardimpfungen'],
    en: ['Hepatitis A', 'Typhoid', 'Meningococcal (Hajj)', 'Routine vaccinations'],
  },
  page: {
    meta: {
      title: { de: 'Reiseimpfungen für den Nahen Osten & Nordafrika', en: 'Travel vaccinations for the Middle East & North Africa' },
      description: {
        de: 'Welche Impfungen für Ägypten, Marokko, Jordanien & Co.? Überblick zu Hepatitis A, Typhus, Standardimpfschutz und Meningokokken für Mekka-Pilger.',
        en: 'Which vaccinations for Egypt, Morocco, Jordan & co.? Overview of hepatitis A, typhoid, routine cover and meningococcal for Mecca pilgrims.',
      },
      eyebrow: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' },
      lead: {
        de: 'Von den Mittelmeerländern Nordafrikas über die Levante bis zur Arabischen Halbinsel: Für die meisten Urlaubs- und Geschäftsreisen genügt ein solider Grundschutz mit aktuellem Standardimpfschutz, Hepatitis A und ggf. Typhus. Einzelne Reiseanlässe – etwa Pilgerreisen nach Mekka – haben besondere Vorgaben.',
        en: 'From the Mediterranean countries of North Africa through the Levant to the Arabian Peninsula: for most leisure and business trips, solid basic protection with up-to-date routine cover, hepatitis A and possibly typhoid is sufficient. Certain occasions – such as pilgrimages to Mecca – have special requirements.',
      },
    },
    sections: [
      {
        id: 'ueberblick',
        heading: { de: 'Überblick: Naher Osten & Nordafrika', en: 'Overview: Middle East & North Africa' },
        body: {
          de: [
            'Die Region reicht von den Mittelmeerländern Nordafrikas (Marokko, Tunesien, Ägypten) über die Levante (Jordanien, Libanon) bis zur Arabischen Halbinsel (etwa Vereinigte Arabische Emirate, Oman, Saudi-Arabien). Für klassische Urlaubs- und Geschäftsreisen genügt meist ein solider Grundschutz.',
            'Gelbfieber kommt in der Region nicht vor; bei Einreise aus einem Gelbfiebergebiet kann jedoch ein Nachweis verlangt werden. Im Vordergrund stehen Lebensmittel- und Wasserhygiene sowie – je nach Reiseanlass – besondere Vorgaben wie bei Pilgerreisen.',
          ],
          en: [
            'The region ranges from the Mediterranean countries of North Africa (Morocco, Tunisia, Egypt) through the Levant (Jordan, Lebanon) to the Arabian Peninsula (such as the United Arab Emirates, Oman, Saudi Arabia). For classic leisure and business trips, solid basic protection is usually sufficient.',
            'Yellow fever does not occur in the region; however, a certificate may be required when entering from a yellow fever area. The focus is on food and water hygiene and – depending on the occasion – special requirements such as for pilgrimages.',
          ],
        },
      },
      {
        id: 'impfungen',
        heading: { de: 'Empfohlene Reiseimpfungen', en: 'Recommended travel vaccinations' },
        body: {
          de: [
            'Achten Sie zunächst auf einen vollständigen Standardimpfschutz nach STIKO (Tetanus, Diphtherie, Keuchhusten, Polio, MMR). Hepatitis A wird für die meisten Reisen empfohlen, Typhus bei einfachen Reisebedingungen, längeren Aufenthalten oder Reisen abseits der üblichen Touristenrouten.',
            'Bei längeren Aufenthalten oder besonderen Tätigkeiten können Hepatitis B oder Tollwut hinzukommen. Welche Auswahl für Sie passt, klären wir individuell.',
          ],
          en: [
            'First ensure complete routine cover under STIKO (tetanus, diphtheria, whooping cough, polio, MMR). Hepatitis A is recommended for most trips, typhoid with simple travel conditions, longer stays or travel off the usual tourist routes.',
            'For longer stays or particular activities, hepatitis B or rabies may be added. Which selection suits you we clarify individually.',
          ],
        },
        list: {
          de: [
            'Standardimpfungen prüfen und auffrischen',
            'Hepatitis A – für die meisten Reisen empfohlen',
            'Typhus – bei einfachen Bedingungen und längeren Aufenthalten',
            'Hepatitis B / Tollwut – je nach Reise und Tätigkeit',
          ],
          en: [
            'Check and update routine vaccinations',
            'Hepatitis A – recommended for most trips',
            'Typhoid – with simple conditions and longer stays',
            'Hepatitis B / rabies – depending on trip and activity',
          ],
        },
        links: [
          { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
          { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' },
          { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations overview' }, path: '/leistungen/reiseimpfungen' },
        ],
      },
      {
        id: 'pilgerreisen',
        heading: { de: 'Pilgerreisen: Meningokokken-Nachweis (Hadsch & Umra)', en: 'Pilgrimages: meningococcal certificate (Hajj & Umrah)' },
        body: {
          de: [
            'Für Pilgerreisen nach Mekka (Hadsch und Umra) verlangt Saudi-Arabien einen gültigen Nachweis der Meningokokken-Impfung gegen die Serogruppen A, C, W und Y (ACWY). Der Nachweis ist Einreisevoraussetzung und muss rechtzeitig vor der Reise vorliegen.',
            'Wir führen die Meningokokken-ACWY-Impfung durch und dokumentieren sie im Impfausweis. Die jeweils aktuellen Einreise- und Impfvorgaben können sich ändern; maßgeblich sind die offiziellen Vorgaben und die Hinweise des Auswärtigen Amts.',
          ],
          en: [
            'For pilgrimages to Mecca (Hajj and Umrah), Saudi Arabia requires a valid certificate of meningococcal vaccination against serogroups A, C, W and Y (ACWY). The certificate is a condition of entry and must be in place in good time before the trip.',
            'We perform the meningococcal ACWY vaccination and document it in your vaccination record. The current entry and vaccination requirements can change; the decisive sources are the official rules and the German Federal Foreign Office travel advice.',
          ],
        },
        callout: {
          variant: 'important',
          title: { de: 'Meningokokken-Nachweis für Mekka-Pilger', en: 'Meningococcal certificate for Mecca pilgrims' },
          text: {
            de: 'Für Hadsch und Umra ist der ACWY-Nachweis verpflichtend und muss in der Regel einige Tage vor Einreise gültig sein. Planen Sie den Impftermin rechtzeitig und bringen Sie Ihren Impfausweis mit.',
            en: 'For Hajj and Umrah the ACWY certificate is mandatory and must usually be valid a few days before entry. Plan the vaccination appointment in good time and bring your vaccination record.',
          },
        },
        links: [
          { label: { de: 'Meningokokken', en: 'Meningococcal disease' }, path: '/krankheitsbilder/meningokokken' },
          { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
        ],
      },
      {
        id: 'planung',
        heading: { de: 'Planung & persönliche Beratung', en: 'Planning & personal advice' },
        body: {
          de: [
            'Planen Sie die Beratung möglichst einige Wochen vor Abreise – insbesondere, wenn ein Nachweis (etwa Meningokokken für Mekka) fristgerecht vorliegen muss. Bringen Sie Ihren Impfausweis und Ihre Reisedaten mit.',
            'In der Beratung klären wir, welche Impfungen für Ihr Reiseziel und Ihren Reiseanlass sinnvoll oder vorgeschrieben sind, und stimmen den zeitlichen Ablauf ab.',
          ],
          en: [
            'Plan the consultation ideally a few weeks before departure – especially if a certificate (such as meningococcal for Mecca) must be valid in time. Bring your vaccination record and travel details.',
            'In the consultation we clarify which vaccinations are advisable or required for your destination and occasion, and align the timing.',
          ],
        },
        links: [
          { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
          { label: { de: 'Ablauf des Termins', en: 'How the appointment works' }, path: '/ablauf' },
        ],
      },
    ],
    sourceIds: [
      'stikoImpfempfehlungen',
      'dtgReiseimpfungen',
      'whoTravelHealth',
      'rkiMeningokokken',
      'rkiHepatitisA',
      'auswaertigesAmt',
    ],
    lastReviewed: LAST_REVIEWED,
    related: [
      { label: { de: 'Afrika südlich der Sahara', en: 'Sub-Saharan Africa' }, path: '/reiseziele/afrika' },
      { label: { de: 'Europa & Mittelmeerraum', en: 'Europe & Mediterranean' }, path: '/reiseziele/europa' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Risikogebiete – Gelbfieber & FSME', en: 'Risk areas – yellow fever & TBE' }, path: '/risikogebiete' },
    ],
  },
};

const europa: DestinationRegion = {
  slug: 'europa',
  icon: 'europa',
  name: { de: 'Europa & Mittelmeerraum', en: 'Europe & Mediterranean' },
  shortName: { de: 'Europa', en: 'Europe' },
  summary: {
    de: 'Zeckengebiete von Süddeutschland bis ins Baltikum: FSME steht im Vordergrund, dazu ein aktueller Standardimpfschutz.',
    en: 'Tick areas from southern Germany to the Baltics: TBE is central, alongside up-to-date routine vaccinations.',
  },
  examples: {
    de: 'Österreich · Schweiz · Baltikum · Skandinavien · Balkan · Süddeutschland',
    en: 'Austria · Switzerland · Baltics · Scandinavia · Balkans · Southern Germany',
  },
  vaccines: {
    de: ['FSME', 'Hepatitis A', 'Standardimpfungen'],
    en: ['TBE', 'Hepatitis A', 'Routine vaccinations'],
  },
  page: {
    meta: {
      title: { de: 'Reiseimpfungen für Europa & den Mittelmeerraum', en: 'Travel vaccinations for Europe & the Mediterranean' },
      description: {
        de: 'Welche Vorsorge für Reisen in Europa? Überblick zu FSME in Zeckengebieten, Standardimpfschutz und Hepatitis A in Teilen Ost- und Südosteuropas.',
        en: 'What prevention for trips within Europe? Overview of TBE in tick areas, routine cover and hepatitis A in parts of Eastern and South-Eastern Europe.',
      },
      eyebrow: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' },
      lead: {
        de: 'Auch innerhalb Europas ist Vorsorge ein Thema – allen voran die durch Zecken übertragene Frühsommer-Meningoenzephalitis (FSME) in vielen Regionen Mittel-, Nord- und Osteuropas. Dazu kommt es auf einen aktuellen Standardimpfschutz an; in einzelnen Ländern kann Hepatitis A eine Rolle spielen.',
        en: 'Within Europe, too, prevention is a topic – above all tick-borne encephalitis (TBE/FSME) in many regions of Central, Northern and Eastern Europe. Up-to-date routine vaccination cover also matters; in individual countries hepatitis A may play a role.',
      },
    },
    sections: [
      {
        id: 'ueberblick',
        heading: { de: 'Überblick: Europa & Mittelmeerraum', en: 'Overview: Europe & Mediterranean' },
        body: {
          de: [
            'Für Reisen innerhalb Europas ist der Vorsorgebedarf meist geringer als bei Fernreisen – ein aktueller Standardimpfschutz deckt vieles ab. Im Vordergrund steht die Frühsommer-Meningoenzephalitis (FSME), die durch Zecken übertragen wird.',
            'Bei Reisen in einzelne Länder Ost- und Südosteuropas oder bei einfachen Reisebedingungen kann zusätzlich Hepatitis A eine Rolle spielen. Welche Vorsorge sinnvoll ist, hängt von Reiseziel, Jahreszeit und Aktivitäten ab.',
          ],
          en: [
            'For trips within Europe, preventive needs are usually lower than for long-haul travel – up-to-date routine cover handles much of it. The focus is on tick-borne encephalitis (TBE/FSME), transmitted by ticks.',
            'When travelling to certain countries in Eastern and South-Eastern Europe, or with simple travel conditions, hepatitis A may also play a role. Which prevention makes sense depends on the destination, season and activities.',
          ],
        },
      },
      {
        id: 'fsme',
        heading: { de: 'FSME in Zeckengebieten', en: 'TBE in tick areas' },
        body: {
          de: [
            'FSME-Risikogebiete liegen unter anderem in Süddeutschland (Baden-Württemberg, Bayern sowie Teile von Hessen, Thüringen und Sachsen), in Österreich, der Schweiz, im Baltikum, in Skandinavien sowie in Teilen Ost- und Südosteuropas. Wer sich dort in der Zeckensaison (etwa Frühjahr bis Herbst) viel in der Natur aufhält – beim Wandern, Radfahren, Campen oder bei der Gartenarbeit –, profitiert von einem Impfschutz.',
            'Die FSME-Impfung besteht aus einer Grundimmunisierung mit drei Dosen und wird regelmäßig aufgefrischt. Welche Gebiete aktuell als Risikogebiet gelten, bewertet das Robert Koch-Institut jährlich neu.',
          ],
          en: [
            'TBE risk areas include southern Germany (Baden-Württemberg, Bavaria and parts of Hesse, Thuringia and Saxony), Austria, Switzerland, the Baltic states, Scandinavia and parts of Eastern and South-Eastern Europe. Anyone spending a lot of time outdoors there during the tick season (roughly spring to autumn) – hiking, cycling, camping or gardening – benefits from vaccination protection.',
            'TBE vaccination consists of a primary course of three doses and is boosted regularly. Which areas currently count as a risk area is reassessed annually by the Robert Koch Institute.',
          ],
        },
        callout: {
          variant: 'info',
          title: { de: 'FSME-Risikogebiete prüfen', en: 'Check the TBE risk areas' },
          text: {
            de: 'Ob Ihr Reiseziel als FSME-Risikogebiet ausgewiesen ist, sehen Sie in unserer Übersicht der Risikogebiete – dort sind die jährlich aktualisierten Karten von RKI und ECDC verlinkt.',
            en: 'Whether your destination is designated a TBE risk area can be seen in our risk-areas overview – the annually updated maps from the RKI and ECDC are linked there.',
          },
        },
        links: [
          { label: { de: 'FSME (Krankheitsbild)', en: 'TBE (disease)' }, path: '/krankheitsbilder/fsme' },
          { label: { de: 'FSME-Impfung', en: 'TBE vaccination' }, path: '/leistungen/fsme-impfung' },
          { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
        ],
      },
      {
        id: 'weitere',
        heading: { de: 'Standardschutz & Hepatitis A', en: 'Routine cover & hepatitis A' },
        body: {
          de: [
            'Unabhängig vom Reiseziel sollte der Standardimpfschutz nach STIKO vollständig und aktuell sein – dazu zählen Tetanus, Diphtherie, Keuchhusten und Polio sowie Masern-Mumps-Röteln. Gerade Masern treten auch in Europa immer wieder auf.',
            'Bei Reisen in Teile Ost- und Südosteuropas oder bei einfachen Reisebedingungen kann eine Hepatitis-A-Impfung sinnvoll sein. Wir beraten Sie, ob in Ihrem Fall über den Standardschutz hinaus etwas zu beachten ist.',
          ],
          en: [
            'Regardless of the destination, routine cover under STIKO should be complete and up to date – this includes tetanus, diphtheria, whooping cough and polio as well as measles-mumps-rubella. Measles in particular keeps recurring in Europe too.',
            'When travelling to parts of Eastern and South-Eastern Europe, or with simple travel conditions, a hepatitis A vaccination may be advisable. We advise you whether, in your case, anything beyond routine cover should be considered.',
          ],
        },
        list: {
          de: [
            'Standardimpfungen prüfen (Tetanus, Diphtherie, Polio, MMR)',
            'Masernschutz gerade in Europa wichtig',
            'Hepatitis A je nach Land und Reisestil',
          ],
          en: [
            'Check routine vaccinations (tetanus, diphtheria, polio, MMR)',
            'Measles protection important within Europe too',
            'Hepatitis A depending on country and travel style',
          ],
        },
        links: [
          { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
          { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations overview' }, path: '/leistungen/reiseimpfungen' },
        ],
      },
      {
        id: 'planung',
        heading: { de: 'Planung & persönliche Beratung', en: 'Planning & personal advice' },
        body: {
          de: [
            'Für die FSME-Grundimmunisierung sollten Sie einige Wochen einplanen, da sie aus mehreren Dosen besteht; ein erster Schutz lässt sich aber auch kurzfristig aufbauen. Bringen Sie Ihren Impfausweis mit, damit wir den bestehenden Schutz beurteilen können.',
            'In der Beratung klären wir, welche Impfungen für Ihr Reiseziel und Ihre Aktivitäten sinnvoll sind.',
          ],
          en: [
            'For the TBE primary course, allow several weeks, as it consists of multiple doses; an initial level of protection can also be built up at short notice. Bring your vaccination record so we can assess your existing cover.',
            'In the consultation we clarify which vaccinations make sense for your destination and activities.',
          ],
        },
        links: [
          { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
          { label: { de: 'Ablauf des Termins', en: 'How the appointment works' }, path: '/ablauf' },
        ],
      },
    ],
    sourceIds: [
      'stikoImpfempfehlungen',
      'rkiFsmeRisikogebiete',
      'ecdcTbe',
      'rkiHepatitisA',
      'auswaertigesAmt',
    ],
    lastReviewed: LAST_REVIEWED,
    related: [
      { label: { de: 'Naher Osten & Nordafrika', en: 'Middle East & North Africa' }, path: '/reiseziele/naher-osten-nordafrika' },
      { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Risikogebiete – Gelbfieber & FSME', en: 'Risk areas – yellow fever & TBE' }, path: '/risikogebiete' },
    ],
  },
};

const ozeanien: DestinationRegion = {
  slug: 'ozeanien',
  icon: 'ozeanien',
  name: { de: 'Australien, Neuseeland & Pazifik', en: 'Australia, New Zealand & the Pacific' },
  shortName: { de: 'Ozeanien', en: 'Oceania' },
  summary: {
    de: 'Australien und Neuseeland meist mit Standardschutz – tropische Pazifikinseln und Papua-Neuguinea erfordern mehr Vorsorge.',
    en: 'Australia and New Zealand usually with routine cover – tropical Pacific islands and Papua New Guinea call for more prevention.',
  },
  examples: {
    de: 'Australien · Neuseeland · Fidschi · Papua-Neuguinea · Französisch-Polynesien',
    en: 'Australia · New Zealand · Fiji · Papua New Guinea · French Polynesia',
  },
  vaccines: {
    de: ['Hepatitis A', 'Typhus', 'Dengue', 'Malaria (PNG)'],
    en: ['Hepatitis A', 'Typhoid', 'Dengue', 'Malaria (PNG)'],
  },
  page: {
    meta: {
      title: { de: 'Reiseimpfungen für Australien, Neuseeland & den Pazifik', en: 'Travel vaccinations for Australia, New Zealand & the Pacific' },
      description: {
        de: 'Welche Vorsorge für Australien, Neuseeland und die Pazifikinseln? Überblick zu Standardimpfschutz, Hepatitis A sowie Dengue und Malaria in den Tropen.',
        en: 'What prevention for Australia, New Zealand and the Pacific islands? Overview of routine cover, hepatitis A plus dengue and malaria in tropical areas.',
      },
      eyebrow: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' },
      lead: {
        de: 'Ozeanien reicht vom risikoarmen Australien und Neuseeland bis zu tropischen Pazifikinseln und Papua-Neuguinea. Für Australien und Neuseeland genügt häufig ein aktueller Standardimpfschutz; auf tropischen Inseln und in Papua-Neuguinea kommen durch Mücken übertragene Erkrankungen wie Dengue und – regional – Malaria hinzu.',
        en: 'Oceania ranges from low-risk Australia and New Zealand to tropical Pacific islands and Papua New Guinea. For Australia and New Zealand, up-to-date routine cover is often enough; on tropical islands and in Papua New Guinea, mosquito-borne illnesses such as dengue and – regionally – malaria are added.',
      },
    },
    sections: [
      {
        id: 'ueberblick',
        heading: { de: 'Überblick: Australien, Neuseeland & Pazifik', en: 'Overview: Australia, New Zealand & the Pacific' },
        body: {
          de: [
            'Die Region ist sehr unterschiedlich: Australien und Neuseeland sind gut entwickelte Reiseziele mit niedrigem Infektionsrisiko – hier steht ein vollständiger Standardimpfschutz im Vordergrund. Auf tropischen Pazifikinseln und besonders in Papua-Neuguinea ist der Vorsorgebedarf höher.',
            'Welche Impfungen sinnvoll sind, hängt stark vom konkreten Ziel, der Reisedauer und dem Reisestil ab: Eine Städtereise nach Sydney unterscheidet sich deutlich von einer Rucksack- oder Tauchreise über mehrere abgelegene Inseln.',
          ],
          en: [
            'The region is very diverse: Australia and New Zealand are well-developed destinations with a low infection risk – here, complete routine vaccination cover is the priority. On tropical Pacific islands, and especially in Papua New Guinea, preventive needs are higher.',
            'Which vaccinations make sense depends strongly on the specific destination, length of stay and travel style: a city trip to Sydney differs markedly from a backpacking or diving trip across several remote islands.',
          ],
        },
      },
      {
        id: 'impfungen',
        heading: { de: 'Empfohlene Reiseimpfungen', en: 'Recommended travel vaccinations' },
        body: {
          de: [
            'Für die gesamte Region sollte zunächst der Standardimpfschutz nach STIKO vollständig und aktuell sein – dazu zählen Tetanus, Diphtherie, Keuchhusten und Polio sowie Masern-Mumps-Röteln. Für viele Reisen kommt eine Hepatitis-A-Impfung hinzu.',
            'Bei längeren Aufenthalten, einfachen Reisebedingungen oder Reisen abseits touristischer Zentren – etwa auf abgelegenen Inseln oder in Papua-Neuguinea – können je nach Situation Typhus, Hepatitis B oder Tollwut sinnvoll sein. Die passende Auswahl besprechen wir individuell.',
          ],
          en: [
            'For the whole region, routine cover under STIKO should first be complete and up to date – this includes tetanus, diphtheria, whooping cough and polio as well as measles-mumps-rubella. For many trips, a hepatitis A vaccination is added.',
            'For longer stays, simple travel conditions or trips away from tourist centres – for example on remote islands or in Papua New Guinea – typhoid, hepatitis B or rabies may be advisable depending on the situation. We discuss the right selection individually.',
          ],
        },
        list: {
          de: [
            'Standardimpfungen prüfen (Tetanus, Diphtherie, Polio, MMR)',
            'Hepatitis A für viele Reisen',
            'Typhus, Hepatitis B, Tollwut je nach Ziel & Reisestil',
          ],
          en: [
            'Check routine vaccinations (tetanus, diphtheria, polio, MMR)',
            'Hepatitis A for many trips',
            'Typhoid, hepatitis B, rabies depending on destination & travel style',
          ],
        },
        links: [
          { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
          { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations overview' }, path: '/leistungen/reiseimpfungen' },
        ],
      },
      {
        id: 'tropen',
        heading: { de: 'Tropische Inseln & Papua-Neuguinea', en: 'Tropical islands & Papua New Guinea' },
        body: {
          de: [
            'Auf vielen tropischen Pazifikinseln kommt Dengue-Fieber vor, das durch tagaktive Mücken übertragen wird; phasenweise treten auch Chikungunya und Zika auf. Ein konsequenter Mückenschutz ist daher tagsüber wie abends wichtig. Gegen Dengue gibt es für bestimmte Personengruppen eine Impfung – ob sie für Sie infrage kommt, klären wir im Gespräch.',
            'In Papua-Neuguinea und einzelnen Gebieten Melanesiens besteht zusätzlich ein Malariarisiko. Hier gehören eine Beratung zur Malariavorsorge – Expositionsschutz und gegebenenfalls Medikamente – sowie ein verlässlicher Mückenschutz zur Reiseplanung. Auf abgelegenen Inseln ist außerdem die ärztliche Versorgung oft eingeschränkt und weit entfernt.',
          ],
          en: [
            'On many tropical Pacific islands, dengue fever occurs, transmitted by day-active mosquitoes; at times chikungunya and Zika also appear. Consistent mosquito protection during the day and in the evening is therefore important. For dengue, a vaccination is available for certain groups of people – whether it is an option for you is something we clarify in conversation.',
            'In Papua New Guinea and individual areas of Melanesia, there is also a malaria risk. Here, advice on malaria prevention – exposure protection and, where appropriate, medication – plus reliable mosquito protection are part of trip planning. On remote islands, medical care is also often limited and far away.',
          ],
        },
        callout: {
          variant: 'info',
          title: { de: 'Mückenschutz auf tropischen Inseln', en: 'Mosquito protection on tropical islands' },
          text: {
            de: 'Gegen Dengue, Chikungunya und Zika gibt es keine spezifische Behandlung – wirksamer Mückenschutz (Repellentien, lange Kleidung, Moskitonetz) ist die wichtigste Vorsorge und ergänzt die empfohlenen Impfungen.',
            en: 'There is no specific treatment for dengue, chikungunya or Zika – effective mosquito protection (repellents, long clothing, a mosquito net) is the most important precaution and complements the recommended vaccinations.',
          },
        },
        links: [
          { label: { de: 'Dengue-Fieber', en: 'Dengue fever' }, path: '/krankheitsbilder/dengue' },
          { label: { de: 'Malariavorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
        ],
      },
      {
        id: 'planung',
        heading: { de: 'Planung & persönliche Beratung', en: 'Planning & personal advice' },
        body: {
          de: [
            'Reisen nach Ozeanien sind oft lang und mit mehreren Zwischenstopps verbunden – planen Sie die reisemedizinische Beratung daher einige Wochen im Voraus ein, damit Impfungen rechtzeitig wirken. Beachten Sie außerdem Einreisebestimmungen: Bei Einreise aus einem Gelbfieber-Endemiegebiet kann ein Gelbfieber-Impfnachweis verlangt werden, auch wenn in Ozeanien selbst kein Gelbfieber vorkommt. Maßgeblich sind die aktuellen Hinweise des Auswärtigen Amts.',
            'Bringen Sie Ihren Impfausweis mit, damit wir den bestehenden Schutz beurteilen und gezielt ergänzen können. In der Beratung stimmen wir alles auf Ihr konkretes Ziel und Ihre Aktivitäten ab.',
          ],
          en: [
            'Trips to Oceania are often long and involve several stopovers – so plan the travel medicine consultation several weeks ahead, so that vaccinations take effect in time. Also note entry requirements: when arriving from a yellow fever endemic area, proof of yellow fever vaccination may be required, even though yellow fever does not occur in Oceania itself. The current advice from the Federal Foreign Office is decisive.',
            'Bring your vaccination record so we can assess your existing protection and add to it specifically. In the consultation, we tailor everything to your specific destination and activities.',
          ],
        },
        links: [
          { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
          { label: { de: 'Ablauf des Termins', en: 'How the appointment works' }, path: '/ablauf' },
        ],
      },
    ],
    sourceIds: [
      'stikoImpfempfehlungen',
      'dtgReiseimpfungen',
      'whoTravelHealth',
      'rkiDengue',
      'rkiMalaria',
      'auswaertigesAmt',
    ],
    lastReviewed: LAST_REVIEWED,
    related: [
      { label: { de: 'Süd- & Südostasien', en: 'South & Southeast Asia' }, path: '/reiseziele/asien' },
      { label: { de: 'Lateinamerika & Karibik', en: 'Latin America & Caribbean' }, path: '/reiseziele/lateinamerika' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Risikogebiete – Gelbfieber & FSME', en: 'Risk areas – yellow fever & TBE' }, path: '/risikogebiete' },
    ],
  },
};

/**
 * Alle Regionen in der Reihenfolge der Hub-Kartennavigation. Diese Reihenfolge
 * bestimmt sowohl das Karten-Grid auf der Übersichtsseite als auch das
 * Navigations-Dropdown im Header.
 */
export const regionList: DestinationRegion[] = [
  afrika,
  asien,
  lateinamerika,
  naherOsten,
  europa,
  ozeanien,
];

/** Schneller Zugriff per Slug (für getStaticPaths der dynamischen Route). */
export const regions: Record<string, DestinationRegion> = Object.fromEntries(
  regionList.map((region) => [region.slug, region]),
);

/** Hilfsfunktion: eine Region anhand ihres Slugs holen (oder undefined). */
export function getRegion(slug: string): DestinationRegion | undefined {
  return regions[slug];
}
