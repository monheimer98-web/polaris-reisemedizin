/**
 * Inhalt der Seite „Reisemedizin für Unternehmen" (B2B). Eigene Säule des
 * Angebots: reisemedizinische Vorbereitung entsendeter bzw. dienstreisender
 * Mitarbeitender. Sachlich und HWG-konform; keine arbeitsmedizinische
 * Vorsorge (z. B. Grundsatz G35) im eigenen Namen – diese erfolgt in
 * Abstimmung mit dem betriebsärztlichen Dienst.
 */
import type { Localized } from './types';

export interface UnternehmenItem {
  title: Localized;
  text: Localized;
}

export interface UnternehmenStep {
  title: Localized;
  text: Localized;
}

export interface UnternehmenPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  intro: Localized<string[]>;
  servicesHeading: Localized;
  services: UnternehmenItem[];
  processHeading: Localized;
  processLead: Localized;
  steps: UnternehmenStep[];
  billing: { heading: Localized; body: Localized<string[]> };
  contact: { heading: Localized; text: Localized; cta: Localized };
}

export const unternehmenPage: UnternehmenPage = {
  meta: {
    title: { de: 'Reisemedizin für Unternehmen', en: 'Travel medicine for businesses' },
    description: {
      de: 'Reisemedizinische Vorbereitung für entsendete und dienstreisende Mitarbeitende: Beratung, Impfungen, Impfnachweise und vollständige Dokumentation – strukturiert und zuverlässig.',
      en: 'Travel-medicine preparation for posted and business-travelling staff: consultation, vaccinations, certificates and complete documentation – structured and reliable.',
    },
    eyebrow: { de: 'Für Unternehmen', en: 'For businesses' },
    lead: {
      de: 'Wenn Sie Mitarbeitende ins Ausland entsenden oder auf Dienstreise schicken, sorgen wir für die reisemedizinische Vorbereitung – strukturiert, dokumentiert und zuverlässig.',
      en: 'When you post staff abroad or send them on business trips, we handle the travel-medicine preparation – structured, documented and reliable.',
    },
  },

  intro: {
    de: [
      'Dienstreisen, Entsendungen und Projekteinsätze im Ausland brauchen eine verlässliche reisemedizinische Vorsorge. Wir beraten Ihre Mitarbeitenden, führen die nötigen Impfungen durch und kümmern uns um die vollständige Dokumentation – auf Wunsch für einzelne Personen oder für ganze Teams.',
      'Die reisemedizinische Beratung und Impfung liegt in ärztlicher Verantwortung. Den organisatorischen Ablauf stimmen wir eng mit Ihnen ab, damit der Aufwand für Ihre Mitarbeitenden gering bleibt.',
    ],
    en: [
      'Business trips, postings and project assignments abroad require reliable travel-medicine preparation. We advise your staff, carry out the necessary vaccinations and take care of complete documentation – for individuals or entire teams, as you prefer.',
      'Travel-medicine advice and vaccination are provided under medical responsibility. We coordinate the organisational process closely with you so the effort for your staff stays low.',
    ],
  },

  servicesHeading: { de: 'Unsere Leistungen für Unternehmen', en: 'Our services for businesses' },
  services: [
    {
      title: { de: 'Reisemedizinische Beratung für Mitarbeitende', en: 'Travel-medicine advice for staff' },
      text: {
        de: 'Einzeln oder im Team – abgestimmt auf Reiseziel, Dauer und Tätigkeit vor Ort.',
        en: 'Individually or as a team – tailored to destination, duration and on-site activity.',
      },
    },
    {
      title: { de: 'Impfungen & Impfplanung für Auslandseinsätze', en: 'Vaccinations & planning for overseas assignments' },
      text: {
        de: 'Empfohlene und vorgeschriebene Reiseimpfungen, individuell geplant und sauber dokumentiert.',
        en: 'Recommended and required travel vaccinations, individually planned and cleanly documented.',
      },
    },
    {
      title: { de: 'Malaria- & Gesundheitsrisiken vor Ort', en: 'Malaria & on-site health risks' },
      text: {
        de: 'Beratung zu Malariaprophylaxe, Mückenschutz und regionalen Gesundheitsrisiken.',
        en: 'Advice on malaria prophylaxis, mosquito protection and regional health risks.',
      },
    },
    {
      title: { de: 'Internationale Impfnachweise', en: 'International vaccination certificates' },
      text: {
        de: 'Vollständige Impfdokumentation. Gelbfieber-Nachweis (ICVP), sobald unsere Zulassung aktiv ist.',
        en: 'Complete vaccination records. Yellow-fever certificate (ICVP) as soon as our authorisation is active.',
      },
    },
    {
      title: { de: 'Ergänzung zur arbeitsmedizinischen Vorsorge', en: 'Complement to occupational health screening' },
      text: {
        de: 'Wir liefern die reisemedizinischen Inhalte. Die arbeitsmedizinische Vorsorge (z. B. nach Grundsatz G35) erfolgt in Abstimmung mit Ihrem betriebsärztlichen Dienst.',
        en: 'We provide the travel-medicine content. Occupational health screening (e.g. under the G35 guideline) is carried out in coordination with your company medical service.',
      },
    },
    {
      title: { de: 'Dokumentation für Ihre Personalabteilung', en: 'Documentation for your HR department' },
      text: {
        de: 'Nachvollziehbare Nachweise und Berichte für Reise und Personalakte.',
        en: 'Traceable records and reports for the trip and the personnel file.',
      },
    },
  ],

  processHeading: { de: 'So arbeiten wir mit Ihnen', en: 'How we work with you' },
  processLead: {
    de: 'Vier Schritte – von der ersten Anfrage bis zu vollständigen Nachweisen.',
    en: 'Four steps – from the first enquiry to complete records.',
  },
  steps: [
    {
      title: { de: 'Anfrage & Bedarf klären', en: 'Enquiry & needs assessment' },
      text: {
        de: 'Reiseziele, Anzahl der Mitarbeitenden und Zeitrahmen – wir erfassen, worum es geht.',
        en: 'Destinations, number of staff and timeframe – we capture what is needed.',
      },
    },
    {
      title: { de: 'Individuelle Planung', en: 'Individual planning' },
      text: {
        de: 'Impf- und Beratungsplan je Mitarbeitendem oder Team, abgestimmt auf den Einsatz.',
        en: 'Vaccination and consultation plan per employee or team, matched to the assignment.',
      },
    },
    {
      title: { de: 'Termine in der Praxis', en: 'Appointments at the practice' },
      text: {
        de: 'Einzeln oder gebündelt, auf Wunsch in enger Taktung – mit kurzen Wartezeiten.',
        en: 'Individually or bundled, in close succession if desired – with short waiting times.',
      },
    },
    {
      title: { de: 'Dokumentation & Nachweise', en: 'Documentation & records' },
      text: {
        de: 'Vollständige Unterlagen für die Reise und für Ihre Personalakte.',
        en: 'Complete documents for the trip and for your personnel file.',
      },
    },
  ],

  billing: {
    heading: { de: 'Abrechnung', en: 'Billing' },
    body: {
      de: [
        'Die Leistungen werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Für Unternehmen ist auf Wunsch eine gebündelte Abrechnung möglich.',
        'Umfang, Termine und ein passendes Angebot besprechen wir gern persönlich mit Ihnen.',
      ],
      en: [
        'Services are billed under the German Medical Fee Schedule (GOÄ). For businesses, consolidated billing is available on request.',
        'We are happy to discuss scope, scheduling and a suitable quotation with you in person.',
      ],
    },
  },

  contact: {
    heading: { de: 'Reisemedizin für Ihr Team?', en: 'Travel medicine for your team?' },
    text: {
      de: 'Sprechen Sie uns an – wir stimmen Umfang, Termine und Ablauf individuell mit Ihnen ab.',
      en: 'Get in touch – we will tailor scope, scheduling and process to your needs.',
    },
    cta: { de: 'Kontakt aufnehmen', en: 'Get in touch' },
  },
};
