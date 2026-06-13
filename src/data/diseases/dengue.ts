/**
 * Krankheitsbild Dengue — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Besonderheit Impfung: Die STIKO empfiehlt Qdenga® als Reiseimpfung nur für
 * Personen mit nachweislich früher durchgemachter Dengue-Infektion — diese
 * Differenzierung wird im Abschnitt „Schutzimpfung" sauber abgebildet.
 */
import type { ClinicalPage } from '../types';

export const dengueDisease: ClinicalPage = {
  meta: {
    title: { de: 'Dengue-Fieber', en: 'Dengue fever' },
    description: {
      de: 'Dengue-Fieber – Erreger, Übertragung durch tagaktive Stechmücken, Verbreitung, Krankheitsverlauf, Impfung (Qdenga®) und Vorbeugung. Fachlich fundiert und mit Quellen belegt.',
      en: 'Dengue fever – pathogen, transmission by day-biting mosquitoes, distribution, course of disease, vaccination (Qdenga®) and prevention. Evidence-based and fully referenced.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Dengue ist die weltweit häufigste durch Stechmücken übertragene Viruserkrankung. Sie kommt in den Tropen und Subtropen vor und nimmt global zu. Der wichtigste Schutz ist konsequenter Mückenschutz – in bestimmten Fällen ergänzt durch eine Impfung.',
      en: 'Dengue is the most common mosquito-borne viral disease worldwide. It occurs in the tropics and subtropics and is increasing globally. The most important protection is consistent mosquito-bite prevention – in certain cases supplemented by vaccination.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Dengue wird durch das Dengue-Virus ausgelöst, ein behülltes RNA-Virus aus der Gattung der Flaviviren (Familie Flaviviridae). Eng verwandt sind unter anderem die Erreger von Gelbfieber, Zika und FSME.',
          'Es gibt vier Serotypen des Virus (DENV-1 bis DENV-4). Eine durchgemachte Infektion hinterlässt nur gegen den jeweiligen Serotyp eine dauerhafte Immunität – eine erneute Infektion mit einem anderen Serotyp ist möglich und kann schwerer verlaufen.',
        ],
        en: [
          'Dengue is caused by the dengue virus, an enveloped RNA virus of the genus Flavivirus (family Flaviviridae). Closely related viruses include the pathogens of yellow fever, Zika and tick-borne encephalitis (TBE).',
          'There are four serotypes of the virus (DENV-1 to DENV-4). A past infection confers lasting immunity only against the respective serotype – a renewed infection with a different serotype is possible and can take a more severe course.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Das Virus wird durch den Stich infizierter Stechmücken der Gattung Aedes übertragen – vor allem durch die Gelbfiebermücke (Aedes aegypti), zunehmend auch durch die Asiatische Tigermücke (Aedes albopictus).',
          'Diese Mücken stechen überwiegend tagsüber, mit Schwerpunkt in den Morgen- und Abendstunden. Eine direkte Übertragung von Mensch zu Mensch findet im Alltag nicht statt.',
        ],
        en: [
          'The virus is transmitted through the bite of infected Aedes mosquitoes – mainly the yellow fever mosquito (Aedes aegypti) and, increasingly, the Asian tiger mosquito (Aedes albopictus).',
          'These mosquitoes bite predominantly during the day, with peaks in the morning and evening hours. There is no routine direct person-to-person transmission.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Dengue kommt in tropischen und subtropischen Regionen weltweit vor – in weiten Teilen Asiens, Lateinamerikas und der Karibik, zunehmend auch in Afrika und im pazifischen Raum. Ein erheblicher Teil der Weltbevölkerung lebt in Gebieten mit Übertragungsrisiko.',
          'Die Fallzahlen steigen weltweit. Durch die Ausbreitung der Tigermücke kommt es in den Sommermonaten auch in Südeuropa vereinzelt zu örtlichen Übertragungen. Welche Reiseziele aktuell betroffen sind, kann sich ändern – aktuelle Hinweise finden Sie auf unserer Seite zu den Risikogebieten sowie bei den unten genannten Quellen.',
        ],
        en: [
          'Dengue occurs in tropical and subtropical regions worldwide – across large parts of Asia, Latin America and the Caribbean, and increasingly in Africa and the Pacific region. A substantial share of the world’s population lives in areas with a transmission risk.',
          'Case numbers are rising worldwide. As the tiger mosquito spreads, isolated local transmissions also occur in southern Europe during the summer months. Which destinations are currently affected can change – up-to-date information can be found on our risk-areas page and in the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Ein Großteil der Infektionen verläuft ohne oder nur mit milden Symptomen. Treten Beschwerden auf, beginnen sie meist etwa vier bis zehn Tage nach dem Stich mit plötzlichem hohem Fieber, starken Kopf- und Augenschmerzen, ausgeprägten Glieder- und Muskelschmerzen sowie Hautausschlag. Wegen der heftigen Schmerzen wird Dengue umgangssprachlich auch „Knochenbrecherfieber" genannt.',
          'In den meisten Fällen heilt die Erkrankung nach einigen Tagen folgenlos aus. Bei einem kleinen Teil der Erkrankten – häufiger bei einer Zweitinfektion mit einem anderen Serotyp – kann sich ein schwerer Verlauf entwickeln, oft gerade dann, wenn das Fieber zurückgeht. Warnzeichen sind unter anderem starke Bauchschmerzen, anhaltendes Erbrechen, Blutungszeichen, Unruhe oder Teilnahmslosigkeit. Ein schweres Dengue mit Kreislaufversagen ist ein medizinischer Notfall.',
        ],
        en: [
          'The majority of infections cause no symptoms or only mild ones. When symptoms occur, they usually begin about four to ten days after the bite with sudden high fever, severe headache and pain behind the eyes, pronounced aching of the limbs and muscles, and a rash. Because of the intense pain, dengue is colloquially also called “breakbone fever”.',
          'In most cases the illness resolves without consequences after a few days. In a small proportion of patients – more often with a second infection by a different serotype – a severe course can develop, frequently just as the fever subsides. Warning signs include severe abdominal pain, persistent vomiting, signs of bleeding, restlessness or lethargy. Severe dengue with circulatory failure is a medical emergency.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Keine ursächliche Behandlung', en: 'No causal treatment' },
        text: {
          de: 'Gegen Dengue gibt es keine spezifische antivirale Therapie – behandelt werden können nur die Symptome. Bei rechtzeitiger, fachgerechter Versorgung sind schwere Verläufe selten. Schmerz- und Fiebermittel mit Acetylsalicylsäure (ASS) oder anderen entzündungshemmenden Wirkstoffen (NSAR) sollten wegen der Blutungsneigung gemieden werden; bei Verdacht auf Dengue – besonders bei Warnzeichen – ärztlich abklären lassen.',
          en: 'There is no specific antiviral therapy for dengue – only the symptoms can be treated. With timely, appropriate care, severe courses are rare. Painkillers and antipyretics containing acetylsalicylic acid (ASA) or other anti-inflammatory agents (NSAIDs) should be avoided because of the bleeding tendency; if dengue is suspected – especially with warning signs – seek medical assessment.',
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
          'Seit Ende 2022 ist in der EU der Impfstoff Qdenga® zugelassen – ein abgeschwächter Lebendimpfstoff, der gegen alle vier Serotypen gerichtet ist und ab dem Alter von vier Jahren angewendet werden kann. Die Grundimmunisierung besteht aus zwei Dosen im Abstand von drei Monaten.',
          'Die Ständige Impfkommission (STIKO) empfiehlt die Dengue-Impfung als Reiseimpfung gezielt für Personen ab vier Jahren, die nachweislich bereits eine Dengue-Infektion durchgemacht haben und erneut in ein Gebiet mit Infektionsrisiko reisen. Hintergrund ist, dass eine zweite Dengue-Infektion schwerer verlaufen kann; für Menschen ohne frühere Infektion ist die Datenlage begrenzt, weshalb die STIKO hier keine generelle Impfung empfiehlt.',
          'Nicht geimpft werden sollte in der Schwangerschaft und Stillzeit sowie bei geschwächtem Immunsystem (Immundefekt oder immunsupprimierende Behandlung). Ob eine Impfung für Sie sinnvoll und möglich ist, klären wir individuell im reisemedizinischen Beratungsgespräch – auf Grundlage Ihres Reiseziels, Ihrer Vorgeschichte und der aktuellen Empfehlungen.',
        ],
        en: [
          'Since late 2022, the vaccine Qdenga® has been authorised in the EU – a live-attenuated vaccine directed against all four serotypes that can be used from the age of four. Primary immunisation consists of two doses three months apart.',
          'The German Standing Committee on Vaccination (STIKO) recommends dengue vaccination as a travel vaccination specifically for people aged four and over who have demonstrably already had a dengue infection and are travelling again to an area with an infection risk. The background is that a second dengue infection can take a more severe course; for people without a previous infection the evidence is limited, which is why STIKO does not recommend general vaccination here.',
          'Vaccination should not be given during pregnancy and breastfeeding or in the case of a weakened immune system (immunodeficiency or immunosuppressive treatment). Whether vaccination is sensible and possible for you is something we clarify individually in the travel-medicine consultation – based on your destination, your history and the current recommendations.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Für wen die Impfung infrage kommt', en: 'Who the vaccination is for' },
        text: {
          de: 'Die Dengue-Impfung ist in Deutschland eine Reiseimpfung für eine klar umschriebene Gruppe – nicht für jede:n Reisende:n. Die individuelle Indikation prüfen wir im Beratungsgespräch.',
          en: 'In Germany, dengue vaccination is a travel vaccination for a clearly defined group – not for every traveller. We assess the individual indication during the consultation.',
        },
      },
    },
  ],
  sourceIds: ['rkiDengue', 'whoDengue', 'stikoDengue', 'emaQdenga', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-12'),
  related: [
    {
      label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' },
      path: '/leistungen/reiseberatung',
    },
    {
      label: { de: 'Chikungunya', en: 'Chikungunya' },
      path: '/krankheitsbilder/chikungunya',
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
