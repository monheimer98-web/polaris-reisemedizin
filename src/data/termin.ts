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
  /** Empfohlener Einstieg (Beratung zuerst) – wird hervorgehoben. */
  recommended?: boolean;
  /** Buchbar? Gelbfieber bleibt vorerst false → „in Vorbereitung". */
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
  /** Terminarten zur Orientierung; Gelbfieber ist noch nicht buchbar. */
  appointmentTypes: {
    heading: Localized;
    lead: Localized;
    recommendedLabel: Localized;
    pendingLabel: Localized;
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
      de: 'Termin online buchen',
      en: 'Book your appointment online',
    },
    description: {
      de: 'Buchen Sie Ihren Termin für die reisemedizinische Beratung und Impfung online – datenschutzfreundlich und direkt über unser eigenes Praxis-Terminsystem.',
      en: 'Book your appointment for travel-medicine advice and vaccination online – privacy-friendly and directly through our own practice scheduling system.',
    },
    eyebrow: {
      de: 'Terminbuchung',
      en: 'Appointments',
    },
    lead: {
      de: 'Buchen Sie Ihren Termin für Beratung und Impfung bequem online. Ihre Anfrage geht direkt und datenschutzfreundlich an unsere Praxis – ohne externen Buchungsdienst.',
      en: 'Book your appointment for advice and vaccination conveniently online. Your request goes directly and privacy-friendly to our practice – with no external booking service.',
    },
  },
  intro: {
    de: [
      'Vereinbaren Sie Ihren Termin für die reisemedizinische Beratung und Impfung bequem online. Ihre Anfrage läuft direkt über unser eigenes Praxis-Terminsystem – ohne externen Anbieter.',
      'Bitte planen Sie ausreichend Vorlauf ein – einige Reiseimpfungen sollten rechtzeitig vor der Abreise erfolgen.',
    ],
    en: [
      'Arrange your appointment for travel-medicine advice and vaccination conveniently online. Your request runs directly through our own practice scheduling system – with no external provider.',
      'Please allow enough lead time – some travel vaccinations should be given well before departure.',
    ],
  },
  widgetHeading: {
    de: 'Online-Terminbuchung',
    en: 'Online appointment booking',
  },
  appointmentTypes: {
    heading: {
      de: 'Welcher Termin passt zu Ihnen?',
      en: 'Which appointment is right for you?',
    },
    lead: {
      de: 'Wählen Sie bei der Buchung die passende Terminart. Im Zweifel ist die reisemedizinische Vollberatung der richtige Einstieg – sie bildet die Grundlage für alle weiteren Schritte.',
      en: 'Choose the matching appointment type when booking. If in doubt, the full travel-medicine consultation is the right starting point – it forms the basis for every further step.',
    },
    recommendedLabel: {
      de: 'Empfohlener Start',
      en: 'Recommended start',
    },
    pendingLabel: {
      de: 'In Vorbereitung',
      en: 'In preparation',
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
          de: 'Reisemedizinische Vollberatung',
          en: 'Full travel-medicine consultation',
        },
        duration: { de: 'ca. 30 Minuten', en: 'approx. 30 minutes' },
        description: {
          de: 'Ausführliche Beratung zu Ihren Reisezielen und ein persönlicher, schriftlicher Impf- und Reiseplan – den Sie unabhängig von einer späteren Impfung erhalten.',
          en: 'In-depth advice for your destinations and a personal written vaccination and travel plan – which you receive regardless of any later vaccination.',
        },
        recommended: true,
        enabled: true,
      },
      {
        id: 'fokus',
        icon: 'focus',
        name: {
          de: 'Fokus-Beratung: Malaria & Höhenmedizin',
          en: 'Focused advice: malaria & altitude',
        },
        duration: { de: 'ca. 20 Minuten', en: 'approx. 20 minutes' },
        description: {
          de: 'Gezielte Beratung, wenn Sie speziell zu Malariaschutz oder Höhenmedizin Fragen haben – auf Wunsch mit Privatrezept für ein Notfallset.',
          en: 'Targeted advice if you have specific questions about malaria protection or altitude medicine – with a private prescription for a stand-by kit on request.',
        },
        enabled: true,
      },
      {
        id: 'impftermin',
        icon: 'vaccination',
        name: {
          de: 'Impftermin',
          en: 'Vaccination appointment',
        },
        duration: { de: 'ca. 15 Minuten', en: 'approx. 15 minutes' },
        description: {
          de: 'Durchführung einer Impfung mit Aufklärung und Dokumentation – als gesonderter Folgetermin oder direkt, wenn bereits eine klare Impfempfehlung vorliegt. Den Impfstoff bringen Sie per Privatrezept aus der Apotheke mit; FSME halten wir vor Ort vorrätig.',
          en: 'Administration of a vaccination with briefing and documentation – as a separate follow-up appointment or directly when a clear recommendation already exists. You bring the vaccine from the pharmacy via private prescription; we keep TBE in stock on site.',
        },
        enabled: true,
      },
      {
        id: 'gelbfieber',
        icon: 'yellowFever',
        name: {
          de: 'Gelbfieberimpfung',
          en: 'Yellow-fever vaccination',
        },
        duration: { de: 'ca. 15 Minuten', en: 'approx. 15 minutes' },
        description: {
          de: 'Gelbfieberimpfung inklusive internationalem Impfnachweis (ICVP). Die Online-Buchung für Gelbfieber-Termine richten wir gerade ein – sie ist in Kürze verfügbar. Bis dahin vereinbaren Sie Ihren Termin bitte direkt mit uns.',
          en: 'Yellow-fever vaccination including the international certificate (ICVP). Online booking for yellow-fever appointments is currently being set up and will be available shortly. Until then, please arrange your appointment with us directly.',
        },
        enabled: false,
      },
    ],
  },
  bookableTypes: [
    { id: 'vollberatung', name: { de: 'Reisemedizinische Beratung', en: 'Travel-medicine consultation' } },
    { id: 'impftermin', name: { de: 'Impftermin', en: 'Vaccination appointment' } },
    { id: 'folgetermin', name: { de: 'Folge-/Impftermin (nach Impfplan)', en: 'Follow-up vaccination (per plan)' } },
    { id: 'malaria-beratung', name: { de: 'Malariaberatung', en: 'Malaria consultation' } },
    { id: 'hoehen-beratung', name: { de: 'Höhenmedizin-Beratung', en: 'Altitude-medicine consultation' } },
    { id: 'malaria-hoehe', name: { de: 'Malaria- & Höhenberatung (kombiniert)', en: 'Malaria & altitude (combined)' } },
    { id: 'fsme', name: { de: 'FSME-Impftermin', en: 'TBE vaccination appointment' } },
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
      de: 'Online-Terminanfrage in Vorbereitung',
      en: 'Online appointment requests coming soon',
    },
    placeholderBody: {
      de: [
        'Die Online-Terminanfrage wird derzeit eingerichtet und steht in Kürze zur Verfügung.',
        'Bis dahin vereinbaren Sie Ihren Termin bitte telefonisch oder per E-Mail – die Kontaktdaten finden Sie unten auf dieser Seite.',
      ],
      en: [
        'Online appointment requests are currently being set up and will be available shortly.',
        "Until then, please arrange your appointment by phone or email – you'll find the contact details at the bottom of this page.",
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
