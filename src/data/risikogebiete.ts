/**
 * Risikogebiete — kuratierter Überblick zu Gelbfieber- und FSME-Risikoregionen.
 *
 * Bewusst OHNE fest verdrahtete, volatile Länder- bzw. Landkreislisten: Diese
 * werden jährlich von den zuständigen Stellen (WHO, RKI) neu bewertet und sind
 * über die „Quellen & Stand"-Box (SourceList) live verlinkt. Die Seite ordnet
 * ein und verweist auf die maßgeblichen Quellen — statt eine Liste zu pflegen,
 * die sofort veraltet. Modell = ClinicalPage (zitiert, identisch DE/EN).
 */
import type { ClinicalPage } from './types';

export const riskAreasPage: ClinicalPage = {
  meta: {
    title: {
      de: 'Risikogebiete – Gelbfieber & FSME',
      en: 'Risk areas – yellow fever & TBE',
    },
    description: {
      de: 'Überblick zu den Risikoregionen für Gelbfieber und FSME mit Verweis auf die maßgeblichen, laufend aktualisierten Quellen von WHO, RKI und Auswärtigem Amt.',
      en: 'Overview of the risk regions for yellow fever and tick-borne encephalitis (TBE), with links to the authoritative, regularly updated sources from the WHO, RKI and the German Federal Foreign Office.',
    },
    eyebrow: {
      de: 'Reisemedizinische Orientierung',
      en: 'Travel medicine orientation',
    },
    lead: {
      de: 'Wo besteht ein Risiko für Gelbfieber oder FSME – und wo ist eine Impfung vorgeschrieben oder empfohlen? Dieser Überblick ordnet die Regionen ein und verweist auf die maßgeblichen, laufend aktualisierten Quellen. Die verbindliche Beurteilung für Ihre konkrete Reise erfolgt in der persönlichen Beratung.',
      en: 'Where is there a risk of yellow fever or TBE – and where is vaccination required or recommended? This overview puts the regions in context and points to the authoritative, continually updated sources. The binding assessment for your specific trip is made in a personal consultation.',
    },
  },
  sections: [
    {
      id: 'ueberblick',
      heading: { de: 'Warum sich Risikogebiete ändern', en: 'Why risk areas change' },
      body: {
        de: [
          'Risikogebiete werden von den zuständigen Stellen festgelegt und regelmäßig – meist jährlich – neu bewertet: für Gelbfieber durch die Weltgesundheitsorganisation (WHO), für FSME in Deutschland durch das Robert Koch-Institut (RKI). Auch die Einreisebestimmungen einzelner Länder können sich kurzfristig ändern.',
          'Dieser Überblick dient der Orientierung und ersetzt keine tagesaktuelle, vollständige Länderliste. Maßgeblich sind stets die offiziellen, laufend aktualisierten Quellen – sie sind unten unter „Quellen & Stand" verlinkt.',
        ],
        en: [
          'Risk areas are defined by the responsible authorities and reassessed regularly – usually once a year: for yellow fever by the World Health Organization (WHO), and for TBE in Germany by the Robert Koch Institute (RKI). Individual countries’ entry requirements can also change at short notice.',
          'This overview is intended for orientation and does not replace an up-to-date, complete list of countries. The official, continually updated sources are always authoritative – they are linked below under “Sources & status”.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Vor jeder Reise prüfen', en: 'Check before every trip' },
        text: {
          de: 'Einreisebestimmungen und Risikobewertungen können sich kurzfristig ändern. Prüfen Sie vor jeder Reise die aktuellen offiziellen Angaben – oder lassen Sie Ihre Reise in unserer Sprechstunde individuell beurteilen.',
          en: 'Entry requirements and risk assessments can change at short notice. Check the current official information before every trip – or have your itinerary assessed individually in our consultation.',
        },
      },
    },
    {
      id: 'gelbfieber-regionen',
      heading: { de: 'Gelbfieber: betroffene Regionen', en: 'Yellow fever: affected regions' },
      body: {
        de: [
          'Gelbfieber kommt in tropischen Regionen Afrikas südlich der Sahara sowie im tropischen Südamerika vor. In Asien, Europa, Nordamerika und im Pazifikraum tritt die Erkrankung nicht auf. Innerhalb der endemischen Zonen konzentriert sich das Risiko auf bestimmte Gebiete und kann je nach Reiseroute und Saison unterschiedlich ausfallen.',
        ],
        en: [
          'Yellow fever occurs in tropical regions of sub-Saharan Africa and in tropical South America. The disease does not occur in Asia, Europe, North America or the Pacific. Within the endemic zones the risk is concentrated in particular areas and can vary depending on the route and the season.',
        ],
      },
      list: {
        de: [
          'Subsahara-Afrika (tropische Regionen)',
          'Tropisches Südamerika (u. a. Amazonasbecken)',
          'Kein Vorkommen in Asien, Europa, Nordamerika und im Pazifikraum',
        ],
        en: [
          'Sub-Saharan Africa (tropical regions)',
          'Tropical South America (incl. the Amazon basin)',
          'Not present in Asia, Europe, North America or the Pacific',
        ],
      },
    },
    {
      id: 'gelbfieber-einreise',
      heading: {
        de: 'Gelbfieber: Impfpflicht und Einreisebestimmungen',
        en: 'Yellow fever: vaccination requirements and entry rules',
      },
      body: {
        de: [
          'Bei Gelbfieber sind zwei Dinge zu unterscheiden: die medizinische Empfehlung einer Impfung aufgrund des Infektionsrisikos und die rechtliche Impfpflicht zur Einreise. Zahlreiche Länder verlangen nach den Internationalen Gesundheitsvorschriften (IHR) einen gültigen Impfnachweis (ICVP) – häufig bei Einreise aus einem Gelbfieber-Endemiegebiet, teils auch bei kurzem Transit.',
          'Welche Länder einen Nachweis verlangen, legt die WHO in einer periodisch aktualisierten Länderliste fest; länderspezifische Hinweise gibt zusätzlich das Auswärtige Amt. Der Impfnachweis ist ab dem 10. Tag nach der Impfung gültig und gilt – seit der IHR-Änderung 2016 – lebenslang.',
        ],
        en: [
          'With yellow fever, two things must be distinguished: the medical recommendation to vaccinate because of the infection risk, and the legal requirement to be vaccinated in order to enter a country. Under the International Health Regulations (IHR), many countries require a valid certificate of vaccination (ICVP) – often when entering from a yellow fever endemic area, and sometimes even for a short transit.',
          'Which countries require proof is set out by the WHO in a periodically updated list of countries; the German Federal Foreign Office additionally provides country-specific guidance. The certificate is valid from day 10 after vaccination and – since the 2016 amendment to the IHR – for life.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Nachweis (ICVP) rechtzeitig einplanen', en: 'Plan your certificate (ICVP) in good time' },
        text: {
          de: 'Der Impfnachweis wird erst ab dem 10. Tag nach der Impfung gültig. Planen Sie den Termin daher mindestens zehn Tage vor Abreise. Die Gelbfieberimpfung führen wir als staatlich autorisierte Gelbfieberimpfstelle durch.',
          en: 'The certificate only becomes valid from day 10 after vaccination. Schedule your appointment at least ten days before departure. We perform yellow fever vaccination as a state-authorised yellow fever vaccination centre.',
        },
      },
    },
    {
      id: 'fsme-deutschland',
      heading: { de: 'FSME: Risikogebiete in Deutschland', en: 'TBE: risk areas in Germany' },
      body: {
        de: [
          'In Deutschland weist das RKI FSME-Risikogebiete auf Ebene der Stadt- und Landkreise aus und aktualisiert die Bewertung jährlich im Epidemiologischen Bulletin. Die Risikogebiete liegen schwerpunktmäßig im Süden – vor allem in Baden-Württemberg und Bayern – sowie in Teilen Hessens, Thüringens und Sachsens; einzelne Landkreise weiterer Bundesländer kommen hinzu. Umfang und Anzahl können von Jahr zu Jahr zunehmen.',
        ],
        en: [
          'In Germany, the RKI designates TBE risk areas at the level of urban and rural districts and updates this assessment annually in its Epidemiological Bulletin. The risk areas are concentrated in the south – above all in Baden-Württemberg and Bavaria – as well as in parts of Hesse, Thuringia and Saxony; individual districts in other federal states are added over time. Their extent and number can grow from year to year.',
        ],
      },
      list: {
        de: [
          'Schwerpunkt: Baden-Württemberg und Bayern',
          'Weitere Gebiete u. a. in Hessen, Thüringen und Sachsen',
          'Vereinzelte Landkreise in weiteren Bundesländern',
          'Jährliche Neubewertung durch das RKI',
        ],
        en: [
          'Focus: Baden-Württemberg and Bavaria',
          'Further areas in Hesse, Thuringia and Saxony, among others',
          'Individual districts in other federal states',
          'Reassessed annually by the RKI',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Aktuelle Karte beim RKI', en: 'Current map at the RKI' },
        text: {
          de: 'Ob Ihr konkreter Wohn- oder Reisekreis als Risikogebiet ausgewiesen ist, entnehmen Sie der jährlich aktualisierten Karte und Tabelle des RKI (unten verlinkt).',
          en: 'To check whether your specific home or destination district is designated as a risk area, see the RKI’s annually updated map and table (linked below).',
        },
      },
    },
    {
      id: 'fsme-ausland',
      heading: { de: 'FSME: Risiko im Ausland', en: 'TBE: risk abroad' },
      body: {
        de: [
          'FSME tritt in vielen Teilen Europas und in gemäßigten Zonen Asiens auf – unter anderem in Österreich, der Schweiz, in Mittel-, Ost- und Nordeuropa, im Baltikum sowie in Russland. Für die europäische Verbreitung stellt das ECDC Surveillance-Daten bereit. Ein Risiko besteht vor allem in der Zeckensaison (etwa Frühjahr bis Herbst) und bei Aufenthalten in der Natur.',
        ],
        en: [
          'TBE occurs in many parts of Europe and in temperate zones of Asia – including Austria, Switzerland, Central, Eastern and Northern Europe, the Baltic states and Russia. The ECDC provides surveillance data on its European distribution. The risk exists mainly during the tick season (roughly spring to autumn) and during stays in the countryside.',
        ],
      },
      list: {
        de: [
          'Mittel-, Ost- und Nordeuropa (u. a. Österreich, Schweiz, Baltikum)',
          'Gemäßigte Zonen Asiens bis nach Russland',
          'Saisonal vor allem Frühjahr bis Herbst',
          'Erhöhtes Risiko bei Aufenthalten in Wald, Wiese und Gestrüpp',
        ],
        en: [
          'Central, Eastern and Northern Europe (incl. Austria, Switzerland, the Baltics)',
          'Temperate zones of Asia as far as Russia',
          'Seasonal, mainly spring to autumn',
          'Higher risk during stays in woodland, meadows and undergrowth',
        ],
      },
    },
    {
      id: 'beratung',
      heading: { de: 'Individuelle Beurteilung in der Beratung', en: 'Individual assessment in the consultation' },
      body: {
        de: [
          'Ob eine Impfung sinnvoll oder vorgeschrieben ist, hängt von Reiseziel, Reiseroute, Saison, Aufenthaltsdauer, geplanten Aktivitäten und Ihrer gesundheitlichen Situation ab. In einer persönlichen reisemedizinischen Beratung gleichen wir Ihre Reise mit den aktuellen offiziellen Quellen ab und planen den zeitlichen Ablauf – etwa die Zehn-Tage-Regel bei der Gelbfieberimpfung.',
          'Bringen Sie zur Beratung bitte Ihren Impfausweis und die wichtigsten Reisedaten mit.',
        ],
        en: [
          'Whether a vaccination is advisable or required depends on the destination, route, season, length of stay, planned activities and your state of health. In a personal travel-medicine consultation we compare your trip against the current official sources and plan the timing – such as the ten-day rule for yellow fever vaccination.',
          'Please bring your vaccination certificate and your key travel details to the consultation.',
        ],
      },
    },
  ],
  sourceIds: [
    'whoYellowFeverCountries',
    'whoYellowFever',
    'whoPositionPaper',
    'auswaertigesAmt',
    'rkiFsmeRisikogebiete',
    'rkiFsme',
    'ecdcTbe',
    'dtgReiseimpfungen',
  ],
  lastReviewed: new Date('2026-05-15'),
  related: [
    { label: { de: 'Reiseimpfungen nach Reiseziel', en: 'Travel vaccinations by destination' }, path: '/reiseziele' },
    { label: { de: 'Gelbfieber (Krankheitsbild)', en: 'Yellow fever (disease)' }, path: '/krankheitsbilder/gelbfieber' },
    { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
    { label: { de: 'FSME (Krankheitsbild)', en: 'TBE (disease)' }, path: '/krankheitsbilder/fsme' },
    { label: { de: 'FSME-Impfung', en: 'TBE vaccination' }, path: '/leistungen/fsme-impfung' },
  ],
};
