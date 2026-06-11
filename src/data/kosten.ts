/**
 * Inhalt der Seite „Kosten & Abrechnung". Transparente Preisorientierung nach
 * der Gebührenordnung für Ärzte (GOÄ). Alle Beträge sind ausdrücklich
 * unverbindliche Richtwerte; der endgültige Betrag richtet sich nach dem
 * tatsächlichen Aufwand im Einzelfall (§ 5 GOÄ) und wird vor der Behandlung
 * vereinbart (§ 630c BGB). Bewusst HWG-konform: sachliche Preisinformation,
 * keine Heilversprechen, keine Werbeaussagen.
 */
import type { Localized } from './types';

/** Eine Zeile in der Preisübersicht. */
export interface PriceItem {
  /** Bezeichnung der Leistung. */
  service: Localized;
  /** Was enthalten ist / wie sich der Posten erklärt. */
  detail: Localized;
  /** Preis-Richtwert, z. B. „ab 59 €" oder „in Vorbereitung". */
  price: Localized;
}

/** Eine thematische Gruppe von Preiszeilen. */
export interface PriceGroup {
  id: string;
  heading: Localized;
  /** Optionaler erläuternder Vorspann zur Gruppe. */
  note?: Localized;
  items: PriceItem[];
}

export interface KostenPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  /** Einleitung: wie die Abrechnung funktioniert. */
  intro: Localized<string[]>;
  /** Spaltenüberschriften der Preistabelle. */
  tableHead: { service: Localized; price: Localized };
  groups: PriceGroup[];
  /** Erläuternde Hinweisblöcke unterhalb der Tabelle. */
  notes: { heading: Localized; body: Localized<string[]> }[];
  /** Kompakter Schluss-Disclaimer (Richtwert-Charakter). */
  disclaimer: Localized;
  lastReviewed: Date;
}

