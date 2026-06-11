/**
 * Leistung „Reisemedizinische Beratung" — die zentrale Erstleistung der Praxis
 * (DE/EN), belegt über das Quellen-Register. Sachlich, ohne Heilversprechen,
 * ohne Preisangaben (HWG-konform). Preise stehen gebündelt auf /kosten.
 *
 * Beratungs-Erstmodell: Die Beratung ist eine eigenständige ärztliche Leistung.
 * Ergebnis ist ein schriftlicher, individueller Impf- und Reiseplan inkl.
 * Feststellung der Impftauglichkeit – unabhängig davon, ob anschließend
 * geimpft wird. Impfungen erfolgen in der Regel in gesonderten Folgeterminen.
 */
import type { ClinicalPage } from '../types';

export const reiseberatungService: ClinicalPage = {
  meta: {
    title: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' },
    description: {
      de: 'Individuelle reisemedizinische Beratung: Impfempfehlungen, Impftauglichkeit, schriftlicher Impf- und Reiseplan, Malaria- und Expositionsschutz – abgestimmt auf Reiseziel, Route und Gesundheitszustand.',
      en: 'Individual travel-medicine consultation: vaccination recommendations, fitness for vaccination, a written vaccination and travel plan, malaria and exposure protection – tailored to your destination, route and state of health.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Im Mittelpunkt steht das Gespräch: Wir prüfen Ihr Reiseziel, Ihre Route und Ihre Krankengeschichte und erstellen einen schriftlichen, individuellen Impf- und Reiseplan – die Grundlage für alles Weitere.',
      en: 'The conversation comes first: we review your destination, your route and your medical history and prepare a written, individual vaccination and travel plan – the basis for everything that follows.',
    },
  },
  sections: [
    {
      id: 'umfang',
      heading: { de: 'Was die Beratung umfasst', en: 'What the consultation covers' },
      body: {
        de: [
          'Die reisemedizinische Beratung ist eine eigenständige ärztliche Leistung. Gemeinsam gehen wir Ihre Reise durch – Zielländer, Reiseroute, Reisezeit, Reisestil (z. B. Rundreise, Trekking, Langzeitaufenthalt) und geplante Aktivitäten – und ordnen die gesundheitlichen Aspekte ein.',
          'Berücksichtigt werden Ihre Vorerkrankungen, Medikamente, Allergien, Ihr Impfstatus sowie besondere Situationen wie Schwangerschaft, Stillzeit, Reisen mit Kindern oder ein geschwächtes Immunsystem. Daraus leiten wir eine fundierte, auf Sie zugeschnittene Empfehlung ab.',
        ],
        en: [
          'The travel-medicine consultation is a medical service in its own right. Together we go through your trip – destinations, route, time of year, travel style (e.g. round trip, trekking, long-term stay) and planned activities – and put the health-related aspects into context.',
          'We take into account your pre-existing conditions, medications, allergies and vaccination status, as well as special situations such as pregnancy, breastfeeding, travelling with children or a weakened immune system. From this we derive a well-founded recommendation tailored to you.',
        ],
      },
      list: {
        de: [
          'Empfohlene Reise- und Standardimpfungen für Ihr Ziel',
          'Feststellung der Impftauglichkeit und Prüfung Ihres Impfpasses',
          'Malaria-Risiko und passende Vorsorge (Expositionsschutz, ggf. Medikamente)',
          'Schutz vor durch Mücken und Zecken übertragenen Erkrankungen',
          'Reisedurchfall, Trinkwasser- und Lebensmittelhygiene',
          'je nach Reise: Höhenaufenthalte, Thromboserisiko bei Langstrecke, Reiseapotheke',
        ],
        en: [
          'recommended travel and standard vaccinations for your destination',
          'assessment of fitness for vaccination and review of your vaccination record',
          'malaria risk and suitable prevention (exposure protection, medication where appropriate)',
          'protection against mosquito- and tick-borne diseases',
          "travellers' diarrhoea, drinking-water and food hygiene",
          'depending on the trip: high-altitude stays, thrombosis risk on long-haul flights, travel first-aid kit',
        ],
      },
    },
    {
      id: 'impfplan',
      heading: { de: 'Ihr schriftlicher Impf- und Reiseplan', en: 'Your written vaccination and travel plan' },
      body: {
        de: [
          'Ergebnis der Beratung ist ein schriftlicher, individueller Impf- und Reiseplan. Er hält fest, welche Impfungen für Ihre Reise empfohlen sind, in welcher zeitlichen Reihenfolge sie sinnvoll sind und worauf Sie vor Ort achten sollten. Diesen Plan nehmen Sie mit – auch, wenn Sie sich gegen eine Impfung entscheiden.',
          'Der Plan ist die eigentliche Leistung der Beratung. Ob Sie die empfohlenen Impfungen anschließend bei uns, bei Ihrer Hausärztin oder Ihrem Hausarzt durchführen lassen, entscheiden Sie frei.',
        ],
        en: [
          'The outcome of the consultation is a written, individual vaccination and travel plan. It records which vaccinations are recommended for your trip, the sensible timing for them and what to watch out for on site. You take this plan with you – even if you decide against a vaccination.',
          'This plan is the actual deliverable of the consultation. Whether you then have the recommended vaccinations carried out with us or with your family doctor is entirely your choice.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Beratung unabhängig von der Impfung', en: 'Consultation independent of vaccination' },
        text: {
          de: 'Die Beratung und der schriftliche Plan sind eine eigenständige Leistung – sie stehen Ihnen unabhängig davon zu, ob Sie sich später impfen lassen. So erhalten Sie eine neutrale, auf Ihren Nutzen ausgerichtete Empfehlung.',
          en: 'The consultation and the written plan are a service in their own right – you receive them regardless of whether you are vaccinated afterwards. This ensures a neutral recommendation focused on your benefit.',
        },
      },
    },
    {
      id: 'ablauf',
      heading: { de: 'Beratung und Impfung – getrennte Termine', en: 'Consultation and vaccination – separate appointments' },
      body: {
        de: [
          'Wir trennen bewusst die Beratung von der Impfung. Im ersten Termin beraten wir Sie ausführlich, prüfen die Impftauglichkeit und erstellen Ihren Plan. Anstehende Impfungen vereinbaren wir – soweit medizinisch sinnvoll – als gesonderte Folgetermine.',
          'Das hat zwei Gründe: Manche Impfstoffe bestellen wir individuell für Sie, und der zeitliche Abstand erlaubt eine in Ruhe getroffene Entscheidung. Reisen Sie kurzfristig, stimmen wir das Vorgehen direkt auf Ihren Zeitrahmen ab.',
        ],
        en: [
          'We deliberately separate the consultation from the vaccination. In the first appointment we advise you in detail, assess your fitness for vaccination and prepare your plan. Any vaccinations are arranged – where medically sensible – as separate follow-up appointments.',
          'There are two reasons for this: some vaccines are ordered individually for you, and the time interval allows for a decision made calmly. If you are travelling at short notice, we adapt the approach directly to your timeframe.',
        ],
      },
    },
    {
      id: 'vorlauf',
      heading: { de: 'Der richtige Zeitpunkt', en: 'The right time' },
      body: {
        de: [
          'Planen Sie die Beratung möglichst früh – idealerweise vier bis sechs Wochen vor Abreise. Manche Impfungen brauchen mehrere Dosen über Wochen, und einzelne Schutzwirkungen bauen sich erst mit etwas Vorlauf auf.',
          'Aber auch kurz vor der Abreise lohnt sich der Termin: Vieles lässt sich noch sinnvoll umsetzen, und Sie reisen besser informiert. Für die Gelbfieberimpfung gilt eine Besonderheit – der internationale Impfnachweis wird erst zehn Tage nach der Impfung gültig.',
        ],
        en: [
          'Plan the consultation as early as possible – ideally four to six weeks before departure. Some vaccinations require several doses over weeks, and certain protective effects only build up with a little lead time.',
          'But the appointment is worthwhile shortly before departure too: much can still be implemented sensibly, and you travel better informed. A special rule applies to yellow fever – the international certificate only becomes valid ten days after vaccination.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Was Sie mitbringen', en: 'What to bring' },
        text: {
          de: 'Bringen Sie bitte Ihren Impfausweis, eine Liste Ihrer Medikamente und – soweit vorhanden – Ihre Reiseunterlagen (Route, Termine) mit. Das hilft uns, die Empfehlung präzise auf Ihre Reise abzustimmen.',
          en: 'Please bring your vaccination record, a list of your medications and – if available – your travel documents (route, dates). This helps us tailor the recommendation precisely to your trip.',
        },
      },
    },
    {
      id: 'mehrere-personen',
      heading: { de: 'Gemeinsam reisen', en: 'Travelling together' },
      body: {
        de: [
          'Reisen Sie zu mehrt zum selben Ziel, beraten wir Sie gern gemeinsam. Jede Person erhält dabei eine eigene Beurteilung der Impftauglichkeit und einen eigenen Impf- und Reiseplan, denn Vorerkrankungen, Impfstatus und Verträglichkeit sind individuell.',
          'Sprechen Sie uns bei der Terminbuchung einfach an, damit wir genügend Zeit einplanen.',
        ],
        en: [
          'If several of you are travelling to the same destination, we are happy to advise you together. Each person receives their own assessment of fitness for vaccination and their own vaccination and travel plan, because pre-existing conditions, vaccination status and tolerability are individual.',
          'Simply let us know when booking so that we can schedule enough time.',
        ],
      },
    },
  ],
  sourceIds: ['stikoImpfempfehlungen', 'dtgReiseimpfungen', 'auswaertigesAmt', 'rkiMalaria'],
  lastReviewed: new Date('2026-06-04'),
  related: [
    { label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations at a glance' }, path: '/leistungen/reiseimpfungen' },
    { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
    { label: { de: 'Ablauf in unserer Praxis', en: 'How it works at our practice' }, path: '/ablauf' },
    { label: { de: 'Kosten & GOÄ', en: 'Costs & GOÄ' }, path: '/kosten' },
  ],
};
