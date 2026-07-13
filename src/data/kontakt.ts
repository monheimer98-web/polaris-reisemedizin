/**
 * Inhalte der „Kontakt & Anfahrt"-Seite (DE+EN).
 *
 * Selbsttragend wie die übrigen Marketing-Seiten: nur redaktionelle Texte.
 * Die konkreten Kontaktdaten (Adresse, Telefon, E-Mail, Sprechzeiten) kommen
 * zentral aus `site.contact`/`site.openingHours`; hier liegen ausschließlich
 * Überschriften, Beschriftungen und die 2-Klick-Consent-Texte für die
 * Karten-Einbettung. Die interaktive Karte wird – analog zur Terminbuchung –
 * erst nach aktiver Einwilligung geladen (`ConsentEmbed`, Storage-Key „map").
 * `site.map.externalUrl` ist ein reiner Outbound-Link zur Routenplanung und
 * lädt ohne Klick nichts.
 */
import type { Localized, ConsentEmbedText } from './types';

export interface KontaktPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  /** Kurze Einleitung über dem Kontaktblock. */
  intro: Localized<string[]>;
  /** Beschriftungen für den Kontakt- und Anfahrtsblock. */
  labels: {
    bookCta: Localized;
    addressHeading: Localized;
    phoneLabel: Localized;
    emailLabel: Localized;
    hoursHeading: Localized;
    mapHeading: Localized;
    mapLead: Localized;
  };
  /**
   * Texte des Kontaktformulars (React-Insel `KontaktForm`). Sprachaufgelöst im
   * Astro-Layer und als flaches `KontaktFormStrings`-Objekt an die Insel gereicht.
   */
  form: {
    sectionHeading: Localized;
    heading: Localized;
    intro: Localized;
    fields: {
      name: Localized;
      email: Localized;
      telefon: Localized;
      betreff: Localized;
      nachricht: Localized;
      nachrichtPlaceholder: Localized;
      optional: Localized;
    };
    consentLabel: Localized;
    consentLinkLabel: Localized;
    submit: Localized;
    submitting: Localized;
    successTitle: Localized;
    successBody: Localized;
    errorTitle: Localized;
    errorBody: Localized;
    requiredHint: Localized;
    emailInvalid: Localized;
    consentRequired: Localized;
    privacyNote: Localized;
    honeypotLabel: Localized;
    placeholderTitle: Localized;
    placeholderBody: Localized<string[]>;
  };
  /** 2-Klick-Consent-Texte für die Karten-Einbettung. */
  consent: ConsentEmbedText;
}

