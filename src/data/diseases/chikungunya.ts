/**
 * Krankheitsbild Chikungunya — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Besonderheit Impfung: Seit 2024/2025 sind in der EU zwei Impfstoffe
 * verfügbar (Ixchiq®, Vimkunya®). Die STIKO differenziert nach Alter und
 * Sicherheitsprofil — diese Differenzierung wird im Abschnitt „Schutzimpfung"
 * sauber abgebildet, ohne sie als pauschale Empfehlung darzustellen.
 */
import type { ClinicalPage } from '../types';

export const chikungunyaDisease: ClinicalPage = {
  meta: {
    title: { de: 'Chikungunya', en: 'Chikungunya' },
    description: {
      de: 'Chikungunya – Erreger, Übertragung durch tagaktive Stechmücken, Verbreitung, Krankheitsverlauf mit anhaltenden Gelenkschmerzen, Impfung (Ixchiq®, Vimkunya®) und Vorbeugung. Fachlich fundiert und mit Quellen belegt.',
      en: 'Chikungunya – pathogen, transmission by day-biting mosquitoes, distribution, course of disease with persistent joint pain, vaccination (Ixchiq®, Vimkunya®) and prevention. Evidence-based and fully referenced.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Chikungunya ist eine durch Stechmücken übertragene Viruserkrankung der Tropen und Subtropen. Typisch ist hohes Fieber mit starken Gelenkschmerzen, die in manchen Fällen lange anhalten. Der wichtigste Schutz ist konsequenter Mückenschutz – in bestimmten Fällen ergänzt durch eine Impfung.',
      en: 'Chikungunya is a mosquito-borne viral disease of the tropics and subtropics. It is characterised by high fever with severe joint pain, which in some cases persists for a long time. The most important protection is consistent mosquito-bite prevention – in certain cases supplemented by vaccination.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Chikungunya wird durch das Chikungunya-Virus (CHIKV) ausgelöst, ein behülltes RNA-Virus aus der Gattung der Alphaviren (Familie Togaviridae). Der Name stammt aus einer ostafrikanischen Sprache und bedeutet sinngemäß „der gekrümmt Gehende" – ein Hinweis auf die typische, schmerzbedingt gebeugte Körperhaltung der Erkrankten.',
          'Eine durchgemachte Infektion hinterlässt nach heutigem Kenntnisstand eine lang anhaltende Immunität gegen eine erneute Erkrankung.',
        ],
        en: [
          'Chikungunya is caused by the chikungunya virus (CHIKV), an enveloped RNA virus of the genus Alphavirus (family Togaviridae). The name comes from an East African language and roughly means “that which bends up” – a reference to the stooped posture of affected people caused by joint pain.',
          'According to current knowledge, a past infection confers long-lasting immunity against a renewed illness.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Das Virus wird durch den Stich infizierter Stechmücken der Gattung Aedes übertragen – vor allem durch die Gelbfiebermücke (Aedes aegypti) und die Asiatische Tigermücke (Aedes albopictus). Es sind dieselben Mücken, die auch Dengue- und Zika-Viren übertragen.',
          'Diese Mücken stechen überwiegend tagsüber, mit Schwerpunkt in den Morgen- und Abendstunden. Eine direkte Übertragung von Mensch zu Mensch findet im Alltag nicht statt.',
        ],
        en: [
          'The virus is transmitted through the bite of infected Aedes mosquitoes – mainly the yellow fever mosquito (Aedes aegypti) and the Asian tiger mosquito (Aedes albopictus). These are the same mosquitoes that also transmit dengue and Zika viruses.',
          'These mosquitoes bite predominantly during the day, with peaks in the morning and evening hours. There is no routine direct person-to-person transmission.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Chikungunya kommt in tropischen und subtropischen Regionen Afrikas, Asiens, Amerikas und des Indischen Ozeans vor. Immer wieder kommt es dort zu größeren Ausbrüchen mit zahlreichen Erkrankten innerhalb kurzer Zeit.',
          'Da sich die Asiatische Tigermücke inzwischen auch in Teilen Südeuropas etabliert hat, treten in den Sommermonaten dort vereinzelt örtliche Übertragungen auf. Welche Reiseziele aktuell betroffen sind, kann sich rasch ändern – aktuelle Hinweise finden Sie auf unserer Seite zu den Risikogebieten sowie bei den unten genannten Quellen.',
        ],
        en: [
          'Chikungunya occurs in tropical and subtropical regions of Africa, Asia, the Americas and the Indian Ocean. Larger outbreaks with numerous cases within a short time repeatedly occur in these areas.',
          'As the Asian tiger mosquito has now also become established in parts of southern Europe, isolated local transmissions occur there during the summer months. Which destinations are currently affected can change quickly – up-to-date information can be found on our risk-areas page and in the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Die Beschwerden beginnen meist vier bis acht Tage nach dem Stich mit plötzlichem hohem Fieber und ausgeprägten Gelenkschmerzen, die häufig mehrere Gelenke gleichzeitig betreffen (Polyarthralgie). Hinzu kommen oft Kopf- und Muskelschmerzen, Müdigkeit und ein Hautausschlag. Im Gegensatz zu vielen anderen Reiseinfektionen verlaufen die meisten Chikungunya-Infektionen mit deutlichen Symptomen.',
          'Das Fieber klingt in der Regel nach wenigen Tagen ab. Die Gelenkschmerzen können jedoch über Wochen, in einem Teil der Fälle über Monate bis Jahre anhalten und die Lebensqualität erheblich beeinträchtigen. Schwere Verläufe sind selten; ein erhöhtes Risiko tragen vor allem Neugeborene, ältere Menschen ab etwa 60 Jahren sowie Personen mit chronischen Grunderkrankungen wie Herz-, Nieren- oder Lungenleiden oder Diabetes.',
        ],
        en: [
          'Symptoms usually begin four to eight days after the bite with sudden high fever and pronounced joint pain that often affects several joints at once (polyarthralgia). Headache, muscle pain, fatigue and a rash are also common. Unlike many other travel infections, most chikungunya infections cause noticeable symptoms.',
          'The fever usually subsides after a few days. The joint pain, however, can persist for weeks and, in a proportion of cases, for months to years, considerably affecting quality of life. Severe courses are rare; an increased risk is carried above all by newborns, older people from around the age of 60, and people with chronic underlying conditions such as heart, kidney or lung disease or diabetes.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Keine ursächliche Behandlung', en: 'No causal treatment' },
        text: {
          de: 'Gegen Chikungunya gibt es keine spezifische antivirale Therapie – behandelt werden können nur die Symptome, vor allem Fieber und Gelenkschmerzen. Bei anhaltenden Beschwerden nach einer Reise sollten Sie ärztlich abklären lassen, woher diese stammen.',
          en: 'There is no specific antiviral therapy for chikungunya – only the symptoms can be treated, in particular fever and joint pain. If symptoms persist after a trip, you should seek medical assessment of their cause.',
        },
      },
    },
    {
      id: 'schutz',
      heading: { de: 'Mückenschutz', en: 'Mosquito-bite protection' },
      body: {
        de: [
          'Da die übertragenden Mücken tagsüber stechen, ist ein konsequenter Schutz über den ganzen Tag entscheidend – nicht nur in der Dämmerung. Dazu gehören hautbedeckende, helle Kleidung, Mückenschutzmittel (Repellentien) auf unbedeckter Haut, Moskitonetze sowie nach Möglichkeit klimatisierte oder mückensichere Räume.',
          'Dieser Expositionsschutz ist die Grundlage der Vorbeugung – auch dann, wenn eine Impfung infrage kommt.',
        ],
        en: [
          'Because the transmitting mosquitoes bite during the day, consistent protection throughout the day is decisive – not only at dusk. This includes light, skin-covering clothing, insect repellents on exposed skin, mosquito nets and, where possible, air-conditioned or mosquito-proof rooms.',
          'This exposure protection is the foundation of prevention – including when vaccination is an option.',
        ],
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Seit 2024 bzw. 2025 sind in der EU zwei Impfstoffe gegen Chikungunya zugelassen, jeweils als Einzeldosis ab dem Alter von zwölf Jahren: Ixchiq® ist ein abgeschwächter Lebendimpfstoff, Vimkunya® ein Totimpfstoff auf Basis virusähnlicher Partikel (ohne vermehrungsfähiges Virus).',
          'Die Ständige Impfkommission (STIKO) empfiehlt eine Chikungunya-Impfung nicht pauschal für alle Reisenden, sondern gezielt: für Reisen in ein Gebiet mit einem aktuellen Ausbruch sowie für längere Aufenthalte (mehr als vier Wochen) oder wiederholte Reisen in Endemiegebiete, wenn zusätzlich ein erhöhtes Risiko für einen schweren Verlauf besteht (etwa höheres Lebensalter oder bestimmte chronische Erkrankungen).',
          'Bei der Wahl des Impfstoffs richtet sich die STIKO nach dem Alter: Der Lebendimpfstoff Ixchiq® wird für Personen von 12 bis einschließlich 59 Jahren vorgesehen; ab 60 Jahren sowie bei geschwächtem Immunsystem, in Schwangerschaft und Stillzeit ist der Totimpfstoff Vimkunya® das Mittel der Wahl. Der Lebendimpfstoff darf bei geschwächtem Immunsystem nicht verabreicht werden. Ob und mit welchem Impfstoff eine Impfung für Sie sinnvoll und möglich ist, klären wir individuell im reisemedizinischen Beratungsgespräch.',
        ],
        en: [
          'Since 2024 and 2025 respectively, two chikungunya vaccines have been authorised in the EU, each as a single dose from the age of twelve: Ixchiq® is a live-attenuated vaccine, while Vimkunya® is an inactivated vaccine based on virus-like particles (containing no replication-competent virus).',
          'The German Standing Committee on Vaccination (STIKO) does not recommend chikungunya vaccination for all travellers across the board, but in a targeted way: for travel to an area with a current outbreak, and for longer stays (more than four weeks) or repeated travel to endemic areas when there is an additional increased risk of a severe course (for example, older age or certain chronic conditions).',
          'For the choice of vaccine, STIKO is guided by age: the live vaccine Ixchiq® is intended for people aged 12 up to and including 59 years; from the age of 60, as well as in the case of a weakened immune system and during pregnancy and breastfeeding, the inactivated vaccine Vimkunya® is the option of choice. The live vaccine must not be given to people with a weakened immune system. Whether and with which vaccine vaccination is sensible and possible for you is something we clarify individually in the travel-medicine consultation.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Eine Frage der individuellen Indikation', en: 'A question of individual indication' },
        text: {
          de: 'Die Chikungunya-Impfung ist eine gezielte Reiseimpfung für bestimmte Reise- und Risikokonstellationen – nicht für jede:n Reisende:n. Welcher Impfstoff infrage kommt, hängt unter anderem von Alter und Vorerkrankungen ab und wird im Beratungsgespräch geprüft.',
          en: 'Chikungunya vaccination is a targeted travel vaccination for specific travel and risk constellations – not for every traveller. Which vaccine is suitable depends, among other things, on age and pre-existing conditions and is assessed during the consultation.',
        },
      },
    },
  ],
  sourceIds: ['rkiChikungunya', 'whoChikungunya', 'stikoChikungunya', 'emaIxchiq', 'emaVimkunya', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-12'),
  related: [
    {
      label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' },
      path: '/leistungen/reiseberatung',
    },
    {
      label: { de: 'Dengue-Fieber', en: 'Dengue fever' },
      path: '/krankheitsbilder/dengue',
    },
    {
      label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' },
      path: '/reisetipps',
    },
    {
      label: { de: 'Risikogebiete', en: 'Risk areas' },
      path: '/risikogebiete',
    },
  ],
};
