/**
 * Ratgeber „Haarausfall: Zu welchem Arzt gehen?" (DE/EN), Bereich Prävention.
 * Antwort auf „haarausfall arzt" und „haarausfall welcher arzt" (Vorschläge
 * der Google-Suche, 20.11.2026: „haarausfall arzt düsseldorf" an erster
 * Stelle). Text nach haare-seitentexte.md, Ratgeber 1 (Notizen der
 * Leitsitzung). Ehrlich: Für vieles ist die Kassenpraxis der richtige Weg,
 * die Haarsprechstunde ist eine von vier Türen.
 *
 * Sprachregeln wie auf den Haar-Seiten (keine Arzneimittel- oder Wirkstoff-
 * namen, kein „auf Rezept", keine Wirkversprechen). Wir haben kein
 * Auflichtgerät: die Vergrößerung steht deshalb als „in manchen Praxen".
 */
import type { ClinicalPage, Localized } from '../types';
import { haarPreis, caDe, caEn } from '../praevention/preise';

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const haarausfallArztSummary: Localized = {
  de: 'Hausarzt, Hautarzt, Frauenarzt oder Haarsprechstunde: wer bei Haarausfall hilft, was untersucht wird und wann es eilt.',
  en: 'GP, dermatologist, gynaecologist or hair consultation: who helps with hair loss, what is examined and when it is urgent.',
};

