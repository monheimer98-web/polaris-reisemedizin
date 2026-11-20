/**
 * Seite „Beispielkosten Prävention" (/praevention/kosten). Ersetzt die festen
 * Beträge auf Karten und Buchungsseite (Nickis Vorgabe vom 04.11.2026: kein
 * Lockpreis, „Kosten je nachdem, was benötigt wird"). Alle Beträge kommen aus
 * `preise.ts`; Regeln nach team-2026-11-04/kosten-goae.md 4.2: kein „ab",
 * kein „nur", kein Kurztermin-Betrag als Aufmacher, nie „inklusive Labor".
 * Stufe-2-Angebote (Schlaf, Muskel) erscheinen erst, wenn sie online gehen.
 */
import type { Localized } from '../types';
import { haarPreis, honorar, labor, laborwert, termin, weg, zweiTermine, zweiTermineWeg, euroDe, euroEn, caDe, caEn, prpPreis } from './preise';


export interface BeispielPosten {
  label: Localized;
  betrag: number;
}

export interface Beispielrechnung {
  /** Slug des Angebots (Link auf die Angebotsseite). */
  slug: string;
  title: Localized;
  posten: BeispielPosten[];
  /** Ärztliches Honorar aller Posten zusammen. */
  praxis: number;
  labor: Localized;
  typisch: Localized;
  hinweis?: Localized;
}

const ganz = (b: number) => Math.round(b);

const dreischritt: BeispielPosten[] = [
  { label: { de: 'Kurztermin: welche Werte sinnvoll sind', en: 'Short appointment: which tests make sense' }, betrag: termin.kurz },
  { label: { de: 'Blutabnahme am Morgen', en: 'Blood sample in the morning' }, betrag: termin.blutabnahme },
  {
    label: { de: 'Befundtermin: Untersuchung, Beratung, schriftlicher Plan', en: 'Results appointment: examination, advice, written plan' },
    betrag: termin.befundCheck,
  },
];

