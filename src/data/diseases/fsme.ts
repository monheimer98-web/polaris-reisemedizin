/**
 * Krankheitsbild FSME (Frühsommer-Meningoenzephalitis) — fachlicher Inhalt
 * (DE/EN), belegt über das Quellen-Register. Sachlich, ohne Heilversprechen
 * (HWG-konform). Konkrete Zahl der Risikokreise bewusst nicht hier, sondern auf
 * der jährlich gepflegten Risikogebiete-Seite (Phase 5) + RKI-Quelle.
 */
import type { ClinicalPage } from '../types';

export const fsmeDisease: ClinicalPage = {
  meta: {
    title: { de: 'FSME – Frühsommer-Meningoenzephalitis', en: 'Tick-borne encephalitis (TBE)' },
    description: {
      de: 'FSME – Erreger, Übertragung durch Zecken, Verbreitung und Risikogebiete, Krankheitsverlauf und Vorbeugung. Fachlich fundiert und mit Quellen belegt.',
      en: 'Tick-borne encephalitis (TBE/FSME) – pathogen, transmission by ticks, distribution and risk areas, course of disease and prevention. Evidence-based and fully referenced.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Die Frühsommer-Meningoenzephalitis (FSME) ist eine durch Zecken übertragene Viruserkrankung, die das zentrale Nervensystem befallen kann. In ausgewiesenen Risikogebieten ist die Impfung der wirksamste Schutz.',
      en: 'Tick-borne encephalitis (TBE) is a tick-borne viral disease that can affect the central nervous system. In designated risk areas, vaccination is the most effective protection.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Die FSME wird durch das FSME-Virus (TBE-Virus) ausgelöst, ein RNA-Virus aus der Gattung der Flaviviren (Familie Flaviviridae). Eng verwandt sind unter anderem die Erreger von Gelbfieber, Dengue- und Zika-Fieber.',
        ],
        en: [
          'TBE is caused by the TBE virus (tick-borne encephalitis virus), an RNA virus of the genus Flavivirus (family Flaviviridae). Closely related viruses include the pathogens of yellow fever, dengue and Zika.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Das Virus wird überwiegend durch den Stich infizierter Zecken übertragen – in Mitteleuropa vor allem durch den Gemeinen Holzbock (Ixodes ricinus). Die Viren befinden sich in den Speicheldrüsen der Zecke und können bereits zu Beginn des Stichs übertragen werden.',
          'Nur ein kleiner Teil der Zecken in Risikogebieten trägt das Virus in sich, sodass nicht jeder Zeckenstich zu einer Infektion führt. Selten ist eine Ansteckung auch über nicht pasteurisierte Rohmilch infizierter Tiere (z. B. Ziege oder Schaf) möglich. Eine direkte Übertragung von Mensch zu Mensch findet nicht statt.',
        ],
        en: [
          'The virus is transmitted predominantly through the bite of infected ticks – in Central Europe mainly the castor bean tick (Ixodes ricinus). The viruses are located in the tick’s salivary glands and can be transmitted as early as the beginning of the bite.',
          'Only a small proportion of ticks in risk areas carry the virus, so not every tick bite leads to infection. Rarely, infection is also possible via unpasteurised raw milk from infected animals (e.g. goat or sheep). There is no direct person-to-person transmission.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung & Risikogebiete', en: 'Distribution & risk areas' },
      body: {
        de: [
          'In Deutschland liegen die FSME-Risikogebiete vor allem im Süden – schwerpunktmäßig in Baden-Württemberg und Bayern sowie in Teilen von Hessen, Thüringen, Sachsen und einzelnen weiteren Landkreisen. Das Robert Koch-Institut (RKI) weist die Risikogebiete aus und aktualisiert sie jährlich.',
          'Auch in zahlreichen weiteren Ländern Europas und Asiens gibt es Endemiegebiete, etwa in Österreich, der Schweiz, dem Baltikum, Skandinavien und Russland. Welche Gebiete derzeit als Risikogebiet gelten, finden Sie auf unserer Seite zu den Risikogebieten sowie bei den unten genannten Quellen.',
        ],
        en: [
          'In Germany, the TBE risk areas are located mainly in the south – with a focus on Baden-Württemberg and Bavaria as well as parts of Hesse, Thuringia, Saxony and individual further districts. The Robert Koch Institute (RKI) designates the risk areas and updates them annually.',
          'Endemic areas also exist in many other countries of Europe and Asia, for example in Austria, Switzerland, the Baltic states, Scandinavia and Russia. Which areas currently count as risk areas can be found on our risk-areas page and in the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Die meisten Infektionen verlaufen ohne oder nur mit milden Symptomen. Kommt es zu einer Erkrankung, verläuft sie häufig in zwei Phasen: Etwa sieben bis vierzehn Tage nach dem Stich treten zunächst grippeähnliche Beschwerden mit Fieber, Kopf- und Gliederschmerzen auf.',
          'Bei einem Teil der Erkrankten folgt nach einem beschwerdefreien Intervall eine zweite Phase mit Befall des zentralen Nervensystems – als Hirnhautentzündung (Meningitis), Hirnentzündung (Enzephalitis) oder Beteiligung des Rückenmarks. Schwere Verläufe und bleibende Schäden betreffen vor allem Erwachsene und ältere Menschen; bei Kindern verläuft die Erkrankung meist milder.',
        ],
        en: [
          'Most infections cause no symptoms or only mild ones. When illness does occur, it often follows two phases: about seven to fourteen days after the bite, flu-like symptoms with fever, headache and aching limbs appear first.',
          'In a proportion of cases, after a symptom-free interval a second phase follows with involvement of the central nervous system – as meningitis, encephalitis or involvement of the spinal cord. Severe courses and lasting damage mainly affect adults and older people; in children the illness is usually milder.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Keine ursächliche Behandlung', en: 'No causal treatment' },
        text: {
          de: 'Gegen FSME gibt es keine spezifische antivirale Therapie – behandelt werden können nur die Symptome. Umso wichtiger sind die vorbeugende Impfung und der Schutz vor Zeckenstichen.',
          en: 'There is no specific antiviral therapy for TBE – only the symptoms can be treated. This makes the preventive vaccination and protection against tick bites all the more important.',
        },
      },
    },
    {
      id: 'vorbeugung',
      heading: { de: 'Vorbeugung', en: 'Prevention' },
      body: {
        de: [
          'Für Menschen, die in Risikogebieten leben oder dorthin reisen und dabei Zecken ausgesetzt sind, ist die FSME-Impfung der wirksamste Schutz.',
          'Ergänzend hilft der Schutz vor Zeckenstichen: möglichst geschlossene Kleidung, Repellentien, das Absuchen des Körpers nach Aufenthalten im Freien sowie das rasche Entfernen von Zecken. Da das FSME-Virus jedoch bereits zu Beginn des Stichs übertragen werden kann, schützt ein rasches Entfernen – anders als bei der Borreliose – nicht zuverlässig vor FSME. Umso wichtiger ist die Impfung.',
        ],
        en: [
          'For people who live in or travel to risk areas and are exposed to ticks, the TBE vaccination is the most effective protection.',
          'In addition, protection against tick bites helps: covering the skin where possible, using repellents, checking the body after spending time outdoors and removing ticks promptly. However, because the TBE virus can already be transmitted at the start of the bite, prompt removal – unlike with Lyme borreliosis – does not reliably protect against TBE. This makes vaccination all the more important.',
        ],
      },
    },
  ],
  sourceIds: ['rkiFsme', 'rkiFsmeRisikogebiete'],
  lastReviewed: new Date('2026-05-15'),
  related: [
    {
      label: { de: 'Zur FSME-Impfung', en: 'About the TBE vaccination' },
      path: '/leistungen/fsme-impfung',
    },
    {
      label: { de: 'FSME-Risikogebiete', en: 'TBE risk areas' },
      path: '/risikogebiete',
    },
  ],
};
