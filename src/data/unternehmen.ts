/**
 * Inhalt der Seite „Reisemedizin für Unternehmen" (B2B). Eigene Säule des
 * Angebots: reisemedizinische Vorbereitung entsendeter bzw. dienstreisender
 * Mitarbeitender. Sachlich und HWG-konform; keine arbeitsmedizinische
 * Vorsorge (z. B. Grundsatz G35) im eigenen Namen – diese bleibt beim
 * betriebsärztlichen Dienst. Wortlaut nach der internen Formulierungsliste
 * für Firmentexte (Stand 28.10.2026): keine Daten an den Arbeitgeber ohne
 * Einwilligung, keine Zusagen zu Wartezeiten, Abrechnung nach GOÄ.
 */
import { site } from '../config/site';
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
    approval: Localized;
  };
  intro: Localized<string[]>;
  servicesHeading: Localized;
  services: UnternehmenItem[];
  /** Hinweis für Einzelpersonen, die nur ein Formular oder eine Bescheinigung brauchen. */
  abroadHint: { text: Localized; cta: Localized };
  processHeading: Localized;
  processLead: Localized;
  steps: UnternehmenStep[];
  billing: { heading: Localized; body: Localized<string[]>; costsLink: Localized };
  contact: { heading: Localized; text: Localized; person: Localized; writeLink: Localized };
}

