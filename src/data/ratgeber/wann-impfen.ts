/**
 * Ratgeber „Wann vor der Reise impfen?" (DE/EN): ideale Vorlaufzeit, Impfschemata
 * und Last-Minute-Optionen nach STIKO/DTG (Epid Bull 27/2026, DTG-StAR 2026).
 * Bewusst ohne Präparatenamen (HWG); Zeitangaben gerundet und patientenverständlich.
 */
import type { ClinicalPage } from '../types';

export const wannImpfenGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Wann vor der Reise impfen?',
      en: 'When should you get vaccinated before travelling?',
    },
    description: {
      de: 'Reiseimpfungen rechtzeitig planen: ideal 6 bis 8 Wochen vor Abreise. Vorlaufzeiten der wichtigsten Impfungen und was kurz vor dem Abflug noch geht.',
      en: 'Plan travel vaccinations in good time: ideally 6 to 8 weeks before departure. Lead times of the main vaccines and what is still possible shortly before you fly.',
    },
    eyebrow: { de: 'Ratgeber', en: 'Guide' },
    lead: {
      de: 'Die meisten Reiseimpfungen lassen sich gut in sechs bis acht Wochen unterbringen. Einige brauchen länger, andere sind auch kurz vor der Abreise noch möglich. Hier finden Sie die Vorlaufzeiten nach den aktuellen Empfehlungen von STIKO und DTG.',
      en: 'Most travel vaccinations fit comfortably into six to eight weeks. Some need longer, others are still possible shortly before departure. Here you will find the lead times according to the current recommendations of STIKO and DTG.',
    },
  },
  sections: [
    {
      id: 'ideal',
      heading: { de: 'Ideal: 6 bis 8 Wochen vor der Abreise', en: 'Ideal: 6 to 8 weeks before departure' },
      body: {
        de: [
          'Kommen Sie am besten sechs bis acht Wochen vor der Abreise zur Beratung. Dann lassen sich fast alle Impfungen in Ruhe planen. STIKO und DTG empfehlen, Impfserien spätestens zwei Wochen vor Reisebeginn abzuschließen: Der Schutz baut sich meist erst 10 bis 14 Tage nach der letzten Dosis auf, und mögliche Impfreaktionen sollen vor dem Abflug abgeklungen sein.',
          'In dieses Zeitfenster passen unter anderem Hepatitis A, Typhus, Gelbfieber, Tollwut und Japanische Enzephalitis sowie verkürzte Schemata für Hepatitis B.',
        ],
        en: [
          'Ideally, come for a consultation six to eight weeks before departure. That leaves time to plan almost all vaccinations without rushing. STIKO and DTG recommend completing vaccine series at least two weeks before the trip: protection usually builds up only 10 to 14 days after the last dose, and any vaccine reactions should have settled before you fly.',
          'This window covers, among others, hepatitis A, typhoid, yellow fever, rabies and Japanese encephalitis, as well as accelerated schedules for hepatitis B.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Mehr Vorlauf brauchen', en: 'These need more time' },
        text: {
          de: 'Ein vollständiger Hepatitis-B-Schutz nach dem Standardschema (0, 1 und 6 Monate) dauert rund ein halbes Jahr. Bei der Dengue-Impfung – von der STIKO nur nach einer labordiagnostisch gesicherten früheren Dengue-Infektion empfohlen – liegen zwischen den beiden Dosen drei Monate.',
          en: 'Full hepatitis B protection on the standard schedule (0, 1 and 6 months) takes about six months. For the dengue vaccine – recommended by STIKO only after a laboratory-confirmed previous dengue infection – the two doses are three months apart.',
        },
      },
      links: [
        { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
        { label: { de: 'Termin buchen', en: 'Book an appointment' }, path: '/termin' },
      ],
    },
    {
      id: 'vorlaufzeiten',
      heading: { de: 'Vorlaufzeiten der wichtigsten Reiseimpfungen', en: 'Lead times of the main travel vaccinations' },
      body: {
        de: [
          'Die Übersicht zeigt, wie viele Dosen nötig sind und wann Sie spätestens beginnen sollten. Welche Impfungen Sie tatsächlich brauchen, hängt von Reiseziel, Reisestil und Gesundheit ab.',
        ],
        en: [
          'This overview shows how many doses are needed and when you should start at the latest. Which vaccinations you actually need depends on your destination, travel style and health.',
        ],
      },
      list: {
        de: [
          'Hepatitis A: 1 Dosis, Schutz bei den meisten nach etwa zwei Wochen; auch kurz vor der Abreise noch sinnvoll. Eine zweite Dosis frühestens nach 6 Monaten (meist nach 6 bis 12 Monaten) sorgt für langjährigen Schutz.',
          'Hepatitis B: 3 Dosen nach 0, 1 und 6 Monaten. Für Erwachsene gibt es in Ausnahmefällen ein Schnellschema (Tag 0, 7 und 21) – dann etwa vier bis fünf Wochen vor der Abreise beginnen; für einen dauerhaften Schutz ist eine vierte Dosis nach 12 Monaten nötig.',
          'Hepatitis A und B kombiniert: 3 Dosen nach 0, 1 und 6 Monaten; gegen Hepatitis A schützt der Kombinationsimpfstoff erst ab der zweiten Dosis. Das Schnellschema für Erwachsene (Tag 0, 7 und 21) etwa vier bis fünf Wochen vor der Abreise beginnen; eine vierte Dosis nach 12 Monaten ist dann nötig.',
          'Typhus: als Spritze mindestens zwei Wochen vor dem Infektionsrisiko; als Schluckimpfung drei Kapseln an Tag 1, 3 und 5, Beginn mindestens etwa zwölf Tage vor der Abreise.',
          'Gelbfieber: 1 Dosis, nur in einer zugelassenen Gelbfieber-Impfstelle. Schutz und Impfzertifikat gelten ab dem 10. Tag nach der Impfung – also spätestens zehn Tage vor der Einreise impfen.',
          'Tollwut (vorbeugend): je nach Schema 2 oder 3 Dosen. Das herkömmliche Schema (Tag 0, 7 und 21 oder 28) etwa fünf bis sechs Wochen vor der Abreise beginnen; verkürzte Schemata – nur bei intaktem Immunsystem – brauchen mindestens etwa eine Woche, besser drei Wochen.',
          'Japanische Enzephalitis: 2 Dosen im Abstand von 28 Tagen, Beginn mindestens fünf Wochen vor der Abreise. Für Erwachsene von 18 bis 65 Jahren gibt es ein Schnellschema (Tag 0 und 7) mit mindestens zwei Wochen Vorlauf.',
          'Meningokokken ACWY: 1 Dosis. Für die Pilgerreise nach Mekka (Hadsch, Umrah) muss die Impfung mindestens zehn Tage vor der Ankunft in Saudi-Arabien erfolgt sein.',
          'Cholera (nur bei besonderer Gefährdung): Schluckimpfung mit 1 oder 2 Dosen je nach Impfstoff; spätestens zehn Tage bzw. etwa zwei Wochen vor der Abreise beginnen.',
          'FSME: Für die laufende Saison schützen die ersten zwei Dosen. Mit einem Schnellschema etwa vier Wochen vor der Reise beginnen.',
          'Auffrischungen gegen Tetanus, Diphtherie, Keuchhusten und Polio: jederzeit möglich und auch kurzfristig sinnvoll. Fehlender Masernschutz wird mit einem Lebendimpfstoff nachgeholt (Abstand zu anderen Lebendimpfungen beachten, nicht in der Schwangerschaft). Die Grippeimpfung möglichst vor Beginn der Grippesaison am Reiseziel und spätestens ein bis zwei Wochen vor der Abreise; im Sommer und für die Südhalbkugel ist in Deutschland oft kein passender Impfstoff verfügbar.',
        ],
        en: [
          'Hepatitis A: 1 dose, with most people protected after about two weeks; still worthwhile shortly before departure. A second dose after at least 6 months (usually 6 to 12 months) gives long-term protection.',
          'Hepatitis B: 3 doses at 0, 1 and 6 months. In exceptional cases adults can have an accelerated schedule (days 0, 7 and 21) – start about four to five weeks before departure; a fourth dose after 12 months is needed for lasting protection.',
          'Combined hepatitis A and B: 3 doses at 0, 1 and 6 months; the combined vaccine protects against hepatitis A only from the second dose. Start the accelerated schedule for adults (days 0, 7 and 21) about four to five weeks before departure; a fourth dose after 12 months is then needed.',
          'Typhoid: as an injection at least two weeks before exposure; as an oral vaccine three capsules on days 1, 3 and 5, starting at least about twelve days before departure.',
          'Yellow fever: 1 dose, only at an authorised yellow fever vaccination centre. Protection and the vaccination certificate are valid from day 10 after vaccination – so get vaccinated at least ten days before entry.',
          'Rabies (pre-exposure): 2 or 3 doses depending on the schedule. Start the conventional schedule (days 0, 7 and 21 or 28) about five to six weeks before departure; shortened schedules – only for people with a healthy immune system – need at least about one week, ideally three.',
          'Japanese encephalitis: 2 doses 28 days apart, starting at least five weeks before departure. Adults aged 18 to 65 can have an accelerated schedule (days 0 and 7) with at least two weeks to spare.',
          'Meningococcal ACWY: 1 dose. For the pilgrimage to Mecca (Hajj, Umrah) the vaccination must have been given at least ten days before arrival in Saudi Arabia.',
          'Cholera (only in special risk situations): oral vaccine with 1 or 2 doses depending on the product; start at least ten days or about two weeks before departure.',
          'TBE: the first two doses protect for the current season. With an accelerated schedule, start about four weeks before the trip.',
          'Boosters against tetanus, diphtheria, whooping cough and polio: possible at any time and worthwhile even at short notice. Missing measles protection is made up with a live vaccine (mind the interval to other live vaccines; not during pregnancy). The flu jab ideally before the flu season at your destination begins and no later than one to two weeks before departure; in summer and for the southern hemisphere a suitable vaccine is often not available in Germany.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Abstand bei Lebendimpfstoffen', en: 'Interval between live vaccines' },
        text: {
          de: 'Gespritzte Lebendimpfstoffe – etwa gegen Gelbfieber oder Masern – werden am selben Tag oder im Abstand von mindestens vier Wochen gegeben. Wer das nicht einplant, verliert einen Monat. Totimpfstoffe brauchen in der Regel keinen Abstand zu anderen Impfungen; zwischen den Dosen einer Impfserie gelten aber Mindestabstände.',
          en: 'Injected live vaccines – such as yellow fever or measles – are given on the same day or at least four weeks apart. If this is not planned for, you lose a month. Inactivated vaccines usually need no interval from other vaccines; however, minimum intervals apply between the doses of a vaccine series.',
        },
      },
      links: [
        { label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' },
        { label: { de: 'Tollwut', en: 'Rabies' }, path: '/krankheitsbilder/tollwut' },
        { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
      ],
    },
    {
      id: 'kurzfristig',
      heading: { de: 'Kurz vor der Abreise: Was jetzt noch geht', en: 'Shortly before departure: what is still possible' },
      body: {
        de: [
          'Eine kurzfristige Reise ist kein Grund, auf Impfungen zu verzichten. Viele Reisekrankheiten haben lange Inkubationszeiten, etwa Hepatitis A, Typhus oder Tollwut. Auch wenige Tage vor dem Abflug lohnt sich deshalb die Beratung.',
        ],
        en: [
          'A last-minute trip is no reason to skip vaccinations. Many travel-related diseases have long incubation periods, such as hepatitis A, typhoid or rabies. A consultation is therefore worthwhile even a few days before you fly.',
        ],
      },
      list: {
        de: [
          'Hepatitis A: Eine Dosis des Einzelimpfstoffs ist auch kurz vor der Abreise noch sinnvoll.',
          'Gelbfieber: bis spätestens zehn Tage vor der Einreise.',
          'Typhus: als Spritze möglichst zwei Wochen vorher, aber auch kürzer noch sinnvoll; die Schluckimpfung braucht etwa zwölf Tage.',
          'Tollwut: verkürzte Schemata bei intaktem Immunsystem, wenn mindestens etwa eine Woche bleibt. Sie ersetzen nicht die Behandlung nach einem Biss oder Kratzer, vereinfachen sie aber deutlich.',
          'Japanische Enzephalitis: Schnellschema für Erwachsene bis 65 Jahre, wenn mindestens zwei Wochen bleiben.',
          'Hepatitis B: mit dem Schnellschema bei mindestens etwa vier Wochen Vorlauf; sonst beginnen wir die Serie und vervollständigen sie nach der Rückkehr.',
          'Auffrischungen gegen Tetanus, Diphtherie, Keuchhusten und Polio sowie die Meningokokken-ACWY-Impfung sind jederzeit möglich; Masern- und Grippeimpfung meist ebenfalls (Einschränkungen siehe oben).',
          'Malaria: Die Beratung zur Malariavorsorge lohnt sich auch bei sehr kurzem Vorlauf. Manche Mittel zur Vorbeugung können kurz vor der Einreise begonnen werden.',
        ],
        en: [
          'Hepatitis A: one dose of the single hepatitis A vaccine is still worthwhile shortly before departure.',
          'Yellow fever: no later than ten days before entry.',
          'Typhoid: the injection ideally two weeks before, but still worthwhile at shorter notice; the oral vaccine needs about twelve days.',
          'Rabies: shortened schedules for people with a healthy immune system if at least about one week remains. They do not replace treatment after a bite or scratch, but make it much simpler.',
          'Japanese encephalitis: accelerated schedule for adults up to 65 if at least two weeks remain.',
          'Hepatitis B: with the accelerated schedule if at least about four weeks remain; otherwise we start the series and complete it after your return.',
          'Boosters against tetanus, diphtheria, whooping cough and polio, as well as the meningococcal ACWY vaccine, are possible at any time; measles and flu vaccination usually are too (see the restrictions above).',
          'Malaria: advice on malaria prevention is worthwhile even at very short notice. Some preventive medicines can be started shortly before entry.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Nicht in wenigen Wochen möglich', en: 'Not possible within a few weeks' },
        text: {
          de: 'Die Dengue-Impfung (zwei Dosen im Abstand von drei Monaten) und ein vollständiger Hepatitis-B-Schutz nach dem Standardschema lassen sich nicht kurzfristig abschließen.',
          en: 'The dengue vaccine (two doses three months apart) and full hepatitis B protection on the standard schedule cannot be completed at short notice.',
        },
      },
    },
    {
      id: 'planung',
      heading: { de: 'So planen wir Ihre Impfungen', en: 'How we plan your vaccinations' },
      body: {
        de: [
          'In der Beratung prüfen wir Ihren Impfpass, Ihre Route und Ihren Gesundheitszustand. Daraus entsteht ein schriftlicher Impfplan mit allen Terminen, abgestimmt auf Ihren Abreisetag. So bereiten Sie sich vor:',
        ],
        en: [
          'In the consultation we review your vaccination record, your route and your health. The result is a written vaccination plan with all appointments, matched to your departure date. How to prepare:',
        ],
      },
      list: {
        de: [
          'Impfpass und frühere Impfnachweise mitbringen.',
          'Reiseroute mit Zwischenstopps notieren – Umstiege von mehr als 12 Stunden in Gelbfieber-Ländern können eine Nachweispflicht auslösen.',
          'Vorerkrankungen, Medikamente, Schwangerschaft oder Kinderwunsch angeben.',
          'Früh buchen, wenn mehrere Impfungen oder Dosen nötig sind.',
        ],
        en: [
          'Bring your vaccination record and any earlier certificates.',
          'Note your route including stopovers – layovers of more than 12 hours in yellow fever countries can trigger a certificate requirement.',
          'Tell us about pre-existing conditions, medication, pregnancy or plans to conceive.',
          'Book early if several vaccinations or doses are needed.',
        ],
      },
      links: [
        { label: { de: 'Ablauf der Beratung', en: 'How it works' }, path: '/ablauf' },
        { label: { de: 'Kosten & Erstattung', en: 'Costs & reimbursement' }, path: '/ratgeber/reiseimpfung-kosten-krankenkasse' },
      ],
    },
  ],
  faq: [
    {
      q: { de: 'Wie lange vor der Reise sollte ich mich impfen lassen?', en: 'How long before the trip should I get vaccinated?' },
      a: {
        de: 'Ideal sind sechs bis acht Wochen vor der Abreise. Dann lassen sich fast alle Reiseimpfungen planen und vor Reisebeginn abschließen. Für einzelne Impfungen, etwa einen vollständigen Hepatitis-B-Schutz, brauchen Sie länger.',
        en: 'Ideally six to eight weeks before departure. That allows almost all travel vaccinations to be planned and completed before the trip. Some, such as full hepatitis B protection, need longer.',
      },
    },
    {
      q: { de: 'Ist es zwei Wochen vor dem Abflug schon zu spät?', en: 'Is two weeks before the flight too late?' },
      a: {
        de: 'Nein. Hepatitis A, Gelbfieber (bis zehn Tage vor der Einreise), Auffrischungen und verkürzte Schemata, etwa für Tollwut, sind dann noch möglich. Eine Beratung lohnt sich in jedem Fall.',
        en: 'No. Hepatitis A, yellow fever (up to ten days before entry), boosters and shortened schedules, for example for rabies, are still possible. A consultation is worthwhile in any case.',
      },
    },
    {
      q: { de: 'Kann ich mehrere Impfungen an einem Tag bekommen?', en: 'Can I have several vaccinations on the same day?' },
      a: {
        de: 'Meist ja. Totimpfstoffe können in der Regel zusammen oder in beliebigem Abstand zu anderen Impfungen gegeben werden. Gespritzte Lebendimpfstoffe wie Gelbfieber und Masern werden am selben Tag oder mit mindestens vier Wochen Abstand gegeben. Einzelne Ausnahmen besprechen wir mit Ihnen.',
        en: 'Usually yes. Inactivated vaccines can generally be given together with, or at any interval from, other vaccines. Injected live vaccines such as yellow fever and measles are given on the same day or at least four weeks apart. We will discuss any exceptions with you.',
      },
    },
    {
      q: { de: 'Ab wann gilt das Gelbfieber-Impfzertifikat?', en: 'When does the yellow fever certificate become valid?' },
      a: {
        de: 'Ab dem 10. Tag nach der Impfung, und dann lebenslang. Vor einer erneuten Reise in ein Gelbfieber-Gebiet empfiehlt die STIKO eine einmalige Auffrischung, wenn die Impfung mindestens zehn Jahre zurückliegt. Wer als Kleinkind, in der Schwangerschaft oder mit geschwächtem Immunsystem geimpft wurde, braucht die zweite Dosis unter Umständen früher – das prüfen wir in der Beratung.',
        en: 'From day 10 after vaccination, and then for life. Before travelling to a yellow fever area again, STIKO recommends a single booster if the vaccination was at least ten years ago. If you were vaccinated as a young child, during pregnancy or with a weakened immune system, the second dose may be due earlier – we check this in the consultation.',
      },
    },
  ],
  sourceIds: ['stikoReise2026', 'dtgReiseimpfungen2026', 'stikoImpfempfehlungen', 'dtgMalaria2026'],
  lastReviewed: new Date('2026-10-18'),
  related: [
    { label: { de: 'Reiseimpfungen', en: 'Travel vaccinations' }, path: '/leistungen/reiseimpfungen' },
    { label: { de: 'Reiseberatung', en: 'Travel consultation' }, path: '/leistungen/reiseberatung' },
  ],
};
