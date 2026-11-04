/**
 * Pilgerreisen im Überblick (DE/EN), Pfad /ausland/pilgerreisen. Mehrkonfessionell
 * und sachlich, Reiseart statt Person. Informationsseite zu Gesundheit und Nachweisen,
 * ohne eigene Sicherheitseinschätzung; Termin-Links führen zur allgemeinen Reiseberatung.
 */
import type { ClinicalPage } from '../types';
import { AUSLAND_GEPRUEFT, NACHWEISE_IM_ANGEBOT } from './stand';
import { KOSTEN_HINWEIS, PILGER_BUCHEN } from './fach-texte';
import { linkAaReisehinweise } from './reisehinweise';

export const pilgerUebersicht: ClinicalPage = {
  meta: {
    title: { de: 'Pilgerreisen: Impfungen und Vorgaben je nach Ziel', en: 'Pilgrimages: vaccinations and rules by destination' },
    description: {
      de: 'Hadsch, Umra, Jakobsweg, Lourdes, Fatima oder Rom: Welche Impfungen und Nachweise Sie je Ziel brauchen und worauf Sie achten sollten. Reiseberatung in Langenfeld.',
      en: 'Hajj, Umrah, the Camino, Lourdes, Fatima or Rome: which vaccinations and certificates you need for each destination and what to look out for. Travel consultation in Langenfeld.',
    },
    eyebrow: { de: 'Ausland · Pilgerreisen', en: 'Abroad · Pilgrimages' },
    lead: {
      de: 'Hadsch, Umra, Jakobsweg, Lourdes, Fatima, Rom oder ein großes Fest in Indien: Je nach Ziel gelten andere Einreise- und Gesundheitsvorgaben. Hier lesen Sie, was Sie für Ihr Ziel brauchen und worauf Sie achten sollten. In der Reiseberatung prüfen wir Ihren Impfausweis und planen fehlende Impfungen rechtzeitig vor der Abreise.',
      en: 'Hajj, Umrah, the Camino, Lourdes, Fatima, Rome or a major festival in India: entry and health rules differ by destination. Here you can read what you need for your destination and what to look out for. In a travel consultation we check your vaccination record and plan any missing vaccinations in good time before you leave.',
    },
  },
  sections: [
    {
      id: 'kurz',
      heading: { de: 'Das Wichtigste in Kürze', en: 'The key points at a glance' },
      body: {
        de: ['Vorgeschrieben ist eine Impfung nur für wenige Pilgerziele. Für alle Ziele lohnt es sich, den Impfausweis früh prüfen zu lassen.'],
        en: ['A vaccination is mandatory for only a few pilgrimage destinations. For every destination it is worth having your vaccination record checked early.'],
      },
      list: {
        de: [
          'Hadsch und Umra: Impfung gegen Meningokokken ACWY vorgeschrieben, mindestens 10 Tage vor der Ankunft in Saudi-Arabien.',
          'Jakobsweg, Lourdes, Fatima und Rom: keine Impfung vorgeschrieben. Standardimpfungen prüfen, besonders Masern und Tetanus.',
          'Jerusalem und Israel: keine Impfung vorgeschrieben. Empfohlen sind Hepatitis A und ein vollständiger Schutz gegen Polio.',
          'Große Feste in Indien: aus Deutschland keine Impfung vorgeschrieben. Hepatitis A und Typhus sind empfohlen, die Malariavorsorge richtet sich nach der Region.',
          'Am besten sechs bis acht Wochen vor der Abreise zur Reiseberatung kommen.',
        ],
        en: [
          'Hajj and Umrah: meningococcal ACWY vaccination required, at least 10 days before arrival in Saudi Arabia.',
          'Camino, Lourdes, Fatima and Rome: no vaccination required. Check your routine vaccinations, especially measles and tetanus.',
          'Jerusalem and Israel: no vaccination required. Hepatitis A and complete protection against polio are recommended.',
          'Major festivals in India: no vaccination required from Germany. Hepatitis A and typhoid are recommended; malaria prevention depends on the region.',
          'Ideally come for a travel consultation six to eight weeks before departure.',
        ],
      },
    },
    {
      id: 'hadsch-umra',
      heading: { de: 'Hadsch und Umra', en: 'Hajj and Umrah' },
      body: {
        de: [
          'Saudi-Arabien verlangt für Hadsch und Umra eine Impfung gegen Meningokokken ACWY. Die zuletzt veröffentlichten Vorgaben stammen aus dem Jahr 1447H (2026), der Text für 2027 steht noch aus. Fristen, Eintrag im Impfausweis und Gesundheitszeugnis haben wir auf einer eigenen Seite zusammengefasst.',
        ],
        en: [
          'Saudi Arabia requires a meningococcal ACWY vaccination for Hajj and Umrah. The most recently published rules date from 1447H (2026); the text for 2027 is still pending. We have collected deadlines, the vaccination record entry and the health certificate on a separate page.',
        ],
      },
      links: [{ label: { de: 'Umra und Hadsch', en: 'Umrah and Hajj' }, path: '/ausland/pilgerreisen/umra-hadsch' }],
    },
    {
      id: 'jakobsweg',
      heading: { de: 'Jakobsweg', en: 'Camino de Santiago' },
      body: {
        de: [
          'Für Spanien ist bei Einreise keine Impfung vorgeschrieben. Wichtig sind die Standardimpfungen, eingelaufene Schuhe und die Vorsorge gegen Hitze. Die Napoleonroute ist vom 1. November bis 31. März gesperrt.',
        ],
        en: [
          'No vaccination is required for entry to Spain. What matters are routine vaccinations, well-worn shoes and protection from heat. The Napoleon route is closed from 1 November to 31 March.',
        ],
      },
      links: [{ label: { de: 'Jakobsweg', en: 'Camino de Santiago' }, path: '/ausland/pilgerreisen/jakobsweg' }],
    },
    {
      id: 'lourdes-fatima-rom',
      heading: { de: 'Lourdes, Fatima und Rom', en: 'Lourdes, Fatima and Rome' },
      body: {
        de: [
          'Für Frankreich, Portugal und Italien ist bei Einreise aus Deutschland keine Impfung vorgeschrieben. Prüfen sollten Sie vor allem die Standardimpfungen, besonders den Schutz gegen Masern.',
        ],
        en: [
          'No vaccination is required for France, Portugal or Italy when entering from Germany. Above all, check your routine vaccinations, especially protection against measles.',
        ],
      },
      list: {
        de: [
          'Lourdes: FSME kommt in Frankreich vor allem im Elsass und in der Region Auvergne-Rhône-Alpes vor. Lourdes liegt am Rand der Pyrenäen, also außerhalb dieser Gebiete. Im Süden des Landes treten im Sommer vereinzelt Dengue und West-Nil-Fieber auf, deshalb ist Mückenschutz sinnvoll. Hepatitis A empfiehlt das Auswärtige Amt für die Mittelmeerküste und Korsika.',
          'Fatima: Das Auswärtige Amt empfiehlt Hepatitis A, bei längerem Aufenthalt oder besonderer Exposition auch Hepatitis B und Dengue.',
          'Rom: Hepatitis A und B je nach persönlicher Situation. Das Auswärtige Amt meldet für 2026 mehr Fälle von West-Nil-Fieber in Italien und nennt Hitzewellen bis 40 °C. Mückenschutz und Sonnenschutz sind hier wichtig.',
        ],
        en: [
          'Lourdes: in France, TBE occurs mainly in Alsace and the Auvergne-Rhône-Alpes region. Lourdes lies at the edge of the Pyrenees, outside these areas. In the south of the country, isolated cases of dengue and West Nile fever occur in summer, so mosquito protection is sensible. The German Federal Foreign Office recommends hepatitis A for the Mediterranean coast and Corsica.',
          'Fatima: the German Federal Foreign Office recommends hepatitis A, and for longer stays or particular exposure also hepatitis B and dengue.',
          'Rome: hepatitis A and B depending on your situation. The German Federal Foreign Office reports more cases of West Nile fever in Italy in 2026 and mentions heatwaves of up to 40 °C. Mosquito and sun protection matter here.',
        ],
      },
      links: [
        ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Formulare und Nachweise', en: 'Forms and certificates' }, path: '/ausland/nachweise' }] : []),
      ],
    },
    {
      id: 'jerusalem-irak',
      heading: { de: 'Jerusalem, Israel und Irak', en: 'Jerusalem, Israel and Iraq' },
      body: {
        de: [
          'Für Israel und den Irak ist bei Einreise aus Deutschland keine Impfung vorgeschrieben. Für Israel empfiehlt das Auswärtige Amt Hepatitis A und einen vollständigen Schutz gegen Polio. Für den Irak nennt die STIKO Hepatitis A, je nach Risiko auch Hepatitis B, Tollwut und Typhus.',
          'Viele Pilgerstätten liegen in heißen, trockenen Gegenden. Planen Sie Wege und Besichtigungen möglichst in den Morgen- und Abendstunden.',
        ],
        en: [
          'No vaccination is required for Israel or Iraq when entering from Germany. For Israel, the German Federal Foreign Office recommends hepatitis A and complete protection against polio. For Iraq, STIKO names hepatitis A, and depending on risk also hepatitis B, rabies and typhoid.',
          'Many pilgrimage sites are in hot, dry areas. Where possible, plan walks and visits for the morning and evening.',
        ],
      },
      links: [{ label: { de: 'Naher Osten und Nordafrika', en: 'Middle East and North Africa' }, path: '/reiseziele/naher-osten-nordafrika' }],
    },
    {
      id: 'feste-indien',
      heading: { de: 'Große Feste in Indien', en: 'Major festivals in India' },
      body: {
        de: [
          'Bei großen Festen wie der Kumbh Mela planen wir nach Ort, Route und Jahreszeit. Aus Deutschland ist keine Impfung vorgeschrieben, bei Einreise aus einem Gelbfiebergebiet wird ein Nachweis verlangt.',
          'Das Auswärtige Amt empfiehlt Hepatitis A und Typhus, je nach persönlicher Situation auch Chikungunya, Dengue, Hepatitis B, Japanische Enzephalitis und Tollwut. Die Malariavorsorge richtet sich nach der Region.',
        ],
        en: [
          'For major festivals such as the Kumbh Mela, we plan by place, route and season. No vaccination is required from Germany; proof is required when entering from a yellow fever area.',
          'The German Federal Foreign Office recommends hepatitis A and typhoid, and depending on your situation also chikungunya, dengue, hepatitis B, Japanese encephalitis and rabies. Malaria prevention depends on the region.',
        ],
      },
      links: [{ label: { de: 'Süd- und Südostasien', en: 'South and Southeast Asia' }, path: '/reiseziele/asien' }],
    },
    {
      id: 'fuer-alle-wege',
      heading: {
        de: 'Was für alle Wege gilt: Standardimpfungen, Hitze, Mücken, Füße',
        en: 'What applies to every route: routine vaccinations, heat, mosquitoes, feet',
      },
      body: {
        de: ['Unabhängig vom Ziel lohnt sich vor jeder Pilgerreise ein Blick auf diese Punkte:'],
        en: ['Whatever the destination, these points are worth checking before any pilgrimage:'],
      },
      list: {
        de: [
          'Impfpass prüfen: Standardimpfungen nach STIKO aktuell halten. Impfserien sollen spätestens 2 Wochen vor Reisebeginn abgeschlossen sein.',
          'Hitze: Mittagssonne meiden, ausreichend trinken, Sonnenschutz mitnehmen.',
          'Mücken: lange Kleidung und Mückenschutzmittel, wo das Ziel es verlangt.',
          'Füße: Schuhe vorher einlaufen. Bei Diabetes oder Durchblutungsstörungen die Füße täglich ansehen.',
          'Medikamente: ausreichend Vorrat in Originalverpackung und eine Liste mit Wirkstoffen mitnehmen.',
          ...(NACHWEISE_IM_ANGEBOT ? ['Ärztliche Formulare: Verlangt Ihre Gruppe ein Formular, bringen Sie es mit. Wir füllen Formulare aus, soweit wir die Angaben prüfen können.'] : []),
          'Reise- und Sicherheitshinweise des Auswärtigen Amts für Ihr Reiseland lesen.',
        ],
        en: [
          'Check your vaccination record: keep routine vaccinations up to date under STIKO. Vaccination series should be completed at least 2 weeks before the trip starts.',
          'Heat: avoid the midday sun, drink enough and take sun protection.',
          'Mosquitoes: long clothing and repellent wherever the destination calls for it.',
          'Feet: break your shoes in beforehand. With diabetes or circulation problems, look at your feet every day.',
          'Medicines: take enough in the original packaging and a list of the active ingredients.',
          ...(NACHWEISE_IM_ANGEBOT ? ['Medical forms: if your group requires a form, please bring it. We complete forms as far as we can verify the details.'] : []),
          'Read the German Federal Foreign Office travel and safety advice for your destination.',
        ],
      },
      links: [
        { label: { de: 'Wann vor der Reise impfen?', en: 'When to vaccinate before travel' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
        { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
        linkAaReisehinweise,
      ],
    },
    {
      id: 'beratung',
      heading: { de: 'So läuft die Reiseberatung für Ihre Pilgerreise ab', en: 'How the travel consultation for your pilgrimage works' },
      body: {
        de: [
          'Buchen Sie eine Reiseberatung. Den Anlass müssen Sie bei der Buchung nicht angeben. Für eine Reise in ein einzelnes Land in Europa reicht meist die kompakte Beratung.',
          'Im Termin prüfen wir Ihren Impfausweis, gehen die Vorgaben für Ihr Ziel durch und planen fehlende Impfungen mit Ihnen. Ist der Impfstoff vorrätig, impfen wir auf Wunsch direkt im Anschluss.',
          'Bitte bringen Sie mit:',
        ],
        en: [
          'Book a travel consultation. You do not need to state the reason when booking. For a trip to a single country in Europe, the compact consultation is usually enough.',
          'In the appointment we check your vaccination record, go through the rules for your destination and plan any missing vaccinations with you. If the vaccine is in stock, we can vaccinate you straight afterwards if you wish.',
          'Please bring:',
        ],
      },
      list: {
        de: [
          'Ihren Impfausweis, auch alte Impfausweise, falls vorhanden.',
          'Reiseziel, Route und Reisedaten.',
          'Eine Liste Ihrer Medikamente und Vorerkrankungen.',
          ...(NACHWEISE_IM_ANGEBOT ? ['Das Formular Ihrer Gruppe oder Ihres Veranstalters, falls Sie eines haben.'] : []),
        ],
        en: [
          'Your vaccination record, including old records if you have them.',
          'Destination, route and travel dates.',
          'A list of your medicines and existing conditions.',
          ...(NACHWEISE_IM_ANGEBOT ? ['The form from your group or tour operator, if you have one.'] : []),
        ],
      },
    },
    {
      id: 'anfahrt',
      heading: { de: 'Anfahrt', en: 'How to find us' },
      body: {
        de: ['Unsere Praxis liegt am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath. Aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen sind wir gut erreichbar.'],
        en: ['Our practice is at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath, within easy reach of Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen.'],
      },
    },
  ],
  termine: [
    { label: PILGER_BUCHEN, art: 'vollberatung' },
    { label: { de: 'Kompakte Reiseberatung für ein Land in Europa', en: 'Compact consultation for one country in Europe' }, art: 'vollberatung-kurz' },
  ],
  faq: [
    {
      q: { de: 'Gibt es für Lourdes, Fatima oder Rom Pflichtimpfungen?', en: 'Are any vaccinations mandatory for Lourdes, Fatima or Rome?' },
      a: {
        de: 'Nein, bei Einreise aus Deutschland ist für Frankreich, Portugal und Italien keine Impfung vorgeschrieben. Sinnvoll ist trotzdem, die Standardimpfungen zu prüfen, besonders den Schutz gegen Masern.',
        en: 'No, no vaccination is required for France, Portugal or Italy when entering from Germany. It is still sensible to check your routine vaccinations, especially protection against measles.',
      },
    },
    {
      q: { de: 'Was gilt für Reisen nach Jerusalem?', en: 'What applies to travel to Jerusalem?' },
      a: {
        de: 'Bei Einreise aus Deutschland ist keine Impfung vorgeschrieben, empfohlen sind Hepatitis A und ein vollständiger Polio-Schutz. Bei Aufenthalten über vier Wochen nennt die STIKO einen Polio-Nachweis bei der Ausreise, das Auswärtige Amt schreibt, er werde derzeit nicht verlangt.',
        en: 'No vaccination is required when entering from Germany; hepatitis A and complete polio protection are recommended. For stays over four weeks, STIKO names proof of polio vaccination on departure; the German Federal Foreign Office states that it is not currently being enforced.',
      },
    },
    {
      q: { de: 'Wie früh sollte ich vor einer Pilgerreise kommen?', en: 'How early should I come before a pilgrimage?' },
      a: {
        de: 'Am besten sechs bis acht Wochen vor der Abreise, dann lassen sich fast alle Impfungen in Ruhe planen. Fragen Sie außerdem Ihre Gruppe oder Ihren Veranstalter nach Fristen für Unterlagen, sie können deutlich früher liegen.',
        en: 'Ideally six to eight weeks before departure, so that almost all vaccinations can be planned calmly. Also ask your group or tour operator about deadlines for documents, which can be much earlier.',
      },
    },
    {
      q: { de: 'Welche Impfung brauche ich für Hadsch oder Umra?', en: 'Which vaccination do I need for Hajj or Umrah?' },
      a: {
        de: 'Saudi-Arabien verlangt eine Impfung gegen Meningokokken ACWY, mindestens 10 Tage vor der Ankunft. Lassen Sie den Impfstofftyp im Impfausweis eintragen. Einzelheiten finden Sie auf unserer Seite zu Umra und Hadsch.',
        en: 'Saudi Arabia requires a meningococcal ACWY vaccination at least 10 days before arrival. Have the vaccine type entered in your vaccination record. You will find details on our Umrah and Hajj page.',
      },
    },
    {
      q: { de: 'Was kostet die Reiseberatung?', en: 'How much does the travel consultation cost?' },
      a: KOSTEN_HINWEIS,
    },
    {
      q: { de: 'Muss ich den Anlass bei der Buchung angeben?', en: 'Do I have to state the reason when booking?' },
      a: {
        de: 'Nein. Buchen Sie eine Reiseberatung, den Anlass müssen Sie bei der Buchung nicht angeben. Im Gespräch klären wir Reiseziel, Reisedatum und das, was medizinisch wichtig ist.',
        en: 'No. Book a travel consultation; you do not need to state the reason when booking. In the consultation we clarify destination, travel dates and what is medically important.',
      },
    },
  ],
  sourceIds: [
    'mohHajj',
    'mohUmrah',
    'aaIsrael',
    'aaIrak',
    'aaIndien',
    'aaSpanien',
    'aaFrankreich',
    'aaPortugal',
    'aaItalien',
    'stikoReise2026',
    'stikoReiseLaender2026',
    'dtgMalariaLaender2026',
    'auswaertigesAmt',
  ],
  lastReviewed: AUSLAND_GEPRUEFT,
  related: [
    { label: { de: 'Umra und Hadsch', en: 'Umrah and Hajj' }, path: '/ausland/pilgerreisen/umra-hadsch' },
    { label: { de: 'Jakobsweg', en: 'Camino de Santiago' }, path: '/ausland/pilgerreisen/jakobsweg' },
    { label: { de: 'Reiseberatung', en: 'Travel consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten' },
    { label: { de: 'Reiseziele', en: 'Destinations' }, path: '/reiseziele' },
    { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
  ],
};
