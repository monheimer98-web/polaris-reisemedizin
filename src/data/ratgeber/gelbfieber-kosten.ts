/**
 * Ratgeber „Was kostet die Gelbfieberimpfung?" (DE/EN), Slug-Vorschlag
 * `gelbfieberimpfung-kosten`. Fachlich nach STIKO/DTG (Epid Bull 27/2026,
 * Kap. 5.5 und Tabelle 2), IGV-Anlage 7 und § 7 IGV-DG; Stand 28.10.2026.
 * Preise sind dieselben Richtwerte wie in `kosten.ts` (eine Quelle der Wahrheit,
 * Link auf /kosten). Bewusst ohne Präparatenamen (HWG), ohne Heilversprechen.
 */
import type { ClinicalPage, Localized } from '../types';
import type { Source } from '../sources';

/** Neue Quellen dieses Ratgebers – zum Einpflegen in `sources.ts`. */
export const gelbfieberKostenQuellen = {
  igvDgGelbfieberImpfstellen: {
    publisher: 'Bundesministerium der Justiz',
    title: {
      de: '§ 7 IGV-Durchführungsgesetz (IGV-DG) – Spezielle Gelbfieber-Impfstellen',
      en: 'Section 7 IHR Implementation Act (IGV-DG) – designated yellow fever vaccination centres',
    },
    url: 'https://www.gesetze-im-internet.de/igv-dg/__7.html',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Gelbfieberimpfungen nur in Impfstellen, die von der zuständigen Behörde zugelassen sind; Ausstellung der internationalen Impfbescheinigung nach IGV.',
      en: 'Yellow fever vaccinations only at centres authorised by the competent authority; issuing of the international certificate under the IHR.',
    },
  },
  whoIhr2005: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Internationale Gesundheitsvorschriften (2005), 3. Auflage',
      en: 'International Health Regulations (2005), third edition',
    },
    url: 'https://www.who.int/publications/i/item/9789241580496',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Anlage 7: Die Gelbfieber-Impfbescheinigung gilt ab dem 10. Tag nach der Impfung und lebenslang (Änderung in Kraft seit 11.07.2016).',
      en: 'Annex 7: the yellow fever certificate is valid from day 10 after vaccination and for the life of the person vaccinated (amendment in force since 11 July 2016).',
    },
  },
} satisfies Record<string, Source>;

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const gelbfieberKostenSummary: Localized = {
  de: 'Was die Gelbfieberimpfung kostet, wann sie Pflicht ist, wie lange sie gilt und ob die Krankenkasse zahlt.',
  en: 'What the yellow fever vaccination costs, when it is required, how long it is valid and whether insurers pay.',
};

