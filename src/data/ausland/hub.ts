/**
 * Übersichtsseite „Ausland": verteilt auf die Unterseiten und bündelt, was für alle
 * gilt. Keine Beträge (nur auf /kosten), kein einzelner Reiseanlass im Termin-Link.
 */
import type { ClinicalPage, Localized } from '../types';
import { KEINE_FORMULARE } from './fach-texte';
import { AUSLAND_GEPRUEFT, GUTSCHEIN_IM_ANGEBOT, NACHWEISE_IM_ANGEBOT } from './stand';

export interface AuslandKachel {
  title: Localized;
  text: Localized;
  path: string;
  variant: string;
}

export const auslandKachelnHeading: Localized = {
  de: 'Wofür möchten Sie sich vorbereiten?',
  en: 'What are you preparing for?',
};

export const auslandKachelCta: Localized = { de: 'Mehr dazu', en: 'Read more' };

export const auslandKacheln: AuslandKachel[] = [
  {
    title: { de: 'Auslandsjahr und Austausch', en: 'Exchange year' },
    text: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Schüleraustausch oder High School im Ausland: Impfpass, fehlende Impfungen und das Formular der Organisation.'
        : 'Schüleraustausch oder High School im Ausland: Impfpass, fehlende Impfungen und die Vorgaben der Organisation.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'School exchange or high school abroad: vaccination record, missing vaccinations and your organisation’s form.'
        : 'School exchange or high school abroad: vaccination record, missing vaccinations and your organisation’s requirements.',
    },
    path: '/ausland/auslandsjahr',
    variant: 'exchange',
  },
  {
    title: { de: 'Au-pair', en: 'Au pair' },
    text: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Das ärztliche Formular der Agentur und Impfungen mit Blick auf den Umgang mit Kindern.'
        : 'Impfpass-Prüfung und Impfungen mit Blick auf den Umgang mit Kindern.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Your agency’s medical form and vaccinations with a view to working with children.'
        : 'Vaccination record review and vaccinations with a view to working with children.',
    },
    path: '/ausland/au-pair',
    variant: 'auPair',
  },
  {
    title: { de: 'Work & Travel', en: 'Work & travel' },
    text: {
      de: 'Work & Travel, Backpacking oder Weltreise: Impfplan, Malaria-Vorsorge und Reiseapotheke für Ihre Route.',
      en: 'Work & travel, backpacking or a world trip: vaccination plan, malaria prevention and travel kit for your route.',
    },
    path: '/ausland/work-and-travel',
    variant: 'workTravel',
  },
  {
    title: { de: 'Auslandssemester', en: 'Study abroad' },
    text: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Immunization Form und Impfnachweis für Hochschule, PJ oder Praktikum im Ausland.'
        : 'Impfpass und fehlende Impfungen vor Hochschule, PJ oder Praktikum im Ausland.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Immunization form and vaccination record for a university, clinical elective or internship abroad.'
        : 'Vaccination record and missing vaccinations before a university, clinical elective or internship abroad.',
    },
    path: '/ausland/auslandssemester',
    variant: 'study',
  },
  {
    title: { de: 'Pilgerreisen', en: 'Pilgrimages' },
    text: {
      de: 'Hadsch, Umra, Jakobsweg, Lourdes und andere Ziele: Vorgaben und Beratung je nach Ziel.',
      en: 'Hajj, Umrah, the Camino, Lourdes and other destinations: rules and advice by destination.',
    },
    path: '/ausland/pilgerreisen',
    variant: 'pilgrimage',
  },
  ...(NACHWEISE_IM_ANGEBOT
    ? [
      {
        title: { de: 'Nachweise und Atteste', en: 'Certificates and forms' },
        text: {
          de: 'Englische Impfbescheinigung, Impfpass-Prüfung und Formulare, und was wir nicht ausstellen.',
          en: 'English vaccination certificate, record review and forms, and what we do not issue.',
        },
        path: '/ausland/nachweise',
        variant: 'certificate',
      },
      {
        title: { de: 'Gesundheitszeugnis fürs Visum', en: 'Medical certificate for a visa' },
        text: {
          de: 'Wann eine Privatpraxis das Zeugnis ausstellen kann und wann nur zugelassene Stellen zuständig sind.',
          en: 'When a private practice can issue the certificate and when only appointed doctors may do so.',
        },
        path: '/ausland/gesundheitszeugnis-visum',
        variant: 'visa',
      },
      {
        title: { de: 'Flug und Kreuzfahrt', en: 'Flights and cruises' },
        text: {
          de: 'Ärztliche Bescheinigung, wenn eine Fluggesellschaft oder Reederei ein Formular verlangt.',
          en: 'A medical certificate when an airline or cruise line asks for a form.',
        },
        path: '/ausland/flug-kreuzfahrt-attest',
        variant: 'flight',
      },
      ]
    : []),
  ...(GUTSCHEIN_IM_ANGEBOT
    ? [
      {
        title: { de: 'Wertgutschein', en: 'Gift voucher' },
        text: {
          de: 'Ein Euro-Betrag zum Verschenken, der auf Rechnungen der Praxis angerechnet wird.',
          en: 'An amount in euros to give as a gift, credited against practice invoices.',
        },
        path: '/gutschein',
        variant: 'voucher' as const,
      },
      ]
    : []),
];

