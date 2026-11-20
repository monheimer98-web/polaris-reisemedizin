/**
 * ENTWURF vom 12.11.2026: vor Veröffentlichung ärztlich gegenlesen.
 *
 * Leistung Gürtelrose-Impfung — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Schwerpunkt: Menschen ab 50 Jahren, Selbstzahler und
 * Privatversicherte. Sachlich, ohne Heilversprechen (HWG-konform), ohne Präparate-
 * und Herstellernamen. Für Gesunde unter 60 Jahren gibt es keine STIKO-Empfehlung;
 * das steht bewusst deutlich im Text.
 * Der Abschnitt „Kosten“ nennt dieselben Richtwerte wie /kosten/ und /termin/
 * (dort mitpflegen): Honorar ca. 32 € je Impftermin, Impfstoff zum Apothekenpreis
 * (Stand 11/2026: 282,51 € je Dosis, Angabe der Praxis).
 */
import type { ClinicalPage } from '../types';

export const guertelroseImpfungService: ClinicalPage = {
  meta: {
    title: { de: 'Gürtelrose-Impfung', en: 'Shingles vaccination' },
    description: {
      de: 'Gürtelrose-Impfung ab 50 Jahren in Langenfeld, für Selbstzahler und Privatversicherte: Empfehlung, Impfschema, Gegenanzeigen, Ablauf und Kosten.',
      en: 'Shingles vaccination from age 50 in Langenfeld, for self-payers and the privately insured: recommendation, schedule, contraindications, procedure and costs.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Gegen Gürtelrose (Herpes zoster) wird mit einem Totimpfstoff in zwei Dosen geimpft. Die Ständige Impfkommission (STIKO) empfiehlt die Impfung allen Menschen ab 60 Jahren und ab 18 Jahren bei bestimmten Grunderkrankungen. Zugelassen ist der Impfstoff bereits ab 50 Jahren. Wir beraten und impfen Menschen ab 50 Jahren, Selbstzahler und Privatversicherte.',
      en: 'Vaccination against shingles (herpes zoster) is given with an inactivated vaccine in two doses. The German Standing Committee on Vaccination (STIKO) recommends it for everyone aged 60 and over and from age 18 for people with certain underlying conditions. The vaccine is authorised from the age of 50. We advise and vaccinate people aged 50 and over, self-payers and people with private insurance.',
    },
  },
  sections: [
    {
      id: 'impfstoff',
      heading: { de: 'Impfstoff', en: 'Vaccine' },
      body: {
        de: [
          'Geimpft wird mit einem Totimpfstoff. Er enthält keine vermehrungsfähigen Viren, sondern einen einzelnen Eiweißbaustein des Varizella-zoster-Virus und einen Wirkverstärker (Adjuvans).',
          'Zugelassen ist der Totimpfstoff zur Vorbeugung von Gürtelrose und von Nervenschmerzen, die nach einer Gürtelrose anhalten können (postherpetische Neuralgie): für Erwachsene ab 50 Jahren sowie für Erwachsene ab 18 Jahren mit erhöhtem Risiko für Gürtelrose. Vor Windpocken schützt er nicht; dafür ist er nicht zugelassen.',
          'Nach Angaben des Robert Koch-Instituts (RKI) kann der Totimpfstoff bei Menschen ab 50 Jahren Gürtelrose und die postherpetische Neuralgie wirksam verhindern; bei Geimpften mit gesundem Immunsystem ist eine gute Schutzwirkung über mindestens zehn Jahre belegt. Wie bei jedem Impfstoff sind nicht alle Geimpften geschützt. Ein früher verwendeter Lebendimpfstoff ist in Deutschland nicht mehr verfügbar.',
        ],
        en: [
          'The vaccination is given with an inactivated vaccine. It does not contain any virus capable of multiplying, but a single protein component of the varicella zoster virus and an adjuvant that enhances the immune response.',
          'The inactivated vaccine is authorised for the prevention of shingles and of nerve pain that can persist after shingles (postherpetic neuralgia): for adults aged 50 and over and for adults aged 18 and over at increased risk of shingles. It does not protect against chickenpox; it is not authorised for that purpose.',
          'According to the Robert Koch Institute (RKI), the inactivated vaccine can effectively prevent shingles and postherpetic neuralgia in people aged 50 and over; in vaccinated people with a healthy immune system, good protection has been documented for at least ten years. As with any vaccine, not everyone vaccinated is protected. A live vaccine used in the past is no longer available in Germany.',
        ],
      },
    },
    {
      id: 'eignung',
      heading: { de: 'Für wen ist die Impfung empfohlen?', en: 'Who is the vaccination recommended for?' },
      body: {
        de: [
          'Die STIKO empfiehlt die Impfung als Standardimpfung für alle Menschen ab 60 Jahren.',
          'Seit November 2025 empfiehlt sie die Impfung außerdem ab 18 Jahren (zuvor ab 50 Jahren) für Menschen, die ein erhöhtes Risiko haben, an Gürtelrose zu erkranken: bei angeborener oder erworbener Immunschwäche, auch durch Medikamente, sowie bei schwerer Ausprägung einer chronischen Grunderkrankung. Leichte oder medikamentös gut eingestellte chronische Erkrankungen sind bei 18- bis 59-Jährigen nach Einschätzung der STIKO nicht mit einem deutlich erhöhten Risiko verbunden und von der Empfehlung nicht umfasst. Als Beispiele nennt die STIKO Menschen mit oder nach:',
        ],
        en: [
          'STIKO recommends the vaccination as a standard vaccination for everyone aged 60 and over.',
          'Since November 2025 it has also recommended the vaccination from age 18 (previously from age 50) for people at increased risk of developing shingles: with congenital or acquired immunodeficiency, including that caused by medication, and with a severe form of a chronic underlying condition. According to STIKO, mild or well-controlled chronic conditions in people aged 18 to 59 are not associated with a clearly increased risk and are not covered by the recommendation. As examples, STIKO names people with or after:',
        ],
      },
      list: {
        de: [
          'Stammzell- oder Organtransplantation, zellbasierten Therapien,',
          'immunsuppressiver Behandlung, zum Beispiel einer Chemotherapie,',
          'Krebserkrankungen,',
          'HIV-Infektion,',
          'rheumatoider Arthritis, systemischem Lupus erythematodes, chronisch-entzündlichen Darmerkrankungen,',
          'chronisch obstruktiver Lungenerkrankung (COPD) oder Asthma bronchiale,',
          'chronischer Nierenschwäche,',
          'Diabetes mellitus.',
        ],
        en: [
          'stem cell or organ transplantation, cell-based therapies,',
          'immunosuppressive treatment, for example chemotherapy,',
          'cancer,',
          'HIV infection,',
          'rheumatoid arthritis, systemic lupus erythematosus, chronic inflammatory bowel disease,',
          'chronic obstructive pulmonary disease (COPD) or bronchial asthma,',
          'chronic renal insufficiency,',
          'diabetes mellitus.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Unter 60 Jahren ohne Grunderkrankung', en: 'Under 60 without an underlying condition' },
        text: {
          de: 'Für gesunde Menschen unter 60 Jahren gibt es keine STIKO-Empfehlung. Der Totimpfstoff ist jedoch ab 50 Jahren zugelassen. Die Impfung ist dann eine individuelle Entscheidung nach ärztlicher Beratung; das RKI weist darauf hin, dass eine fehlende STIKO-Empfehlung eine medizinisch begründete Impfung mit einem zugelassenen Impfstoff nicht ausschließt.',
          en: 'For healthy people under 60 there is no STIKO recommendation. However, the inactivated vaccine is authorised from the age of 50. Vaccination is then an individual decision following medical advice; the RKI points out that the absence of a STIKO recommendation does not rule out a medically justified vaccination with an authorised vaccine.',
        },
      },
    },
    {
      id: 'schema',
      heading: { de: 'Impfschema', en: 'Schedule' },
      body: {
        de: [
          'Die Impfserie besteht aus zwei Impfdosen, die in den Oberarmmuskel gegeben werden. Laut Fachinformation folgt die zweite Dosis zwei Monate nach der ersten; bei Bedarf kann sie im Abstand von zwei bis sechs Monaten gegeben werden. STIKO und Gemeinsamer Bundesausschuss nennen entsprechend einen Abstand von mindestens zwei bis höchstens sechs Monaten.',
          'Sind seit der ersten Dosis mehr als sechs Monate vergangen, muss die Impfserie nach Angaben des RKI nicht von vorn begonnen werden; die zweite Dosis wird so bald wie möglich nachgeholt. Ob später eine Auffrischimpfung nötig ist, ist derzeit nicht bekannt.',
          'Auch wer schon einmal eine Gürtelrose hatte, kann geimpft werden, sobald die Beschwerden vollständig abgeklungen sind. Das RKI empfiehlt einen Abstand von mindestens 6 bis 12 Monaten zur Erkrankung.',
        ],
        en: [
          'The series consists of two doses given into the upper arm muscle. According to the product information, the second dose follows two months after the first; if necessary it can be given two to six months after the first. STIKO and the Federal Joint Committee accordingly state an interval of at least two and at most six months.',
          'If more than six months have passed since the first dose, according to the RKI the series does not have to be started again from the beginning; the second dose is caught up as soon as possible. Whether a booster dose will be needed later is not currently known.',
          'People who have already had shingles can also be vaccinated once the symptoms have fully subsided. The RKI recommends an interval of at least 6 to 12 months after the illness.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Beide Dosen gehören dazu', en: 'Both doses belong together' },
        text: {
          de: 'Der Impfschutz setzt beide Impfdosen voraus. Bitte planen Sie den zweiten Termin gleich mit ein – auch dann, wenn Sie die erste Impfung deutlich gespürt haben.',
          en: 'Protection requires both doses. Please plan the second appointment straight away – even if you clearly felt the first vaccination.',
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
          'eine bekannte Überempfindlichkeit gegen einen Bestandteil des Impfstoffs oder eine allergische Reaktion nach der ersten Impfdosis – dann wird nicht geimpft,',
          'eine akute, schwere, fieberhafte Erkrankung – hier wird die Impfung verschoben; ein leichter Infekt ohne Fieber ist kein Hindernis,',
          'Schwangerschaft – es liegen keine Daten vor, die Impfung wird vorsichtshalber vermieden; für die Stillzeit wurde die Impfung nicht untersucht,',
          'eine akute Gürtelrose – die Impfung dient der Vorbeugung, nicht der Behandlung, und wird erst nach dem Abklingen der Beschwerden gegeben,',
          'eine Störung der Blutgerinnung – hier ist bei der Injektion in den Muskel besondere Vorsicht geboten.',
        ],
        en: [
          'a known hypersensitivity to a component of the vaccine or an allergic reaction after the first dose – in this case the vaccine is not given,',
          'an acute, severe febrile illness – here the vaccination is postponed; a minor infection without fever is not an obstacle,',
          'pregnancy – no data are available, so vaccination is avoided as a precaution; vaccination while breastfeeding has not been studied,',
          'acute shingles – the vaccination is for prevention, not treatment, and is only given after the symptoms have subsided,',
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
          'Der Totimpfstoff ruft vergleichsweise häufig spürbare Impfreaktionen hervor. Sehr häufig – bei mehr als einer von zehn geimpften Personen – sind Schmerzen, Rötung und Schwellung an der Einstichstelle, Muskelschmerzen, Müdigkeit, Kopfschmerzen, Schüttelfrost, Fieber und Magen-Darm-Beschwerden.',
          'Bei etwa jeder zehnten geimpften Person sind die Reaktionen nach Angaben des RKI so ausgeprägt, dass sie den Alltag vorübergehend einschränken. In der Regel klingen sie nach zwei bis drei Tagen vollständig ab. Ungewohnte, starke körperliche Belastungen sollten Sie in den ersten drei Tagen nach der Impfung vermeiden.',
          'Schwere Nebenwirkungen sind sehr selten. Nach der Zulassung wurde ein geringfügig erhöhtes Risiko für ein Guillain-Barré-Syndrom beobachtet, eine meist vorübergehende Nervenlähmung; das RKI nennt etwa 3 Fälle pro eine Million Impfdosen.',
        ],
        en: [
          'The inactivated vaccine causes noticeable reactions comparatively often. Very common – in more than one in ten vaccinated people – are pain, redness and swelling at the injection site, muscle pain, tiredness, headache, chills, fever and gastrointestinal complaints.',
          'According to the RKI, in about one in ten vaccinated people the reactions are pronounced enough to restrict everyday activities temporarily. They generally subside completely after two to three days. You should avoid unusual, strenuous physical exertion in the first three days after the vaccination.',
          'Serious side effects are very rare. After authorisation, a slightly increased risk of Guillain-Barré syndrome – a usually temporary nerve paralysis – was observed; the RKI states about 3 cases per one million doses.',
        ],
      },
    },
    {
      id: 'ablauf',
      heading: { de: 'Ablauf in unserer Praxis', en: 'How it works at our practice' },
      body: {
        de: [
          'Sie buchen Ihren Termin online oder telefonisch. Den Impfstoff besorgen wir für den gebuchten Termin; bitte buchen Sie deshalb einige Tage im Voraus. Zum Termin bringen Sie bitte Ihren Impfausweis mit.',
          'Im Termin klären wir Sie auf, prüfen, ob etwas gegen die Impfung spricht (Impf-Check), impfen und tragen die Impfung in Ihren Impfausweis ein. Eine Blutuntersuchung vorab ist in der Regel nicht nötig: Wer vor 2004 in Deutschland aufgewachsen ist, hat nach Angaben des RKI fast sicher Windpocken durchgemacht.',
          'Die Impfserie umfasst laut Schema zwei Impftermine im Abstand von zwei bis sechs Monaten; den zweiten Termin vereinbaren wir mit Ihnen. Termine vergeben wir nach Vereinbarung, auch samstags.',
        ],
        en: [
          'You book your appointment online or by phone. We obtain the vaccine for the appointment you have booked; please therefore book a few days in advance. Please bring your vaccination certificate to the appointment.',
          'At the appointment we explain the vaccination, check whether there is any reason not to give it (pre-vaccination check), vaccinate and record the vaccination in your vaccination certificate. A blood test beforehand is generally not necessary: according to the RKI, anyone who grew up in Germany before 2004 has almost certainly had chickenpox.',
          'According to the schedule, the series comprises two vaccination appointments two to six months apart; we arrange the second appointment with you. Appointments are by arrangement, including Saturdays.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Kosten', en: 'Costs' },
      body: {
        de: [
          'Bei uns ist die Gürtelrose-Impfung – wie alle Leistungen – eine Privatleistung nach der Gebührenordnung für Ärzte (GOÄ). Das ärztliche Honorar beträgt ca. 32 € je Impftermin (Aufklärung, Impf-Check, Impfung). Den Impfstoff berechnen wir zum Apothekenpreis ohne Aufschlag, derzeit ca. 283 € je Dosis. Je Impftermin sind das also rund 315 €. Der größte Teil der Kosten ist der Impfstoff; sein Preis entspricht dem Apothekenpreis. An Samstagen kommt der GOÄ-Zuschlag von ca. 6 € dazu. Die Impfserie umfasst laut Schema zwei Impftermine. Den genauen Betrag nennen wir Ihnen vor der Impfung.',
          'Gesetzliche Krankenkassen übernehmen die Impfung für Versicherte ab 60 Jahren und, seit dem 13. Februar 2026, ab 18 Jahren bei erhöhter gesundheitlicher Gefährdung durch die oben genannten Erkrankungen. Diese Kassenleistung erhalten Sie in einer Praxis mit Kassenzulassung, zum Beispiel in Ihrer Hausarztpraxis. Als Privatpraxis rechnen wir nicht mit den gesetzlichen Kassen ab – bei uns zahlen Sie zunächst selbst.',
          'Selbst zahlen in der Regel Menschen unter 60 Jahren ohne eine solche Grunderkrankung. Ob Ihre Krankenkasse erstattet, hängt von Kasse, Alter und Anlass ab; bitte klären Sie das vorab. Privatversicherte reichen unsere Rechnung bei ihrer Versicherung ein.',
        ],
        en: [
          'At our practice the shingles vaccination – like all services – is a private service under the German medical fee schedule (GOÄ). The medical fee is approx. €32 per vaccination appointment (information, pre-vaccination check, vaccination). We charge the vaccine at the pharmacy price without a mark-up, currently approx. €283 per dose. That makes about €315 per vaccination appointment. Most of the cost is the vaccine; its price corresponds to the pharmacy price. On Saturdays the GOÄ surcharge of approx. €6 is added. According to the schedule, the series comprises two vaccination appointments. We will tell you the exact amount before the vaccination.',
          'Statutory health insurers cover the vaccination for insured people aged 60 and over and, since 13 February 2026, from age 18 for people at increased health risk due to the conditions listed above. You receive this statutory benefit at a practice that bills statutory insurers, for example your family doctor. As a private practice we do not bill statutory insurers – with us you pay yourself first.',
          'People under 60 without such an underlying condition generally pay themselves. Whether your health insurer reimburses the costs depends on the insurer, your age and the reason for vaccination; please check in advance. People with private insurance submit our invoice to their insurer.',
        ],
      },
    },
  ],
  sourceIds: ['rkiZosterFaq', 'stikoZoster2025', 'gbaZoster2025', 'gbaSiRlHpvZoster', 'rkiZosterFaktenblatt', 'peiZoster', 'rkiZosterAufklaerung'],
  // Datum des Entwurfs. Die Seite zeigt es als „Inhaltlich geprüft“ an – erst nach dem
  // ärztlichen Gegenlesen auf das tatsächliche Prüfdatum setzen.
  lastReviewed: new Date('2026-11-14'),
  related: [
    {
      label: { de: 'Krankheitsbild Gürtelrose', en: 'Shingles – the disease' },
      path: '/krankheitsbilder/guertelrose',
    },
    {
      label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' },
      path: '/kosten',
    },
  ],
};
