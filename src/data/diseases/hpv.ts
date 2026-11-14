/**
 * ENTWURF vom 12.11.2026: vor Veröffentlichung ärztlich gegenlesen.
 *
 * Krankheitsbild HPV (Humane Papillomviren) — fachlicher Inhalt (DE/EN), belegt
 * über das Quellen-Register (vor allem RKI-Ratgeber, Stand 24.09.2026). Sachlich,
 * ohne Heilversprechen (HWG-konform), ohne Präparate- und Herstellernamen.
 * Fallzahlen stammen aus dem RKI-Ratgeber und den RKI-FAQ; bei Aktualisierung dort prüfen.
 */
import type { ClinicalPage } from '../types';

export const hpvDisease: ClinicalPage = {
  meta: {
    title: { de: 'HPV – Humane Papillomviren', en: 'HPV – human papillomaviruses' },
    description: {
      de: 'HPV (Humane Papillomviren) – Erreger, Übertragung, Häufigkeit, mögliche Folgen wie Krebsvorstufen, Krebs und Genitalwarzen, Früherkennung und Impfung. Mit Quellen belegt.',
      en: 'HPV (human papillomaviruses) – pathogen, transmission, frequency, possible consequences such as precancerous lesions, cancer and genital warts, screening and vaccination.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Humane Papillomviren (HPV) gehören zu den häufigsten sexuell übertragenen Erregern. Die meisten Infektionen bleiben unbemerkt und sind nach ein bis zwei Jahren nicht mehr nachweisbar. Einige bleiben bestehen und können nach Jahren zu Krebsvorstufen, Krebs oder Genitalwarzen führen – bei Frauen wie bei Männern.',
      en: 'Human papillomaviruses (HPV) are among the most common sexually transmitted pathogens. Most infections go unnoticed and are no longer detectable after one to two years. Some persist and can, after years, lead to precancerous lesions, cancer or genital warts – in women and men alike.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Humane Papillomviren sind unbehüllte DNA-Viren. Bisher sind über 230 verschiedene Typen bekannt; etwas mehr als 40 davon kommen im Genital- und Analbereich vor.',
          'Unterschieden werden Hochrisiko-Typen, die Krebsvorstufen und Krebs verursachen können – am häufigsten nachgewiesen wird Typ 16, gefolgt von Typ 18 –, und Niedrigrisiko-Typen. Unter diesen sind die Typen 6 und 11 für etwa 90 % der Genitalwarzen (Feigwarzen) verantwortlich.',
        ],
        en: [
          'Human papillomaviruses are non-enveloped DNA viruses. More than 230 different types are known so far; a little over 40 of them occur in the genital and anal area.',
          'A distinction is made between high-risk types, which can cause precancerous lesions and cancer – type 16 is detected most often, followed by type 18 – and low-risk types. Among the latter, types 6 and 11 are responsible for about 90% of genital warts.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'HPV wird durch direkten Kontakt von Mensch zu Mensch übertragen, vor allem durch engen Haut- und Schleimhautkontakt bei sexuellen Kontakten. Die Viren dringen über kleinste Verletzungen der Haut oder Schleimhaut ein.',
          'Kondome können das Risiko einer Ansteckung verringern, aber nicht sicher verhindern, weil die Viren auch über Haut- und Schleimhautbereiche übertragen werden, die ein Kondom nicht bedeckt. Selten wird HPV bei der Geburt von der Mutter auf das Kind übertragen.',
        ],
        en: [
          'HPV is transmitted through direct person-to-person contact, mainly through close skin and mucosal contact during sexual activity. The viruses enter through tiny injuries of the skin or mucous membrane.',
          'Condoms can reduce the risk of infection but cannot reliably prevent it, because the viruses are also transmitted via areas of skin and mucous membrane that a condom does not cover. Rarely, HPV is passed from mother to child during birth.',
        ],
      },
    },
    {
      id: 'haeufigkeit',
      heading: { de: 'Häufigkeit', en: 'How common is HPV?' },
      body: {
        de: [
          'HPV-Infektionen betreffen alle Geschlechter. Schätzungen zufolge infizieren sich über 80 % der sexuell aktiven Menschen mindestens einmal im Leben mit HPV, häufig schon in den ersten Jahren nach Beginn sexueller Kontakte.',
          'In Deutschland erkranken nach Angaben des Robert Koch-Instituts (RKI) jährlich etwa 10.000 Menschen an Krebs, der durch HPV bedingt ist, davon etwa 7.000 Frauen und 3.000 Männer. Am häufigsten ist Gebärmutterhalskrebs mit etwa 4.300 Erkrankungen pro Jahr. Bei Männern entsteht HPV-bedingter Krebs vor allem im Mund-Rachen-Raum, am After und am Penis.',
        ],
        en: [
          'HPV infections affect all genders. According to estimates, more than 80% of sexually active people become infected with HPV at least once in their lives, often in the first years after becoming sexually active.',
          'In Germany, according to the Robert Koch Institute (RKI), about 10,000 people develop HPV-related cancer each year, about 7,000 of them women and 3,000 men. The most common is cervical cancer with about 4,300 cases per year. In men, HPV-related cancer occurs mainly in the mouth and throat, at the anus and on the penis.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Verlauf & mögliche Folgen', en: 'Course & possible consequences' },
      body: {
        de: [
          'Die meisten HPV-Infektionen verlaufen ohne Beschwerden und sind nach ein bis zwei Jahren nicht mehr nachweisbar. Eine durchgemachte Infektion hinterlässt häufig keinen verlässlichen Immunschutz; eine weitere Ansteckung ist möglich.',
          'Bleibt eine Infektion mit einem Hochrisiko-Typ über Jahre bestehen, können sich Zellveränderungen und Krebsvorstufen entwickeln und daraus – am Gebärmutterhals meist erst nach zehn bis über dreißig Jahren – Krebs. Betroffen sein können Gebärmutterhals, Vagina, Vulva, Penis, After und der Mund-Rachen-Raum. Gebärmutterhalskrebs wird nahezu immer durch HPV verursacht.',
          'Niedrigrisiko-Typen können Genitalwarzen auslösen, meist etwa zwei bis drei Monate nach der Ansteckung. Sie sind gutartig, werden aber oft als sehr belastend empfunden. Genitalwarzen treten bei etwa 1 bis 2 % der sexuell aktiven Erwachsenen zwischen 15 und 49 Jahren auf.',
        ],
        en: [
          'Most HPV infections cause no symptoms and are no longer detectable after one to two years. A past infection often does not leave reliable immunity; a further infection is possible.',
          'If an infection with a high-risk type persists for years, cell changes and precancerous lesions can develop and from these – at the cervix usually only after ten to more than thirty years – cancer. The cervix, vagina, vulva, penis, anus and the mouth and throat can be affected. Cervical cancer is almost always caused by HPV.',
          'Low-risk types can cause genital warts, usually about two to three months after infection. They are benign but are often experienced as very distressing. Genital warts occur in about 1 to 2% of sexually active adults between 15 and 49 years of age.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Keine ursächliche Behandlung', en: 'No causal treatment' },
        text: {
          de: 'Gegen die HPV-Infektion selbst gibt es keine spezifische antivirale Therapie. Behandelt werden die Folgen, etwa Genitalwarzen, Zellveränderungen oder Krebs. Sichtbare Veränderungen im Genital-, After- oder Mundbereich sollten Sie ärztlich abklären lassen.',
          en: 'There is no specific antiviral therapy for the HPV infection itself. What is treated are the consequences, such as genital warts, cell changes or cancer. Visible changes in the genital, anal or oral area should be assessed by a doctor.',
        },
      },
    },
    {
      id: 'frueherkennung',
      heading: { de: 'Früherkennung', en: 'Screening' },
      body: {
        de: [
          'Für Gebärmutterhalskrebs gibt es in Deutschland ein organisiertes Früherkennungsprogramm: Frauen von 20 bis 34 Jahren haben Anspruch auf eine jährliche Zelluntersuchung (Abstrich), ab 35 Jahren alle drei Jahre auf eine kombinierte Untersuchung aus Abstrich und HPV-Test. Auch geimpfte Frauen sollten daran teilnehmen.',
          'Für die anderen durch HPV bedingten Krebsarten gibt es kein organisiertes Früherkennungsprogramm.',
        ],
        en: [
          'For cervical cancer there is an organised screening programme in Germany: women aged 20 to 34 are entitled to an annual cytological examination (smear test), and from age 35 to a combined smear and HPV test every three years. Vaccinated women should take part as well.',
          'For the other HPV-related cancers there is no organised screening programme.',
        ],
      },
    },
    {
      id: 'vorbeugung',
      heading: { de: 'Vorbeugung & Impfung', en: 'Prevention & vaccination' },
      body: {
        de: [
          'Die wichtigste vorbeugende Maßnahme ist die HPV-Impfung. Die Ständige Impfkommission (STIKO) empfiehlt sie für alle Kinder von 9 bis 14 Jahren; versäumte Impfungen sollen bis zum 18. Geburtstag nachgeholt werden. Am wirksamsten ist die Impfung, wenn noch kein Kontakt mit HPV stattgefunden hat.',
          'Für Erwachsene ab 18 Jahren gibt es keine allgemeine STIKO-Empfehlung. Mit dem Alter bei der ersten Impfung nimmt die Schutzwirkung ab; im Einzelfall können nach Einschätzung des RKI aber auch Erwachsene je nach individueller Lebensführung profitieren. Das ist eine individuelle Entscheidung nach ärztlicher Beratung. Zugelassen sind die Impfstoffe ab neun Jahren ohne Altersobergrenze.',
          'Gegen bereits bestehende HPV-Infektionen oder Zellveränderungen wirkt die Impfung nicht.',
        ],
        en: [
          'The most important preventive measure is HPV vaccination. The German Standing Committee on Vaccination (STIKO) recommends it for all children aged 9 to 14; missed vaccinations should be caught up by the 18th birthday. The vaccination is most effective when there has been no previous contact with HPV.',
          'For adults aged 18 and over there is no general STIKO recommendation. Protection decreases with age at first vaccination; according to the RKI, however, adults can also benefit in individual cases, depending on their personal circumstances. This is an individual decision following medical advice. The vaccines are authorised from the age of nine without an upper age limit.',
          'The vaccination has no effect on existing HPV infections or cell changes.',
        ],
      },
    },
  ],
  sourceIds: ['rkiHpvRatgeber', 'rkiHpvFaq', 'rkiHpvFaktenblatt', 'peiHpv'],
  // Datum des Entwurfs. Die Seite zeigt es als „Inhaltlich geprüft“ an – erst nach dem
  // ärztlichen Gegenlesen auf das tatsächliche Prüfdatum setzen.
  lastReviewed: new Date('2026-11-14'),
  related: [
    {
      label: { de: 'Zur HPV-Impfung für Erwachsene', en: 'About HPV vaccination for adults' },
      path: '/leistungen/hpv-impfung-erwachsene',
    },
  ],
};
