/**
 * ENTWURF vom 12.11.2026: vor Veröffentlichung ärztlich gegenlesen.
 *
 * Krankheitsbild Gürtelrose (Herpes zoster) — fachlicher Inhalt (DE/EN), belegt über
 * das Quellen-Register (RKI-FAQ Stand 04.02.2026, RKI-Ratgeber Stand 27.01.2026,
 * RKI-Faktenblatt Stand 02/2026). Sachlich, ohne Heilversprechen (HWG-konform),
 * ohne Präparate- und Herstellernamen. Bewusst ohne Zeitfenster für den Beginn der
 * Behandlung, weil die genutzten Quellen dazu keine Angabe machen.
 */
import type { ClinicalPage } from '../types';

export const guertelroseDisease: ClinicalPage = {
  meta: {
    title: { de: 'Gürtelrose (Herpes zoster)', en: 'Shingles (herpes zoster)' },
    description: {
      de: 'Gürtelrose (Herpes zoster) – Erreger, Entstehung, Ansteckung, Krankheitsverlauf, anhaltende Nervenschmerzen und Vorbeugung durch Impfung. Mit Quellen belegt.',
      en: 'Shingles (herpes zoster) – pathogen, how it develops, infectiousness, course of disease, persistent nerve pain and prevention by vaccination.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Gürtelrose entsteht, wenn das Windpocken-Virus nach Jahren oder Jahrzehnten im Körper wieder aktiv wird. Typisch sind ein brennender Schmerz und ein meist halbseitiger, bandförmiger Hautausschlag mit Bläschen. Am häufigsten erkranken Menschen über 50 Jahre. Einer Gürtelrose lässt sich mit einer Impfung vorbeugen.',
      en: 'Shingles develops when the chickenpox virus becomes active again in the body after years or decades. Typical signs are a burning pain and a band-like rash with blisters, usually on one side of the body. People over 50 are affected most often. Shingles can be prevented by vaccination.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger & Entstehung', en: 'Pathogen & how it develops' },
      body: {
        de: [
          'Gürtelrose (Herpes zoster) wird durch das Varizella-zoster-Virus ausgelöst, ein Herpesvirus. Beim ersten Kontakt, meist im Kindesalter, verursacht es Windpocken.',
          'Nach dem Abklingen der Windpocken bleibt das Virus lebenslang in Nervenknoten des Rückenmarks und der Hirnnerven. Lässt die Immunabwehr nach – im höheren Lebensalter oder bei geschwächtem Immunsystem –, kann das Virus wieder aktiv werden und eine Gürtelrose auslösen.',
        ],
        en: [
          'Shingles (herpes zoster) is caused by the varicella zoster virus, a herpesvirus. On first contact, usually in childhood, it causes chickenpox.',
          'After chickenpox has subsided, the virus remains for life in nerve ganglia of the spinal cord and the cranial nerves. When the immune defence weakens – in older age or with a weakened immune system – the virus can become active again and cause shingles.',
        ],
      },
    },
    {
      id: 'haeufigkeit',
      heading: { de: 'Wer erkrankt?', en: 'Who is affected?' },
      body: {
        de: [
          'An Gürtelrose kann erkranken, wer früher Windpocken hatte oder gegen Windpocken geimpft wurde. Das Robert Koch-Institut (RKI) geht davon aus, dass fast alle Menschen, die vor 2004 in Deutschland aufgewachsen sind, Windpocken durchgemacht haben.',
          'Gürtelrose kommt in jedem Alter vor, am häufigsten jedoch bei Menschen über 50 Jahre; das Risiko steigt mit dem Alter deutlich an und ist bei geschwächtem Immunsystem zusätzlich erhöht. In Deutschland erkranken nach Angaben des RKI jährlich mehr als 300.000 Menschen; schätzungsweise jeder Vierte erkrankt mindestens einmal im Leben.',
          'Meist tritt die Erkrankung nur einmal im Leben auf. Wiederholte Erkrankungen sind möglich, vor allem bei geschwächtem Immunsystem.',
        ],
        en: [
          'Anyone who has had chickenpox or has been vaccinated against chickenpox can develop shingles. The Robert Koch Institute (RKI) assumes that almost everyone who grew up in Germany before 2004 has had chickenpox.',
          'Shingles occurs at any age, but most often in people over 50; the risk rises markedly with age and is additionally increased with a weakened immune system. In Germany, according to the RKI, more than 300,000 people develop shingles each year; an estimated one in four people develops it at least once in their life.',
          'The illness usually occurs only once in a lifetime. Repeated episodes are possible, particularly with a weakened immune system.',
        ],
      },
    },
    {
      id: 'ansteckung',
      heading: { de: 'Ansteckung', en: 'Infectiousness' },
      body: {
        de: [
          'Gürtelrose entsteht durch das eigene, im Körper verbliebene Virus und nicht durch eine Ansteckung von außen. Die Flüssigkeit in den Bläschen ist jedoch ansteckend: Menschen, die weder Windpocken hatten noch dagegen geimpft sind, können sich über direkten Kontakt anstecken und an Windpocken erkranken.',
          'Ansteckend sind Erkrankte vom Auftreten des Ausschlags bis zur vollständigen Verkrustung der Bläschen, in der Regel fünf bis sieben Tage. Bis dahin sollten die Bläschen sorgfältig abgedeckt, enger Körperkontakt vermieden und auf gründliche Händehygiene geachtet werden.',
        ],
        en: [
          'Shingles is caused by a person’s own virus that has remained in the body, not by infection from outside. However, the fluid in the blisters is infectious: people who have neither had chickenpox nor been vaccinated against it can become infected through direct contact and develop chickenpox.',
          'People with shingles are infectious from the appearance of the rash until the blisters have fully crusted over, generally five to seven days. Until then, the blisters should be carefully covered, close physical contact avoided and thorough hand hygiene observed.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Typisch ist zunächst ein brennender Schmerz, gefolgt von einem meist halbseitigen, bandförmigen Hautausschlag mit Bläschen im Versorgungsgebiet des betroffenen Nervs. Am häufigsten sind Rumpf und Brustkorb betroffen, der Ausschlag kann aber auch am Kopf auftreten.',
          'Bei Erwachsenen können erhebliche Schmerzen auftreten. Die häufigste Komplikation sind Nervenschmerzen, die nach dem Abheilen des Ausschlags anhalten (postherpetische Neuralgie). Nach Angaben des RKI betrifft das 12 bis 20 % der Erkrankten; die Schmerzen können mehrere Monate bis Jahre andauern.',
          'Ist ein Gesichtsnerv betroffen, kann das Auge beteiligt sein. Bei geschwächtem Immunsystem sind schwere Verläufe möglich, bei denen sich der Ausschlag über den Bereich eines Nervs hinaus ausbreitet.',
        ],
        en: [
          'Typically, a burning pain comes first, followed by a band-like rash with blisters, usually on one side of the body, in the area supplied by the affected nerve. The trunk and chest are affected most often, but the rash can also appear on the head.',
          'In adults, considerable pain can occur. The most common complication is nerve pain that persists after the rash has healed (postherpetic neuralgia). According to the RKI, this affects 12 to 20% of those who fall ill; the pain can last from several months to years.',
          'If a facial nerve is affected, the eye can be involved. With a weakened immune system, severe courses are possible in which the rash spreads beyond the area of a single nerve.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Bei Verdacht ärztlich abklären lassen', en: 'Seek medical assessment if shingles is suspected' },
        text: {
          de: 'Gürtelrose wird mit virushemmenden Medikamenten behandelt; das beschleunigt nach Angaben des RKI die Abheilung des Ausschlags und das Abklingen der Schmerzen. Lassen Sie einen Verdacht auf Gürtelrose ärztlich abklären, besonders bei Bläschen im Gesicht oder am Auge.',
          en: 'Shingles is treated with antiviral medication; according to the RKI, this speeds up the healing of the rash and the easing of the pain. If you suspect shingles, have it assessed by a doctor, particularly if blisters appear on the face or near the eye.',
        },
      },
    },
    {
      id: 'vorbeugung',
      heading: { de: 'Vorbeugung durch Impfung', en: 'Prevention by vaccination' },
      body: {
        de: [
          'Gegen Gürtelrose wird mit einem Totimpfstoff in zwei Dosen im Abstand von zwei bis sechs Monaten geimpft. Die Ständige Impfkommission (STIKO) empfiehlt die Impfung allen Menschen ab 60 Jahren sowie ab 18 Jahren bei erhöhtem Risiko durch eine Immunschwäche oder eine schwere Ausprägung einer chronischen Grunderkrankung.',
          'Zugelassen ist der Totimpfstoff für Erwachsene ab 50 Jahren und ab 18 Jahren bei erhöhtem Risiko. Für gesunde Menschen unter 60 Jahren gibt es keine STIKO-Empfehlung; hier ist die Impfung eine individuelle Entscheidung nach ärztlicher Beratung.',
          'Auch nach einer durchgemachten Gürtelrose ist die Impfung möglich, um einer weiteren Erkrankung vorzubeugen – nach vollständigem Abklingen der Beschwerden und mit einem vom RKI empfohlenen Abstand von mindestens 6 bis 12 Monaten. Zur Behandlung einer bestehenden Gürtelrose oder ihrer Folgen eignet sich die Impfung nicht.',
        ],
        en: [
          'Vaccination against shingles is given with an inactivated vaccine in two doses two to six months apart. The German Standing Committee on Vaccination (STIKO) recommends it for everyone aged 60 and over and from age 18 for people at increased risk due to immunodeficiency or a severe form of a chronic underlying condition.',
          'The inactivated vaccine is authorised for adults aged 50 and over and from age 18 for those at increased risk. For healthy people under 60 there is no STIKO recommendation; here vaccination is an individual decision following medical advice.',
          'Vaccination is also possible after an episode of shingles in order to prevent a further one – once the symptoms have fully subsided and with an interval of at least 6 to 12 months as recommended by the RKI. The vaccination is not suitable for treating existing shingles or its consequences.',
        ],
      },
    },
  ],
  sourceIds: ['rkiZosterFaq', 'rkiVarizellenZosterRatgeber', 'rkiZosterFaktenblatt', 'stikoZoster2025', 'peiZoster'],
  // Datum des Entwurfs. Die Seite zeigt es als „Inhaltlich geprüft“ an – erst nach dem
  // ärztlichen Gegenlesen auf das tatsächliche Prüfdatum setzen.
  lastReviewed: new Date('2026-11-14'),
  related: [
    {
      label: { de: 'Zur Gürtelrose-Impfung', en: 'About the shingles vaccination' },
      path: '/leistungen/guertelrose-impfung',
    },
  ],
};
