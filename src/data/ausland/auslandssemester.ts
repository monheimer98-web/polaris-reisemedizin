/**
 * Fachseite „Auslandssemester: Impfnachweis und Immunization Form“ (DE/EN).
 * Frist und Art eines Befunds kommen immer aus dem Formular der Einrichtung.
 * Bewusst ohne Testnamen und ohne Beträge.
 */
import type { ClinicalPage } from '../types';
import { ANERKENNUNG, KEINE_FORMULARE, KOSTEN_HINWEIS, VISA_GRENZE } from './fach-texte';
import { AUSLAND_GEPRUEFT, NACHWEISE_IM_ANGEBOT } from './stand';

export const auslandssemesterPage: ClinicalPage = {
  meta: {
    title: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Auslandssemester: Impfnachweis und Immunization Form'
        : 'Auslandssemester: Impfpass und fehlende Impfungen',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Study abroad: immunization form and vaccination record'
        : 'Study abroad: vaccination record and missing vaccinations',
    },
    description: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Auslandssemester, PJ oder Praktikum: Wir prüfen den Impfpass und füllen das Formular der Gasthochschule aus, soweit wir es prüfen können. In Langenfeld.'
        : 'Auslandssemester, PJ oder Praktikum: Wir prüfen den Impfpass und planen fehlende Impfungen nach den Vorgaben der Gasthochschule. In Langenfeld.',
      en: NACHWEISE_IM_ANGEBOT
        ? 'Immunization form for a university abroad? We review your record and complete the form as far as we can verify it. Private practice in Langenfeld.'
        : 'Study abroad, clinical elective or internship: we review your record and plan missing vaccinations around your host’s requirements. In Langenfeld.',
    },
    eyebrow: { de: 'Ausland', en: 'Abroad' },
    lead: {
      de: NACHWEISE_IM_ANGEBOT
        ? 'Viele Hochschulen im Ausland verlangen vor dem ersten Semester ein Gesundheitsformular, oft Immunization Form genannt. Wir prüfen Ihren Impfpass, planen fehlende Impfungen und füllen das Formular aus, soweit wir die Angaben prüfen können. Das gilt auch für PJ, Famulatur und Praktikum.'
        : `Viele Hochschulen im Ausland verlangen vor dem ersten Semester ein Gesundheitsformular, oft Immunization Form genannt. Wir prüfen Ihren Impfpass und planen fehlende Impfungen, auch für PJ, Famulatur und Praktikum. ${KEINE_FORMULARE.de}`,
      en: NACHWEISE_IM_ANGEBOT
        ? 'Many universities abroad ask for a health form before your first semester, often called an immunization form. We review your vaccination record, plan any missing doses and complete the form as far as we can verify the details. This also applies to clinical electives and internships.'
        : `Many universities abroad ask for a health form before your first semester, often called an immunization form. We review your vaccination record and plan any missing doses, also for clinical electives and internships. ${KEINE_FORMULARE.en}`,
    },
  },
  sections: [
    {
      id: 'vorgaben',
      heading: {
        de: 'Was Gasthochschulen verlangen: jede hat eigene Fristen',
        en: 'What host universities ask for: each has its own deadlines',
      },
      body: {
        de: [
          'Eine einheitliche Regel gibt es nicht. Maßgeblich ist immer das aktuelle Formular Ihrer Hochschule oder Klinik. Veröffentlichte Vorgaben aus den USA zeigen, wie unterschiedlich das sein kann:',
        ],
        en: [
          'There is no single rule. What counts is always the current form from your university or hospital. Published requirements from the USA show how much they can differ:',
        ],
      },
      list: {
        de: [
          'Ein Laborbefund darf je nach Hochschule höchstens drei Monate oder bis zu zwölf Monate alt sein.',
          'Für dieselbe Erkrankung gelten teils entweder dokumentierte Impfungen oder ein Blutwert als Nachweis.',
          'Manche Hochschulen untersuchen erst nach der Ankunft vor Ort und nehmen Befunde aus dem Ausland nicht an. Dann ist ein Befund aus Deutschland nicht sinnvoll.',
        ],
        en: [
          'Depending on the university, a laboratory result may be no more than three months old or up to twelve months old.',
          'For the same disease, either documented vaccinations or a blood test sometimes count as proof.',
          'Some universities screen only after arrival on campus and do not accept results from abroad. In that case a result from Germany serves no purpose.',
        ],
      },
      callout: {
        variant: 'info',
        text: {
          de: NACHWEISE_IM_ANGEBOT
            ? 'Bitte bringen Sie das Formular zum Termin mit. Frist und Art eines Befunds übernehmen wir immer aus diesem Formular.'
            : 'Bitte bringen Sie das Formular zum Termin mit, damit wir Ihren Impfpass mit den Vorgaben abgleichen können.',
          en: NACHWEISE_IM_ANGEBOT
            ? 'Please bring the form to your appointment. We always take the deadline and the type of result from this form.'
            : 'Please bring the form to your appointment so that we can compare your vaccination record with its requirements.',
        },
      },
    },
    {
      id: 'impfpass',
      heading: {
        de: 'Impfpass prüfen und Lücken planen',
        en: 'Reviewing your record and planning for gaps',
      },
      body: {
        de: [
          'Wir gleichen Ihren Impfpass mit dem Formular ab und prüfen Daten und Abstände. Fehlen Impfungen, planen wir die Termine rückwärts von Ihrer Abgabefrist. Manche Impfserien dauern mehrere Monate. STIKO und DTG empfehlen, Impfserien spätestens zwei Wochen vor Reisebeginn abzuschließen.',
          ...(NACHWEISE_IM_ANGEBOT ? ['Was weder wir geimpft haben noch ein vorgelegtes Dokument belegt, können wir nicht bestätigen. Auch eine englische Bescheinigung ist eine Übertragung Ihrer Unterlagen und kein neuer Impfbeleg.'] : []),
        ],
        en: [
          'We compare your record with the form and check dates and intervals. If vaccinations are missing, we plan the appointments backwards from your deadline. Some vaccine series take several months. STIKO and DTG recommend completing vaccine series at least two weeks before the trip.',
          ...(NACHWEISE_IM_ANGEBOT ? ['We cannot confirm anything that we did not vaccinate ourselves and that no document you present shows. An English certificate, too, is a transfer of your records and not a new proof of vaccination.'] : []),
        ],
      },
      links: [
        ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Englische Bescheinigung und Nachweise', en: 'English certificate and records' }, path: '/ausland/nachweise' }] : []),
        { label: { de: 'Wann vor der Reise impfen', en: 'When to get vaccinated before a trip' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
      ],
    },
    {
      id: 'laborbefund',
      heading: {
        de: 'Wenn das Formular einen Laborbefund verlangt',
        en: 'If the form asks for a laboratory result',
      },
      body: {
        de: [
          'Einige Formulare verlangen Laborwerte. Klären Sie bitte vor dem Termin, welcher Befund gemeint ist, wie alt er sein darf und ob die Einrichtung Befunde aus Deutschland annimmt. Das steht meist im Formular oder lässt sich beim Gesundheitsdienst der Hochschule erfragen.',
          NACHWEISE_IM_ANGEBOT
            ? 'Rufen Sie uns danach bitte an. Dann besprechen wir, ob und wie sich der Befund bei uns einrichten lässt. Einen Laborwert tragen wir als Befund ein. Darüber hinausgehende Aussagen bestätigen wir nicht.'
            : 'Rufen Sie uns danach bitte an. Dann besprechen wir, ob und wie sich der Befund bei uns einrichten lässt.',
        ],
        en: [
          'Some forms ask for laboratory values. Before your appointment, please find out which result is meant, how old it may be and whether the institution accepts results from Germany. This is usually stated on the form or can be asked at the university health service.',
          NACHWEISE_IM_ANGEBOT
            ? 'Please call us afterwards. We will then discuss whether and how the result can be arranged with us. We enter a laboratory value as a finding. We do not confirm statements that go beyond it.'
            : 'Please call us afterwards. We will then discuss whether and how the result can be arranged with us.',
        ],
      },
      links: [{ label: { de: 'Kontakt', en: 'Contact' }, path: '/kontakt' }],
    },
    {
      id: 'pj-famulatur',
      heading: {
        de: 'PJ, Famulatur und Praktikum im Ausland',
        en: 'Clinical electives and internships abroad',
      },
      body: {
        de: [
          'Kliniken haben oft eigene Formulare und frühe Abgabefristen. Manche verlangen ein standardisiertes Impfformular, bevor sie einen Gastaufenthalt zulassen. Klären Sie außerdem, ob eine bestimmte Stelle unterschreiben muss.',
          'Für Medizinstudierende und klinische Tätigkeit können Kanada und Australien eine eigene Untersuchung vorschreiben. Das gilt in Kanada ausdrücklich auch für Medical Electives.',
          'Die Impfberatung und die Prüfung des Impfpasses sind bei uns auch dann möglich.',
        ],
        en: [
          'Hospitals often have their own forms and early deadlines. Some require a standardised immunization form before approving a visiting elective. Please also find out whether a particular body has to sign.',
          'Canada and Australia may require a separate examination for medical students and clinical work. In Canada this expressly includes medical electives.',
          'Vaccination advice and a review of your record are still possible with us.',
        ],
      },
      callout: { variant: 'important', text: VISA_GRENZE },
    },
    {
      id: 'zeitplan',
      heading: {
        de: 'Fristen rückwärts planen',
        en: 'Planning backwards from your deadlines',
      },
      body: {
        de: ['So planen Sie von der Abgabefrist aus. Die Zeiten sind unser Vorschlag und ersetzen nicht die Fristen Ihrer Einrichtung.'],
        en: ['This is how to plan from your deadline. The timings are our suggestion and do not replace the deadlines of your institution.'],
      },
      list: {
        de: [
          'Vier bis sechs Monate vor Beginn: Formular besorgen und Impfpass prüfen lassen.',
          'Direkt danach: fehlende Impfserien beginnen.',
          'Laborbefund: in das Zeitfenster legen, das Ihr Formular nennt, nicht früher.',
          'Spätestens zwei Wochen vor Reisebeginn: Impfserien abschließen.',
          NACHWEISE_IM_ANGEBOT
            ? 'Vor der Abgabefrist: Formular ausfüllen lassen und selbst einreichen.'
            : 'Vor der Abgabefrist: Formular vollständig einreichen.',
        ],
        en: [
          'Four to six months before you start: get the form and have your record reviewed.',
          'Straight afterwards: start any missing vaccine series.',
          'Laboratory result: place it in the window your form states, not earlier.',
          'At least two weeks before the trip: complete vaccine series.',
          NACHWEISE_IM_ANGEBOT
            ? 'Before the deadline: have the form completed and submit it yourself.'
            : 'Before the deadline: submit the completed form.',
        ],
      },
    },
    {
      id: 'mitbringen',
      heading: { de: 'Was Sie mitbringen', en: 'What to bring' },
      body: {
        de: [
          NACHWEISE_IM_ANGEBOT
            ? 'Damit wir das Formular in einem Termin bearbeiten können, bringen Sie bitte mit:'
            : 'Für den Termin bringen Sie bitte mit:',
        ],
        en: [NACHWEISE_IM_ANGEBOT ? 'So that we can deal with the form in one appointment, please bring:' : 'For the appointment, please bring:'],
      },
      list: {
        de: [
          'Impfpass und alle weiteren Impfunterlagen',
          NACHWEISE_IM_ANGEBOT
            ? 'das aktuelle Formular mit allen Seiten'
            : 'die aktuellen Vorgaben Ihrer Einrichtung, zum Beispiel das Formular',
          'die Abgabefrist und die Hinweise Ihrer Einrichtung',
          'vorhandene Befunde',
        ],
        en: [
          'your vaccination record and any other vaccination documents',
          NACHWEISE_IM_ANGEBOT
            ? 'the current form with all its pages'
            : 'your institution’s current requirements, for example the form',
          'the deadline and the instructions from your institution',
          'any existing results',
        ],
      },
      callout: {
        variant: 'info',
        text: {
          de: `Unsere Praxis liegt am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath, gut erreichbar aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen. ${KOSTEN_HINWEIS.de}`,
          en: `Our practice is at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath, easy to reach from Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen. ${KOSTEN_HINWEIS.en}`,
        },
      },
      links: [{ label: { de: 'Kosten', en: 'Fees' }, path: '/kosten' }],
    },
  ],
  faq: [
    ...(NACHWEISE_IM_ANGEBOT
      ? [
        {
          q: {
            de: 'Füllen Sie die Immunization Form meiner Hochschule aus?',
            en: 'Will you complete my university’s immunization form?',
          },
          a: {
            de: 'Ja, soweit wir die Angaben prüfen können. Grundlage sind Ihr Impfpass und vorgelegte Befunde. Felder, die wir nicht prüfen können, lassen wir frei und sagen Ihnen das. Verlangt das Formular eine körperliche Untersuchung, sagen Sie uns das bitte vorher, denn dafür brauchen wir mehr Zeit.',
            en: 'Yes, as far as we can verify the details. It is based on your vaccination record and the results you present. We leave fields we cannot verify blank and tell you so. If the form asks for a physical examination, please let us know beforehand, as this takes more time.',
          },
        },
        ]
      : []),
    {
      q: {
        de: 'Meine Impfungen stehen nur im deutschen Impfpass. Reicht das?',
        en: 'My vaccinations are only in my German vaccination record. Is that enough?',
      },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Das hängt von der Hochschule ab. Viele verlangen Angaben auf Englisch. Auf Grundlage Ihres Impfausweises können wir das Formular ausfüllen oder eine englische Bescheinigung ausstellen.'
          : 'Das hängt von der Hochschule ab. Viele verlangen Angaben auf Englisch. Fragen Sie am besten dort nach, welche Nachweise anerkannt werden.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'That depends on the university. Many ask for the details in English. Based on your vaccination record, we can complete the form or issue an English certificate.'
          : 'That depends on the university. Many ask for the details in English. It is best to ask there which records are accepted.',
      },
    },
    {
      q: {
        de: 'Was mache ich, wenn das Formular einen Laborbefund verlangt?',
        en: 'What do I do if the form asks for a laboratory result?',
      },
      a: {
        de: 'Klären Sie zuerst anhand des Formulars, welcher Befund gemeint ist, wie alt er sein darf und ob Befunde aus Deutschland angenommen werden. Rufen Sie uns dann bitte an, damit wir das Weitere besprechen können.',
        en: 'First check on the form which result is meant, how old it may be and whether results from Germany are accepted. Please then call us so that we can discuss the next steps.',
      },
    },
    {
      q: {
        de: 'Wie viel Zeit sollte ich bis zur Abgabefrist einplanen?',
        en: 'How much time should I allow before the deadline?',
      },
      a: {
        de: 'Wir empfehlen vier bis sechs Monate vor Beginn. Dann bleibt Zeit für Impfserien. Ein Laborbefund gehört in das Zeitfenster, das Ihr Formular nennt.',
        en: 'We suggest four to six months before you start. That leaves time for vaccine series. A laboratory result goes into the window your form states.',
      },
    },
    ...(NACHWEISE_IM_ANGEBOT
      ? [
        {
          q: {
            de: 'Erkennt meine Hochschule das Formular an?',
            en: 'Will my university accept the form?',
          },
          a: {
            de: `Das können wir nicht zusagen. ${ANERKENNUNG.de} Fragen Sie bei Zweifeln vorher dort nach, zum Beispiel ob ausdrücklich eine bestimmte Stelle unterschreiben muss.`,
            en: `We cannot promise that. ${ANERKENNUNG.en} If in doubt, ask beforehand, for example whether a particular body has to sign.`,
          },
        },
        ]
      : []),
    {
      q: {
        de: 'Zahlt die Krankenkasse Impfungen fürs Studium im Ausland?',
        en: 'Does health insurance pay for vaccinations for studying abroad?',
      },
      a: {
        de: 'Für gesetzlich Versicherte können von der STIKO empfohlene Reiseimpfungen eine Kassenleistung sein, wenn der Aufenthalt durch Studium oder Ausbildung bedingt ist. Das gilt in einer Kassenpraxis und mit Bestätigung der Ausbildungsstätte, nicht bei uns als Privatpraxis. Bitte klären Sie das vorher mit Ihrer Krankenkasse.',
        en: 'For people with statutory insurance, travel vaccinations recommended by STIKO may be covered if the stay is required by studies or training. This applies in a statutory-insurance practice and with confirmation from the place of study, not with us as a private practice. Please check with your insurer beforehand.',
      },
    },
  ],
  termine: [
    ...(NACHWEISE_IM_ANGEBOT
      ? [{ label: { de: 'Termin für Hochschulformular buchen', en: 'Book an appointment for a university form' }, art: 'nachweis-kurz' }]
      : [{ label: { de: 'Beratung vor dem Auslandsaufenthalt buchen', en: 'Book a consultation before your time abroad' }, art: 'langzeit' }]),
    { label: { de: 'Impfpass prüfen lassen', en: 'Have your vaccination record reviewed' }, art: 'impfpass-check' },
    ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Termin für Formular mit Untersuchung buchen', en: 'Book an appointment for a form with examination' }, art: 'nachweis-status' }] : []),
  ],
  related: [
    ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : []),
    { label: { de: 'Auslandsjahr und Schüleraustausch', en: 'Exchange year abroad' }, path: '/ausland/auslandsjahr' },
    { label: { de: 'Reiseimpfungen', en: 'Travel vaccinations' }, path: '/leistungen/reiseimpfungen' },
    { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten' },
  ],
  sourceIds: [
    'ucInternational',
    'ufCompliance',
    'unoInternational',
    'marylandVisiting',
    'caTemporary',
    'auHealthExams',
    'auPanel',
    'stikoReise2026',
    'sgb5Schutzimpfungen',
  ],
  lastReviewed: AUSLAND_GEPRUEFT,
};
