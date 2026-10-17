/**
 * Leistung Gelbfieberimpfung — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen oder Preisangaben
 * (HWG-konform). Kostenfrage bewusst neutral gehalten.
 */
import type { ClinicalPage } from '../types';

export const gelbfieberimpfungService: ClinicalPage = {
  meta: {
    title: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' },
    description: {
      de: 'Gelbfieberimpfung in unserer staatlich autorisierten Impfstelle: Impfstoff, Schutzdauer, internationaler Impfnachweis, Eignung und Ablauf.',
      en: 'Yellow fever vaccination at our state-authorised centre: vaccine, duration of protection, international certificate, suitability and procedure.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Als staatlich autorisierte Gelbfieberimpfstelle beraten wir Sie individuell zu Ihrer Reise und führen die Impfung fachgerecht durch. Hier erfahren Sie, wie die Impfung abläuft und was Sie beachten sollten.',
      en: 'As a state-authorised yellow fever vaccination centre, we advise you individually about your trip and carry out the vaccination professionally. Here you can read how the vaccination works and what to bear in mind.',
    },
  },
  sections: [
    {
      id: 'impfstoff',
      heading: { de: 'Impfstoff & Schutzdauer', en: 'Vaccine & duration of protection' },
      body: {
        de: [
          'Verwendet wird ein Lebendimpfstoff auf Basis des abgeschwächten Virusstamms 17D. Er wird als Injektion verabreicht und ist laut Fachinformation ab einem Alter von neun Monaten zugelassen.',
          'Der internationale Impfnachweis (ICVP) gilt nach den Internationalen Gesundheitsvorschriften seit 2016 lebenslang – an der Grenze genügt ein Eintrag, der mindestens 10 Tage alt ist. Medizinisch empfiehlt die STIKO vor einer erneuten oder bei fortgesetzter Reise in ein Gelbfiebergebiet einmalig eine Auffrischimpfung, wenn die Erstimpfung 10 Jahre oder länger zurückliegt; nach zwei Impfdosen sind keine weiteren nötig. Besondere Regeln gelten u. a. bei Erstimpfung vor dem 2. Geburtstag, in der Schwangerschaft oder bei Immunschwäche. Wir prüfen das anhand Ihres Impfausweises.',
        ],
        en: [
          'We use a live vaccine based on the attenuated virus strain 17D. It is given as an injection and, according to the product information, is approved from the age of nine months.',
          'Under the International Health Regulations, the international certificate (ICVP) has been valid for life since 2016 – at the border, an entry at least 10 days old is sufficient. Medically, the German Standing Committee on Vaccination (STIKO) recommends a single booster before renewed or continued travel to a yellow fever area if the first vaccination was 10 or more years ago; after two doses no further doses are needed. Special rules apply, among others, if the first vaccination was given before the age of two, during pregnancy or with a weakened immune system. We check this using your vaccination record.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Internationaler Impfnachweis (ICVP)', en: 'International certificate (ICVP)' },
        text: {
          de: 'Die Impfung wird im Internationalen Impfausweis dokumentiert. Der Impfnachweis (ICVP) ist ab dem zehnten Tag nach der Erstimpfung international gültig – planen Sie Ihren Termin daher mindestens zehn Tage vor der Abreise.',
          en: 'The vaccination is recorded in the international certificate of vaccination. The certificate (ICVP) is internationally valid from the tenth day after the first vaccination – so please schedule your appointment at least ten days before departure.',
        },
      },
    },
    {
      id: 'autorisierung',
      heading: { de: 'Autorisierte Impfstelle', en: 'Authorised vaccination centre' },
      body: {
        de: [
          'In Deutschland dürfen die Gelbfieberimpfung und die Ausstellung des international gültigen Impfnachweises ausschließlich von staatlich autorisierten Gelbfieberimpfstellen vorgenommen werden. Unsere Praxis verfügt über diese Zulassung.',
        ],
        en: [
          'In Germany, the yellow fever vaccination and the issuing of the internationally valid certificate may only be carried out by state-authorised yellow fever vaccination centres. Our practice holds this authorisation.',
        ],
      },
    },
    {
      id: 'eignung',
      heading: { de: 'Für wen ist die Impfung sinnvoll?', en: 'Who is the vaccination suitable for?' },
      body: {
        de: [
          'Die Gelbfieberimpfung kommt für Reisende in Länder mit Infektionsrisiko in Betracht sowie für die Einreise in Länder, die einen Gelbfieber-Impfnachweis verlangen. Auch berufliche Gründe können eine Impfung erforderlich machen.',
          'Ob die Impfung für Sie persönlich infrage kommt, klären wir in einem individuellen Beratungsgespräch – unter Berücksichtigung Ihres Reiseziels, Ihres Gesundheitszustands und Ihrer Vorgeschichte.',
        ],
        en: [
          'The yellow fever vaccination may be considered for travellers to countries with an infection risk, as well as for entry into countries that require proof of yellow fever vaccination. Occupational reasons can also make vaccination necessary.',
          'Whether the vaccination is suitable for you personally is something we clarify in an individual consultation – taking into account your destination, your state of health and your medical history.',
        ],
      },
    },
    {
      id: 'gegenanzeigen',
      heading: { de: 'Gegenanzeigen & Vorsichtsmaßnahmen', en: 'Contraindications & precautions' },
      body: {
        de: [
          'Als Lebendimpfstoff ist der Gelbfieberimpfstoff nicht für alle Personen geeignet. Gegenanzeigen oder besondere Vorsicht betreffen unter anderem:',
        ],
        en: [
          'As a live vaccine, the yellow fever vaccine is not suitable for everyone. Contraindications or particular caution apply, among others, to:',
        ],
      },
      list: {
        de: [
          'eine angeborene oder erworbene Immunschwäche bzw. eine immunsuppressive Therapie (einschließlich hochdosierter Kortison-Behandlung) sowie eine symptomatische HIV-Infektion oder eine CD4-Zellzahl unter 200/µl,',
          'Erkrankungen des Thymus (z. B. Thymom, Myasthenia gravis) oder eine Entfernung des Thymus,',
          'eine schwere (anaphylaktische) Allergie gegen Hühnereiweiß oder andere Bestandteile des Impfstoffs,',
          'Säuglinge unter sechs Monaten (kontraindiziert); zwischen sechs und neun Monaten nur in Ausnahmefällen,',
          'die Stillzeit, solange das Kind jünger als sechs Monate ist (kontraindiziert); danach nur in Ausnahmefällen,',
          'die Schwangerschaft – hier nur bei unvermeidbarem Risiko nach sorgfältiger Nutzen-Risiko-Abwägung,',
          'schwere Impfkomplikationen nach einer Gelbfieberimpfung bei Verwandten ersten Grades,',
          'ein Alter ab 60 Jahren – laut Fachinformation nur bei deutlichem, unvermeidbarem Infektionsrisiko, da sehr seltene schwere Impfreaktionen in dieser Gruppe häufiger auftreten.',
        ],
        en: [
          'congenital or acquired immunodeficiency or immunosuppressive therapy (including high-dose corticosteroids), symptomatic HIV infection or a CD4 count below 200/µl,',
          'disorders of the thymus (e.g. thymoma, myasthenia gravis) or removal of the thymus,',
          'a severe (anaphylactic) allergy to egg protein or other components of the vaccine,',
          'infants under six months (contraindicated); between six and nine months only in exceptional cases,',
          'breastfeeding while the child is younger than six months (contraindicated); thereafter only in exceptional cases,',
          'pregnancy – only where the risk is unavoidable and after careful weighing of benefits and risks,',
          'severe complications after yellow fever vaccination in first-degree relatives,',
          'age 60 and over – according to the product information only where there is a significant, unavoidable risk of infection, as very rare severe vaccine reactions occur more often in this group.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Individuelle Abklärung notwendig', en: 'Individual assessment required' },
        text: {
          de: 'Diese Aufzählung ersetzt kein ärztliches Gespräch. Bitte informieren Sie uns vor der Impfung über Vorerkrankungen, Medikamente, Allergien und eine mögliche Schwangerschaft, damit wir Eignung und mögliche Risiken sorgfältig prüfen können. Ist eine Impfung nicht möglich, kann eine Befreiungsbescheinigung (Exemption Certificate) ausgestellt werden – die Einreiseländer müssen sie allerdings nicht anerkennen.',
          en: 'This list does not replace a medical consultation. Please inform us before the vaccination about pre-existing conditions, medications, allergies and a possible pregnancy, so that we can carefully assess suitability and potential risks. If vaccination is not possible, an exemption certificate can be issued – however, destination countries are not obliged to accept it.',
        },
      },
    },
    {
      id: 'ablauf',
      heading: { de: 'Ablauf in unserer Praxis', en: 'How it works at our practice' },
      body: {
        de: [
          'Zu Ihrem Termin bringen Sie bitte Ihren Impfausweis und einen Lichtbildausweis mit. Nach einem ärztlichen Aufklärungs- und Beratungsgespräch führen wir die Impfung durch und tragen sie in den Internationalen Impfausweis ein.',
          'Nach der Impfung bitten wir Sie um eine kurze Wartezeit zur Beobachtung in der Praxis.',
        ],
        en: [
          'For your appointment, please bring your vaccination certificate and a photo ID. After a medical consultation and explanation, we carry out the vaccination and record it in the international certificate of vaccination.',
          'After the vaccination, we ask you to remain at the practice for a short observation period.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Kosten', en: 'Costs' },
      body: {
        de: [
          'Als Privatpraxis rechnen wir nach der Gebührenordnung für Ärzte (GOÄ) ab; Sie zahlen zunächst selbst. Manche Krankenkassen erstatten Reiseimpfungen freiwillig – Umfang und Bedingungen sind je Kasse sehr unterschiedlich, teils nur bei Impfung in einer Kassenpraxis. Bitte klären Sie die Erstattung vorab mit Ihrer Kasse. Die konkreten Kosten nennen wir Ihnen vor der Impfung.',
        ],
        en: [
          'As a private practice we bill under the German medical fee schedule (GOÄ); you pay first yourself. Some health insurers reimburse travel vaccinations voluntarily – scope and conditions vary widely, sometimes only for vaccinations given in a statutory-insurance practice. Please check reimbursement with your insurer in advance. We will tell you the specific costs before the vaccination.',
        ],
      },
    },
  ],
  sourceIds: ['stikoReise2026', 'peiGelbfieber', 'whoPositionPaper', 'rkiGelbfieber', 'dtgReiseimpfungen', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-05-15'),
  related: [
    {
      label: { de: 'Krankheitsbild Gelbfieber', en: 'Yellow fever – the disease' },
      path: '/krankheitsbilder/gelbfieber',
    },
    {
      label: { de: 'Risikogebiete & Pflichtländer', en: 'Risk areas & entry requirements' },
      path: '/risikogebiete',
    },
  ],
};
