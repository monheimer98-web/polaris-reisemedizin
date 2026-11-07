/**
 * Fachseite „Ärztliche Bescheinigung für Flug und Kreuzfahrt“ (DE/EN). Nur Fluggäste
 * und Reisende. Keine festen Fristen nach Operation oder Herzinfarkt, keine Zusagen
 * zur Bearbeitungszeit. Gesellschaften im Text ohne Namen, Belege in der Quellenliste.
 */
import type { ClinicalPage } from '../types';
import { KOSTEN_HINWEIS } from './fach-texte';
import { AUSLAND_GEPRUEFT } from './stand';

export const flugKreuzfahrtAttestPage: ClinicalPage = {
  meta: {
    title: {
      de: 'Flugattest und Kreuzfahrt-Formular vom Arzt',
      en: 'Medical certificate for flights and cruises',
    },
    description: {
      de: 'Fluggesellschaft oder Reederei verlangt ein ärztliches Formular? Wir untersuchen Sie und füllen es aus, soweit wir das bestätigen können. In Langenfeld.',
      en: 'Airline or cruise line asking for a medical form? We examine you and complete it as far as we can medically confirm. Private practice in Langenfeld.',
    },
    eyebrow: { de: 'Ausland', en: 'Abroad' },
    lead: {
      de: 'Fluggesellschaften und Reedereien verlangen manchmal eine ärztliche Bescheinigung oder ein eigenes Formular. Wir untersuchen Sie und füllen es aus, soweit wir das bestätigen können. Das gilt für Fluggäste und Reisende, nicht für Besatzungen oder die Arbeit an Bord.',
      en: 'Airlines and cruise lines sometimes ask for a medical certificate or their own form. We examine you and complete it as far as we can confirm the details. This applies to passengers and travellers, not to crews or work on board.',
    },
  },
  sections: [
    {
      id: 'flug',
      heading: {
        de: 'Wann Fluggesellschaften ein Attest oder das Formular MEDIF verlangen',
        en: 'When airlines ask for a certificate or the MEDIF form',
      },
      body: {
        de: [
          'Das legt jede Gesellschaft selbst fest. MEDIF ist das Formular, mit dem eine Fluggesellschaft medizinische Angaben für die Beförderung einholt. Manche Gesellschaften nehmen nur ihr eigenes Formular an.',
          'Fragen Sie deshalb zuerst Ihre Gesellschaft, ob sie eine Bescheinigung braucht, welches Formular gilt und bis wann es vorliegen muss.',
        ],
        en: [
          'Each airline decides for itself. MEDIF is the form an airline uses to obtain medical information for carriage. Some airlines accept only their own form.',
          'Please therefore first ask your airline whether it needs a certificate, which form applies and by when it has to be submitted.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Stand: Oktober 2026', en: 'As of: October 2026' },
        text: {
          de: 'Die Beispiele auf dieser Seite zeigen, wie Regeln aussehen können. Für Ihre Reise gelten die aktuellen Bedingungen Ihrer Gesellschaft.',
          en: 'The examples on this page show what rules can look like. Your trip follows the current conditions of your airline or cruise line.',
        },
      },
    },
    {
      id: 'beispiele',
      heading: {
        de: 'Beispiele: Schwangerschaft, Operation, chronische Erkrankung',
        en: 'Examples: pregnancy, surgery, chronic illness',
      },
      body: {
        de: ['Häufige Anlässe sind:'],
        en: ['Common reasons are:'],
      },
      list: {
        de: [
          'Schwangerschaft: Die Grenzen unterscheiden sich. Eine Fluggesellschaft verlangt zum Beispiel ab der 29. Woche eine schriftliche ärztliche Bestätigung und zählt dabei die Woche beim Rückflug.',
          'Operation oder akute Erkrankung: Gesellschaften nennen eigene Zeitfenster. Feste Fristen geben wir hier bewusst nicht an. Bitte fragen Sie Ihre Gesellschaft und die behandelnde Praxis.',
          'Chronische Erkrankung oder medizinisches Gerät: Ein Formular kann etwa nötig sein, wenn Sie an Bord zusätzlichen Sauerstoff oder ein Gerät brauchen.',
        ],
        en: [
          'Pregnancy: the limits differ. One airline, for example, requires written medical confirmation from week 29, counting the week of the return flight.',
          'Surgery or acute illness: airlines state their own time windows. We deliberately give no fixed periods here. Please ask your airline and the practice treating you.',
          'Chronic illness or medical device: a form may be necessary, for example if you need additional oxygen or a device on board.',
        ],
      },
      callout: {
        variant: 'caution',
        text: {
          de: 'Nach einer Operation oder akuten Erkrankung kennt die behandelnde Praxis oder Klinik den Verlauf am besten und ist oft die bessere Stelle. In der Schwangerschaft gilt das für Ihre frauenärztliche Praxis.',
          en: 'After surgery or an acute illness, the practice or hospital treating you knows the course best and is often the better place to go. In pregnancy, the same applies to your gynaecology practice.',
        },
      },
    },
    {
      id: 'kreuzfahrt',
      heading: {
        de: 'Kreuzfahrt: das Gesundheitsformular der Reederei',
        en: 'Cruises: the cruise line’s health form',
      },
      body: {
        de: [
          'Auch Reedereien setzen eigene Grenzen und Formulare. Bei einer Schwangerschaft kann die Woche am Reiseende entscheiden, nicht die am Beginn. Eine Reederei nimmt zum Beispiel nicht mit, wer vor oder während der Fahrt die 24. Woche erreicht.',
          'Verlangt eine Reederei ausdrücklich eine Bescheinigung aus einem bestimmten Fachgebiet, ist die entsprechende Fachpraxis zuständig. Bitte lesen Sie das Formular deshalb vor dem Termin.',
        ],
        en: [
          'Cruise lines also set their own limits and forms. In pregnancy, the week at the end of the trip may decide, not the week at the start. One cruise line, for example, does not carry anyone who reaches week 24 before or during the cruise.',
          'If a cruise line expressly asks for a certificate from a particular specialty, a practice in that field is responsible. Please therefore read the form before your appointment.',
        ],
      },
    },
    {
      id: 'mitbringen',
      heading: { de: 'Was Sie mitbringen', en: 'What to bring' },
      body: {
        de: ['Für den Termin brauchen wir:'],
        en: ['For the appointment we need:'],
      },
      list: {
        de: [
          'das Formular Ihrer Gesellschaft mit allen Seiten',
          'Buchung oder Reisedaten für Hin- und Rückreise',
          'Arztbriefe, Befunde und eine Liste Ihrer Medikamente',
          'Ihren Mutterpass, wenn Sie schwanger sind',
          'die Frist, bis wann die Bescheinigung vorliegen muss',
        ],
        en: [
          'your airline or cruise line’s form with all its pages',
          'your booking or travel dates for outward and return journeys',
          'doctor’s letters, results and a list of your medicines',
          'your maternity record if you are pregnant',
          'the deadline by which the certificate has to be submitted',
        ],
      },
    },
    {
      id: 'grenzen',
      heading: {
        de: 'Was wir ohne Untersuchung nicht bestätigen',
        en: 'What we do not confirm without an examination',
      },
      body: {
        de: [
          'Wir bestätigen nur, was wir selbst untersucht haben oder was uns vorliegt. Ohne Untersuchung treffen wir keine Aussage dazu, ob Sie reisen können. Die Bescheinigung nennt das Reisedatum und trägt das echte Datum der Untersuchung.',
          'Untersuchungen für Flugbesatzungen und für die Arbeit an Bord von Schiffen führen wir nicht durch. Dafür sind eigens zugelassene Stellen zuständig.',
        ],
        en: [
          'We confirm only what we have examined ourselves or what is available to us. Without an examination, we make no statement on whether you can travel. The certificate names the travel date and carries the actual date of the examination.',
          'We do not carry out examinations for flight crews or for work on board ships. Specially approved providers are responsible for these.',
        ],
      },
    },
    {
      id: 'fristen',
      heading: {
        de: 'Fristen: wie alt das Attest sein darf',
        en: 'Deadlines: how old the certificate may be',
      },
      body: {
        de: [
          'Das steht im Formular oder in den Bedingungen Ihrer Gesellschaft. Eine Fluggesellschaft verlangt zum Beispiel, dass das Formular bei einer Schwangerschaft beim Abflug höchstens zehn Tage alt ist. Wählen Sie den Termin deshalb nicht zu früh, aber auch nicht zu knapp. Eine Zusage zu einem bestimmten Termin vor dem Abflug können wir nicht geben.',
          `Sie finden uns am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath. Aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen sind wir gut erreichbar. ${KOSTEN_HINWEIS.de}`,
        ],
        en: [
          'This is stated on the form or in the conditions of your airline or cruise line. One airline, for example, requires that in pregnancy the form is no more than ten days old at departure. Please therefore choose your appointment neither too early nor too late. We cannot promise a particular appointment before departure.',
          `You will find us at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath, easy to reach from Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen. ${KOSTEN_HINWEIS.en}`,
        ],
      },
      links: [{ label: { de: 'Kosten', en: 'Fees' }, path: '/kosten#ausland' }],
    },
  ],
  faq: [
    {
      q: { de: 'Wann brauche ich ein Flugattest?', en: 'When do I need a fit-to-fly certificate?' },
      a: {
        de: 'Das legt Ihre Fluggesellschaft fest. Häufige Anlässe sind eine fortgeschrittene Schwangerschaft, eine kürzliche Operation oder Erkrankung und medizinische Geräte an Bord. Fragen Sie bitte zuerst bei Ihrer Gesellschaft nach.',
        en: 'Your airline decides. Common reasons are advanced pregnancy, recent surgery or illness, and medical devices on board. Please ask your airline first.',
      },
    },
    {
      q: { de: 'Wird für das Attest untersucht?', en: 'Is an examination carried out for the certificate?' },
      a: {
        de: 'Ja, wenn eine Aussage dazu verlangt wird, ob Sie reisen können. Ohne Untersuchung bestätigen wir das nicht. Reine Angaben aus vorgelegten Unterlagen übernehmen wir als solche.',
        en: 'Yes, if a statement on whether you can travel is required. We do not confirm this without an examination. We take details from documents you present as exactly that.',
      },
    },
    {
      q: {
        de: 'Füllt auch meine Hausarztpraxis das Formular aus?',
        en: 'Can my family doctor complete the form as well?',
      },
      a: {
        de: 'In der Regel ja, sofern Ihre Gesellschaft nichts anderes vorgibt. Nach einer Operation oder Erkrankung ist die behandelnde Praxis oft sogar die bessere Stelle.',
        en: 'As a rule yes, unless your airline or cruise line specifies otherwise. After surgery or illness, the practice treating you is often the better place to go.',
      },
    },
    {
      q: {
        de: 'Meine Reederei verlangt ein Formular. Können Sie es ausfüllen?',
        en: 'My cruise line requires a form. Can you complete it?',
      },
      a: {
        de: 'Ja, soweit wir die Angaben bestätigen können und die Reederei keine Bescheinigung aus einem bestimmten Fachgebiet verlangt. Bitte bringen Sie das Formular und Ihre Reisedaten mit.',
        en: 'Yes, as far as we can confirm the details and the cruise line does not ask for a certificate from a particular specialty. Please bring the form and your travel dates.',
      },
    },
    {
      q: {
        de: 'Ab wann brauche ich in der Schwangerschaft ein Attest?',
        en: 'From when do I need a certificate in pregnancy?',
      },
      a: {
        de: 'Das legt jede Gesellschaft selbst fest. Oft zählt die Woche beim Rückflug oder am Reiseende. Für Fragen zur Schwangerschaft ist Ihre frauenärztliche Praxis die erste Stelle.',
        en: 'Each company decides for itself. The week of the return flight or the end of the trip often counts. Your gynaecology practice is the first place to go for questions about your pregnancy.',
      },
    },
  ],
  termine: [
    { label: { de: 'Termin für das Formular der Gesellschaft buchen', en: 'Book an appointment for your airline or cruise line’s form' }, art: 'nachweis-status' },
    { label: { de: 'Termin für eine kurze Bestätigung buchen', en: 'Book an appointment for a short confirmation' }, art: 'nachweis-kurz' },
  ],
  related: [
    { label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' },
    { label: { de: 'Reisetipps', en: 'Travel tips' }, path: '/reisetipps' },
    { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten#ausland' },
  ],
  sourceIds: ['condorMedical', 'princessSchwangerschaft'],
  lastReviewed: AUSLAND_GEPRUEFT,
};
