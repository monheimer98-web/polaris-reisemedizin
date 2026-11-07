/**
 * Umra und Hadsch (DE/EN), Pfad /ausland/pilgerreisen/umra-hadsch. Informationsseite:
 * was man braucht, was wichtig ist, worauf man achten sollte. Vorgaben nach den
 * zuletzt veröffentlichten saudischen Texten, ohne eigene Sicherheitseinschätzung.
 * Termin-Links führen zur allgemeinen Reiseberatung, ohne Anlass in der URL.
 */
import type { ClinicalPage } from '../types';
import { KEINE_FORMULARE, KOSTEN_HINWEIS, PILGER_BUCHEN } from './fach-texte';
import { AUSLAND_GEPRUEFT, NACHWEISE_IM_ANGEBOT } from './stand';
import { linkAaReisehinweise } from './reisehinweise';

export const pilgerUmraHadsch: ClinicalPage = {
  meta: {
    title: {
      de: 'Umra und Hadsch (Umrah, Hajj): Impfvorgaben und Reiseberatung',
      en: 'Umrah and Hajj: vaccination rules and travel advice',
    },
    description: {
      de: 'Umra oder Hadsch geplant? Welche Impfung Saudi-Arabien verlangt, was im Impfausweis stehen muss und worauf Sie bei Hitze und Medikamenten achten. Reiseberatung in Langenfeld.',
      en: 'Planning Umrah or Hajj? Which vaccination Saudi Arabia requires, what your vaccination record must show and what to watch for with heat and medicines. Travel consultation in Langenfeld.',
    },
    eyebrow: { de: 'Ausland · Pilgerreisen', en: 'Abroad · Pilgrimages' },
    lead: {
      de: 'Für Umra und Hadsch verlangt Saudi-Arabien eine Impfung gegen Meningokokken ACWY. Hier lesen Sie, was Sie brauchen, was im Impfausweis stehen muss und worauf Sie bei Hitze, langen Wegen und Medikamenten achten sollten. In der Reiseberatung prüfen wir Ihren Impfausweis und planen die Impfung rechtzeitig.',
      en: 'For Umrah and Hajj, Saudi Arabia requires a meningococcal ACWY vaccination. Here you can read what you need, what your vaccination record must show and what to watch for with heat, long walks and medicines. In a travel consultation we check your vaccination record and plan the vaccination in good time.',
    },
  },
  sections: [
    {
      id: 'kurz',
      heading: { de: 'Das Wichtigste in Kürze', en: 'The key points at a glance' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Impfung gegen Meningokokken ACWY: für Hadsch und Umra vorgeschrieben.',
          'Spätestens 10 Tage vor der Ankunft in Saudi-Arabien impfen lassen. Ihr Veranstalter kann eine frühere Frist für die Unterlagen setzen.',
          'Im Impfausweis müssen Impfstoff und Datum stehen. Mit Konjugatimpfstoff zählt die Impfung 5 Jahre, ohne Angabe des Impfstofftyps nur 3 Jahre.',
          'Den Impfausweis auf der Reise immer mitführen.',
          'Hitze, lange Wege und Dauermedikamente vorher ärztlich besprechen.',
          'Für bestimmte Mittel gegen Schmerzen, Angst oder ADHS vorab eine Genehmigung der saudischen Arzneimittelbehörde beantragen.',
        ],
        en: [
          'Meningococcal ACWY vaccination: required for Hajj and Umrah.',
          'Get vaccinated at least 10 days before arrival in Saudi Arabia. Your tour operator may set an earlier deadline for documents.',
          'Your vaccination record must show the vaccine and the date. With a conjugate vaccine the vaccination counts for 5 years; without the vaccine type stated, only 3 years.',
          'Always carry your vaccination record while travelling.',
          'Discuss heat, long walks and long-term medicines with a doctor beforehand.',
          'For certain medicines against pain, anxiety or ADHD, apply in advance for approval from the Saudi drug authority.',
        ],
      },
    },
    {
      id: 'vorgaben',
      heading: {
        de: 'Zuletzt veröffentlichte Vorgaben (1447H) und was für 2027 noch aussteht',
        en: 'Most recently published rules (1447H) and what is pending for 2027',
      },
      body: {
        de: [
          'Das saudische Gesundheitsministerium führt am 31.10.2026 nur die Texte für 1447H (2026). Die Vorgaben für 1448H (2027) sind noch nicht veröffentlicht. Alle Angaben auf dieser Seite sind deshalb vorläufig, und wir prüfen sie vor Ihrem Termin erneut.',
          'Nach den Texten für 1447H müssen alle Reisenden zu Hadsch und Umra gegen Meningokokken geimpft sein, mit einem Impfstoff, der die Gruppen A, C, W und Y abdeckt:',
        ],
        en: [
          'On 31 October 2026 the Saudi Ministry of Health lists only the texts for 1447H (2026). The rules for 1448H (2027) have not been published yet. Everything on this page is therefore provisional, and we check it again before your appointment.',
          'Under the 1447H texts, all travellers for Hajj and Umrah must be vaccinated against meningococcal disease with a vaccine covering groups A, C, W and Y:',
        ],
      },
      list: {
        de: [
          'Konjugatimpfstoff: innerhalb der letzten 5 Jahre und mindestens 10 Tage vor der Ankunft.',
          'Polysaccharidimpfstoff: innerhalb der letzten 3 Jahre und mindestens 10 Tage vor der Ankunft.',
          'Ohne Angabe des Impfstofftyps auf dem Zertifikat zählt die Impfung nur 3 Jahre.',
          'Vorlage: Der Umra-Text verlangt sie ausdrücklich nur von Reisenden aus 26 afrikanischen Staaten, Deutschland steht nicht darauf. Das Auswärtige Amt und die STIKO nennen dagegen einen Nachweis für alle Reisenden ab einem Jahr. Welche Folge ein fehlender Nachweis hätte, nennt keine der von uns gelesenen Quellen. Führen Sie den Impfausweis deshalb immer mit.',
        ],
        en: [
          'Conjugate vaccine: within the last 5 years and at least 10 days before arrival.',
          'Polysaccharide vaccine: within the last 3 years and at least 10 days before arrival.',
          'If the vaccine type is not stated on the certificate, the vaccination counts for 3 years only.',
          'Presentation: the Umrah text expressly requires it only from travellers from 26 African countries; Germany is not among them. The German Federal Foreign Office and STIKO, by contrast, name proof for all travellers from the age of one. None of the sources we read states what would follow from missing proof. So always carry your vaccination record.',
        ],
      },
    },
    {
      id: 'zehn-tage',
      heading: {
        de: 'Mindestens zehn Tage vor der Ankunft: rückwärts planen',
        en: 'At least ten days before arrival: plan backwards',
      },
      body: {
        de: [
          'Maßgeblich ist der Tag der Ankunft in Saudi-Arabien, nicht der Abflug. Ein Rechenbeispiel: Bei Ankunft am 8. Februar ist der 29. Januar der letzte mögliche Impftag.',
          'Planen Sie trotzdem mehr Zeit ein. Nach den Empfehlungen der STIKO sollen Impfungen spätestens 2 Wochen vor Reisebeginn abgeschlossen sein, und manche Veranstalter verlangen die Unterlagen schon viele Monate vor der Abreise. Fragen Sie deshalb früh nach der Frist für Ihre Unterlagen. Bei einer Immunschwäche empfiehlt die STIKO eine zweite Dosis nach 4 bis 8 Wochen, das braucht mehr Vorlauf.',
        ],
        en: [
          'What counts is the day of arrival in Saudi Arabia, not the departure. As a worked example: for arrival on 8 February, 29 January is the last possible vaccination day.',
          'Please still allow more time. STIKO recommends completing vaccinations at least 2 weeks before the start of the trip, and some tour operators require documents many months before departure. So ask early about the deadline for your documents. In case of immunodeficiency, STIKO recommends a second dose after 4 to 8 weeks, which needs more lead time.',
        ],
      },
      links: [
        {
          label: { de: 'Vorlaufzeiten der Reiseimpfungen', en: 'Lead times for travel vaccinations' },
          path: '/ratgeber/wann-vor-der-reise-impfen',
        },
      ],
    },
    {
      id: 'gueltigkeit',
      heading: { de: 'Wie lange die Impfung gilt', en: 'How long the vaccination counts' },
      body: {
        de: [
          'Nach den saudischen Vorgaben zählt eine Impfung mit Konjugatimpfstoff 5 Jahre. In Deutschland wird heute mit Konjugatimpfstoff geimpft, Polysaccharidimpfstoff ist laut STIKO nicht mehr zugelassen.',
          'Manche Veranstalter nennen trotzdem pauschal 3 Jahre. Das entspricht der saudischen Frist für Polysaccharidimpfstoff und für Einträge ohne Angabe des Impfstofftyps. Liegt Ihre Impfung mehr als 3 Jahre zurück, fragen Sie Ihren Veranstalter, was er verlangt. Wir prüfen den Eintrag mit Ihnen.',
        ],
        en: [
          'Under the Saudi rules, a vaccination with a conjugate vaccine counts for 5 years. In Germany, conjugate vaccines are used today; according to STIKO, polysaccharide vaccine is no longer licensed.',
          'Some tour operators nevertheless state a flat 3 years. That matches the Saudi period for polysaccharide vaccine and for entries without the vaccine type stated. If your vaccination was more than 3 years ago, ask your tour operator what they require. We check the entry with you.',
        ],
      },
    },
    {
      id: 'impfausweis',
      heading: { de: 'Was im Impfausweis stehen muss', en: 'What the vaccination record must show' },
      body: {
        de: [
          'Die saudischen Texte verlangen auf dem Zertifikat den Namen des Impfstoffs und das Datum der Impfung. Damit die 5 Jahre gelten, muss der Impfstofftyp erkennbar sein. Die STIKO hält es für sinnvoll, die Merkmale auf Englisch einzutragen, zum Beispiel „Meningococcal quadrivalent conjugate vaccine“.',
          NACHWEISE_IM_ANGEBOT
            ? 'Manche Veranstalter verlangen zusätzlich Unterschrift und Arztstempel. Bringen Sie Ihren Impfausweis zum Termin mit, dann sehen wir uns den Eintrag gemeinsam an. Bestätigen können wir eine Impfung aus einer anderen Praxis nur anhand dieses Eintrags.'
            : 'Manche Veranstalter verlangen zusätzlich Unterschrift und Arztstempel. Bringen Sie Ihren Impfausweis zum Termin mit, dann sehen wir uns den Eintrag gemeinsam an.',
        ],
        en: [
          'The Saudi texts require the name of the vaccine and the date of vaccination on the certificate. For the 5 years to apply, the vaccine type must be recognisable. STIKO considers it useful to enter the details in English, for example “Meningococcal quadrivalent conjugate vaccine”.',
          NACHWEISE_IM_ANGEBOT
            ? 'Some tour operators also ask for a signature and a doctor’s stamp. Please bring your vaccination record to the appointment and we will go through the entry together. We can confirm a vaccination given by another practice only on the basis of that entry.'
            : 'Some tour operators also ask for a signature and a doctor’s stamp. Please bring your vaccination record to the appointment and we will go through the entry together.',
        ],
      },
    },
    {
      id: 'pflicht-empfehlung',
      heading: { de: 'Pflicht und Empfehlung: was wofür gilt', en: 'Required and recommended: what applies to what' },
      body: {
        de: ['Bei direkter Einreise aus Deutschland unterscheiden die Quellen so:'],
        en: ['For direct entry from Germany, the sources distinguish as follows:'],
      },
      list: {
        de: [
          'Meningokokken ACWY: Vorgabe für Hadsch und Umra, siehe oben.',
          'Polio: nach den Texten für 1447H für Reisende aus Deutschland keine Pflicht. Das Auswärtige Amt empfiehlt im Rahmen von Hadsch und Umra mindestens eine Impfung mit IPV.',
          'Gelbfieber: Nachweis nur bei Einreise aus einem Gelbfiebergebiet oder nach mehr als 12 Stunden Transit dort.',
          'COVID-19: Nachweis für bestimmte Gruppen. Der Umra-Text nennt Menschen über 65 Jahre, Schwangere und Menschen mit bestimmten chronischen Erkrankungen oder einer Immunschwäche, der Hadsch-Text nennt die Gruppen nicht.',
          'Empfohlen: Standardimpfungen und die Grippeimpfung (saudische Texte), Hepatitis A (STIKO), je nach Risiko Hepatitis B, Typhus, Dengue und Chikungunya (STIKO), Pneumokokken ab 65 Jahren (CDC).',
        ],
        en: [
          'Meningococcal ACWY: a rule for Hajj and Umrah, see above.',
          'Polio: under the 1447H texts, not required for travellers from Germany. The German Federal Foreign Office recommends at least one IPV vaccination in connection with Hajj and Umrah.',
          'Yellow fever: proof only when entering from a yellow fever area or after more than 12 hours in transit there.',
          'COVID-19: proof for certain groups. The Umrah text names people over 65, pregnant women and people with certain chronic illnesses or immunodeficiency; the Hajj text does not name the groups.',
          'Recommended: routine vaccinations and influenza (Saudi texts), hepatitis A (STIKO), depending on risk hepatitis B, typhoid, dengue and chikungunya (STIKO), pneumococcal from age 65 (CDC).',
        ],
      },
    },
    {
      id: 'gesundheitszeugnis',
      heading: {
        de: 'Gesundheitszeugnis für den Hadsch: was es ist und was offen bleibt',
        en: 'Health certificate for Hajj: what it is and what remains open',
      },
      body: {
        de: [
          'Der saudische Hadsch-Text 1447H verlangt von den Herkunftsländern die Erklärung, dass Reisende bestimmte schwere Erkrankungen nicht haben. Genannt sind unter anderem Dialysepflicht, Herzschwäche mit Beschwerden schon bei geringer Belastung, Lungenerkrankung mit Sauerstoffbedarf, Leberzirrhose mit Zeichen des Leberversagens, schwere neurologische oder psychiatrische Erkrankungen, Demenz, das letzte Schwangerschaftsdrittel oder eine Risikoschwangerschaft, bestimmte ansteckende Erkrankungen und aktive Krebserkrankungen unter Chemotherapie oder stark immunsuppressiver Therapie. Der Umra-Text enthält keinen solchen Abschnitt.',
          NACHWEISE_IM_ANGEBOT
            ? 'Das Muster im Anhang sieht neben der ärztlichen Unterschrift auch die Bestätigung einer zuständigen Gesundheitsstelle des Landes und des Hajj Affairs Office vor. Wer das in Deutschland bestätigt, konnten wir nicht belegen. Deshalb können wir nicht zusagen, dass ein Zeugnis aus unserer Praxis für Ihre Reise ausreicht.'
            : 'Das Muster im Anhang sieht neben der ärztlichen Unterschrift auch die Bestätigung einer zuständigen Gesundheitsstelle des Landes und des Hajj Affairs Office vor. Wer das in Deutschland bestätigt, konnten wir nicht belegen.',
          NACHWEISE_IM_ANGEBOT
            ? 'Manche Veranstalter verlangen eigene Papiere, teils mit pauschalen Aussagen wie „keine chronische oder ansteckende Krankheit“ und „hadschtauglich“. Wir bestätigen nur, was wir untersucht oder anhand von Unterlagen geprüft haben. Ein Zeugnis ist ein eigener Termin mit Untersuchung. Fragen Sie Ihren Veranstalter, welches Formular und welche Stempel er verlangt, und rufen Sie uns vor der Buchung an, damit wir klären können, ob wir es ausstellen können.'
            : `Manche Veranstalter verlangen eigene Papiere, teils mit pauschalen Aussagen wie „keine chronische oder ansteckende Krankheit“ und „hadschtauglich“. Fragen Sie Ihren Veranstalter, welches Formular und welche Stempel er verlangt. ${KEINE_FORMULARE.de}`,
        ],
        en: [
          'The Saudi Hajj text for 1447H requires countries of origin to declare that travellers do not have certain severe illnesses. These include, among others, kidney failure requiring dialysis, heart failure with symptoms on minimal effort, lung disease requiring oxygen, liver cirrhosis with signs of liver failure, severe neurological or psychiatric illness, dementia, the last trimester of pregnancy or a high-risk pregnancy, certain infectious diseases and active cancer under chemotherapy or strongly immunosuppressive therapy. The Umrah text has no such section.',
          NACHWEISE_IM_ANGEBOT
            ? 'The template in the annex provides for a doctor’s signature and also for confirmation by a competent health authority of the country and by the Hajj Affairs Office. We could not establish who confirms this in Germany. We therefore cannot promise that a certificate from our practice will be sufficient for your trip.'
            : 'The template in the annex provides for a doctor’s signature and also for confirmation by a competent health authority of the country and by the Hajj Affairs Office. We could not establish who confirms this in Germany.',
          NACHWEISE_IM_ANGEBOT
            ? 'Some tour operators require their own documents, in part with sweeping statements such as “no chronic or infectious disease” and “fit for Hajj”. We confirm only what we have examined or checked from records. A certificate is a separate appointment with an examination. Please ask your tour operator which form and which stamps they require, and call us before booking so that we can clarify whether we can issue it.'
            : `Some tour operators require their own documents, in part with sweeping statements such as “no chronic or infectious disease” and “fit for Hajj”. Please ask your tour operator which form and which stamps they require. ${KEINE_FORMULARE.en}`,
        ],
      },
      links: NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Kontakt', en: 'Contact' }, path: '/kontakt' }] : [],
    },
    {
      id: 'hitze-wege-medikamente',
      heading: { de: 'Hitze, lange Wege und Medikamente', en: 'Heat, long walks and medicines' },
      body: {
        de: ['Diese Punkte besprechen wir je nach Reise und Gesundheitszustand:'],
        en: ['We go through these points depending on your trip and state of health:'],
      },
      list: {
        de: [
          'Hitze: Im Sommer nennt die US-Gesundheitsbehörde CDC Tageswerte bis rund 50 °C. Meiden Sie direkte Sonne und trinken Sie ausreichend. Medikamente wie Entwässerungstabletten müssen unter Umständen vorher ärztlich angepasst werden.',
          'Wege: Beim Hadsch können über fünf Tage etwa 55 bis 65 Kilometer zu Fuß zusammenkommen. Sprechen Sie Ihre Belastbarkeit vorab an.',
          'Füße: In der Großen Moschee gehen die meisten barfuß. Bei Diabetes oder Nervenschäden an den Füßen klären Sie bitte vorab, wie Sie Ihre Füße schützen.',
          'Atemwege: Infektionen sind in großen Menschenmengen häufig. Die saudischen Texte raten zu Masken, Händewaschen und dazu, Kontakt zu Kamelen zu meiden.',
          'Mücken: Dengue kommt an der Westküste einschließlich Dschidda vor. Mückenschutz gilt tagsüber und abends.',
          'Dauermedikamente: Nehmen Sie ausreichend Medikamente in Originalverpackung und eine Dokumentation Ihrer Erkrankung mit.',
          'Kontrollierte Medikamente: Für Mittel gegen Schmerzen, Angst oder ADHS verlangt Saudi-Arabien seit dem 1. November 2025 vorab eine elektronische Genehmigung der Arzneimittelbehörde SFDA. Die Einfuhr von Drogen ist streng verboten.',
          'Zyklus: Wenn Sie Ihren Zyklus für die Reise verschieben möchten, sprechen Sie das zwei bis drei Monate vorher ärztlich an.',
        ],
        en: [
          'Heat: for summer, the US CDC reports daytime values of up to around 50 °C. Avoid direct sun and drink enough. Medicines such as diuretics may need medical adjustment beforehand.',
          'Walking: during Hajj, roughly 55 to 65 kilometres on foot can add up over five days. Please raise your fitness beforehand.',
          'Feet: most people go barefoot in the Grand Mosque. With diabetes or nerve damage in the feet, please clarify in advance how to protect your feet.',
          'Airways: infections are common in large crowds. The Saudi texts advise masks, hand washing and avoiding contact with camels.',
          'Mosquitoes: dengue occurs on the west coast including Jeddah. Mosquito protection applies during the day and in the evening.',
          'Long-term medicines: take enough medicine in its original packaging and documentation of your condition.',
          'Controlled medicines: since 1 November 2025, Saudi Arabia has required prior electronic approval from the SFDA drug authority for medicines for pain, anxiety or ADHD. Importing drugs is strictly prohibited.',
          'Menstrual cycle: if you want to shift your cycle for the trip, raise this with a doctor two to three months beforehand.',
        ],
      },
      links: [
        { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
        ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : []),
      ],
    },
    {
      id: 'checkliste',
      heading: { de: 'Checkliste vor der Abreise', en: 'Checklist before you leave' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Impfausweis mit dem Eintrag Meningokokken ACWY: Impfstoff, Datum, Unterschrift und Stempel.',
          'Unterlagen und Fristen Ihres Veranstalters.',
          'Dauermedikamente in Originalverpackung und eine Liste mit Wirkstoffen und Dosierung.',
          'Genehmigung für kontrollierte Medikamente rechtzeitig beantragen.',
          'Reiseapotheke mit Mitteln gegen Durchfall und Fieber, Blasenpflaster und Sonnenschutz.',
          'Reise- und Sicherheitshinweise des Auswärtigen Amts für Saudi-Arabien lesen.',
        ],
        en: [
          'Vaccination record with the meningococcal ACWY entry: vaccine, date, signature and stamp.',
          'Documents and deadlines from your tour operator.',
          'Long-term medicines in their original packaging and a list of active ingredients and doses.',
          'Apply in good time for approval of controlled medicines.',
          'Travel kit with remedies for diarrhoea and fever, blister plasters and sun protection.',
          'Read the German Federal Foreign Office travel and safety advice for Saudi Arabia.',
        ],
      },
      links: [
        { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
        linkAaReisehinweise,
      ],
    },
    {
      id: 'sprache',
      heading: { de: 'In welcher Sprache wir beraten', en: 'The language of our consultations' },
      body: {
        de: [
          'Die Beratung findet auf Deutsch oder Englisch statt. Wenn Sie eine andere Sprache brauchen, sagen Sie uns das bitte vor dem Termin, damit wir klären können, wie Sie alles Wichtige sicher verstehen.',
        ],
        en: [
          'Consultations are held in German or English. If you need another language, please tell us before the appointment so that we can clarify how you can safely understand everything important.',
        ],
      },
    },
    {
      id: 'beratung',
      heading: { de: 'So läuft die Reiseberatung ab', en: 'How the travel consultation works' },
      body: {
        de: [
          'Buchen Sie eine Reiseberatung. Den Anlass müssen Sie bei der Buchung nicht angeben. Im Termin prüfen wir Ihren Impfausweis, besprechen Hitze, Wege und Medikamente und planen die Impfung. Ist der Impfstoff vorrätig, impfen wir auf Wunsch direkt im Anschluss.',
          'Bringen Sie Ihren Impfausweis, Ihre Reisedaten, eine Liste Ihrer Medikamente und die Unterlagen Ihres Veranstalters mit.',
          'Sie finden uns am Leipziger Weg 5 (1. Etage) in Langenfeld-Richrath, gut erreichbar aus Monheim am Rhein, Hilden, Leichlingen, Solingen und Leverkusen.',
        ],
        en: [
          'Book a travel consultation. You do not need to state the reason when booking. In the appointment we check your vaccination record, talk through heat, walking and medicines and plan the vaccination. If the vaccine is in stock, we can vaccinate you straight afterwards if you wish.',
          'Please bring your vaccination record, your travel dates, a list of your medicines and your tour operator’s documents.',
          'You will find us at Leipziger Weg 5 (1st floor) in Langenfeld-Richrath, within easy reach of Monheim am Rhein, Hilden, Leichlingen, Solingen and Leverkusen.',
        ],
      },
    },
  ],
  termine: [
    { label: PILGER_BUCHEN, art: 'vollberatung' },
    ...(NACHWEISE_IM_ANGEBOT
      ? [{ label: { de: 'Nur die Impfung: Impftermin mit Nachweis', en: 'Vaccination only: appointment with certificate' }, art: 'impfung-nachweis' }]
      : []),
  ],
  faq: [
    {
      q: { de: 'Verlangt Saudi-Arabien für die Umra eine Impfung gegen Meningokokken?', en: 'Does Saudi Arabia require a meningococcal vaccination for Umrah?' },
      a: {
        de: 'Nach dem zuletzt veröffentlichten Text (1447H) müssen alle Reisenden zur Umra geimpft sein. Die Vorlage des Nachweises verlangt dieser Text ausdrücklich nur von Reisenden aus 26 afrikanischen Staaten, das Auswärtige Amt und die STIKO nennen einen Nachweis für alle ab einem Jahr. Manche Veranstalter schreiben, die Impfung sei für die Umra nicht verpflichtend, das deckt sich nicht mit dem saudischen Text. Führen Sie den Impfausweis immer mit.',
        en: 'Under the most recently published text (1447H), all travellers for Umrah must be vaccinated. That text expressly requires presentation of proof only from travellers from 26 African countries, while the German Federal Foreign Office and STIKO name proof for everyone from the age of one. Some tour operators state that the vaccination is not mandatory for Umrah, which does not match the Saudi text. Always carry your vaccination record.',
      },
    },
    {
      q: { de: 'Wie lange vor der Reise muss die Impfung erfolgt sein?', en: 'How long before the trip must the vaccination have been given?' },
      a: {
        de: 'Nach den Texten für 1447H mindestens 10 Tage vor der Ankunft in Saudi-Arabien. Planen Sie mehr Zeit ein, denn manche Veranstalter verlangen die Unterlagen deutlich früher.',
        en: 'Under the 1447H texts, at least 10 days before arrival in Saudi Arabia. Allow more time, as some tour operators require documents much earlier.',
      },
    },
    {
      q: { de: 'Wie lange gilt sie für Saudi-Arabien?', en: 'How long is it valid for Saudi Arabia?' },
      a: {
        de: 'Nach den Texten für 1447H zählt ein Konjugatimpfstoff 5 Jahre, ein Polysaccharidimpfstoff 3 Jahre. Fehlt die Angabe des Impfstofftyps, zählt die Impfung nur 3 Jahre. Manche Veranstalter nennen pauschal 3 Jahre, klären Sie das bei einer älteren Impfung mit ihnen.',
        en: 'Under the 1447H texts, a conjugate vaccine counts for 5 years and a polysaccharide vaccine for 3 years. If the vaccine type is missing, the vaccination counts for 3 years only. Some tour operators state a flat 3 years; please clarify this with them if your vaccination is older.',
      },
    },
    {
      q: { de: 'Mein Veranstalter verlangt Stempel und Gesundheitszeugnis. Geht das?', en: 'My tour operator requires a stamp and a health certificate. Is that possible?' },
      a: {
        de: NACHWEISE_IM_ANGEBOT
          ? 'Eine Impfung bei uns tragen wir mit Unterschrift und Stempel in den Impfausweis ein. Ein Gesundheitszeugnis ist ein eigener Termin mit Untersuchung, und wir bestätigen nur, was wir prüfen können. Ob der Veranstalter es annimmt und wer die weiteren Stempel des saudischen Musters in Deutschland setzt, können wir nicht zusagen. Rufen Sie uns bitte vor der Buchung an.'
          : 'Eine Impfung bei uns tragen wir mit Unterschrift und Stempel in den Impfausweis ein. Ein Gesundheitszeugnis stellen wir derzeit nicht aus. Wer die weiteren Stempel des saudischen Musters in Deutschland setzt, können wir nicht sagen.',
        en: NACHWEISE_IM_ANGEBOT
          ? 'If you are vaccinated with us, we enter it in your vaccination record with a signature and stamp. A health certificate is a separate appointment with an examination, and we confirm only what we can check. We cannot promise that the tour operator will accept it, or say who provides the further stamps on the Saudi template in Germany. Please call us before booking.'
          : 'If you are vaccinated with us, we enter it in your vaccination record with a signature and stamp. We do not currently issue health certificates. We cannot say who provides the further stamps on the Saudi template in Germany.',
      },
    },
    {
      q: { de: 'Ab welchem Alter gilt die Vorgabe?', en: 'From what age does the rule apply?' },
      a: {
        de: 'Das Auswärtige Amt und die STIKO nennen alle Reisenden ab einem Jahr. Die saudischen Texte für 1447H nennen kein Mindestalter. Veranstalter können eigene Altersgrenzen für die Reise haben.',
        en: 'The German Federal Foreign Office and STIKO name all travellers from the age of one. The Saudi texts for 1447H state no minimum age. Tour operators may have their own age limits for the trip.',
      },
    },
    {
      q: { de: 'Geht das auch in meiner Hausarztpraxis?', en: 'Can my GP practice do this too?' },
      a: {
        de: 'Ja. Die Impfung ist nicht an eine bestimmte Praxis gebunden, auch Hausarztpraxen können sie durchführen. Wichtig ist der vollständige Eintrag mit Impfstofftyp und Datum.',
        en: 'Yes. The vaccination is not tied to a particular practice; GP practices can give it too. What matters is a complete entry with vaccine type and date.',
      },
    },
    {
      q: { de: 'Was kostet die Beratung oder die Impfung?', en: 'How much do the consultation and the vaccination cost?' },
      a: KOSTEN_HINWEIS,
    },
    {
      q: { de: 'Muss ich bei der Buchung sagen, dass es um Umra oder Hadsch geht?', en: 'Do I have to say when booking that the trip is for Umrah or Hajj?' },
      a: {
        de: 'Nein. Buchen Sie eine Reiseberatung, den Anlass müssen Sie bei der Buchung nicht angeben. Im Gespräch klären wir Reiseziel, Reisedatum und das, was medizinisch wichtig ist.',
        en: 'No. Book a travel consultation; you do not need to state the reason when booking. In the consultation we clarify destination, travel dates and what is medically important.',
      },
    },
  ],
  sourceIds: ['aaSaudiArabien', 'auswaertigesAmt', 'mohPilgrims', 'mohHajj', 'mohUmrah', 'stikoReise2026', 'stikoReiseLaender2026', 'cdcHajjUmrah'],
  lastReviewed: AUSLAND_GEPRUEFT,
  related: [
    { label: { de: 'Pilgerreisen im Überblick', en: 'Pilgrimages overview' }, path: '/ausland/pilgerreisen' },
    { label: { de: 'Meningokokken', en: 'Meningococcal disease' }, path: '/krankheitsbilder/meningokokken' },
    ...(NACHWEISE_IM_ANGEBOT ? [{ label: { de: 'Gesundheitsnachweise fürs Ausland', en: 'Health certificates for abroad' }, path: '/ausland/nachweise' }] : []),
    { label: { de: 'Reiseapotheke', en: 'Travel kit' }, path: '/reiseapotheke' },
  ],
};
