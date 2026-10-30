/**
 * Kompass 60+ – gesund älter werden (DE/EN). Kompass-Kern mit Funktionstests,
 * Impfplan ab 60 und Hinweisen für Reisen im Alter. Kein „Anti-Aging",
 * „Senioren-Check-up", „Demenz vorbeugen" oder „Sturz verhindern".
 */
import type { PreventionOffer } from '../types';
import { honorar, labor, euroDe, euroEn } from '../preise';

export const kompass60Plus: PreventionOffer = {
  slug: 'kompass-60-plus',
  bookingType: 'p-kompass-60',
  group: 'checks',
  stage: 1,
  shortName: { de: 'Kompass 60+', en: 'Compass 60+' },
  teaser: {
    de: 'Herz, Stoffwechsel, Kraft und Gleichgewicht, Impfungen ab 60 und Reisen im Alter – mit Plan und Übungsblatt.',
    en: 'Heart, metabolism, strength and balance, vaccinations from 60 and travelling later in life – with a plan and exercise sheet.',
  },
  facts: {
    forWhom: {
      de: 'Aktive Menschen ab etwa 60, die selbstständig bleiben und weiter reisen möchten.',
      en: 'Active people from about 60 who want to stay independent and keep travelling.',
    },
    appointments: {
      de: 'Labortermin ca. 10 Min., Haupttermin ca. 60 Min.; Impfungen auf Wunsch im selben Termin.',
      en: 'Lab appointment approx. 10 min, main appointment approx. 60 min; vaccinations in the same appointment on request.',
    },
    fee: {
      de: `${euroDe(honorar.check)} nach GOÄ für Untersuchung, Plan und Blutentnahme, plus Laborkosten; Impfung im Termin ${euroDe(honorar.impfung)} zzgl. Impfstoff`,
      en: `${euroEn(honorar.check)} under the GOÄ for examination, plan and blood draw, plus lab costs; vaccination during the appointment ${euroEn(honorar.impfung)} plus vaccine`,
    },
    lab: {
      de: `ca. ${euroDe(labor.check60)}, direkt vom Labor`,
      en: `approx. ${euroEn(labor.check60)}, billed directly by the laboratory`,
    },
  },
  steps: [
    {
      title: { de: 'Buchen, gern mit Hilfe am Telefon', en: 'Book – by phone if you prefer' },
      text: {
        de: 'Den Fragebogen können Sie online ausfüllen oder am Telefon mit uns. Bitte bringen Sie Impfpass, Medikamentenliste, Brille, Hörgerät und bequeme Schuhe mit.',
        en: 'You can complete the questionnaire online or with us by phone. Please bring your vaccination record, list of medications, glasses, hearing aid and comfortable shoes.',
      },
    },
    {
      title: { de: 'Labortermin', en: 'Lab appointment' },
      text: {
        de: 'Kurzer Termin am Morgen mit Blutentnahme.',
        en: 'A short morning appointment with a blood draw.',
      },
    },
    {
      title: { de: 'Haupttermin mit Funktionstests', en: 'Main appointment with function tests' },
      text: {
        de: 'Untersuchung, Herz-Kreislauf-Risiko, Handkraft, Aufstehen vom Stuhl, Gehgeschwindigkeit und Gleichgewicht; wir zeigen Ihnen passende Übungen und prüfen Ihren Impfschutz.',
        en: 'Examination, cardiovascular risk, grip strength, rising from a chair, walking speed and balance; we show you suitable exercises and check your vaccinations.',
      },
    },
    {
      title: { de: 'Plan und 60+-Blatt', en: 'Plan and 60+ sheet' },
      text: {
        de: 'Sie erhalten Ihren Präventionsplan, ein Blatt mit Übungen und Eiweißbeispielen, Ihren Impfplan und eine Reise-Checkliste.',
        en: 'You receive your prevention plan, a sheet with exercises and protein examples, your vaccination plan and a travel checklist.',
      },
    },
  ],
  costs: {
    de: [
      `Ärztliches Honorar nach GOÄ (Regelsatz): ${euroDe(honorar.check)} einschließlich Blutentnahme. Impfungen im selben Termin ${euroDe(honorar.impfung)} (jede weitere ${euroDe(honorar.weitereImpfung)}) zzgl. Impfstoff.`,
      `Dazu kommen die Laborkosten von ca. ${euroDe(labor.check60)}, eigene Rechnung vom Labor. Gesetzlich Versicherte erhalten die von der STIKO empfohlenen Impfungen in der Regel ohne Zuzahlung in ihrer Hausarztpraxis.`,
    ],
    en: [
      `Medical fee under the GOÄ (standard rate): ${euroEn(honorar.check)} including the blood draw. Vaccinations in the same appointment ${euroEn(honorar.impfung)} (each further one ${euroEn(honorar.weitereImpfung)}) plus vaccine.`,
      `Lab costs of approx. ${euroEn(labor.check60)} come on top, with a separate invoice from the laboratory. People with statutory insurance usually receive STIKO-recommended vaccinations without co-payment from their GP.`,
    ],
  },
  page: {
    meta: {
      title: { de: 'Kompass 60+: gesund älter werden – mit Plan', en: 'Compass 60+: ageing well – with a plan' },
      description: {
        de: 'Kompass 60+ in Langenfeld: Herz und Stoffwechsel, Kraft- und Gleichgewichtstests, Impfungen ab 60 und Reisen im Alter – mit schriftlichem Plan. Honorar nach GOÄ.',
        en: 'Compass 60+ in Langenfeld: heart and metabolism, strength and balance tests, vaccinations from 60 and travelling later in life – with a written plan. Fees under the GOÄ.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Mit den Jahren zählt, was Sie im Alltag können: sicher gehen, Treppen steigen, Einkäufe tragen, verreisen. Im Kompass 60+ messen wir deshalb nicht nur Blutdruck und Blutwerte, sondern auch Ihre Handkraft, wie schnell Sie vom Stuhl aufstehen, Ihre Gehgeschwindigkeit und Ihr Gleichgewicht.',
        en: 'Over the years, what you can do in everyday life is what counts: walking safely, climbing stairs, carrying shopping, travelling. In Compass 60+ we therefore measure not only blood pressure and blood values but also your grip strength, how quickly you rise from a chair, your walking speed and your balance.',
      },
    },
    sections: [
      {
        id: 'kraft-gleichgewicht',
        heading: { de: 'Kraft und Gleichgewicht', en: 'Strength and balance' },
        body: {
          de: [
            'Kraft und Gleichgewicht lassen sich in jedem Alter trainieren. Wir messen Ihre Ausgangswerte, zeigen Ihnen Übungen für zu Hause und nennen Ihnen Kurse in der Umgebung. Empfohlen sind Kraft- und Gleichgewichtsübungen an mindestens drei Tagen pro Woche.',
          ],
          en: [
            'Strength and balance can be trained at any age. We measure your starting values, show you exercises for home and point you to courses nearby. Strength and balance exercises on at least three days a week are recommended.',
          ],
        },
      },
      {
        id: 'impfungen',
        heading: { de: 'Impfungen ab 60', en: 'Vaccinations from 60' },
        body: {
          de: [
            'Ab 60 empfiehlt die Ständige Impfkommission weitere Impfungen, unter anderem gegen Gürtelrose, Pneumokokken und Grippe; je nach Alter und Vorerkrankungen kommen weitere hinzu, etwa gegen RSV oder COVID-19. Wir prüfen Ihren Impfpass und erstellen einen Impfplan. Impfungen sind auf Wunsch direkt im Termin möglich.',
          ],
          en: [
            'From 60, the German Standing Committee on Vaccination (STIKO) recommends further vaccinations, including against shingles, pneumococci and influenza; depending on age and pre-existing conditions others are added, such as RSV or COVID-19. We check your vaccination record and draw up a plan. Vaccinations can be given in the same appointment on request.',
          ],
        },
      },
      {
        id: 'hoeren-sehen-medikamente',
        heading: { de: 'Hören, Sehen, Medikamente', en: 'Hearing, vision, medication' },
        body: {
          de: [
            'Wir fragen nach Hören, Sehen, Stürzen und Ihren Medikamenten. Nehmen Sie fünf oder mehr Medikamente dauerhaft ein, empfehlen wir eine Überprüfung in Ihrer Hausarztpraxis; auf Wunsch schreiben wir ihr dazu.',
          ],
          en: [
            'We ask about hearing, vision, falls and your medication. If you take five or more medicines long-term, we recommend a review by your GP; on request we write to them.',
          ],
        },
      },
      {
        id: 'reisen',
        heading: { de: 'Reisen ab 60', en: 'Travelling from 60' },
        body: {
          de: [
            'Kreuzfahrt, Fernreise oder Familienbesuch: Sie erhalten eine Reise-Checkliste mit Hinweisen zu Medikamenten, Thrombose, Hitze und Impfungen. Für die Reise selbst bieten wir auch die reisemedizinische Beratung an.',
          ],
          en: [
            'Cruise, long-haul trip or family visit: you receive a travel checklist with notes on medication, thrombosis, heat and vaccinations. For the trip itself we also offer a travel health consultation.',
          ],
        },
      },
    ],
    sourceIds: ['escPraevention2021', 'ewgsop2', 'whoBewegung2020', 'stikoImpfempfehlungen', 'dgeProtein'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Muskel-Kompass 40+', en: 'Muscle compass 40+' }, path: '/praevention/muskel-kompass' },
      { label: { de: 'Reisemedizinische Beratung', en: 'Travel health consultation' }, path: '/leistungen/reiseberatung' },
      { label: { de: 'Präventions-Check', en: 'Prevention check-up' }, path: '/praevention/praeventions-check' },
    ],
    faq: [
      {
        q: { de: 'Kann ich mich im selben Termin impfen lassen?', en: 'Can I be vaccinated in the same appointment?' },
        a: {
          de: 'Ja, wenn der Impfstoff vorrätig ist. Sonst vereinbaren wir einen kurzen Impftermin.',
          en: 'Yes, if the vaccine is in stock. Otherwise we arrange a short vaccination appointment.',
        },
      },
    ],
  },
};
