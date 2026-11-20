/**
 * ENTWURF vom 12.11.2026: vor Veröffentlichung ärztlich gegenlesen.
 *
 * Leistung HPV-Impfung für Erwachsene — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform), ohne Präparate-
 * und Herstellernamen. Für Erwachsene ab 18 Jahren gibt es keine allgemeine
 * STIKO-Empfehlung; das steht bewusst deutlich im Text.
 * Der Abschnitt „Kosten“ nennt dieselben Richtwerte wie /kosten/ und /termin/
 * (dort mitpflegen): Honorar ca. 32 € je Impftermin, Impfstoff zum Apothekenpreis
 * (Stand 11/2026: 210,39 € je Dosis, Angabe der Praxis).
 */
import type { ClinicalPage } from '../types';

export const hpvImpfungErwachseneService: ClinicalPage = {
  meta: {
    title: { de: 'HPV-Impfung für Erwachsene', en: 'HPV vaccination for adults' },
    description: {
      de: 'HPV-Impfung für Erwachsene in Langenfeld, auch für Männer: STIKO-Empfehlung, Nutzen, Impfschema, Gegenanzeigen, Ablauf und Kosten.',
      en: 'HPV vaccination for adults in Langenfeld, including men: STIKO recommendation, benefit, schedule, contraindications, procedure and costs.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Die HPV-Impfung ist ab neun Jahren ohne Altersobergrenze zugelassen. Eine allgemeine Empfehlung der Ständigen Impfkommission (STIKO) gibt es nur bis zum 18. Geburtstag; danach ist die Impfung eine individuelle Entscheidung nach ärztlicher Beratung. Wir beraten Erwachsene, ausdrücklich auch Männer, und impfen, wenn Sie sich dafür entscheiden.',
      en: 'The HPV vaccination is authorised from the age of nine without an upper age limit. A general recommendation by the German Standing Committee on Vaccination (STIKO) only exists up to the 18th birthday; after that, vaccination is an individual decision following medical advice. We advise adults, expressly including men, and vaccinate if you decide in favour of it.',
    },
  },
  sections: [
    {
      id: 'impfstoff',
      heading: { de: 'Impfstoff', en: 'Vaccine' },
      body: {
        de: [
          'Wir impfen mit dem HPV-Impfstoff gegen neun Virustypen. Er ist ein Totimpfstoff: Er enthält virusähnliche Partikel, die nicht infektiös sind und sich nicht vermehren können.',
          'Der Impfstoff richtet sich gegen die HPV-Typen 16, 18, 31, 33, 45, 52 und 58, die Krebsvorstufen und Krebs verursachen können, sowie gegen die Typen 6 und 11, die für etwa 90 % der Genitalwarzen verantwortlich sind. Zugelassen ist er ab einem Alter von neun Jahren zur Vorbeugung von Krebsvorstufen und Krebs an Gebärmutterhals, Vulva, Vagina und After sowie von Genitalwarzen, soweit sie durch diese Typen verursacht werden. Eine Altersobergrenze nennt die Zulassung nicht.',
          'Die Impfung wirkt vorbeugend. Gegen eine bereits bestehende HPV-Infektion oder bestehende Zellveränderungen wirkt sie nicht.',
        ],
        en: [
          'We vaccinate with the HPV vaccine against nine virus types. It is an inactivated vaccine: it contains virus-like particles that are not infectious and cannot multiply.',
          'The vaccine is directed against HPV types 16, 18, 31, 33, 45, 52 and 58, which can cause precancerous lesions and cancer, and against types 6 and 11, which are responsible for about 90% of genital warts. It is authorised from the age of nine for the prevention of precancerous lesions and cancers of the cervix, vulva, vagina and anus as well as genital warts, where these are caused by the types named. The authorisation does not state an upper age limit.',
          'The vaccination is preventive. It has no effect on an existing HPV infection or on existing cell changes.',
        ],
      },
    },
    {
      id: 'eignung',
      heading: { de: 'Für wen kommt die Impfung infrage?', en: 'Who may consider the vaccination?' },
      body: {
        de: [
          'Die STIKO empfiehlt die HPV-Impfung für alle Kinder im Alter von 9 bis 14 Jahren; versäumte Impfungen sollen bis zum 18. Geburtstag nachgeholt werden. Für Erwachsene ab 18 Jahren gibt es keine allgemeine STIKO-Empfehlung.',
          'Der Grund: Die Impfung schützt am wirksamsten, wenn noch kein Kontakt mit HPV stattgefunden hat. Viele Menschen stecken sich bereits in den ersten Jahren nach Beginn sexueller Kontakte an. Je älter die Geimpften bei der ersten Impfung waren, desto geringer fiel in Studien der Schutz vor Krebsvorstufen und Krebs aus. Das Robert Koch-Institut (RKI) hält fest, dass bei einer Impfung erst im Erwachsenenalter bei den meisten Menschen nur noch eine deutlich geringere oder keine Schutzwirkung mehr erreicht werden kann.',
          'Dennoch können nach Einschätzung des RKI im Einzelfall auch Personen ab 18 Jahren je nach individueller Lebensführung von der Impfung profitieren. Das gilt für Frauen wie für Männer – auch Männer können sich mit HPV infizieren und an HPV-bedingtem Krebs oder an Genitalwarzen erkranken. Ob die Impfung für Sie sinnvoll sein kann, hängt vor allem davon ab, wie wahrscheinlich ein früherer Kontakt mit HPV ist und welcher Nutzen danach noch zu erwarten ist. Das besprechen wir mit Ihnen im ärztlichen Gespräch.',
        ],
        en: [
          'STIKO recommends HPV vaccination for all children aged 9 to 14; missed vaccinations should be caught up by the 18th birthday. For adults aged 18 and over there is no general STIKO recommendation.',
          'The reason: the vaccination protects most effectively when there has been no previous contact with HPV. Many people become infected in the first years after becoming sexually active. In studies, the older people were at their first vaccination, the lower the protection against precancerous lesions and cancer. The Robert Koch Institute (RKI) notes that when vaccination is only given in adulthood, most people can achieve only considerably lower protection or none at all.',
          'Nevertheless, according to the RKI, people aged 18 and over can benefit from the vaccination in individual cases, depending on their personal circumstances. This applies to women and men alike – men can also become infected with HPV and develop HPV-related cancer or genital warts. Whether the vaccination may be worthwhile for you depends above all on how likely previous contact with HPV is and what benefit can still be expected afterwards. We discuss this with you in a medical consultation.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Individuelle Entscheidung', en: 'An individual decision' },
        text: {
          de: 'Ab 18 Jahren ist die HPV-Impfung keine allgemein von der STIKO empfohlene Impfung, sondern eine individuelle Entscheidung nach ärztlicher Beratung. Einen bestimmten Schutz können wir nicht zusagen.',
          en: 'From the age of 18, HPV vaccination is not generally recommended by STIKO but an individual decision following medical advice. We cannot promise a particular level of protection.',
        },
      },
    },
    {
      id: 'schema',
      heading: { de: 'Impfschema für Erwachsene', en: 'Schedule for adults' },
      body: {
        de: [
          'Ab einem Alter von 15 Jahren sind drei Impfdosen vorgesehen. Laut Fachinformation folgt die zweite Dosis zwei Monate und die dritte Dosis sechs Monate nach der ersten (Schema 0, 2, 6 Monate).',
          'Die zweite Dosis soll frühestens einen Monat nach der ersten gegeben werden, die dritte frühestens drei Monate nach der zweiten. Alle drei Dosen sollten innerhalb eines Jahres gegeben werden. Wurde eine Impfserie unterbrochen, muss sie nach Angaben des RKI nicht von vorn begonnen werden; fehlende Dosen werden nachgeholt.',
          'Eine Auffrischimpfung wird nach derzeitigem Kenntnisstand nicht empfohlen.',
        ],
        en: [
          'From the age of 15, three doses are scheduled. According to the product information, the second dose follows two months and the third dose six months after the first (schedule 0, 2, 6 months).',
          'The second dose should be given no earlier than one month after the first, the third no earlier than three months after the second. All three doses should be given within one year. If a series has been interrupted, according to the RKI it does not have to be started again from the beginning; missing doses are caught up.',
          'Based on current knowledge, a booster dose is not recommended.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Früherkennung bleibt wichtig', en: 'Screening remains important' },
        text: {
          de: 'Die Impfung schützt nicht vor allen krebsauslösenden HPV-Typen und nicht vor bereits bestehenden Infektionen. Frauen sollten deshalb auch nach der Impfung regelmäßig an der Früherkennung von Gebärmutterhalskrebs teilnehmen.',
          en: 'The vaccination does not protect against all cancer-causing HPV types or against existing infections. Women should therefore continue to attend regular cervical cancer screening after vaccination.',
        },
      },
    },
    {
      id: 'gegenanzeigen',
      heading: { de: 'Gegenanzeigen & Vorsichtsmaßnahmen', en: 'Contraindications & precautions' },
      body: {
        de: ['Vor der Impfung prüfen wir, ob etwas gegen sie spricht. Zu beachten sind unter anderem:'],
        en: ['Before the vaccination we check whether there is any reason not to give it. Points to consider include, among others:'],
      },
      list: {
        de: [
          'eine bekannte Überempfindlichkeit gegen einen Bestandteil des Impfstoffs oder eine Überempfindlichkeitsreaktion nach einer früheren HPV-Impfung – dann wird nicht geimpft,',
          'eine akute, schwere, fieberhafte Erkrankung – hier wird die Impfung verschoben; ein leichter Infekt ist kein Hindernis,',
          'Schwangerschaft – die vorliegenden Daten reichen nicht aus, um die Impfung in der Schwangerschaft zu empfehlen; sie wird auf die Zeit nach der Schwangerschaft verschoben. In der Stillzeit kann geimpft werden,',
          'eine Störung der Blutgerinnung – hier ist bei der Injektion in den Muskel besondere Vorsicht geboten.',
        ],
        en: [
          'a known hypersensitivity to a component of the vaccine or a hypersensitivity reaction after a previous HPV vaccination – in this case the vaccine is not given,',
          'an acute, severe febrile illness – here the vaccination is postponed; a minor infection is not an obstacle,',
          'pregnancy – the available data are not sufficient to recommend vaccination during pregnancy; it is postponed until after the pregnancy. Vaccination is possible while breastfeeding,',
          'a blood-clotting disorder – here particular care is required with the injection into the muscle.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Individuelle Abklärung notwendig', en: 'Individual assessment required' },
        text: {
          de: 'Diese Aufzählung ersetzt kein ärztliches Gespräch. Bitte informieren Sie uns vor der Impfung über Vorerkrankungen, Medikamente, Allergien und eine mögliche Schwangerschaft, damit wir Eignung und mögliche Risiken sorgfältig prüfen können.',
          en: 'This list does not replace a medical consultation. Please inform us before the vaccination about pre-existing conditions, medications, allergies and a possible pregnancy, so that we can carefully assess suitability and potential risks.',
        },
      },
    },
    {
      id: 'impfreaktionen',
      heading: { de: 'Häufige Impfreaktionen', en: 'Common reactions' },
      body: {
        de: [
          'Sehr häufig – bei mehr als einer von zehn geimpften Personen – treten Schmerzen, Schwellung und Rötung an der Einstichstelle sowie Kopfschmerzen auf. Häufig – bei bis zu einer von zehn Personen – sind Schwindel, Übelkeit, Fieber, Abgeschlagenheit sowie Juckreiz oder ein kleiner Bluterguss an der Einstichstelle. Diese Reaktionen sind in der Regel leicht bis mittelschwer und gehen von selbst vorüber.',
          'Gelegentlich kommt es rund um die Impfung zu einer kurzen Ohnmacht als Reaktion auf den Einstich. Deshalb impfen wir im Sitzen oder Liegen und bitten Sie, nach der Impfung etwa 15 Minuten in der Praxis zu bleiben. Schwere allergische Reaktionen sind sehr selten; das RKI nennt etwa 1,7 Fälle pro eine Million Impfdosen.',
        ],
        en: [
          'Very common – in more than one in ten vaccinated people – are pain, swelling and redness at the injection site as well as headache. Common – in up to one in ten people – are dizziness, nausea, fever, fatigue and itching or a small bruise at the injection site. These reactions are generally mild to moderate and pass on their own.',
          'Occasionally, a brief fainting episode occurs around the time of vaccination as a reaction to the needle. We therefore vaccinate while you are seated or lying down and ask you to stay at the practice for about 15 minutes afterwards. Severe allergic reactions are very rare; the RKI states about 1.7 cases per one million doses.',
        ],
      },
    },
    {
      id: 'ablauf',
      heading: { de: 'Ablauf in unserer Praxis', en: 'How it works at our practice' },
      body: {
        de: [
          'Sie buchen Ihren Termin online oder telefonisch. Den Impfstoff besorgen wir für den gebuchten Termin; bitte buchen Sie deshalb einige Tage im Voraus. Zum Termin bringen Sie bitte Ihren Impfausweis mit.',
          'Im Termin klären wir Sie auf, prüfen, ob etwas gegen die Impfung spricht (Impf-Check), impfen und tragen die Impfung in Ihren Impfausweis ein. Die vollständige Impfserie umfasst laut Schema drei Impftermine; die Folgetermine vereinbaren wir mit Ihnen.',
          'Termine vergeben wir nach Vereinbarung, auch samstags.',
        ],
        en: [
          'You book your appointment online or by phone. We obtain the vaccine for the appointment you have booked; please therefore book a few days in advance. Please bring your vaccination certificate to the appointment.',
          'At the appointment we explain the vaccination, check whether there is any reason not to give it (pre-vaccination check), vaccinate and record the vaccination in your vaccination certificate. According to the schedule, the complete series comprises three vaccination appointments; we arrange the follow-up appointments with you.',
          'Appointments are by arrangement, including Saturdays.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Kosten', en: 'Costs' },
      body: {
        de: [
          'Bei uns ist die HPV-Impfung – wie alle Leistungen – eine Privatleistung nach der Gebührenordnung für Ärzte (GOÄ). Das ärztliche Honorar beträgt ca. 32 € je Impftermin (Aufklärung, Impf-Check, Impfung). Den Impfstoff berechnen wir zum Apothekenpreis ohne Aufschlag, derzeit ca. 210 € je Dosis. Je Impftermin sind das also rund 243 €. Der größte Teil der Kosten ist der Impfstoff; sein Preis entspricht dem Apothekenpreis. An Samstagen kommt der GOÄ-Zuschlag von ca. 6 € dazu. Die vollständige Impfserie umfasst laut Schema drei Impftermine. Den genauen Betrag nennen wir Ihnen vor der Impfung.',
          'Ob Ihre Krankenkasse erstattet, hängt von Kasse, Alter und Anlass ab; bitte klären Sie das vorab. Gesetzliche Krankenkassen müssen die HPV-Impfung nur bis zum 18. Geburtstag übernehmen; manche übernehmen sie darüber hinaus freiwillig bis zu einem bestimmten Alter. Als Privatpraxis rechnen wir nicht mit den gesetzlichen Kassen ab – Sie zahlen zunächst selbst. Privatversicherte reichen unsere Rechnung bei ihrer Versicherung ein.',
        ],
        en: [
          'At our practice the HPV vaccination – like all services – is a private service under the German medical fee schedule (GOÄ). The medical fee is approx. €32 per vaccination appointment (information, pre-vaccination check, vaccination). We charge the vaccine at the pharmacy price without a mark-up, currently approx. €210 per dose. That makes about €243 per vaccination appointment. Most of the cost is the vaccine; its price corresponds to the pharmacy price. On Saturdays the GOÄ surcharge of approx. €6 is added. According to the schedule, the complete series comprises three vaccination appointments. We will tell you the exact amount before the vaccination.',
          'Whether your health insurer reimburses the costs depends on the insurer, your age and the reason for vaccination; please check in advance. Statutory health insurers only have to cover HPV vaccination until the 18th birthday; some cover it voluntarily beyond that up to a certain age. As a private practice we do not bill statutory insurers – you pay yourself first. People with private insurance submit our invoice to their insurer.',
        ],
      },
    },
  ],
  sourceIds: ['rkiHpvFaq', 'rkiHpvFaktenblatt', 'rkiHpvRatgeber', 'peiHpv', 'rkiHpvAufklaerung', 'gbaSiRlHpvZoster'],
  // Datum des Entwurfs. Die Seite zeigt es als „Inhaltlich geprüft“ an – erst nach dem
  // ärztlichen Gegenlesen auf das tatsächliche Prüfdatum setzen.
  lastReviewed: new Date('2026-11-14'),
  related: [
    {
      label: { de: 'Krankheitsbild HPV', en: 'HPV – the infection' },
      path: '/krankheitsbilder/hpv',
    },
    {
      label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' },
      path: '/kosten',
    },
  ],
};
