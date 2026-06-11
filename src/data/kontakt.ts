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
      de: 'So erreichen Sie unsere Praxis für Reise- und Impfmedizin in Langenfeld: Adresse, Telefon, E-Mail, Sprechzeiten und Anfahrt – datenschutzfreundlich eingebunden.',
      en: 'How to reach our travel and vaccination medicine practice in Langenfeld: address, phone, email, opening hours and directions – embedded in a privacy-friendly way.',
    },
    eyebrow: {
      de: 'Kontakt',
      en: 'Contact',
    },
    lead: {
      de: 'Sie erreichen uns telefonisch, per E-Mail oder über die Online-Terminbuchung. Hier finden Sie alle Kontaktdaten, unsere Sprechzeiten und den Weg zu uns.',
      en: 'You can reach us by phone, email or via online booking. Here you will find all contact details, our opening hours and how to get to us.',
    },
  },
  intro: {
    de: [
      'Wir freuen uns auf Ihre Nachricht. Für eine reisemedizinische Beratung oder Impfung vereinbaren Sie am besten vorab einen Termin – telefonisch, per E-Mail oder bequem online.',
    ],
    en: [
      'We look forward to hearing from you. For travel-medicine advice or a vaccination, it is best to arrange an appointment in advance – by phone, email or conveniently online.',
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
      de: 'Planen Sie Ihre Anfahrt bequem mit dem Kartendienst. Aus Datenschutzgründen wird die interaktive Karte erst nach Ihrer Einwilligung geladen.',
      en: 'Plan your journey conveniently with the map service. For data-protection reasons, the interactive map is only loaded after your consent.',
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
