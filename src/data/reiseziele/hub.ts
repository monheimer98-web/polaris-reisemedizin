/**
 * Reiseziele — Hub-Inhalt (Übersichtsseite).
 *
 * Trägt die bilingualen Texte der Reiseziele-Übersicht: Hero, das
 * Planungs-Framework (vier Faktoren guter Reisevorsorge), den Hinweis auf den
 * Standardimpfschutz, die Einordnung „Pflicht vs. Empfehlung" sowie die Labels
 * der Regionenkarten. Die eigentlichen Regionen liegen in `regions.ts`.
 *
 * Bewusst sachlich und HWG-konform (keine Heilversprechen, keine Preise): Der
 * Hub orientiert und verweist auf die persönliche Beratung sowie die laufend
 * aktualisierten Quellen (STIKO, DTG, WHO, Auswärtiges Amt).
 */
import type { Localized } from '../types';
import type { SourceId } from '../sources';

export type PlanningIcon = 'destination' | 'style' | 'duration' | 'health';

export interface PlanningFactor {
  icon: PlanningIcon;
  title: Localized;
  text: Localized;
}

export interface DestinationsHubContent {
  meta: { title: Localized; description: Localized; eyebrow: Localized; lead: Localized };
  planning: { heading: Localized; lead: Localized; factors: PlanningFactor[] };
  standardNote: { title: Localized; text: Localized };
  regions: { heading: Localized; lead: Localized };
  classification: {
    heading: Localized;
    lead: Localized;
    required: { title: Localized; text: Localized };
    recommended: { title: Localized; text: Localized };
  };
  cardLabels: { examples: Localized; topics: Localized; cta: Localized };
  sourceIds: SourceId[];
  lastReviewed: Date;
}