export const beispielrechnungen: Beispielrechnung[] = [
  {
    slug: 'gesundheitscheck',
    title: { de: 'Gesundheitscheck', en: 'Health check-up' },
    posten: [
      { label: { de: 'Termin 1: Gesundheitsuntersuchung mit Gespräch, Untersuchung, Messungen und Blutabnahme', en: 'Appointment 1: health examination with consultation, examination, measurements and blood sample' }, betrag: zweiTermine.checkErst },
      {
        label: { de: 'Termin 2: ausführliche Besprechung aller Werte, mit schriftlichem Befundbericht', en: 'Appointment 2: detailed discussion of all results, with written report' },
        betrag: zweiTermine.checkBefund,
      },
    ],
    praxis: zweiTermineWeg.check,
    labor: {
      de: `ca. ${euroDe(labor.check)}, beim ersten Check mit einmaliger Lp(a)-Bestimmung ca. ${euroDe(labor.checkMitLpa)}`,
      en: `approx. ${euroEn(labor.check)}, at the first check-up with a one-off Lp(a) test approx. ${euroEn(labor.checkMitLpa)}`,
    },
    typisch: {
      de: `ca. ${ganz(zweiTermineWeg.check + labor.check)}–${ganz(zweiTermineWeg.check + labor.checkMitLpa)} € zusammen`,
      en: `approx. €${ganz(zweiTermineWeg.check + labor.check)}–${ganz(zweiTermineWeg.check + labor.checkMitLpa)} in total`,
    },
    hinweis: {
      de: `Mit Ruhe-EKG auf Wunsch im ersten Termin kommen ca. ${euroDe(zweiTermine.ekg)} dazu.`,
      en: `A resting ECG on request in the first appointment adds approx. ${euroEn(zweiTermine.ekg)}.`,
    },
  },
  {
    slug: 'laborwerte-check',
    title: { de: 'Laborwerte-Check', en: 'Lab value check' },
    posten: [
      { label: { de: 'Ersttermin: welche Werte, Blutabnahme', en: 'First appointment: which values, blood sample' }, betrag: zweiTermine.werteErst },
      { label: { de: 'Befundtermin mit schriftlichem Werte-Bogen', en: 'Results appointment with written summary' }, betrag: zweiTermine.befund },
    ],
    praxis: zweiTermineWeg.werte,
    labor: {
      de: `je nach Wert, z. B. großes Blutbild ca. ${euroDe(laborwert.grossesBlutbild)}, Vitamin D ca. ${euroDe(laborwert.vitaminD)}, Ferritin mit kleinem Blutbild ca. ${euroDe(laborwert.ferritinMitBlutbild)}`,
      en: `depending on the value, e.g. full blood count approx. ${euroEn(laborwert.grossesBlutbild)}, vitamin D approx. ${euroEn(laborwert.vitaminD)}, ferritin with small blood count approx. ${euroEn(laborwert.ferritinMitBlutbild)}`,
    },
    typisch: {
      de: `ca. ${ganz(zweiTermineWeg.werte + laborwert.vitaminD)}–${ganz(zweiTermineWeg.werte + laborwert.vitaminD + laborwert.vitaminB12 + laborwert.ferritinMitBlutbild)} € zusammen, z. B. Vitamin D allein oder Vitamin D, B12 und Eisen`,
      en: `approx. €${ganz(zweiTermineWeg.werte + laborwert.vitaminD)}–${ganz(zweiTermineWeg.werte + laborwert.vitaminD + laborwert.vitaminB12 + laborwert.ferritinMitBlutbild)} in total, e.g. vitamin D alone or vitamin D, B12 and iron`,
    },
  },
  {
    slug: 'gewicht-und-stoffwechsel',
    title: { de: 'Gewicht und Stoffwechsel, Start', en: 'Weight and metabolism, start' },
    posten: [
      { label: { de: 'Ersttermin: Gespräch, Messung, Untersuchung, Blutabnahme', en: 'First appointment: consultation, measurements, examination, blood sample' }, betrag: zweiTermine.gewichtErst },
      { label: { de: 'Befund und persönlicher Plan', en: 'Results and personal plan' }, betrag: zweiTermine.befund },
    ],
    praxis: zweiTermineWeg.gewicht,
    labor: {
      de: `ca. ${euroDe(labor.gewichtStart)}, ab einem BMI von 30 mit Schilddrüsenwert ca. ${euroDe(labor.gewichtStartMitTsh)}`,
      en: `approx. ${euroEn(labor.gewichtStart)}, from a BMI of 30 with thyroid test approx. ${euroEn(labor.gewichtStartMitTsh)}`,
    },
    typisch: {
      de: `ca. ${ganz(zweiTermineWeg.gewicht + labor.gewichtStart)}–${ganz(zweiTermineWeg.gewicht + labor.gewichtStartMitTsh)} € für den Start`,
      en: `approx. €${ganz(zweiTermineWeg.gewicht + labor.gewichtStart)}–${ganz(zweiTermineWeg.gewicht + labor.gewichtStartMitTsh)} for the start`,
    },
    hinweis: {
      de: 'Weitere Termine zur Begleitung vereinbaren wir nur, wenn Sie das möchten; jeder wird einzeln abgerechnet.',
      en: 'Further follow-up appointments only if you wish; each is billed individually.',
    },
  },
  {
    slug: 'haare',
    title: { de: 'Haarsprechstunde', en: 'Hair consultation' },
    posten: [
      { label: { de: 'Haarsprechstunde: Gespräch, Untersuchung, Fotos, Blutabnahme', en: 'Hair consultation: consultation, examination, photos, blood sample' }, betrag: haarPreis.sprechstunde },
      { label: { de: 'Befund und Plan, in der Praxis oder am Telefon', en: 'Results and plan, at the practice or by phone' }, betrag: haarPreis.befund },
    ],
    praxis: zweiTermineWeg.haare,
    labor: {
      de: `ca. ${euroDe(haarPreis.labor)} für Ferritin, kleines Blutbild und TSH`,
      en: `approx. ${euroEn(haarPreis.labor)} for ferritin, basic blood count and TSH`,
    },
    typisch: {
      de: `ca. ${ganz(zweiTermineWeg.haare + haarPreis.labor)} € zusammen`,
      en: `approx. €${ganz(zweiTermineWeg.haare + haarPreis.labor)} in total`,
    },
    hinweis: {
      de: `Ein späterer Verlaufstermin kostet ca. ${euroDe(haarPreis.verlauf)}. PRP kostet ${caDe(prpPreis.sitzung)} je Sitzung, die Röhrchen eingeschlossen; das Honorar vereinbaren wir vorher schriftlich.`,
      en: `A later follow-up costs approx. ${euroEn(haarPreis.verlauf)}. PRP costs ${caEn(prpPreis.sitzung)} per session, including the tubes; we agree the fee in writing beforehand.`,
    },
  },
  {
    slug: 'maenner-check-up',
    title: { de: 'Check-up Männer 40+', en: 'Men’s check-up 40+' },
    posten: dreischritt,
    praxis: weg.check,
    labor: {
      de: `ca. ${euroDe(labor.maenner)}; weitere Werte nur nach gemeinsamer Beratung, dann bis ca. ${euroDe(labor.maennerMax)}`,
      en: `approx. ${euroEn(labor.maenner)}; further tests only after joint advice, then up to approx. ${euroEn(labor.maennerMax)}`,
    },
    typisch: {
      de: `ca. ${ganz(weg.check + labor.maenner)} € zusammen, mit allen Zusatzwerten und zweiter Blutabnahme bis ca. ${ganz(weg.check + termin.blutabnahme + labor.maennerMax)} €`,
      en: `approx. €${ganz(weg.check + labor.maenner)} in total, with all additional tests and a second blood sample up to approx. €${ganz(weg.check + termin.blutabnahme + labor.maennerMax)}`,
    },
    hinweis: {
      de: `Braucht ein Wert eine zweite Blutabnahme, kostet sie ${euroDe(termin.blutabnahme)}.`,
      en: `If a test needs a second blood sample, it costs ${euroEn(termin.blutabnahme)}.`,
    },
  },
  {
    slug: 'check-up-60-plus',
    title: { de: 'Check-up 60+', en: 'Check-up 60+' },
    posten: dreischritt,
    praxis: weg.check,
    labor: {
      de: `ca. ${euroDe(labor.check)}, mit einmaliger Lp(a)-Bestimmung ca. ${euroDe(labor.checkMitLpa)}; weitere Werte nur bei Anlass`,
      en: `approx. ${euroEn(labor.check)}, with a one-off Lp(a) test approx. ${euroEn(labor.checkMitLpa)}; further tests only if there is a reason`,
    },
    typisch: {
      de: `ca. ${ganz(weg.check + labor.check)}–${ganz(weg.check + labor.checkMitLpa)} € zusammen, ohne Impfungen`,
      en: `approx. €${ganz(weg.check + labor.check)}–${ganz(weg.check + labor.checkMitLpa)} in total, without vaccinations`,
    },
    hinweis: {
      de: `Impfung im Befundtermin ${euroDe(honorar.impfung)}, jede weitere ${euroDe(honorar.weitereImpfung)}, zuzüglich Impfstoff.`,
      en: `Vaccination in the results appointment ${euroEn(honorar.impfung)}, each further one ${euroEn(honorar.weitereImpfung)}, plus vaccine.`,
    },
  },
  {
    slug: 'wechseljahre',
    title: { de: 'Sprechstunde Wechseljahre, erstes Jahr', en: 'Menopause consultation, first year' },
    posten: [
      { label: { de: 'Erstgespräch mit Untersuchung', en: 'First consultation with examination' }, betrag: honorar.erstgespraech },
      { label: { de: 'Plantermin mit schriftlichem Plan', en: 'Plan appointment with written plan' }, betrag: honorar.planTermin },
      { label: { de: 'Verlaufstermin nach 8–12 Wochen', en: 'Follow-up after 8–12 weeks' }, betrag: honorar.verlauf },
      { label: { de: 'Verlaufstermin nach 6 Monaten', en: 'Follow-up after 6 months' }, betrag: honorar.verlauf },
    ],
    praxis: weg.wechseljahreJahr,
    labor: {
      de: `meist keins; wenn für Ihre Frage nötig, bis ca. ${euroDe(labor.wechseljahreBis)} und ${euroDe(termin.blutabnahme)} für die Blutabnahme`,
      en: `usually none; if needed for your question, up to approx. ${euroEn(labor.wechseljahreBis)} plus ${euroEn(termin.blutabnahme)} for the blood sample`,
    },
    typisch: {
      de: `ca. ${ganz(weg.wechseljahreJahr)} € im ersten Jahr, mit Labor bis ca. ${ganz(weg.wechseljahreJahr + termin.blutabnahme + labor.wechseljahreBis)} €`,
      en: `approx. €${ganz(weg.wechseljahreJahr)} in the first year, with lab tests up to approx. €${ganz(weg.wechseljahreJahr + termin.blutabnahme + labor.wechseljahreBis)}`,
    },
  },
  {
    slug: 'blutwerte-besprechen',
    title: { de: 'Blutwerte besprechen', en: 'Discuss your blood results' },
    posten: [{ label: { de: 'Gespräch mit schriftlichem Werte-Bogen', en: 'Consultation with written results sheet' }, betrag: honorar.planTermin }],
    praxis: honorar.planTermin,
    labor: {
      de: 'meist keins; Sie bringen Ihre Werte mit',
      en: 'usually none; you bring your results with you',
    },
    typisch: {
      de: `ca. ${ganz(honorar.planTermin)} €, mit befundbezogener Untersuchung ca. ${ganz(honorar.bilanz)} €`,
      en: `approx. €${ganz(honorar.planTermin)}, with a related examination approx. €${ganz(honorar.bilanz)}`,
    },
    hinweis: {
      de: `Befundbezogene Untersuchung heißt zum Beispiel Blutdruck messen nach einem Hinweis Ihrer Uhr; dann ${euroDe(honorar.bilanz)} statt ${euroDe(honorar.planTermin)}.`,
      en: `A related examination means, for example, measuring blood pressure after an alert from your watch; then ${euroEn(honorar.bilanz)} instead of ${euroEn(honorar.planTermin)}.`,
    },
  },
];

