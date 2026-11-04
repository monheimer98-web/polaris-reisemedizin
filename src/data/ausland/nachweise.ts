/**
 * Seite „Nachweise und Atteste": Impfpass-Prüfung, englische Bescheinigung, Formulare,
 * Medikamente und klare Grenzen. Keine Beträge (nur auf /kosten). Die Bescheinigung für
 * Medikamente ist telefonisch zu vereinbaren und hat deshalb keinen Termin-Link.
 */
import type { ClinicalPage } from '../types';
import { AUSLAND_GEPRUEFT } from './stand';

export const auslandNachweisePage: ClinicalPage = {
  meta: {
    title: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' },
    description: {
      de: 'Englische Impfbescheinigung, Impfpass-Prüfung und Formulare fürs Ausland: was wir ausstellen und was das Zielland ernannten Ärzten vorbehält. In Langenfeld.',
      en: 'English vaccination certificate, record review and forms for abroad: what we issue and what a country reserves for appointed doctors. Practice in Langenfeld.',
    },
    eyebrow: { de: 'Nachweise und Atteste', en: 'Certificates and forms' },
    lead: {
      de: 'Hochschulen, Organisationen und Reiseanbieter verlangen oft eine Bescheinigung auf Englisch oder ein eigenes Formular. Wir füllen Formulare aus, soweit wir die Angaben prüfen können, und sagen offen, was wir nicht ausstellen.',
      en: 'Universities, organisations and travel providers often ask for a certificate in English or their own form. We complete forms as far as we can verify the details and are open about what we do not issue.',
    },
  },
  sections: [
    {
      id: 'impfpass',
      heading: { de: 'Impfpass prüfen und Lücken planen', en: 'Reviewing your record and planning for gaps' },
      body: {
        de: [
          'Wir sehen Ihren Impfpass durch und vergleichen ihn mit der Vorgabe Ihrer Einrichtung und den Empfehlungen für Ihr Zielland. Auf Wunsch erhalten Sie eine schriftliche Bewertung mit Nachholplan.',
          'Impfserien brauchen Zeit und sollten spätestens zwei Wochen vor der Abreise abgeschlossen sein. Kommen Sie deshalb möglichst früh.',
        ],
        en: [
          'We go through your vaccination record and compare it with your institution’s requirements and the recommendations for your destination. On request you receive a written assessment with a catch-up plan.',
          'Vaccination series take time and should be completed at least two weeks before you leave, so please come as early as you can.',
        ],
      },
    },
    {
      id: 'englisch',
      heading: {
        de: 'Englische Impfbescheinigung auf Grundlage Ihres Impfausweises',
        en: 'English vaccination certificate based on your vaccination record',
      },
      body: {
        de: [
          'Wir erstellen eine ärztliche Bescheinigung auf Englisch auf Grundlage Ihres Impfausweises oder anderer vorgelegter Impfdokumente. Darin steht, worauf sie beruht.',
          'Übertragen wird nur, was belegt ist. Ohne Grundlage stellen wir keinen neuen Impfbeleg aus. Eine beglaubigte Übersetzung ist die Bescheinigung nicht.',
        ],
        en: [
          'We issue a medical certificate in English based on your vaccination record or other vaccination documents you present. It states what it is based on.',
          'Only what is documented is transferred. We do not issue a new proof of vaccination without documentation. The certificate is not a certified translation.',
        ],
      },
    },
    {
      id: 'formulare',
      heading: {
        de: 'Formulare von Hochschulen, Agenturen und Organisationen',
        en: 'Forms from universities, agencies and organisations',
      },
      body: {
        de: [
          'Maßgeblich ist das aktuelle Formular Ihrer Einrichtung. Bringen Sie es bitte zusammen mit dem Impfpass mit und nennen Sie uns die Abgabefrist. Wir füllen es aus, soweit wir die Angaben prüfen können. Felder, die wir nicht geprüft haben, bleiben offen.',
          'Wenn das Formular einen Laborbefund verlangt, tragen wir den Befund ein und nennen das Datum. Art und zulässiges Alter des Befunds richten sich nach Ihrer Einrichtung. Klären Sie deshalb vorher, was genau verlangt wird und ob Befunde aus Deutschland angenommen werden.',
          'Verlangt ein Formular eine körperliche Untersuchung, ist das ein eigener, längerer Termin.',
        ],
        en: [
          'What counts is your institution’s current form. Please bring it along with your vaccination record and tell us the deadline. We complete it as far as we can verify the details. Fields we have not checked stay blank.',
          'If the form asks for a laboratory finding, we enter the finding and its date. The type and permitted age of the finding depend on your institution. Please clarify beforehand exactly what is required and whether findings from Germany are accepted.',
          'If a form requires a physical examination, this is a separate, longer appointment.',
        ],
      },
      links: [
        { label: { de: 'Auslandssemester', en: 'Study abroad' }, path: '/ausland/auslandssemester' },
        { label: { de: 'Au-pair', en: 'Au pair' }, path: '/ausland/au-pair' },
        { label: { de: 'Gesundheitszeugnis fürs Visum', en: 'Medical certificate for a visa' }, path: '/ausland/gesundheitszeugnis-visum' },
      ],
    },
    {
      id: 'medikamente',
      heading: {
        de: 'Bescheinigung für Medikamente auf Reisen (für unsere Patientinnen und Patienten)',
        en: 'Certificate for medication when travelling (for our patients)',
      },
      body: {
        de: [
          'Wenn Sie bei uns in Behandlung sind, bescheinigen wir auf Wunsch die Medikamente, die Sie auf die Reise mitnehmen. Bitte rufen Sie uns dafür an, online ist dieser Termin nicht buchbar. Ob ein Land die Einfuhr erlaubt, können wir nicht zusagen. Fragen Sie im Zweifel die Vertretung des Ziellandes.',
          'Für Betäubungsmittel gelten eigene Regeln. Innerhalb des Schengen-Raums brauchen Sie für bis zu 30 Tage eine Bescheinigung nach Artikel 75 des Schengener Durchführungsübereinkommens. Sie stellt die verschreibende Praxis aus, je Mittel eine eigene, und die zuständige Landesbehörde beglaubigt sie vor Reiseantritt. Außerhalb des Schengen-Raums gibt es keine einheitliche Regel. Beginnen Sie am besten mindestens vier Wochen vorher.',
        ],
        en: [
          'If you are under our care, we can on request certify the medication you are taking on your trip. Please call us for this, as this appointment cannot be booked online. We cannot promise that a country will allow import. If in doubt, ask the destination country’s embassy or consulate.',
          'Narcotic drugs are subject to their own rules. Within the Schengen area you need a certificate under Article 75 of the Schengen Convention for up to 30 days. It is issued by the prescribing practice, one per medicine, and the competent state authority legalises it before you travel. Outside the Schengen area there is no uniform rule. It is best to start at least four weeks in advance.',
        ],
      },
      links: [{ label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' }],
    },
    {
      id: 'bestaetigen',
      heading: { de: 'Was wir bestätigen können und was nicht', en: 'What we can and cannot confirm' },
      body: {
        de: ['Eine ärztliche Bescheinigung muss stimmen. Deshalb gilt für jedes Papier:'],
        en: ['A medical certificate has to be accurate. So the following applies to every document:'],
      },
      list: {
        de: [
          'Wir bestätigen nur, was wir untersucht haben oder was Sie uns vorlegen, und nennen die Grundlage.',
          'Das Datum ist immer der Tag der Ausstellung. Wir datieren nicht zurück.',
          'Aussagen außerhalb des Befunds machen wir nicht.',
          'An Dritte schicken wir nur, wenn Sie uns von der Schweigepflicht entbinden.',
        ],
        en: [
          'We only confirm what we have examined or what you present to us, and we state the basis.',
          'The date is always the day of issue. We do not backdate.',
          'We make no statements beyond the findings.',
          'We only send documents to third parties if you release us from medical confidentiality.',
        ],
      },
      callout: {
        variant: 'info',
        text: {
          de: 'Ob eine Stelle die Bescheinigung anerkennt, entscheidet diese Stelle.',
          en: 'Whether an institution accepts the certificate is for that institution to decide.',
        },
      },
    },
    {
      id: 'nicht',
      heading: { de: 'Was wir nicht ausstellen', en: 'What we do not issue' },
      body: {
        de: [
          'Verlangt ein Land eine Visa-Untersuchung durch zugelassene Stellen, dürfen wir sie nicht durchführen. Das kann auch befristete Visa betreffen. Die offiziellen Stellen finden Sie über die Quellen unten.',
        ],
        en: [
          'If a country requires a visa medical examination by appointed doctors, we may not carry it out. This can also apply to temporary visas. You can find the official bodies via the sources below.',
        ],
      },
      list: {
        de: [
          'USA: Einwanderung und bestimmte Nichteinwanderer, nur von Botschaft oder Konsulat ernannte Ärztinnen und Ärzte.',
          'Kanada: nur von der Einwanderungsbehörde zugelassene Ärztinnen und Ärzte, auch bei kurzen Aufenthalten für Schule, Kinderbetreuung, Gesundheitswesen oder ein Medizin-Elective.',
          'Australien: außerhalb Australiens nur von der Behörde zugelassene Stellen.',
          'Neuseeland: Bitte prüfen Sie die Liste der Einwanderungsbehörde.',
          'Bescheinigung nach § 43 Infektionsschutzgesetz, etwa für die Arbeit mit Lebensmitteln: nur Gesundheitsamt oder eine vom Gesundheitsamt beauftragte Ärztin oder ein beauftragter Arzt.',
        ],
        en: [
          'USA: immigration and certain non-immigrant visas, only doctors appointed by the embassy or consulate.',
          'Canada: only doctors authorised by the immigration authority, including for short stays for school, childcare, healthcare or a medical elective.',
          'Australia: outside Australia, only providers approved by the authority.',
          'New Zealand: please check the immigration authority’s list.',
          'Certificate under section 43 of the German Infection Protection Act, for example for working with food: only the public health office or a doctor it has commissioned.',
        ],
      },
    },
  ],
  termine: [
    { label: { de: 'Impfpass prüfen lassen', en: 'Have your vaccination record reviewed' }, art: 'impfpass-check' },
    { label: { de: 'Termin für Bescheinigung oder Formular', en: 'Appointment for a certificate or form' }, art: 'nachweis-kurz' },
  ],
  faq: [
    {
      q: { de: 'Können Sie meinen Impfpass auf Englisch bestätigen?', en: 'Can you confirm my vaccination record in English?' },
      a: {
        de: 'Ja. Wir erstellen eine ärztliche Bescheinigung auf Englisch auf Grundlage Ihres Impfausweises. Bitte bringen Sie den Ausweis im Original mit.',
        en: 'Yes. We issue a medical certificate in English based on your vaccination record. Please bring the original record with you.',
      },
    },
    {
      q: { de: 'Ist das eine beglaubigte Übersetzung?', en: 'Is that a certified translation?' },
      a: {
        de: 'Nein, es ist eine ärztliche Bescheinigung. Verlangt eine Stelle eine beglaubigte Übersetzung oder eine Apostille, ist das ein eigener Schritt. Für eine Apostille sollten Sie derzeit rund drei Monate einplanen.',
        en: 'No, it is a medical certificate. If an institution asks for a certified translation or an apostille, that is a separate step. For an apostille you should currently allow around three months.',
      },
    },
    {
      q: { de: 'Erkennt die Stelle im Ausland die Bescheinigung an?', en: 'Will the institution abroad accept the certificate?' },
      a: {
        de: 'Das entscheidet diese Stelle. Eine Zusage können wir nicht geben. Lassen Sie sich die Vorgabe am besten vorab schriftlich geben und bringen Sie sie mit.',
        en: 'That is for the institution to decide. We cannot promise it. It is best to get its requirements in writing beforehand and bring them with you.',
      },
    },
    {
      q: {
        de: 'Machen Sie Visa-Untersuchungen für USA, Kanada, Australien oder Neuseeland?',
        en: 'Do you carry out visa medical examinations for the USA, Canada, Australia or New Zealand?',
      },
      a: {
        de: 'Nein. Für die USA, Kanada und Australien führen diese Untersuchungen nur dort ernannte oder zugelassene Ärztinnen und Ärzte durch. Für Neuseeland gilt das, wenn es in Ihrem Land zugelassene Ärztinnen und Ärzte gibt; wir führen diese Untersuchung vorsorglich nicht durch. Das kann auch befristete Visa betreffen. Den Impfschutz für die Reise können wir trotzdem mit Ihnen planen.',
        en: 'No. For the USA, Canada and Australia these examinations are only carried out by doctors appointed or authorised by those countries. For New Zealand this applies if there are approved doctors in your country; as a precaution we do not carry out this examination. This can also apply to temporary visas. We can still plan your vaccination cover for the trip with you.',
      },
    },
    {
      q: {
        de: 'Stellen Sie die Belehrung nach § 43 Infektionsschutzgesetz aus?',
        en: 'Do you issue the instruction certificate under section 43 of the Infection Protection Act?',
      },
      a: {
        de: 'Nein. Sie erhalten diese Bescheinigung beim Gesundheitsamt oder bei einer vom Gesundheitsamt beauftragten Ärztin oder einem beauftragten Arzt. Ein Gesundheitszeugnis für ein Visum ist etwas anderes.',
        en: 'No. You can get this certificate from the public health office or a doctor it has commissioned. A medical certificate for a visa is something different.',
      },
    },
    {
      q: { de: 'Bekomme ich eine Bescheinigung für meine Medikamente?', en: 'Can I get a certificate for my medication?' },
      a: {
        de: 'Wenn Sie bei uns in Behandlung sind, ja. Rufen Sie uns dafür bitte an. Andernfalls wenden Sie sich an die Praxis, die Ihnen die Medikamente verschreibt.',
        en: 'If you are under our care, yes. Please call us for this. Otherwise, please contact the practice that prescribes your medication.',
      },
    },
    {
      q: { de: 'Stellen Sie die Schengen-Bescheinigung für Betäubungsmittel aus?', en: 'Do you issue the Schengen certificate for narcotic drugs?' },
      a: {
        de: 'Zuständig ist die Praxis, die das Betäubungsmittel verschreibt. Vor Reiseantritt muss die Bescheinigung von der zuständigen Behörde beglaubigt werden. Das Formular stellt das Bundesinstitut für Arzneimittel und Medizinprodukte bereit.',
        en: 'This is the responsibility of the practice that prescribes the narcotic drug. The certificate must be legalised by the competent authority before you travel. The form is provided by the Federal Institute for Drugs and Medical Devices.',
      },
    },
  ],
  sourceIds: [
    'stikoReise2026',
    'ifsg22',
    'aeknoBerufsordnung',
    'cdcPanel',
    'usPanelFrankfurt',
    'caWhoMayPerform',
    'caTemporary',
    'auPanel',
    'nzPanel',
    'ifsg43',
    'bfarmReisenBtm',
    'bfarmFormularArt75',
    'aeknoBescheinigung',
    'brdApostille',
  ],
  lastReviewed: AUSLAND_GEPRUEFT,
  related: [
    { label: { de: 'Alles zum Bereich Ausland', en: 'The abroad section' }, path: '/ausland' },
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
  ],
};
