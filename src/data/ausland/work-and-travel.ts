/**
 * Fachseite „Work & Travel, Backpacking und Weltreise“ (DE/EN). „Nach dem Abi“
 * ist ein Abschnitt, keine eigene Seite. Malaria ohne Präparate- und Wirkstoffnamen.
 */
import type { ClinicalPage } from '../types';
import { KOSTEN_HINWEIS, VISA_GRENZE } from './fach-texte';
import { AUSLAND_GEPRUEFT, NACHWEISE_IM_ANGEBOT } from './stand';

export const workAndTravelPage: ClinicalPage = {
  meta: {
    title: {
      de: 'Work & Travel, Backpacking und Weltreise: Impfungen und Beratung',
      en: 'Work & travel, backpacking and world trips: vaccinations and advice',
    },
    description: {
      de: 'Australien, Neuseeland, Kanada oder Südostasien nach dem Abi: Wir planen Impfungen, Malaria-Vorsorge und Reiseapotheke für lange Reisen. In Langenfeld.',
      en: 'Australia, New Zealand, Canada or South-East Asia: we plan vaccinations, malaria prevention and a travel kit for long trips. Private practice in Langenfeld.',
    },
    eyebrow: { de: 'Ausland', en: 'Abroad' },
    lead: {
      de: 'Bei langen Reisen bestimmt die Route den Impfplan. Wir planen mit Ihnen Impfungen, Malaria-Vorsorge und Reiseapotheke, auch wenn noch nicht jede Station feststeht. Ob Ihr Visum eine Untersuchung verlangt, hängt von Land, Dauer, Job und Vorreisen ab.',
      en: 'On long trips, your route determines the vaccination plan. We plan vaccinations, malaria prevention and your travel kit with you, even if not every stop is settled yet. Whether your visa requires an examination depends on the country, length of stay, job and previous travel.',
    },
  },
  sections: [
    {
      id: 'route',
      heading: {
        de: 'Die Route bestimmt den Impfplan',
        en: 'Your route determines the vaccination plan',
      },
      body: {
        de: [
          'Bei Aufenthalten über vier Wochen summiert sich das Risiko mit der Zeit. Für solche Reisen nennen die Reiseimpfempfehlungen von STIKO, DTG und StAR je nach Route zum Beispiel Tollwut, Japanische Enzephalitis, Meningokokken, Typhus und Hepatitis B.',
          'Im Gespräch gehen wir Ihre Länder, die Reihenfolge und die Dauer durch, dazu Arbeit auf Farmen, Kontakt zu Tieren und Zeit auf dem Land. Daraus entsteht Ihr Plan. Was davon für Sie infrage kommt, entscheiden wir gemeinsam.',
        ],
        en: [
          'On stays of more than four weeks, risk adds up over time. For such trips, the travel vaccination recommendations from STIKO, DTG and StAR name, depending on the route, for example rabies, Japanese encephalitis, meningococcal disease, typhoid and hepatitis B.',
          'In the consultation we go through your countries, their order and the length of stay, along with farm work, contact with animals and time in rural areas. This results in your plan. We decide together what applies to you.',
        ],
      },
      links: [
        { label: { de: 'Reiseziele', en: 'Destinations' }, path: '/reiseziele' },
        { label: { de: 'Wann vor der Reise impfen', en: 'When to get vaccinated before a trip' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
      ],
    },
    {
      id: 'australien-neuseeland',
      heading: { de: 'Australien und Neuseeland', en: 'Australia and New Zealand' },
      body: {
        de: [
          'Australien: Deutschland zählt dort zu den Ländern mit niedrigem Risiko. In der Regel ist deshalb keine Untersuchung nötig, außer es liegen besondere Umstände vor, etwa Arbeit in einer Kindertagesstätte oder eine Tätigkeit oder Ausbildung in der Medizin, Zahnmedizin, Pflege oder im Rettungsdienst. Die Behörde nennt für Working-Holiday-Visa derzeit rund drei Monate Bearbeitung und rät, vorher keine Flüge zu buchen.',
          'Neuseeland: Ob eine Untersuchung oder ein Röntgenbild nötig ist, kann von der Aufenthaltsdauer abhängen und davon, wo Sie zuvor gelebt haben. Das kann auch eine längere Zeit in Südostasien vor der Weiterreise betreffen. Bitte prüfen Sie die aktuellen Vorgaben bei der neuseeländischen Behörde.',
          'Wird eine Untersuchung verlangt, führen sie in der Regel nur zugelassene Stellen durch.',
        ],
        en: [
          'Australia: Germany counts there as a low-risk country. As a rule, no examination is therefore needed unless special circumstances apply, such as work at a childcare centre, or working or training as a doctor, nurse, dentist or paramedic. The authority currently states around three months’ processing for Working Holiday visas and advises not to book flights beforehand.',
          'New Zealand: whether an examination or an X-ray is needed may depend on the length of stay and on where you have lived before. This may include a longer time in South-East Asia before travelling on. Please check the current requirements with the New Zealand authority.',
          'If an examination is required, as a rule only approved providers carry it out.',
        ],
      },
    },
    {
      id: 'kanada',
      heading: { de: 'Kanada', en: 'Canada' },
      body: {
        de: [
          'Deutschland steht nicht auf der kanadischen Liste der Länder, aus denen eine Untersuchung verlangt wird. Das Bild ändert sich, wenn Sie länger als sechs Monate in Kanada bleiben und im Jahr davor mindestens sechs Monate am Stück in einem gelisteten Land waren, zum Beispiel in Thailand, Vietnam oder Indonesien.',
          'Unabhängig vom Land verlangt Kanada eine Untersuchung für Jobs, bei denen die öffentliche Gesundheit geschützt werden muss, etwa im Gesundheitswesen, an Schulen und in der Kinderbetreuung. Ihre eigene Ärztin oder Ihr eigener Arzt darf sie nicht durchführen.',
        ],
        en: [
          'Germany is not on the Canadian list of countries that trigger an examination. That changes if you stay in Canada for more than six months and spent at least six months in a row in a listed country in the year before, for example in Thailand, Vietnam or Indonesia.',
          'Regardless of the country, Canada requires an examination for jobs in which public health must be protected, such as in health care, schools and child care. Your own doctor cannot carry it out.',
        ],
      },
    },
    {
      id: 'suedostasien',
      heading: {
        de: 'Südostasien und Routen über mehrere Länder',
        en: 'South-East Asia and routes through several countries',
      },
      body: {
        de: [
          'Über mehrere Länder gelten oft verschiedene Empfehlungen. Darum prüfen wir jede Station einzeln und auch die Reihenfolge, denn eine Vorreise kann für das nächste Land zählen.',
          'Zur Malaria-Vorsorge besprechen wir, was zu Ihrer Route passt: Mückenschutz, vorbeugende Tabletten oder ein Notfallmedikament. Für Reisen über vier Wochen gibt die DTG eigene Hinweise, weil das Risiko oft schwer einzuschätzen ist. Medikamente gegen Malaria sind verschreibungspflichtig.',
        ],
        en: [
          'Different recommendations often apply across several countries. We therefore check each stop individually and also the order, because previous travel can count for the next country.',
          'For malaria prevention we discuss what suits your route: mosquito protection, preventive tablets or a standby treatment. For trips of more than four weeks, the DTG gives separate guidance because the risk is often hard to judge. Malaria medicines are prescription-only.',
        ],
      },
      links: [
        { label: { de: 'Malaria-Beratung', en: 'Malaria advice' }, path: '/leistungen/malaria' },
        { label: { de: 'Thailand', en: 'Thailand' }, path: '/reiseziele/asien/thailand' },
        { label: { de: 'Vietnam', en: 'Vietnam' }, path: '/reiseziele/asien/vietnam' },
        { label: { de: 'Indonesien und Bali', en: 'Indonesia and Bali' }, path: '/reiseziele/asien/indonesien-bali' },
      ],
    },
    {
      id: 'nach-dem-abi',
      heading: {
        de: 'Nach dem Abi: was vor dem Abflug erledigt sein sollte',
        en: 'After finishing school: what to sort out before you fly',
      },
      body: {
        de: ['So können Sie vorgehen. Die Zeiten sind unser Vorschlag:'],
        en: ['Here is one way to go about it. The timings are our suggestion:'],
      },
      list: {
        de: [
          'Spätestens drei Monate vor dem Abflug: Visum klären und prüfen, ob eine Untersuchung verlangt wird.',
          'Acht bis zwölf Wochen vor dem Abflug: Impfpass heraussuchen und Beratung buchen.',
          'Spätestens zwei Wochen vor dem Abflug: Impfserien abschließen. Das empfehlen STIKO und DTG.',
          'Vor dem Abflug: Auslandskrankenversicherung mit Rücktransport abschließen und Kopien wichtiger Unterlagen sichern.',
          'Unter 18 Jahren: Einwilligung klären. Die Regeln stehen auf der Seite zum Auslandsjahr.',
        ],
        en: [
          'At least three months before you fly: sort out your visa and check whether an examination is required.',
          'Eight to twelve weeks before you fly: find your vaccination record and book a consultation.',
          'At least two weeks before you fly: complete vaccine series. STIKO and DTG recommend this.',
          'Before you fly: take out travel health insurance with repatriation and keep copies of important documents.',
          'Under 18: sort out consent. The rules are on the exchange year page.',
        ],
      },
      links: [{ label: { de: 'Auslandsjahr und Einwilligung', en: 'Exchange year and consent' }, path: '/ausland/auslandsjahr' }],
    },
    {
      id: 'reiseapotheke',
      heading: {
        de: 'Medikamente und Reiseapotheke für Monate',
        en: 'Medicines and a travel kit for months',
      },
      body: {
        de: [
          'Für Monate unterwegs gehört mehr in die Reiseapotheke als für zwei Wochen Urlaub. Nehmen Sie regelmäßig Medikamente, klären Sie früh die Menge und die Regeln Ihrer Zielländer. Für manche Medikamente brauchen Sie eine Bescheinigung.',
        ],
        en: [
          'For months on the road, a travel kit needs more than for a two-week holiday. If you take regular medicines, find out early about the amount and the rules of your destination countries. Some medicines require a certificate.',
        ],
      },
      links: [
        { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
        ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : []),
      ],
    },
    {
      id: 'visum',
      heading: {
        de: 'Visum mit Gesundheitsuntersuchung: wann nur zugelassene Stellen dürfen',
        en: 'Visa with a medical examination: when only approved providers may do it',
      },
      body: {
        de: [
          'Darum kümmern wir uns: Impfschutz, Malaria-Vorsorge und Reiseapotheke für Ihre Route. Die Untersuchung für das Visum übernimmt in diesen Fällen die zugelassene Stelle.',
          `Sie finden uns am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath. Aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen ist es nicht weit. ${KOSTEN_HINWEIS.de}`,
        ],
        en: [
          'This is what we take care of: vaccination cover, malaria prevention and a travel kit for your route. In these cases, the approved provider carries out the visa examination.',
          `You will find us at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath, not far from Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen. ${KOSTEN_HINWEIS.en}`,
        ],
      },
      callout: { variant: 'important', text: VISA_GRENZE },
      links: [
        ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitszeugnis für ein Visum', en: 'Medical certificate for a visa' }, path: '/ausland/gesundheitszeugnis-visum' }] : []),
        { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten#ausland' },
      ],
    },
  ],
  faq: [
    {
      q: {
        de: 'Welche Impfungen brauche ich für Work & Travel in Australien?',
        en: 'Which vaccinations do I need for work & travel in Australia?',
      },
      a: {
        de: 'Das hängt von Ihrer Route und Ihren Jobs ab, also auch davon, wo Sie vorher oder danach unterwegs sind. Wir prüfen Ihren Impfpass und planen, was zu Ihrer Reise passt.',
        en: 'That depends on your route and your jobs, including where you travel before or afterwards. We review your vaccination record and plan what suits your trip.',
      },
    },
    {
      q: {
        de: 'Verlangt mein Visum eine ärztliche Untersuchung?',
        en: 'Does my visa require a medical examination?',
      },
      a: {
        de: `Das hängt von Land, Aufenthaltsdauer, Job und Vorreisen ab. Maßgeblich sind die Angaben der Behörde des Ziellandes. ${VISA_GRENZE.de}`,
        en: `That depends on the country, length of stay, job and previous travel. What counts is the information from the authority of the destination country. ${VISA_GRENZE.en}`,
      },
    },
    {
      q: {
        de: 'Meine Route steht noch nicht fest. Kann ich trotzdem kommen?',
        en: 'My route is not settled yet. Can I still come?',
      },
      a: {
        de: 'Ja. Wir planen mit Ihren wahrscheinlichen Stationen und besprechen, was sich unterwegs noch ändern kann.',
        en: 'Yes. We plan with your likely stops and discuss what may still change along the way.',
      },
    },
    {
      q: {
        de: 'Wie früh vor der Abreise sollte ich kommen?',
        en: 'How long before departure should I come?',
      },
      a: {
        de: 'Am besten acht bis zwölf Wochen vor dem Abflug. Impfserien sollten spätestens zwei Wochen vor Reisebeginn abgeschlossen sein.',
        en: 'Ideally eight to twelve weeks before you fly. Vaccine series should be completed at least two weeks before the trip.',
      },
    },
    {
      q: {
        de: 'Was kostet die Beratung, und zahlt die Krankenkasse?',
        en: 'What does the consultation cost, and does health insurance pay?',
      },
      a: {
        de: `${KOSTEN_HINWEIS.de} Für rein private Reisen besteht in der gesetzlichen Krankenversicherung kein Anspruch auf Reiseimpfungen. Viele Krankenkassen erstatten sie freiwillig, teils auch bei einer Privatrechnung. Fragen Sie bitte vorab nach.`,
        en: `${KOSTEN_HINWEIS.en} For purely private trips, statutory health insurance gives no entitlement to travel vaccinations. Many insurers reimburse them voluntarily, in some cases with a private invoice too. Please ask beforehand.`,
      },
    },
  ],
  termine: [{ label: { de: 'Beratung für Work & Travel buchen', en: 'Book advice for work & travel' }, art: 'langzeit' }],
  related: [
    { label: { de: 'Reiseberatung', en: 'Travel consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Malaria-Beratung', en: 'Malaria advice' }, path: '/leistungen/malaria' },
    { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
    { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten#ausland' },
  ],
  sourceIds: [
    'stikoReise2026',
    'dtgMalaria2026',
    'auHealthExams',
    'auPanel',
    'auWorkingHoliday',
    'nzHealth',
    'nzPanel',
    'caTemporary',
    'caCountries',
    'sgb5Schutzimpfungen',
  ],
  lastReviewed: AUSLAND_GEPRUEFT,
};