export const unternehmenPage: UnternehmenPage = {
  meta: {
    title: { de: 'Reisemedizin für Unternehmen', en: 'Travel medicine for businesses' },
    description: {
      de: 'Reisemedizinische Beratung und Impfungen für Mitarbeitende: Gelbfieber-Impfstelle in Langenfeld, Gruppentermine nach Vereinbarung, Abrechnung nach GOÄ.',
      en: 'Travel-medicine advice and vaccinations for staff: yellow fever vaccination centre in Langenfeld, group appointments by arrangement, billing under the GOÄ.',
    },
    eyebrow: { de: 'Für Unternehmen', en: 'For businesses' },
    lead: {
      de: 'Wenn Mitarbeitende beruflich außerhalb Europas unterwegs sind, gehören Impfungen und reisemedizinische Beratung zur Vorbereitung. Polaris in Langenfeld übernimmt diesen Teil.',
      en: 'When staff travel outside Europe for work, vaccinations and travel-medicine advice are part of the preparation. Polaris in Langenfeld takes care of this part.',
    },
    approval: {
      de: `Staatlich zugelassene Gelbfieber-Impfstelle (Zulassung Nr. ${site.yellowFever.approvalNumber})`,
      en: `State-approved yellow fever vaccination centre (approval no. ${site.yellowFever.approvalNumber})`,
    },
  },

  intro: {
    de: [
      'Wir beraten je Zielland und Tätigkeit, impfen und tragen die Impfungen in den Impfausweis und bei Gelbfieber in den Internationalen Impfnachweis (ICVP) ein. Häufig benötigte Reiseimpfstoffe sind vorrätig, Beratung und Impfung sind daher oft in einem Termin möglich.',
      'Medizinische Angaben bleiben in der Praxis. Für die Organisation gibt es einen festen Ansprechpartner. Außerdem bieten wir Prävention & Lebensstil an.',
    ],
    en: [
      'We advise according to destination and activity, vaccinate, and enter the vaccinations in the vaccination record and, for yellow fever, in the International Certificate of Vaccination (ICVP). Frequently needed travel vaccines are in stock, so advice and vaccination are often possible in one appointment.',
      'Medical information stays at the practice. You have one fixed contact person for the organisation. We also offer prevention and lifestyle medicine.',
    ],
  },

  servicesHeading: { de: 'Unsere Leistungen für Unternehmen', en: 'Our services for businesses' },
  services: [
    {
      title: { de: 'Reisemedizinische Beratung für Mitarbeitende', en: 'Travel-medicine advice for staff' },
      text: {
        de: 'Je Zielland, Reisedauer und Tätigkeit. Jede Person wird einzeln beraten.',
        en: 'By destination, length of stay and activity. Each person is advised individually.',
      },
    },
    {
      title: { de: 'Reiseimpfungen und Impfplanung', en: 'Travel vaccinations and planning' },
      text: {
        de: 'Reiseimpfungen nach Empfehlung, Prüfung des Impfstatus, Planung von Impfserien und Auffrischungen.',
        en: 'Travel vaccinations as recommended, review of vaccination status, planning of vaccination series and boosters.',
      },
    },
    {
      title: { de: 'Malariavorbeugung, Höhe, Reiseapotheke', en: 'Malaria prevention, altitude, travel kit' },
      text: {
        de: 'Beratung zu Malariavorbeugung, Aufenthalten in großer Höhe und Reiseapotheke.',
        en: 'Advice on malaria prevention, stays at high altitude and the travel medicine kit.',
      },
    },
    {
      title: { de: 'Internationaler Impfnachweis (ICVP)', en: 'International vaccination certificate (ICVP)' },
      text: {
        de: 'Als staatlich zugelassene Gelbfieber-Impfstelle stellen wir den Internationalen Impfnachweis aus. Der Gelbfieber-Nachweis gilt ab dem 10. Tag nach der Erstimpfung.',
        en: 'As a state-approved yellow fever vaccination centre we issue the international certificate. The yellow fever certificate is valid from the 10th day after the first vaccination.',
      },
    },
    {
      title: { de: 'Abstimmung mit Ihrem Betriebsarzt', en: 'Coordination with your company physician' },
      text: {
        de: 'Die arbeitsmedizinische Vorsorge nach ArbMedVV, zum Beispiel bei Tätigkeiten in den Tropen und Subtropen, bleibt beim Betriebsarzt. Wir stimmen uns auf Wunsch mit ihm ab.',
        en: 'Occupational health check-ups under the ArbMedVV, for example for work in the tropics and subtropics, remain with your company physician. We coordinate with them on request.',
      },
    },
    {
      title: { de: 'Nachweise und Daten Ihrer Mitarbeitenden', en: 'Your staff’s records and data' },
      text: {
        de: 'Die Mitarbeitenden erhalten ihre Nachweise selbst. Ihr Unternehmen erfährt nur mit nachweisbarer Einwilligung der Mitarbeitenden, wer welchen Termin wahrgenommen hat.',
        en: 'Staff receive their records themselves. Your company only learns who attended which appointment with the verifiable consent of the employee.',
      },
    },
  ],

  abroadHint: {
    text: {
      de: 'Einzelne Mitarbeitende brauchen ein Formular oder eine Bescheinigung fürs Ausland?',
      en: 'Do individual employees need a form or certificate for abroad?',
    },
    cta: { de: 'Nachweise und Atteste', en: 'Certificates and forms' },
  },
  processHeading: { de: 'So läuft es ab', en: 'How it works' },
  processLead: {
    de: 'Gruppentermine nach Vereinbarung, auch abends oder samstags nach Vereinbarung möglich. Planen Sie möglichst einige Wochen Vorlauf vor der Abreise ein.',
    en: 'Group appointments by arrangement; evenings or Saturdays are also possible by arrangement. Please allow a few weeks before departure where possible.',
  },
  steps: [
    {
      title: { de: 'Anrufen', en: 'Call us' },
      text: {
        de: 'Sie nennen uns Zielländer, Reisezeitraum und Anzahl der Personen.',
        en: 'You tell us the destinations, travel dates and number of people.',
      },
    },
    {
      title: { de: 'Planen', en: 'Plan' },
      text: {
        de: 'Wir klären, welche Impfungen für die Ziele vorgeschrieben oder empfohlen sind und wie viele Termine nötig sind.',
        en: 'We clarify which vaccinations are required or recommended for the destinations and how many appointments are needed.',
      },
    },
    {
      title: { de: 'Beraten und impfen', en: 'Advise and vaccinate' },
      text: {
        de: 'Jede Person wird einzeln beraten und aufgeklärt und entscheidet selbst. Die Impfungen tragen wir in den Impfausweis bzw. den ICVP ein.',
        en: 'Each person is individually advised and informed, and decides for themselves. We enter the vaccinations in the vaccination record or the ICVP.',
      },
    },
    {
      title: { de: 'Abschließen', en: 'Complete' },
      text: {
        de: 'Die Mitarbeitenden erhalten ihre Nachweise und die Rechnung, oder die Rechnung geht mit ihrer Einwilligung an Ihr Unternehmen. Folgetermine planen wir gleich mit.',
        en: 'Staff receive their records and the invoice, or the invoice goes to your company with their consent. We plan any follow-up appointments at the same time.',
      },
    },
  ],

  billing: {
    heading: { de: 'Abrechnung', en: 'Billing' },
    body: {
      de: [
        'Abrechnung nach GOÄ, auch bei Gruppen. Impfstoff wird abgerechnet, wie in der GOÄ vorgesehen. Voraussichtliche Kosten je Person teilen wir vorab schriftlich mit.',
        'Die Rechnung geht an die Mitarbeitenden oder, mit ihrer schriftlichen Einwilligung, direkt an Ihr Unternehmen.',
      ],
      en: [
        'Billing under the German Medical Fee Schedule (GOÄ), including for groups. Vaccines are charged as provided for in the GOÄ. We let you know the expected costs per person in writing in advance.',
        'The invoice goes to the employee or, with their written consent, directly to your company.',
      ],
    },
    costsLink: { de: 'Aktuelle Richtwerte auf der Seite Kosten', en: 'Current guide prices on the costs page' },
  },

  contact: {
    heading: { de: 'Reisemedizin für Ihr Team?', en: 'Travel medicine for your team?' },
    text: {
      de: 'Firmentermine vereinbaren wir telefonisch.',
      en: 'We arrange company appointments by phone.',
    },
    person: {
      de: 'Ihr Ansprechpartner: Konstantin Mayer, Organisation & Firmenkunden',
      en: 'Your contact: Konstantin Mayer, Organisation & Corporate Clients',
    },
    writeLink: { de: 'Oder schreiben Sie uns', en: 'Or write to us' },
  },
};
