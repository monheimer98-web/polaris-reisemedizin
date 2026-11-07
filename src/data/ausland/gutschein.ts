/**
 * Seite „Wertgutschein": Euro-Guthaben, erhältlich in der Praxis. Keine Leistung im
 * Namen, kein Rabatt, kein Bestellknopf, keine Online-Bezahlung. Die Regeln entsprechen
 * dem Pflichttext auf dem Gutschein.
 */
import type { ClinicalPage } from '../types';
import { AUSLAND_GEPRUEFT } from './stand';

export const gutscheinPage: ClinicalPage = {
  meta: {
    title: { de: 'Wertgutschein zum Verschenken', en: 'Gift voucher' },
    description: {
      de: 'Wertgutschein zum Verschenken: ein Euro-Betrag, der auf Rechnungen der Praxis angerechnet wird. Welche Leistung passt, klärt das Gespräch. In Langenfeld.',
      en: 'Gift voucher: choose an amount in euros, credited against practice invoices. Which service fits is decided in the consultation. Private practice in Langenfeld.',
    },
    eyebrow: { de: 'Wertgutschein', en: 'Gift voucher' },
    lead: {
      de: 'Sie wählen einen Euro-Betrag. Er wird auf Rechnungen der Praxis angerechnet. Erhältlich in der Praxis.',
      en: 'You choose an amount in euros. It is credited against practice invoices. Available at the practice.',
    },
  },
  sections: [
    {
      id: 'so-funktioniert',
      heading: { de: 'So funktioniert der Wertgutschein', en: 'How the gift voucher works' },
      body: {
        de: [
          'Der Wertgutschein ist ein Guthaben in Euro. Bei Vorlage wird er auf Rechnungen der Praxis angerechnet.',
          'Jede Leistung wird nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Die Rechnung weist den vollen Betrag aus, der Gutschein wird danach als Zahlung abgezogen. Einen Mehrbetrag zahlt die Patientin oder der Patient.',
          'Erhältlich in der Praxis. Da wir nur nach Vereinbarung arbeiten, stimmen Sie Ihren Besuch bitte kurz mit uns ab. Eine Bestellung über die Website gibt es nicht.',
        ],
        en: [
          'The gift voucher is a credit in euros. When presented, it is credited against practice invoices.',
          'Every service is billed under the German Medical Fee Schedule (GOÄ). The invoice shows the full amount and the voucher is then deducted as payment. The patient pays any remaining amount.',
          'Available at the practice. As we work by appointment only, please arrange your visit with us briefly beforehand. It cannot be ordered through this website.',
        ],
      },
      links: [{ label: { de: 'Kontakt und Anfahrt', en: 'Contact and directions' }, path: '/kontakt' }],
    },
    {
      id: 'anlaesse',
      heading: { de: 'Anlässe wie Abitur, Hochzeit oder Weltreise', en: 'Occasions such as graduation, a wedding or a world trip' },
      body: {
        de: [
          'Der Wertgutschein passt zu Anlässen wie Abitur, Hochzeit, Auslandsjahr oder Weltreise. Welche Leistung passt, entscheiden wir im Gespräch mit der Person, die ihn einlöst.',
        ],
        en: [
          'The gift voucher suits occasions such as graduation, a wedding, an exchange year or a world trip. Which service fits is decided in the consultation with the person redeeming it.',
        ],
      },
    },
    {
      id: 'zusage',
      heading: { de: 'Was der Gutschein nicht zusagt', en: 'What the voucher does not promise' },
      body: {
        de: [
          'Der Gutschein begründet keinen Anspruch auf eine bestimmte Untersuchung, Impfung, Bescheinigung oder ein bestimmtes Arzneimittel. Ob und welche Leistung erbracht wird, entscheidet die Ärztin oder der Arzt nach Beurteilung im Einzelfall. Eine Behandlung kann auch abgelehnt werden.',
          'Er sagt nichts darüber aus, ob ein Versicherer oder eine andere Stelle Kosten erstattet. Bei Minderjährigen ersetzt er nicht die erforderliche Einwilligung.',
        ],
        en: [
          'The voucher gives no entitlement to a particular examination, vaccination, certificate or medicine. Whether and which service is provided is decided by the doctor after assessing the individual case. Treatment can also be declined.',
          'It says nothing about whether an insurer or other body will reimburse costs. For minors, it does not replace the required consent.',
        ],
      },
    },
    {
      id: 'gueltigkeit',
      heading: { de: 'Gültigkeit, Restwert und Einlösung', en: 'Validity, remaining balance and redemption' },
      body: {
        de: ['Das Datum steht auf dem Gutschein. Zur Einlösung vereinbaren Sie wie gewohnt einen Termin und legen den Gutschein vor.'],
        en: ['The date is printed on the voucher. To redeem it, book an appointment as usual and present the voucher.'],
      },
      list: {
        de: [
          'Einlösbar bis zum 31. Dezember des dritten Jahres nach dem Ausstellungsjahr. Bei Ausstellung im Jahr 2026 also bis zum 31.12.2029.',
          'Ein Restwert bleibt bis zu diesem Datum gültig und wird vermerkt.',
          'Der Gutschein ist übertragbar. Die Praxis darf an die Person leisten, die ihn vorlegt.',
          'Eine Barauszahlung erfolgt nicht. Ausnahme: Kann die Praxis keine passende Leistung erbringen oder gibt sie ihre Tätigkeit auf, erstattet sie den Restwert.',
        ],
        en: [
          'Redeemable until 31 December of the third year after the year of issue. If issued in 2026, that means until 31 December 2029.',
          'Any remaining balance stays valid until that date and is noted.',
          'The voucher is transferable. The practice may provide services to the person presenting it.',
          'It cannot be paid out in cash. Exception: if the practice cannot provide a suitable service or closes, it refunds the remaining balance.',
        ],
      },
      links: [{ label: { de: 'Gutschein einlösen: Termin vereinbaren', en: 'Redeeming a voucher: book an appointment' }, path: '/termin' }],
    },
    {
      id: 'schweigepflicht',
      heading: { de: 'Schweigepflicht: was die schenkende Person nicht erfährt', en: 'Confidentiality: what the person giving it does not learn' },
      body: {
        de: ['Wer den Gutschein gekauft hat, erfährt nicht, ob, wann und wofür er eingelöst wurde. Das gehört zur ärztlichen Schweigepflicht.'],
        en: ['The person who bought the voucher does not learn whether, when or for what it was redeemed. This is part of medical confidentiality.'],
      },
    },
  ],
  faq: [
    {
      q: { de: 'Wofür lässt sich der Wertgutschein einlösen?', en: 'What can the gift voucher be redeemed for?' },
      a: {
        de: 'Er wird auf Rechnungen der Praxis angerechnet. Welche Leistung passt, entscheiden wir im Gespräch.',
        en: 'It is credited against practice invoices. Which service fits is decided in the consultation.',
      },
    },
    {
      q: { de: 'Hat die beschenkte Person Anspruch auf eine bestimmte Leistung?', en: 'Is the recipient entitled to a particular service?' },
      a: {
        de: 'Nein. Ob und welche Leistung erbracht wird, entscheidet die Ärztin oder der Arzt im Einzelfall. Kann die Praxis keine passende Leistung erbringen, erstattet sie den Restwert.',
        en: 'No. Whether and which service is provided is decided by the doctor in each individual case. If the practice cannot provide a suitable service, it refunds the remaining balance.',
      },
    },
    {
      q: { de: 'Wie lange gilt der Gutschein?', en: 'How long is the voucher valid?' },
      a: {
        de: 'Bis zum 31. Dezember des dritten Jahres nach dem Ausstellungsjahr. Das Datum steht auf dem Gutschein.',
        en: 'Until 31 December of the third year after the year of issue. The date is printed on the voucher.',
      },
    },
    {
      q: { de: 'Was passiert mit einem Restwert?', en: 'What happens to a remaining balance?' },
      a: {
        de: 'Er wird vermerkt und bleibt bis zum genannten Datum gültig.',
        en: 'It is noted and stays valid until the stated date.',
      },
    },
    {
      q: { de: 'Erfahre ich, wofür er eingelöst wurde?', en: 'Will I find out what it was redeemed for?' },
      a: {
        de: 'Nein. Wir geben wegen der ärztlichen Schweigepflicht keine Auskunft darüber, ob, wann und wofür ein Gutschein eingelöst wurde.',
        en: 'No. Because of medical confidentiality, we do not disclose whether, when or for what a voucher was redeemed.',
      },
    },
    {
      q: { de: 'Wo erhalte ich den Gutschein?', en: 'Where can I get the voucher?' },
      a: {
        de: 'In der Praxis am Leipziger Weg 5 (1. Etage) in Langenfeld. Stimmen Sie Ihren Besuch bitte kurz mit uns ab. Eine Bestellung über die Website oder einen Versand gibt es nicht.',
        en: 'At the practice at Leipziger Weg 5 (1st floor) in Langenfeld. Please arrange your visit with us briefly beforehand. It cannot be ordered through this website or sent by post.',
      },
    },
  ],
  sourceIds: ['goae12', 'bgb195'],
  lastReviewed: AUSLAND_GEPRUEFT,
  related: [
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    { label: { de: 'Kontakt und Anfahrt', en: 'Contact and directions' }, path: '/kontakt' },
  ],
};
