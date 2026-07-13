/**
 * Inhalte der „Termin buchen"-Seite (DE+EN).
 *
 * Selbsttragend wie die übrigen Marketing-Seiten: nur redaktionelle Texte,
 * keine medizinischen Belegaussagen (daher KEINE ClinicalPage). Die Buchung
 * läuft über das EIGENE Praxis-Terminsystem (praxis-app): Das Formular sendet
 * die Terminanfrage an `site.booking.endpoint` (Reverse-Proxy vor der
 * praxis-app); es entsteht ein Termin mit Status „angefragt", den das Backoffice
 * bestätigt. Kein Drittanbieter-iframe, kein geheimes Token im Browser (das
 * BOOKING_TOKEN injiziert der Reverse-Proxy serverseitig – siehe README).
 * Hier liegen nur die Oberflächentexte; Endpunkt/Provider kommen aus
 * `site.booking`. Die `bookableTypes`-IDs müssen den Terminart-IDs der
 * praxis-app (`src/lib/terminarten.ts`) exakt entsprechen.
 */
import type { Localized } from './types';

/** Eine Terminart zur Orientierung der Patient:innen bei der Buchung. */
export interface AppointmentType {
  id: string;
  icon: 'consultation' | 'focus' | 'vaccination' | 'yellowFever';
  name: Localized;
  /** Ungefähre Dauer als kleines Label. */
  duration: Localized;
  description: Localized;
  /**
   * Preis-Richtwert nach GOÄ (unverbindlich), z. B. „ca. 28 €". Wird direkt
   * auf der Karte gezeigt, damit die Kosten schon bei der Terminwahl sichtbar
   * sind. Die ausführliche Aufschlüsselung verlinkt weiterhin `/kosten`.
   * Optional: fehlt der Wert, wird keine Preiszeile gerendert.
   */
  price?: Localized;
  /** Empfohlener Einstieg (Beratung zuerst) – wird hervorgehoben. */
  recommended?: boolean;
  /** Buchbar? (alle aktiv – Gelbfieber ist als autorisierte Impfstelle vor Ort buchbar) */
  enabled: boolean;
}

/**
 * Online buchbare Terminart für das Anfrageformular. Die `id` MUSS exakt der
 * Terminart-ID in der praxis-app (`src/lib/terminarten.ts`) entsprechen – das
 * Backend prüft sie erneut und weist unbekannte oder gesperrte (gated) Arten ab.
 * Gelbfieber ist dort `gated` und erscheint daher hier bewusst NICHT.
 */
export interface BookableType {
  id: string;
  name: Localized;
}

/**
 * Oberflächentexte des Terminanfrage-Formulars (React-Insel `BookingForm`),
 * in der jeweiligen Sprache aufgelöst übergeben. Bewusst ausführlich, damit das
 * Formular vollständig zweisprachig und ohne hartkodierte Strings rendert.
 */
export interface BookingFormText {
  heading: Localized;
  /** Kurzer Hinweis: es ist eine Anfrage (kein automatisch fixer Slot). */
  intro: Localized;
  labels: {
    terminart: Localized;
    terminartPlaceholder: Localized;
    vorname: Localized;
    nachname: Localized;
    email: Localized;
    telefon: Localized;
    geburtsdatum: Localized;
    wunschdatum: Localized;
    wunschzeit: Localized;
    reiseziel: Localized;
    abreise: Localized;
    notiz: Localized;
    notizPlaceholder: Localized;
    /** Suffix für optionale Felder, z. B. „(optional)". */
    optional: Localized;
  };
  /** Einwilligungstext; enthält den Platzhalter `{privacy}` für den Link. */
  consentLabel: Localized;
  consentLinkLabel: Localized;
  submit: Localized;
  submitting: Localized;
  successTitle: Localized;
  successBody: Localized;
  errorTitle: Localized;
  errorBody: Localized;
  /** Validierung. */
  requiredHint: Localized;
  consentRequired: Localized;
  /** Datenschutz-Kurzhinweis unter dem Formular. */
  privacyNote: Localized;
  /** Honeypot-Beschriftung (visuell versteckt, nur für Bots/Screenreader-Hinweis). */
  honeypotLabel: Localized;
  /** Pre-Go-live (solange `site.booking.endpoint` leer ist): neutraler Platzhalter. */
  placeholderTitle: Localized;
  placeholderBody: Localized<string[]>;
}

