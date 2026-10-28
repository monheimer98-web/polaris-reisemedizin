/**
 * Länderseite Brasilien (DE/EN). Inhalte nach STIKO/DTG (Epid Bull 27/2026 inkl.
 * Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026), WHO-Länderliste
 * (ITH 2022) und Auswärtigem Amt (Stand 28.10.2026); Lagedaten von PAHO, ECDC und CDC.
 * Bewusst ohne Präparatenamen (HWG); Malaria-Vorbeugung nur als „vorbeugende
 * Tabletteneinnahme" bzw. „Notfallmedikament" beschrieben.
 * Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  feverCallout, malariaLink, yellowFeverLink, rabiesLink, typhoidLink, planningSection,
} from '../laenderBausteine';

/**
 * Neue Quellen – zum Einpflegen in `sources.ts`. `pahoGelbfieber2026`, `cdcOropouche`
 * und `cdcOropoucheSchwangerschaft` werden auch von der Peru-Seite referenziert.
 */
export const brasilienQuellen = {
  aaBrasilien: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Brasilien: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'Brazil: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/brasilien-node/brasiliensicherheit-201092',
    retrieved: new Date('2026-10-28'),
  },
  pahoGelbfieber2026: {
    publisher: 'Pan American Health Organization (PAHO/WHO)',
    title: {
      de: 'PAHO meldet anhaltende Gelbfieber-Übertragung in Teilen Südamerikas (13.03.2026)',
      en: 'PAHO reports sustained yellow fever transmission in parts of South America (13 March 2026)',
    },
    url: 'https://www.paho.org/en/news/13-3-2026-paho-reports-sustained-yellow-fever-transmission-parts-south-america',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Fallzahlen 2025 je Land (u. a. Brasilien, Peru) und erste Fälle 2026.',
      en: 'Case numbers for 2025 by country (including Brazil and Peru) and first cases in 2026.',
    },
  },
  cdcOropouche: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: {
      de: 'Länder und Gebiete mit aktueller oder früherer Oropouche-Übertragung',
      en: 'Countries and territories with recent or previous Oropouche virus transmission',
    },
    url: 'https://www.cdc.gov/oropouche/data-maps/countries-and-territories-at-risk-for-oropouche.html',
    retrieved: new Date('2026-10-28'),
  },
  cdcOropoucheSchwangerschaft: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: {
      de: 'Oropouche-Virus in der Schwangerschaft – Hinweise für Fachpersonal',
      en: 'Oropouche virus and pregnancy – clinical considerations',
    },
    url: 'https://www.cdc.gov/oropouche/hcp/clinical-care/pregnancy.html',
    retrieved: new Date('2026-10-28'),
  },
} satisfies Record<string, Source>;

