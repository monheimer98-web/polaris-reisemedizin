/**
 * Krankheitsbild Japanische Enzephalitis — fachlicher Inhalt (DE/EN), belegt
 * über das Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Schwerpunkt: durch Stechmücken übertragene Virusinfektion, die meist mild
 * verläuft, in seltenen Fällen aber eine schwere Hirnentzündung verursacht. Der
 * Abschnitt „Schutzimpfung" bildet das 2-Dosen-Schema (Totimpfstoff) und die
 * STIKO-/DTG-Reiseindikation ab.
 */
import type { ClinicalPage } from '../types';

export const japanischeEnzephalitisDisease: ClinicalPage = {
  meta: {
    title: { de: 'Japanische Enzephalitis', en: 'Japanese encephalitis' },
    description: {
      de: 'Japanische Enzephalitis – Erreger, Übertragung durch Stechmücken, Verbreitung, Krankheitsverlauf, Impfung und Vorbeugung.',
      en: 'Japanese encephalitis – pathogen, transmission via mosquitoes, distribution, course of disease, vaccination and prevention.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Die Japanische Enzephalitis ist eine durch Stechmücken übertragene Virusinfektion, die vor allem in ländlichen Regionen Asiens vorkommt. Sie verläuft meist mild, kann aber in seltenen Fällen eine schwere Hirnentzündung auslösen – ein wirksamer Impfschutz steht zur Verfügung.',
      en: 'Japanese encephalitis is a mosquito-borne viral infection that occurs mainly in rural regions of Asia. It usually runs a mild course but can, in rare cases, cause severe inflammation of the brain – an effective vaccination is available.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Die Japanische Enzephalitis wird durch das Japanische-Enzephalitis-Virus ausgelöst, ein Flavivirus. Es ist mit den Erregern von Dengue, Gelbfieber und Zika verwandt. In seltenen Fällen befällt das Virus das zentrale Nervensystem und löst dort eine Entzündung des Gehirns (Enzephalitis) aus.',
          'Das Virus zirkuliert in einem Kreislauf zwischen Stechmücken und Tieren, vor allem Schweinen und Wasservögeln. Der Mensch ist ein Fehlwirt: Er kann erkranken, gibt das Virus aber nicht weiter – eine Übertragung von Mensch zu Mensch findet nicht statt.',
        ],
        en: [
          'Japanese encephalitis is caused by the Japanese encephalitis virus, a flavivirus. It is related to the pathogens of dengue, yellow fever and Zika. In rare cases the virus affects the central nervous system and causes inflammation of the brain (encephalitis) there.',
          'The virus circulates in a cycle between mosquitoes and animals, above all pigs and water birds. Humans are an incidental host: they can fall ill but do not pass the virus on – there is no human-to-human transmission.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Übertragen wird das Virus durch den Stich infizierter Stechmücken der Gattung Culex. Diese Mücken sind vor allem in der Dämmerung und nachts aktiv und brüten häufig in Reisfeldern und stehenden Gewässern.',
          'Das Risiko ist daher in ländlichen Gebieten mit Reisanbau und Schweinehaltung am höchsten und steigt während und nach der Regenzeit. In Städten und bei kurzen Aufenthalten in städtischer Umgebung ist das Risiko gering.',
        ],
        en: [
          'The virus is transmitted by the bite of infected Culex mosquitoes. These mosquitoes are active mainly at dusk and at night and often breed in rice fields and standing water.',
          'The risk is therefore highest in rural areas with rice cultivation and pig farming and rises during and after the rainy season. In cities and on short stays in urban surroundings the risk is low.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Die Japanische Enzephalitis kommt in weiten Teilen Süd- und Südostasiens sowie im westlichen Pazifik vor – darunter Indien, China, Südostasien, Korea, Japan, Nepal sowie Teile Nordaustraliens und Papua-Neuguineas. Sie ist die häufigste durch Viren verursachte Hirnentzündung in Asien.',
          'In vielen dieser Länder tritt die Erkrankung saisonal gehäuft auf, meist in der Regenzeit. Welche Regionen und Reisezeiten betroffen sind, ordnen wir im Beratungsgespräch und anhand der unten genannten Quellen ein.',
        ],
        en: [
          'Japanese encephalitis occurs across large parts of South and South-East Asia and the western Pacific – including India, China, South-East Asia, Korea, Japan, Nepal and parts of northern Australia and Papua New Guinea. It is the most common virally caused inflammation of the brain in Asia.',
          'In many of these countries the disease occurs seasonally, mostly in the rainy season. Which regions and travel times are affected is something we assess in the consultation and on the basis of the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Zwischen Stich und möglichen Beschwerden liegen etwa 5 bis 15 Tage. Die allermeisten Infektionen verlaufen ohne oder nur mit milden, grippeähnlichen Beschwerden und bleiben unbemerkt. Nur etwa einer von 250 Infizierten entwickelt eine schwere Verlaufsform.',
          'Kommt es zu einer Hirnentzündung, sind hohes Fieber, Bewusstseinsstörungen, Krampfanfälle und Lähmungen möglich. Diese seltenen schweren Verläufe können tödlich enden, und ein Teil der Überlebenden behält bleibende neurologische Schäden zurück.',
        ],
        en: [
          'Between the bite and possible symptoms there are about 5 to 15 days. The vast majority of infections run their course without symptoms or with only mild, flu-like symptoms and go unnoticed. Only about one in 250 of those infected develops a severe form.',
          'If inflammation of the brain occurs, high fever, impaired consciousness, seizures and paralysis are possible. These rare severe courses can be fatal, and some of the survivors are left with permanent neurological damage.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Selten, aber schwerwiegend', en: 'Rare but serious' },
        text: {
          de: 'Eine ursächliche Behandlung der Japanischen Enzephalitis gibt es nicht – möglich ist nur eine unterstützende Therapie der Beschwerden. Auch wenn schwere Verläufe selten sind, sind sie ernst zu nehmen. Deshalb stützt sich der Schutz auf Mückenschutz und, bei entsprechendem Risiko, auf die Impfung.',
          en: 'There is no causal treatment for Japanese encephalitis – only supportive treatment of the symptoms is possible. Even though severe courses are rare, they must be taken seriously. Protection therefore relies on mosquito-bite prevention and, where the risk warrants it, on vaccination.',
        },
      },
    },
    {
      id: 'schutz',
      heading: { de: 'Mückenschutz', en: 'Mosquito-bite protection' },
      body: {
        de: [
          'Da die übertragenden Mücken vor allem abends und nachts stechen, ist ein konsequenter Mückenschutz in den Abend- und Nachtstunden besonders wichtig: hautbedeckende, helle Kleidung, Mückenschutzmittel (Repellents) auf freier Haut sowie Schlafen unter einem Moskitonetz oder in mückensicheren Räumen.',
          'Diese Maßnahmen schützen zugleich vor anderen durch Mücken übertragenen Erkrankungen. Für Reisen mit höherem Risiko ergänzt die Impfung diesen Schutz.',
        ],
        en: [
          'As the mosquitoes that transmit the virus bite mainly in the evening and at night, consistent mosquito-bite protection during the evening and night hours is particularly important: skin-covering, light-coloured clothing, insect repellents on exposed skin and sleeping under a mosquito net or in mosquito-proof rooms.',
          'These measures also protect against other mosquito-borne diseases. For higher-risk trips, vaccination complements this protection.',
        ],
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Zum Schutz vor der Japanischen Enzephalitis steht ein gut verträglicher Totimpfstoff mit inaktivierten Viren zur Verfügung, der ab dem Säuglingsalter angewendet werden kann. Die Grundimmunisierung besteht aus zwei Dosen im Abstand von 28 Tagen; für Erwachsene ist unter bestimmten Voraussetzungen ein beschleunigtes Schema möglich.',
          'Bei fortbestehender Exposition kann nach ein bis zwei Jahren eine Auffrischung sinnvoll sein. Die Impfung sollte rechtzeitig vor der Abreise abgeschlossen sein, damit der Schutz zu Reisebeginn vollständig aufgebaut ist.',
          'Die Ständige Impfkommission (STIKO) und die DTG empfehlen die Impfung als Reiseimpfung insbesondere bei Aufenthalten in ländlichen Risikogebieten, längeren Reisen oder Reisen während der Übertragungssaison. Ob die Impfung für Sie sinnvoll ist, klären wir individuell anhand von Reiseziel, Reisezeit und Reisestil im Beratungsgespräch.',
        ],
        en: [
          'A well-tolerated inactivated (killed-virus) vaccine that can be used from infancy is available to protect against Japanese encephalitis. Primary immunisation consists of two doses 28 days apart; for adults an accelerated schedule is possible under certain conditions.',
          'Where exposure continues, a booster may be sensible after one to two years. Vaccination should be completed in good time before departure so that protection is fully established by the start of the trip.',
          'The German Standing Committee on Vaccination (STIKO) and the DTG recommend vaccination as a travel vaccination, particularly for stays in rural risk areas, longer trips or travel during the transmission season. Whether vaccination is sensible for you is something we clarify individually on the basis of destination, travel time and travel style in the consultation.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Auf die Reise zugeschnitten', en: 'Tailored to your trip' },
        text: {
          de: 'Ob die Impfung sinnvoll ist, hängt stark von Reiseziel, Jahreszeit, Dauer und Art der Reise ab. Bei kurzen Städtereisen ist sie meist nicht erforderlich, bei längeren Aufenthalten im ländlichen Raum dagegen oft empfehlenswert. Diese Abwägung treffen wir gemeinsam.',
          en: 'Whether vaccination is sensible depends strongly on destination, season, duration and type of trip. For short city trips it is usually not necessary, whereas for longer stays in rural areas it is often advisable. We make this assessment together.',
        },
      },
    },
  ],
  sourceIds: ['rkiJapanischeEnzephalitis', 'whoJapaneseEncephalitis', 'peiJapanischeEnzephalitis', 'stikoImpfempfehlungen', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-12'),
  related: [
    {
      label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' },
      path: '/leistungen/reiseberatung',
    },
    {
      label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations at a glance' },
      path: '/leistungen/reiseimpfungen',
    },
    {
      label: { de: 'Dengue-Fieber', en: 'Dengue fever' },
      path: '/krankheitsbilder/dengue',
    },
    {
      label: { de: 'Risikogebiete', en: 'Risk areas' },
      path: '/risikogebiete',
    },
  ],
};