export const gelbfieberKostenGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Was kostet die Gelbfieberimpfung?',
      en: 'How much does the yellow fever vaccination cost?',
    },
    description: {
      de: 'Gelbfieberimpfung in Langenfeld: rund 110 € inkl. Impfstoff und internationalem Impfnachweis. Gültigkeit, Pflichtländer, 10-Tage-Frist und Erstattung erklärt.',
      en: 'Yellow fever vaccination in Langenfeld: around €110 including vaccine and international certificate. Validity, entry requirements, the 10-day rule and reimbursement.',
    },
    eyebrow: { de: 'Ratgeber', en: 'Guide' },
    lead: {
      de: 'In unserer Gelbfieber-Impfstelle in Langenfeld kostet die Impfung insgesamt rund 110 €: ca. 38 € ärztliches Honorar und der Impfstoff, den wir wie in der GOÄ vorgesehen zum Einkaufspreis berechnen (derzeit ca. 73 €). Hier erfahren Sie außerdem, wann die Impfung Pflicht ist, wie lange sie gilt und wer sie bezahlt.',
      en: 'At our yellow fever vaccination centre in Langenfeld, the vaccination costs around €110 in total: approx. €38 medical fee plus the vaccine, which – as provided for in the GOÄ – we charge at cost (currently approx. €73). Here you can also read when the vaccination is required, how long it is valid and who pays for it.',
    },
  },
  sections: [
    {
      id: 'kosten',
      heading: { de: 'Was die Gelbfieberimpfung kostet', en: 'What the yellow fever vaccination costs' },
      body: {
        de: ['Die Kosten setzen sich aus zwei Teilen zusammen:'],
        en: ['The cost is made up of two parts:'],
      },
      list: {
        de: [
          'Ärztliches Honorar: ca. 38 €. Darin enthalten sind Aufklärung, eine kurze Impf-Untersuchung, die Impfung und der internationale Impfnachweis (ICVP).',
          'Impfstoff: Den Gelbfieber-Impfstoff halten wir vorrätig und berechnen ihn wie in der GOÄ vorgesehen zum Einkaufspreis – derzeit ca. 73 €.',
          'Insgesamt: rund 110 €. Sie zahlen in der Praxis per Karte und erhalten eine aufgeschlüsselte Rechnung nach GOÄ zum Einreichen.',
        ],
        en: [
          'Medical fee: approx. €38. This covers the briefing, a brief pre-vaccination check, the vaccination and the international certificate of vaccination (ICVP).',
          'Vaccine: we keep the yellow fever vaccine in stock and, as provided for in the GOÄ, charge it at cost – currently approx. €73.',
          'In total: around €110. You pay by card at the practice and receive an itemised GOÄ invoice that you can submit.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Unverbindliche Richtwerte', en: 'Non-binding guide prices' },
        text: {
          de: 'Alle Beträge sind Richtwerte nach der Gebührenordnung für Ärzte (GOÄ); der Impfstoffpreis folgt dem jeweiligen Einkaufspreis. Termine am Wochenende, eine zusätzliche Reiseberatung oder weitere Impfungen kommen hinzu – die aktuellen Richtwerte stehen auf unserer Kostenseite. Die voraussichtlichen Kosten teilen wir Ihnen vor der Impfung schriftlich mit.',
          en: 'All amounts are guide prices under the German medical fee schedule (GOÄ); the vaccine price follows the current purchase price. Weekend appointments, an additional travel consultation or further vaccinations are charged on top – current guide prices are on our fees page. We give you the expected costs in writing before the vaccination.',
        },
      },
      links: [
        { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
        { label: { de: 'Termin buchen', en: 'Book an appointment' }, path: '/termin' },
      ],
    },
    {
      id: 'impfstelle',
      heading: { de: 'Nur in zugelassenen Gelbfieber-Impfstellen', en: 'Only at authorised yellow fever centres' },
      body: {
        de: [
          'Gegen Gelbfieber darf in Deutschland nur eine Impfstelle impfen, die von der zuständigen Gesundheitsbehörde dafür zugelassen ist (§ 7 IGV-Durchführungsgesetz). Voraussetzung sind eine besondere fachliche Qualifikation der impfenden Ärztin oder des impfenden Arztes und geeignete Räume für Lagerung und Impfung. Die Impfstelle stellt auch den internationalen Impfnachweis aus.',
          'Unsere Praxis in Langenfeld ist als Gelbfieber-Impfstelle zugelassen. Aufklärung, Impfung und Impfnachweis erhalten Sie in einem Termin.',
        ],
        en: [
          'In Germany, only vaccination centres authorised by the competent health authority may vaccinate against yellow fever (Section 7 of the IHR Implementation Act). This requires specific professional qualifications of the vaccinating doctor and suitable premises for storing the vaccine and giving the vaccination. The centre also issues the international certificate.',
          'Our practice in Langenfeld is an authorised yellow fever vaccination centre. You receive the briefing, vaccination and certificate in one appointment.',
        ],
      },
      links: [{ label: { de: 'Gelbfieberimpfung in unserer Praxis', en: 'Yellow fever vaccination at our practice' }, path: '/leistungen/gelbfieberimpfung' }],
    },
    {
      id: 'pflicht-empfehlung',
      heading: { de: 'Wann ist die Impfung Pflicht, wann empfohlen?', en: 'When is the vaccination required, when recommended?' },
      body: {
        de: [
          'Bei Gelbfieber gibt es zwei verschiedene Gründe für eine Impfung: die Einreisebestimmungen eines Landes und das tatsächliche Ansteckungsrisiko. Beides fällt nicht immer zusammen.',
        ],
        en: [
          'There are two different reasons for a yellow fever vaccination: a country’s entry requirements and the actual risk of infection. The two do not always coincide.',
        ],
      },
      list: {
        de: [
          'Pflicht für alle Reisenden: Einige Länder verlangen bei der Einreise von allen Reisenden einen gültigen Gelbfieber-Impfnachweis. Säuglinge unter 9 Monaten sind in der Regel ausgenommen.',
          'Pflicht je nach Reiseweg: Andere Länder verlangen den Nachweis nur, wenn Sie aus einem Gelbfieber-Land einreisen oder dort mehr als 12 Stunden am Flughafen umgestiegen sind. Das betrifft auch Länder ohne eigenes Gelbfieber-Risiko, etwa in Asien.',
          'Medizinisch empfohlen: Die STIKO empfiehlt die Impfung allen Reisenden ab 9 Monaten, die in Gelbfieber-Endemiegebiete reisen – im tropischen Afrika, in Südamerika und in südlichen Teilen Mittelamerikas. Das gilt auch, wenn das Zielland keinen Nachweis verlangt.',
        ],
        en: [
          'Required for all travellers: some countries require a valid yellow fever certificate from every traveller on entry. Infants under 9 months are usually exempt.',
          'Required depending on your route: other countries only require the certificate if you arrive from a yellow fever country or have spent more than 12 hours in transit at an airport there. This includes countries without their own yellow fever risk, for example in Asia.',
          'Medically recommended: STIKO recommends the vaccination for all travellers aged 9 months and over who travel to areas where yellow fever is endemic – in tropical Africa, South America and southern parts of Central America. This applies even if the destination does not require a certificate.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Ganze Route prüfen', en: 'Check your entire route' },
        text: {
          de: 'Maßgeblich sind die aktuellen Einreisebestimmungen aller Länder auf Ihrer Route, einschließlich längerer Umstiege. Die WHO veröffentlicht dazu eine Länderliste, das Auswärtige Amt gibt länderspezifische Hinweise. In der Beratung gehen wir Ihre Route gemeinsam durch.',
          en: 'What counts are the current entry requirements of every country on your route, including longer layovers. The WHO publishes a country list for this, and the German Federal Foreign Office provides country-specific advice. In the consultation we go through your route together.',
        },
      },
      links: [
        { label: { de: 'Risikogebiete & Pflichtländer', en: 'Risk areas & entry requirements' }, path: '/risikogebiete' },
        { label: { de: 'Krankheitsbild Gelbfieber', en: 'Yellow fever – the disease' }, path: '/krankheitsbilder/gelbfieber' },
      ],
    },
    {
      id: 'zehn-tage',
      heading: { de: 'Mindestens 10 Tage vor der Einreise impfen', en: 'Get vaccinated at least 10 days before entry' },
      body: {
        de: [
          'Der internationale Impfnachweis gilt ab dem 10. Tag nach der ersten Gelbfieberimpfung; bis dahin baut sich auch der Impfschutz auf. Lassen Sie sich deshalb spätestens zehn Tage vor der Einreise in ein Gelbfiebergebiet oder ein Land mit Nachweispflicht impfen – besser früher, damit mögliche Impfreaktionen vor dem Abflug abgeklungen sind.',
          'Andere Lebendimpfungen, etwa gegen Masern, sind am selben Tag möglich; die Impfantwort kann dabei etwas schwächer ausfallen. Sonst ist ein Abstand von mindestens vier Wochen einzuhalten – das sollten Sie bei der Planung berücksichtigen.',
        ],
        en: [
          'The international certificate is valid from day 10 after the first yellow fever vaccination; protection also builds up during this time. So get vaccinated no later than ten days before entering a yellow fever area or a country that requires the certificate – preferably earlier, so that any vaccine reactions have settled before you fly.',
          'Other live vaccines, such as measles, can be given on the same day, although the immune response may be slightly weaker. Otherwise an interval of at least four weeks is needed – worth bearing in mind when planning.',
        ],
      },
      links: [{ label: { de: 'Wann vor der Reise impfen?', en: 'When to get vaccinated before travel?' }, path: '/ratgeber/wann-vor-der-reise-impfen' }],
    },
    {
      id: 'gueltigkeit',
      heading: { de: 'Wie lange gilt die Gelbfieberimpfung?', en: 'How long is the yellow fever vaccination valid?' },
      body: {
        de: [
          'Nach den Internationalen Gesundheitsvorschriften (IGV) der WHO gilt der Impfnachweis seit dem 11. Juli 2016 lebenslang. Das betrifft auch ältere Nachweise, auf denen noch eine Gültigkeit von zehn Jahren eingetragen ist. An der Grenze genügt eine Impfung, die mindestens zehn Tage zurückliegt.',
          'Medizinisch ist ein lebenslanger Schutz nach nur einer Dosis aber nicht bei allen Menschen gesichert. Die STIKO empfiehlt deshalb vor einer erneuten oder bei fortgesetzter Reise in ein Gelbfiebergebiet einmalig eine zweite Dosis, wenn die erste Impfung zehn Jahre oder länger zurückliegt. Nach zwei Dosen sind keine weiteren Impfungen nötig. Besondere Regeln gelten für:',
        ],
        en: [
          'Under the WHO International Health Regulations (IHR), the certificate has been valid for life since 11 July 2016. This also applies to older certificates that still state a validity of ten years. At the border, a single vaccination given at least ten days earlier is sufficient.',
          'Medically, however, lifelong protection after a single dose is not certain for everyone. STIKO therefore recommends a single second dose before renewed or continued travel to a yellow fever area if the first vaccination was ten or more years ago. After two doses no further vaccinations are needed. Special rules apply to:',
        ],
      },
      list: {
        de: [
          'Erstimpfung vor dem 2. Geburtstag: zweite Dosis vor einer erneuten Reise, wenn die erste mindestens fünf Jahre zurückliegt. Wer als Kind nur eine Dosis erhalten hat, sollte vor einer Reise im Erwachsenenalter eine zweite bekommen.',
          'Erstimpfung in der Schwangerschaft: zweite Dosis vor der nächsten Reise, unabhängig vom zeitlichen Abstand (mindestens vier Wochen).',
          'Erstimpfung bei geschwächtem Immunsystem: zweite Dosis vor der nächsten Reise, unabhängig vom Abstand, sofern keine Gegenanzeige besteht. Über weitere Dosen wird individuell entschieden.',
        ],
        en: [
          'First vaccination before the age of two: a second dose before travelling again if the first was at least five years ago. Anyone who received only one dose as a child should have a second before travelling as an adult.',
          'First vaccination during pregnancy: a second dose before the next trip, regardless of the interval (at least four weeks).',
          'First vaccination with a weakened immune system: a second dose before the next trip, regardless of the interval, provided there is no contraindication. Further doses are decided individually.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Impfpass mitbringen', en: 'Bring your vaccination record' },
        text: {
          de: 'Ob Sie eine zweite Dosis brauchen, prüfen wir anhand Ihres Impfausweises. Für die zweite Dosis gelten dieselben Richtwerte wie für die erste Impfung.',
          en: 'We check from your vaccination record whether you need a second dose. The same guide prices apply to the second dose as to the first vaccination.',
        },
      },
    },
    {
      id: 'gegenanzeigen',
      heading: { de: 'Wer nicht oder nur nach Abwägung geimpft wird', en: 'Who should not be vaccinated, or only after careful assessment' },
      body: {
        de: [
          'Der Gelbfieber-Impfstoff ist ein Lebendimpfstoff und ab 9 Monaten zugelassen. Sehr selten kann es zu schweren Nebenwirkungen kommen, die das Nervensystem oder innere Organe betreffen; das Risiko besteht fast nur bei der ersten Impfung und ist ab 60 Jahren erhöht. Nicht oder nur nach sorgfältiger Abwägung geimpft werden unter anderem:',
        ],
        en: [
          'The yellow fever vaccine is a live vaccine approved from 9 months of age. Very rarely, serious side effects affecting the nervous system or internal organs can occur; the risk arises almost only with the first vaccination and is higher from age 60. Among others, the following people should not be vaccinated, or only after careful assessment:',
        ],
      },
      list: {
        de: [
          'Menschen mit geschwächtem Immunsystem durch eine Erkrankung oder Medikamente, etwa hochdosiertes Kortison oder bestimmte Rheuma- und Krebsmedikamente. Bei einer HIV-Infektion hängt es von den Blutwerten ab.',
          'Menschen mit einer Erkrankung der Thymusdrüse oder nach ihrer Entfernung.',
          'Menschen mit schwerer Allergie gegen Hühnereiweiß oder andere Bestandteile des Impfstoffs.',
          'Säuglinge unter 6 Monaten (nicht erlaubt); von 6 bis 9 Monaten nur in Ausnahmefällen.',
          'Schwangere nur bei unvermeidbarem Risiko nach sorgfältiger Abwägung. Stillende nicht, solange das Kind jünger als 6 Monate ist; danach nur in Ausnahmefällen.',
          'Menschen ab 60 Jahren nur bei einem deutlichen, nicht vermeidbaren Infektionsrisiko. Die Entscheidung treffen wir gemeinsam mit Blick auf Reiseroute, Vorerkrankungen und Medikamente.',
          'Menschen, bei deren Eltern, Geschwistern oder Kindern schwere Nebenwirkungen nach einer Gelbfieberimpfung aufgetreten sind.',
        ],
        en: [
          'People with a weakened immune system due to illness or medication, such as high-dose corticosteroids or certain rheumatism and cancer medicines. With HIV infection, it depends on the blood values.',
          'People with a disorder of the thymus gland or after its removal.',
          'People with a severe allergy to egg protein or other components of the vaccine.',
          'Infants under 6 months (not permitted); from 6 to 9 months only in exceptional cases.',
          'Pregnant women only where the risk is unavoidable and after careful assessment. Breastfeeding mothers not while the child is under 6 months; after that only in exceptional cases.',
          'People aged 60 and over only where there is a significant, unavoidable risk of infection. We make the decision together, taking into account your route, pre-existing conditions and medication.',
          'People whose parents, siblings or children have had serious side effects after a yellow fever vaccination.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Wenn eine Impfung nicht möglich ist', en: 'If vaccination is not possible' },
        text: {
          de: 'Ist eine Impfung aus medizinischen Gründen nicht möglich, kann eine Gelbfieber-Impfstelle eine Impfbefreiung (exemption certificate) ausstellen. Länder mit Nachweispflicht müssen sie aber nicht anerkennen. Besteht ein echtes Infektionsrisiko und eine klare Gegenanzeige, rät die STIKO von der Reise ab. Steht eine Behandlung an, die das Immunsystem schwächt, sollte die Impfung spätestens vier Wochen vorher erfolgen – sprechen Sie uns frühzeitig an.',
          en: 'If vaccination is not possible for medical reasons, a yellow fever centre can issue an exemption certificate. However, countries that require the certificate are not obliged to accept it. If there is a real risk of infection and a clear contraindication, STIKO advises against the trip. If you are due to start treatment that weakens the immune system, the vaccination should be given no later than four weeks beforehand – please talk to us early.',
        },
      },
    },
    {
      id: 'erstattung',
      heading: { de: 'Zahlt die Krankenkasse?', en: 'Does health insurance pay?' },
      body: {
        de: [
          'Für private Reisen ist die Gelbfieberimpfung keine Pflichtleistung der gesetzlichen Krankenkassen (§ 20i SGB V). Viele Kassen übernehmen Reiseimpfungen aber freiwillig als Satzungsleistung – oft nur den Impfstoff oder einen festen Betrag, manchmal auch das Honorar. Manche erstatten nur Impfungen aus Kassenpraxen. Fragen Sie deshalb vor der Impfung nach, was Ihre Kasse bei einer Privatrechnung erstattet.',
          'Private Krankenversicherungen und Beihilfe erstatten je nach Tarif bzw. Dienstherr. Bei Dienstreisen trägt in der Regel der Arbeitgeber die Kosten. Für alle Fälle erhalten Sie von uns eine aufgeschlüsselte Rechnung nach GOÄ.',
        ],
        en: [
          'For private trips, the yellow fever vaccination is not a mandatory benefit of statutory health insurance (Section 20i SGB V). Many insurers do, however, cover travel vaccinations voluntarily under their statutes – often only the vaccine or a fixed amount, sometimes the fee as well. Some only reimburse vaccinations given in statutory-insurance practices. So check before the vaccination what your insurer reimburses for a private invoice.',
          'Private health insurance and the civil-service allowance (Beihilfe) reimburse depending on your plan or employer. For business travel, the employer usually bears the costs. In every case you receive an itemised GOÄ invoice from us.',
        ],
      },
      links: [{ label: { de: 'Reiseimpfung: Kosten & Erstattung', en: 'Travel vaccination: costs & reimbursement' }, path: '/ratgeber/reiseimpfung-kosten-krankenkasse' }],
    },
  ],
  faq: [
    {
      q: { de: 'Was kostet die Gelbfieberimpfung in Langenfeld?', en: 'How much does the yellow fever vaccination cost in Langenfeld?' },
      a: {
        de: 'Bei uns rund 110 €: ca. 38 € ärztliches Honorar für Aufklärung, kurze Impf-Untersuchung, Impfung und internationalen Impfnachweis sowie der Impfstoff, den wir wie in der GOÄ vorgesehen zum Einkaufspreis berechnen – derzeit ca. 73 €. Die aktuellen Richtwerte finden Sie auf unserer Kostenseite.',
        en: 'With us, around €110: approx. €38 medical fee for the briefing, a brief pre-vaccination check, the vaccination and the international certificate, plus the vaccine, which – as provided for in the GOÄ – we charge at cost, currently approx. €73. Current guide prices are on our fees page.',
      },
    },
    {
      q: { de: 'Wie lange ist die Gelbfieberimpfung gültig?', en: 'How long is the yellow fever vaccination valid?' },
      a: {
        de: 'Der internationale Impfnachweis gilt nach den Internationalen Gesundheitsvorschriften der WHO lebenslang – auch ältere Nachweise mit eingetragener Zehn-Jahres-Frist. Medizinisch empfiehlt die STIKO vor einer erneuten Reise in ein Gelbfiebergebiet einmalig eine zweite Dosis, wenn die erste Impfung zehn Jahre oder länger zurückliegt; für Kleinkinder, Schwangere und Menschen mit geschwächtem Immunsystem gelten besondere Regeln.',
        en: 'Under the WHO International Health Regulations, the international certificate is valid for life – including older certificates that state a ten-year period. Medically, STIKO recommends a single second dose before travelling to a yellow fever area again if the first vaccination was ten or more years ago; special rules apply to young children, pregnant women and people with a weakened immune system.',
      },
    },
    {
      q: { de: 'Wie viele Tage vor der Reise muss ich mich impfen lassen?', en: 'How many days before the trip do I need to be vaccinated?' },
      a: {
        de: 'Mindestens zehn Tage vor der Einreise, denn der Impfnachweis gilt erst ab dem 10. Tag nach der ersten Impfung. Besser ist mehr Vorlauf, damit mögliche Impfreaktionen vor dem Abflug abgeklungen sind und andere Impfungen gut eingeplant werden können.',
        en: 'At least ten days before entry, because the certificate only becomes valid from day 10 after the first vaccination. More lead time is better, so that any vaccine reactions have settled before you fly and other vaccinations can be scheduled.',
      },
    },
    {
      q: { de: 'Übernimmt die Krankenkasse die Kosten?', en: 'Will my health insurer cover the costs?' },
      a: {
        de: 'Eine Pflichtleistung ist die Gelbfieberimpfung für private Reisen nicht. Viele gesetzliche Kassen erstatten Reiseimpfungen aber freiwillig, ganz oder teilweise; private Versicherungen je nach Tarif. Klären Sie das bitte vorab mit Ihrer Versicherung. Sie erhalten von uns eine Rechnung nach GOÄ zum Einreichen.',
        en: 'For private trips, the yellow fever vaccination is not a mandatory benefit. Many statutory insurers do reimburse travel vaccinations voluntarily, in full or in part; private insurers depending on the plan. Please check this with your insurer in advance. You receive a GOÄ invoice from us to submit.',
      },
    },
    {
      q: { de: 'Kann ich mich mit über 60 Jahren gegen Gelbfieber impfen lassen?', en: 'Can I be vaccinated against yellow fever if I am over 60?' },
      a: {
        de: 'Ja, wenn ein deutliches und nicht vermeidbares Infektionsrisiko besteht. Ab 60 Jahren treten sehr seltene schwere Nebenwirkungen bei der ersten Impfung häufiger auf; gleichzeitig verläuft Gelbfieber im Alter häufiger schwer. Deshalb wägen wir Reiseroute, Vorerkrankungen und Medikamente sorgfältig ab, bevor wir gemeinsam entscheiden.',
        en: 'Yes, if there is a significant and unavoidable risk of infection. From age 60, very rare serious side effects occur more often with the first vaccination; at the same time, yellow fever is more often severe in older people. So we carefully weigh up your route, pre-existing conditions and medication before deciding together.',
      },
    },
    {
      q: { de: 'Darf jede Arztpraxis gegen Gelbfieber impfen?', en: 'Can any medical practice vaccinate against yellow fever?' },
      a: {
        de: 'Nein. In Deutschland dürfen nur staatlich zugelassene Gelbfieber-Impfstellen gegen Gelbfieber impfen und den internationalen Impfnachweis ausstellen. Unsere Praxis in Langenfeld ist als Gelbfieber-Impfstelle zugelassen.',
        en: 'No. In Germany, only state-authorised yellow fever vaccination centres may vaccinate against yellow fever and issue the international certificate. Our practice in Langenfeld is an authorised yellow fever vaccination centre.',
      },
    },
  ],
  // Neue IDs sind erst nach dem Einpflegen von `gelbfieberKostenQuellen` in sources.ts gültig.
  sourceIds: [
    'stikoReise2026',
    'stikoReiseLaender2026',
    'whoYellowFeverCountries',
    'igvDgGelbfieberImpfstellen',
    'whoIhr2005',
    'peiGelbfieber',
    'rkiGelbfieber',
    'auswaertigesAmt',
    'goae',
    'sgb5Schutzimpfungen',
    'bgbKosteninformation',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
    { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
  ],
};
