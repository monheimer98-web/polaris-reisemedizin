/**
 * Leistung „Reiseimpfungen im Überblick" (DE/EN) — Orientierungsseite über das
 * Spektrum der Reise- und Standardimpfungen, belegt über das Quellen-Register.
 * Sachlich, ohne Heilversprechen, ohne Preisangaben (HWG-konform). Konkrete
 * Schemata bleiben bewusst allgemein – maßgeblich ist die individuelle Beratung.
 */
import type { ClinicalPage } from '../types';

export const reiseimpfungenService: ClinicalPage = {
  meta: {
    title: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations at a glance' },
    description: {
      de: 'Welche Reiseimpfungen für welches Ziel? Überblick über Standard- und Reiseimpfungen, Pflichtimpfungen und den internationalen Impfnachweis – die konkrete Auswahl klären wir in der Beratung.',
      en: 'Which travel vaccinations for which destination? An overview of standard and travel vaccinations, mandatory vaccinations and the international certificate – the specific selection is clarified in the consultation.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Welche Impfungen sinnvoll sind, hängt von Reiseziel, Route und Ihrer Vorgeschichte ab. Dieser Überblick ordnet das Spektrum ein – die persönliche Auswahl treffen wir gemeinsam in der reisemedizinischen Beratung.',
      en: 'Which vaccinations make sense depends on your destination, route and medical history. This overview sets out the spectrum – the personal selection is made together in the travel-medicine consultation.',
    },
  },
  sections: [
    {
      id: 'standard',
      heading: { de: 'Zuerst: Standardimpfungen prüfen', en: 'First: check your standard vaccinations' },
      body: {
        de: [
          'Vor jeder Reise lohnt der Blick in den Impfpass. Häufig sind es nicht die exotischen, sondern die alltäglichen Impfungen, deren Schutz aufgefrischt werden sollte. Die Ständige Impfkommission (STIKO) empfiehlt, den Impfstatus anlässlich einer Reise zu vervollständigen.',
          'Dazu zählen insbesondere:',
        ],
        en: [
          'Before any trip it is worth checking your vaccination record. Often it is not the exotic vaccinations but the everyday ones whose protection should be refreshed. The German Standing Committee on Vaccination (STIKO) recommends completing your vaccination status on the occasion of a trip.',
          'These include in particular:',
        ],
      },
      list: {
        de: [
          'Tetanus (Wundstarrkrampf) und Diphtherie – oft gemeinsam aufgefrischt',
          'Keuchhusten (Pertussis) und Kinderlähmung (Poliomyelitis)',
          'Masern, Mumps, Röteln (MMR) – besonders wichtig bei unklarem Status',
          'je nach Konstellation: Influenza, Pneumokokken, COVID-19',
        ],
        en: [
          'tetanus and diphtheria – often boosted together',
          'whooping cough (pertussis) and polio (poliomyelitis)',
          'measles, mumps, rubella (MMR) – especially important if status is unclear',
          'depending on the situation: influenza, pneumococcus, COVID-19',
        ],
      },
    },
    {
      id: 'reiseimpfungen',
      heading: { de: 'Typische Reiseimpfungen', en: 'Typical travel vaccinations' },
      body: {
        de: [
          'Je nach Ziel, Reisezeit und -stil kommen gezielte Reiseimpfungen hinzu. Welche davon für Sie infrage kommen, hängt von Ihrer individuellen Situation ab. Häufig beraten wir unter anderem zu:',
        ],
        en: [
          'Depending on destination, season and travel style, targeted travel vaccinations may be added. Which of these are relevant for you depends on your individual situation. We frequently advise on, among others:',
        ],
      },
      list: {
        de: [
          'Hepatitis A und Hepatitis B (Leberentzündungen)',
          'Typhus (über Wasser und Lebensmittel übertragen)',
          'Tollwut (Bissverletzungen, abgelegene Regionen, Langzeitaufenthalte)',
          'Meningokokken-Meningitis (u. a. „Meningitis-Gürtel", Pilgerreisen)',
          'Japanische Enzephalitis (ländliches Asien, Reisanbaugebiete)',
          'Cholera (bestimmte Risikogebiete, Helfer in Ausbruchsgebieten)',
          'Dengue und Chikungunya – gezielte Reiseimpfungen nur für bestimmte Reisende bzw. Reisesituationen',
          'Gelbfieber und FSME – als eigene Leistungen ausführlich beschrieben',
        ],
        en: [
          'hepatitis A and hepatitis B (inflammation of the liver)',
          'typhoid (transmitted via water and food)',
          'rabies (bite injuries, remote regions, long-term stays)',
          'meningococcal meningitis (e.g. the "meningitis belt", pilgrimages)',
          'Japanese encephalitis (rural Asia, rice-growing areas)',
          'cholera (certain risk areas, aid workers in outbreak areas)',
          'dengue and chikungunya – targeted travel vaccinations only for certain travellers or travel situations',
          'yellow fever and TBE (FSME) – described in detail as separate services',
        ],
      },
    },
    {
      id: 'pflicht',
      heading: { de: 'Pflichtimpfungen & internationaler Nachweis', en: 'Mandatory vaccinations & the international certificate' },
      body: {
        de: [
          'Einzelne Länder verlangen bei der Einreise einen Impfnachweis. Am bekanntesten ist die Gelbfieberimpfung, die im Internationalen Impfausweis (ICVP) bescheinigt wird und nur in einer staatlich autorisierten Gelbfieberimpfstelle erfolgen darf. Für bestimmte Reisen – etwa die Pilgerfahrt nach Saudi-Arabien – kann eine Meningokokken-Impfung vorgeschrieben sein.',
          'Einreisebestimmungen ändern sich. Maßgeblich sind die offiziellen Vorgaben des Ziellandes; wir prüfen mit Ihnen die aktuelle Lage und verweisen auf die Hinweise des Auswärtigen Amts und der WHO.',
        ],
        en: [
          'Some countries require proof of vaccination on entry. The best known is the yellow fever vaccination, which is certified in the International Certificate of Vaccination (ICVP) and may only be administered at a state-authorised yellow fever vaccination centre. For certain trips – such as the pilgrimage to Saudi Arabia – a meningococcal vaccination may be required.',
          'Entry requirements change. The official requirements of the destination country are decisive; we check the current situation with you and refer to the information from the Federal Foreign Office and the WHO.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Gelbfieber nur in autorisierter Impfstelle', en: 'Yellow fever only at an authorised centre' },
        text: {
          de: 'Der gültige internationale Gelbfieber-Nachweis darf ausschließlich in einer staatlich autorisierten Impfstelle ausgestellt werden und wird erst zehn Tage nach der Impfung wirksam. Details finden Sie auf unserer Seite zur Gelbfieberimpfung.',
          en: 'The valid international yellow fever certificate may only be issued at a state-authorised centre and only takes effect ten days after vaccination. Details can be found on our yellow fever vaccination page.',
        },
      },
    },
    {
      id: 'lebend-tot',
      heading: { de: 'Lebend- und Totimpfstoffe', en: 'Live and inactivated vaccines' },
      body: {
        de: [
          'Man unterscheidet Totimpfstoffe (mit abgetöteten Erregern oder Erregerbestandteilen) und Lebendimpfstoffe (mit abgeschwächten, vermehrungsfähigen Erregern). Diese Unterscheidung ist wichtig: Lebendimpfstoffe – etwa gegen Gelbfieber oder Masern – sind bei stark geschwächtem Immunsystem oder in der Schwangerschaft in der Regel nicht geeignet und müssen mitunter zeitlich aufeinander abgestimmt werden.',
          'Gerade deshalb steht die individuelle Beratung am Anfang: Wir berücksichtigen Ihren Gesundheitszustand und planen die Reihenfolge der Impfungen sinnvoll.',
        ],
        en: [
          'A distinction is made between inactivated vaccines (containing killed pathogens or pathogen components) and live vaccines (containing weakened, replication-competent pathogens). This distinction matters: live vaccines – for example against yellow fever or measles – are generally not suitable for a severely weakened immune system or during pregnancy and sometimes have to be coordinated in timing.',
          'This is precisely why the individual consultation comes first: we take your state of health into account and plan a sensible sequence of vaccinations.',
        ],
      },
    },
    {
      id: 'ablauf',
      heading: { de: 'So gehen wir vor', en: 'How we proceed' },
      body: {
        de: [
          'Am Anfang steht die reisemedizinische Beratung mit der Feststellung der Impftauglichkeit und einem schriftlichen Impfplan. Die empfohlenen Impfungen führen wir anschließend in der Regel in Folgeterminen durch; viele Impfstoffe bestellen wir individuell für Sie. Wir legen keinen breiten Impfstoffvorrat an, sondern arbeiten gezielt nach Bedarf.',
          'Mehrere fällige Impfungen lassen sich häufig im selben Termin kombinieren – was sinnvoll und verträglich ist, besprechen wir mit Ihnen.',
        ],
        en: [
          'It all starts with the travel-medicine consultation, including the assessment of fitness for vaccination and a written vaccination plan. We then usually carry out the recommended vaccinations in follow-up appointments; many vaccines are ordered individually for you. We do not keep a broad vaccine stock but work specifically as needed.',
          'Several due vaccinations can often be combined in the same appointment – we discuss with you what is sensible and well tolerated.',
        ],
      },
    },
  ],
  sourceIds: ['stikoImpfempfehlungen', 'dtgReiseimpfungen', 'auswaertigesAmt', 'whoYellowFeverCountries'],
  lastReviewed: new Date('2026-06-04'),
  related: [
    { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
    { label: { de: 'FSME-Impfung', en: 'TBE (FSME) vaccination' }, path: '/leistungen/fsme-impfung' },
    { label: { de: 'Dengue-Fieber', en: 'Dengue fever' }, path: '/krankheitsbilder/dengue' },
    { label: { de: 'Chikungunya', en: 'Chikungunya' }, path: '/krankheitsbilder/chikungunya' },
    { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
  ],
};
