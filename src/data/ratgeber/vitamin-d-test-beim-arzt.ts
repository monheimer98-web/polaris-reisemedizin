/**
 * Ratgeber „Vitamin D, B12 und Eisen testen lassen" (DE/EN), Bereich
 * „Prävention & Lebensstil". Antwort auf „vitamin d test beim arzt kosten"
 * (Messung 12.11.2026, Spitze November bis Februar). Reine Information: wann
 * ein Wert etwas ändert, was die Kasse zahlt, was es kostet. Kein Einzeltest
 * als Produkt, keine Präparate, keine Dosierungen, keine Aussage, ein Mangel
 * bleibe ohne Test unentdeckt (§ 3, § 10, § 11 HWG). Fachlich nach
 * team-2026-11-04/medizin-labor.md Kap. 5 und 6. Beträge aus
 * `praevention/preise.ts`; Entwurf, Laborbeträge vor Veröffentlichung mit dem
 * Labor abgleichen.
 */
import type { ClinicalPage, Localized } from '../types';
import type { Source } from '../sources';
import { laborwert, zweiTermineWeg, caDe, caEn } from '../praevention/preise';

const laborAlleDrei = laborwert.vitaminD + laborwert.vitaminB12 + laborwert.ferritinMitBlutbild;

/** Neue Quellen dieses Ratgebers – in `sources.ts` eingemischt. */
export const vitaminTestQuellen = {
  igelVitaminD: {
    publisher: 'IGeL-Monitor (Medizinischer Dienst Bund)',
    title: {
      de: 'Früherkennungsuntersuchung auf Vitamin-D-Mangel',
      en: 'Screening for vitamin D deficiency (IGeL-Monitor assessment)',
    },
    url: 'https://igel-monitor.de/igel-a-z/igel/show/frueherkennungsuntersuchung-auf-vitamin-d-mangel.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Bewertung „unklar“ für die Messung ohne Beschwerden (erstellt am 9. November 2022).',
      en: 'Rated “unclear” for testing without symptoms (published 9 November 2022).',
    },
  },
  igelVitaminB12: {
    publisher: 'IGeL-Monitor (Medizinischer Dienst Bund)',
    title: {
      de: 'Früherkennung auf Vitamin-B12-Mangel und Vitamingabe',
      en: 'Screening for vitamin B12 deficiency and vitamin supplementation (IGeL-Monitor assessment)',
    },
    url: 'https://igel-monitor.de/igel-a-z/igel/show/frueherkennung-auf-vitamin-b12-mangel-und-vitamingabe.html',
    retrieved: new Date('2026-11-12'),
    note: {
      de: 'Bewertung „unklar“ (erstellt am 24. März 2022).',
      en: 'Rated “unclear” (published 24 March 2022).',
    },
  },
} satisfies Record<string, Source>;

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const vitaminTestSummary: Localized = {
  de: 'Wann eine Messung von Vitamin D, B12 oder Eisen etwas ändert, wann die Krankenkasse zahlt und was die Werte bei uns kosten.',
  en: 'When testing vitamin D, B12 or iron makes a difference, when statutory insurance pays and what the tests cost with us.',
};

