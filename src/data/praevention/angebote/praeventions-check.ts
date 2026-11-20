/**
 * Gesundheitscheck (DE/EN). Seit 20.11.2026 in zwei Terminen wie die Pakete
 * der Praxissoftware (Schema 52): Termin 1 (Nr. 1 + 250) Gespräch darüber, was
 * untersucht wird, Messungen durch das Praxisteam, Blutabnahme mit Basislabor;
 * Termin 2 (Nr. 29 + 75, Ruhe-EKG Nr. 651 auf Wunsch) Untersuchung von Kopf
 * bis Fuß, Besprechung aller Werte, schriftlicher Befundbericht. Anamnese,
 * Risikoprofil und Beratung gehören in Termin 2 (Nr. 29).
 * Der Befundbericht ist das sichtbare Ergebnis und steht deshalb oben.
 * Kein Festpreis, kein „inklusive", kein Komplettlabor, kein Heilversprechen.
 */
import type { PreventionOffer } from '../types';
import { honorar, labor, zweiTermine, zweiTermineWeg, caDe, caEn } from '../preise';
import { kostenVorab } from './zwei-termine';
import { gewichtUndStoffwechsel } from './gewicht-und-stoffwechsel';

export const praeventionsCheck: PreventionOffer = {
  slug: 'gesundheitscheck',
  bookingType: 'pv-v1',
  group: 'checks',
  stage: 1,
  shortName: { de: 'Gesundheitscheck', en: 'Health check-up' },
  teaser: {
    de: 'Zwei Termine: Gespräch, Messungen und Blutabnahme, dann Untersuchung von Kopf bis Fuß und Ihr schriftlicher Befundbericht mit allen Werten.',
    en: 'Two appointments: conversation, measurements and blood sample, then a head-to-toe examination and your written report with all results.',
  },
  facts: {
    forWhom: {
      de: 'Erwachsene ohne Beschwerden, privat versichert oder als Selbstzahler, die wissen möchten, wo sie gesundheitlich stehen.',
      en: 'Adults without symptoms, privately insured or self-paying, who want to know where they stand with their health.',
    },
    appointments: {
      de: 'Ersttermin ca. 20 Min. mit Gespräch, Messungen und Blutabnahme; etwa eine Woche später Untersuchung und Befund ca. 40 Min. Beide Termine in der Praxis.',
      en: 'First appointment approx. 20 min with conversation, measurements and blood sample; about a week later examination and results approx. 40 min. Both appointments at the practice.',
    },
    fee: {
      de: `Nach GOÄ, je nachdem, was Sie brauchen. Typisch für beide Termine zusammen: ${caDe(zweiTermineWeg.check)}, mit Ruhe-EKG ${caDe(zweiTermineWeg.checkMitEkg)}.`,
      en: `Under the GOÄ, depending on what you need. Typically for both appointments together: ${caEn(zweiTermineWeg.check)}, with a resting ECG ${caEn(zweiTermineWeg.checkMitEkg)}.`,
    },
    lab: {
      de: `${caDe(labor.check)}, mit einmaliger Lp(a)-Bestimmung ${caDe(labor.checkMitLpa)}, eigene Rechnung vom Labor`,
      en: `${caEn(labor.check)}, with a one-off Lp(a) test ${caEn(labor.checkMitLpa)}, separate invoice from the laboratory`,
    },
  },
  steps: [
    {
      title: { de: 'Ersttermin: besprechen, was wir untersuchen', en: 'First appointment: what we will examine' },
      text: {
        de: 'Etwa 20 Minuten in der Praxis. Wir besprechen, was der Check umfasst, welche Blutwerte bei Ihnen etwas aussagen und was das kostet.',
        en: 'About 20 minutes at the practice. We discuss what the check-up covers, which blood tests are informative in your case and what this costs.',
      },
    },
    {
      title: { de: 'Noch im Ersttermin: Messungen und Blutabnahme', en: 'Still in the first appointment: measurements and blood sample' },
      text: {
        de: 'Unser Praxisteam misst Blutdruck, Größe, Gewicht und Taillenumfang und nimmt Blut ab für das Basislabor: Blutfette, Blutzucker-Langzeitwert (HbA1c) und Nierenwert, beim ersten Check auf Wunsch einmalig Lp(a). Sie müssen dafür in der Regel nicht nüchtern sein.',
        en: 'Our practice team measures blood pressure, height, weight and waist circumference and takes a blood sample for the basic panel: blood lipids, long-term blood sugar (HbA1c) and kidney value, and at the first check-up a one-off Lp(a) test if you wish. You usually do not need to fast.',
      },
    },
    {
      title: { de: 'Untersuchung und Befund', en: 'Examination and results' },
      text: {
        de: 'Etwa eine Woche später, wenn alle Werte vorliegen, folgt Termin 2. In etwa 40 Minuten sprechen wir über Ihre Vorgeschichte, Ihre Familie, Ihren Alltag und Ihre Ziele, untersuchen Sie von Kopf bis Fuß und sehen in Ihren Impfpass. Auf Wunsch schreiben wir ein Ruhe-EKG.',
        en: 'About a week later, once all results are in, comes appointment 2. In about 40 minutes we talk about your medical history, your family, your everyday life and your goals, examine you from head to toe and look at your vaccination record. On request we record a resting ECG.',
      },
    },
    {
      title: { de: 'Ihr Befundbericht zum Mitnehmen', en: 'Your written report to take home' },
      text: {
        de: 'Wir besprechen alle Werte mit Ihnen. Sie gehen mit Ihrem schriftlichen Befundbericht nach Hause: Ihre Werte mit Grafik und Einordnung und was daraus folgt.',
        en: 'We go through all results with you. You leave with your written report: your values with a chart and an assessment, and what follows from them.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz), je Termin: Ersttermin mit Gespräch, Messungen und Blutabnahme ${caDe(zweiTermine.checkErst)}, Untersuchung von Kopf bis Fuß, Besprechung aller Werte und schriftlicher Befundbericht ${caDe(zweiTermine.checkBefund)}, Ruhe-EKG auf Wunsch ${caDe(zweiTermine.ekg)}. Zusammen ${caDe(zweiTermineWeg.check)}, mit Ruhe-EKG ${caDe(zweiTermineWeg.checkMitEkg)}.`,
      `Dazu kommen die Laborkosten für das Basislabor, ${caDe(labor.check)}, mit einmaliger Lp(a)-Bestimmung ${caDe(labor.checkMitLpa)}. Weitere Werte bestimmen wir nur, wenn wir sie gemeinsam für sinnvoll halten.`,
      `Eine Impfung im selben Termin wird zusätzlich nach GOÄ berechnet, ${caDe(honorar.impfung)}, dazu kommt der Impfstoff.`,
      kostenVorab.de,
      'Private Krankenversicherungen und Beihilfe erstatten Gesundheitsuntersuchungen je nach Tarif, häufig in den Abständen der gesetzlichen Gesundheitsuntersuchung (ab 35 Jahren alle drei Jahre). Bitte klären Sie die Erstattung vorab.',
    ],
    en: [
      `Medical fee under the GOÄ (standard rate), per appointment: first appointment with conversation, measurements and blood sample ${caEn(zweiTermine.checkErst)}, head-to-toe examination, discussion of all results and written report ${caEn(zweiTermine.checkBefund)}, resting ECG on request ${caEn(zweiTermine.ekg)}. Together ${caEn(zweiTermineWeg.check)}, with a resting ECG ${caEn(zweiTermineWeg.checkMitEkg)}.`,
      `Lab costs for the basic panel come on top, ${caEn(labor.check)}, with a one-off Lp(a) test ${caEn(labor.checkMitLpa)}. We only measure further values if we agree that they make sense.`,
      `A vaccination in the same appointment is billed additionally under the GOÄ, ${caEn(honorar.impfung)}, plus the vaccine.`,
      kostenVorab.en,
      'Private health insurers and civil-service allowances (Beihilfe) reimburse health check-ups depending on the tariff, often at the intervals of the statutory check-up (every three years from age 35). Please check reimbursement in advance.',
    ],
  },
  page: {
    meta: {
      title: {
        de: 'Gesundheitscheck: zwei Termine, ein Befundbericht',
        en: 'Health check-up: two appointments, one written report',
      },
      description: {
        de: 'Gesundheitscheck für Privatversicherte und Selbstzahler in Langenfeld: Messungen, Blutwerte, Untersuchung von Kopf bis Fuß und schriftlicher Befundbericht.',
        en: 'Health check-up for privately insured and self-paying patients in Langenfeld: measurements, blood tests, a full examination and a written report.',
      },
      eyebrow: {
        de: 'Prävention',
        en: 'Prevention',
      },
      lead: {
        de: 'Viele Menschen fühlen sich gesund und möchten wissen, wo sie stehen. Im Gesundheitscheck sehen wir uns in zwei Terminen an, was für Herz, Gefäße und Stoffwechsel nach heutigem Wissen besonders zählt. Am Ende erhalten Sie Ihren schriftlichen Befundbericht: alle Werte mit Grafik und Einordnung, zum Mitnehmen.',
        en: 'Many people feel healthy and want to know where they stand. In the health check-up we use two appointments to look at what, according to current knowledge, matters most for the heart, blood vessels and metabolism. At the end you receive your written report: all values with a chart and an assessment, to take home.',
      },
    },
    sections: [
      {
        id: 'befundbericht',
        heading: { de: 'Das Ergebnis: Ihr Befundbericht', en: 'The result: your written report' },
        body: {
          de: [
            'Am Ende des Checks steht Ihr schriftlicher Befundbericht. Wir gehen ihn im zweiten Termin Punkt für Punkt mit Ihnen durch, und Sie nehmen ihn mit nach Hause. Darin steht:',
          ],
          en: [
            'The check-up ends with your written report. We go through it with you point by point in the second appointment, and you take it home. It contains:',
          ],
        },
        list: {
          de: [
            'alle Werte auf einen Blick, mit einer Grafik, die zeigt, wo jeder Wert liegt,',
            'zu jedem Wert eine ärztliche Einordnung in verständlichen Worten,',
            'Blutdruck, Gewicht, Taille und, wenn gemacht, das Ergebnis des Ruhe-EKG,',
            'ab 40 Jahren Ihr geschätztes Risiko für Herz-Kreislauf-Erkrankungen in den nächsten zehn Jahren, berechnet nach der europäischen Leitlinie,',
            'Ihren Impfschutz und welche Impfung gerade ansteht,',
            'was daraus folgt: nichts tun, später kontrollieren oder abklären lassen.',
          ],
          en: [
            'all values at a glance, with a chart that shows where each value lies,',
            'a medical assessment of each value in plain language,',
            'blood pressure, weight, waist and, if recorded, the result of the resting ECG,',
            'from age 40, your estimated ten-year risk of cardiovascular disease, calculated according to the European guideline,',
            'your vaccination status and which vaccination is due,',
            'what follows: do nothing, recheck later or investigate further.',
          ],
        },
        callout: {
          variant: 'info',
          title: { de: 'Beim nächsten Check: Ihr Verlauf', en: 'At your next check-up: your trend' },
          text: {
            de: 'Kommen Sie wieder zum Check, zeigt der Befundbericht Ihre früheren und neuen Werte nebeneinander. So sehen Sie, was sich verändert hat.',
            en: 'When you come back for a check-up, the report shows your earlier and new values side by side. That way you can see what has changed.',
          },
        },
      },
      {
        id: 'was-wir-ansehen',
        heading: { de: 'Was wir uns ansehen', en: 'What we look at' },
        body: {
          de: [
            'Der Check konzentriert sich auf das, woraus sich etwas ableiten lässt. Im Ersttermin misst unser Praxisteam und nimmt Blut ab. Im zweiten Termin untersuchen wir Sie und besprechen alles zusammen.',
          ],
          en: [
            'The check-up focuses on what leads to a decision. In the first appointment our practice team takes measurements and a blood sample. In the second appointment we examine you and discuss everything together.',
          ],
        },
        list: {
          de: [
            'Blutdruck, mehrfach in Ruhe gemessen, Größe, Gewicht, Taillenumfang und das Verhältnis von Taille zu Körpergröße,',
            'Blutfette, Blutzucker-Langzeitwert (HbA1c) und Nierenfunktion,',
            'Ihre Vorgeschichte und Erkrankungen in Ihrer Familie,',
            'Bewegung, Ernährung, Schlaf, Rauchen, Alkohol und Belastung im Alltag,',
            'eine Untersuchung von Kopf bis Fuß,',
            'Ihren Impfschutz anhand Ihres Impfpasses.',
          ],
          en: [
            'blood pressure, measured several times at rest, height, weight, waist circumference and waist-to-height ratio,',
            'blood lipids, long-term blood sugar (HbA1c) and kidney function,',
            'your medical history and conditions in your family,',
            'physical activity, diet, sleep, smoking, alcohol and everyday stress,',
            'a head-to-toe examination,',
            'your vaccination status based on your vaccination record.',
          ],
        },
      },
      {
        id: 'blutwerte',
        heading: { de: 'Welche Blutwerte wir bestimmen', en: 'Which blood tests we do' },
        body: {
          de: [
            'Zum Basislabor gehören die Blutfette, der Blutzucker-Langzeitwert (HbA1c) und der Nierenwert. Sie fließen in die Einschätzung Ihres Herz-Kreislauf-Risikos ein.',
            'Lipoprotein(a), kurz Lp(a), ist ein Blutfett, dessen Höhe vor allem vererbt ist. Ein hoher Wert erhöht das Risiko für Herz-Kreislauf-Erkrankungen, auch wenn die übrigen Blutfette unauffällig sind. Die Europäische Atherosklerose-Gesellschaft empfiehlt, Lp(a) bei Erwachsenen mindestens einmal zu bestimmen. Wurde der Wert schon einmal gemessen, ist keine Wiederholung nötig.',
            'Weitere Werte bestimmen wir nur, wenn sie für Ihre Frage etwas aussagen. Einzelne Werte auf Wunsch, etwa Eisenspeicher oder Vitamine, gibt es im Laborwerte-Check.',
          ],
          en: [
            'The basic panel includes blood lipids, long-term blood sugar (HbA1c) and the kidney value. They feed into the assessment of your cardiovascular risk.',
            'Lipoprotein(a), Lp(a) for short, is a blood lipid whose level is largely inherited. A high level increases the risk of cardiovascular disease even when other lipids are normal. The European Atherosclerosis Society recommends measuring Lp(a) at least once in adults. If it has been measured before, there is no need to repeat it.',
            'We only measure further values if they are informative for your question. Single tests on request, such as iron stores or vitamins, are available in the blood test check.',
          ],
        },
        links: [
          { label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' },
          { label: { de: 'Laborwerte-Check', en: 'Blood test check' }, path: '/praevention/laborwerte-check' },
        ],
      },
      {
        id: 'ekg',
        heading: { de: 'Ruhe-EKG auf Wunsch', en: 'Resting ECG on request' },
        body: {
          de: [
            'Ein Ruhe-EKG zeichnet die elektrische Tätigkeit des Herzens im Liegen auf, zum Beispiel Herzrhythmus und Herzfrequenz. Wir schreiben es im zweiten Termin, wenn Sie es wünschen. Bei Menschen ohne Beschwerden ist es keine Pflicht; wir besprechen mit Ihnen, ob es für Sie etwas aussagt. Ein Belastungs-EKG gehört nicht zum Check.',
          ],
          en: [
            'A resting ECG records the electrical activity of the heart while you lie down, for example heart rhythm and heart rate. We record it in the second appointment if you wish. For people without symptoms it is not required; we discuss with you whether it is informative in your case. An exercise ECG is not part of the check-up.',
          ],
        },
      },
      {
        id: 'impfschutz',
        heading: { de: 'Impfschutz gleich mit prüfen', en: 'Checking your vaccinations at the same time' },
        body: {
          de: [
            'Bringen Sie zum zweiten Termin Ihren Impfpass mit. Wir prüfen die Standardimpfungen nach den Empfehlungen der Ständigen Impfkommission (STIKO). Fehlt eine Impfung, können Sie sie bei uns in der Praxis nachholen.',
          ],
          en: [
            'Please bring your vaccination record to the second appointment. We check your standard vaccinations against the recommendations of the German Standing Committee on Vaccination (STIKO). If a vaccination is missing, you can catch up on it at our practice.',
          ],
        },
      },
      {
        id: 'nicht-dazu',
        heading: { de: 'Was nicht dazugehört', en: 'What is not included' },
        body: {
          de: [
            'Der Check ersetzt nicht die gesetzlichen Früherkennungsuntersuchungen. Untersuchungen ohne Konsequenz bieten wir bewusst nicht an.',
          ],
          en: [
            'The check-up does not replace statutory screening examinations. We deliberately do not offer tests that would not change anything.',
          ],
        },
        list: {
          de: [
            'kein „Komplettlabor“, keine Gentests und keine Tests auf ein „biologisches Alter“,',
            'kein Ultraschall, keine Lungenfunktion und kein Belastungs-EKG als Routine,',
            'keine Dauerbehandlung und keine Gutachten.',
          ],
          en: [
            'no “full blood panel”, no genetic tests and no tests for a “biological age”,',
            'no routine ultrasound, lung function test or exercise ECG,',
            'no long-term treatment and no expert reports.',
          ],
        },
        callout: {
          variant: 'info',
          title: { de: 'Dauerbehandlung bleibt bei Ihrer Hausarztpraxis', en: 'Long-term care stays with your GP' },
          text: {
            de: 'Ergibt der Check einen Befund, der eine Behandlung braucht, schreiben wir Ihrer Hausarztpraxis – mit Ihrem Einverständnis – und nennen Ihnen den nächsten Schritt.',
            en: 'If the check-up reveals a finding that needs treatment, we write to your GP – with your consent – and tell you the next step.',
          },
        },
      },
    ],
    sourceIds: ['escPraevention2021', 'escEasLipide2019', 'easLpa2022', 'nvlHypertonie', 'gbaGesundheitsuntersuchung', 'whoBewegung2020', 'stikoImpfempfehlungen', 'goae'],
    lastReviewed: new Date('2026-11-20'),
    related: [
      { label: { de: 'Laborwerte-Check', en: 'Blood test check' }, path: '/praevention/laborwerte-check' },
      { label: gewichtUndStoffwechsel.shortName, path: '/praevention/gewicht-und-stoffwechsel' },
      { label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' },
      { label: { de: 'Großes Blutbild: Kosten', en: 'Full blood count: costs' }, path: '/ratgeber/grosses-blutbild-kosten' },
      { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    ],
    faq: [
      {
        q: { de: 'Warum zwei Termine?', en: 'Why two appointments?' },
        a: {
          de: 'Damit im zweiten Termin alle Werte vorliegen. Im Ersttermin besprechen wir, was wir untersuchen, messen und nehmen Blut ab. Etwa eine Woche später, wenn alle Werte vorliegen, untersuchen wir Sie, besprechen alle Ergebnisse auf einmal, und Sie nehmen Ihren Befundbericht mit.',
          en: 'So that all results are available in the second appointment. In the first appointment we discuss what we will examine, take measurements and a blood sample. About a week later, once all results are in, we examine you, discuss all results at once, and you take your report home.',
        },
      },
      {
        q: { de: 'Muss ich zur Blutentnahme nüchtern sein?', en: 'Do I need to fast for the blood test?' },
        a: {
          de: 'In der Regel nicht. Die Werte des Basislabors lassen sich ohne Nüchternheit bestimmen. Nehmen Sie Ihre Medikamente wie gewohnt ein. Wenn etwas anderes gilt, sagen wir es Ihnen vorab.',
          en: 'Usually not. The basic panel can be measured without fasting. Take your medication as usual. If anything else applies, we will tell you beforehand.',
        },
      },
      {
        q: { de: 'Was bringe ich zum zweiten Termin mit?', en: 'What should I bring to the second appointment?' },
        a: {
          de: 'Ihren Impfpass, eine Liste Ihrer Medikamente und, wenn vorhanden, frühere Befunde.',
          en: 'Your vaccination record, a list of your medication and, if available, earlier test results.',
        },
      },
      {
        q: { de: 'Ich bin gesetzlich versichert. Kann ich trotzdem kommen?', en: 'I have statutory health insurance. Can I still come?' },
        a: {
          de: 'Ja. Polaris ist eine Privatpraxis; Sie zahlen das Honorar nach GOÄ selbst. Die gesetzliche Gesundheitsuntersuchung ab 35 Jahren erhalten Sie ohne Zuzahlung in Ihrer Hausarztpraxis.',
          en: 'Yes. Polaris is a private practice; you pay the fee under the GOÄ yourself. The statutory check-up from age 35 is available at no extra cost from your GP.',
        },
      },
    ],
  },
};
