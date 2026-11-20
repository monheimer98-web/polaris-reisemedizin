/**
 * Ratgeber „Großes Blutbild: Kosten" (DE/EN), Bereich „Prävention & Lebensstil".
 * Antwort auf die häufigste Suchfrage zu Blutwerten („kosten großes blutbild",
 * „blutbild machen lassen privat"; Messung 12.11.2026). Sachlich: Das große
 * Blutbild ist kein „großes Labor", wir bieten kein Komplettlabor an, Werte
 * nur nach Gespräch. Beträge aus `praevention/preise.ts` (Regelsatz GOÄ,
 * Labor 1,15); Regeln wie auf den Beispielkosten: kein „ab", kein „nur",
 * Honorar und Labor getrennt. Entwurf, vor Veröffentlichung Laborbeträge mit
 * dem Labor abgleichen.
 */
import type { ClinicalPage, Localized } from '../types';
import { labor, laborwert, zweiTermineWeg, caDe, caEn } from '../praevention/preise';

const laborPaket = laborwert.grossesBlutbild + laborwert.checkBasis + laborwert.leberwerte;

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const grossesBlutbildSummary: Localized = {
  de: 'Was ein großes Blutbild wirklich enthält, was die Krankenkasse zahlt und was es bei uns als Selbstzahler kostet.',
  en: 'What a full blood count really includes, what statutory insurance covers and what it costs with us as a self-paying patient.',
};

