/**
 * Krankheitsbild Cholera — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Schwerpunkt: über Wasser und Lebensmittel übertragene Durchfallerkrankung mit
 * sehr geringem Risiko für gewöhnliche Reisende. Der Impf-Abschnitt bildet die
 * oralen Impfstoffe ab und stellt klar, dass die Impfung nur in Ausnahmefällen
 * empfohlen wird.
 */
import type { ClinicalPage } from '../types';

export const choleraDisease: ClinicalPage = {
  meta: {
    title: { de: 'Cholera', en: 'Cholera' },
    description: {
      de: 'Cholera – Erreger, fäkal-orale Übertragung, Verbreitung, Krankheitsverlauf, Impfung und Vorbeugung. Fachlich fundiert und mit Quellen belegt.',
      en: 'Cholera – pathogen, faecal-oral transmission, distribution, course of disease, vaccination and prevention. Evidence-based and fully referenced.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Cholera ist eine bakterielle Durchfallerkrankung, die über verunreinigtes Wasser und Lebensmittel übertragen wird. Für gewöhnliche Reisende ist das Risiko sehr gering; im Mittelpunkt des Schutzes stehen Trinkwasser- und Lebensmittelhygiene.',
      en: 'Cholera is a bacterial diarrhoeal disease transmitted via contaminated water and food. For ordinary travellers the risk is very low; the focus of protection is on drinking-water and food hygiene.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Cholera wird durch das Bakterium Vibrio cholerae ausgelöst. Krankheitsrelevant sind bestimmte Typen (vor allem die Serogruppe O1). Die Bakterien bilden ein Gift (Choleratoxin), das im Darm zu einem starken Wasser- und Salzverlust führt.',
          'Für eine Ansteckung ist in der Regel eine vergleichsweise große Erregermenge nötig. Bei intakter Magensäure und guter Hygiene ist das Ansteckungsrisiko daher gering.',
        ],
        en: [
          'Cholera is caused by the bacterium Vibrio cholerae. Certain types (above all serogroup O1) are relevant to disease. The bacteria produce a toxin (cholera toxin) that leads to a heavy loss of water and salts in the gut.',
          'Infection usually requires a comparatively large number of pathogens. With intact stomach acid and good hygiene the risk of infection is therefore low.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Die Übertragung erfolgt fäkal-oral, vor allem über Trinkwasser und Lebensmittel, die mit Ausscheidungen infizierter Personen verunreinigt sind. Häufige Quellen sind unsauberes Wasser sowie roh verzehrte Meeresfrüchte und ungekochte Speisen.',
          'Cholera verbreitet sich dort, wo sauberes Trinkwasser und eine geregelte Abwasserentsorgung fehlen. Eine direkte Übertragung von Mensch zu Mensch über normalen Kontakt spielt kaum eine Rolle.',
        ],
        en: [
          'Transmission is faecal-oral, above all via drinking water and food contaminated with the excretions of infected people. Common sources are unclean water as well as raw seafood and uncooked dishes.',
          'Cholera spreads where clean drinking water and proper sewage disposal are lacking. Direct person-to-person transmission through normal contact plays hardly any role.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Cholera tritt vor allem in Regionen mit unzureichender Wasser- und Sanitärversorgung auf, häufig im Zusammenhang mit Überschwemmungen, Naturkatastrophen oder humanitären Krisen. Betroffen sind Teile Afrikas und Südasiens sowie immer wieder einzelne Ausbruchsgebiete.',
          'Für gewöhnliche Urlaubs- und Geschäftsreisende ist das Risiko sehr gering. Bedeutsam ist Cholera vor allem für Menschen, die unter einfachen Bedingungen in Ausbruchsgebieten arbeiten – etwa im Gesundheitswesen oder in der humanitären Hilfe.',
        ],
        en: [
          'Cholera occurs mainly in regions with inadequate water and sanitation, often in connection with floods, natural disasters or humanitarian crises. Affected are parts of Africa and South Asia as well as recurring individual outbreak areas.',
          'For ordinary holiday and business travellers the risk is very low. Cholera is relevant above all for people who work under simple conditions in outbreak areas – for instance in healthcare or humanitarian aid.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Zwischen Ansteckung und Erkrankung liegen wenige Stunden bis etwa fünf Tage. Die meisten Infektionen verlaufen ohne oder mit nur leichten Beschwerden. In schweren Fällen kommt es zu plötzlichen, sehr wässrigen Durchfällen, die rasch zu einem gefährlichen Flüssigkeits- und Salzverlust führen können.',
          'Unbehandelt kann ein schwerer Verlauf innerhalb weniger Stunden lebensbedrohlich werden. Mit rechtzeitiger Behandlung ist die Erkrankung dagegen gut beherrschbar.',
        ],
        en: [
          'Between infection and illness there are a few hours to about five days. Most infections run their course without symptoms or with only mild ones. In severe cases there is sudden, very watery diarrhoea that can quickly lead to a dangerous loss of fluids and salts.',
          'Untreated, a severe course can become life-threatening within a few hours. With timely treatment, however, the disease is readily manageable.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Flüssigkeit ersetzen ist entscheidend', en: 'Replacing fluids is decisive' },
        text: {
          de: 'Das Wichtigste bei Cholera – wie bei jedem starken Durchfall – ist der rasche Ersatz von Flüssigkeit und Salzen, in der Regel mit einer oralen Rehydratationslösung, in schweren Fällen über die Vene. Antibiotika können schwere Verläufe verkürzen. Bei starkem, anhaltendem Durchfall auf Reisen frühzeitig ärztliche Hilfe suchen.',
          en: 'The most important thing in cholera – as with any severe diarrhoea – is the rapid replacement of fluids and salts, usually with an oral rehydration solution and, in severe cases, intravenously. Antibiotics can shorten severe courses. With heavy, persistent diarrhoea while travelling, seek medical help early.',
        },
      },
    },
    {
      id: 'schutz',
      heading: { de: 'Lebensmittel- und Trinkwasserhygiene', en: 'Food and water hygiene' },
      body: {
        de: [
          'Der wichtigste Schutz vor Cholera ist eine sorgfältige Trinkwasser- und Lebensmittelhygiene: nur sicheres Wasser trinken, auf Eiswürfel verzichten, Speisen ausreichend erhitzen und Obst selbst schälen („cook it, boil it, peel it or forget it"). Gründliches Händewaschen ist ebenso wichtig.',
          'Diese Maßnahmen schützen zuverlässig vor Cholera und zugleich vor anderen Durchfallerkrankungen, die auf Reisen deutlich häufiger sind. Für die meisten Reisenden sind sie der entscheidende Schutz.',
        ],
        en: [
          'The most important protection against cholera is careful drinking-water and food hygiene: drink only safe water, avoid ice cubes, heat food thoroughly and peel fruit yourself ("cook it, boil it, peel it or forget it"). Thorough hand washing is equally important.',
          'These measures reliably protect against cholera and at the same time against other diarrhoeal diseases, which are far more common when travelling. For most travellers they are the decisive protection.',
        ],
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Gegen Cholera stehen orale Impfstoffe zur Verfügung, die als Trinklösung eingenommen werden. Verfügbar sind ein inaktivierter Impfstoff, der in zwei Dosen gegeben wird, sowie ein oraler Lebendimpfstoff als Einzeldosis für Erwachsene. Die Impfung sollte rechtzeitig vor der Reise abgeschlossen sein.',
          'Die Ständige Impfkommission (STIKO) und die DTG empfehlen die Cholera-Impfung nur in Ausnahmefällen – etwa für Einsatz- und Hilfskräfte in akuten Ausbruchsgebieten oder bei Aufenthalten unter einfachsten hygienischen Bedingungen. Für gewöhnliche Urlaubs- und Geschäftsreisen wird sie in der Regel nicht empfohlen.',
          'Ob eine Cholera-Impfung für Ihre Reise infrage kommt, hängt von Reiseziel, Reisestil und Tätigkeit vor Ort ab. Wir klären dies individuell im reisemedizinischen Beratungsgespräch.',
        ],
        en: [
          'Oral vaccines taken as a drinking solution are available against cholera. There is an inactivated vaccine given in two doses and an oral live vaccine given as a single dose for adults. Vaccination should be completed in good time before the trip.',
          'The German Standing Committee on Vaccination (STIKO) and the DTG recommend cholera vaccination only in exceptional cases – for instance for emergency and aid workers in acute outbreak areas or during stays under the simplest hygienic conditions. For ordinary holiday and business travel it is generally not recommended.',
          'Whether a cholera vaccination is an option for your trip depends on the destination, travel style and your activity on site. We clarify this individually in the travel-medicine consultation.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Nur für bestimmte Reisen', en: 'Only for certain trips' },
        text: {
          de: 'Für die meisten Reisenden ist eine Cholera-Impfung nicht erforderlich – sorgfältige Hygiene genügt. Sinnvoll sein kann sie bei Einsätzen in Ausbruchsgebieten oder unter einfachsten Bedingungen. Diese Abwägung treffen wir gemeinsam.',
          en: 'For most travellers a cholera vaccination is not necessary – careful hygiene is enough. It can be sensible for assignments in outbreak areas or under the simplest conditions. We make this assessment together.',
        },
      },
    },
  ],
  sourceIds: ['rkiCholera', 'whoCholera', 'peiCholera', 'stikoImpfempfehlungen', 'auswaertigesAmt'],
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
      label: { de: 'Typhus', en: 'Typhoid fever' },
      path: '/krankheitsbilder/typhus',
    },
    {
      label: { de: 'Risikogebiete', en: 'Risk areas' },
      path: '/risikogebiete',
    },
  ],
};
