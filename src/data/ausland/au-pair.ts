/**
 * Fachseite „Au-pair im Ausland“ (DE/EN). USA: körperliche Untersuchung laut
 * Regelwerk, keine Impfvorgabe. Kanada und Australien: bei Kinderbetreuung kann
 * eine Untersuchung bei einer zugelassenen Stelle nötig sein, dann sind wir nicht zuständig.
 */
import type { ClinicalPage } from '../types';
import { ANERKENNUNG, KEINE_FORMULARE, KOSTEN_HINWEIS, VISA_GRENZE } from './fach-texte';
import { AUSLAND_GEPRUEFT, NACHWEISE_IM_ANGEBOT } from './stand';

export const auPairPage: ClinicalPage = {
  meta: {
    title: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Au-pair, auch USA: Gesundheitsformular und Impfungen'
        : 'Au-pair im Ausland: Impfungen und Impfpass',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Au pair abroad: medical form and vaccinations'
        : 'Au pair abroad: vaccinations and vaccination record',
    },
    description: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Au-pair-Agenturen verlangen oft ein ärztliches Formular. Wir untersuchen, prüfen den Impfpass und füllen es aus, soweit wir es prüfen können. In Langenfeld.'
        : 'Au-pair-Agenturen verlangen oft ein ärztliches Formular. Wir prüfen den Impfpass und planen Impfungen für den Umgang mit Kindern. In Langenfeld.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Au pair agencies often ask for a medical form. We examine you, review your record and complete it in English as far as we can verify it. Practice in Langenfeld.'
        : 'Au pair agencies often ask for a medical form. We review your record and plan vaccinations for working with children. Practice in Langenfeld.',
    },
    eyebrow: { de: 'Ausland', en: 'Abroad' },
    lead: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Au-pair-Agenturen verlangen oft ein ärztliches Formular. Wir untersuchen Sie, prüfen Ihren Impfpass und füllen das Formular aus, soweit wir die Angaben prüfen können. Für manche Länder dürfen wir die Untersuchung nicht übernehmen. Das klären wir vorab mit Ihnen.'
        : `Au-pair-Agenturen verlangen oft ein ärztliches Formular. Wir prüfen Ihren Impfpass und planen Impfungen mit Blick auf den Umgang mit Kindern. ${KEINE_FORMULARE.de}`,
      en: NACHWEISE_IM_ANGEBOT
        ? 'Au pair agencies often ask for a medical form. We examine you, review your vaccination record and complete the form as far as we can verify the details. For some countries we are not allowed to carry out the examination. We clarify this with you in advance.'
        : `Au pair agencies often ask for a medical form. We review your vaccination record and plan vaccinations with a view to working with children. ${KEINE_FORMULARE.en}`,
    },
  },
  sections: [
    {
      id: 'vorgaben',
      heading: {
        de: 'Was Agenturen und Gastfamilien verlangen',
        en: 'What agencies and host families ask for',
      },
      body: {
        de: [
          'Für die USA verlangt das Regelwerk des Au-pair-Programms den Beleg durch eine körperliche Untersuchung, dass Sie am Programm teilnehmen können. Impfungen nennt es nicht. Weitere Vorgaben können aus dem Formular Ihrer Agentur kommen.',
          'Maßgeblich ist deshalb immer das aktuelle Formular Ihrer Agentur. Ältere Kopien aus dem Internet helfen nicht weiter.',
        ],
        en: [
          'For the USA, the au pair programme regulation requires evidence from a physical that you are able to take part. It does not mention vaccinations. Further requirements may come from your agency’s form.',
          'What counts is therefore always the current form from your agency. Older copies from the internet are of no use.',
        ],
      },
    },
    ...(NACHWEISE_IM_ANGEBOT
      ? [
        {
          id: 'formular',
          heading: {
            de: 'Das ärztliche Formular: was untersucht wird und was nicht',
            en: 'The medical form: what is examined and what is not',
          },
          body: {
            de: [
              'Wir erheben Ihre Vorgeschichte und untersuchen Sie körperlich im Umfang, den das Formular verlangt. Impfdaten übernehmen wir aus Ihrem Impfausweis.',
              'Wir bestätigen nur, was wir selbst untersucht haben oder was uns vorliegt. Felder ohne Grundlage bleiben frei. Verlangt das Formular Labor- oder Röntgenbefunde, rufen Sie uns bitte vor dem Termin an.',
            ],
            en: [
              'We take your history and examine you physically to the extent the form requires. We take vaccination dates from your vaccination record.',
              'We confirm only what we have examined ourselves or what is available to us. Fields without a basis stay blank. If the form asks for laboratory or X-ray results, please call us before your appointment.',
            ],
          },
          callout: { variant: 'info' as const, text: ANERKENNUNG },
        },
        ]
      : []),
    {
      id: 'kanada-australien',
      heading: {
        de: 'Kanada und Australien: wann nur zugelassene Stellen untersuchen dürfen',
        en: 'Canada and Australia: when only approved providers may examine you',
      },
      body: {
        de: [
          'Kanada verlangt eine medizinische Untersuchung unter anderem für Menschen, die im Haushalt Kinder betreuen, auch bei kurzen Aufenthalten. Sie muss bei einer von Kanada zugelassenen Ärztin oder einem zugelassenen Arzt stattfinden.',
          'Australien verlangt sie unter anderem, wenn Sie voraussichtlich in einer Kindertagesstätte arbeiten. Außerhalb Australiens untersuchen nur von der Behörde zugelassene Ärztinnen, Ärzte und Kliniken. Klären Sie vor dem Visumantrag, ob das für Ihre Stelle gilt.',
          'Die Prüfung des Impfpasses und die Impfberatung sind bei uns auch dann möglich.',
        ],
        en: [
          'Canada requires a medical examination for, among others, people caring for children in the home, even for short stays. It must take place with a doctor approved by Canada.',
          'Australia requires it, among other cases, if you are likely to work at a childcare centre. Outside Australia, only doctors and clinics approved by the authority may examine you. Before applying for your visa, find out whether this applies to your position.',
          'A review of your vaccination record and vaccination advice are still possible with us.',
        ],
      },
      callout: { variant: 'important', text: VISA_GRENZE },
    },
    {
      id: 'impfungen',
      heading: {
        de: 'Impfungen mit Blick auf den Umgang mit Kindern',
        en: 'Vaccinations with a view to working with children',
      },
      body: {
        de: [
          'Wer täglich mit Kindern lebt, sollte den eigenen Impfstatus kennen. Wir prüfen, was im Impfpass steht und was nach den STIKO-Empfehlungen für Ihr Alter offen ist, zum Beispiel zu Masern oder Keuchhusten. Was davon für Sie infrage kommt, besprechen wir im Gespräch.',
        ],
        en: [
          'Anyone living with children every day should know their own vaccination status. We check what is in your record and what is still open under the STIKO recommendations for your age, for example on measles or whooping cough. We discuss what may apply to you during the consultation.',
        ],
      },
      links: [{ label: { de: 'Wann vor der Reise impfen', en: 'When to get vaccinated before a trip' }, path: '/ratgeber/wann-vor-der-reise-impfen' }],
    },
    {
      id: 'zeitplan',
      heading: {
        de: 'Zeitplan vor der Bewerbung',
        en: 'Timeline before you apply',
      },
      body: {
        de: ['Kommen Sie möglichst früh im Bewerbungsverfahren, denn Impfserien können Monate dauern. Fragen Sie Ihre Agentur außerdem, wie alt das Formular bei der Abgabe sein darf.'],
        en: ['Come as early as you can in the application process, because vaccine series can take months. Please also ask your agency how old the form may be when you submit it.'],
      },
      list: {
        de: [
          'Formular und Abgabefrist bei der Agentur erfragen.',
          'Impfpass prüfen lassen und fehlende Impfungen planen.',
          'Impfserien spätestens zwei Wochen vor Reisebeginn abschließen. Das empfehlen STIKO und DTG.',
          ...(NACHWEISE_IM_ANGEBOT ? ['Termin für das Formular in die Frist Ihrer Agentur legen.'] : []),
        ],
        en: [
          'Ask the agency for the form and the deadline.',
          'Have your record reviewed and plan any missing vaccinations.',
          'Complete vaccine series at least two weeks before the trip. STIKO and DTG recommend this.',
          ...(NACHWEISE_IM_ANGEBOT ? ['Schedule the appointment for the form within your agency’s deadline.'] : []),
        ],
      },
    },
    {
      id: 'mitbringen',
      heading: { de: 'Was Sie mitbringen', en: 'What to bring' },
      body: {
        de: ['Für den Termin brauchen wir:'],
        en: ['For the appointment we need:'],
      },
      list: {
        de: [
          NACHWEISE_IM_ANGEBOT
            ? 'das aktuelle Formular der Agentur mit allen Seiten'
            : 'die aktuellen Vorgaben der Agentur, zum Beispiel das Formular',
          'Impfpass und weitere Impfunterlagen',
          'Arztbriefe und eine Liste Ihrer Medikamente, falls vorhanden',
          'die Abgabefrist',
        ],
        en: [
          NACHWEISE_IM_ANGEBOT
            ? 'the current agency form with all its pages'
            : 'the agency’s current requirements, for example the form',
          'your vaccination record and any other vaccination documents',
          'doctor’s letters and a list of your medicines, if you have them',
          'the deadline',
        ],
      },
      callout: {
        variant: 'info',
        text: {
          de: `Unsere Praxis am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath erreichen Sie gut aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen. ${KOSTEN_HINWEIS.de}`,
          en: `Our practice at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath is easy to reach from Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen. ${KOSTEN_HINWEIS.en}`,
        },
      },
      links: [{ label: { de: 'Kosten', en: 'Fees' }, path: '/kosten#ausland' }],
    },
  ],
  faq: [
    ...(NACHWEISE_IM_ANGEBOT
      ? [
        {
          q: {
            de: 'Füllen Sie den Medical Report meiner Au-pair-Agentur aus?',
            en: 'Will you complete the medical report from my au pair agency?',
          },
          a: {
            de: `Ja, soweit wir die Angaben prüfen können. Dafür untersuchen wir Sie und prüfen Ihren Impfausweis. ${ANERKENNUNG.de}`,
            en: `Yes, as far as we can verify the details. We examine you and review your vaccination record for this. ${ANERKENNUNG.en}`,
          },
        },
        {
          q: { de: 'Was wird für das Formular untersucht?', en: 'What is examined for the form?' },
          a: {
            de: 'Das richtet sich nach dem Formular. Das US-Regelwerk spricht von einer körperlichen Untersuchung und nennt keine Einzelheiten. Laborwerte oder Röntgenbilder sind nur nötig, wenn Ihr Formular sie verlangt. Rufen Sie uns dann bitte vorher an.',
            en: 'That depends on the form. The US regulation refers to a physical and gives no details. Laboratory values or X-rays are needed only if your form asks for them. In that case, please call us beforehand.',
          },
        },
        ]
      : []),
    {
      q: {
        de: 'Welche Impfungen sind für Au-pairs in den USA üblich?',
        en: 'Which vaccinations are usual for au pairs in the USA?',
      },
      a: {
        de: 'Das US-Regelwerk nennt keine. Die Formulare der Agenturen können nach Impfungen fragen. Wir vergleichen Ihren Impfpass mit Ihrem Formular und den STIKO-Empfehlungen.',
        en: 'The US regulation does not name any. Agency forms may ask about vaccinations. We compare your record with your form and the STIKO recommendations.',
      },
    },
    {
      q: NACHWEISE_IM_ANGEBOT ? { de: 'Gilt das auch für Kanada?', en: 'Does this also apply to Canada?' } : { de: 'Brauche ich für Kanada eine Untersuchung?', en: 'Do I need an examination for Canada?' },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? `Nein. Wer in Kanada im Haushalt Kinder betreut, braucht laut kanadischer Behörde eine Untersuchung bei einer dort zugelassenen Stelle. Die eigene Ärztin oder der eigene Arzt darf sie nicht durchführen. ${VISA_GRENZE.de}`
          : `Wer in Kanada im Haushalt Kinder betreut, braucht laut kanadischer Behörde eine Untersuchung bei einer dort zugelassenen Stelle. Die eigene Ärztin oder der eigene Arzt darf sie nicht durchführen. ${VISA_GRENZE.de}`,
        en: NACHWEISE_IM_ANGEBOT
          ? `No. According to the Canadian authority, anyone caring for children in the home in Canada needs an examination by a provider approved there. Your own doctor cannot carry it out. ${VISA_GRENZE.en}`
          : `According to the Canadian authority, anyone caring for children in the home in Canada needs an examination by a provider approved there. Your own doctor cannot carry it out. ${VISA_GRENZE.en}`,
      },
    },
    ...(NACHWEISE_IM_ANGEBOT
      ? [
        {
          q: {
            de: 'Das Formular gibt es nur auf Englisch. Ist das ein Problem?',
            en: 'The form is available only in English. Is that a problem?',
          },
          a: {
            de: 'Nein. Wir füllen englische Formulare aus. Eine beglaubigte Übersetzung ist das nicht.',
            en: 'No. We complete English forms. That is not a certified translation.',
          },
        },
        ]
      : []),
    {
      q: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Darf das auch meine Hausarztpraxis ausfüllen?'
          : 'Wer kann das Formular der Agentur ausfüllen?',
        en: NACHWEISE_IM_ANGEBOT
          ? 'Can my family doctor complete it as well?'
          : 'Who can complete the agency’s form?',
      },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'In der Regel ja, sofern Ihre Agentur nichts anderes vorgibt. Sie entscheiden, wo Sie das erledigen.'
          : 'In der Regel Ihre Hausarztpraxis, sofern Ihre Agentur nichts anderes vorgibt.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'As a rule yes, unless your agency specifies otherwise. It is up to you where you have this done.'
          : 'As a rule your family doctor, unless your agency specifies otherwise.',
      },
    },
  ],
  termine: [
    ...(NACHWEISE_IM_ANGEBOT
      ? [
        { label: { de: 'Termin für Au-pair-Formular buchen', en: 'Book an appointment for an au pair form' }, art: 'nachweis-status' },
        { label: { de: 'Beratung und Impfungen buchen', en: 'Book consultation and vaccinations' }, art: 'langzeit' },
      ]
      : [{ label: { de: 'Beratung vor dem Auslandsaufenthalt buchen', en: 'Book a consultation before your time abroad' }, art: 'langzeit' }]),
    { label: { de: 'Impfpass prüfen lassen', en: 'Have your vaccination record reviewed' }, art: 'impfpass-check' },
  ],
  related: [
    ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : []),
    { label: { de: 'Auslandsjahr und Schüleraustausch', en: 'Exchange year abroad' }, path: '/ausland/auslandsjahr' },
    { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten#ausland' },
  ],
  sourceIds: ['cfrAuPair', 'caTemporary', 'caPanel', 'auHealthExams', 'auPanel', 'stikoImpfempfehlungen', 'stikoReise2026'],
  lastReviewed: AUSLAND_GEPRUEFT,
};