export const vitaminTestGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Vitamin D, B12 und Eisen testen lassen: wann es sinnvoll ist, was es kostet',
      en: 'Testing vitamin D, B12 and iron: when it makes sense and what it costs',
    },
    description: {
      de: 'Vitamin-D-Test beim Arzt in Langenfeld: wann eine Messung etwas ändert, wann die Krankenkasse zahlt und Beispielkosten für Vitamin D, B12 und Eisen.',
      en: 'Vitamin D test at the doctor in Langenfeld: when testing makes a difference, when statutory insurance pays and example fees for vitamin D, B12 and iron.',
    },
    eyebrow: { de: 'Ratgeber Prävention', en: 'Prevention guide' },
    lead: {
      de: 'Vitamin D, Vitamin B12 und Eisen gehören zu den Blutwerten, nach denen am häufigsten gefragt wird. Nicht bei jedem ändert eine Messung etwas. Hier lesen Sie, wann die Werte etwas aussagen, wann die Krankenkasse sie zahlt und was sie bei uns kosten.',
      en: 'Vitamin D, vitamin B12 and iron are among the blood tests people ask about most often. Testing does not make a difference for everyone. Here you can read when the values are informative, when statutory insurance pays for them and what they cost with us.',
    },
  },
  sections: [
    {
      id: 'vitamin-d',
      heading: { de: 'Vitamin D: wann eine Messung etwas ändert', en: 'Vitamin D: when testing makes a difference' },
      body: {
        de: [
          'Der Vitamin-D-Wert schwankt mit der Jahreszeit und ist im Winter meist niedriger als im Sommer. Für die meisten Menschen reicht eine Empfehlung ohne Messung. Der IGeL-Monitor bewertet die Messung ohne Beschwerden mit „unklar“: Ein Nutzen ist nicht belegt, ein Schaden auch nicht.',
          'Sinnvoll ist die Messung, wenn das Ergebnis eine Entscheidung ändert, zum Beispiel:',
        ],
        en: [
          'The vitamin D level varies with the season and is usually lower in winter than in summer. For most people, advice without testing is enough. The IGeL-Monitor rates testing without symptoms as “unclear”: a benefit has not been shown, nor has harm.',
          'Testing makes sense when the result changes a decision, for example:',
        ],
      },
      list: {
        de: [
          'bei einer Erkrankung, die die Aufnahme im Darm stört,',
          'bei einer Nierenerkrankung,',
          'vor einer geplanten Behandlung wegen Knochenschwund.',
        ],
        en: [
          'with a condition that impairs absorption in the gut,',
          'with kidney disease,',
          'before planned treatment for bone loss.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Müde im Winter?', en: 'Tired in winter?' },
        text: {
          de: 'Bei Müdigkeit ohne weiteren Hinweis gehört Vitamin D nicht zu den Werten, die die Leitlinie der Allgemeinmedizin zuerst empfiehlt. Hält die Müdigkeit an, lohnt ein Gespräch über mögliche Ursachen mehr als ein einzelner Wert.',
          en: 'For tiredness without any other pointer, vitamin D is not among the tests the German primary-care guideline recommends first. If tiredness persists, a conversation about possible causes is worth more than a single value.',
        },
      },
    },
    {
      id: 'vitamin-b12',
      heading: { de: 'Vitamin B12', en: 'Vitamin B12' },
      body: {
        de: [
          'B12 braucht der Körper für die Blutbildung und die Nerven. Eine Messung ist vor allem dann sinnvoll, wenn ein Risiko und passende Beschwerden zusammenkommen:',
        ],
        en: [
          'The body needs B12 for blood formation and the nerves. Testing makes most sense when a risk and matching symptoms come together:',
        ],
      },
      list: {
        de: [
          'rein pflanzliche Ernährung,',
          'höheres Alter,',
          'bestimmte Medikamente, die Sie dauerhaft einnehmen,',
          'Taubheitsgefühl, Kribbeln oder ein unsicherer Gang.',
        ],
        en: [
          'a purely plant-based diet,',
          'older age,',
          'certain medicines taken long term,',
          'numbness, tingling or an unsteady gait.',
        ],
      },
    },
    {
      id: 'eisen',
      heading: { de: 'Eisen: der Speicherwert zählt', en: 'Iron: the storage value counts' },
      body: {
        de: [
          'Das Eisen im Blut schwankt über den Tag so stark, dass es allein wenig aussagt. Aussagekräftig ist das Ferritin: Es zeigt, wie gut die Eisenspeicher gefüllt sind. Wir bestimmen es zusammen mit einem kleinen Blutbild.',
          'Ein Anlass besteht zum Beispiel bei starker Regelblutung, rein pflanzlicher Ernährung, regelmäßiger Blutspende oder viel Ausdauersport. Während eines Infekts messen wir nicht, weil der Wert dann zu hoch ausfallen kann. Ein niedriger Speicherwert bei Männern und bei Frauen nach den Wechseljahren braucht eine Abklärung der Ursache; dabei arbeiten wir mit Ihrer Hausarztpraxis zusammen.',
        ],
        en: [
          'Iron in the blood varies so much over the day that on its own it says little. The informative value is ferritin: it shows how well your iron stores are filled. We measure it together with a basic blood count.',
          'There is a reason to test, for example, with heavy periods, a purely plant-based diet, regular blood donation or a lot of endurance sport. We do not test during an infection because the value can then be falsely high. A low storage value in men and in women after menopause needs its cause investigated; we work with your GP on that.',
        ],
      },
    },
    {
      id: 'krankenkasse',
      heading: { de: 'Was die Krankenkasse zahlt', en: 'What statutory insurance covers' },
      body: {
        de: [
          'Besteht ein medizinisch begründeter Verdacht auf einen Mangel, zahlt die gesetzliche Krankenkasse die Messung in Ihrer Hausarztpraxis. Ohne Beschwerden und ohne Risiko ist sie eine Selbstzahlerleistung, auch dort.',
          'Bei uns zahlen gesetzlich Versicherte immer selbst. Werte, die Sie ohne medizinischen Anlass wünschen, kennzeichnen wir auf der Rechnung; private Versicherungen erstatten sie meist nicht.',
        ],
        en: [
          'If there is a medically justified suspicion of a deficiency, statutory insurance pays for the test at your GP. Without symptoms and without a risk it is a self-pay service there too.',
          'With us, people with statutory insurance always pay themselves. We mark tests you request without a medical reason on the invoice; private insurers usually do not reimburse them.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Was es bei uns kostet', en: 'What it costs with us' },
      body: {
        de: [
          `Wir rechnen nach der Gebührenordnung für Ärzte (GOÄ) ab. Das ärztliche Honorar für beide Termine des Laborwerte-Checks beträgt ${caDe(zweiTermineWeg.werte)}: Ersttermin mit Blutabnahme und Befundtermin mit schriftlichem Werte-Bogen. Das Labor stellt seine Rechnung selbst:`,
        ],
        en: [
          `We bill under the German fee schedule for doctors (GOÄ). The medical fee for both appointments of the lab value check is ${caEn(zweiTermineWeg.werte)}: first appointment with blood sample and results appointment with a written summary. The laboratory issues its own invoice:`,
        ],
      },
      list: {
        de: [
          `Vitamin D: Labor ${caDe(laborwert.vitaminD)}, mit Honorar zusammen ${caDe(zweiTermineWeg.werte + laborwert.vitaminD)}.`,
          `Vitamin B12: Labor ${caDe(laborwert.vitaminB12)}, mit Honorar zusammen ${caDe(zweiTermineWeg.werte + laborwert.vitaminB12)}.`,
          `Eisenspeicher (Ferritin) mit kleinem Blutbild: Labor ${caDe(laborwert.ferritinMitBlutbild)}, mit Honorar zusammen ${caDe(zweiTermineWeg.werte + laborwert.ferritinMitBlutbild)}.`,
          `Alle drei in einer Blutabnahme: Labor ${caDe(laborAlleDrei)}, mit Honorar zusammen ${caDe(zweiTermineWeg.werte + laborAlleDrei)}.`,
        ],
        en: [
          `Vitamin D: laboratory ${caEn(laborwert.vitaminD)}, together with the medical fee ${caEn(zweiTermineWeg.werte + laborwert.vitaminD)}.`,
          `Vitamin B12: laboratory ${caEn(laborwert.vitaminB12)}, together with the medical fee ${caEn(zweiTermineWeg.werte + laborwert.vitaminB12)}.`,
          `Iron stores (ferritin) with a basic blood count: laboratory ${caEn(laborwert.ferritinMitBlutbild)}, together with the medical fee ${caEn(zweiTermineWeg.werte + laborwert.ferritinMitBlutbild)}.`,
          `All three from one blood sample: laboratory ${caEn(laborAlleDrei)}, together with the medical fee ${caEn(zweiTermineWeg.werte + laborAlleDrei)}.`,
        ],
      },
      links: [
        { label: { de: 'Beispielkosten Prävention', en: 'Example fees for preventive care' }, path: '/praevention/kosten' },
        { label: { de: 'Großes Blutbild: Kosten', en: 'Full blood count: costs' }, path: '/ratgeber/grosses-blutbild-kosten' },
      ],
      callout: {
        variant: 'info',
        title: { de: 'Kosten vorab schriftlich', en: 'Costs in writing beforehand' },
        text: {
          de: 'Die voraussichtlichen Kosten erhalten Sie vor der Blutabnahme schriftlich. Wenn sich im Gespräch zeigt, dass ein Wert für Sie nichts ändert, sagen wir das offen. Dann zahlen Sie nur das Gespräch.',
          en: 'You receive the expected costs in writing before any blood is taken. If the conversation shows that a test would not change anything for you, we say so openly. You then only pay for the consultation.',
        },
      },
    },
    {
      id: 'ablauf',
      heading: { de: 'So läuft es ab', en: 'How it works' },
      body: {
        de: [
          'Sie buchen den Ersttermin des Laborwerte-Checks und kommen in die Praxis, je nach Woche auch am Abend oder am Samstag. Wir besprechen, welche Werte bei Ihnen etwas aussagen, nennen die Kosten und nehmen direkt im Anschluss Blut ab. Sie müssen dafür nicht nüchtern sein.',
          'Bitte nennen Sie uns Ihre Nahrungsergänzung. Präparate mit Biotin können einige Messungen stören und sollten vorher pausiert werden. Die Ergebnisse besprechen wir einige Tage später, auf Wunsch am Telefon.',
          'Wir verkaufen keine Präparate und bieten keine Vitamin-Kuren oder Infusionen an.',
        ],
        en: [
          'You book the first appointment of the lab value check and come to the practice, depending on the week also in the evening or on Saturday. We discuss which tests are informative for you, tell you the costs and take the blood sample straight afterwards. You do not need to fast.',
          'Please tell us about your supplements. Products containing biotin can interfere with some tests and should be paused beforehand. We discuss the results a few days later, by phone if you wish.',
          'We do not sell supplements and do not offer vitamin courses or infusions.',
        ],
      },
    },
  ],
  sourceIds: ['igelVitaminD', 'igelVitaminB12', 'dvoOsteoporose', 'awmfMuedigkeit', 'goae'],
  lastReviewed: new Date('2026-11-12'),
  related: [
    { label: { de: 'Großes Blutbild: Kosten', en: 'Full blood count: costs' }, path: '/ratgeber/grosses-blutbild-kosten' },
    { label: { de: 'Laborwerte-Check', en: 'Lab value check' }, path: '/praevention/laborwerte-check' },
    { label: { de: 'Welche Blutwerte wofür?', en: 'Which blood values for what?' }, path: '/ratgeber/blutwerte-erklaert' },
    { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
    { label: { de: 'Beispielkosten', en: 'Example fees' }, path: '/praevention/kosten' },
  ],
  faq: [
    {
      q: { de: 'Was kostet ein Vitamin-D-Test beim Arzt?', en: 'What does a vitamin D test at the doctor cost?' },
      a: {
        de: `Beim Labor ${caDe(laborwert.vitaminD)}. Dazu kommt das ärztliche Honorar nach GOÄ für beide Termine des Laborwerte-Checks, bei uns ${caDe(zweiTermineWeg.werte)}. Zusammen sind es ${caDe(zweiTermineWeg.werte + laborwert.vitaminD)}.`,
        en: `${caEn(laborwert.vitaminD)} at the laboratory. In addition there is the medical fee under the GOÄ for both appointments of the lab value check, with us ${caEn(zweiTermineWeg.werte)}. Together that is ${caEn(zweiTermineWeg.werte + laborwert.vitaminD)}.`,
      },
    },
    {
      q: { de: 'Zahlt die Krankenkasse den Vitamin-D-Test?', en: 'Does statutory insurance pay for the vitamin D test?' },
      a: {
        de: 'Ja, wenn ein medizinisch begründeter Verdacht auf einen Mangel besteht, zum Beispiel bei bestimmten chronischen Erkrankungen. Ohne Beschwerden und ohne Risiko zahlen Sie die Messung selbst.',
        en: 'Yes, if there is a medically justified suspicion of a deficiency, for example with certain chronic conditions. Without symptoms and without a risk you pay for the test yourself.',
      },
    },
    {
      q: { de: 'Ist ein Vitamin-D-Test sinnvoll?', en: 'Does a vitamin D test make sense?' },
      a: {
        de: 'Das hängt von Ihrer Situation ab. Der IGeL-Monitor bewertet die Messung ohne Beschwerden mit „unklar“. Sinnvoll ist sie, wenn das Ergebnis eine Entscheidung ändert. Das klären wir im Gespräch vor der Blutabnahme.',
        en: 'That depends on your situation. The IGeL-Monitor rates testing without symptoms as “unclear”. It makes sense when the result changes a decision. We clarify that in the conversation before taking blood.',
      },
    },
    {
      q: { de: 'Ich habe schon einen Selbsttest gemacht. Was nun?', en: 'I have already done a home test. What now?' },
      a: {
        de: 'Bringen Sie das Ergebnis mit. Im Laborwerte-Check ordnen wir es ein und sagen Ihnen, ob daraus etwas folgt.',
        en: 'Bring the result with you. In the lab value check we put it into context and tell you whether anything follows from it.',
      },
    },
    {
      q: { de: 'Wann im Jahr sollte man Vitamin D messen?', en: 'When in the year should vitamin D be measured?' },
      a: {
        de: 'Der Wert ist am Ende des Winters meist am niedrigsten und am Ende des Sommers am höchsten. Wichtiger als der Zeitpunkt ist, ob die Messung für Sie überhaupt etwas ändert.',
        en: 'The level is usually lowest at the end of winter and highest at the end of summer. More important than the timing is whether testing changes anything for you at all.',
      },
    },
    {
      q: { de: 'Muss ich nüchtern kommen?', en: 'Do I need to fast?' },
      a: {
        de: 'Nein. Für Vitamin D, B12 und den Eisenspeicher müssen Sie nicht nüchtern sein.',
        en: 'No. You do not need to fast for vitamin D, B12 or iron stores.',
      },
    },
  ],
};
