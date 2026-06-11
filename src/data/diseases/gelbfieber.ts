/**
 * Krankheitsbild Gelbfieber — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 */
import type { ClinicalPage } from '../types';

export const gelbfieberDisease: ClinicalPage = {
  meta: {
    title: { de: 'Gelbfieber', en: 'Yellow fever' },
    description: {
      de: 'Gelbfieber – Erreger, Übertragung, Verbreitung, Krankheitsverlauf und Vorbeugung. Fachlich fundiert und mit Quellen belegt.',
      en: 'Yellow fever – pathogen, transmission, distribution, course of disease and prevention. Evidence-based and fully referenced.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Gelbfieber ist eine durch Stechmücken übertragene Viruserkrankung, die in tropischen Regionen Afrikas und Südamerikas vorkommt. Die wirksamste Vorsorge ist die Schutzimpfung.',
      en: 'Yellow fever is a mosquito-borne viral disease that occurs in tropical regions of Africa and South America. The most effective prevention is vaccination.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Gelbfieber wird durch das Gelbfieber-Virus ausgelöst, ein behülltes RNA-Virus aus der Gattung der Flaviviren (Familie Flaviviridae). Eng verwandt sind unter anderem die Erreger von Dengue-, Zika- und FSME-Erkrankungen.',
        ],
        en: [
          'Yellow fever is caused by the yellow fever virus, an enveloped RNA virus of the genus Flavivirus (family Flaviviridae). Closely related viruses include the pathogens of dengue, Zika and tick-borne encephalitis (TBE).',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Das Virus wird durch den Stich infizierter Stechmücken übertragen. In Städten erfolgt die Übertragung vor allem durch Mücken der Gattung Aedes, in Wald- und Feuchtgebieten (sylvatischer Zyklus) in Südamerika zusätzlich durch Haemagogus-Mücken.',
          'Eine direkte Übertragung von Mensch zu Mensch findet nicht statt.',
        ],
        en: [
          'The virus is transmitted through the bite of infected mosquitoes. In urban settings, transmission occurs mainly via mosquitoes of the genus Aedes; in forest and wetland (sylvatic) cycles in South America, Haemagogus mosquitoes also play a role.',
          'There is no direct person-to-person transmission.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Gelbfieber kommt in tropischen Regionen des subsaharischen Afrikas sowie in Teilen des tropischen Süd- und Mittelamerikas vor. In Asien ist Gelbfieber bislang nicht aufgetreten.',
          'Welche Länder ein Infektionsrisiko aufweisen oder bei der Einreise einen Impfnachweis verlangen, kann sich ändern. Aktuelle Hinweise finden Sie auf unserer Seite zu den Risikogebieten sowie bei den unten genannten Quellen.',
        ],
        en: [
          'Yellow fever occurs in tropical regions of sub-Saharan Africa and in parts of tropical South and Central America. To date, yellow fever has not occurred in Asia.',
          'Which countries carry an infection risk or require proof of vaccination on entry can change. Up-to-date information can be found on our risk-areas page and in the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Viele Infektionen verlaufen ohne oder nur mit milden Symptomen. Treten Beschwerden auf, beginnen sie meist drei bis sechs Tage nach der Ansteckung mit Fieber, Kopf- und Gliederschmerzen, Übelkeit und Erschöpfung.',
          'Bei einem Teil der Erkrankten kommt es nach einer kurzen Besserung zu einer zweiten, schweren Phase mit Gelbsucht (Ikterus – namensgebend für die Erkrankung), Beteiligung von Leber und Nieren sowie Blutungen. Schwere Verläufe können lebensbedrohlich sein.',
        ],
        en: [
          'Many infections cause no symptoms or only mild ones. When symptoms occur, they usually begin three to six days after infection with fever, headache, aching limbs, nausea and fatigue.',
          'In a proportion of cases, after a brief improvement a second, severe phase develops with jaundice (icterus – which gives the disease its name), involvement of the liver and kidneys, and bleeding. Severe courses can be life-threatening.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Keine ursächliche Behandlung', en: 'No causal treatment' },
        text: {
          de: 'Gegen Gelbfieber gibt es keine spezifische antivirale Therapie – behandelt werden können nur die Symptome. Umso wichtiger sind Vorbeugung durch Impfung und der Schutz vor Mückenstichen.',
          en: 'There is no specific antiviral therapy for yellow fever – only the symptoms can be treated. This makes prevention through vaccination and protection against mosquito bites all the more important.',
        },
      },
    },
    {
      id: 'vorbeugung',
      heading: { de: 'Vorbeugung', en: 'Prevention' },
      body: {
        de: [
          'Die wirksamste Vorsorge ist die Gelbfieberimpfung. Nach heutigem Stand genügt für die meisten Menschen eine einmalige Impfung für einen lang anhaltenden Schutz.',
          'Ergänzend sollten Reisende sich vor Mückenstichen schützen – etwa durch das Bedecken der Haut, geeignete Repellentien und Moskitonetze.',
        ],
        en: [
          'The most effective prevention is the yellow fever vaccination. For most people, a single dose currently provides long-lasting protection.',
          'In addition, travellers should protect themselves against mosquito bites – for example by covering the skin and using suitable repellents and mosquito nets.',
        ],
      },
    },
  ],
  sourceIds: ['rkiGelbfieber', 'whoYellowFever', 'whoPositionPaper', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-05-15'),
  related: [
    {
      label: { de: 'Zur Gelbfieberimpfung', en: 'About the yellow fever vaccination' },
      path: '/leistungen/gelbfieberimpfung',
    },
    {
      label: { de: 'Gelbfieber-Risikogebiete', en: 'Yellow fever risk areas' },
      path: '/risikogebiete',
    },
  ],
};
