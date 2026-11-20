/**
 * Laborwerte-Check (DE/EN), vorher „Blutwerte besprechen". Seit 20.11.2026:
 * bestimmte Blutwerte auf Wunsch in zwei Terminen – Ersttermin (Nr. 1 + 250:
 * welche Werte, warum, Blutabnahme), Befundbesprechung (Nr. 1 + 75, auch am
 * Telefon) mit schriftlichem Werte-Bogen. Ehrlich sagen, wann ein Wert wenig
 * bringt; keine großen Profile ohne Frage, keine Präparate, keine Marken.
 * Dateiname und Exportname bleiben, damit `../index.ts` unverändert passt.
 */
import type { PreventionOffer } from '../types';
import { laborwert, zweiTermine, zweiTermineWeg, caDe, caEn } from '../preise';
import { biotinHinweis, erstattung, kostenVorab } from './zwei-termine';

export const werteEinordnen: PreventionOffer = {
  slug: 'laborwerte-check',
  bookingType: 'pv-e2',
  group: 'checks',
  stage: 1,
  shortName: { de: 'Laborwerte-Check', en: 'Blood test check' },
  teaser: {
    de: 'Bestimmte Blutwerte auf Wunsch: Wir besprechen vorher, welche Werte für Ihre Frage etwas aussagen, und ordnen die Ergebnisse schriftlich ein.',
    en: 'Specific blood tests on request: we first discuss which values are informative for your question and then explain the results in writing.',
  },
  facts: {
    forWhom: {
      de: 'Alle, die bestimmte Blutwerte auf Wunsch bestimmen lassen möchten, zum Beispiel Eisenspeicher, Vitamin D oder Blutfette – privat versichert oder als Selbstzahler.',
      en: 'Anyone who would like specific blood values measured on request, for example iron stores, vitamin D or blood lipids – privately insured or self-paying.',
    },
    appointments: {
      de: 'Ersttermin ca. 15 Min. in der Praxis mit Blutabnahme; Befundbesprechung ca. 15 Min., wenn alle Werte vorliegen, in der Praxis oder am Telefon.',
      en: 'First appointment approx. 15 min at the practice with blood sample; results discussion approx. 15 min once all values are available, at the practice or by phone.',
    },
    fee: {
      de: `Nach GOÄ. Typisch für beide Termine zusammen: ${caDe(zweiTermineWeg.werte)}.`,
      en: `Under the GOÄ. Typically for both appointments together: ${caEn(zweiTermineWeg.werte)}.`,
    },
    lab: {
      de: `je nach Wert, zum Beispiel kleines Blutbild ${caDe(laborwert.kleinesBlutbild)}, Vitamin D ${caDe(laborwert.vitaminD)}; eigene Rechnung vom Labor`,
      en: `depending on the test, for example basic blood count ${caEn(laborwert.kleinesBlutbild)}, vitamin D ${caEn(laborwert.vitaminD)}; separate invoice from the laboratory`,
    },
  },
  steps: [
    {
      title: { de: 'Ersttermin: welche Werte passen', en: 'First appointment: which tests fit' },
      text: {
        de: 'Etwa 15 Minuten in der Praxis. Sie sagen uns, was Sie wissen möchten. Wir besprechen, welche Werte dazu etwas aussagen, warum, und was sie kosten. Wenn ein Wert für Sie nichts ändert, sagen wir das offen.',
        en: 'About 15 minutes at the practice. You tell us what you would like to know. We discuss which values are informative, why, and what they cost. If a test would not change anything for you, we say so openly.',
      },
    },
    {
      title: { de: 'Blutabnahme im selben Termin', en: 'Blood sample in the same appointment' },
      text: {
        de: 'Direkt im Anschluss nehmen wir Blut ab, auch bei Terminen am Abend oder am Samstag. Ihre Probe geht mit der nächsten Abholung ins Labor. Für die meisten Werte müssen Sie nicht nüchtern sein. Wenn ein Wert nüchtern bestimmt werden oder besonders schnell ins Labor muss, sagen wir es Ihnen vorher.',
        en: 'We take the blood sample straight afterwards, also for appointments in the evening or on Saturday. Your sample goes to the laboratory with the next collection. For most values you do not need to fast. If a value needs fasting or has to reach the laboratory particularly quickly, we tell you beforehand.',
      },
    },
    {
      title: { de: 'Befundbesprechung mit Werte-Bogen', en: 'Results discussion with results sheet' },
      text: {
        de: 'Wenn alle Werte vorliegen, besprechen wir sie in etwa 15 Minuten, in der Praxis oder am Telefon. Zu jedem Wert halten wir fest: nichts tun, kontrollieren oder abklären. Sie erhalten einen schriftlichen Werte-Bogen.',
        en: 'Once all values are available, we discuss them in about 15 minutes, at the practice or by phone. For each value we note: do nothing, recheck or investigate. You receive a written results sheet.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz), je Termin: Ersttermin mit Beratung und Blutabnahme ${caDe(zweiTermine.werteErst)}, Befundbesprechung mit schriftlichem Werte-Bogen ${caDe(zweiTermine.befund)}. Zusammen ${caDe(zweiTermineWeg.werte)}.`,
      `Dazu kommen die Laborkosten je Wert, zum Beispiel: kleines Blutbild ${caDe(laborwert.kleinesBlutbild)}, großes Blutbild ${caDe(laborwert.grossesBlutbild)}, Eisenspeicher (Ferritin) mit kleinem Blutbild ${caDe(laborwert.ferritinMitBlutbild)}, Vitamin D ${caDe(laborwert.vitaminD)}, Vitamin B12 ${caDe(laborwert.vitaminB12)}, Leberwerte ${caDe(laborwert.leberwerte)}, Blutfette, Langzeitzucker und Nierenwert zusammen ${caDe(laborwert.checkBasis)}.`,
      'Zeigt sich im Ersttermin, dass ein Wert für Sie nichts ändert, nehmen wir kein Blut ab. Dann zahlen Sie nur die Beratung.',
      kostenVorab.de,
      erstattung.de,
    ],
    en: [
      `Medical fee under the GOÄ (standard rate), per appointment: first appointment with advice and blood sample ${caEn(zweiTermine.werteErst)}, results discussion with written results sheet ${caEn(zweiTermine.befund)}. Together ${caEn(zweiTermineWeg.werte)}.`,
      `Lab costs per test come on top, for example: basic blood count ${caEn(laborwert.kleinesBlutbild)}, full blood count ${caEn(laborwert.grossesBlutbild)}, iron stores (ferritin) with a basic blood count ${caEn(laborwert.ferritinMitBlutbild)}, vitamin D ${caEn(laborwert.vitaminD)}, vitamin B12 ${caEn(laborwert.vitaminB12)}, liver values ${caEn(laborwert.leberwerte)}, blood lipids, long-term blood sugar and kidney value together ${caEn(laborwert.checkBasis)}.`,
      'If the first appointment shows that a test would not change anything for you, we do not take blood. You then only pay for the advice.',
      kostenVorab.en,
      erstattung.en,
    ],
  },
  page: {
    meta: {
      title: {
        de: 'Laborwerte-Check: Blutwerte auf Wunsch bestimmen',
        en: 'Blood test check: blood values on request',
      },
      description: {
        de: 'Blutwerte auf Wunsch in Langenfeld: Wir besprechen, welche Werte etwas aussagen, nehmen Blut ab und ordnen jeden Wert schriftlich ein. Kosten nach GOÄ.',
        en: 'Blood tests on request in Langenfeld: we discuss which values are informative, take a sample and explain each result in writing. Fees under the GOÄ.',
      },
      eyebrow: { de: 'Prävention', en: 'Prevention' },
      lead: {
        de: 'Sie möchten bestimmte Blutwerte wissen, etwa Ihren Eisenspeicher, Vitamin D oder Ihre Blutfette? Im Laborwerte-Check besprechen wir zuerst, welche Werte für Ihre Frage etwas aussagen, und nehmen dann Blut ab. In der Befundbesprechung ordnen wir jeden Wert ein, und Sie erhalten einen schriftlichen Werte-Bogen.',
        en: 'Would you like to know specific blood values, such as your iron stores, vitamin D or blood lipids? In the blood test check we first discuss which values are informative for your question and then take a blood sample. In the results discussion we explain each value, and you receive a written results sheet.',
      },
    },
    sections: [
      {
        id: 'welche-werte',
        heading: { de: 'Welche Werte Sie bestimmen lassen können', en: 'Which values you can have measured' },
        body: {
          de: ['Häufige Wünsche sind zum Beispiel:'],
          en: ['Common requests include:'],
        },
        list: {
          de: [
            'kleines oder großes Blutbild,',
            'Eisenspeicher (Ferritin),',
            'Vitamin D und Vitamin B12,',
            'Schilddrüsenwert (TSH),',
            'Blutzucker-Langzeitwert (HbA1c),',
            'Blutfette und, einmal im Leben, Lp(a),',
            'Nieren- und Leberwerte.',
          ],
          en: [
            'basic or full blood count,',
            'iron stores (ferritin),',
            'vitamin D and vitamin B12,',
            'thyroid value (TSH),',
            'long-term blood sugar (HbA1c),',
            'blood lipids and, once in a lifetime, Lp(a),',
            'kidney and liver values.',
          ],
        },
        links: [{ label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' }],
        callout: {
          variant: 'info',
          title: { de: 'Sie haben schon Werte?', en: 'Already have results?' },
          text: {
            de: 'Bringen Sie Befunde aus einem anderen Labor zum Ersttermin mit, ausgedruckt oder auf dem Handy. Manchmal zeigt sich dann, dass kein neuer Wert nötig ist. Gesundheitsdaten nehmen wir nicht per E-Mail an.',
            en: 'Bring results from another laboratory to the first appointment, printed or on your phone. Sometimes it then turns out that no new test is needed. We do not accept health data by e-mail.',
          },
        },
      },
      {
        id: 'wann-wenig',
        heading: { de: 'Wann ein Wert wenig bringt', en: 'When a test tells you little' },
        body: {
          de: ['Wir bestimmen gern, was Sie wissen möchten. Wir sagen aber offen, wenn ein Wert für Ihre Frage wenig aussagt, zum Beispiel:'],
          en: ['We are happy to measure what you would like to know. But we say openly when a value tells you little for your question, for example:'],
        },
        list: {
          de: [
            'Viele Werte auf einmal ohne Frage: Ein Referenzbereich umfasst die Werte von 95 von 100 gesunden Menschen. Wer viele Werte bestimmen lässt, hat deshalb oft mindestens einen auffälligen, ohne krank zu sein.',
            'Vitamin D ohne Beschwerden und ohne Risiko: Der IGeL-Monitor bewertet diese Messung mit „unklar“.',
            'Eisen im Blut allein: Es schwankt über den Tag stark. Aussagekräftig ist das Ferritin, und auch das kann während eines Infekts falsch hoch sein.',
            'Lp(a) ein zweites Mal: Der Wert ist weitgehend vererbt; einmal im Leben reicht in der Regel.',
            'Kontrollen in kurzen Abständen, aus denen nichts folgt.',
          ],
          en: [
            'Many values at once without a question: a reference range covers the values of 95 out of 100 healthy people. Anyone who has many values measured will therefore often have one outside the range without being ill.',
            'Vitamin D without symptoms and without a risk: the IGeL-Monitor rates this test as “unclear”.',
            'Iron in the blood on its own: it varies strongly over the day. The informative value is ferritin, and even that can be falsely high during an infection.',
            'Lp(a) a second time: the level is largely inherited; once in a lifetime is usually enough.',
            'Rechecks at short intervals that do not change anything.',
          ],
        },
        callout: {
          variant: 'info',
          title: { de: 'Keine großen Profile ohne Frage', en: 'No large panels without a question' },
          text: {
            de: 'Ein „Komplettlabor“ ohne Frage bieten wir bewusst nicht an. Wir wählen mit Ihnen die Werte aus, die für Ihre Frage etwas aussagen.',
            en: 'We deliberately do not offer a “full blood panel” without a question. Together with you we choose the values that are informative for your question.',
          },
        },
      },
      {
        id: 'werte-bogen',
        heading: { de: 'Ihr Werte-Bogen', en: 'Your results sheet' },
        body: {
          de: [
            'Zu jedem Wert erhalten Sie eine kurze Einordnung in verständlichen Worten und eine klare Handlung: nichts tun, kontrollieren oder abklären. Ergibt sich ein Befund, der eine Behandlung braucht, schreiben wir – mit Ihrem Einverständnis – Ihrer Hausarztpraxis.',
            biotinHinweis.de,
          ],
          en: [
            'For each value you receive a short assessment in plain language and one clear action: do nothing, recheck or investigate. If a finding needs treatment, we write to your GP – with your consent.',
            biotinHinweis.en,
          ],
        },
      },
      {
        id: 'oder-gesundheitscheck',
        heading: { de: 'Laborwerte-Check oder Gesundheitscheck?', en: 'Blood test check or health check-up?' },
        body: {
          de: [
            'Der Laborwerte-Check ist für einzelne Werte zu einer bestimmten Frage. Wer wissen möchte, wo er insgesamt steht, mit Untersuchung von Kopf bis Fuß, Einschätzung des Herz-Kreislauf-Risikos und Befundbericht, ist im Gesundheitscheck besser aufgehoben. Zeigt sich im Ersttermin, dass der Check besser passt, erklären wir den Unterschied, und Sie entscheiden.',
          ],
          en: [
            'The blood test check is for single values on a specific question. If you want to know where you stand overall, with a head-to-toe examination, an assessment of your cardiovascular risk and a written report, the health check-up is the better fit. If the first appointment shows that the check-up suits you better, we explain the difference and you decide.',
          ],
        },
        links: [{ label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' }],
      },
      {
        id: 'nicht-dazu',
        heading: { de: 'Was wir nicht anbieten', en: 'What we do not offer' },
        body: { de: ['Bewusst nicht im Angebot sind:'], en: ['We deliberately do not offer:'] },
        list: {
          de: [
            'Laborprofile „auf Verdacht“ und Tests auf ein „biologisches Alter“,',
            'Mikrobiom-, Haar-, Speichel-Hormon- oder IgG-Nahrungsmitteltests,',
            'die Deutung vorhersagender Gentests – dafür ist die Humangenetik zuständig,',
            'Infusionen, Vitamin-Kuren und den Verkauf von Präparaten.',
          ],
          en: [
            'lab panels “just in case” and tests for a “biological age”,',
            'microbiome, hair, saliva hormone or IgG food tests,',
            'interpretation of predictive genetic tests – this belongs in human genetics,',
            'infusions, vitamin cures and the sale of supplements.',
          ],
        },
      },
    ],
    sourceIds: ['igelVitaminD', 'igelVitaminB12', 'easLpa2022', 'awmfMuedigkeit', 'goae'],
    lastReviewed: new Date('2026-11-20'),
    related: [
      { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
      { label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' },
      { label: { de: 'Großes Blutbild: Kosten', en: 'Full blood count: costs' }, path: '/ratgeber/grosses-blutbild-kosten' },
      { label: { de: 'Vitamin D, B12 und Eisen testen lassen', en: 'Testing vitamin D, B12 and iron' }, path: '/ratgeber/vitamin-d-test-beim-arzt' },
      { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    ],
    faq: [
      {
        q: { de: 'Kann ich die Werte selbst auswählen?', en: 'Can I choose the tests myself?' },
        a: {
          de: 'Sie sagen uns, was Sie wissen möchten, und wir besprechen, welche Werte dazu etwas aussagen. Wenn ein Wert für Ihre Frage wenig bringt, sagen wir es offen, bevor Blut abgenommen wird.',
          en: 'You tell us what you would like to know, and we discuss which values are informative. If a test tells you little for your question, we say so openly before any blood is taken.',
        },
      },
      {
        q: { de: 'Muss ich nüchtern kommen?', en: 'Do I need to fast?' },
        a: {
          de: 'Für die meisten Werte nicht. Für den Nüchternzucker ja: mindestens acht Stunden nichts essen, Wasser ist erlaubt. Wenn es bei Ihren Werten darauf ankommt, sagen wir es Ihnen vorher.',
          en: 'Not for most values. For fasting blood sugar, yes: nothing to eat for at least eight hours, water is allowed. If it matters for your tests, we tell you beforehand.',
        },
      },
      {
        q: { de: 'Geht die Befundbesprechung am Telefon?', en: 'Can the results discussion take place by phone?' },
        a: {
          de: 'Ja. Die Befundbesprechung geht in der Praxis oder am Telefon, wie es Ihnen lieber ist. Den Werte-Bogen erhalten Sie in jedem Fall schriftlich.',
          en: 'Yes. The results discussion can take place at the practice or by phone, whichever you prefer. You receive the results sheet in writing either way.',
        },
      },
      {
        q: { de: 'Wie schnell sind die Ergebnisse da?', en: 'How quickly are the results available?' },
        a: {
          de: 'Das Blutbild liegt meist am selben oder am nächsten Werktag vor, einzelne andere Werte nach ein bis zwei Werktagen.',
          en: 'The blood count is usually available the same or the next working day, some other values after one to two working days.',
        },
      },
    ],
  },
};