export interface BookingPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  intro: Localized<string[]>;
  widgetHeading: Localized;
  /** Umbau-Hinweis statt Online-Buchung: verweist auf Telefon/E-Mail. */
  widgetNotice: {
    badge: Localized;
    title: Localized;
    body: Localized;
    phoneCtaLabel: Localized;
    emailCtaLabel: Localized;
  };
  /** Terminarten zur Orientierung; Gelbfieber ist noch nicht buchbar. */
  appointmentTypes: {
    heading: Localized;
    lead: Localized;
    recommendedLabel: Localized;
    pendingLabel: Localized;
    /** Kleines Label über dem Preis-Richtwert auf der Karte. */
    priceNoteLabel: Localized;
    costsLabel: Localized;
    /** Logischer Pfad ohne Locale-Präfix. */
    costsPath: string;
    items: AppointmentType[];
  };
  /** Online buchbare Terminarten für das Anfrageformular (IDs = praxis-app). */
  bookableTypes: BookableType[];
  /** Oberflächentexte des Terminanfrage-Formulars. */
  form: BookingFormText;
  /** „Vor Ihrem Termin" – kurze Vorbereitungs-Hinweise. */
  prepare: {
    heading: Localized;
    lead: Localized;
    points: Localized<string[]>;
    moreLabel: Localized;
    /** Logischer Pfad ohne Locale-Präfix. */
    morePath: string;
  };
  /** Telefon/E-Mail-Fallback (gerendert aus `site.contact`/`site.openingHours`). */
  contact: {
    heading: Localized;
    body: Localized;
    phoneLabel: Localized;
    emailLabel: Localized;
    hoursLabel: Localized;
  };
}

