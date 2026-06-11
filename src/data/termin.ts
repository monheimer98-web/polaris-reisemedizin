/**
 * Inhalte der „Termin buchen"-Seite (DE+EN).
 *
 * Selbsttragend wie die übrigen Marketing-Seiten: nur redaktionelle Texte,
 * keine medizinischen Belegaussagen (daher KEINE ClinicalPage). Die
 * eigentliche Buchung wird über ein zertifiziertes Praxis-Terminsystem
 * eingebunden – datenschutzfreundlich per 2-Klick-Lösung (siehe
 * `ConsentEmbed`). Anbieter, Einbettungs-URL und Datenschutzlink kommen
 * zentral aus `site.booking`; hier liegen nur die Oberflächentexte. Der
 * Markenname wird NICHT hartkodiert (Storage-Key in `ConsentEmbed`).
 */
import type { Localized, ConsentEmbedText } from './types';

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
  consent: ConsentEmbedText;
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
      de: 'Buchen Sie Ihren Termin für die reisemedizinische Beratung und Impfung online – datenschutzfreundlich über ein zertifiziertes Terminsystem.',
      en: 'Book your appointment for travel-medicine advice and vaccination online – with a privacy-friendly setup using a certified scheduling system.',
    },
    eyebrow: {
      de: 'Terminbuchung',
      en: 'Appointments',
    },
    lead: {
      de: 'Buchen Sie Ihren Termin für Beratung und Impfung bequem online. Die Einbindung erfolgt datenschutzfreundlich – der Buchungsdialog wird erst nach Ihrer Einwilligung geladen.',
      en: 'Book your appointment for advice and vaccination conveniently online. The setup is privacy-friendly – the booking dialog is only loaded once you have given your consent.',
    },
  },
  intro: {
    de: [
      'Vereinbaren Sie Ihren Termin für die reisemedizinische Beratung und Impfung bequem online. Die Terminbuchung läuft über ein zertifiziertes Praxis-Terminsystem.',
      'Bitte planen Sie ausreichend Vorlauf ein – einige Reiseimpfungen sollten rechtzeitig vor der Abreise erfolgen.',
    ],
    en: [
      'Arrange your appointment for travel-medicine advice and vaccination conveniently online. Booking runs through a certified practice scheduling system.',
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
          de: 'Ausführliche Beratung zu Ihren Reisezielen, Prüfung der Impftauglichkeit und ein persönlicher, schriftlicher Impf- und Reiseplan – den Sie unabhängig von einer späteren Impfung erhalten.',
          en: 'In-depth advice for your destinations, a fitness-for-vaccination check and a personal written vaccination and travel plan – which you receive regardless of any later vaccination.',
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
          de: 'Durchführung einer Impfung mit Aufklärung und Dokumentation – als gesonderter Folgetermin oder direkt, wenn bereits eine klare Impfempfehlung vorliegt. Den passenden Impfstoff bestellen wir individuell für Sie.',
          en: 'Administration of a vaccination with briefing and documentation – as a separate follow-up appointment or directly when a clear recommendation already exists. We order the right vaccine individually for you.',
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
  consent: {
    title: {
      de: 'Externe Terminbuchung',
      en: 'External booking tool',
    },
    lead: {
      de: 'Die Online-Terminbuchung wird von {provider} bereitgestellt. Aus Datenschutzgründen wird der Buchungsdialog erst geladen, wenn Sie zustimmen.',
      en: 'The online booking is provided by {provider}. For data-protection reasons, the booking dialog is only loaded once you agree.',
    },
    points: {
      de: [
        'Beim Laden wird eine direkte Verbindung zu den Servern des Anbieters hergestellt und dabei Ihre IP-Adresse übertragen.',
        'Der Anbieter kann Cookies oder vergleichbare Technologien einsetzen, um die Terminbuchung bereitzustellen.',
        'Ihre Einwilligung wird ausschließlich lokal in Ihrem Browser gespeichert und gilt, bis Sie sie widerrufen.',
      ],
      en: [
        "When loaded, a direct connection to the provider's servers is established and your IP address is transferred in the process.",
        'The provider may use cookies or comparable technologies to deliver the booking tool.',
        'Your consent is stored locally in your browser only and applies until you revoke it.',
      ],
    },
    privacyIntro: {
      de: 'Weitere Informationen:',
      en: 'Further information:',
    },
    providerPrivacyLabel: {
      de: 'Datenschutz des Anbieters',
      en: "Provider's privacy notice",
    },
    ourPrivacyLabel: {
      de: 'Unsere Datenschutzerklärung',
      en: 'Our privacy policy',
    },
    loadButton: {
      de: 'Buchung laden & einwilligen',
      en: 'Load booking & consent',
    },
    externalLabel: {
      de: 'Direkt beim Anbieter buchen',
      en: 'Book directly with the provider',
    },
    iframeTitle: {
      de: 'Online-Terminbuchung',
      en: 'Online appointment booking',
    },
    loadedNote: {
      de: 'Die Terminbuchung ist geladen. Ihre Einwilligung gilt, bis Sie sie widerrufen.',
      en: 'The booking tool is loaded. Your consent applies until you revoke it.',
    },
    revokeLabel: {
      de: 'Einwilligung widerrufen',
      en: 'Revoke consent',
    },
    placeholderTitle: {
      de: 'Online-Terminbuchung in Vorbereitung',
      en: 'Online booking coming soon',
    },
    placeholderBody: {
      de: [
        'Die Online-Terminbuchung wird derzeit eingerichtet und steht in Kürze zur Verfügung.',
        'Bis dahin vereinbaren Sie Ihren Termin bitte telefonisch oder per E-Mail – die Kontaktdaten finden Sie unten auf dieser Seite.',
      ],
      en: [
        'Online booking is currently being set up and will be available shortly.',
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