export const kostenPage: KostenPage = {
  meta: {
    title: {
      de: 'Kosten & Abrechnung',
      en: 'Fees & billing',
    },
    description: {
      de: 'Transparente Preisorientierung nach GOÄ für reisemedizinische Beratung und Impfungen. Richtwerte, Abrechnung und Hinweise zur Kostenerstattung.',
      en: 'Transparent fee guidance under the German GOÄ for travel-medicine consultations and vaccinations. Guide prices, billing and reimbursement notes.',
    },
    eyebrow: { de: 'Kosten & Abrechnung', en: 'Fees & billing' },
    lead: {
      de: 'Reisemedizinische Beratung und Impfungen sind private Leistungen und werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Wir legen die Kosten transparent offen und besprechen sie vor jeder Behandlung mit Ihnen.',
      en: 'Travel-medicine consultations and vaccinations are private-pay services billed under the German Medical Fee Schedule (GOÄ). We disclose costs transparently and discuss them with you before any treatment.',
    },
  },

  intro: {
    de: [
      'Reisemedizinische Leistungen gehören in der Regel nicht zum Leistungskatalog der gesetzlichen Krankenversicherung. Sie werden als private bzw. individuelle Gesundheitsleistung nach der GOÄ abgerechnet – Sie erhalten dafür eine nachvollziehbare Rechnung.',
      'Vor jeder kostenpflichtigen Leistung besprechen wir mit Ihnen den Umfang und die voraussichtlichen Kosten. Reiseimpfungen sind individuelle Gesundheitsleistungen; hierzu treffen wir eine schriftliche Kostenvereinbarung (§ 630c BGB).',
      'Die folgenden Beträge sind unverbindliche Richtwerte zur Orientierung. Der endgültige Betrag hängt vom tatsächlichen Aufwand im Einzelfall ab.',
    ],
    en: [
      'Travel-medicine services are generally not covered by the German statutory health insurance. They are billed as private/individual health services under the GOÄ – you receive a fully itemised invoice.',
      'Before any chargeable service we discuss its scope and the expected cost with you. Travel vaccinations are individual health services, for which we put a written cost agreement in place (§ 630c German Civil Code).',
      'The amounts below are non-binding guide values for orientation. The final amount depends on the actual effort in each individual case.',
    ],
  },

  tableHead: {
    service: { de: 'Leistung', en: 'Service' },
    price: { de: 'Richtwert', en: 'Guide price' },
  },

  groups: [
    {
      id: 'beratung',
      heading: { de: 'Beratung & Impfplanung', en: 'Consultation & vaccination planning' },
      items: [
        {
          service: { de: 'Reisemedizinische Vollberatung', en: 'Full travel-medicine consultation' },
          detail: {
            de: 'Individuelle Beratung zu Ihren Reisezielen, Prüfung der Impftauglichkeit und ein persönlicher, schriftlicher Impf- und Reiseplan. Abrechnung nach GOÄ (u. a. Nrn. 3, 5, 75).',
            en: 'Individual advice for your destinations, a fitness-for-vaccination check and a personal written vaccination and travel plan. Billed under the GOÄ (incl. items 3, 5, 75).',
          },
          price: { de: 'ab 59 €', en: 'from €59' },
        },
        {
          service: { de: 'Jede weitere mitreisende Person', en: 'Each additional travelling person' },
          detail: {
            de: 'Eigene Prüfung der Impftauglichkeit und eigener Impfplan – gemeinsam im selben Termin.',
            en: 'Own fitness-for-vaccination check and own vaccination plan – together in the same appointment.',
          },
          price: { de: 'ab 29 €', en: 'from €29' },
        },
        {
          service: { de: 'Fokus-Beratung Malaria oder Höhenmedizin', en: 'Focused malaria or altitude consultation' },
          detail: {
            de: 'Wenn Sie gezielt nur zum Malariaschutz oder zur Höhenmedizin beraten werden möchten.',
            en: 'If you would like advice specifically on malaria protection or altitude medicine only.',
          },
          price: { de: 'ab 35 €', en: 'from €35' },
        },
        {
          service: { de: 'Privatrezept (z. B. Malaria-Notfallset)', en: 'Private prescription (e.g. malaria stand-by kit)' },
          detail: {
            de: 'Ausstellung eines Privatrezepts im Rahmen der Beratung. Die Medikamentenkosten zahlen Sie in der Apotheke.',
            en: 'Issuing a private prescription as part of the consultation. Medication costs are paid at the pharmacy.',
          },
          price: { de: 'zzgl. ab 6 €', en: 'plus from €6' },
        },
      ],
    },
    {
      id: 'impftermine',
      heading: { de: 'Impftermine', en: 'Vaccination appointments' },
      items: [
        {
          service: { de: 'Impftermin (Durchführung & Dokumentation)', en: 'Vaccination appointment (administration & records)' },
          detail: {
            de: 'Aufklärung, Durchführung der Impfung und Eintrag in den Impfausweis. Die Impfstoffkosten kommen hinzu.',
            en: 'Briefing, administration of the vaccination and entry in your vaccination certificate. Vaccine costs are added.',
          },
          price: { de: 'ab 20 €', en: 'from €20' },
        },
        {
          service: { de: 'Ersttermin mit direkter Impfung', en: 'First appointment with immediate vaccination' },
          detail: {
            de: 'Kurzberatung mit anschließender Impfung, wenn die Impfempfehlung bereits eindeutig ist.',
            en: 'Brief consultation followed by vaccination when the recommendation is already clear.',
          },
          price: { de: 'ab 32 €', en: 'from €32' },
        },
      ],
    },
    {
      id: 'impfstoffe',
      heading: { de: 'Impfstoffe', en: 'Vaccines' },
      note: {
        de: 'Wir halten keine großen Impfstoffvorräte vorrätig, sondern bestellen den passenden Impfstoff individuell für Sie. Dadurch erhalten Sie stets frische Ware.',
        en: 'We do not keep large vaccine stocks; instead we order the right vaccine individually for you. This means you always receive fresh product.',
      },
      items: [
        {
          service: { de: 'Impfstoff je Dosis', en: 'Vaccine per dose' },
          detail: {
            de: 'Wird für Sie individuell bestellt und zum Bezugspreis berechnet. Der Preis hängt vom jeweiligen Impfstoff ab.',
            en: 'Ordered individually for you and charged at cost. The price depends on the respective vaccine.',
          },
          price: { de: 'nach Bezugspreis', en: 'at cost price' },
        },
      ],
    },
    {
      id: 'gelbfieber',
      heading: { de: 'Gelbfieberimpfung', en: 'Yellow-fever vaccination' },
      note: {
        de: 'Die Gelbfieberimpfung darf nur in einer staatlich autorisierten Gelbfieberimpfstelle durchgeführt werden. Unsere Zulassung ist in Vorbereitung – Termine sind in Kürze buchbar.',
        en: 'Yellow-fever vaccination may only be carried out at a state-authorised yellow-fever centre. Our authorisation is in preparation – appointments will be bookable soon.',
      },
      items: [
        {
          service: { de: 'Gelbfieberimpfung inkl. internationalem Impfnachweis (ICVP)', en: 'Yellow-fever vaccination incl. international certificate (ICVP)' },
          detail: {
            de: 'Sobald unsere Zulassung als Gelbfieberimpfstelle aktiv ist. Der Impfstoff (Stamaril®) wird gesondert berechnet.',
            en: 'As soon as our authorisation as a yellow-fever centre is active. The vaccine (Stamaril®) is billed separately.',
          },
          price: { de: 'in Vorbereitung', en: 'in preparation' },
        },
      ],
    },
  ],

  notes: [
    {
      heading: { de: 'Wie sich die Kosten zusammensetzen', en: 'How the fees are calculated' },
      body: {
        de: [
          'Die Abrechnung folgt der amtlichen Gebührenordnung für Ärzte (GOÄ). Jede Leistung hat dort eine feste Bewertung, die mit einem Steigerungssatz multipliziert wird. Im Regelfall liegt dieser bis zum 2,3-Fachen; ein höherer Satz ist nur bei besonders aufwendiger Leistung und mit schriftlicher Begründung zulässig (§ 5 GOÄ).',
          'Die reisemedizinische Vollberatung umfasst typischerweise die eingehende Beratung (Nr. 3), die Prüfung der Impftauglichkeit (Nr. 5) und den schriftlichen Impf- und Reiseplan (Nr. 75). Den schriftlichen Plan erhalten Sie unabhängig davon, ob Sie sich anschließend impfen lassen.',
        ],
        en: [
          'Billing follows the official German Medical Fee Schedule (GOÄ). Each service has a fixed valuation there, which is multiplied by a rate factor. As a rule this is up to 2.3×; a higher factor is only permitted for particularly complex services and with a written justification (§ 5 GOÄ).',
          'The full travel-medicine consultation typically comprises the in-depth advice (item 3), the fitness-for-vaccination check (item 5) and the written vaccination and travel plan (item 75). You receive the written plan regardless of whether you go on to be vaccinated.',
        ],
      },
    },
    {
      heading: { de: 'Erstattung durch Ihre Versicherung', en: 'Reimbursement by your insurer' },
      body: {
        de: [
          'Gesetzliche Krankenkassen übernehmen Reiseimpfungen in der Regel nicht; einige erstatten sie inzwischen als freiwillige Satzungsleistung – ganz oder anteilig. Private Tarife regeln dies unterschiedlich.',
          'Bitte klären Sie eine mögliche Erstattung vor Ihrem Termin mit Ihrer Versicherung. Mit unserer Rechnung können Sie die Kosten dort einreichen.',
        ],
        en: [
          'Statutory health insurers generally do not cover travel vaccinations; some now reimburse them as a voluntary statutory benefit – in full or in part. Private plans handle this differently.',
          'Please clarify possible reimbursement with your insurer before your appointment. You can submit our invoice to them.',
        ],
      },
    },
  ],

  disclaimer: {
    de: 'Alle Beträge sind unverbindliche Richtwerte nach GOÄ und ersetzen keine individuelle Kostenaufstellung. Den verbindlichen Umfang und die Kosten besprechen wir vor der Behandlung mit Ihnen.',
    en: 'All amounts are non-binding guide values under the GOÄ and do not replace an individual cost estimate. We agree the binding scope and costs with you before treatment.',
  },

  lastReviewed: new Date('2026-06-04'),
};
