/**
 * Reiseziele & Impfplanung — Orientierung nach Reiseregion statt nach einzelnen
 * Ländern. Bündelt die häufig gesuchten Ziel-/Länderbegriffe (z. B. Thailand,
 * Kenia, Brasilien) auf EINER starken, gepflegten Seite und führt je Reisetyp
 * zu den passenden Krankheitsbild- und Leistungsseiten (interne Verlinkung).
 *
 * Bewusst OHNE volatile, fest verdrahtete Länderlisten: maßgeblich bleiben die
 * laufend aktualisierten Quellen (WHO, RKI, Auswärtiges Amt), die in der
 * „Quellen & Stand"-Box verlinkt sind. Sachlich und HWG-konform (keine
 * Heilversprechen) — die verbindliche Empfehlung erfolgt in der Beratung.
 * Modell = ClinicalPage (zitiert, identisch DE/EN).
 */
import type { ClinicalPage } from './types';

export const destinationsPage: ClinicalPage = {
  meta: {
    title: {
      de: 'Reiseimpfungen nach Reiseziel',
      en: 'Travel vaccinations by destination',
    },
    description: {
      de: 'Welche Impfungen für welche Region? Überblick für Afrika, Süd- und Südostasien, Süd- und Mittelamerika sowie Europa – von Gelbfieber über Hepatitis A und Typhus bis FSME. Mit Verweis auf die persönliche reisemedizinische Beratung.',
      en: 'Which vaccinations for which region? An overview for Africa, South and Southeast Asia, South and Central America and Europe – from yellow fever and hepatitis A to typhoid and TBE. With reference to a personal travel-medicine consultation.',
    },
    eyebrow: {
      de: 'Reiseziele & Impfplanung',
      en: 'Destinations & vaccination planning',
    },
    lead: {
      de: 'Welche Reiseimpfungen sinnvoll oder vorgeschrieben sind, hängt vor allem vom Reiseziel ab – aber auch von Reiseroute, Reisezeit, Reisestil und Ihrer Gesundheit. Dieser Überblick ordnet die wichtigsten Regionen ein und führt zu den passenden Detailseiten. Die verbindliche Empfehlung für Ihre konkrete Reise treffen wir in der persönlichen Beratung.',
      en: 'Which travel vaccinations are advisable or required depends above all on the destination – but also on the route, the season, your travel style and your health. This overview puts the main regions in context and links to the relevant detail pages. The binding recommendation for your specific trip is made in a personal consultation.',
    },
  },
  sections: [
    {
      id: 'orientierung',
      heading: {
        de: 'Welche Impfungen brauche ich für meine Reise?',
        en: 'Which vaccinations do I need for my trip?',
      },
      body: {
        de: [
          'Eine pauschale Antwort gibt es nicht: Der nötige Schutz richtet sich nach Reiseziel und Reiseroute, nach Reisezeit und Saison, nach Aufenthaltsdauer und Reisestil (etwa Rucksack- oder Hotelreise, Stadt oder ländliche Region) sowie nach Alter und Gesundheitszustand. Grundsätzlich unterscheidet man Standardimpfungen, die unabhängig von der Reise empfohlen werden, und reisespezifische Impfungen für bestimmte Regionen.',
          'Vor jeder Reise sollte zunächst der allgemeine Impfschutz nach den Empfehlungen der Ständigen Impfkommission (STIKO) vollständig und aktuell sein – dazu zählen unter anderem Tetanus, Diphtherie, Keuchhusten und Polio sowie Masern-Mumps-Röteln. Hepatitis A wird für die meisten Fernreisen empfohlen. Darauf bauen die reisespezifischen Impfungen auf, die in diesem Überblick nach Regionen geordnet sind.',
        ],
        en: [
          'There is no one-size-fits-all answer: the protection you need depends on the destination and route, the season, the length of stay and your travel style (for example backpacking or hotel travel, city or rural region), as well as on your age and state of health. In principle, a distinction is made between standard vaccinations, which are recommended regardless of travel, and travel-specific vaccinations for particular regions.',
          'Before any trip, your general vaccination status should first be complete and up to date in line with the recommendations of the German Standing Committee on Vaccination (STIKO) – this includes tetanus, diphtheria, whooping cough and polio as well as measles-mumps-rubella. Hepatitis A is recommended for most long-haul trips. The travel-specific vaccinations, organised by region in this overview, build on this foundation.',
        ],
      },
      list: {
        de: [
          'Standardschutz prüfen und auffrischen (Tetanus, Diphtherie, Keuchhusten, Polio, MMR)',
          'Hepatitis A für die meisten Fernreisen',
          'Reisespezifische Impfungen je nach Region (siehe unten)',
          'Mücken- und Expositionsschutz ergänzt jede Impfstrategie',
        ],
        en: [
          'Check and update standard protection (tetanus, diphtheria, whooping cough, polio, MMR)',
          'Hepatitis A for most long-haul trips',
          'Travel-specific vaccinations depending on the region (see below)',
          'Protection against mosquito bites and exposure complements every vaccination strategy',
        ],
      },
      links: [
        { label: { de: 'Reisemedizinische Beratung', en: 'Travel-medicine consultation' }, path: '/leistungen/reiseberatung' },
        { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations overview' }, path: '/leistungen/reiseimpfungen' },
        { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
      ],
    },
    {
      id: 'afrika',
      heading: {
        de: 'Afrika südlich der Sahara & Safari (z. B. Kenia, Tansania, Südafrika)',
        en: 'Sub-Saharan Africa & safari (e.g. Kenya, Tanzania, South Africa)',
      },
      body: {
        de: [
          'Für Reisen in das subsaharische Afrika – etwa Safaris in Kenia, Tansania, Südafrika, Namibia oder Botswana sowie Reisen nach Westafrika (z. B. Ghana, Senegal, Gambia) – ist ein guter Impf- und Expositionsschutz besonders wichtig. In weiten Teilen besteht ein Risiko für Gelbfieber; zahlreiche Länder verlangen außerdem einen internationalen Impfnachweis (ICVP) bei der Einreise.',
          'Neben Gelbfieber kommen je nach Reise und Region weitere Impfungen in Betracht: Hepatitis A, Typhus, Tollwut, Meningokokken und – in besonderen Situationen – Cholera. In vielen Gebieten besteht zudem ein Malariarisiko, das eine eigene Vorsorge erfordert. Der ganzjährige Schutz vor Mückenstichen ist hier zentral.',
        ],
        en: [
          'For trips to sub-Saharan Africa – such as safaris in Kenya, Tanzania, South Africa, Namibia or Botswana, as well as travel to West Africa (e.g. Ghana, Senegal, Gambia) – good vaccination and exposure protection is particularly important. In large parts there is a risk of yellow fever; many countries also require an international certificate of vaccination (ICVP) on entry.',
          'Besides yellow fever, further vaccinations may be considered depending on the trip and region: hepatitis A, typhoid, rabies, meningococcal disease and – in special situations – cholera. Many areas also carry a malaria risk that requires its own prevention. Year-round protection against mosquito bites is key here.',
        ],
      },
      list: {
        de: [
          'Gelbfieber – Impfung und häufig Nachweispflicht (ICVP)',
          'Hepatitis A und Typhus (Lebensmittel- und Wasserhygiene)',
          'Tollwut – besonders bei Tier- und Naturnähe',
          'Meningokokken – v. a. im Sahel / „Meningitisgürtel"',
          'Malaria-Vorsorge je nach Region und Saison',
        ],
        en: [
          'Yellow fever – vaccination and often a certificate requirement (ICVP)',
          'Hepatitis A and typhoid (food and water hygiene)',
          'Rabies – especially with animal contact or rural travel',
          'Meningococcal disease – mainly in the Sahel / "meningitis belt"',
          'Malaria prevention depending on region and season',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Gelbfiebernachweis rechtzeitig planen', en: 'Plan your yellow fever certificate in good time' },
        text: {
          de: 'Viele afrikanische Länder verlangen einen gültigen Gelbfieber-Nachweis (ICVP), der erst ab dem 10. Tag nach der Impfung gilt. Planen Sie den Termin daher rechtzeitig. Die Gelbfieberimpfung führen wir als staatlich autorisierte Gelbfieberimpfstelle durch.',
          en: 'Many African countries require a valid yellow fever certificate (ICVP), which only becomes valid from day 10 after vaccination. Schedule your appointment in good time. We perform yellow fever vaccination as a state-authorised yellow fever vaccination centre.',
        },
      },
      links: [
        { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
        { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
        { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' },
        { label: { de: 'Meningokokken', en: 'Meningococcal disease' }, path: '/krankheitsbilder/meningokokken' },
        { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
      ],
    },
    {
      id: 'suedamerika',
      heading: {
        de: 'Süd- und Mittelamerika & Amazonas (z. B. Brasilien, Peru)',
        en: 'South and Central America & the Amazon (e.g. Brazil, Peru)',
      },
      body: {
        de: [
          'In tropischen Regionen Süd- und Mittelamerikas – etwa im Amazonasgebiet von Brasilien, Peru, Bolivien, Ecuador oder Kolumbien – besteht in vielen Gebieten ein Gelbfieberrisiko. Für die Einreise oder Weiterreise kann ein Impfnachweis verlangt werden. Auch Hepatitis A und Typhus spielen eine Rolle, ebenso durch Mücken übertragene Erkrankungen wie Dengue.',
          'Wer in große Höhen reist – beispielsweise in die Anden (Cusco, La Paz, Titicacasee) – sollte zusätzlich die Höhenanpassung bedenken, um der Höhenkrankheit vorzubeugen. In einigen Regionen besteht ein Malariarisiko. Welche Maßnahmen für Ihre Route sinnvoll sind, klären wir individuell.',
        ],
        en: [
          'In tropical regions of South and Central America – for example the Amazon basin of Brazil, Peru, Bolivia, Ecuador or Colombia – many areas carry a yellow fever risk. A certificate of vaccination may be required for entry or onward travel. Hepatitis A and typhoid also play a role, as do mosquito-borne illnesses such as dengue.',
          'Anyone travelling to high altitudes – for example the Andes (Cusco, La Paz, Lake Titicaca) – should also consider acclimatisation to prevent altitude sickness. Some regions carry a malaria risk. We clarify individually which measures make sense for your route.',
        ],
      },
      list: {
        de: [
          'Gelbfieber – Risiko v. a. im Amazonasgebiet; Nachweis möglich',
          'Hepatitis A und Typhus',
          'Dengue – konsequenter Mückenschutz (tagsüber)',
          'Höhenkrankheit bei Anden-Reisen (Cusco, La Paz)',
          'Malaria-Vorsorge in einzelnen Regionen',
        ],
        en: [
          'Yellow fever – risk mainly in the Amazon basin; certificate possible',
          'Hepatitis A and typhoid',
          'Dengue – consistent (daytime) mosquito protection',
          'Altitude sickness on Andes trips (Cusco, La Paz)',
          'Malaria prevention in individual regions',
        ],
      },
      links: [
        { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
        { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
        { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' },
        { label: { de: 'Höhenmedizin', en: 'Altitude medicine' }, path: '/leistungen/hoehenmedizin' },
        { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
      ],
    },
    {
      id: 'asien',
      heading: {
        de: 'Süd- und Südostasien (z. B. Thailand, Vietnam, Indien, Indonesien)',
        en: 'South and Southeast Asia (e.g. Thailand, Vietnam, India, Indonesia)',
      },
      body: {
        de: [
          'Für beliebte Reiseziele in Süd- und Südostasien – darunter Thailand, Vietnam, Kambodscha, Indonesien (Bali), die Philippinen, Sri Lanka, Nepal und Indien – werden je nach Reisestil verschiedene Impfungen empfohlen. Hepatitis A und Typhus sind hier häufig Thema, gerade auf dem indischen Subkontinent. Gelbfieber kommt in Asien nicht vor; ein Nachweis kann jedoch bei Einreise aus einem Endemiegebiet verlangt werden.',
          'Durch Mücken übertragene Erkrankungen wie Dengue sind in vielen Regionen verbreitet; gegen die seltene, aber schwer verlaufende Japanische Enzephalitis ist bei längeren Aufenthalten in ländlichen Gebieten eine Impfung möglich. Tollwut ist in Teilen Asiens relevant, ebenso – je nach Reise – Hepatitis B. In einzelnen Regionen besteht ein Malariarisiko.',
        ],
        en: [
          'For popular destinations in South and Southeast Asia – including Thailand, Vietnam, Cambodia, Indonesia (Bali), the Philippines, Sri Lanka, Nepal and India – various vaccinations are recommended depending on travel style. Hepatitis A and typhoid are often a topic here, especially on the Indian subcontinent. Yellow fever does not occur in Asia; however, a certificate may be required when entering from an endemic area.',
          'Mosquito-borne illnesses such as dengue are widespread in many regions; against the rare but severe Japanese encephalitis, vaccination is possible for longer stays in rural areas. Rabies is relevant in parts of Asia, as is – depending on the trip – hepatitis B. Some regions carry a malaria risk.',
        ],
      },
      list: {
        de: [
          'Hepatitis A und Typhus (v. a. Südasien / Indien)',
          'Dengue – Mückenschutz, ggf. Impfung nach Indikation',
          'Japanische Enzephalitis – ländliche Langzeitaufenthalte',
          'Tollwut – bei Tierkontakt und Naturnähe',
          'Malaria-Vorsorge je nach Region',
        ],
        en: [
          'Hepatitis A and typhoid (especially South Asia / India)',
          'Dengue – mosquito protection, vaccination by indication where appropriate',
          'Japanese encephalitis – rural, longer-term stays',
          'Rabies – with animal contact and rural travel',
          'Malaria prevention depending on region',
        ],
      },
      links: [
        { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
        { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' },
        { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' },
        { label: { de: 'Japanische Enzephalitis', en: 'Japanese encephalitis' }, path: '/krankheitsbilder/japanische-enzephalitis' },
        { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
      ],
    },
    {
      id: 'europa',
      heading: {
        de: 'Europa & Zeckengebiete (FSME)',
        en: 'Europe & tick areas (TBE)',
      },
      body: {
        de: [
          'Auch innerhalb Europas ist Vorsorge ein Thema – vor allem die Frühsommer-Meningoenzephalitis (FSME), die durch Zecken übertragen wird. Risikogebiete liegen unter anderem in Süddeutschland (Baden-Württemberg, Bayern), in Österreich, der Schweiz, im Baltikum, in Skandinavien und in Teilen Ost- und Südosteuropas. Wer sich dort in der Zeckensaison (Frühjahr bis Herbst) viel in der Natur aufhält, profitiert von einem Impfschutz.',
          'Bei Reisen in einzelne Länder Ost- und Südosteuropas kann je nach Bedingungen auch Hepatitis A eine Rolle spielen. Welche Gebiete aktuell als FSME-Risikogebiet gelten, bewertet das Robert Koch-Institut jährlich neu.',
        ],
        en: [
          'Within Europe, too, prevention is a topic – above all tick-borne encephalitis (TBE), which is transmitted by ticks. Risk areas include southern Germany (Baden-Württemberg, Bavaria), Austria, Switzerland, the Baltic states, Scandinavia and parts of Eastern and South-Eastern Europe. Anyone spending a lot of time outdoors there during the tick season (spring to autumn) benefits from vaccination protection.',
          'When travelling to certain countries in Eastern and South-Eastern Europe, hepatitis A may also play a role depending on the conditions. Which areas currently count as TBE risk areas is reassessed annually by the Robert Koch Institute.',
        ],
      },
      list: {
        de: [
          'FSME – Zeckengebiete in Süddeutschland, Österreich, Schweiz, Baltikum u. a.',
          'Risiko v. a. bei Outdoor-Aktivitäten in der Zeckensaison',
          'Standardimpfungen aktuell halten',
          'Hepatitis A je nach Land und Reisestil',
        ],
        en: [
          'TBE – tick areas in southern Germany, Austria, Switzerland, the Baltics and others',
          'Risk mainly during outdoor activities in the tick season',
          'Keep standard vaccinations up to date',
          'Hepatitis A depending on country and travel style',
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
      id: 'besondere-reisen',
      heading: {
        de: 'Besondere Reisen und persönliche Beratung',
        en: 'Special trips and personal advice',
      },
      body: {
        de: [
          'Manche Reisen erfordern eine besondere Planung. Bei Pilgerreisen nach Mekka (Hadsch und Umra) ist ein Nachweis der Meningokokken-Impfung (Typen ACWY) Einreisevoraussetzung. Bei Langzeit- und Rucksackreisen, beruflichen Auslandsaufenthalten oder Reisen mit einfachem Reisestil kann ein erweiterter Schutz – etwa Tollwut, Hepatitis B oder Japanische Enzephalitis – sinnvoll sein.',
          'Auch Schwangere, Kinder, ältere Menschen sowie Personen mit chronischen Erkrankungen oder geschwächtem Immunsystem brauchen eine individuell angepasste Beratung – manche Lebendimpfstoffe wie die Gelbfieberimpfung sind dann nur eingeschränkt oder nach sorgfältiger Nutzen-Risiko-Abwägung möglich. In der persönlichen reisemedizinischen Beratung stimmen wir Ihren Schutz auf Reiseziel, Route und Gesundheit ab und planen den zeitlichen Ablauf.',
        ],
        en: [
          'Some trips require special planning. For pilgrimages to Mecca (Hajj and Umrah), proof of meningococcal vaccination (types ACWY) is an entry requirement. For long-term and backpacking trips, professional stays abroad or travel with a simple style, extended protection – such as rabies, hepatitis B or Japanese encephalitis – may be advisable.',
          'Pregnant women, children, older people and those with chronic conditions or a weakened immune system also need individually tailored advice – some live vaccines such as the yellow fever vaccination are then only possible to a limited extent or after a careful risk-benefit assessment. In a personal travel-medicine consultation we tailor your protection to the destination, route and health, and plan the timing.',
        ],
      },
      list: {
        de: [
          'Pilgerreisen (Hadsch/Umra): Meningokokken ACWY – Nachweispflicht',
          'Langzeit- und Rucksackreisen: ggf. erweiterter Schutz',
          'Schwangere, Kinder, chronisch Kranke: individuelle Beratung',
          'Impfpass und Reisedaten zur Beratung mitbringen',
        ],
        en: [
          'Pilgrimages (Hajj/Umrah): meningococcal ACWY – certificate required',
          'Long-term and backpacking trips: extended protection where appropriate',
          'Pregnant women, children, people with chronic illness: individual advice',
          'Bring your vaccination record and travel details to the consultation',
        ],
      },
      links: [
        { label: { de: 'Reisemedizinische Beratung', en: 'Travel-medicine consultation' }, path: '/leistungen/reiseberatung' },
        { label: { de: 'Meningokokken', en: 'Meningococcal disease' }, path: '/krankheitsbilder/meningokokken' },
        { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
      ],
    },
  ],
  sourceIds: [
    'stikoImpfempfehlungen',
    'dtgReiseimpfungen',
    'whoTravelHealth',
    'auswaertigesAmt',
    'whoYellowFeverCountries',
    'rkiMalaria',
    'cdcAltitude',
    'rkiFsmeRisikogebiete',
  ],
  lastReviewed: new Date('2026-06-13'),
  related: [
    { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Reiseimpfungen', en: 'Travel vaccinations' }, path: '/leistungen/reiseimpfungen' },
    { label: { de: 'Risikogebiete – Gelbfieber & FSME', en: 'Risk areas – yellow fever & TBE' }, path: '/risikogebiete' },
    { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
  ],
};
