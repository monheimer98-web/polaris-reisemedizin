/**
 * Leistung FSME-Impfung — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen oder Preisangaben
 * (HWG-konform). Impfschemata bewusst allgemein gehalten (herstellerabhängig).
 */
import type { ClinicalPage } from '../types';

export const fsmeImpfungService: ClinicalPage = {
  meta: {
    title: { de: 'FSME-Impfung', en: 'TBE (FSME) vaccination' },
    description: {
      de: 'FSME-Impfung in unserer Praxis: Impfstoffe, Grundimmunisierung und Auffrischung, Eignung, Gegenanzeigen, Ablauf und Kosten.',
      en: 'TBE vaccination at our practice: vaccines, primary immunisation and boosters, suitability, contraindications, procedure and costs.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Die FSME-Impfung ist der wirksamste Schutz vor der Frühsommer-Meningoenzephalitis. Wir beraten Sie individuell und führen Grundimmunisierung wie Auffrischimpfungen fachgerecht durch.',
      en: 'The TBE vaccination is the most effective protection against tick-borne encephalitis. We advise you individually and carry out both primary immunisation and booster doses professionally.',
    },
  },
  sections: [
    {
      id: 'impfstoff',
      heading: { de: 'Impfstoff', en: 'Vaccine' },
      body: {
        de: [
          'Zur Verfügung stehen die gut verträglichen Totimpfstoffe FSME-Immun® und Encepur®. Sie enthalten abgetötete (inaktivierte) Viren und können daher – anders als ein Lebendimpfstoff – die Erkrankung nicht auslösen.',
          'Für Kinder gibt es eigene Präparate mit angepasster Dosierung. Die Impfung ist je nach Impfstoff in der Regel ab einem Alter von einem Jahr möglich.',
        ],
        en: [
          'The well-tolerated inactivated vaccines FSME-Immun® and Encepur® are available. They contain killed (inactivated) viruses and therefore – unlike a live vaccine – cannot cause the disease.',
          'Dedicated paediatric formulations with adjusted dosing are available for children. Depending on the vaccine, vaccination is generally possible from the age of one year.',
        ],
      },
    },
    {
      id: 'schema',
      heading: { de: 'Grundimmunisierung & Auffrischung', en: 'Primary immunisation & boosters' },
      body: {
        de: [
          'Die Grundimmunisierung umfasst drei Impfdosen. Die ersten beiden Dosen werden im Abstand von ein bis drei Monaten gegeben und bauen einen ersten Schutz für die laufende Zeckensaison auf; die dritte Dosis nach mehreren Monaten vervollständigt die Grundimmunisierung und sorgt für einen mehrjährigen Schutz.',
          'Die erste Auffrischimpfung wird nach drei Jahren empfohlen, danach in der Regel alle fünf Jahre – bei Menschen ab 60 Jahren häufig in kürzeren Abständen. Für kurzfristige Reisen in Risikogebiete gibt es zudem beschleunigte Impfschemata.',
        ],
        en: [
          'Primary immunisation comprises three doses. The first two doses are given one to three months apart and build initial protection for the current tick season; the third dose after several months completes the primary immunisation and provides protection for several years.',
          'The first booster is recommended after three years, then generally every five years – often at shorter intervals for people aged 60 and over. For trips to risk areas at short notice, accelerated schedules are also available.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Rechtzeitig beginnen', en: 'Start in good time' },
        text: {
          de: 'Ein verlässlicher Schutz besteht erst nach der Grundimmunisierung. Wer in der Zeckensaison in Risikogebieten unterwegs sein wird, beginnt die Impfserie idealerweise in den Wintermonaten – sprechen Sie uns rechtzeitig vor der Reise an.',
          en: 'Reliable protection is only established after the primary immunisation. If you will be in risk areas during the tick season, it is best to begin the series in the winter months – please contact us in good time before your trip.',
        },
      },
    },
    {
      id: 'eignung',
      heading: { de: 'Für wen ist die Impfung sinnvoll?', en: 'Who is the vaccination suitable for?' },
      body: {
        de: [
          'Die Ständige Impfkommission (STIKO) empfiehlt die FSME-Impfung für Personen, die in Risikogebieten leben oder dorthin reisen und dabei gegenüber Zecken exponiert sind – etwa bei Aufenthalten in der Natur, im Garten oder bei beruflicher Tätigkeit in Wald und Landwirtschaft. Ebenso kommt sie für Reisen in Endemiegebiete im Ausland in Betracht.',
          'Ob die Impfung für Sie persönlich sinnvoll ist, klären wir in einem individuellen Beratungsgespräch – unter Berücksichtigung Ihres Wohn- und Reiseorts, Ihrer Aktivitäten und Ihres Gesundheitszustands.',
        ],
        en: [
          'The German Standing Committee on Vaccination (STIKO) recommends the TBE vaccination for people who live in or travel to risk areas and are exposed to ticks there – for example when spending time in nature, in the garden, or through occupational activity in forestry and agriculture. It may likewise be considered for travel to endemic areas abroad.',
          'Whether the vaccination is suitable for you personally is something we clarify in an individual consultation – taking into account where you live and travel, your activities and your state of health.',
        ],
      },
    },
    {
      id: 'gegenanzeigen',
      heading: { de: 'Gegenanzeigen & Vorsichtsmaßnahmen', en: 'Contraindications & precautions' },
      body: {
        de: [
          'Als Totimpfstoff ist die FSME-Impfung in der Regel gut verträglich und mit weniger Einschränkungen verbunden als ein Lebendimpfstoff. Zu beachten sind unter anderem:',
        ],
        en: [
          'As an inactivated vaccine, the TBE vaccination is generally well tolerated and associated with fewer restrictions than a live vaccine. Points to consider include, among others:',
        ],
      },
      list: {
        de: [
          'eine akute, behandlungsbedürftige fieberhafte Erkrankung – hier wird die Impfung verschoben,',
          'eine bekannte schwere Allergie gegen einen Bestandteil des Impfstoffs (z. B. Hühnereiweiß),',
          'Säuglinge unter einem Jahr, für die die Impfung in der Regel nicht vorgesehen ist,',
          'Schwangerschaft und Stillzeit – hier erfolgt die Impfung nach individueller Nutzen-Risiko-Abwägung.',
        ],
        en: [
          'an acute febrile illness requiring treatment – here the vaccination is postponed,',
          'a known severe allergy to a component of the vaccine (e.g. egg protein),',
          'infants under one year of age, for whom the vaccination is generally not intended,',
          'pregnancy and breastfeeding – here the vaccination is given after an individual weighing of benefits and risks.',
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
          'Zu Ihrem Termin bringen Sie bitte Ihren Impfausweis mit. Nach einem ärztlichen Aufklärungs- und Beratungsgespräch führen wir die Impfung durch und dokumentieren sie im Impfausweis.',
          'Da die Grundimmunisierung aus mehreren Dosen besteht, vereinbaren wir mit Ihnen die weiteren Termine und erinnern Sie an die nächste Impfung.',
        ],
        en: [
          'For your appointment, please bring your vaccination certificate. After a medical consultation and explanation, we carry out the vaccination and record it in your vaccination certificate.',
          'As the primary immunisation consists of several doses, we arrange the follow-up appointments with you and remind you of the next vaccination.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Kosten', en: 'Costs' },
      body: {
        de: [
          'Für Personen, die in einem ausgewiesenen Risikogebiet leben oder dort beruflich exponiert sind, ist die FSME-Impfung eine von der STIKO empfohlene Indikationsimpfung; die Kosten werden in diesen Fällen häufig von der gesetzlichen Krankenkasse übernommen. Bei rein reisebedingter Indikation kann es sich um eine private Leistung handeln. Die Kostenübernahme klären wir transparent mit Ihnen.',
        ],
        en: [
          'For people who live in a designated risk area or are occupationally exposed there, the TBE vaccination is an indication vaccination recommended by STIKO; in these cases the costs are often covered by statutory health insurance. For a purely travel-related indication it may be a private service. We clarify cost coverage transparently with you.',
        ],
      },
    },
  ],
  sourceIds: ['peiFsme', 'rkiFsmeRisikogebiete', 'rkiFsme', 'dtgReiseimpfungen'],
  lastReviewed: new Date('2026-05-15'),
  related: [
    {
      label: { de: 'Krankheitsbild FSME', en: 'TBE – the disease' },
      path: '/krankheitsbilder/fsme',
    },
    {
      label: { de: 'FSME-Risikogebiete', en: 'TBE risk areas' },
      path: '/risikogebiete',
    },
  ],
};
