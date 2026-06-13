/**
 * Krankheitsbild Hepatitis A — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Hepatitis A ist eine der häufigsten impfpräventablen Reiseinfektionen; der
 * Abschnitt „Schutzimpfung" bildet die STIKO-Reiseindikation und das
 * 2-Dosen-Schema (Totimpfstoff) sauber ab.
 */
import type { ClinicalPage } from '../types';

export const hepatitisADisease: ClinicalPage = {
  meta: {
    title: { de: 'Hepatitis A', en: 'Hepatitis A' },
    description: {
      de: 'Hepatitis A – Erreger, fäkal-orale Übertragung, Verbreitung, Krankheitsverlauf, Impfung und Vorbeugung. Fachlich fundiert und mit Quellen belegt.',
      en: 'Hepatitis A – pathogen, faecal-oral transmission, distribution, course of disease, vaccination and prevention. Evidence-based and fully referenced.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Hepatitis A ist eine virusbedingte Leberentzündung, die über verunreinigtes Wasser und Lebensmittel übertragen wird. Sie zählt zu den häufigsten impfpräventablen Reiseinfektionen – ein gut wirksamer Impfschutz steht zur Verfügung.',
      en: 'Hepatitis A is a viral inflammation of the liver transmitted through contaminated water and food. It is one of the most common vaccine-preventable travel infections – an effective vaccination is available.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Hepatitis A wird durch das Hepatitis-A-Virus (HAV) ausgelöst, ein unbehülltes RNA-Virus aus der Familie der Picornaviren (Genus Hepatovirus). Das Virus befällt die Leber und führt dort zu einer Entzündung.',
          'HAV ist sehr widerstandsfähig gegenüber Umwelteinflüssen, Säure und Hitze. Dadurch bleibt es in Wasser und Lebensmitteln lange infektiös – eine wichtige Voraussetzung für die Übertragung über den Verdauungsweg.',
        ],
        en: [
          'Hepatitis A is caused by the hepatitis A virus (HAV), a non-enveloped RNA virus of the picornavirus family (genus Hepatovirus). The virus infects the liver and causes inflammation there.',
          'HAV is highly resistant to environmental influences, acid and heat. As a result it remains infectious in water and food for a long time – a key prerequisite for transmission via the digestive tract.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Die Übertragung erfolgt fäkal-oral: über verunreinigtes Trinkwasser und Lebensmittel – etwa rohe oder unzureichend gegarte Meeresfrüchte, ungeschältes Obst und Gemüse oder Eiswürfel – sowie durch Schmierinfektion bei engem Kontakt. Auch sexuelle Kontakte können das Virus übertragen.',
          'Infizierte scheiden das Virus bereits ein bis zwei Wochen vor Auftreten der Beschwerden mit dem Stuhl aus und sind in dieser Zeit besonders ansteckend. Das erklärt, warum sich Hepatitis A auch bei guten persönlichen Hygienestandards verbreiten kann.',
        ],
        en: [
          'Transmission is faecal-oral: via contaminated drinking water and food – such as raw or undercooked seafood, unpeeled fruit and vegetables or ice cubes – and through smear infection during close contact. Sexual contact can also transmit the virus.',
          'Infected people excrete the virus in their stool as early as one to two weeks before symptoms appear and are particularly contagious during this time. This explains why hepatitis A can spread even where personal hygiene standards are good.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Hepatitis A kommt weltweit vor, besonders häufig jedoch in Regionen mit eingeschränkter Trinkwasser- und Sanitärversorgung: in weiten Teilen Afrikas und Asiens, in Mittel- und Südamerika sowie im Mittelmeerraum und in Osteuropa. Damit gehört sie zu den häufigsten impfpräventablen Reiseinfektionen.',
          'Das Risiko besteht nicht nur bei einfachen Reisebedingungen, sondern auch bei Aufenthalten in guten Unterkünften, da die Übertragung über Lebensmittel und Wasser erfolgt. Welche Reiseziele betroffen sind, können Sie auf unserer Seite zu den Risikogebieten und über die unten genannten Quellen einordnen.',
        ],
        en: [
          'Hepatitis A occurs worldwide, but is particularly common in regions with limited drinking-water and sanitation infrastructure: across large parts of Africa and Asia, in Central and South America, and in the Mediterranean region and Eastern Europe. This makes it one of the most common vaccine-preventable travel infections.',
          'The risk exists not only under simple travel conditions but also during stays in good accommodation, because transmission occurs via food and water. Which destinations are affected can be assessed on our risk-areas page and via the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Zwischen Ansteckung und Erkrankung liegen in der Regel 15 bis 50 Tage (im Mittel etwa vier Wochen). Typische Beschwerden sind Müdigkeit und Abgeschlagenheit, Übelkeit, Appetitlosigkeit und Druck im rechten Oberbauch, häufig gefolgt von einer Gelbfärbung von Haut und Augen (Ikterus) mit hellem Stuhl und dunklem Urin.',
          'Bei kleinen Kindern verläuft die Infektion oft unbemerkt; mit zunehmendem Alter werden Beschwerden und Gelbsucht häufiger und ausgeprägter. Hepatitis A wird – anders als Hepatitis B oder C – nicht chronisch und heilt in aller Regel folgenlos aus, auch wenn die vollständige Erholung mehrere Wochen bis Monate dauern kann. Schwere Verläufe bis zum Leberversagen sind selten und betreffen vor allem ältere Menschen und Personen mit vorbestehender Lebererkrankung.',
        ],
        en: [
          'Between infection and illness there are usually 15 to 50 days (on average about four weeks). Typical symptoms are tiredness and fatigue, nausea, loss of appetite and pressure in the upper right abdomen, often followed by a yellowing of the skin and eyes (jaundice) with pale stools and dark urine.',
          'In young children the infection often goes unnoticed; with increasing age symptoms and jaundice become more frequent and more pronounced. Unlike hepatitis B or C, hepatitis A does not become chronic and almost always heals without consequences, even though full recovery can take several weeks to months. Severe courses up to liver failure are rare and mainly affect older people and those with pre-existing liver disease.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Keine ursächliche Behandlung', en: 'No causal treatment' },
        text: {
          de: 'Gegen Hepatitis A gibt es keine spezifische antivirale Therapie – behandelt werden können nur die Beschwerden, etwa durch Schonung und ausreichende Flüssigkeitszufuhr. Die Leber sollte in dieser Zeit nicht zusätzlich belastet werden, insbesondere durch Alkohol und bestimmte Medikamente. Bei Verdacht auf Hepatitis A ärztlich abklären lassen.',
          en: 'There is no specific antiviral therapy for hepatitis A – only the symptoms can be treated, for example through rest and adequate fluid intake. The liver should not be subjected to additional strain during this time, in particular from alcohol and certain medicines. If hepatitis A is suspected, seek medical assessment.',
        },
      },
    },
    {
      id: 'schutz',
      heading: { de: 'Lebensmittel- und Trinkwasserhygiene', en: 'Food and water hygiene' },
      body: {
        de: [
          'Da das Virus über Wasser und Lebensmittel übertragen wird, senken einfache Hygieneregeln das Risiko: nur sicheres Trinkwasser verwenden, auf Eiswürfel verzichten, Speisen ausreichend erhitzen und Obst selbst schälen („cook it, boil it, peel it or forget it"). Sorgfältige Händehygiene unterstützt diesen Schutz.',
          'Diese Maßnahmen verringern das Risiko, bieten aber keinen vollständigen Schutz. Die zuverlässigste Vorbeugung für Reisende ist die Impfung.',
        ],
        en: [
          'Because the virus is transmitted via water and food, simple hygiene rules reduce the risk: use only safe drinking water, avoid ice cubes, heat food thoroughly and peel fruit yourself ("cook it, boil it, peel it or forget it"). Careful hand hygiene supports this protection.',
          'These measures reduce the risk but do not offer complete protection. The most reliable prevention for travellers is vaccination.',
        ],
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Zum Schutz vor Hepatitis A stehen gut verträgliche Totimpfstoffe mit inaktivierten Viren zur Verfügung. Sie können ab dem Alter von einem Jahr angewendet werden. Erhältlich sind reine Hepatitis-A-Impfstoffe sowie Kombinationsimpfstoffe gegen Hepatitis A und B oder gegen Hepatitis A und Typhus.',
          'Die vollständige Grundimmunisierung besteht aus zwei Dosen im Abstand von sechs bis zwölf Monaten und führt zu einem langjährigen Schutz; eine routinemäßige Auffrischung ist nach kompletter Grundimmunisierung in der Regel nicht erforderlich. Bereits die erste Dosis baut innerhalb weniger Tage bis Wochen einen belastbaren Schutz auf, sodass auch kurzfristig vor der Abreise sinnvoll geimpft werden kann.',
          'Die Ständige Impfkommission (STIKO) empfiehlt die Hepatitis-A-Impfung als Reiseimpfung bei Reisen in Regionen mit erhöhtem Vorkommen. Ob und in welcher Form (Einzel- oder Kombinationsimpfstoff) die Impfung für Sie sinnvoll ist, klären wir individuell im reisemedizinischen Beratungsgespräch.',
        ],
        en: [
          'Well-tolerated inactivated (killed-virus) vaccines are available to protect against hepatitis A. They can be used from the age of one year. Both single hepatitis A vaccines and combination vaccines against hepatitis A and B or against hepatitis A and typhoid are available.',
          'Full primary immunisation consists of two doses six to twelve months apart and provides many years of protection; a routine booster is generally not required after complete primary immunisation. Even the first dose builds reliable protection within a few days to weeks, so vaccination shortly before departure is also worthwhile.',
          'The German Standing Committee on Vaccination (STIKO) recommends hepatitis A vaccination as a travel vaccination for trips to regions with increased occurrence. Whether and in what form (single or combination vaccine) vaccination is sensible for you is something we clarify individually in the travel-medicine consultation.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Auch kurzfristig sinnvoll', en: 'Worthwhile even at short notice' },
        text: {
          de: 'Schon die erste Impfdosis bietet für die anstehende Reise einen guten Schutz. Für den langfristigen Schutz wird die zweite Dosis nach sechs bis zwölf Monaten ergänzt – diese können Sie auch nach der Rückkehr nachholen.',
          en: 'Even the first dose offers good protection for the upcoming trip. For long-term protection, the second dose is added after six to twelve months – this can also be caught up after your return.',
        },
      },
    },
  ],
  sourceIds: ['rkiHepatitisA', 'whoHepatitisA', 'peiHepatitisA', 'stikoImpfempfehlungen', 'auswaertigesAmt'],
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
      label: { de: 'Hepatitis B', en: 'Hepatitis B' },
      path: '/krankheitsbilder/hepatitis-b',
    },
    {
      label: { de: 'Risikogebiete', en: 'Risk areas' },
      path: '/risikogebiete',
    },
  ],
};