export const kontaktPage: KontaktPage = {
  meta: {
    title: {
      de: 'Kontakt & Anfahrt',
      en: 'Contact & directions',
    },
    description: {
      de: 'So erreichen Sie unsere Praxis für Reise- und Impfmedizin in Langenfeld: Adresse, Telefon, E-Mail, Sprechzeiten und Anfahrt.',
      en: 'How to reach our travel and vaccination medicine practice in Langenfeld: address, phone, email, opening hours and directions.',
    },
    eyebrow: {
      de: 'Kontakt',
      en: 'Contact',
    },
    lead: {
      de: 'Sie erreichen uns telefonisch oder per E-Mail. Hier finden Sie alle Kontaktdaten, unsere Sprechzeiten und den Weg zu uns.',
      en: 'You can reach us by phone or email. Here you will find all contact details, our opening hours and how to get to us.',
    },
  },
  intro: {
    de: [
      'Wir freuen uns auf Ihre Nachricht. Für eine reisemedizinische Beratung oder Impfung vereinbaren Sie am besten vorab einen Termin – telefonisch oder per E-Mail.',
    ],
    en: [
      'We look forward to hearing from you. For travel-medicine advice or a vaccination, it is best to arrange an appointment in advance – by phone or email.',
    ],
  },
  labels: {
    bookCta: {
      de: 'Termin buchen',
      en: 'Book appointment',
    },
    addressHeading: {
      de: 'Praxisanschrift',
      en: 'Practice address',
    },
    phoneLabel: {
      de: 'Telefon',
      en: 'Phone',
    },
    emailLabel: {
      de: 'E-Mail',
      en: 'Email',
    },
    hoursHeading: {
      de: 'Sprechzeiten',
      en: 'Opening hours',
    },
    mapHeading: {
      de: 'Anfahrt',
      en: 'Getting here',
    },
    mapLead: {
      de: 'Unsere Praxis liegt in Langenfeld im Rheinland, zwischen Düsseldorf und Köln. Planen Sie Ihre Anfahrt bequem mit dem Kartendienst. Aus Datenschutzgründen wird die interaktive Karte erst nach Ihrer Einwilligung geladen.',
      en: 'Our practice is in Langenfeld in the Rhineland, between Düsseldorf and Cologne. Plan your journey conveniently with the map service. For data-protection reasons, the interactive map is only loaded after your consent.',
    },
  },
  form: {
    sectionHeading: {
      de: 'Schreiben Sie uns',
      en: 'Send us a message',
    },
    heading: {
      de: 'Nachricht an die Praxis',
      en: 'Message to the practice',
    },
    intro: {
      de: 'Ihre Nachricht erreicht uns direkt per E-Mail. Wir melden uns so bald wie möglich bei Ihnen zurück. Mit * markierte Felder sind Pflichtfelder.',
      en: 'Your message reaches us directly by email. We will get back to you as soon as possible. Fields marked with * are required.',
    },
    fields: {
      name: {
        de: 'Name',
        en: 'Name',
      },
      email: {
        de: 'E-Mail',
        en: 'Email',
      },
      telefon: {
        de: 'Telefon',
        en: 'Phone',
      },
      betreff: {
        de: 'Betreff',
        en: 'Subject',
      },
      nachricht: {
        de: 'Nachricht',
        en: 'Message',
      },
      nachrichtPlaceholder: {
        de: 'Wie können wir Ihnen helfen?',
        en: 'How can we help you?',
      },
      optional: {
        de: '(optional)',
        en: '(optional)',
      },
    },
    consentLabel: {
      de: 'Ich habe die {privacy} gelesen und willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage per E-Mail verarbeitet werden.',
      en: 'I have read the {privacy} and consent to my details being processed by email to handle my enquiry.',
    },
    consentLinkLabel: {
      de: 'Datenschutzerklärung',
      en: 'privacy policy',
    },
    submit: {
      de: 'Nachricht senden',
      en: 'Send message',
    },
    submitting: {
      de: 'Wird gesendet …',
      en: 'Sending …',
    },
    successTitle: {
      de: 'Vielen Dank – Ihre Nachricht ist unterwegs.',
      en: 'Thank you – your message is on its way.',
    },
    successBody: {
      de: 'Wir haben Ihre Nachricht erhalten und melden uns so bald wie möglich bei Ihnen. Bei dringenden Anliegen erreichen Sie uns telefonisch.',
      en: 'We have received your message and will get back to you as soon as possible. For urgent matters, please reach us by phone.',
    },
    errorTitle: {
      de: 'Ihre Nachricht konnte nicht gesendet werden.',
      en: 'Your message could not be sent.',
    },
    errorBody: {
      de: 'Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per Telefon oder E-Mail.',
      en: 'Please try again later or contact us directly by phone or email.',
    },
    requiredHint: {
      de: 'Bitte füllen Sie die Pflichtfelder aus.',
      en: 'Please fill in the required fields.',
    },
    emailInvalid: {
      de: 'Bitte geben Sie eine gültige E-Mail-Adresse an, damit wir Ihnen antworten können.',
      en: 'Please enter a valid email address so we can reply to you.',
    },
    consentRequired: {
      de: 'Bitte bestätigen Sie die Einwilligung, damit wir Ihre Nachricht bearbeiten dürfen.',
      en: 'Please confirm your consent so we may process your message.',
    },
    privacyNote: {
      de: 'Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.',
      en: 'Your details are used solely to handle your enquiry and are not shared with third parties.',
    },
    honeypotLabel: {
      de: 'Dieses Feld bitte frei lassen',
      en: 'Please leave this field empty',
    },
    placeholderTitle: {
      de: 'Kontakt per Telefon oder E-Mail',
      en: 'Contact by phone or email',
    },
    placeholderBody: {
      de: [
        'Das Nachrichtenformular wird derzeit noch eingerichtet. Sie erreichen uns in der Zwischenzeit jederzeit direkt per Telefon oder E-Mail – die Kontaktdaten finden Sie nebenstehend.',
        'Für eine reisemedizinische Beratung oder Impfung vereinbaren Sie am besten vorab einen Termin.',
      ],
      en: [
        'The message form is still being set up. In the meantime you can reach us any time directly by phone or email – you will find the contact details alongside.',
        'For travel-medicine advice or a vaccination, it is best to arrange an appointment in advance.',
      ],
    },
  },
  consent: {
    title: {
      de: 'Interaktive Anfahrtskarte',
      en: 'Interactive map',
    },
    lead: {
      de: 'Die interaktive Karte wird von {provider} bereitgestellt. Aus Datenschutzgründen wird sie erst geladen, wenn Sie zustimmen.',
      en: 'The interactive map is provided by {provider}. For data-protection reasons it is only loaded once you agree.',
    },
    points: {
      de: [
        'Beim Laden wird eine direkte Verbindung zu den Servern des Kartendienstes hergestellt und dabei Ihre IP-Adresse übertragen.',
        'Der Kartendienst kann Cookies oder vergleichbare Technologien einsetzen, um die Karte bereitzustellen.',
        'Ihre Einwilligung wird ausschließlich lokal in Ihrem Browser gespeichert und gilt, bis Sie sie widerrufen.',
      ],
      en: [
        "When loaded, a direct connection to the map service's servers is established and your IP address is transferred in the process.",
        'The map service may use cookies or comparable technologies to deliver the map.',
        'Your consent is stored locally in your browser only and applies until you revoke it.',
      ],
    },
    privacyIntro: {
      de: 'Weitere Informationen:',
      en: 'Further information:',
    },
    providerPrivacyLabel: {
      de: 'Datenschutz des Kartendienstes',
      en: "Map service's privacy notice",
    },
    ourPrivacyLabel: {
      de: 'Unsere Datenschutzerklärung',
      en: 'Our privacy policy',
    },
    loadButton: {
      de: 'Karte laden & einwilligen',
      en: 'Load map & consent',
    },
    externalLabel: {
      de: 'Route planen',
      en: 'Plan route',
    },
    iframeTitle: {
      de: 'Interaktive Anfahrtskarte',
      en: 'Interactive map',
    },
    loadedNote: {
      de: 'Die Karte ist geladen. Ihre Einwilligung gilt, bis Sie sie widerrufen.',
      en: 'The map is loaded. Your consent applies until you revoke it.',
    },
    revokeLabel: {
      de: 'Einwilligung widerrufen',
      en: 'Revoke consent',
    },
    placeholderTitle: {
      de: 'Karte aus Datenschutzgründen nicht vorab geladen',
      en: 'Map not pre-loaded for data-protection reasons',
    },
    placeholderBody: {
      de: [
        'Wir binden hier keine interaktive Karte ohne Ihre Einwilligung ein. Unsere Praxis finden Sie unter der nebenstehenden Adresse.',
        'Über „Route planen" öffnen Sie die Routenführung beim Kartendienst in einem neuen Tab.',
      ],
      en: [
        'We do not embed an interactive map here without your consent. You will find our practice at the address shown alongside.',
        'Use "Plan route" to open route guidance with the map service in a new tab.',
      ],
    },
  },
};
