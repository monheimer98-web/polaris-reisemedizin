/**
 * Fachseite „Auslandsjahr und Schüleraustausch“ (DE/EN). Spricht Eltern und
 * Jugendliche ab 14 an, nie Kinder unter 14 (§ 11 Abs. 1 Nr. 12 HWG).
 * Einwilligung nach der Linie der Ärztekammer Nordrhein; Altersangaben sind Richtwerte.
 */
import type { ClinicalPage } from '../types';
import { ANERKENNUNG, KEINE_FORMULARE, KOSTEN_HINWEIS, VISA_GRENZE } from './fach-texte';
import { AUSLAND_GEPRUEFT, NACHWEISE_IM_ANGEBOT } from './stand';

export const auslandsjahrPage: ClinicalPage = {
  meta: {
    title: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Auslandsjahr und Schüleraustausch: Impfungen und Gesundheitsformular'
        : 'Auslandsjahr und Schüleraustausch: Impfungen und Impfpass',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Exchange year abroad: vaccinations and health form'
        : 'Exchange year abroad: vaccinations and vaccination record',
    },
    description: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Schüleraustausch oder High School im Ausland: Wir prüfen den Impfpass, planen Impfungen und füllen das Formular aus, soweit wir es prüfen können. Langenfeld.'
        : 'Schüleraustausch oder High School im Ausland: Wir prüfen den Impfpass und planen fehlende Impfungen nach den Vorgaben Ihrer Organisation. Langenfeld.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'School exchange or high school abroad: we review your record, plan vaccinations and complete the form as far as we can verify it. In Langenfeld.'
        : 'School exchange or high school abroad: we review your record and plan missing vaccinations around your organisation’s requirements. In Langenfeld.',
    },
    eyebrow: { de: 'Ausland', en: 'Abroad' },
    lead: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Austauschorganisationen und Gastschulen verlangen oft einen Impfnachweis und ein ärztliches Formular. Wir prüfen den Impfpass, planen fehlende Impfungen und füllen das Formular aus, soweit wir die Angaben prüfen können. Diese Seite richtet sich an Eltern und an Jugendliche ab 14 Jahren.'
        : `Austauschorganisationen und Gastschulen verlangen oft einen Impfnachweis und ein ärztliches Formular. Wir prüfen den Impfpass und planen fehlende Impfungen. ${KEINE_FORMULARE.de} Diese Seite richtet sich an Eltern und an Jugendliche ab 14 Jahren.`,
      en: NACHWEISE_IM_ANGEBOT
        ? 'Exchange organisations and host schools often ask for proof of vaccination and a medical form. We review the vaccination record, plan any missing vaccinations and complete the form as far as we can verify the details. This page is for parents and for young people aged 14 and over.'
        : `Exchange organisations and host schools often ask for proof of vaccination and a medical form. We review the vaccination record and plan any missing vaccinations. ${KEINE_FORMULARE.en} This page is for parents and for young people aged 14 and over.`,
    },
  },
  sections: [
    {
      id: 'formular',
      heading: {
        de: 'Maßgeblich ist das Formular Ihrer Organisation oder Gastschule',
        en: 'What counts is the form from your organisation or host school',
      },
      body: {
        de: [
          'Welche Nachweise nötig sind, legen vor allem Schulen, Schulbezirke, Bundesstaaten und Austauschorganisationen fest. Das US-Regelwerk für Austauschschüler enthält selbst keine Impfvorgabe. Zwei Beispiele zeigen, was es dennoch geben kann:',
        ],
        en: [
          'The proof required is set mainly by schools, school districts, states and exchange organisations. The US regulation for exchange students itself contains no vaccination requirement. Two examples show what may still apply:',
        ],
      },
      list: {
        de: [
          'USA: Ein Schulbezirk verlangt einen schriftlichen Nachweis, unter anderem zu Diphtherie, Tetanus und Keuchhusten. Ohne Nachweis gibt es dort keinen Schulzugang.',
          'Kanada: In Ontario schreibt das Schulgesetz Impfungen gegen mehrere Erkrankungen vor, etwa Masern, Mumps, Röteln und Meningokokken, sofern keine gültige Befreiung vorliegt.',
        ],
        en: [
          'USA: one school district requires written proof, including for diphtheria, tetanus and whooping cough. Without proof there is no admission to school there.',
          'Canada: in Ontario, school legislation requires vaccination against several diseases, such as measles, mumps, rubella and meningococcal disease, unless a valid exemption applies.',
        ],
      },
      callout: {
        variant: 'info',
        text: {
          de: 'Das sind Beispiele, keine allgemeine Regel. Bringen Sie bitte das aktuelle Formular Ihrer Organisation oder Gastschule mit dem Impfpass zum Termin mit.',
          en: 'These are examples, not a general rule. Please bring the current form from your organisation or host school and the vaccination record to the appointment.',
        },
      },
    },
    {
      id: 'zeitplan',
      heading: {
        de: 'Zeitplan von der Bewerbung bis zur Abreise',
        en: 'Timeline from application to departure',
      },
      body: {
        de: ['Planen Sie mehrere Monate vor der Abgabefrist ein, weil Impfserien und Blutwerte Zeit brauchen. Die Schritte im Überblick:'],
        en: ['Allow several months before the deadline, because vaccine series and blood tests take time. The steps at a glance:'],
      },
      list: {
        de: [
          'Bei der Bewerbung: Fragen Sie die Organisation nach dem Formular und der Abgabefrist. Manche Schulbezirke setzen Organisationen schon Monate vor Schulbeginn eine Frist.',
          NACHWEISE_IM_ANGEBOT
            ? 'Mehrere Monate vor der Abgabefrist: Impfpass und Formular prüfen lassen.'
            : 'Mehrere Monate vor der Abgabefrist: Impfpass mit den Vorgaben im Formular abgleichen lassen.',
          'Danach: fehlende Impfungen planen.',
          'Spätestens zwei Wochen vor Reisebeginn: Impfserien abschließen. Das empfehlen STIKO und DTG.',
        ],
        en: [
          'When applying: ask the organisation for the form and the deadline. Some school districts set organisations a deadline months before school starts.',
          NACHWEISE_IM_ANGEBOT
            ? 'Several months before the deadline: have the record and the form reviewed.'
            : 'Several months before the deadline: have your record compared with the requirements on the form.',
          'After that: plan any missing vaccinations.',
          'At least two weeks before the trip: complete vaccine series. STIKO and DTG recommend this.',
        ],
      },
    },
    {
      id: 'impfpass',
      heading: {
        de: 'Impfpass prüfen und Lücken schließen',
        en: 'Reviewing the record and closing gaps',
      },
      body: {
        de: [
          'Wir vergleichen den Impfpass mit dem Formular und mit den Empfehlungen der STIKO für das Alter. Für längere Aufenthalte von Jugendlichen weist die STIKO außerdem auf die Empfehlungen der Zielländer hin, etwa zu Meningokokken. Was davon infrage kommt, besprechen wir im Gespräch.',
        ],
        en: [
          'We compare the record with the form and with the STIKO recommendations for the age group. For longer stays by young people, STIKO also points to the recommendations of the destination countries, for example on meningococcal disease. We discuss what may apply during the consultation.',
        ],
      },
      links: [
        { label: { de: 'Wann vor der Reise impfen', en: 'When to get vaccinated before a trip' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
        { label: { de: 'Reiseimpfungen', en: 'Travel vaccinations' }, path: '/leistungen/reiseimpfungen' },
      ],
    },
    {
      id: 'laender',
      heading: {
        de: 'USA, Kanada und andere Länder: worauf es im Formular ankommt',
        en: 'USA, Canada and other countries: what matters on the form',
      },
      body: {
        de: [
          NACHWEISE_IM_ANGEBOT
            ? 'Häufig geht es um vollständige Impfdaten, englische Bezeichnungen sowie Unterschrift und Praxisstempel. Auf Grundlage des Impfausweises füllen wir das Formular auf Englisch aus. Felder, die wir nicht prüfen können, lassen wir frei.'
            : 'Häufig geht es um vollständige Impfdaten, englische Bezeichnungen sowie Unterschrift und Praxisstempel.',
          'Verlangt das Formular einen Laborbefund, klären Sie bitte vorher, welcher Befund gemeint ist und wie alt er sein darf, und rufen Sie uns dann an.',
          'Ein Visum kann zusätzlich eine eigene Untersuchung verlangen. Das ist etwas anderes als das Formular der Schule.',
        ],
        en: [
          NACHWEISE_IM_ANGEBOT
            ? 'It is often about complete vaccination dates, English names, a signature and a practice stamp. Based on the vaccination record, we complete the form in English. We leave fields we cannot verify blank.'
            : 'It is often about complete vaccination dates, English names, a signature and a practice stamp.',
          'If the form asks for a laboratory result, please find out beforehand which result is meant and how old it may be, and then call us.',
          'A visa may also require its own examination. That is different from the school form.',
        ],
      },
      callout: { variant: 'important', text: VISA_GRENZE },
      links: NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : [],
    },
    {
      id: 'minderjaehrige',
      heading: {
        de: 'Bei Minderjährigen: Einwilligung und Begleitung',
        en: 'Under 18: consent and who comes along',
      },
      body: {
        de: [NACHWEISE_IM_ANGEBOT ? 'Ein Formular ersetzt das Gespräch nicht. So gehen wir je nach Alter vor:' : 'So gehen wir je nach Alter vor:'],
        en: [NACHWEISE_IM_ANGEBOT ? 'A form does not replace the conversation. This is how we proceed, depending on age:' : 'This is how we proceed, depending on age:'],
      },
      list: {
        de: [
          'Unter 14 Jahren: Die Eltern entscheiden. Ein Elternteil kommt mit, die Zustimmung des anderen bringen Sie bitte schriftlich mit.',
          '14 und 15 Jahre: In der Regel entscheiden die Eltern, und die Jugendlichen stimmen zu. Bitte bringen Sie die schriftliche Einwilligung beider Sorgeberechtigten mit. Ein Elternteil begleitet den Termin.',
          '16 und 17 Jahre: In der Regel entscheiden Jugendliche selbst, wenn sie Nutzen und Risiken verstanden haben. Das klären wir im Gespräch.',
          'Bei Zweifeln verschieben wir den Termin und beziehen die Eltern ein. Sind sich Sorgeberechtigte uneinig, impfen wir nicht.',
        ],
        en: [
          'Under 14: parents decide. One parent comes along; please bring the written agreement of the other parent.',
          '14 and 15: as a rule, parents decide and the young person agrees. Please bring the written consent of both people with parental responsibility. One parent attends the appointment.',
          '16 and 17: as a rule, young people decide for themselves if they have understood the benefits and risks. We establish this in the conversation.',
          'If in doubt, we postpone the appointment and involve the parents. If those with parental responsibility disagree, we do not vaccinate.',
        ],
      },
      callout: {
        variant: 'info',
        text: {
          de: 'Die Altersangaben sind Richtwerte. Am Ende zählt, ob die oder der Jugendliche die Entscheidung versteht. Bei Jugendlichen, die selbst einwilligen können, gilt die Schweigepflicht auch gegenüber den Eltern. Klären Sie bitte vorab, wer die Rechnung erhält. Hat nur eine Person das Sorgerecht, sagen Sie uns das bitte. Das Einwilligungsformular laden Sie unten herunter, oder Sie rufen uns an und wir senden es Ihnen zu.',
          en: 'The ages are guidelines. What matters in the end is whether the young person understands the decision. For young people who can consent for themselves, confidentiality also applies towards their parents. Please agree beforehand who receives the invoice. If only one person has parental responsibility, please tell us. Download the consent form (in German) below, or call us and we will send it to you.',
        },
      },
      links: [
        {
          label: { de: 'Einwilligungsformular (PDF)', en: 'Consent form (PDF, in German)' },
          path: '/dokumente/einwilligung-sorgeberechtigte.pdf',
        },
      ],
    },
    {
      id: 'anfahrt',
      heading: { de: 'Anfahrt aus der Region', en: 'Getting here' },
      body: {
        de: [
          'Sie finden uns am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath. Auch aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen kommen Sie gut zu uns.',
          KOSTEN_HINWEIS.de,
        ],
        en: [
          'You will find us at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath. We are also easy to reach from Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen.',
          KOSTEN_HINWEIS.en,
        ],
      },
      links: [
        { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten' },
        { label: { de: 'Kontakt', en: 'Contact' }, path: '/kontakt' },
      ],
    },
  ],
  faq: [
    {
      q: {
        de: 'Welche Impfungen brauche ich für ein Auslandsjahr in den USA?',
        en: 'Which vaccinations do I need for an exchange year in the USA?',
      },
      a: {
        de: 'Das hängt von Bundesstaat, Schulbezirk und Organisation ab. Oft geht es um Standardimpfungen, zum Beispiel gegen Diphtherie, Tetanus, Keuchhusten, Polio und Masern. Verbindlich ist Ihr Formular.',
        en: 'That depends on the state, the school district and the organisation. It is often about standard vaccinations, for example against diphtheria, tetanus, whooping cough, polio and measles. Your form is what counts.',
      },
    },
    ...(NACHWEISE_IM_ANGEBOT
      ? [
        {
          q: {
            de: 'Füllen Sie das Gesundheitsformular meiner Austauschorganisation aus?',
            en: 'Will you complete the health form from my exchange organisation?',
          },
          a: {
            de: `Ja, soweit wir die Angaben prüfen können. Verlangt es eine körperliche Untersuchung, sagen Sie uns das bitte vorher, denn dafür brauchen wir mehr Zeit. ${ANERKENNUNG.de}`,
            en: `Yes, as far as we can verify the details. If it asks for a physical examination, please let us know beforehand, as this takes more time. ${ANERKENNUNG.en}`,
          },
        },
        ]
      : []),
    {
      q: { de: 'Muss ein Elternteil mitkommen?', en: 'Does a parent have to come along?' },
      a: {
        de: 'Unter 16 Jahren in der Regel ja, und wir brauchen die schriftliche Einwilligung beider Sorgeberechtigten. Ab 16 Jahren können Jugendliche in der Regel selbst entscheiden, wenn sie Nutzen und Risiken verstanden haben.',
        en: 'Under 16, generally yes, and we need the written consent of both people with parental responsibility. From 16, young people can generally decide for themselves if they have understood the benefits and risks.',
      },
    },
    {
      q: {
        de: 'Reicht der gelbe Impfausweis oder brauche ich einen Nachweis auf Englisch?',
        en: 'Is the yellow vaccination booklet enough or do I need proof in English?',
      },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Das entscheidet Ihre Organisation oder Schule. Auf Grundlage Ihres Impfausweises können wir das Formular ausfüllen oder eine englische Bescheinigung ausstellen. Das ist keine beglaubigte Übersetzung.'
          : 'Das entscheidet Ihre Organisation oder Schule. Fragen Sie am besten dort nach, welche Nachweise anerkannt werden.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'Your organisation or school decides. Based on your vaccination booklet, we can complete the form or issue an English certificate. That is not a certified translation.'
          : 'Your organisation or school decides. It is best to ask there which records are accepted.',
      },
    },
    {
      q: {
        de: 'Wie früh vor der Abgabefrist sollten wir kommen?',
        en: 'How long before the deadline should we come?',
      },
      a: {
        de: 'Mehrere Monate vorher, weil manche Impfserien länger dauern und Befunde nur begrenzt gültig sein können. Impfserien sollten spätestens zwei Wochen vor Reisebeginn abgeschlossen sein.',
        en: 'Several months beforehand, because some vaccine series take longer and results may be valid only for a limited time. Vaccine series should be completed at least two weeks before the trip.',
      },
    },
    {
      q: {
        de: 'Zahlt die Krankenkasse Impfungen für den Austausch?',
        en: 'Does health insurance pay for vaccinations for the exchange?',
      },
      a: {
        de: 'Standardimpfungen sind für gesetzlich Versicherte in Kassenpraxen meist eine Kassenleistung, bei uns als Privatpraxis nicht. Ob Ihre Krankenkasse für den Austausch weitere Impfungen übernimmt, klären Sie bitte vorab mit ihr.',
        en: 'For people with statutory insurance, standard vaccinations are usually covered in statutory-insurance practices, but not with us as a private practice. Please check with your insurer beforehand whether it covers further vaccinations for the exchange.',
      },
    },
  ],
  termine: [
    { label: { de: 'Beratung vor dem Auslandsjahr buchen', en: 'Book advice before your exchange year' }, art: 'langzeit' },
    ...(NACHWEISE_IM_ANGEBOT
      ? [
          { label: { de: 'Nur Formular prüfen und ausfüllen lassen', en: 'Only have the form reviewed and completed' }, art: 'nachweis-kurz' },
          { label: { de: 'Termin für Formular mit Untersuchung buchen', en: 'Book an appointment for a form with examination' }, art: 'nachweis-status' },
        ]
      : [{ label: { de: 'Impfpass prüfen lassen', en: 'Have your vaccination record reviewed' }, art: 'impfpass-check' }]),
  ],
  related: [
    ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : []),
    { label: { de: 'Au-pair im Ausland', en: 'Au pair abroad' }, path: '/ausland/au-pair' },
    { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten' },
    { label: { de: 'Was kostet eine Reiseimpfung?', en: 'What does a travel vaccination cost?' }, path: '/ratgeber/reiseimpfung-kosten-krankenkasse' },
  ],
  sourceIds: [
    'cfrHighSchool',
    'isd411Austausch',
    'ontarioIspa',
    'stikoReise2026',
    'stikoImpfempfehlungen',
    'bgbEinwilligung',
    'aeknoMinderjaehrige',
    'sgb5Schutzimpfungen',
  ],
  lastReviewed: AUSLAND_GEPRUEFT,
};