export const beispielkostenSeite = {
  meta: {
    title: { de: 'Was kostet Prävention bei Polaris? Beispielkosten nach GOÄ', en: 'What does preventive care cost at Polaris? Example fees under the GOÄ' },
    description: {
      de: 'Kosten je nachdem, was Sie brauchen: Beispielrechnungen nach GOÄ für Gesundheitscheck, Laborwerte-Check, Gewicht und Haarsprechstunde, Honorar und Labor getrennt.',
      en: 'Costs depend on what you need: example bills under the GOÄ for the health check-up, lab value check, weight and hair consultation, with medical fees and lab costs shown separately.',
    },
    eyebrow: { de: 'Prävention', en: 'Prevention' },
    lead: {
      de: 'Bei uns gibt es keine Pakete und keinen Festpreis. Was es kostet, hängt davon ab, was Sie brauchen. Damit Sie trotzdem planen können, zeigen wir hier typische Beispiele.',
      en: 'We have no packages and no fixed price. What it costs depends on what you need. So that you can still plan, we show typical examples here.',
    },
  },
  warumTitle: { de: 'Warum es keinen Festpreis gibt', en: 'Why there is no fixed price' },
  warum: {
    de: [
      'Ärztliche Leistungen rechnen wir nach der Gebührenordnung für Ärzte (GOÄ) ab, und zwar je Termin und nur für das, was stattfindet. Pauschalpreise erlaubt die GOÄ nicht.',
      'Jedes Angebot hat zwei Termine. Im Ersttermin legen wir gemeinsam fest, welche Werte bei Ihnen etwas aussagen, und nehmen Blut ab. Im zweiten Termin besprechen wir die Ergebnisse. Die voraussichtlichen Kosten erhalten Sie vorher schriftlich.',
      'Sie erhalten für jeden Termin eine eigene Rechnung, die Sie bei Ihrer Versicherung einreichen können.',
    ],
    en: [
      'We bill medical services under the German fee schedule for doctors (GOÄ), per appointment and only for what takes place. The GOÄ does not allow flat-rate prices.',
      'Every service has two appointments. In the first we decide together which tests tell us something in your case and take a blood sample. In the second we discuss the results. You receive the expected costs in writing beforehand.',
      'You receive a separate invoice for each appointment, which you can submit to your insurer.',
    ],
  },
  beispieleTitle: { de: 'Beispiele', en: 'Examples' },
  laborTitle: { de: 'Laborkosten', en: 'Lab costs' },
  laborText: {
    de: [
      'Die Blutwerte bestimmt ein ärztliches Labor. Einfache Werte wie Blutfette, Blutzucker-Langzeitwert, Nierenwert oder kleines Blutbild rechnen wir über unsere Laborgemeinschaft auf unserer Rechnung ab. Für die übrigen Werte stellt Ihnen das Labor seine Rechnung selbst. Wir nennen die Laborkosten getrennt und als Spanne: Sie hängen davon ab, welche Werte wir gemeinsam auswählen.',
      'Werte, die für Ihre Entscheidung nichts ändern, bestimmen wir nicht. Ein „Komplettlabor“ bieten wir bewusst nicht an.',
    ],
    en: [
      'Blood tests are carried out by a medical laboratory. Simple values such as blood lipids, long-term blood sugar, kidney value or basic blood count appear on our invoice via our laboratory association. For the other values the laboratory sends you its own invoice. We show lab costs separately and as a range: they depend on which tests we choose together.',
      'We do not measure values that would not change your decision. We deliberately do not offer a “full blood panel”.',
    ],
  },
  erstattungTitle: { de: 'Was die Versicherung erstattet', en: 'What your insurance reimburses' },
  erstattung: {
    de: [
      'Private Krankenversicherung und Beihilfe erstatten je nach Tarif. Vorsorge außerhalb der gesetzlichen Programme übernehmen viele Tarife nur teilweise. Leistungen, die Sie ohne medizinischen Anlass wünschen, kennzeichnen wir auf der Rechnung; sie werden meist nicht erstattet.',
      'Gesetzlich Versicherte zahlen bei uns selbst. Die Gesundheitsuntersuchung der Krankenkasse und die von der STIKO empfohlenen Impfungen erhalten Sie in Ihrer Hausarztpraxis in der Regel ohne Zuzahlung.',
    ],
    en: [
      'Private health insurance and Beihilfe reimburse depending on the tariff. Many tariffs only partly cover prevention outside the statutory programmes. We mark services you request without a medical reason on the invoice; they are usually not reimbursed.',
      'People with statutory insurance pay themselves. The health check offered by statutory insurers and STIKO-recommended vaccinations are usually available from your GP without co-payment.',
    ],
  },
  fussnote: {
    de: 'Beispiele zum Regelsatz der GOÄ, Stand November 2026. Berechnet wird nur, was stattfindet; weniger Termine oder Werte kosten weniger. Für Termine am Samstag sieht die GOÄ einen Zuschlag von ca. 6 € vor. Laborkosten sind Richtwerte; einfache Werte stehen auf unserer Rechnung, die übrigen berechnet das Labor selbst. Keine Umsatzsteuer.',
    en: 'Examples at the standard GOÄ rate, as of November 2026. You only pay for what takes place; fewer appointments or tests cost less. For appointments on a Saturday, the GOÄ provides for a surcharge of approx. €6. Lab costs are guide values; simple values appear on our invoice, the laboratory invoices the others itself. No VAT.',
  },
  faq: [
    {
      q: { de: 'Was kostet ein Check-up als Selbstzahler?', en: 'What does a self-pay check-up cost?' },
      a: {
        de: `Bei uns gibt es keinen Paketpreis. Für den Gesundheitscheck in zwei Terminen sind es typisch ca. ${ganz(zweiTermineWeg.check)} € ärztliches Honorar nach GOÄ, mit Ruhe-EKG ca. ${ganz(zweiTermineWeg.checkMitEkg)} €, dazu ca. ${labor.check}–${labor.checkMitLpa} € Laborkosten. Wie viel es bei Ihnen wird, hängt davon ab, welche Werte wir gemeinsam für sinnvoll halten.`,
        en: `We have no package price. For the health check-up in two appointments it is typically approx. €${ganz(zweiTermineWeg.check)} in medical fees under the GOÄ, with a resting ECG approx. €${ganz(zweiTermineWeg.checkMitEkg)}, plus approx. €${labor.check}–${labor.checkMitLpa} in lab costs. How much it is for you depends on which tests we agree make sense.`,
      },
    },
    {
      q: { de: 'Was kostet die Bestimmung von Lipoprotein(a)?', en: 'What does a lipoprotein(a) test cost?' },
      a: {
        de: `Beim Labor ca. ${labor.checkMitLpa - labor.check} €. Der Wert ist weitgehend erblich und muss in der Regel nur einmal bestimmt werden. Ob er für Sie sinnvoll ist, besprechen wir im Ersttermin.`,
        en: `Approx. €${labor.checkMitLpa - labor.check} at the laboratory. The value is largely inherited and usually only needs to be measured once. Whether it makes sense for you is something we discuss in the first appointment.`,
      },
    },
    {
      q: { de: 'Was kostet ein Vitamin-D-Test beim Arzt?', en: 'What does a vitamin D test at the doctor cost?' },
      a: {
        de: `Beim Labor ca. ${ganz(laborwert.vitaminD)} €, dazu ca. ${ganz(zweiTermineWeg.werte)} € ärztliches Honorar für beide Termine des Laborwerte-Checks. Ob die Messung für Sie etwas ändert, klären wir vorher im Gespräch; mehr dazu in unserem Ratgeber zu Vitamin D, B12 und Eisen.`,
        en: `Approx. €${ganz(laborwert.vitaminD)} at the laboratory, plus approx. €${ganz(zweiTermineWeg.werte)} in medical fees for both appointments of the lab value check. Whether testing makes a difference for you is something we clarify beforehand; see our guide on vitamin D, B12 and iron.`,
      },
    },
    {
      q: { de: 'Was kostet ein großes Blutbild?', en: 'What does a full blood count cost?' },
      a: {
        de: `Beim Labor ca. ${ganz(laborwert.grossesBlutbild)} €, dazu ca. ${ganz(zweiTermineWeg.werte)} € ärztliches Honorar für beide Termine des Laborwerte-Checks. Blutfette, Zucker, Leber- und Nierenwerte gehören nicht zum Blutbild und kosten zusätzlich.`,
        en: `Approx. €${ganz(laborwert.grossesBlutbild)} at the laboratory, plus approx. €${ganz(zweiTermineWeg.werte)} in medical fees for both appointments of the lab value check. Blood lipids, sugar, liver and kidney values are not part of the blood count and cost extra.`,
      },
    },
    {
      q: { de: 'Warum nennen Sie keinen Festpreis?', en: 'Why do you not quote a fixed price?' },
      a: {
        de: 'Weil die GOÄ je Leistung abrechnet und Pauschalen nicht erlaubt. Und weil nicht jeder dieselben Werte braucht. So zahlen Sie nur, was bei Ihnen stattfindet, und kennen die voraussichtlichen Kosten vor der Blutabnahme.',
        en: 'Because the GOÄ bills per service and does not allow flat rates. And because not everyone needs the same tests. That way you only pay for what takes place, and you know the expected costs before any blood is taken.',
      },
    },
    {
      q: { de: 'Wer berechnet die Laborwerte, und was erstattet die private Krankenversicherung?', en: 'Who bills the lab tests, and what does private health insurance reimburse?' },
      a: {
        de: 'Einfache Werte rechnen wir über unsere Laborgemeinschaft auf unserer Rechnung ab, die übrigen berechnet das Labor direkt. Private Krankenversicherung und Beihilfe erstatten je nach Tarif; fragen Sie im Zweifel vorher dort nach. Unsere Rechnungen und die Kosteninformation helfen Ihnen dabei.',
        en: 'Simple values appear on our invoice via our laboratory association; the laboratory bills the others directly. Private health insurance and Beihilfe reimburse depending on the tariff; if in doubt, ask them beforehand. Our invoices and cost information help you with this.',
      },
    },
    {
      q: { de: 'Muss ich vorher bezahlen?', en: 'Do I have to pay in advance?' },
      a: {
        de: 'In der Regel nicht. Sie bekommen nach jedem Termin eine eigene Rechnung. Vereinbaren wir für Nüchternwerte einen eigenen Termin zur Blutabnahme, zahlen Sie die Blutabnahme und die Laborwerte, die wir selbst abrechnen, im ersten Termin an. Die Anzahlung wird auf der Rechnung vom Tag der Blutabnahme angerechnet.',
        en: 'Usually not. You receive a separate invoice after each appointment. If we arrange a separate appointment to take blood for fasting values, you pay a deposit for the blood sample and the lab tests we bill ourselves at the first appointment. The deposit is credited on the invoice from the day of the blood sample.',
      },
    },
  ],
};
