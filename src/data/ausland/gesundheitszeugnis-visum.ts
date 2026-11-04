/**
 * Fachseite „Gesundheitszeugnis für ein Visum“ (DE/EN). Thailand und Spanien nur
 * informativ mit Vorbehalt, China, VAE und Indonesien nicht als Angebot.
 * Stand der Vorgaben sichtbar im ersten Abschnitt nennen und bei jeder Prüfung anpassen.
 */
import type { ClinicalPage } from '../types';
import { KOSTEN_HINWEIS, VISA_GRENZE } from './fach-texte';
import { AUSLAND_GEPRUEFT } from './stand';

export const gesundheitszeugnisVisumPage: ClinicalPage = {
  meta: {
    title: {
      de: 'Gesundheitszeugnis für ein Visum',
      en: 'Medical certificate for a visa',
    },
    description: {
      de: 'Visum mit ärztlichem Zeugnis? Wir untersuchen und stellen es aus, wenn das Land keine ernannte Stelle vorschreibt. Die Behörde entscheidet. In Langenfeld.',
      en: 'Visa needs a medical certificate? We examine you and issue it if the country requires no appointed doctor. The authority decides on acceptance. Langenfeld.',
    },
    eyebrow: { de: 'Ausland', en: 'Abroad' },
    lead: {
      de: 'Manche Visa verlangen ein ärztliches Zeugnis. Wir stellen es aus, wenn das Land keine zugelassene Stelle vorschreibt und Ihre Botschaft oder Ihr Konsulat die Anforderungen schriftlich nennt. Über die Annahme und das Visum entscheidet die Behörde.',
      en: 'Some visas require a medical certificate. We issue it if the country does not prescribe an approved provider and your embassy or consulate states the requirements in writing. The authority decides on acceptance and on the visa.',
    },
  },
  sections: [
    {
      id: 'zustaendigkeit',
      heading: {
        de: 'Zuerst klären: Darf eine Privatpraxis das Zeugnis ausstellen?',
        en: 'First things first: may a private practice issue the certificate?',
      },
      body: {
        de: [
          `${VISA_GRENZE.de} Sehen Sie deshalb zuerst in das Merkblatt Ihrer Vertretung. Mehrere Länder lassen bestimmte Untersuchungen nur von Ärztinnen und Ärzten durchführen, die sie selbst ernannt haben. Oft heißen sie Panel Physicians. Wir gehören nicht dazu.`,
        ],
        en: [
          `${VISA_GRENZE.en} Please check the leaflet from your embassy or consulate first. Several countries allow certain examinations only by doctors they have appointed themselves. They are often called panel physicians. We are not among them.`,
        ],
      },
      list: {
        de: [
          'USA: Einwanderung und bestimmte Nichteinwanderer: nur von Botschaft oder Konsulat ernannte Ärzte.',
          'Kanada: nur von Kanada zugelassene Ärztinnen und Ärzte, auch bei befristeten Aufenthalten, wenn eine Untersuchung verlangt wird.',
          'Australien: außerhalb Australiens nur von der Behörde zugelassene Ärztinnen, Ärzte und Kliniken.',
          'Neuseeland: Gibt es im Land eine Liste zugelassener Ärztinnen und Ärzte, muss die Untersuchung dort stattfinden.',
          'Großbritannien: Wird eine Untersuchung vor der Einreise verlangt, ist eine zugelassene Klinik nötig. Für Menschen mit Wohnsitz in Deutschland ist das selten ein Thema.',
        ],
        en: [
          'USA: immigration and certain non-immigrants: only doctors appointed by the embassy or consulate.',
          'Canada: only doctors approved by Canada, including for temporary stays if an examination is required.',
          'Australia: outside Australia, only doctors and clinics approved by the authority.',
          'New Zealand: if there is a list of approved doctors in the country, the examination must take place with them.',
          'United Kingdom: if an examination before entry is required, an approved clinic is needed. For people living in Germany this rarely comes up.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Stand: Oktober 2026', en: 'As of: October 2026' },
        text: {
          de: 'Diese Vorgaben ändern sich. Maßgeblich ist immer das aktuelle Merkblatt der für Sie zuständigen Vertretung.',
          en: 'These requirements change. What counts is always the current leaflet from the embassy or consulate responsible for you.',
        },
      },
    },
    {
      id: 'paragraf-43',
      heading: {
        de: 'Nicht zu verwechseln: Belehrung nach § 43 Infektionsschutzgesetz',
        en: 'Not to be confused with: instruction under Section 43 of the Infection Protection Act',
      },
      body: {
        de: [
          'Wer in Deutschland gewerbsmäßig mit Lebensmitteln arbeitet, braucht vorab eine Bescheinigung nach § 43 Infektionsschutzgesetz. Sie kommt vom Gesundheitsamt oder einem von ihm beauftragten Arzt. Das ist etwas anderes als ein Gesundheitszeugnis für ein Visum. Wir stellen sie nicht aus.',
        ],
        en: [
          'Anyone working commercially with food in Germany needs a certificate under Section 43 of the Infection Protection Act beforehand. It comes from the public health office or a doctor it has commissioned. That is different from a medical certificate for a visa. We do not issue it.',
        ],
      },
    },
    {
      id: 'thailand',
      heading: {
        de: 'Thailand: Non-Immigrant O-A (erst nach Rückfrage bei der Vertretung)',
        en: 'Thailand: Non-Immigrant O-A (only after checking with the embassy or consulate)',
      },
      body: {
        de: [
          'Die Liste der thailändischen Botschaft in Berlin (Stand 1. September 2026) nennt für dieses Visum ein ärztliches Attest aus dem Antragsland, das höchstens drei Monate gültig ist. Dafür gibt es ein zweisprachiges Formular. Es verlangt Aussagen zu bestimmten Krankheiten und ein Feld „Betriebstättennr“.',
          'Offen ist, ob die Vertretung das Zeugnis einer Privatpraxis ohne Betriebsstättennummer annimmt und ob es notariell beglaubigt sein muss. Bitte fragen Sie die zuständige Vertretung vorher schriftlich und bringen Sie die Antwort zum Termin mit. Ohne diese Klärung sagen wir nichts zu. Wir bestätigen außerdem nur, was sich aus Untersuchung und Befunden ergibt.',
        ],
        en: [
          'The list from the Thai embassy in Berlin (dated 1 September 2026) names for this visa a medical certificate from the country of application, valid for no more than three months. There is a bilingual form for it. It asks for statements on certain diseases and has a field for a German practice registration number (“Betriebstättennr”).',
          'It is not settled whether the embassy or consulate accepts a certificate from a private practice without this number, or whether it has to be notarised. Please ask the embassy or consulate responsible for you in writing beforehand and bring the answer to your appointment. We make no commitment without this. We also confirm only what the examination and results show.',
        ],
      },
    },
    {
      id: 'spanien',
      heading: {
        de: 'Spanien: Attest, Apostille und vereidigte Übersetzung',
        en: 'Spain: certificate, apostille and sworn translation',
      },
      body: {
        de: [
          'Für einen Aufenthalt ohne Erwerbstätigkeit verlangen spanische Vertretungen ein ärztliches Attest zu Krankheiten nach den Internationalen Gesundheitsvorschriften. Es darf höchstens drei Monate alt sein. Dazu kommen eine Übersetzung durch vereidigte Übersetzer und eine Apostille. Auf welchem Dokument sie stehen muss, unterscheiden die Merkblätter.',
          'Diese Angaben stammen aus Merkblättern anderer Generalkonsulate. Klären Sie Wortlaut, Reihenfolge und Fristen bitte vorher schriftlich mit dem für Sie zuständigen Generalkonsulat. Ohne diese Klärung sagen wir nichts zu.',
        ],
        en: [
          'For a stay without employment, Spanish consulates require a medical certificate on diseases under the International Health Regulations. It may be no more than three months old and needs an apostille and a sworn translation.',
          'These details come from leaflets of other consulates general. Please clarify the wording, order and deadlines in writing with the consulate general responsible for you beforehand. We make no commitment without this.',
        ],
      },
    },
    {
      id: 'apostille',
      heading: {
        de: 'Apostille: rund drei Monate Vorlauf einplanen',
        en: 'Apostille: allow around three months',
      },
      body: {
        de: [
          'Verlangt ein Land eine Apostille für das Zeugnis, sind in Nordrhein zwei Stellen beteiligt. Die Ärztekammer Nordrhein bestätigt zuerst, dass die ausstellende Ärztin oder der ausstellende Arzt bei ihr registriert ist. Das dauert rund eine Woche, und das Original darf dafür höchstens drei Monate alt sein. Danach erteilt die zuständige Bezirksregierung die Apostille und nennt dafür derzeit acht bis zehn Wochen.',
          'Mit der Übersetzung sollten Sie deshalb rund drei Monate einplanen. Das wird eng, wenn das Zeugnis beim Antrag höchstens drei Monate alt sein darf. Fragen Sie Ihre Vertretung vorher, welches Datum zählt. Wir können diese Wege nicht verkürzen.',
        ],
        en: [
          'If a country requires an apostille for the certificate, two bodies are involved in the North Rhine region. The North Rhine Chamber of Physicians first confirms that the issuing doctor is registered with it. This takes around one week, and the original may be no more than three months old for it. The responsible district government then issues the apostille and currently states eight to ten weeks for it.',
          'With the translation, you should therefore allow around three months. This becomes tight if the certificate may be no more than three months old when you apply. Please ask your embassy or consulate beforehand which date counts. We cannot shorten these steps.',
        ],
      },
    },
    {
      id: 'entscheidung',
      heading: {
        de: 'Über das Visum entscheidet die Behörde',
        en: 'The authority decides on the visa',
      },
      body: {
        de: [
          'Wir untersuchen in dem Umfang, den die Vorgabe verlangt, und bescheinigen nur, was untersucht wurde oder vorliegt. Das Zeugnis trägt das echte Datum der Untersuchung. Ob es angenommen und das Visum erteilt wird, können wir nicht zusagen.',
          'Für China, die Vereinigten Arabischen Emirate und Indonesien bieten wir derzeit kein Visum-Zeugnis an. Dort sind die Vorgaben nicht sicher belegt oder die Untersuchung findet vor Ort statt.',
          `Sie finden uns am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath, gut erreichbar aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen. ${KOSTEN_HINWEIS.de}`,
        ],
        en: [
          'We examine you to the extent the requirement demands and certify only what was examined or is available to us. The certificate carries the actual date of the examination. We cannot promise that it will be accepted or that the visa will be granted.',
          'We currently do not offer a visa certificate for China, the United Arab Emirates or Indonesia. The requirements there are not reliably documented, or the examination takes place locally.',
          `You will find us at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath, easy to reach from Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen. ${KOSTEN_HINWEIS.en}`,
        ],
      },
      links: [{ label: { de: 'Kosten', en: 'Fees' }, path: '/kosten' }],
    },
  ],
  faq: [
    {
      q: {
        de: 'Wer stellt das Gesundheitszeugnis für mein Visum aus?',
        en: 'Who issues the medical certificate for my visa?',
      },
      a: {
        de: `Das steht im Merkblatt Ihrer Vertretung. ${VISA_GRENZE.de} Ist keine zugelassene Stelle vorgeschrieben und sind die Anforderungen schriftlich genannt, können Sie zu uns kommen.`,
        en: `That is stated in the leaflet from your embassy or consulate. ${VISA_GRENZE.en} If no approved provider is prescribed and the requirements are stated in writing, you can come to us.`,
      },
    },
    {
      q: {
        de: 'Ist das dasselbe wie die Belehrung für die Gastronomie?',
        en: 'Is that the same as the instruction for working in catering?',
      },
      a: {
        de: 'Nein. Die Bescheinigung nach § 43 Infektionsschutzgesetz kommt vom Gesundheitsamt oder einem von ihm beauftragten Arzt. Wir stellen sie nicht aus.',
        en: 'No. The certificate under Section 43 of the Infection Protection Act comes from the public health office or a doctor it has commissioned. We do not issue it.',
      },
    },
    {
      q: {
        de: 'Stellen Sie das Medical Certificate für Thailand aus?',
        en: 'Do you issue the medical certificate for Thailand?',
      },
      a: {
        de: 'Erst wenn die zuständige Vertretung schriftlich bestätigt hat, dass sie das Zeugnis einer Privatpraxis annimmt und welche Form sie verlangt. Bitte bringen Sie die Antwort zum Termin mit.',
        en: 'Only once the responsible embassy or consulate has confirmed in writing that it accepts a certificate from a private practice and which form it requires. Please bring the answer to your appointment.',
      },
    },
    {
      q: { de: 'Akzeptiert das Konsulat Ihr Zeugnis?', en: 'Will the consulate accept your certificate?' },
      a: {
        de: 'Das entscheidet das Konsulat. Wir können weder die Annahme noch das Visum zusagen. Deshalb klären Sie die Anforderungen bitte vorher schriftlich.',
        en: 'The consulate decides. We cannot promise either acceptance or the visa. Please therefore clarify the requirements in writing beforehand.',
      },
    },
    {
      q: { de: 'Wie lange dauert eine Apostille?', en: 'How long does an apostille take?' },
      a: {
        de: 'Die Ärztekammer braucht rund eine Woche, die zuständige Bezirksregierung nennt derzeit acht bis zehn Wochen. Mit Übersetzung sollten Sie rund drei Monate einplanen.',
        en: 'The Chamber of Physicians needs around one week, and the responsible district government currently states eight to ten weeks. With the translation, allow around three months.',
      },
    },
    {
      q: {
        de: 'Können Sie das Zeugnis auf Englisch ausstellen?',
        en: 'Can you issue the certificate in English?',
      },
      a: {
        de: 'Ja, wenn die Vorgabe das erlaubt. Eine vereidigte Übersetzung ersetzt das nicht. Verlangt die Vertretung sie, beauftragen Sie dafür bitte vereidigte Übersetzer.',
        en: 'Yes, if the requirement allows it. It does not replace a sworn translation. If the embassy or consulate requires one, please commission a sworn translator.',
      },
    },
    {
      q: {
        de: 'Für welche Visa dürfen Sie nicht untersuchen?',
        en: 'For which visas are you not allowed to examine?',
      },
      a: {
        de: `${VISA_GRENZE.de} Das betrifft zum Beispiel die USA bei Einwanderung und bestimmten Nichteinwanderern sowie Kanada und Australien, sobald eine Untersuchung verlangt wird, und Neuseeland, wenn es im Land zugelassene Ärztinnen und Ärzte gibt. Die Impfberatung bleibt bei uns möglich.`,
        en: `${VISA_GRENZE.en} This affects, for example, the USA for immigration and certain non-immigrants, Canada and Australia once an examination is required, and New Zealand if there are approved doctors in the country. Vaccination advice remains possible with us.`,
      },
    },
  ],
  termine: [{ label: { de: 'Termin für Visum-Zeugnis buchen', en: 'Book an appointment for a visa certificate' }, art: 'nachweis-status' }],
  related: [
    { label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' },
    { label: { de: 'Work & Travel', en: 'Work & travel' }, path: '/ausland/work-and-travel' },
    { label: { de: 'Kosten', en: 'Fees' }, path: '/kosten' },
  ],
  sourceIds: [
    'cdcPanel',
    'usPanelFrankfurt',
    'caTemporary',
    'caPanel',
    'auPanel',
    'nzHealth',
    'nzPanel',
    'ukTbTest',
    'ifsg43',
    'thaiVisaBerlin',
    'thaiFormularOA',
    'esFrankfurtMerkblatt',
    'esLondonVisum',
    'aeknoBescheinigung',
    'brdApostille',
  ],
  lastReviewed: AUSLAND_GEPRUEFT,
};