export const brasilien: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für Brasilien', en: 'Travel vaccinations for Brazil' },
    description: {
      de: 'Brasilien-Reise: Gelbfieber-Empfehlung je Bundesstaat (auch Rio, São Paulo, Iguaçu), Malaria im Amazonas nach DTG 2026 und empfohlene Impfungen – Beratung in Langenfeld.',
      en: 'Travelling to Brazil: yellow fever advice by state (including Rio, São Paulo, Iguaçu), Amazon malaria per DTG 2026 and recommended vaccinations – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Lateinamerika', en: 'Destination Latin America' },
    lead: {
      de: 'Ob Rio de Janeiro, Iguaçu-Fälle, Pantanal oder Amazonas: In Brasilien hängt die Vorsorge stark von der Route ab. Besonders wichtig ist Gelbfieber – die Impfung wird inzwischen für den größten Teil des Landes empfohlen. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Whether Rio de Janeiro, Iguaçu Falls, the Pantanal or the Amazon: in Brazil, prevention depends heavily on your route. Yellow fever is particularly important – vaccination is now recommended for most of the country. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'gelbfieber',
      heading: { de: 'Gelbfieber: Empfehlung je nach Bundesstaat', en: 'Yellow fever: recommendation by state' },
      body: {
        de: [
          'Brasilien verlangt bei der Einreise keinen Gelbfieber-Nachweis – weder bei Einreise aus Deutschland noch aus anderen Ländern.',
          'Zum eigenen Schutz empfehlen WHO, STIKO und DTG die Impfung ab einem Alter von neun Monaten für Reisen in die Bundesstaaten Acre, Amapá, Amazonas, Distrito Federal mit Brasília, Espírito Santo, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Pará, Paraná, Piauí, Rio de Janeiro, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, São Paulo und Tocantins sowie in ausgewiesene Gebiete von Bahia. Das schließt die Städte Rio de Janeiro und São Paulo, das Pantanal und die Iguaçu-Fälle ein. Nicht empfohlen ist sie, wenn Sie ausschließlich Orte außerhalb dieser Gebiete besuchen, etwa die Küstenstädte Fortaleza oder Recife.',
          'Gelbfieber ist in Brasilien aktiv: 2025 meldete die Panamerikanische Gesundheitsorganisation (PAHO) 120 bestätigte Erkrankungen und 48 Todesfälle, zuletzt auch in Gegenden des Bundesstaats São Paulo, die bisher nicht als Risikozonen galten.',
          'Geimpft wird nur in einer staatlich autorisierten Gelbfieber-Impfstelle, spätestens zehn Tage vor der Reise. Das Zertifikat gilt lebenslang. Liegt Ihre Impfung zehn Jahre oder länger zurück, empfiehlt die STIKO vor einer erneuten Reise in ein Gelbfiebergebiet einmalig eine Auffrischung; für Kinder, Schwangere und Menschen mit geschwächtem Immunsystem gelten besondere Regeln. Ab 60 Jahren soll nach STIKO nur bei einem deutlichen, nicht vermeidbaren Infektionsrisiko geimpft werden, weil seltene schwere Nebenwirkungen häufiger sind – das wägen wir gemeinsam ab.',
        ],
        en: [
          'Brazil does not require a yellow fever certificate on entry – neither when arriving from Germany nor from other countries.',
          'For your own protection, WHO, STIKO and DTG recommend vaccination from nine months of age for travel to the states of Acre, Amapá, Amazonas, Distrito Federal with Brasília, Espírito Santo, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Pará, Paraná, Piauí, Rio de Janeiro, Rio Grande do Sul, Rondônia, Roraima, Santa Catarina, São Paulo and Tocantins, and to designated areas of Bahia. This includes the cities of Rio de Janeiro and São Paulo, the Pantanal and Iguaçu Falls. It is not recommended if you only visit places outside these areas, such as the coastal cities of Fortaleza or Recife.',
          'Yellow fever is active in Brazil: in 2025 the Pan American Health Organization (PAHO) reported 120 confirmed cases and 48 deaths, most recently also in parts of São Paulo state that had not previously been considered risk zones.',
          'Vaccination is only given at a state-authorised yellow fever vaccination centre, at least ten days before the trip. The certificate is valid for life. If your vaccination was ten or more years ago, STIKO recommends a single booster before travelling to a yellow fever area again; special rules apply to children, pregnant women and people with a weakened immune system. From the age of 60, STIKO advises vaccinating only if there is a significant, unavoidable risk of infection, because rare serious side effects are more frequent – we weigh this up together.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Weiterreise aus Brasilien', en: 'Travelling on from Brazil' },
        text: {
          de: 'Brasilien gilt selbst als Gelbfieber-Gebiet. Viele Länder verlangen danach einen Nachweis, darunter Ecuador, Kolumbien, Bolivien, Paraguay, Panama und Costa Rica, aber auch Indien oder Thailand. Ohne Nachweis kann schon der Weiterflug in Brasilien verweigert werden. Führen Sie den Impfausweis im Original mit; maßgeblich sind die Einreisevorschriften des jeweiligen Ziellandes.',
          en: 'Brazil itself counts as a yellow fever area. Many countries require proof afterwards, including Ecuador, Colombia, Bolivia, Paraguay, Panama and Costa Rica, but also India or Thailand. Without proof, you may already be refused boarding in Brazil. Carry the original certificate; the entry requirements of each destination country apply.',
        },
      },
      links: [yellowFeverLink, { label: { de: 'Gelbfieber', en: 'Yellow fever' }, path: '/krankheitsbilder/gelbfieber' }],
    },
    {
      id: 'impfungen',
      heading: { de: 'Weitere empfohlene Impfungen', en: 'Other recommended vaccinations' },
      body: {
        de: ['Neben Gelbfieber empfehlen STIKO und DTG für alle Reisenden aktuelle Standardimpfungen und Hepatitis A. Je nach Reise kommen weitere hinzu:'],
        en: ['Besides yellow fever, STIKO and DTG recommend up-to-date routine vaccinations and hepatitis A for all travellers. Depending on the trip, others are added:'],
      },
      list: {
        de: [
          'Standardimpfungen prüfen und auffrischen, insbesondere Masern – in Brasilien kam es in den letzten Jahren vereinzelt zu Ausbrüchen.',
          'Hepatitis A: für alle Reisenden.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, Tattoos oder Piercings, medizinischen Eingriffen oder neuen Sexualkontakten.',
          'Tollwut: Hunde gelten in Brasilien als weitgehend tollwutfrei; STIKO und DTG empfehlen deshalb keine routinemäßige Impfung. Tollwut kommt aber bei Fledermäusen und anderen Wildtieren vor. Bei absehbarem Umgang mit Wildtieren oder Fledermäusen, etwa bei Höhlenforschung oder Arbeit mit Tieren, ist die vorbeugende Impfung sinnvoll.',
          'Chikungunya: Brasilien meldet 2026 sehr viele Erkrankungen – laut ECDC bis Ende August über 127.000, zuletzt vor allem im Mittelwesten, Südosten und Nordosten. Die STIKO empfiehlt die Impfung ab zwölf Jahren bei Reisen in Ausbruchsgebiete sowie bei längeren oder wiederholten Aufenthalten, wenn ein erhöhtes Risiko für einen schweren oder chronischen Verlauf besteht, etwa ab 60 Jahren oder bei schweren Grunderkrankungen.',
          'Dengue: Impfung nur in bestimmten Situationen, vor allem nach einer früheren, im Labor nachgewiesenen Dengue-Infektion (ab vier Jahren). Das klären wir in der Beratung.',
        ],
        en: [
          'Check and boost routine vaccinations, especially measles – Brazil has had occasional outbreaks in recent years.',
          'Hepatitis A: for all travellers.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, tattoos or piercings, medical procedures or new sexual contacts.',
          'Rabies: dogs in Brazil are considered largely free of rabies, so STIKO and DTG do not recommend routine vaccination. Rabies does, however, occur in bats and other wild animals. If you expect to handle wild animals or bats, for example when caving or working with animals, pre-exposure vaccination makes sense.',
          'Chikungunya: Brazil is reporting very many cases in 2026 – according to ECDC more than 127,000 by the end of August, most recently mainly in the Centre-West, South-East and North-East. STIKO recommends vaccination from twelve years of age for travel to outbreak areas and for longer or repeated stays if there is an increased risk of a severe or chronic course, for example from the age of 60 or with serious underlying conditions.',
          'Dengue: vaccination only in specific situations, mainly after a previous laboratory-confirmed dengue infection (from four years of age). We clarify this in the consultation.',
        ],
      },
      links: [typhoidLink, rabiesLink, { label: { de: 'Chikungunya', en: 'Chikungunya' }, path: '/krankheitsbilder/chikungunya' }],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['In den großen Städten an der Küste und im Süden besteht kein, in vielen anderen Reisezielen nur ein geringes Malariarisiko. Relevant ist es im Amazonasbecken. Rund 80 Prozent der Infektionen sind Malaria tertiana, knapp 20 Prozent die gefährlichere Malaria tropica oder Mischinfektionen.'],
        en: ['In the large cities on the coast and in the south there is no malaria risk, and in many other destinations only a low one. The risk is relevant in the Amazon basin. Around 80 per cent of infections are vivax malaria, just under 20 per cent the more dangerous falciparum malaria or mixed infections.'],
      },
      list: {
        de: [
          'Malariafrei: die Städte Rio de Janeiro, São Paulo, Brasília, Salvador, Recife, Fortaleza, Curitiba, Porto Alegre und Vitória.',
          'Geringes Risiko: die übrigen Landesteile einschließlich Pantanal, Iguaçu-Fälle und der Stadtzentren von Manaus, Santarém und Macapá – die DTG empfiehlt konsequenten Mückenschutz.',
          'Mittleres Risiko: die meisten Gebiete der Bundesstaaten Amapá, Pará und Rondônia, der Westen von Mato Grosso, Teile des Bundesstaats Amazonas, die Stadtzentren von Boa Vista und Porto Velho sowie Flusskreuzfahrten mit Übernachtung auf großen Schiffen in Hochrisikogebieten – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
          'Hohes Risiko: Teile des Amazonasbeckens in den Bundesstaaten Acre, Amapá, Amazonas und Roraima sowie Teile des Nordostens und Südwestens von Pará – hier empfiehlt die DTG zusätzlich eine vorbeugende Tabletteneinnahme.',
          'Bei Lodges und Touren im Amazonasgebiet hängt die Empfehlung vom genauen Ort ab; wir prüfen sie anhand Ihrer Route und der DTG-Karte.',
        ],
        en: [
          'Malaria-free: the cities of Rio de Janeiro, São Paulo, Brasília, Salvador, Recife, Fortaleza, Curitiba, Porto Alegre and Vitória.',
          'Low risk: the rest of the country, including the Pantanal, Iguaçu Falls and the city centres of Manaus, Santarém and Macapá – DTG recommends consistent mosquito protection.',
          'Moderate risk: most areas of the states of Amapá, Pará and Rondônia, western Mato Grosso, parts of Amazonas state, the city centres of Boa Vista and Porto Velho, and river cruises with overnight stays on large ships in high-risk areas – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
          'High risk: parts of the Amazon basin in the states of Acre, Amapá, Amazonas and Roraima, and parts of north-eastern and south-western Pará – DTG additionally recommends preventive tablets there.',
          'For lodges and tours in the Amazon, the recommendation depends on the exact location; we check it against your route and the DTG map.',
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
          'Dengue, Chikungunya, Zika und Oropouche-Fieber können ganzjährig im ganzen Land auftreten – Mückenschutz auch tagsüber. Oropouche wird vor allem durch winzige Gnitzen übertragen; die meisten Ausbrüche gab es im Amazonasgebiet, zunehmend aber auch in anderen Bundesstaaten.',
          'Zika und Oropouche können in der Schwangerschaft auf das ungeborene Kind übergehen und es schädigen. Schwangere und Paare mit Kinderwunsch sollten sich vor der Reise ärztlich beraten lassen.',
          'Bilharziose (Schistosomiasis) in Seen und Flüssen, auch in fließendem Wasser – dort nicht baden.',
          'Chagas-Krankheit: Übertragung durch Raubwanzen in einfachen Unterkünften und über nicht industriell verarbeitete Frucht- und Zuckerrohrsäfte, etwa Açaí – solche Säfte meiden, auf dem Land unter einem Bettnetz schlafen.',
          'Leishmaniose, vor allem in ländlichen Regionen im Norden und Nordosten; Leptospirose nach Kontakt mit Süßwasser oder Schlamm.',
          'Tollwut: Kontakt zu Tieren meiden, auch zu Fledermäusen. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'Reisedurchfall sowie Hepatitis A und E: auf Trinkwasser- und Lebensmittelhygiene achten. Selbst gebrannten oder gepanschten Alkohol meiden – Gefahr von Methanolvergiftungen.',
        ],
        en: [
          'Dengue, chikungunya, Zika and Oropouche fever can occur all year round throughout the country – mosquito protection during the day as well. Oropouche is mainly transmitted by tiny biting midges; most outbreaks have been in the Amazon region, but increasingly in other states too.',
          'Zika and Oropouche can pass to the unborn child during pregnancy and harm it. Pregnant women and couples planning a pregnancy should seek medical advice before the trip.',
          'Schistosomiasis (bilharzia) in lakes and rivers, including flowing water – do not swim there.',
          'Chagas disease: transmitted by kissing bugs in basic accommodation and via fruit and sugar-cane juices that are not industrially processed, such as açaí – avoid such juices and sleep under a bed net in rural areas.',
          'Leishmaniasis, especially in rural areas in the north and north-east; leptospirosis after contact with fresh water or mud.',
          'Rabies: avoid contact with animals, including bats. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          "Travellers' diarrhoea and hepatitis A and E: pay attention to drinking water and food hygiene. Avoid home-distilled or adulterated alcohol – risk of methanol poisoning.",
        ],
      },
      links: [
        { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' },
        { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
      ],
    },
    {
      id: 'reisetipps',
      heading: { de: 'Tipps für unterwegs', en: 'Tips for your trip' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Mückenschutz: Mittel gegen Mücken auf freie Haut auftragen, lange, helle Kleidung tragen und in einfachen Unterkünften unter einem Moskitonetz schlafen.',
          'Versicherung: Private Kliniken in den großen Städten sind meist gut, verlangen aber oft eine hohe Vorauszahlung. Eine Auslandskrankenversicherung mit Rücktransport ist wichtig.',
          'Reiseapotheke und regelmäßig benötigte Medikamente mitnehmen, bei Bedarf mit ärztlicher Bescheinigung auf Englisch.',
          'Getränke in Bars und Clubs nie unbeaufsichtigt lassen – das Auswärtige Amt warnt vor K.-o.-Tropfen.',
          'Starke Sonne: Sonnenschutz für Haut und Augen, besonders am Strand und auf dem Wasser.',
        ],
        en: [
          'Mosquito protection: apply insect repellent to exposed skin, wear long, light-coloured clothing and sleep under a mosquito net in basic accommodation.',
          'Insurance: private clinics in the large cities are usually good but often demand a high advance payment. Travel health insurance including repatriation is important.',
          'Take a travel first-aid kit and any regular medication, if necessary with a medical certificate in English.',
          'Never leave drinks unattended in bars and clubs – the German Federal Foreign Office warns of drink spiking.',
          'Strong sun: protect your skin and eyes, especially on the beach and on the water.',
        ],
      },
      links: [
        { label: { de: 'Reiseapotheke', en: 'Travel first-aid kit' }, path: '/reiseapotheke' },
        { label: { de: 'Reisetipps', en: 'Travel tips' }, path: '/reisetipps' },
      ],
    },
    planningSection({
      de: 'Die Gelbfieberimpfung erhalten Sie direkt bei uns – mit Eintrag in den internationalen Impfausweis.',
      en: 'You can get the yellow fever vaccination directly from us, with an entry in your international certificate of vaccination.',
    }),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Rio de Janeiro eine Gelbfieberimpfung?', en: 'Do I need a yellow fever vaccination for Rio de Janeiro?' },
      a: {
        de: 'Vorgeschrieben ist sie nicht. Empfohlen wird sie nach WHO, STIKO und DTG aber ab neun Monaten auch für den Bundesstaat Rio de Janeiro einschließlich der Stadt – ebenso für São Paulo, Brasília und die Iguaçu-Fälle. Nicht empfohlen ist sie nur, wenn Sie ausschließlich Orte außerhalb der Risikogebiete besuchen, etwa Fortaleza oder Recife.',
        en: 'It is not mandatory. However, WHO, STIKO and DTG recommend it from nine months of age for Rio de Janeiro state including the city – and likewise for São Paulo, Brasília and Iguaçu Falls. It is only not recommended if you exclusively visit places outside the risk areas, such as Fortaleza or Recife.',
      },
    },
    {
      q: { de: 'Brauche ich für eine Amazonas-Reise Malaria-Tabletten?', en: 'Do I need malaria tablets for a trip to the Amazon?' },
      a: {
        de: 'Das hängt vom genauen Ziel ab. Im Stadtzentrum von Manaus ist das Risiko nach DTG gering, auf Flusskreuzfahrten mit Übernachtung auf großen Schiffen mittel. Für Hochrisikogebiete in Acre, Amapá, Amazonas, Roraima und Pará empfiehlt die DTG zusätzlich zum Mückenschutz eine vorbeugende Tabletteneinnahme. Für Rio, São Paulo und die Iguaçu-Fälle sind keine Tabletten nötig.',
        en: 'It depends on the exact destination. According to DTG, the risk in central Manaus is low and on river cruises with overnight stays on large ships moderate. For high-risk areas in Acre, Amapá, Amazonas, Roraima and Pará, DTG recommends preventive tablets in addition to mosquito protection. No tablets are needed for Rio, São Paulo or Iguaçu Falls.',
      },
    },
    {
      q: { de: 'Ich reise von Brasilien weiter – was muss ich beachten?', en: 'I am travelling on from Brazil – what do I need to consider?' },
      a: {
        de: 'Nach einem Brasilien-Aufenthalt verlangen viele Länder einen Gelbfieber-Nachweis, etwa Ecuador, Kolumbien, Bolivien, Paraguay oder Indien. Die Impfung muss mindestens zehn Tage vor der Einreise erfolgt sein. Maßgeblich sind die Einreisevorschriften des Ziellandes.',
        en: 'After a stay in Brazil, many countries require proof of yellow fever vaccination, for example Ecuador, Colombia, Bolivia, Paraguay or India. The vaccination must have been given at least ten days before entry. The entry requirements of the destination country apply.',
      },
    },
  ],
  // Neue Keys (aaBrasilien, pahoGelbfieber2026, cdcOropouche, cdcOropoucheSchwangerschaft)
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaBrasilien', 'whoYellowFeverCountries', 'pahoGelbfieber2026',
    'ecdcChikungunya2026', 'cdcOropouche', 'cdcOropoucheSchwangerschaft',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Lateinamerika & Karibik', en: 'Latin America & Caribbean' }, path: '/reiseziele/lateinamerika' },
    { label: { de: 'Peru', en: 'Peru' }, path: '/reiseziele/lateinamerika/peru' },
    { label: { de: 'Mexiko', en: 'Mexico' }, path: '/reiseziele/lateinamerika/mexiko' },
  ],
};