export const bookingPage: BookingPage = {
  meta: {
    title: {
      de: 'Termin vereinbaren',
      en: 'Arrange an appointment',
    },
    description: {
      de: 'Vereinbaren Sie Ihren Termin für die reisemedizinische Beratung und Impfung – telefonisch oder per E-Mail, direkt mit unserer Praxis.',
      en: 'Arrange your appointment for travel-medicine advice and vaccination – by phone or email, directly with our practice.',
    },
    eyebrow: {
      de: 'Terminbuchung',
      en: 'Appointments',
    },
    lead: {
      de: 'Vereinbaren Sie Ihren Termin für Beratung und Impfung ganz unkompliziert telefonisch oder per E-Mail – Sie erreichen unsere Praxis direkt.',
      en: 'Arrange your appointment for advice and vaccination simply by phone or email – you reach our practice directly.',
    },
  },
  intro: {
    de: [
      'Vereinbaren Sie Ihren Termin für die reisemedizinische Beratung und Impfung telefonisch oder per E-Mail. Sie erreichen unsere Praxis direkt – ganz ohne externen Anbieter.',
      'Bitte planen Sie ausreichend Vorlauf ein – einige Reiseimpfungen sollten rechtzeitig vor der Abreise erfolgen.',
    ],
    en: [
      'Arrange your appointment for travel-medicine advice and vaccination by phone or email. You reach our practice directly – with no external provider.',
      'Please allow enough lead time – some travel vaccinations should be given well before departure.',
    ],
  },
  widgetHeading: {
    de: 'Terminvereinbarung',
    en: 'Arrange an appointment',
  },
  widgetNotice: {
    badge: {
      de: 'Im Umbau',
      en: 'Under maintenance',
    },
    title: {
      de: 'Online-Terminbuchung zurzeit nicht verfügbar',
      en: 'Online booking currently unavailable',
    },
    body: {
      de: 'Unsere Online-Terminbuchung wird gerade überarbeitet und ist vorübergehend nicht verfügbar. Für eine Terminvereinbarung können Sie uns gerne telefonisch oder per E-Mail kontaktieren – wir melden uns zeitnah bei Ihnen.',
      en: 'Our online appointment booking is currently being reworked and is temporarily unavailable. To arrange an appointment, please contact us by phone or email – we will get back to you promptly.',
    },
    phoneCtaLabel: {
      de: 'Anrufen',
      en: 'Call us',
    },
    emailCtaLabel: {
      de: 'E-Mail schreiben',
      en: 'Send an email',
    },
  },
  appointmentTypes: {
    heading: {
      de: 'Welcher Termin passt zu Ihnen?',
      en: 'Which appointment is right for you?',
    },
    lead: {
      de: 'Nennen Sie uns bei der Terminvereinbarung die passende Terminart. Im Zweifel ist die reisemedizinische Beratung der richtige Einstieg – sie bildet die Grundlage für alle weiteren Schritte.',
      en: 'Just let us know the matching appointment type when you get in touch. If in doubt, the travel-medicine consultation is the right starting point – it forms the basis for every further step.',
    },
    recommendedLabel: {
      de: 'Empfohlener Start',
      en: 'Recommended start',
    },
    pendingLabel: {
      de: 'In Vorbereitung',
      en: 'In preparation',
    },
    priceNoteLabel: {
      de: 'Richtwert nach GOÄ',
      en: 'Guide price (GOÄ)',
    },
    costsLabel: {
      de: 'Kosten & Abrechnung ansehen',
      en: 'View fees & billing',
    },
    costsPath: '/kosten',
    items: [
      {
        id: 'beratung',
        icon: 'consultation',
        name: {
          de: 'Reisemedizinische Beratung',
          en: 'Travel-medicine consultation',
        },
        duration: { de: 'ca. 20 Minuten', en: 'approx. 20 minutes' },
        description: {
          de: 'Ausführliche Beratung für Fernreisen, mehrere Länder oder eine besondere Vorgeschichte – mit persönlichem, schriftlichem Impf- und Reiseplan. Den Plan erhalten Sie unabhängig von einer späteren Impfung.',
          en: 'An in-depth consultation for long-haul trips, multiple countries or a particular medical history – with a personal written vaccination and travel plan. You receive the plan regardless of any later vaccination.',
        },
        price: { de: 'ca. 50 €', en: 'approx. €50' },
        recommended: true,
        enabled: true,
      },
      {
        id: 'beratung-kompakt',
        icon: 'consultation',
        name: {
          de: 'Reiseberatung kompakt (Europa)',
          en: 'Compact travel consultation (Europe)',
        },
        duration: { de: 'ca. 10 Minuten', en: 'approx. 10 minutes' },
        description: {
          de: 'Kompakte Beratung für ein einzelnes Reiseland innerhalb Europas – mit persönlichem, schriftlichem Impf- und Reiseplan. Den Plan erhalten Sie unabhängig von einer späteren Impfung.',
          en: 'A compact consultation for a single destination country within Europe – with a personal written vaccination and travel plan. You receive the plan regardless of any later vaccination.',
        },
        price: { de: 'ca. 28 €', en: 'approx. €28' },
        enabled: true,
      },
      {
        id: 'fokus',
        icon: 'focus',
        name: {
          de: 'Fokus-Beratung: Malaria & Höhenmedizin',
          en: 'Focused advice: malaria & altitude',
        },
        duration: { de: 'ca. 15 Minuten', en: 'approx. 15 minutes' },
        description: {
          de: 'Gezielte Beratung, wenn Sie speziell zu Malariaschutz oder Höhenmedizin Fragen haben – auf Wunsch mit Privatrezept für ein Notfallset.',
          en: 'Targeted advice if you have specific questions about malaria protection or altitude medicine – with a private prescription for a stand-by kit on request.',
        },
        price: { de: 'ca. 20 €', en: 'approx. €20' },
        enabled: true,
      },
      {
        id: 'impftermin',
        icon: 'vaccination',
        name: {
          de: 'Folge-Impftermin',
          en: 'Follow-up vaccination appointment',
        },
        duration: { de: 'ca. 10 Minuten', en: 'approx. 10 minutes' },
        description: {
          de: 'Die eigentliche Impfung nach Ihrem Impfplan: Sie bringen den Impfstoff per Privatrezept aus der Apotheke mit. FSME und Gelbfieber halten wir vor Ort vorrätig und impfen sie direkt in einem Termin.',
          en: 'The vaccination itself, following your plan: you bring the vaccine from the pharmacy via private prescription. TBE and yellow fever are kept in stock on site and given directly in a single appointment.',
        },
        price: { de: 'ca. 20 € + Impfstoff', en: 'approx. €20 + vaccine' },
        enabled: true,
      },
      {
        id: 'gelbfieber',
        icon: 'yellowFever',
        name: {
          de: 'Gelbfieberimpfung',
          en: 'Yellow-fever vaccination',
        },
        duration: { de: 'ca. 10 Minuten', en: 'approx. 10 minutes' },
        description: {
          de: 'Gelbfieberimpfung inklusive internationalem Impfnachweis (ICVP) – in einem Termin bei uns vor Ort. Den Impfstoff (Stamaril®) halten wir vorrätig.',
          en: 'Yellow-fever vaccination including the international certificate (ICVP) – in a single appointment on site. We keep the vaccine (Stamaril®) in stock.',
        },
        price: { de: 'ca. 38 € + Impfstoff', en: 'approx. €38 + vaccine' },
        enabled: true,
      },
    ],
  },
  bookableTypes: [
    { id: 'vollberatung', name: { de: 'Reisemedizinische Beratung – Fernreise / mehrere Länder', en: 'Travel-medicine consultation – long-haul / multiple countries' } },
    { id: 'vollberatung-kurz', name: { de: 'Reiseberatung kompakt (Europa)', en: 'Compact travel consultation (Europe)' } },
    { id: 'folgetermin', name: { de: 'Impftermin nach Ihrem Impfplan', en: 'Vaccination appointment (per your plan)' } },
    { id: 'malaria-beratung', name: { de: 'Malariaberatung', en: 'Malaria consultation' } },
    { id: 'hoehen-beratung', name: { de: 'Höhenmedizin-Beratung', en: 'Altitude-medicine consultation' } },
    { id: 'malaria-hoehe', name: { de: 'Malaria- & Höhenberatung (kombiniert)', en: 'Malaria & altitude (combined)' } },
    { id: 'fsme', name: { de: 'FSME-Impftermin', en: 'TBE vaccination appointment' } },
    { id: 'gelbfieber', name: { de: 'Gelbfieberimpfung', en: 'Yellow-fever vaccination' } },
    { id: 'b2b', name: { de: 'Reisemedizin für Unternehmen (B2B)', en: 'Corporate travel medicine (B2B)' } },
  ],
  form: {
    heading: {
      de: 'Termin anfragen',
      en: 'Request an appointment',
    },
    intro: {
      de: 'Senden Sie uns Ihren Wunschtermin – wir prüfen die Verfügbarkeit und bestätigen Ihren Termin persönlich per E-Mail. Ihre Angaben werden direkt an unsere Praxis übermittelt; es ist kein externer Buchungsdienst beteiligt.',
      en: 'Send us your preferred appointment – we check availability and confirm your appointment personally by email. Your details are sent directly to our practice; no external booking service is involved.',
    },
    labels: {
      terminart: { de: 'Terminart', en: 'Appointment type' },
      terminartPlaceholder: { de: 'Bitte wählen …', en: 'Please choose …' },
      vorname: { de: 'Vorname', en: 'First name' },
      nachname: { de: 'Nachname', en: 'Last name' },
      email: { de: 'E-Mail', en: 'Email' },
      telefon: { de: 'Telefon', en: 'Phone' },
      geburtsdatum: { de: 'Geburtsdatum', en: 'Date of birth' },
      wunschdatum: { de: 'Wunschdatum', en: 'Preferred date' },
      wunschzeit: { de: 'Wunschzeit', en: 'Preferred time' },
      reiseziel: { de: 'Reiseziel', en: 'Destination' },
      abreise: { de: 'Abreisedatum', en: 'Departure date' },
      notiz: { de: 'Nachricht', en: 'Message' },
      notizPlaceholder: {
        de: 'Reiseroute, geplante Aktivitäten, Fragen … (optional)',
        en: 'Itinerary, planned activities, questions … (optional)',
      },
      optional: { de: '(optional)', en: '(optional)' },
    },
    consentLabel: {
      de: 'Ich willige ein, dass meine Angaben zur Bearbeitung meiner Terminanfrage gespeichert und verarbeitet werden. Hinweise dazu finden Sie in unserer {privacy}.',
      en: 'I consent to my details being stored and processed to handle my appointment request. For details, see our {privacy}.',
    },
    consentLinkLabel: {
      de: 'Datenschutzerklärung',
      en: 'privacy policy',
    },
    submit: { de: 'Terminanfrage senden', en: 'Send appointment request' },
    submitting: { de: 'Wird gesendet …', en: 'Sending …' },
    successTitle: { de: 'Anfrage eingegangen – danke!', en: 'Request received – thank you!' },
    successBody: {
      de: 'Wir haben Ihre Terminanfrage erhalten und melden uns zur Bestätigung Ihres Wunschtermins bei Ihnen. Bitte prüfen Sie auch Ihren Spam-Ordner.',
      en: 'We have received your appointment request and will get back to you to confirm your preferred slot. Please also check your spam folder.',
    },
    errorTitle: { de: 'Senden nicht möglich', en: 'Could not send' },
    errorBody: {
      de: 'Ihre Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es in einem Moment erneut oder kontaktieren Sie uns direkt – die Kontaktdaten finden Sie unten auf dieser Seite.',
      en: 'Your request could not be submitted right now. Please try again in a moment or contact us directly – you’ll find the details at the bottom of this page.',
    },
    requiredHint: { de: 'Bitte füllen Sie die Pflichtfelder aus.', en: 'Please complete the required fields.' },
    consentRequired: { de: 'Bitte bestätigen Sie die Einwilligung.', en: 'Please confirm your consent.' },
    privacyNote: {
      de: 'Pflichtfelder sind mit * markiert. Bitte übermitteln Sie hier keine medizinischen Details – diese besprechen wir vertraulich im Termin.',
      en: 'Required fields are marked with *. Please do not submit medical details here – we discuss those confidentially during your appointment.',
    },
    honeypotLabel: { de: 'Dieses Feld bitte frei lassen', en: 'Please leave this field empty' },
    placeholderTitle: {
      de: 'Online-Terminbuchung zurzeit nicht verfügbar',
      en: 'Online booking currently unavailable',
    },
    placeholderBody: {
      de: [
        'Unsere Online-Terminbuchung wird gerade überarbeitet. Ihren Termin bekommen Sie aber schon jetzt – ganz unkompliziert:',
        'Rufen Sie uns an oder schreiben Sie uns kurz eine E-Mail (Kontaktdaten direkt unten auf dieser Seite). Wir finden gemeinsam einen passenden Termin.',
      ],
      en: [
        'Our online appointment booking is currently being reworked. You can still get an appointment right now – quite simply:',
        'Call us or send us a short email (contact details just below on this page). We will find a suitable slot together.',
      ],
    },
  },
  prepare: {
    heading: {
      de: 'Vor Ihrem Termin',
      en: 'Before your appointment',
    },
    lead: {
      de: 'Damit wir Sie bestmöglich beraten können, hilft uns ein wenig Vorbereitung:',
      en: 'A little preparation helps us advise you as well as possible:',
    },
    points: {
      de: [
        'Bringen Sie Ihren Impfpass mit – oder eine vorhandene Dokumentation früherer Impfungen.',
        'Notieren Sie Ihre Reiseroute mit allen Ländern und Regionen sowie dem Reisezeitraum.',
        'Buchen Sie möglichst frühzeitig: Die Gelbfieberimpfung sollte mindestens zehn Tage vor der Abreise erfolgen.',
      ],
      en: [
        'Bring your vaccination certificate – or any documentation of previous vaccinations.',
        'Note your itinerary with all countries and regions as well as your travel dates.',
        'Book as early as possible: the yellow fever vaccination should be given at least ten days before departure.',
      ],
    },
    moreLabel: {
      de: 'Mehr zum Ablauf der Beratung',
      en: 'More about how the consultation works',
    },
    morePath: '/ablauf',
  },
  contact: {
    heading: {
      de: 'Lieber persönlich?',
      en: 'Prefer to talk to us?',
    },
    body: {
      de: 'Sie erreichen uns auch telefonisch oder per E-Mail – wir vereinbaren Ihren Termin gern direkt mit Ihnen.',
      en: 'You can also reach us by phone or email – we are happy to arrange your appointment with you directly.',
    },
    phoneLabel: {
      de: 'Telefon',
      en: 'Phone',
    },
    emailLabel: {
      de: 'E-Mail',
      en: 'Email',
    },
    hoursLabel: {
      de: 'Sprechzeiten',
      en: 'Opening hours',
    },
  },
};
