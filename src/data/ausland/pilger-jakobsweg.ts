/**
 * Jakobsweg (DE/EN), Pfad /ausland/pilgerreisen/jakobsweg. Keine Pflichtimpfung aus
 * Deutschland; Schwerpunkt Standardimpfungen, Füße, Hitze, Zecken auf Zubringerwegen.
 * Bewusst ohne Blasen-Statistiken, die Studien sind nicht im Original gelesen.
 */
import type { ClinicalPage } from '../types';
import { AUSLAND_GEPRUEFT, NACHWEISE_IM_ANGEBOT } from './stand';

export const pilgerJakobsweg: ClinicalPage = {
  meta: {
    title: { de: 'Jakobsweg: Impfungen und Gesundheit unterwegs', en: 'Camino de Santiago: vaccinations and health on the way' },
    description: {
      de: 'Jakobsweg geplant? Wir prüfen den Impfschutz, besprechen Füße, Hitze, Zecken und Reiseapotheke und planen die Vorbereitung. Privatpraxis in Langenfeld.',
      en: 'Walking the Camino? We review your vaccinations and talk through feet, heat, ticks and your travel kit. Private practice in Langenfeld.',
    },
    eyebrow: { de: 'Ausland · Pilgerreisen', en: 'Abroad · Pilgrimages' },
    lead: {
      de: 'Für den Jakobsweg schreibt Spanien keine Impfung vor. Die Vorbereitung ist trotzdem ein guter Anlass, den Impfpass zu prüfen und über Füße, Hitze, Zecken und die Reiseapotheke zu sprechen.',
      en: 'Spain requires no vaccination for the Camino. Preparing for it is still a good reason to check your vaccination record and talk about feet, heat, ticks and your travel kit.',
    },
  },
  sections: [
    {
      id: 'kurz',
      heading: { de: 'Das Wichtigste in Kürze', en: 'The key points at a glance' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Für Spanien ist keine Impfung vorgeschrieben.',
          'Standardimpfungen prüfen, besonders Tetanus, Masern und Polio.',
          'Wer in Frankreich, der Schweiz, Österreich oder Deutschland startet: an Zecken und FSME denken.',
          'Schuhe vorher einlaufen, Blasen früh versorgen.',
          'Im Sommer früh starten, viel trinken, Mittagshitze meiden.',
          'Die Napoleonroute ist vom 1. November bis 31. März gesperrt.',
        ],
        en: [
          'No vaccination is required for Spain.',
          'Check your routine vaccinations, especially tetanus, measles and polio.',
          'Starting in France, Switzerland, Austria or Germany: think about ticks and TBE.',
          'Break your shoes in beforehand and treat blisters early.',
          'In summer, start early, drink plenty and avoid the midday heat.',
          'The Napoleon route is closed from 1 November to 31 March.',
        ],
      },
    },
    {
      id: 'impfpass',
      heading: {
        de: 'Keine Pflichtimpfung, aber ein guter Anlass für den Impfpass',
        en: 'No mandatory vaccination, but a good reason to check your record',
      },
      body: {
        de: [
          'Für die Einreise nach Spanien sind keine Impfungen vorgeschrieben. Das Auswärtige Amt rät dazu, die Standardimpfungen nach dem Impfkalender der STIKO aktuell zu halten, besonders den Schutz gegen Masern und Polio. Auch Tetanus gehört dazu, denn auf langen Wegen entstehen schnell kleine Wunden.',
          'Beim Rest gehen die Quellen auseinander: Das Auswärtige Amt empfiehlt für Spanien eine Impfung gegen Hepatitis A, die STIKO-Tabelle nennt sie nicht, dafür Hepatitis B bei besonderem Risiko. Das klären wir im Gespräch nach Ihrer Reise. Gegen West-Nil-Fieber, dessen Fallzahlen das Auswärtige Amt für 2026 als erhöht meldet, gibt es keine Impfung, hier hilft Mückenschutz.',
        ],
        en: [
          'No vaccinations are required for entry to Spain. The German Federal Foreign Office advises keeping routine vaccinations up to date under the STIKO schedule, especially protection against measles and polio. Tetanus belongs on the list too, as small wounds happen quickly on long walks.',
          'Beyond that, the sources differ: the Federal Foreign Office recommends a hepatitis A vaccination for Spain, the STIKO table does not list it but names hepatitis B for particular risk. We clarify this in the consultation based on your trip. There is no vaccine against West Nile fever, for which the Federal Foreign Office reports raised case numbers in 2026; mosquito protection helps here.',
        ],
      },
    },
    {
      id: 'fuesse',
      heading: { de: 'Füße und Blasen', en: 'Feet and blisters' },
      body: {
        de: ['Die häufigsten Probleme unterwegs lassen sich oft schon vor der Abreise angehen:'],
        en: ['The most common problems on the way can often be tackled before you leave:'],
      },
      list: {
        de: [
          'Schuhe auf längeren Strecken mit Rucksack einlaufen, nicht erst auf dem Weg.',
          'Socken trocken halten und wechseln, Druckstellen früh abkleben.',
          'Breitet sich eine Rötung aus, kommen Eiter oder Fieber dazu, lassen Sie die Stelle ärztlich ansehen.',
          'Bei Diabetes oder Durchblutungsstörungen die Füße täglich kontrollieren und das Vorgehen vorher klären.',
        ],
        en: [
          'Break your shoes in on longer walks with a backpack, not on the way itself.',
          'Keep socks dry and change them, and tape pressure points early.',
          'If redness spreads, or pus or fever appear, have the area looked at by a doctor.',
          'With diabetes or circulation problems, check your feet daily and clarify what to do beforehand.',
        ],
      },
    },
    {
      id: 'hitze-wasser',
      heading: { de: 'Hitze und Wasser', en: 'Heat and water' },
      body: {
        de: [
          'Im Sommer kann es auf vielen Abschnitten sehr heiß werden. Starten Sie früh, meiden Sie die Mittagshitze, trinken Sie ausreichend und denken Sie an Sonnenschutz. Nehmen Sie Medikamente wie Entwässerungstabletten, klären Sie vorher ärztlich, ob sie angepasst werden müssen.',
          'In den Sommermonaten kommt es in Spanien regelmäßig zu Busch- und Waldbränden, beachten Sie die Warnungen vor Ort. Im Winterhalbjahr gilt: Die Napoleonroute von Saint-Jean-Pied-de-Port nach Roncesvalles ist vom 1. November bis 31. März gesperrt, Verstöße kosten hohe Bußgelder. Die Strecke über Valcarlos bleibt offen.',
        ],
        en: [
          'In summer, many sections can get very hot. Start early, avoid the midday heat, drink enough and remember sun protection. If you take medicines such as diuretics, clarify with a doctor beforehand whether they need adjusting.',
          'Bush and forest fires occur regularly in Spain in the summer months, so follow local warnings. In the winter half of the year: the Napoleon route from Saint-Jean-Pied-de-Port to Roncesvalles is closed from 1 November to 31 March, with heavy fines for breaches. The route via Valcarlos stays open.',
        ],
      },
    },
    {
      id: 'zecken',
      heading: {
        de: 'Zecken: welche Wegabschnitte außerhalb Spaniens zählen',
        en: 'Ticks: which sections outside Spain matter',
      },
      body: {
        de: [
          'Die STIKO-Tabelle nennt FSME für Spanien nicht. Das ist keine Aussage, dass sie dort nirgends vorkommt, eine Impfempfehlung für den spanischen Teil ergibt sich daraus aber nicht.',
          'Anders kann es aussehen, wenn Sie weiter entfernt starten: Für Frankreich nennt die STIKO das Elsass und die Region Auvergne-Rhône-Alpes, zu der auch Le Puy-en-Velay gehört, dazu kommen Österreich, die Schweiz und die deutschen Risikogebiete. Nennen Sie uns deshalb Ihre ganze Route und die Jahreszeit. Unabhängig davon helfen lange Kleidung und das Absuchen nach der Etappe.',
        ],
        en: [
          'The STIKO table does not list TBE for Spain. That is not a statement that it occurs nowhere there, but it gives no vaccination recommendation for the Spanish part.',
          'It can look different if you start further away: for France, STIKO names Alsace and the Auvergne-Rhône-Alpes region, which includes Le Puy-en-Velay, along with Austria, Switzerland and the German risk areas. So please tell us your whole route and the season. In any case, long clothing and checking for ticks after each stage help.',
        ],
      },
      links: [
        { label: { de: 'FSME-Impfung', en: 'TBE vaccination' }, path: '/leistungen/fsme-impfung' },
        { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
      ],
    },
    {
      id: 'reiseapotheke',
      heading: { de: 'Reiseapotheke für den Rucksack', en: 'Travel kit for your backpack' },
      body: {
        de: ['Das Gewicht zählt, deshalb lieber wenig und passend:'],
        en: ['Weight counts, so keep it small and suitable:'],
      },
      list: {
        de: [
          'Blasenpflaster, Tape und Verbandsmaterial',
          'Wunddesinfektion und Zeckenzange',
          'Sonnenschutz und Mückenschutzmittel',
          'Mittel gegen Schmerzen und Durchfall, nach Absprache mit Ihrer Praxis',
          'Ihre Dauermedikamente und eine Liste mit Wirkstoffen',
        ],
        en: [
          'Blister plasters, tape and dressings',
          'Wound disinfectant and tick tweezers',
          'Sun protection and mosquito repellent',
          'Something for pain and diarrhoea, as agreed with your practice',
          'Your long-term medicines and a list of the active ingredients',
        ],
      },
      links: [{ label: { de: 'Reiseapotheke im Detail', en: 'Travel kit in detail' }, path: '/reiseapotheke' }],
    },
    {
      id: 'vorerkrankungen',
      heading: { de: 'Alter, Vorerkrankungen und Medikamente', en: 'Age, existing conditions and medicines' },
      body: {
        de: [
          'Der Weg bedeutet tagelange Belastung. Haben Sie eine Herz-, Lungen- oder Stoffwechselerkrankung oder nehmen Sie Medikamente zur Blutverdünnung, sprechen Sie vorher mit Ihrer behandelnden Praxis über Ihre Belastbarkeit. Nehmen Sie ausreichend Medikamente in Originalverpackung mit und klären Sie, was bei Hitze und starkem Schwitzen zu beachten ist.',
          ...(NACHWEISE_IM_ANGEBOT ? ['Verlangt Ihre Gruppe ein ärztliches Formular, bringen Sie es mit. Wir füllen Formulare aus, soweit wir die Angaben prüfen können.'] : []),
        ],
        en: [
          'The route means days of strain. If you have a heart, lung or metabolic condition or take blood thinners, please talk to your treating practice about your fitness beforehand. Take enough medicine in the original packaging and clarify what to watch for in heat and with heavy sweating.',
          ...(NACHWEISE_IM_ANGEBOT ? ['If your group requires a medical form, please bring it. We complete forms as far as we can verify the details.'] : []),
        ],
      },
      links: [
        ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Formulare und Nachweise', en: 'Forms and certificates' }, path: '/ausland/nachweise' }] : []),
      ],
    },
    {
      id: 'beratung',
      heading: { de: 'Reiseberatung und Anfahrt', en: 'Travel consultation and how to find us' },
      body: {
        de: [
          'Buchen Sie eine Reiseberatung. Den Anlass müssen Sie bei der Buchung nicht angeben. Bringen Sie Ihren Impfausweis und Ihre geplante Route mit.',
          'Die Praxis liegt am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath. Aus Monheim am Rhein, Hilden, Solingen, Leichlingen und Leverkusen ist sie gut erreichbar.',
        ],
        en: [
          'Book a travel consultation. You do not need to state the reason when booking. Please bring your vaccination record and your planned route.',
          'The practice is at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath, within easy reach of Monheim am Rhein, Hilden, Solingen, Leichlingen and Leverkusen.',
        ],
      },
    },
  ],
  termine: [
    { label: { de: 'Reiseberatung für Spanien allein', en: 'Travel consultation for Spain only' }, art: 'vollberatung-kurz' },
    { label: { de: 'Reiseberatung für mehrere Länder', en: 'Travel consultation for several countries' }, art: 'vollberatung' },
  ],
  faq: [
    {
      q: { de: 'Brauche ich für den Jakobsweg Impfungen?', en: 'Do I need vaccinations for the Camino?' },
      a: {
        de: 'Vorgeschrieben ist keine. Prüfen Sie die Standardimpfungen, besonders Tetanus, Masern und Polio. Ob Hepatitis A oder B für Sie sinnvoll sind, klären wir im Gespräch.',
        en: 'None are required. Check your routine vaccinations, especially tetanus, measles and polio. We clarify in the consultation whether hepatitis A or B make sense for you.',
      },
    },
    {
      q: { de: 'Ist FSME auf dem Jakobsweg ein Thema?', en: 'Is TBE an issue on the Camino?' },
      a: {
        de: 'Für Spanien nennt die STIKO-Tabelle FSME nicht. Wichtig kann sie werden, wenn Ihr Weg durch Risikogebiete in Deutschland, Österreich, der Schweiz oder Frankreich führt. Nennen Sie uns deshalb die ganze Route und die Jahreszeit.',
        en: 'The STIKO table does not list TBE for Spain. It can matter if your route passes through risk areas in Germany, Austria, Switzerland or France. So please tell us your whole route and the season.',
      },
    },
    {
      q: { de: 'Was gehört beim Pilgern in die Reiseapotheke?', en: 'What belongs in the travel kit for a pilgrimage on foot?' },
      a: {
        de: 'Vor allem Blasenpflaster, Tape, Wunddesinfektion, Zeckenzange, Sonnenschutz, Mückenschutz und Ihre Dauermedikamente mit einer Liste der Wirkstoffe. Alles Weitere stimmen wir auf Ihre Etappen ab.',
        en: 'Above all blister plasters, tape, wound disinfectant, tick tweezers, sun protection, mosquito repellent and your long-term medicines with a list of the active ingredients. We tailor anything further to your stages.',
      },
    },
    {
      q: { de: 'Ich nehme Medikamente. Was muss ich vorher klären?', en: 'I take medicines. What do I need to clarify beforehand?' },
      a: {
        de: 'Klären Sie mit Ihrer behandelnden Praxis, ob die Dosis bei Hitze und starker Belastung angepasst werden muss, besonders bei Entwässerungstabletten, Mitteln gegen Bluthochdruck und bei Diabetes. Nehmen Sie ausreichend Vorrat in Originalverpackung und eine Liste mit Wirkstoffen mit.',
        en: 'Clarify with your treating practice whether the dose needs adjusting in heat and under heavy strain, especially with diuretics, blood pressure medicines and diabetes. Take enough in the original packaging and a list of the active ingredients.',
      },
    },
  ],
  sourceIds: ['aaSpanien', 'stikoReiseLaender2026', 'stikoReise2026', 'stikoImpfempfehlungen'],
  lastReviewed: AUSLAND_GEPRUEFT,
  related: [
    { label: { de: 'Pilgerreisen im Überblick', en: 'Pilgrimages overview' }, path: '/ausland/pilgerreisen' },
    { label: { de: 'FSME-Impfung', en: 'TBE vaccination' }, path: '/leistungen/fsme-impfung' },
    { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
    ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : []),
  ],
};