export const auslandHubPage: ClinicalPage = {
  meta: {
    title: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Vor der Zeit im Ausland: Impfungen, Formulare und Nachweise'
        : 'Vor der Zeit im Ausland: Impfungen und Beratung',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Before your time abroad: vaccinations, forms and certificates'
        : 'Before your time abroad: vaccinations and advice',
    },
    description: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Vor Auslandsjahr, Au-pair, Studium, Pilgerreise oder Visum: Wir klären, was verlangt ist, und füllen Formulare aus, soweit wir sie prüfen können. In Langenfeld.'
        : 'Vor Auslandsjahr, Au-pair, Studium, Work & Travel oder Pilgerreise: Wir klären, was verlangt ist, und planen fehlende Impfungen. In Langenfeld.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Before a year abroad, au pair stay, study abroad, pilgrimage or visa: we check what is required and complete forms as far as we can verify them. Langenfeld.'
        : 'Before a year abroad, au pair stay, study abroad, work & travel or pilgrimage: we check what is required and plan missing vaccinations. Langenfeld.',
    },
    eyebrow: { de: 'Ausland', en: 'Abroad' },
    lead: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Auslandsjahr, Au-pair, Studium, Work & Travel oder Pilgerreise: Wir prüfen mit Ihnen, was Zielland und Organisation verlangen, planen fehlende Impfungen und füllen Formulare aus, soweit wir die Angaben prüfen können.'
        : 'Auslandsjahr, Au-pair, Studium, Work & Travel oder Pilgerreise: Wir prüfen mit Ihnen, was Zielland und Organisation verlangen, und planen fehlende Impfungen.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Exchange year, au pair stay, study abroad, work & travel or pilgrimage: we check with you what your destination and organisation require, plan missing vaccinations and complete forms as far as we can verify the details.'
        : 'Exchange year, au pair stay, study abroad, work & travel or pilgrimage: we check with you what your destination and organisation require and plan missing vaccinations.',
    },
  },
  sections: [
    {
      id: 'planen',
      heading: { de: 'Ab wann Sie planen sollten', en: 'When to start planning' },
      body: {
        de: [
          NACHWEISE_IM_ANGEBOT
            ? 'Je früher wir Formular und Impfpass sehen, desto mehr lässt sich in Ruhe planen. Impfserien sollten spätestens zwei Wochen vor der Abreise abgeschlossen sein.'
            : 'Je früher wir Ihren Impfpass und die Vorgaben Ihrer Einrichtung sehen, desto mehr lässt sich in Ruhe planen. Impfserien sollten spätestens zwei Wochen vor der Abreise abgeschlossen sein.',
        ],
        en: [
          NACHWEISE_IM_ANGEBOT
            ? 'The sooner we see your form and vaccination record, the more can be planned without rushing. Vaccination series should be completed at least two weeks before you leave.'
            : 'The sooner we see your vaccination record and your institution’s requirements, the more can be planned without rushing. Vaccination series should be completed at least two weeks before you leave.',
        ],
      },
      list: {
        de: [
          NACHWEISE_IM_ANGEBOT
            ? 'Studium, PJ oder Praktikum: Formular vier bis sechs Monate vor Beginn prüfen lassen. Manche Einrichtungen setzen frühe Abgabefristen.'
            : 'Studium, PJ oder Praktikum: Impfpass vier bis sechs Monate vor Beginn prüfen lassen. Manche Einrichtungen setzen frühe Abgabefristen.',
          'Auslandsjahr und Austausch: drei bis vier Monate vor der Abgabefrist Ihrer Organisation.',
          'Au-pair: früh im Bewerbungsverfahren, das oft mehrere Monate dauert.',
          'Work & Travel und Weltreise: acht bis zwölf Wochen vor dem Abflug.',
          ...(NACHWEISE_IM_ANGEBOT
            ? [
              'Visum mit Apostille: rund drei Monate Vorlauf, weil die Beglaubigung derzeit mehrere Wochen dauert.',
              'Flug oder Kreuzfahrt: kurz vor der Reise, weil manche Anbieter nur sehr aktuelle Formulare annehmen.',
              ]
            : []),
        ],
        en: [
          NACHWEISE_IM_ANGEBOT
            ? 'Study, clinical elective or internship: have your form reviewed four to six months before you start. Some institutions set early deadlines.'
            : 'Study, clinical elective or internship: have your vaccination record reviewed four to six months before you start. Some institutions set early deadlines.',
          'Exchange year: three to four months before your organisation’s deadline.',
          'Au pair: early in the application process, which often takes several months.',
          'Work & travel and world trips: eight to twelve weeks before departure.',
          ...(NACHWEISE_IM_ANGEBOT
            ? [
              'Visa with apostille: allow around three months, as legalisation currently takes several weeks.',
              'Flight or cruise: shortly before you travel, as some providers only accept very recent forms.',
              ]
            : []),
        ],
      },
      links: [
        {
          label: { de: 'Wann vor der Reise impfen?', en: 'When to vaccinate before travelling' },
          path: '/ratgeber/wann-vor-der-reise-impfen',
        },
      ],
    },
    {
      id: 'mitbringen',
      heading: { de: 'Was Sie zum Termin mitbringen', en: 'What to bring to your appointment' },
      body: {
        de: ['So können wir im Termin konkret prüfen und planen:'],
        en: ['This allows us to check and plan in concrete terms during the appointment:'],
      },
      list: {
        de: [
          'Ihren Impfausweis und ältere Impfunterlagen',
          NACHWEISE_IM_ANGEBOT
            ? 'Das aktuelle Formular Ihrer Hochschule, Organisation oder Agentur, wenn es eines gibt'
            : 'Die Vorgaben Ihrer Hochschule, Organisation oder Agentur, wenn es welche gibt',
          'Zielland, Reisedaten und die Abgabefrist',
          'Eine Liste Ihrer Medikamente und wichtige Vorbefunde',
          'Bei Minderjährigen: das Einverständnis der Sorgeberechtigten. Wer mitkommt und unterschreibt, klären wir vor dem Termin.',
        ],
        en: [
          'Your vaccination record and any older vaccination documents',
          NACHWEISE_IM_ANGEBOT
            ? 'The current form from your university, organisation or agency, if there is one'
            : 'The requirements from your university, organisation or agency, if there are any',
          'Destination, travel dates and the deadline',
          'A list of your medication and important previous findings',
          'For minors: the consent of those with parental responsibility. We clarify before the appointment who attends and who signs.',
        ],
      },
    },
    {
      id: 'grenzen',
      heading: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Was wir nicht ausstellen: Untersuchungen, die ein Land ernannten Ärztinnen und Ärzten vorbehält'
          : 'Untersuchungen, die ein Land ernannten Ärztinnen und Ärzten vorbehält',
        en: NACHWEISE_IM_ANGEBOT
          ? 'What we do not issue: examinations a country reserves for appointed doctors'
          : 'Examinations a country reserves for appointed doctors',
      },
      body: {
        de: [
          'Verlangt ein Land eine Visa-Untersuchung durch zugelassene Stellen, dürfen wir sie nicht durchführen. Das kann auch befristete Visa betreffen.',
          'Das gilt zum Beispiel für die USA, Kanada und Australien, für Neuseeland dann, wenn es im Land zugelassene Ärztinnen und Ärzte gibt. In Kanada kann es auch kurze Aufenthalte für Schule, Kinderbetreuung, Gesundheitswesen oder ein Medizin-Elective treffen. Den Impfschutz für solche Reisen können wir trotzdem mit Ihnen planen.',
        ],
        en: [
          'If a country requires a visa medical examination by appointed doctors, we may not carry it out. This can also apply to temporary visas.',
          'This applies, for example, to the USA, Canada and Australia, and to New Zealand if there are approved doctors in the country. In Canada it can also affect short stays for school, childcare, healthcare or a medical elective. We can still plan your vaccination cover for such trips with you.',
        ],
      },
      callout: {
        variant: 'info',
        text: {
          de: NACHWEISE_IM_ANGEBOT
            ? 'Ob eine Stelle eine Bescheinigung anerkennt, entscheidet diese Stelle. Lassen Sie sich die Vorgabe am besten vorab schriftlich geben.'
            : 'Welche Vorgaben gelten, entscheidet die jeweilige Stelle. Lassen Sie sich diese am besten vorab schriftlich geben.',
          en: NACHWEISE_IM_ANGEBOT
            ? 'Whether an institution accepts a certificate is for that institution to decide. It is best to get its requirements in writing beforehand.'
            : 'What is required is for the institution concerned to decide. It is best to get its requirements in writing beforehand.',
        },
      },
      links: NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Nachweise und Atteste', en: 'Certificates and forms' }, path: '/ausland/nachweise' }] : [],
    },
    {
      id: 'anfahrt',
      heading: { de: 'So erreichen Sie uns', en: 'How to reach us' },
      body: {
        de: [
          'Unsere Praxis liegt am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath. Aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen sind wir gut erreichbar. Termine vergeben wir nur nach Vereinbarung.',
        ],
        en: [
          'Our practice is at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath and is easy to reach from Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen. Appointments are by arrangement only.',
        ],
      },
      links: [{ label: { de: 'Kontakt und Anfahrt', en: 'Contact and directions' }, path: '/kontakt' }],
    },
  ],
  termine: [
    {
      label: { de: 'Beratung vor dem Auslandsaufenthalt buchen', en: 'Book a consultation before your time abroad' },
      art: 'langzeit',
    },
  ],
  faq: [
    {
      q: {
        de: 'Wie früh sollte ich mich vor einem längeren Auslandsaufenthalt melden?',
        en: 'How early should I get in touch before a longer stay abroad?',
      },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Das hängt vom Anlass ab. Für Work & Travel sind acht bis zwölf Wochen vor dem Abflug ein guter Zeitpunkt, für Hochschulformulare eher vier bis sechs Monate vor Beginn.'
          : 'Das hängt vom Anlass ab. Für Work & Travel sind acht bis zwölf Wochen vor dem Abflug ein guter Zeitpunkt, für Studium oder PJ eher vier bis sechs Monate vor Beginn.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'That depends on the reason for your trip. For work & travel, eight to twelve weeks before departure is a good time; for university forms, rather four to six months before you start.'
          : 'That depends on the reason for your trip. For work & travel, eight to twelve weeks before departure is a good time; for study abroad or a clinical elective, rather four to six months before you start.',
      },
    },
    {
      q: { de: 'Was bringe ich zum Termin mit?', en: 'What should I bring to the appointment?' },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Ihren Impfausweis, das aktuelle Formular Ihrer Einrichtung oder Organisation, Ihre Reisedaten und eine Liste Ihrer Medikamente.'
          : 'Ihren Impfausweis, die Vorgaben Ihrer Einrichtung oder Organisation, Ihre Reisedaten und eine Liste Ihrer Medikamente.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'Your vaccination record, the current form from your institution or organisation, your travel dates and a list of your medication.'
          : 'Your vaccination record, the requirements from your institution or organisation, your travel dates and a list of your medication.',
      },
    },
    {
      q: NACHWEISE_IM_ANGEBOT ? { de: 'Füllen Sie jedes Formular aus?', en: 'Do you complete every form?' } : { de: 'Füllen Sie Formulare aus?', en: 'Do you complete forms?' },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Nein. Wir füllen Formulare aus, soweit wir die Angaben prüfen können, und lassen offen, was wir nicht geprüft haben. Untersuchungen, die ein Land zugelassenen Stellen vorbehält, führen wir nicht durch.'
          : `${KEINE_FORMULARE.de} Wir prüfen Ihren Impfpass und planen fehlende Impfungen. Untersuchungen, die ein Land zugelassenen Stellen vorbehält, führen wir nicht durch.`,
        en: NACHWEISE_IM_ANGEBOT
          ? 'No. We complete forms as far as we can verify the details and leave open what we have not checked. We do not carry out examinations that a country reserves for appointed doctors.'
          : `${KEINE_FORMULARE.en} We review your vaccination record and plan any missing vaccinations. We do not carry out examinations that a country reserves for appointed doctors.`,
      },
    },
    {
      q: { de: 'Übernimmt die Krankenkasse die Kosten?', en: 'Does health insurance cover the costs?' },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Wir sind eine Privatpraxis und rechnen nach GOÄ ab. Sie erhalten eine aufgeschlüsselte Rechnung zum Einreichen. Ob Ihre Kasse etwas erstattet, klären Sie bitte vorher mit ihr. Bei ausbildungsbedingten Aufenthalten können empfohlene Impfungen eine Kassenleistung sein, dann aber in einer Kassenpraxis. Formulare und Bescheinigungen zahlen Sie in der Regel selbst.'
          : 'Wir sind eine Privatpraxis und rechnen nach GOÄ ab. Sie erhalten eine aufgeschlüsselte Rechnung zum Einreichen. Ob Ihre Kasse etwas erstattet, klären Sie bitte vorher mit ihr. Bei ausbildungsbedingten Aufenthalten können empfohlene Impfungen eine Kassenleistung sein, dann aber in einer Kassenpraxis.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'We are a private practice and bill under the GOÄ. You receive an itemised invoice to submit. Please check with your insurer beforehand whether it will reimburse anything. For stays related to training, recommended vaccinations can be a statutory benefit, but then in a statutory-insurance practice. You usually pay for forms and certificates yourself.'
          : 'We are a private practice and bill under the GOÄ. You receive an itemised invoice to submit. Please check with your insurer beforehand whether it will reimburse anything. For stays related to training, recommended vaccinations can be a statutory benefit, but then in a statutory-insurance practice.',
      },
    },
    {
      q: { de: 'Beraten Sie auch auf Englisch?', en: 'Do you also advise in English?' },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Ja. Beratung und Aufklärung bieten wir auf Deutsch und Englisch an. Formulare und Bescheinigungen können auch auf Englisch ausgefüllt werden.'
          : 'Ja. Beratung und Aufklärung bieten wir auf Deutsch und Englisch an. Eine kurze englische Impfbescheinigung auf Grundlage Ihres Impfausweises ist als Teil eines Beratungs- oder Impftermins möglich.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'Yes. We offer advice and information in German and English. Forms and certificates can also be completed in English.'
          : 'Yes. We offer advice and information in German and English. A short English vaccination certificate based on your vaccination record is possible as part of a consultation or vaccination appointment.',
      },
    },
  ],
  sourceIds: NACHWEISE_IM_ANGEBOT
    ? ['stikoReise2026', 'cdcPanel', 'caTemporary', 'auPanel', 'nzPanel', 'brdApostille', 'aeknoBescheinigung', 'sgb5Schutzimpfungen']
    : ['stikoReise2026', 'cdcPanel', 'caTemporary', 'auPanel', 'nzPanel', 'sgb5Schutzimpfungen'],
  lastReviewed: AUSLAND_GEPRUEFT,
  related: [
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    { label: { de: 'Ablauf in unserer Praxis', en: 'How it works at our practice' }, path: '/ablauf' },
    { label: { de: 'Reisemedizinische Beratung', en: 'Travel-medicine consultation' }, path: '/leistungen/reiseberatung' },
  ],
};
