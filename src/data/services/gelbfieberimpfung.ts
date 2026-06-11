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
      de: 'Gelbfieberimpfung in unserer staatlich autorisierten Impfstelle: Impfstoff, Schutzdauer, internationaler Impfnachweis, Eignung, Gegenanzeigen, Ablauf und Kosten.',
      en: 'Yellow fever vaccination at our state-authorised centre: vaccine, duration of protection, international certificate, suitability, contraindications, procedure and costs.',
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
          'Verwendet wird der Lebendimpfstoff Stamaril® auf Basis des abgeschwächten Virusstamms 17D. Er wird einmalig als Injektion verabreicht und ist laut Fachinformation ab einem Alter von neun Monaten zugelassen.',
          'Nach heutigem Stand der Weltgesundheitsorganisation (WHO) bietet eine einmalige Impfung einen lang anhaltenden, in der Regel lebenslangen Schutz. Eine routinemäßige Auffrischung alle zehn Jahre ist seit der Anpassung der Internationalen Gesundheitsvorschriften (IHR) im Jahr 2016 grundsätzlich nicht mehr erforderlich. In bestimmten Situationen kann dennoch eine erneute Impfung sinnvoll sein – das klären wir individuell.',
        ],
        en: [
          'We use the live vaccine Stamaril®, based on the attenuated virus strain 17D. It is given once as an injection and, according to the product information, is approved from the age of nine months.',
          'According to the current position of the World Health Organization (WHO), a single vaccination provides long-lasting and generally lifelong protection. Since the amendment of the International Health Regulations (IHR) in 2016, a routine booster every ten years is generally no longer required. In certain situations a further dose may nevertheless be advisable – we clarify this individually.',
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
          'Als Lebendimpfstoff ist Stamaril® nicht für alle Personen geeignet. Gegenanzeigen oder besondere Vorsicht betreffen unter anderem:',
        ],
        en: [
          'As a live vaccine, Stamaril® is not suitable for everyone. Contraindications or particular caution apply, among others, to:',
        ],
      },
      list: {
        de: [
          'eine schwere Schwäche des Immunsystems (durch Erkrankung oder Medikamente) sowie eine symptomatische HIV-Infektion,',
          'eine echte Allergie gegen Hühnereiweiß oder andere Bestandteile des Impfstoffs,',
          'Säuglinge unter neun Monaten (unter sechs Monaten ist die Impfung kontraindiziert),',
          'Schwangerschaft und Stillzeit – hier erfolgt die Impfung nur nach sorgfältiger Nutzen-Risiko-Abwägung,',
          'ein höheres Lebensalter (ab 60 Jahren), da sehr selten auftretende schwere Impfreaktionen in dieser Gruppe etwas häufiger beobachtet werden.',
        ],
        en: [
          'a severe weakness of the immune system (due to illness or medication) and symptomatic HIV infection,',
          'a genuine allergy to egg protein or other components of the vaccine,',
          'infants under nine months of age (under six months the vaccination is contraindicated),',
          'pregnancy and breastfeeding – here the vaccination is given only after careful weighing of benefits and risks,',
          'older age (from 60 years), as very rare severe vaccine reactions are observed somewhat more frequently in this group.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Individuelle Abklärung notwendig', en: 'Individual assessment required' },
        text: {
          de: 'Diese Aufzählung ersetzt kein ärztliches Gespräch. Bitte informieren Sie uns vor der Impfung über Vorerkrankungen, Medikamente, Allergien und eine mögliche Schwangerschaft, damit wir Eignung und mögliche Risiken sorgfältig prüfen können.',
          en: 'This list does not replace a medical consultation. Please inform us before the vaccination about pre-existing conditions, medications, allergies and a possible pregnancy, so that we can carefully assess suitability and potential risks.',
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
          'Reiseimpfungen wie die Gelbfieberimpfung sind in der Regel eine private Leistung (Selbstzahlerleistung). Viele gesetzliche Krankenkassen erstatten die Kosten inzwischen ganz oder teilweise auf Antrag; die Erstattung richtet sich nach Ihrer Krankenkasse. Die konkreten Kosten nennen wir Ihnen transparent vor der Impfung.',
        ],
        en: [
          'Travel vaccinations such as the yellow fever vaccination are usually a private service (self-pay). Many statutory health insurers now reimburse the costs in full or in part on request; reimbursement depends on your insurer. We will tell you the specific costs transparently before the vaccination.',
        ],
      },
    },
  ],
  sourceIds: ['peiGelbfieber', 'whoPositionPaper', 'rkiGelbfieber', 'dtgReiseimpfungen', 'auswaertigesAmt'],
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
