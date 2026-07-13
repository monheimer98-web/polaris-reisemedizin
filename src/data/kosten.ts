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
  /** Preis-Richtwert, z. B. „ca. 50 €" oder „ca. 38 € + Impfstoff". */
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
      'Reisemedizinische Leistungen sind private bzw. individuelle Gesundheitsleistungen und werden nach der GOÄ abgerechnet – Sie erhalten dafür eine nachvollziehbare, einreichbare Rechnung.',
      'Vor jeder kostenpflichtigen Leistung besprechen wir mit Ihnen den Umfang und die voraussichtlichen Kosten. Reiseimpfungen sind individuelle Gesundheitsleistungen; hierzu treffen wir eine schriftliche Kostenvereinbarung (§ 630c BGB).',
      'Die folgenden Beträge sind unverbindliche Richtwerte zur Orientierung. Der endgültige Betrag hängt vom tatsächlichen Aufwand im Einzelfall ab.',
    ],
    en: [
      'Travel-medicine services are private/individual health services and are billed under the GOÄ – you receive a clear, itemised invoice you can submit to your insurer.',
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
          service: { de: 'Reisemedizinische Beratung – Fernreise oder mehrere Länder', en: 'Travel-medicine consultation – long-haul or multiple countries' },
          detail: {
            de: 'Ausführliche Beratung (ab etwa 20 Minuten) für Fernreisen, mehrere Länder oder eine besondere Vorgeschichte – inklusive Malaria-Rezept, falls sinnvoll, und schriftlichem Impf- und Reiseplan.',
            en: 'An in-depth consultation (from around 20 minutes) for long-haul trips, multiple countries or a particular medical history – including a malaria prescription where useful and a written vaccination and travel plan.',
          },
          price: { de: 'ca. 50 €', en: 'approx. €50' },
        },
        {
          service: { de: 'Reiseberatung kompakt (Europa)', en: 'Compact travel consultation (Europe)' },
          detail: {
            de: 'Kompakte Beratung für ein einzelnes Reiseland innerhalb Europas – mit persönlichem, schriftlichem Impf- und Reiseplan.',
            en: 'A compact consultation for a single destination country within Europe – with a personal written vaccination and travel plan.',
          },
          price: { de: 'ca. 28 €', en: 'approx. €28' },
        },
        {
          service: { de: 'Jede weitere mitreisende Person', en: 'Each additional travelling person' },
          detail: {
            de: 'Eigene Beratung und eigener Impfplan im selben Termin – als ganz normale, einzeln einreichbare Rechnung (gleiches Reiseziel, bis zu sechs Personen).',
            en: 'Own consultation and own vaccination plan in the same appointment – as a regular, individually submittable invoice (same destination, up to six people).',
          },
          price: { de: 'ca. 28 €', en: 'approx. €28' },
        },
        {
          service: { de: 'Fokus-Beratung Malaria oder Höhenmedizin', en: 'Focused malaria or altitude consultation' },
          detail: {
            de: 'Wenn Sie gezielt nur zum Malariaschutz oder zur Höhenmedizin beraten werden möchten – auf Wunsch mit Privatrezept.',
            en: 'If you would like advice specifically on malaria protection or altitude medicine only – with a private prescription on request.',
          },
          price: { de: 'ca. 20 €', en: 'approx. €20' },
        },
      ],
    },
    {
      id: 'impftermine',
      heading: { de: 'Impftermine', en: 'Vaccination appointments' },
      items: [
        {
          service: { de: 'Folge-Impftermin (nach Ihrem Impfplan)', en: 'Follow-up vaccination appointment (per your plan)' },
          detail: {
            de: 'Die eigentliche Impfung nach Ihrem Impfplan: Aufklärung, Impfung und Eintrag in den Impfausweis. Den Impfstoff bringen Sie per Privatrezept aus der Apotheke mit.',
            en: 'The vaccination itself, following your plan: briefing, injection and entry in your vaccination certificate. You bring the vaccine from the pharmacy via private prescription.',
          },
          price: { de: 'ca. 20 €', en: 'approx. €20' },
        },
        {
          service: { de: 'FSME-Impfung direkt (vor Ort, ein Termin)', en: 'TBE vaccination directly (on site, one appointment)' },
          detail: {
            de: 'FSME halten wir vor Ort vorrätig – dafür brauchen Sie kein Privatrezept und können den Termin direkt buchen. (Gelbfieber ist ebenfalls vor Ort möglich, siehe unten.)',
            en: 'We keep the TBE vaccine in stock on site – no private prescription needed, and you can book directly. (Yellow fever is also available on site, see below.)',
          },
          price: { de: 'ca. 32 € + Impfstoff', en: 'approx. €32 + vaccine' },
        },
        {
          service: { de: 'Jede weitere Impfung am selben Tag', en: 'Each additional vaccination on the same day' },
          detail: {
            de: 'Wenn mehrere Impfungen in einem Termin zusammengefasst werden.',
            en: 'When several vaccinations are combined in one appointment.',
          },
          price: { de: 'zzgl. ca. 7 €', en: 'plus approx. €7' },
        },
        {
          service: { de: 'Neuer Impfausweis (falls noch keiner vorhanden)', en: 'New vaccination certificate (if you don’t have one yet)' },
          detail: {
            de: 'Ausstellung eines neuen Impfausweises.',
            en: 'Issuing a new vaccination certificate.',
          },
          price: { de: 'ca. 5 €', en: 'approx. €5' },
        },
      ],
    },
    {
      id: 'impfstoffe',
      heading: { de: 'Impfstoffe', en: 'Vaccines' },
      note: {
        de: 'Für die meisten Reiseimpfungen erhalten Sie ein Privatrezept und holen den Impfstoff gekühlt in der Apotheke. Den FSME- und den Gelbfieber-Impfstoff halten wir vor Ort vorrätig.',
        en: 'For most travel vaccinations you receive a private prescription and collect the refrigerated vaccine at the pharmacy. We keep the TBE and yellow-fever vaccines in stock on site.',
      },
      items: [
        {
          service: { de: 'Impfstoff per Privatrezept', en: 'Vaccine via private prescription' },
          detail: {
            de: 'Den Impfstoff bezahlen Sie direkt in der Apotheke – er erscheint nicht auf unserer Rechnung. Der Preis hängt vom jeweiligen Impfstoff ab.',
            en: 'You pay for the vaccine directly at the pharmacy – it does not appear on our invoice. The price depends on the respective vaccine.',
          },
          price: { de: 'Apothekenpreis', en: 'pharmacy price' },
        },
        {
          service: { de: 'FSME- und Gelbfieber-Impfstoff (vor Ort)', en: 'TBE and yellow-fever vaccine (on site)' },
          detail: {
            de: 'FSME und Gelbfieber (Stamaril®) halten wir vor Ort vorrätig und berechnen den Impfstoff zum Bezugspreis (Auslage nach § 10 GOÄ).',
            en: 'We keep TBE and yellow fever (Stamaril®) in stock on site and charge the vaccine at cost (disbursement under § 10 GOÄ).',
          },
          price: { de: 'nach Bezugspreis', en: 'at cost price' },
        },
      ],
    },
    {
      id: 'gelbfieber',
      heading: { de: 'Gelbfieberimpfung', en: 'Yellow-fever vaccination' },
      note: {
        de: 'Als staatlich autorisierte Gelbfieberimpfstelle führen wir die Gelbfieberimpfung bei uns vor Ort durch und stellen den international gültigen Impfnachweis (ICVP) aus – in einem Termin bei uns vor Ort.',
        en: 'As a state-authorised yellow-fever centre, we carry out the yellow-fever vaccination on site and issue the internationally valid certificate (ICVP) – in a single appointment on site.',
      },
      items: [
        {
          service: { de: 'Gelbfieberimpfung inkl. internationalem Impfnachweis (ICVP)', en: 'Yellow-fever vaccination incl. international certificate (ICVP)' },
          detail: {
            de: 'Ärztliches Honorar für Aufklärung, Impfung und ICVP-Eintrag. Der Impfstoff (Stamaril®) wird gesondert als Auslage berechnet.',
            en: 'Medical fee for the briefing, vaccination and ICVP entry. The vaccine (Stamaril®) is billed separately as a disbursement.',
          },
          price: { de: 'ca. 38 € + Impfstoff', en: 'approx. €38 + vaccine' },
        },
      ],
    },
  ],

  notes: [
    {
      heading: { de: 'Wie sich die Kosten zusammensetzen', en: 'How the fees are calculated' },
      body: {
        de: [
          'Die Abrechnung folgt der amtlichen Gebührenordnung für Ärzte (GOÄ) und bleibt beim Regelsatz (2,3-fach) – ohne erhöhte Faktoren und ohne gesonderte Honorarvereinbarung. Der ausgewiesene Betrag ergibt sich aus den einzelnen, tatsächlich erbrachten Leistungen.',
          'Die Beratung umfasst das ausführliche ärztliche Gespräch und den schriftlichen, individuellen Impf- und Reiseplan – den Sie unabhängig davon erhalten, ob Sie sich anschließend impfen lassen.',
        ],
        en: [
          'Billing follows the official German Medical Fee Schedule (GOÄ) and stays at the standard rate (2.3×) – without increased factors or a separate fee agreement. The amount shown reflects the individual services actually provided.',
          'The consultation comprises the in-depth medical conversation and the written, individual vaccination and travel plan – which you receive regardless of whether you go on to be vaccinated.',
        ],
      },
    },
    {
      heading: { de: 'Erstattung durch Ihre Versicherung', en: 'Reimbursement by your insurer' },
      body: {
        de: [
          'Viele gesetzliche Krankenkassen erstatten Reiseimpfungen inzwischen als freiwillige Satzungsleistung – häufig ganz oder zu einem großen Teil. Ob und in welcher Höhe, hängt von Ihrer Kasse ab; private Tarife regeln es individuell.',
          'Am besten klären Sie die Erstattung kurz vorab mit Ihrer Kasse. Sie erhalten von uns eine ordentliche, itemisierte Rechnung, die Sie unkompliziert einreichen können.',
        ],
        en: [
          'Many statutory health insurers now reimburse travel vaccinations as a voluntary statutory benefit – often in full or to a large extent. Whether and how much depends on your fund; private plans handle it individually.',
          'It is best to check reimbursement briefly with your fund beforehand. You receive a proper, itemised invoice from us that you can submit without hassle.',
        ],
      },
    },
    {
      heading: { de: 'Bezahlung in der Praxis', en: 'Payment at the practice' },
      body: {
        de: [
          'Die Bezahlung erfolgt vor Ort bargeldlos per Karte (girocard/EC- und gängige Kreditkarten). Eine Barzahlung ist nicht möglich – bitte denken Sie zu Ihrem Termin an Ihre Karte.',
        ],
        en: [
          'Payment is made on site by card (girocard/EC and common credit cards). Cash payment is not possible – please remember to bring your card to your appointment.',
        ],
      },
    },
  ],

  disclaimer: {
    de: 'Alle Beträge sind unverbindliche Richtwerte nach GOÄ und ersetzen keine individuelle Kostenaufstellung. Den verbindlichen Umfang und die Kosten besprechen wir vor der Behandlung mit Ihnen.',
    en: 'All amounts are non-binding guide values under the GOÄ and do not replace an individual cost estimate. We agree the binding scope and costs with you before treatment.',
  },

  lastReviewed: new Date('2026-07-04'),
};
