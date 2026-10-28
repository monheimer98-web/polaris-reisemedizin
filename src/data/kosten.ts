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
      'Vor jeder kostenpflichtigen Leistung besprechen wir mit Ihnen den Umfang und die voraussichtlichen Kosten. Reiseimpfungen sind individuelle Gesundheitsleistungen; über die voraussichtlichen Kosten informieren wir Sie vorab schriftlich (§ 630c Abs. 3 BGB).',
      'Die folgenden Beträge sind unverbindliche Richtwerte zur Orientierung. Der endgültige Betrag hängt vom tatsächlichen Aufwand im Einzelfall ab.',
    ],
    en: [
      'Travel-medicine services are private/individual health services and are billed under the GOÄ – you receive a clear, itemised invoice you can submit to your insurer.',
      'Before any chargeable service we discuss its scope and the expected cost with you. Travel vaccinations are individual health services, and we inform you of the expected costs in writing beforehand (Section 630c(3) German Civil Code).',
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
            de: 'Eingehende Beratung (ca. 15–20 Minuten) für Fernreisen, mehrere Länder oder eine besondere Vorgeschichte – mit persönlichem, schriftlichem Reise- und Impfplan und, falls sinnvoll, Malaria-Rezept.',
            en: 'An in-depth consultation (approx. 15–20 minutes) for long-haul trips, multiple countries or a particular medical history – with a personal written travel and vaccination plan and, where useful, a malaria prescription.',
          },
          price: { de: 'ca. 38 €', en: 'approx. €38' },
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
            de: 'Eigene Beratung und eigener Plan im selben Termin – als ganz normale, einzeln einreichbare Rechnung (gleiches Reiseziel, bis zu sechs Personen).',
            en: 'Own consultation and own plan in the same appointment – as a regular, individually submittable invoice (same destination, up to six people).',
          },
          price: { de: 'ca. 28 €', en: 'approx. €28' },
        },
        {
          service: { de: 'Malaria-Beratung (allein)', en: 'Malaria consultation (on its own)' },
          detail: {
            de: 'Kurze, gezielte Beratung nur zum Malariaschutz – mit persönlichem, schriftlichem Plan und auf Wunsch mit Privatrezept.',
            en: 'A short, focused consultation on malaria protection only – with a personal written plan and a private prescription on request.',
          },
          price: { de: 'ca. 28 €', en: 'approx. €28' },
        },
        {
          service: { de: 'Höhenmedizin oder Malaria + Höhe', en: 'Altitude medicine or malaria + altitude' },
          detail: {
            de: 'Beratung zur Höhenmedizin bzw. zu Malaria und Höhe zusammen – mit persönlichem, schriftlichem Plan und auf Wunsch mit Privatrezept.',
            en: 'Advice on altitude medicine, or on malaria and altitude together – with a personal written plan and a private prescription on request.',
          },
          price: { de: 'ca. 38 €', en: 'approx. €38' },
        },
      ],
    },
    {
      id: 'impftermine',
      heading: { de: 'Impfungen', en: 'Vaccinations' },
      items: [
        {
          service: { de: 'Beratung und Impfung im selben Termin', en: 'Consultation and vaccination in one appointment' },
          detail: {
            de: 'Ist der Impfstoff bei uns vorrätig, impfen wir auf Wunsch direkt im Anschluss an die Beratung – mit Reiseplan, kurzer Impf-Untersuchung und Impfung. Gilt für bis zu zwei Impfungen.',
            en: 'If the vaccine is in stock, we can vaccinate you directly after the consultation – including the travel plan, a brief pre-vaccination check and the vaccination. Applies to up to two vaccinations.',
          },
          price: { de: 'ca. 50 € + Impfstoff', en: 'approx. €50 + vaccine' },
        },
        {
          service: { de: 'Impftermin (nach Ihrer Beratung)', en: 'Vaccination appointment (after your consultation)' },
          detail: {
            de: 'Die Impfung nach Ihrem Impfplan: Aufklärung, kurze Impf-Untersuchung, Impfung und Eintrag in den Impfausweis. Folgedosen derselben Impfserie innerhalb eines Monats berechnen wir günstiger.',
            en: 'The vaccination following your plan: briefing, a brief pre-vaccination check, injection and entry in your vaccination certificate. Follow-up doses of the same series within one month are charged at a lower rate.',
          },
          price: { de: 'ca. 32 € + Impfstoff', en: 'approx. €32 + vaccine' },
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
          service: { de: 'Mehrere Impfungen im selben Termin', en: 'Several vaccinations in the same appointment' },
          detail: {
            de: 'Eine zweite Impfung im selben Termin kostet kein zusätzliches Honorar; ab der dritten Impfung kommt ein kleiner Aufschlag je weitere Impfung hinzu.',
            en: 'A second vaccination in the same appointment carries no additional fee; from the third vaccination a small surcharge applies per additional vaccination.',
          },
          price: { de: 'ab der 3.: zzgl. ca. 3–7 €', en: 'from the 3rd: plus approx. €3–7' },
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
        de: 'Impfstoffe geben wir immer 1:1 zum Einkaufspreis weiter – ohne Aufschlag, wir verdienen daran nichts. Häufig benötigte Reiseimpfstoffe sowie den FSME- und den Gelbfieber-Impfstoff halten wir vorrätig – dann impfen wir auf Wunsch direkt im Termin. Seltener benötigte Impfstoffe besprechen wir in der Beratung; sie besorgen wir bzw. Sie erhalten ein Privatrezept für die Apotheke, und wir impfen beim nächsten Termin.',
        en: 'We always pass on vaccines 1:1 at cost – without mark-up, we make nothing on them. We keep commonly needed travel vaccines as well as the TBE and yellow-fever vaccines in stock – so we can vaccinate you directly in the appointment if you wish. Less commonly needed vaccines are discussed during the consultation; we obtain them or you receive a private prescription for the pharmacy, and we vaccinate at the next appointment.',
      },
      items: [
        {
          service: { de: 'Vorrätiger Impfstoff', en: 'Vaccine in stock' },
          detail: {
            de: 'Häufig benötigte Reiseimpfstoffe, FSME und Gelbfieber: Wir berechnen den Impfstoff zum tatsächlichen Bezugspreis ohne Aufschlag (Auslage nach § 10 GOÄ).',
            en: 'Commonly needed travel vaccines, TBE and yellow fever: we charge the vaccine at the actual cost price without mark-up (disbursement under § 10 GOÄ).',
          },
          price: { de: 'nach Bezugspreis', en: 'at cost price' },
        },
        {
          service: { de: 'Impfstoff per Privatrezept', en: 'Vaccine via private prescription' },
          detail: {
            de: 'Seltener benötigte Impfstoffe: Den Impfstoff bezahlen Sie direkt in der Apotheke – er erscheint nicht auf unserer Rechnung. Der Preis hängt vom jeweiligen Impfstoff ab.',
            en: 'Less commonly needed vaccines: you pay for the vaccine directly at the pharmacy – it does not appear on our invoice. The price depends on the respective vaccine.',
          },
          price: { de: 'Apothekenpreis', en: 'pharmacy price' },
        },
      ],
    },
    {
      id: 'gelbfieber',
      heading: { de: 'Gelbfieberimpfung', en: 'Yellow-fever vaccination' },
      note: {
        de: 'Als staatlich autorisierte Gelbfieberimpfstelle führen wir die Gelbfieberimpfung bei uns vor Ort durch und stellen den international gültigen Impfnachweis (ICVP) aus – in einem Termin bei uns vor Ort, auf Wunsch auch direkt im Rahmen der Reiseberatung.',
        en: 'As a state-authorised yellow-fever centre, we carry out the yellow-fever vaccination on site and issue the internationally valid certificate (ICVP) – in a single appointment on site, or directly as part of your travel consultation if you wish.',
      },
      items: [
        {
          service: { de: 'Gelbfieberimpfung inkl. internationalem Impfnachweis (ICVP)', en: 'Yellow-fever vaccination incl. international certificate (ICVP)' },
          detail: {
            de: 'Ärztliches Honorar für Aufklärung, kurze Impf-Untersuchung, Impfung und internationalen Impfnachweis. Den Gelbfieber-Impfstoff geben wir 1:1 zum Einkaufspreis weiter, ohne Aufschlag – derzeit ca. 73 €. Insgesamt also rund 110 €.',
            en: 'Medical fee for the briefing, a brief pre-vaccination check, the vaccination and the international certificate. We pass on the yellow-fever vaccine 1:1 at cost, without mark-up – currently approx. €73. In total roughly €110.',
          },
          price: { de: 'ca. 38 € + Impfstoff (derzeit ca. 73 €)', en: 'approx. €38 + vaccine (currently approx. €73)' },
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
          'Für beruflich oder ausbildungsbedingte Auslandsaufenthalte sind die von der STIKO empfohlenen Reiseimpfungen eine Kassenleistung – allerdings in einer Kassenpraxis, nicht bei uns. Für private Reisen erstatten viele gesetzliche Krankenkassen Reiseimpfungen freiwillig als Satzungsleistung. Umfang und Bedingungen sind je Kasse sehr unterschiedlich: oft nur Impfstoff und/oder Impfleistung, die Reiseberatung meist nicht; manche Kassen erstatten nur Impfungen aus Kassenpraxen. Private Tarife regeln es individuell.',
          'Bitte klären Sie die Erstattung vorab mit Ihrer Kasse. Sie erhalten von uns eine aufgeschlüsselte Rechnung nach GOÄ zum Einreichen.',
        ],
        en: [
          'For stays abroad for work or training, the travel vaccinations recommended by STIKO are a statutory benefit – but in a statutory-insurance practice, not with us. For private trips, many statutory health insurers reimburse travel vaccinations voluntarily under their statutes. Scope and conditions vary widely: often only the vaccine and/or the vaccination itself, rarely the consultation; some insurers only reimburse vaccinations given in statutory-insurance practices. Private plans handle it individually.',
          'Please check reimbursement with your insurer in advance. You will receive an itemised GOÄ invoice from us to submit.',
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

  lastReviewed: new Date('2026-10-28'),
};
