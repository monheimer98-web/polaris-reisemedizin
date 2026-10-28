/**
 * Werte einordnen – Labor, Smartwatch, Selbsttests und Präparate (DE/EN).
 * Niedrigschwelliger Einstieg, auch für junge Erwachsene. Keine Marken- oder
 * Herstellernamen, keine Diagnose per Uhr, keine „Optimalwerte".
 */
import type { PreventionOffer } from '../types';
import { honorar, euroDe, euroEn } from '../preise';

export const werteEinordnen: PreventionOffer = {
  slug: 'werte-einordnen',
  bookingType: 'praevention-werte',
  group: 'einordnen',
  stage: 1,
  shortName: { de: 'Werte einordnen', en: 'Making sense of results' },
  teaser: {
    de: 'Befunde aus dem Online-Labor, Meldungen der Smartwatch, Selbsttests und Nahrungsergänzung: Was bedeutet das, und folgt daraus etwas?',
    en: 'Results from online labs, smartwatch alerts, home tests and supplements: what do they mean, and does anything follow from them?',
  },
  facts: {
    forWhom: {
      de: 'Alle, die Werte haben und wissen möchten, was sie bedeuten – gerade auch Jüngere.',
      en: 'Anyone with results who wants to know what they mean – including younger people.',
    },
    appointments: {
      de: 'ca. 20–30 Min.; mit befundbezogener Untersuchung ca. 25–35 Min.',
      en: 'approx. 20–30 min; approx. 25–35 min with a related examination.',
    },
    fee: {
      de: `${euroDe(honorar.planTermin)} nach GOÄ, mit Untersuchung ${euroDe(honorar.bilanz)}`,
      en: `${euroEn(honorar.planTermin)} under the GOÄ, with examination ${euroEn(honorar.bilanz)}`,
    },
    lab: {
      de: 'meist keins; nur gezielt, wenn sich daraus etwas ableitet',
      en: 'usually none; only targeted tests that lead to a decision',
    },
  },
  steps: [
    {
      title: { de: 'Unterlagen mitbringen', en: 'Bring your documents' },
      text: {
        de: 'Bringen Sie Befunde, Bildschirmfotos aus Uhr oder App, Ihre Präparateliste und Ihre drei wichtigsten Fragen mit. Bitte schicken Sie Gesundheitsdaten nicht per E-Mail.',
        en: 'Bring your reports, screenshots from your watch or app, your list of supplements and your three most important questions. Please do not send health data by e-mail.',
      },
    },
    {
      title: { de: 'Jeden Wert einordnen', en: 'Assess each result' },
      text: {
        de: 'Wir erklären, was ein Wert aussagt, wie zuverlässig die Messung ist und ob ein Befund auch falsch auffällig sein kann.',
        en: 'We explain what a result says, how reliable the measurement is and whether a finding could be a false alarm.',
      },
    },
    {
      title: { de: 'Eine klare Handlung', en: 'One clear action' },
      text: {
        de: 'Zu jedem Wert halten wir fest: nichts tun, kontrollieren oder abklären. Sie erhalten einen schriftlichen Werte-Bogen.',
        en: 'For each result we note: do nothing, recheck or investigate. You receive a written results sheet.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz): ${euroDe(honorar.planTermin)} für Gespräch und schriftlichen Werte-Bogen, mit befundbezogener Untersuchung (zum Beispiel Blutdruck nach einem Hinweis der Uhr) ${euroDe(honorar.bilanz)}.`,
      'Diese Leistung ist meist eine Wunschleistung ohne Erstattung durch die Krankenversicherung. Sie erhalten vorab eine Kosteninformation.',
    ],
    en: [
      `Medical fee under the GOÄ (standard rate): ${euroEn(honorar.planTermin)} for consultation and written results sheet, with a related examination (for example blood pressure after a watch alert) ${euroEn(honorar.bilanz)}.`,
      'This is usually a self-pay service that health insurers do not reimburse. You receive a cost overview beforehand.',
    ],
  },
  page: {
    meta: {
      title: {
        de: 'Werte einordnen: Laborbefunde, Smartwatch-Daten und Selbsttests verständlich erklärt',
        en: 'Making sense of your results: lab reports, smartwatch data and home tests explained',
      },
      description: {
        de: 'Laborwerte, Smartwatch-Meldungen und Selbsttests in Langenfeld ärztlich einordnen lassen: Was bedeutet der Wert, wie zuverlässig ist er, folgt daraus etwas? Mit schriftlichem Werte-Bogen.',
        en: 'Have lab results, smartwatch alerts and home tests assessed by a doctor in Langenfeld: what does a result mean, how reliable is it, does anything follow from it? With a written results sheet.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Blutwerte aus dem Online-Labor, ein Check in der Apotheke, eine Meldung der Smartwatch: Werte sind heute leicht zu bekommen, ihre Bedeutung oft nicht. Wir sehen uns Ihre Befunde und Daten gemeinsam an und erklären, was ein Wert aussagt, wie zuverlässig er ist und ob daraus etwas folgt.',
        en: 'Blood results from an online lab, a check at the pharmacy, an alert from your smartwatch: results are easy to get today, their meaning often is not. We look at your reports and data together and explain what a result says, how reliable it is and whether anything follows from it.',
      },
    },
    sections: [
      {
        id: 'labor',
        heading: { de: 'Laborbefunde aus Online-Labor und Apotheke', en: 'Lab reports from online labs and pharmacies' },
        body: {
          de: [
            'Große Profile liefern viele Werte – und damit fast immer einen, der außerhalb des Referenzbereichs liegt. Wir ordnen jeden Wert in Ihre Situation ein und sagen offen, wenn eine Abweichung keine Bedeutung hat.',
          ],
          en: [
            'Large panels deliver many values – and therefore almost always one outside the reference range. We put each value into context and say openly when a deviation does not matter.',
          ],
        },
      },
      {
        id: 'uhr',
        heading: { de: 'Meldungen aus Uhr und App', en: 'Alerts from watches and apps' },
        body: {
          de: [
            'Uhren und Apps messen vieles, aber nicht alles zuverlässig. Wir erklären, was hinter einer Meldung steckt und welcher nächste Schritt sinnvoll ist.',
          ],
          en: [
            'Watches and apps measure a lot, but not everything reliably. We explain what lies behind an alert and which next step makes sense.',
          ],
        },
        list: {
          de: [
            'Eine Meldung zu unregelmäßigem Herzrhythmus braucht ein ärztliches EKG; den Weg dorthin besprechen wir mit Ihnen.',
            'Blutdruck-Hinweise prüfen wir mit einer Messung am Oberarm nach Standard.',
            'Schlaf- und Erholungswerte sind Anhaltspunkte, keine Diagnose.',
          ],
          en: [
            'An irregular-rhythm alert needs a medical ECG; we discuss how to get one.',
            'Blood-pressure alerts are checked with a standard upper-arm measurement.',
            'Sleep and recovery scores are pointers, not a diagnosis.',
          ],
        },
        callout: {
          variant: 'caution',
          title: { de: 'Sofort 112', en: 'Call 112 immediately' },
          text: {
            de: 'bei einer Rhythmus-Meldung zusammen mit Brustschmerz, Atemnot, Schwindel oder Ohnmacht.',
            en: 'if a rhythm alert comes with chest pain, shortness of breath, dizziness or fainting.',
          },
        },
      },
      {
        id: 'praeparate',
        heading: { de: 'Nahrungsergänzung: behalten, absetzen, offen', en: 'Supplements: keep, stop, undecided' },
        body: {
          de: [
            'Wir sehen uns Ihre Präparate mit Ihnen an: Dosis im Vergleich zu den empfohlenen Höchstmengen, Wechselwirkungen mit Medikamenten und ob ein Präparat Laborwerte verfälschen kann. Am Ende steht ein Bogen mit „behalten", „absetzen" oder „offen". Wir verkaufen keine Präparate und empfehlen keine Marken.',
          ],
          en: [
            'We review your supplements with you: dose compared with recommended maximum levels, interactions with medicines and whether a product can distort lab results. The result is a sheet with “keep”, “stop” or “undecided”. We do not sell supplements or recommend brands.',
          ],
        },
      },
      {
        id: 'nicht-dazu',
        heading: { de: 'Was wir nicht anbieten', en: 'What we do not offer' },
        body: { de: ['Bewusst nicht im Angebot sind:'], en: ['We deliberately do not offer:'] },
        list: {
          de: [
            'Laborprofile „auf Verdacht" und Tests auf ein „biologisches Alter",',
            'Mikrobiom-, Haar-, Speichel-Hormon- oder IgG-Nahrungsmitteltests,',
            'die laufende Auswertung von Wearable-Daten,',
            'die Deutung vorhersagender Gentests – dafür ist die Humangenetik zuständig.',
          ],
          en: [
            'lab panels “just in case” and tests for a “biological age”,',
            'microbiome, hair, saliva hormone or IgG food tests,',
            'ongoing analysis of wearable data,',
            'interpretation of predictive genetic tests – this belongs in human genetics.',
          ],
        },
      },
    ],
    sourceIds: ['escPraevention2021', 'nvlHypertonie', 'dgeEmpfehlungen'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Präventions-Check', en: 'Prevention check-up' }, path: '/praevention/praeventions-check' },
      { label: { de: 'Kompass für Männer 40+', en: 'Compass for men 40+' }, path: '/praevention/kompass-maenner' },
      { label: { de: 'Schlaf, Energie & Jetlag', en: 'Sleep, energy & jet lag' }, path: '/praevention/schlaf-und-jetlag' },
    ],
    faq: [
      {
        q: { de: 'Kann ich meine Befunde vorab schicken?', en: 'Can I send my reports in advance?' },
        a: {
          de: 'Bitte bringen Sie sie zum Termin mit, ausgedruckt oder auf dem Handy. Gesundheitsdaten nehmen wir nicht per E-Mail an.',
          en: 'Please bring them to the appointment, printed or on your phone. We do not accept health data by e-mail.',
        },
      },
      {
        q: { de: 'Machen Sie auch neue Laborwerte?', en: 'Do you also run new lab tests?' },
        a: {
          de: 'Nur gezielt, wenn sich aus dem Ergebnis eine Entscheidung ableitet – zum Beispiel eine Kontrolle eines auffälligen Werts.',
          en: 'Only targeted tests whose result leads to a decision – for example rechecking an abnormal value.',
        },
      },
    ],
  },
};