export const destinationsHub: DestinationsHubContent = {
  meta: {
    title: { de: 'Reiseziele & Impfplanung', en: 'Destinations & vaccination planning' },
    description: {
      de: 'Impfschutz nach Reiseregion planen: Afrika, Asien, Mittel- & Südamerika, Naher Osten, Europa und der Pazifik im Überblick – mit persönlicher Beratung.',
      en: 'Plan vaccination cover by travel region: Africa, Asia, Central & South America, the Middle East, Europe and the Pacific – with personal advice.',
    },
    eyebrow: { de: 'Reisevorsorge nach Region', en: 'Travel prevention by region' },
    lead: {
      de: 'Welche Impfungen und welche Vorsorge sinnvoll sind, hängt von Ihrem Reiseziel ab – aber nicht nur. Verschaffen Sie sich hier einen Überblick nach Weltregionen und erfahren Sie, worauf es bei der Planung ankommt. Die verbindliche Empfehlung treffen wir gemeinsam in der persönlichen Beratung.',
      en: 'Which vaccinations and which prevention make sense depends on your destination – but not only on that. Get an overview here organised by world region and learn what matters when planning. We make the binding recommendation together in a personal consultation.',
    },
  },
  planning: {
    heading: { de: 'Worauf es bei der Impfplanung ankommt', en: 'What matters when planning vaccinations' },
    lead: {
      de: 'Vier Faktoren bestimmen, welche Vorsorge für Sie sinnvoll ist. Sie fließen in jede individuelle Empfehlung ein:',
      en: 'Four factors determine which prevention makes sense for you. They feed into every individual recommendation:',
    },
    factors: [
      {
        icon: 'destination',
        title: { de: 'Reiseziel & Region', en: 'Destination & region' },
        text: {
          de: 'Welche Krankheiten vor Ort vorkommen und ob für die Einreise ein Impfnachweis verlangt wird – etwa gegen Gelbfieber.',
          en: 'Which diseases occur locally and whether entry requires proof of vaccination – for example against yellow fever.',
        },
      },
      {
        icon: 'style',
        title: { de: 'Reisestil & Aktivitäten', en: 'Travel style & activities' },
        text: {
          de: 'Rucksackreise oder Hotel, Stadt oder Hinterland, Trekking, Tauchen oder Tierkontakt – das Risiko hängt stark davon ab, wie Sie reisen.',
          en: 'Backpacking or hotel, city or back country, trekking, diving or animal contact – the risk depends strongly on how you travel.',
        },
      },
      {
        icon: 'duration',
        title: { de: 'Dauer & Reisezeit', en: 'Duration & season' },
        text: {
          de: 'Kurzurlaub oder Langzeitaufenthalt und die Jahreszeit beeinflussen, welche Impfungen und welcher Mückenschutz sinnvoll sind.',
          en: 'A short break or a long stay, and the season, influence which vaccinations and which mosquito protection make sense.',
        },
      },
      {
        icon: 'health',
        title: { de: 'Ihre Gesundheit', en: 'Your health' },
        text: {
          de: 'Vorerkrankungen, Medikamente, Schwangerschaft oder Ihr Alter bestimmen mit, welche Impfungen für Sie geeignet sind.',
          en: 'Pre-existing conditions, medication, pregnancy or your age also determine which vaccinations are suitable for you.',
        },
      },
    ],
  },
  standardNote: {
    title: { de: 'Standardimpfungen zuerst', en: 'Routine vaccinations first' },
    text: {
      de: 'Vor jeder Reiseimpfung steht ein vollständiger Standardimpfschutz nach STIKO – etwa Tetanus, Diphtherie, Keuchhusten, Polio und Masern-Mumps-Röteln. Wir prüfen ihn anhand Ihres Impfausweises und ergänzen, was fehlt.',
      en: 'Before any travel vaccination comes complete routine cover under STIKO – such as tetanus, diphtheria, whooping cough, polio and measles-mumps-rubella. We check it against your vaccination record and add what is missing.',
    },
  },
  regions: {
    heading: { de: 'Reiseregionen im Überblick', en: 'Travel regions at a glance' },
    lead: {
      de: 'Wählen Sie Ihre Zielregion für eine ausführliche, fachlich fundierte Übersicht – mit den wichtigsten Impfthemen und Hinweisen zur Planung.',
      en: 'Choose your destination region for a detailed, well-founded overview – with the key vaccination topics and planning notes.',
    },
  },
  classification: {
    heading: { de: 'Pflicht oder Empfehlung?', en: 'Required or recommended?' },
    lead: {
      de: 'Reiseimpfungen lassen sich grob in zwei Gruppen einteilen. Welche konkret für Ihr Ziel gelten, sehen Sie in den aktuellen Quellen – und klären wir gemeinsam.',
      en: 'Travel vaccinations fall broadly into two groups. Which ones specifically apply to your destination can be seen in the current sources – and we clarify together.',
    },
    required: {
      title: { de: 'Vorgeschriebene Impfungen', en: 'Mandatory vaccinations' },
      text: {
        de: 'Einzelne Länder verlangen für die Einreise einen Impfnachweis – am häufigsten gegen Gelbfieber, abhängig vom Reiseweg. Für bestimmte Reisen (etwa die Pilgerfahrt nach Saudi-Arabien) gilt eine Meningokokken-Nachweispflicht. Maßgeblich sind die Einreisebestimmungen des Auswärtigen Amts.',
        en: 'Some countries require proof of vaccination for entry – most commonly against yellow fever, depending on the itinerary. For certain trips (such as the pilgrimage to Saudi Arabia) a meningococcal certificate is mandatory. The entry requirements of the Federal Foreign Office are decisive.',
      },
    },
    recommended: {
      title: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      text: {
        de: 'Die meisten Reiseimpfungen sind nicht vorgeschrieben, aber medizinisch sinnvoll – etwa Hepatitis A, Typhus, Tollwut oder die Malariavorsorge. Welche zu Ihrer Reise passen, richtet sich nach den vier Faktoren oben.',
        en: 'Most travel vaccinations are not mandatory but medically advisable – for example hepatitis A, typhoid, rabies or malaria prevention. Which suit your trip depends on the four factors above.',
      },
    },
  },
  cardLabels: {
    examples: { de: 'Beispielländer', en: 'Example countries' },
    topics: { de: 'Themen', en: 'Topics' },
    cta: { de: 'Region ansehen', en: 'View region' },
  },
  sourceIds: ['stikoImpfempfehlungen', 'dtgReiseimpfungen', 'whoTravelHealth', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-15'),
};