export const grossesBlutbildGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Großes Blutbild: Was es kostet und was es zeigt',
      en: 'Full blood count: what it costs and what it shows',
    },
    description: {
      de: 'Großes Blutbild als Selbstzahler in Langenfeld: Was dazugehört, was die Krankenkasse zahlt und Beispielkosten nach GOÄ, Honorar und Labor getrennt.',
      en: 'Full blood count as a self-paying patient in Langenfeld: what it includes, what statutory insurance covers and example fees under the GOÄ.',
    },
    eyebrow: { de: 'Ratgeber Prävention', en: 'Prevention guide' },
    lead: {
      de: `Das große Blutbild selbst kostet beim Labor ${caDe(laborwert.grossesBlutbild)}. Viele meinen mit dem Begriff aber mehr: Blutfette, Zucker, Leber und Niere. Hier lesen Sie, was wirklich dazugehört, was die Krankenkasse übernimmt und was es bei uns kostet.`,
      en: `The full blood count itself costs ${caEn(laborwert.grossesBlutbild)} at the laboratory. Many people mean more by the term, though: blood lipids, sugar, liver and kidney values. Here you can read what it really includes, what statutory insurance covers and what it costs with us.`,
    },
  },
  sections: [
    {
      id: 'was-ist-das',
      heading: { de: 'Was ein großes Blutbild ist', en: 'What a full blood count is' },
      body: {
        de: [
          'Das kleine Blutbild zählt die roten und weißen Blutkörperchen und die Blutplättchen und misst den roten Blutfarbstoff. Das große Blutbild unterscheidet zusätzlich die Arten der weißen Blutkörperchen.',
          'Trotz des Namens ist es kein „großes Labor“. Diese Werte gehören nicht dazu und werden einzeln bestimmt:',
        ],
        en: [
          'The basic blood count counts red and white blood cells and platelets and measures haemoglobin. The full blood count additionally distinguishes the types of white blood cells.',
          'Despite the German name (“large blood count”), it is not a “large lab panel”. These values are not part of it and are measured separately:',
        ],
      },
      list: {
        de: [
          'Blutfette wie Cholesterin und Triglyzeride,',
          'Blutzucker und Langzeitzucker (HbA1c),',
          'Leber- und Nierenwerte,',
          'Schilddrüsenwert (TSH),',
          'Vitamine und Eisenspeicher.',
        ],
        en: [
          'blood lipids such as cholesterol and triglycerides,',
          'blood sugar and long-term blood sugar (HbA1c),',
          'liver and kidney values,',
          'thyroid value (TSH),',
          'vitamins and iron stores.',
        ],
      },
    },
    {
      id: 'krankenkasse',
      heading: { de: 'Was die Krankenkasse zahlt', en: 'What statutory insurance covers' },
      body: {
        de: [
          'Gesetzlich Versicherte haben ab 35 Jahren alle drei Jahre Anspruch auf die Gesundheitsuntersuchung in der Hausarztpraxis. Dazu gehören Blutzucker und Blutfette sowie eine Urinuntersuchung. Zwischen 18 und 34 Jahren gibt es die Untersuchung einmal, Blutwerte dabei nur bei erhöhtem Risiko. Ein Blutbild gehört nicht dazu.',
          'Bei Beschwerden zahlt die Krankenkasse die Blutwerte, die zur Abklärung nötig sind. Ihre Hausarztpraxis ist dafür die richtige Adresse. Als Selbstzahler zahlen Sie, wenn Sie Werte ohne Beschwerden, außerhalb dieser Abstände oder zusätzlich wünschen.',
        ],
        en: [
          'People with statutory insurance are entitled to the health check at their GP every three years from the age of 35. It includes blood sugar and blood lipids as well as a urine test. Between 18 and 34 the check is offered once, with blood tests only if your risk is raised. A blood count is not part of it.',
          'If you have symptoms, statutory insurance pays for the blood tests needed to investigate them. Your GP is the right place for that. You pay yourself if you want tests without symptoms, outside these intervals or in addition.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Was es bei uns kostet', en: 'What it costs with us' },
      body: {
        de: [
          'Wir rechnen nach der Gebührenordnung für Ärzte (GOÄ) ab, je Termin und nur für das, was stattfindet. Das Labor stellt seine Rechnung selbst. Deshalb nennen wir Honorar und Labor getrennt. Drei Beispiele zum Regelsatz:',
        ],
        en: [
          'We bill under the German fee schedule for doctors (GOÄ), per appointment and only for what takes place. The laboratory issues its own invoice. That is why we show medical fees and lab costs separately. Three examples at the standard rate:',
        ],
      },
      list: {
        de: [
          `Nur das große Blutbild: ärztliches Honorar ${caDe(zweiTermineWeg.werte)} für beide Termine des Laborwerte-Checks, Labor ${caDe(laborwert.grossesBlutbild)}. Zusammen ${caDe(zweiTermineWeg.werte + laborwert.grossesBlutbild)}.`,
          `Großes Blutbild mit Blutfetten, Langzeitzucker, Nieren- und Leberwerten: ärztliches Honorar ebenfalls ${caDe(zweiTermineWeg.werte)}, Labor ${caDe(laborPaket)}. Zusammen ${caDe(zweiTermineWeg.werte + laborPaket)}.`,
          `Gesundheitscheck mit Untersuchung, Risikoeinschätzung und Befundbericht: ärztliches Honorar ${caDe(zweiTermineWeg.check)} für zwei Termine, mit Ruhe-EKG ${caDe(zweiTermineWeg.checkMitEkg)}, Labor ca. ${labor.check}–${labor.checkMitLpa} €.`,
        ],
        en: [
          `Full blood count only: medical fee ${caEn(zweiTermineWeg.werte)} for both appointments of the lab value check, laboratory ${caEn(laborwert.grossesBlutbild)}. Together ${caEn(zweiTermineWeg.werte + laborwert.grossesBlutbild)}.`,
          `Full blood count with blood lipids, long-term blood sugar, kidney and liver values: medical fee also ${caEn(zweiTermineWeg.werte)}, laboratory ${caEn(laborPaket)}. Together ${caEn(zweiTermineWeg.werte + laborPaket)}.`,
          `Health check-up with examination, risk assessment and written report: medical fee ${caEn(zweiTermineWeg.check)} for two appointments, with a resting ECG ${caEn(zweiTermineWeg.checkMitEkg)}, laboratory approx. €${labor.check}–${labor.checkMitLpa}.`,
        ],
      },
      links: [
        { label: { de: 'Beispielkosten Prävention', en: 'Example fees for preventive care' }, path: '/praevention/kosten' },
        { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
      ],
      callout: {
        variant: 'info',
        title: { de: 'Kosten vorab schriftlich', en: 'Costs in writing beforehand' },
        text: {
          de: 'Die voraussichtlichen Kosten erhalten Sie vor der Blutabnahme schriftlich. Weniger Werte kosten weniger. Werte, die Sie ohne medizinischen Anlass wünschen, kennzeichnen wir auf der Rechnung; Versicherungen erstatten sie meist nicht.',
          en: 'You receive the expected costs in writing before any blood is taken. Fewer tests cost less. We mark tests you request without a medical reason on the invoice; insurers usually do not reimburse them.',
        },
      },
    },
    {
      id: 'welche-werte',
      heading: { de: 'Welche Werte für Sie sinnvoll sind', en: 'Which tests make sense for you' },
      body: {
        de: [
          'Eine Liste zum Ankreuzen gibt es bei uns nicht. Welche Werte etwas aussagen, hängt von Alter, Vorgeschichte, Medikamenten und Beschwerden ab. Das klären wir im Gespräch, bevor wir Blut abnehmen.',
          'Mehr Werte sind nicht automatisch besser. Mit jedem zusätzlichen Wert steigt die Wahrscheinlichkeit, dass einer zufällig außerhalb des Normbereichs liegt, auch bei Gesunden. Deshalb bestimmen wir Werte, aus denen sich etwas ableiten lässt. Ein „Komplettlabor“ bieten wir bewusst nicht an.',
          'Wenn Sie ein Blutbild oder einen einzelnen Wert trotzdem wissen möchten, ist das möglich. Wir erklären vorher, was der Wert kann und was nicht.',
        ],
        en: [
          'We do not have a tick-box list. Which tests are informative depends on your age, history, medication and symptoms. We clarify that in a conversation before taking blood.',
          'More tests are not automatically better. With each additional test, the chance rises that one result falls outside the normal range by coincidence, even in healthy people. That is why we measure values that lead to a decision. We deliberately do not offer a “full blood panel”.',
          'If you would still like a blood count or a single value, that is possible. We explain beforehand what the test can and cannot tell you.',
        ],
      },
    },
    {
      id: 'ablauf',
      heading: { de: 'So läuft es ab', en: 'How it works' },
      body: {
        de: [
          'Sie buchen den Ersttermin des Laborwerte-Checks und kommen dafür in die Praxis: Wir besprechen, was sinnvoll ist, nennen die Kosten und nehmen direkt im Anschluss Blut ab. Ein Blutbild sollte bald ins Labor. Liegt Ihr Termin kurz vor dem Wochenende, sagen wir Ihnen vorher, ob wir dafür einen anderen Tag vorschlagen.',
          'Die Ergebnisse besprechen wir einige Tage später, auf Wunsch am Telefon. Wenn sich im Gespräch zeigt, dass der Gesundheitscheck besser zu Ihrer Frage passt, erklären wir den Unterschied, und Sie entscheiden.',
        ],
        en: [
          'You book the first appointment of the lab value check and come to the practice: we discuss what makes sense, tell you the costs and take the blood sample straight afterwards. A blood count should reach the laboratory soon. If your appointment is just before the weekend, we tell you beforehand whether we suggest another day.',
          'We discuss the results a few days later, by phone if you wish. If the conversation shows that the health check-up fits your question better, we explain the difference and you decide.',
        ],
      },
    },
  ],
  sourceIds: ['gbaGesundheitsuntersuchung', 'goae', 'awmfMuedigkeit'],
  lastReviewed: new Date('2026-11-12'),
  related: [
    { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
    { label: { de: 'Laborwerte-Check', en: 'Lab value check' }, path: '/praevention/laborwerte-check' },
    { label: { de: 'Welche Blutwerte wofür?', en: 'Which blood values for what?' }, path: '/ratgeber/blutwerte-erklaert' },
    { label: { de: 'Vitamin D, B12 und Eisen testen lassen', en: 'Testing vitamin D, B12 and iron' }, path: '/ratgeber/vitamin-d-test-beim-arzt' },
    { label: { de: 'Beispielkosten', en: 'Example fees' }, path: '/praevention/kosten' },
  ],
  faq: [
    {
      q: { de: 'Was kostet ein großes Blutbild?', en: 'What does a full blood count cost?' },
      a: {
        de: `Beim Labor ${caDe(laborwert.grossesBlutbild)}. Dazu kommt das ärztliche Honorar nach GOÄ für beide Termine des Laborwerte-Checks, bei uns ${caDe(zweiTermineWeg.werte)}. Zusammen sind es ${caDe(zweiTermineWeg.werte + laborwert.grossesBlutbild)}. Weitere Werte wie Blutfette oder Leberwerte kosten zusätzlich.`,
        en: `${caEn(laborwert.grossesBlutbild)} at the laboratory. In addition there is the medical fee under the GOÄ for both appointments of the lab value check, with us ${caEn(zweiTermineWeg.werte)}. Together that is ${caEn(zweiTermineWeg.werte + laborwert.grossesBlutbild)}. Further values such as blood lipids or liver values cost extra.`,
      },
    },
    {
      q: { de: 'Zahlt die Krankenkasse ein großes Blutbild?', en: 'Does statutory insurance pay for a full blood count?' },
      a: {
        de: 'Bei Beschwerden ja, wenn es zur Abklärung nötig ist. Ohne Beschwerden gehört das Blutbild nicht zur Gesundheitsuntersuchung der Krankenkasse; dann zahlen Sie es selbst.',
        en: 'With symptoms, yes, if it is needed to investigate them. Without symptoms the blood count is not part of the statutory health check; you then pay for it yourself.',
      },
    },
    {
      q: { de: 'Welche Werte gehören zum großen Blutbild?', en: 'Which values are part of a full blood count?' },
      a: {
        de: 'Rote und weiße Blutkörperchen, Blutplättchen, roter Blutfarbstoff und die Aufteilung der weißen Blutkörperchen. Cholesterin, Zucker, Leber-, Nieren- und Schilddrüsenwerte sowie Vitamine gehören nicht dazu.',
        en: 'Red and white blood cells, platelets, haemoglobin and the breakdown of white blood cells. Cholesterol, sugar, liver, kidney and thyroid values and vitamins are not part of it.',
      },
    },
    {
      q: { de: 'Muss ich nüchtern kommen?', en: 'Do I need to fast?' },
      a: {
        de: 'Für das Blutbild nicht. Auch die meisten anderen Werte bestimmen wir, ohne dass Sie nüchtern sein müssen. Wenn es bei einem Wert darauf ankommt, sagen wir es Ihnen vorher.',
        en: 'Not for the blood count. We also measure most other values without you having to fast. If it matters for a particular test, we tell you beforehand.',
      },
    },
    {
      q: { de: 'Kann ich einmal alles testen lassen?', en: 'Can I have everything tested at once?' },
      a: {
        de: 'Ein „Komplettlabor“ bieten wir nicht an. Viele Werte ohne Anlass führen häufig zu Zufallsbefunden, die verunsichern und weitere Untersuchungen nach sich ziehen. Wir wählen mit Ihnen die Werte aus, die für Ihre Frage etwas aussagen.',
        en: 'We do not offer a “full blood panel”. Many tests without a reason often produce chance findings that cause worry and lead to further tests. Together with you we choose the tests that are informative for your question.',
      },
    },
    {
      q: { de: 'Wie schnell ist das Ergebnis da?', en: 'How quickly are the results available?' },
      a: {
        de: 'Das Blutbild liegt meist am selben oder am nächsten Werktag vor, einzelne andere Werte nach ein bis zwei Werktagen.',
        en: 'The blood count is usually available the same or the next working day, some other values after one to two working days.',
      },
    },
  ],
};
