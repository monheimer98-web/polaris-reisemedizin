/**
 * Sprechstunde Wechseljahre (DE/EN). Orientierung, Zeit und Plan; Optionen
 * nach S3-Leitlinie neutral erklärt. Keine Hormon- oder Präparatenamen,
 * kein „Hormonstatus", gynäkologische Vorsorge bleibt bei der Frauenarztpraxis.
 */
import type { PreventionOffer } from '../types';
import { honorar, weg, caDe, caEn, euroDe, euroEn } from '../preise';

export const wechseljahre: PreventionOffer = {
  slug: 'wechseljahre',
  bookingType: 'pv-e1',
  group: 'begleitung',
  stage: 2,
  shortName: { de: 'Sprechstunde Wechseljahre', en: 'Menopause consultation' },
  teaser: {
    de: 'Zeit für Ihre Fragen: Beschwerden strukturiert erfassen, Herz, Knochen, Muskeln und Schlaf mitdenken, Möglichkeiten sachlich besprechen.',
    en: 'Time for your questions: a structured look at symptoms, heart, bones, muscles and sleep, with your options explained objectively.',
  },
  facts: {
    forWhom: {
      de: 'Frauen etwa ab 40, die Veränderungen bemerken oder sich vorbereiten möchten.',
      en: 'Women from about 40 who notice changes or want to prepare.',
    },
    appointments: {
      de: 'Erstgespräch ca. 45–60 Min., Plantermin ca. 20–30 Min. nach 1–3 Wochen, Verlaufstermine ca. 20 Min. nach 8–12 Wochen und nach 6 Monaten.',
      en: 'First consultation approx. 45–60 min, plan appointment approx. 20–30 min after 1–3 weeks, follow-ups approx. 20 min after 8–12 weeks and after 6 months.',
    },
    fee: {
      de: `Je nachdem, was Sie brauchen, nach GOÄ und je Termin. Typisch für das erste Jahr mit vier Terminen: ${caDe(weg.wechseljahreJahr)}.`,
      en: `Depending on what you need, under the GOÄ and per appointment. Typically for the first year with four appointments: ${caEn(weg.wechseljahreJahr)}.`,
    },
    lab: {
      de: 'nur bei Bedarf, direkt vom Labor; keine routinemäßigen Hormonwerte',
      en: 'only if needed, billed directly by the laboratory; no routine hormone tests',
    },
  },
  steps: [
    {
      title: { de: 'Termin buchen, Fragebogen ausfüllen', en: 'Book and complete the questionnaire' },
      text: {
        de: 'Mit dem Fragebogen erfassen Sie Ihre Beschwerden vorab in Ruhe. Bringen Sie bitte Ihre Medikamentenliste und, wenn vorhanden, die letzten Befunde Ihrer Frauenarztpraxis mit.',
        en: 'The questionnaire lets you record your symptoms calmly beforehand. Please bring your list of medications and, if available, recent reports from your gynaecologist.',
      },
    },
    {
      title: { de: 'Erstgespräch mit Untersuchung', en: 'First consultation with examination' },
      text: {
        de: 'Wir sprechen über Zyklus, Schlaf, Stimmung, Energie, Arbeit und Belastung, messen Blutdruck, Gewicht und Taille und sehen auf Herz, Knochen und Muskeln.',
        en: 'We talk about your cycle, sleep, mood, energy, work and stress, measure blood pressure, weight and waist, and look at heart, bones and muscles.',
      },
    },
    {
      title: { de: 'Ihre Möglichkeiten und Ihr Plan', en: 'Your options and your plan' },
      text: {
        de: 'Im Plantermin einige Wochen später erklären wir die Möglichkeiten nach Leitlinie mit Nutzen und Risiken – vom Alltag bis zur medizinischen Behandlung – und Sie erhalten Ihren schriftlichen Plan mit klaren Prioritäten.',
        en: 'In the plan appointment a few weeks later we explain the guideline-based options with their benefits and risks – from everyday measures to medical treatment – and you receive your written plan with clear priorities.',
      },
    },
    {
      title: { de: 'Verlauf', en: 'Follow-up' },
      text: {
        de: 'Nach 8–12 Wochen sehen wir gemeinsam, was sich verändert hat, und passen den Plan an. Alles Gynäkologische stimmen wir mit Ihrer Frauenarztpraxis ab.',
        en: 'After 8–12 weeks we review together what has changed and adjust the plan. Anything gynaecological is coordinated with your gynaecologist.',
      },
    },
  ],
  costs: {
    de: [
      `Abrechnung je Termin nach GOÄ (Regelsatz): Erstgespräch mit Untersuchung ${euroDe(honorar.erstgespraech)}, Plantermin mit schriftlichem Plan ${euroDe(honorar.planTermin)}, Verlaufstermin ${euroDe(honorar.verlauf)}, Jahresgespräch ${euroDe(honorar.erstgespraech)}. Ein erstes Jahr mit Erstgespräch, Plan und zwei Verläufen kostet ${caDe(weg.wechseljahreJahr)}.`,
      'Laborwerte nur, wenn sie für Ihre Fragestellung nötig sind; das Labor berechnet sie direkt. Vor dem Termin erhalten Sie eine Kosteninformation.',
      'Die Behandlung von Wechseljahresbeschwerden ist ärztliche Heilbehandlung. Private Krankenversicherungen und Beihilfe erstatten sie je nach Tarif; gesetzlich Versicherte zahlen selbst.',
    ],
    en: [
      `Billed per appointment under the GOÄ (standard rate): first consultation with examination ${euroEn(honorar.erstgespraech)}, plan appointment with written plan ${euroEn(honorar.planTermin)}, follow-up appointment ${euroEn(honorar.verlauf)}, annual review ${euroEn(honorar.erstgespraech)}. A first year with first consultation, plan and two follow-ups costs ${caEn(weg.wechseljahreJahr)}.`,
      'Lab tests only when needed for your question; the laboratory bills them directly. You receive a cost overview before the appointment.',
      'Treating menopausal symptoms is medical treatment. Private health insurers and Beihilfe reimburse it depending on the tariff; people with statutory insurance pay themselves.',
    ],
  },
  page: {
    meta: {
      title: {
        de: 'Sprechstunde Wechseljahre: Orientierung, Zeit und ein Plan',
        en: 'Menopause consultation: guidance, time and a plan',
      },
      description: {
        de: 'Hitzewallungen, Schlaf, Stimmung, Gewicht: ärztliche Sprechstunde mit Zeit, Möglichkeiten nach Leitlinie und schriftlichem Plan. Privatpraxis Langenfeld.',
        en: 'Hot flushes, sleep, mood, weight: a medical consultation with time, guideline-based options and a written plan. Private practice in Langenfeld.',
      },
      eyebrow: { de: 'Prävention & Lebensstil', en: 'Prevention & lifestyle' },
      lead: {
        de: 'Hitzewallungen, schlechter Schlaf, Stimmungsschwankungen, weniger Energie: Die Wechseljahre verändern viel, oft schon ab Anfang 40. In unserer Sprechstunde nehmen wir uns Zeit für Ihre Fragen und erstellen mit Ihnen einen schriftlichen Plan mit klaren Prioritäten.',
        en: 'Hot flushes, poor sleep, mood swings, less energy: menopause changes a lot, often from the early forties. In our consultation we take time for your questions and create a written plan with clear priorities together with you.',
      },
    },
    sections: [
      {
        id: 'gemeinsam-ansehen',
        heading: { de: 'Was wir gemeinsam ansehen', en: 'What we look at together' },
        body: {
          de: [
            'Wir erfassen Ihre Beschwerden mit einem strukturierten Fragebogen und sprechen über das, was Sie im Alltag am meisten einschränkt. Dazu gehören auch Themen, die selten Platz finden: Konzentration, Gelenke, Lust und Beschwerden im Intimbereich.',
          ],
          en: [
            'We record your symptoms with a structured questionnaire and talk about what limits you most in everyday life. This includes topics that rarely get time: concentration, joints, libido and intimate discomfort.',
          ],
        },
        list: {
          de: [
            'Schlaf, Stimmung und Energie,',
            'Herz und Gefäße: Blutdruck, Blutfette, Gewicht und Taille,',
            'Knochen: Ihre Risikofaktoren für Osteoporose,',
            'Muskeln und Kraft, Bewegung und Ernährung mit genug Eiweiß.',
          ],
          en: [
            'sleep, mood and energy,',
            'heart and blood vessels: blood pressure, lipids, weight and waist,',
            'bones: your risk factors for osteoporosis,',
            'muscles and strength, activity and diet with enough protein.',
          ],
        },
        callout: {
          variant: 'caution',
          title: { de: 'Hilfe sofort', en: 'Immediate help' },
          text: {
            de: 'Bei Gedanken, sich das Leben zu nehmen: sofort 112 oder am selben Tag in die Notaufnahme. Die Telefonseelsorge ist rund um die Uhr erreichbar: 0800 111 0 111 oder 0800 111 0 222.',
            en: 'If you have thoughts of taking your own life: call 112 immediately or go to an emergency department the same day. The German crisis line (Telefonseelsorge) is available around the clock: 0800 111 0 111 or 0800 111 0 222.',
          },
        },
      },
      {
        id: 'moeglichkeiten',
        heading: { de: 'Ihre Möglichkeiten, sachlich erklärt', en: 'Your options, explained objectively' },
        body: {
          de: [
            'Es gibt nicht den einen richtigen Weg. Wir erklären die Möglichkeiten nach der aktuellen Leitlinie mit Nutzen und Risiken: Veränderungen im Alltag, Elemente der kognitiven Verhaltenstherapie bei Schlafproblemen und Hitzewallungen sowie medizinische Behandlungsmöglichkeiten. Was zu Ihnen passt, entscheiden Sie mit uns gemeinsam.',
            'Laborwerte bestimmen wir nur, wenn sie eine Frage beantworten. Ein „Hormonstatus" ist für die Diagnose der Wechseljahre in der Regel nicht nötig.',
          ],
          en: [
            'There is no single right way. We explain the options according to the current guideline with their benefits and risks: everyday changes, elements of cognitive behavioural therapy for sleep problems and hot flushes, and medical treatment options. You decide together with us what suits you.',
            'We only measure lab values if they answer a question. A “hormone profile” is usually not needed to diagnose menopause.',
          ],
        },
      },
      {
        id: 'frauenarztpraxis',
        heading: { de: 'Zusammenarbeit mit Ihrer Frauenarztpraxis', en: 'Working with your gynaecologist' },
        body: {
          de: [
            'Die gynäkologische Untersuchung, Ultraschall und Krebsfrüherkennung bleiben bei Ihrer Frauenarztpraxis. Mit Ihrem Einverständnis schicken wir ihr Ihren Plan, damit alle auf demselben Stand sind. Ihre Praxis wählen Sie selbst.',
          ],
          en: [
            'Gynaecological examination, ultrasound and cancer screening stay with your gynaecologist. With your consent we send them your plan so that everyone is up to date. You choose your practice yourself.',
          ],
        },
        callout: {
          variant: 'important',
          title: { de: 'Bitte zeitnah in die Frauenarztpraxis', en: 'Please see your gynaecologist promptly' },
          text: {
            de: 'bei einer Blutung nach mindestens zwölf Monaten ohne Periode, bei sehr starken oder unregelmäßigen Blutungen und bei Veränderungen der Brust.',
            en: 'if you bleed after at least twelve months without a period, have very heavy or irregular bleeding, or notice changes in your breast.',
          },
        },
      },
      {
        id: 'nicht-dazu',
        heading: { de: 'Was nicht dazugehört', en: 'What is not included' },
        body: { de: ['Bewusst nicht im Angebot sind:'], en: ['We deliberately do not offer:'] },
        list: {
          de: [
            'Speichel-Hormontests und Hormonprofile ohne Fragestellung,',
            'individuell gemischte Hormonzubereitungen,',
            'Infusionen und Nahrungsergänzungspakete,',
            'gynäkologische Untersuchungen und Verhütungsberatung.',
          ],
          en: [
            'saliva hormone tests and hormone profiles without a specific question,',
            'individually compounded hormone preparations,',
            'infusions and supplement packages,',
            'gynaecological examinations and contraceptive advice.',
          ],
        },
      },
    ],
    sourceIds: ['awmfMenopause', 'dvoOsteoporose', 'escPraevention2021', 'awmfInsomnie', 'dgeProtein'],
    lastReviewed: new Date('2026-10-28'),
    related: [
      { label: { de: 'Schlaf, Energie & Jetlag', en: 'Sleep, energy & jet lag' }, path: '/praevention/schlaf-und-jetlag' },
      { label: { de: 'Muskel-Kompass 40+', en: 'Muscle compass 40+' }, path: '/praevention/muskel-kompass' },
      { label: { de: 'Ernährung, Gewicht & Stoffwechsel', en: 'Nutrition, weight & metabolism' }, path: '/praevention/gewicht-und-stoffwechsel' },
      { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
    ],
    faq: [
      {
        q: { de: 'Ab wann beginnen die Wechseljahre?', en: 'When does menopause begin?' },
        a: {
          de: 'Die Übergangszeit beginnt oft Anfang bis Mitte 40, manchmal früher. Typisch sind zunächst Veränderungen des Zyklus, Schlafprobleme oder Stimmungsschwankungen. Die letzte Periode liegt im Mittel um das 51. Lebensjahr.',
          en: 'The transition often starts in the early to mid forties, sometimes earlier. Typical first signs are cycle changes, sleep problems or mood swings. The final period occurs on average around age 51.',
        },
      },
      {
        q: { de: 'Brauche ich einen Hormontest?', en: 'Do I need a hormone test?' },
        a: {
          de: 'Meist nicht. Ab etwa 45 Jahren lassen sich die Wechseljahre in der Regel anhand der Beschwerden und des Zyklus einordnen. Ob ein Wert in Ihrer Situation weiterhilft, besprechen wir im Termin.',
          en: 'Usually not. From about 45, menopause can generally be identified from symptoms and cycle changes. We discuss in the appointment whether a test would help in your situation.',
        },
      },
      {
        q: { de: 'Ersetzt die Sprechstunde meine Frauenarztpraxis?', en: 'Does the consultation replace my gynaecologist?' },
        a: {
          de: 'Nein. Wir nehmen uns Zeit für Beratung, Herz, Knochen, Muskeln und Schlaf. Untersuchung, Vorsorge und gynäkologische Behandlung bleiben in Ihrer Frauenarztpraxis; mit Ihrem Einverständnis stimmen wir uns ab.',
          en: 'No. We take time for advice, heart, bones, muscles and sleep. Examinations, screening and gynaecological treatment stay with your gynaecologist; with your consent we coordinate with them.',
        },
      },
    ],
  },
};