export const haarausfallArztGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Haarausfall: Zu welchem Arzt gehen?',
      en: 'Hair loss: which doctor should you see?',
    },
    description: {
      de: 'Hausarzt, Hautarzt oder Haarsprechstunde? Wer bei Haarausfall hilft, was untersucht wird und wann es eilt. Rat aus Langenfeld bei Düsseldorf.',
      en: 'GP, dermatologist or hair consultation? Who helps with hair loss, what is examined and when it is urgent. Advice from Langenfeld near Düsseldorf.',
    },
    eyebrow: { de: 'Ratgeber Prävention', en: 'Prevention guide' },
    lead: {
      de: 'Jeden Tag fallen Haare aus, bis etwa 100 am Tag gelten als normal. Fallen deutlich mehr aus oder wird das Haar sichtbar dünner, lohnt sich ein Arztbesuch. Welche Ärztin oder welcher Arzt passt, hängt davon ab, wie der Haarausfall aussieht.',
      en: 'Some hair falls out every day; up to about 100 hairs a day is considered normal. If noticeably more falls out or your hair becomes visibly thinner, it is worth seeing a doctor. Which doctor is right depends on what the hair loss looks like.',
    },
  },
  sections: [
    {
      id: 'hausarzt',
      heading: { de: 'Die Hausarztpraxis', en: 'Your GP' },
      body: {
        de: [
          'Ein guter erster Weg, wenn der Haarausfall plötzlich stärker wird und Sie sich zugleich müde oder anders fühlen als sonst. Dort lassen sich Blutwerte wie Eisen und Schilddrüse bestimmen. Bei Beschwerden zahlt das die gesetzliche Krankenkasse.',
        ],
        en: [
          'A good first step if the hair loss suddenly gets worse and at the same time you feel tired or different from usual. Blood values such as iron and thyroid can be tested there. If you have symptoms, statutory insurance pays for this.',
        ],
      },
    },
    {
      id: 'hautarzt',
      heading: { de: 'Die Hautarztpraxis', en: 'A dermatologist' },
      body: {
        de: ['Die richtige Adresse, wenn:'],
        en: ['The right place if:'],
      },
      list: {
        de: [
          'runde, kahle Stellen entstehen,',
          'die Kopfhaut gerötet, entzündet oder stark schuppig ist, juckt oder Pusteln hat,',
          'an kahlen Stellen Narben zu sehen sind,',
          'auch Augenbrauen oder Wimpern ausfallen,',
          'der Befund unklar ist.',
        ],
        en: [
          'round bald patches appear,',
          'the scalp is red, inflamed or very flaky, itches or has pustules,',
          'scars are visible in bald areas,',
          'eyebrows or eyelashes are also falling out,',
          'the findings are unclear.',
        ],
      },
    },
    {
      id: 'frauenarzt',
      heading: { de: 'Die Frauenarztpraxis', en: 'A gynaecologist' },
      body: {
        de: [
          'Sie hilft, wenn der Haarausfall mit Zyklusstörungen, unreiner Haut, vermehrter Körperbehaarung, einer Geburt oder den Wechseljahren zusammenfällt.',
        ],
        en: [
          'A gynaecologist can help if the hair loss coincides with irregular periods, blemished skin, increased body hair, childbirth or the menopause.',
        ],
      },
    },
    {
      id: 'haarsprechstunde',
      heading: { de: 'Eine private Haarsprechstunde', en: 'A private hair consultation' },
      body: {
        de: [
          'Sie passt, wenn das Haar langsam dünner wird, Sie die Ursache und Ihre Blutwerte in Ruhe klären möchten und einen Plan suchen. In Langenfeld bieten wir die Haarsprechstunde in zwei Terminen an: zuerst Gespräch, Untersuchung von Kopfhaut, Haaren und Nägeln, Fotos und Blutabnahme, danach die Besprechung von Befund und Plan, auf Wunsch am Telefon.',
          'Zeigt sich bei uns ein Hinweis auf eine Erkrankung der Kopfhaut oder kreisrunden Haarausfall, sagen wir Ihnen das und empfehlen die Hautarztpraxis.',
        ],
        en: [
          'It suits you if your hair is slowly thinning, you would like to clarify the cause and your blood values calmly and you are looking for a plan. In Langenfeld we offer the hair consultation in two appointments: first a conversation, examination of scalp, hair and nails, photos and a blood sample, then a discussion of the results and a plan, by phone if you wish.',
          'If we see signs of a scalp disease or patchy hair loss, we tell you and recommend a dermatologist.',
        ],
      },
      links: [{ label: { de: 'Zur Haarsprechstunde', en: 'Hair consultation' }, path: '/praevention/haare' }],
    },
    {
      id: 'was-passiert',
      heading: { de: 'Was beim Arzt passiert', en: 'What happens at the doctor' },
      body: { de: [], en: [] },
      list: {
        de: [
          'ein Gespräch über Verlauf, Familie, Medikamente, Ernährung und Belastungen der letzten Monate,',
          'ein Blick auf Kopfhaut, Haare und Nägel, in manchen Praxen mit einem Vergrößerungsgerät,',
          'ein leichter Zug an den Haaren, um zu prüfen, wie fest sie sitzen,',
          'Blutwerte, meist Ferritin (Eisenspeicher), kleines Blutbild und TSH (Schilddrüse).',
        ],
        en: [
          'a conversation about the course, family, medication, diet and strains of recent months,',
          'a look at scalp, hair and nails, in some practices with a magnifying device,',
          'a gentle pull on the hair to check how firmly it is anchored,',
          'blood tests, usually ferritin (iron stores), basic blood count and TSH (thyroid).',
        ],
      },
      links: [
        { label: { de: 'Haarausfall: Ursachen', en: 'Hair loss: causes' }, path: '/ratgeber/haarausfall-ursachen' },
      ],
    },
    {
      id: 'wann-eilt',
      heading: { de: 'Wann es eilt', en: 'When it is urgent' },
      body: {
        de: [
          'Gehen Sie zeitnah zur Ärztin oder zum Arzt, wenn Haare in Büscheln ausfallen, kahle Stellen schnell größer werden oder die Kopfhaut schmerzt oder entzündet ist. Verliert ein Kind Haare, ist die Kinderarztpraxis oder die Hautarztpraxis der richtige Weg.',
        ],
        en: [
          'See a doctor promptly if hair falls out in clumps, bald patches grow quickly or the scalp hurts or is inflamed. If a child is losing hair, a paediatrician or a dermatologist is the right place.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Was es kostet', en: 'What it costs' },
      body: {
        de: [
          'Die Abklärung von Haarausfall zahlt die gesetzliche Krankenkasse in der Kassenpraxis. Mittel gegen erblich bedingten Haarausfall und PRP zahlen Sie in der Regel selbst.',
          `In einer Privatpraxis wie unserer zahlen Sie nach der Gebührenordnung für Ärzte (GOÄ). Die Haarsprechstunde kostet bei uns ${caDe(haarPreis.sprechstunde)}, die Blutwerte ${caDe(haarPreis.labor)}, die Besprechung des Befunds ${caDe(haarPreis.befund)}.`,
        ],
        en: [
          'Statutory health insurance pays for the investigation of hair loss at a practice that bills the insurer. You usually pay for treatments for inherited hair loss and for PRP yourself.',
          `In a private practice like ours you pay under the German fee schedule for doctors (GOÄ). The hair consultation costs ${caEn(haarPreis.sprechstunde)} with us, the blood tests ${caEn(haarPreis.labor)}, the discussion of the results ${caEn(haarPreis.befund)}.`,
        ],
      },
    },
  ],
  sourceIds: ['daeHaarKopfhaut', 's3AndrogenetischeAlopezie', 'goae'],
  lastReviewed: new Date('2026-11-20'),
  bild: {
    src: '/images/praevention/haarbuerste-farn-1600.webp',
    width: 1600,
    height: 1000,
    alt: {
      de: 'Haarbürste aus Holz auf hellem Stein, daneben Farnzweige',
      en: 'Wooden hairbrush on light stone next to fern sprigs',
    },
  },
  related: [
    { label: { de: 'Haarsprechstunde', en: 'Hair consultation' }, path: '/praevention/haare' },
    { label: { de: 'Haarausfall: Ursachen', en: 'Hair loss: causes' }, path: '/ratgeber/haarausfall-ursachen' },
    { label: { de: 'PRP bei Haarausfall', en: 'PRP for hair loss' }, path: '/praevention/haare/prp' },
    { label: { de: 'Welche Blutwerte wofür?', en: 'Which blood values for what?' }, path: '/ratgeber/blutwerte-erklaert' },
  ],
  faq: [
    {
      q: { de: 'Welcher Arzt ist bei Haarausfall zuständig?', en: 'Which doctor deals with hair loss?' },
      a: {
        de: 'Für kahle Stellen und Veränderungen der Kopfhaut die Hautarztpraxis. Fühlen Sie sich zugleich müde oder krank, ist die Hausarztpraxis ein guter erster Weg. Wird das Haar langsam dünner und möchten Sie Ursache und Blutwerte in Ruhe klären, passt auch eine Haarsprechstunde.',
        en: 'For bald patches and scalp changes, a dermatologist. If you also feel tired or unwell, your GP is a good first step. If your hair is slowly thinning and you want to clarify the cause and blood values calmly, a hair consultation also fits.',
      },
    },
    {
      q: { de: 'Wachsen die Haare nach einem Infekt wieder?', en: 'Does hair grow back after an infection?' },
      a: {
        de: 'Meist ja. Haarausfall nach Fieber, Geburt oder großer Belastung bessert sich oft innerhalb einiger Monate von selbst. Hält er länger an, lohnt sich eine Abklärung.',
        en: 'Usually yes. Hair loss after fever, childbirth or major stress often improves on its own within a few months. If it lasts longer, it is worth having it checked.',
      },
    },
    {
      q: { de: 'Hilft Biotin gegen Haarausfall?', en: 'Does biotin help against hair loss?' },
      a: {
        de: 'Nur bei einem Mangel, und der ist selten. Vor einer Blutabnahme sollten Sie Biotin drei Tage weglassen, weil es manche Werte verfälscht.',
        en: 'Only if there is a deficiency, and that is rare. Stop biotin three days before blood is taken, because it falsifies some values.',
      },
    },
    {
      q: { de: 'Brauche ich eine Überweisung für die Haarsprechstunde?', en: 'Do I need a referral for the hair consultation?' },
      a: {
        de: 'Nein. Sie können die Haarsprechstunde direkt bei uns buchen. Als Privatpraxis rechnen wir nach GOÄ ab, auch bei gesetzlich Versicherten.',
        en: 'No. You can book the hair consultation directly with us. As a private practice we bill under the GOÄ, also for people with statutory insurance.',
      },
    },
  ],
};
