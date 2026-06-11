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

export interface BookingPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  intro: Localized<string[]>;
  widgetHeading: Localized;
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
