/**
 * Ratgeber „Was kostet eine Reiseimpfung – und wer zahlt?" (DE/EN).
 * Sachlich und HWG-konform: keine Erstattungsversprechen, keine Rabatt-Sprache.
 * Konkrete Richtwerte stehen bewusst nur auf /kosten (eine Quelle der Wahrheit).
 */
import type { ClinicalPage } from '../types';

export const kostenErstattungGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Was kostet eine Reiseimpfung – und wer zahlt?',
      en: 'What does a travel vaccination cost – and who pays?',
    },
    description: {
      de: 'Reiseimpfung: woraus sich die Kosten zusammensetzen, was Impfstoffe kosten und wann Krankenkasse, Privatversicherung oder Arbeitgeber erstatten.',
      en: 'Travel vaccination: what the costs consist of, what vaccines cost and when statutory or private insurance or your employer reimburse them.',
    },
    eyebrow: { de: 'Ratgeber', en: 'Guide' },
    lead: {
      de: 'Reiseimpfungen sind keine Pflichtleistung der Krankenkassen. Hier erfahren Sie, wie sich die Kosten in unserer Privatpraxis zusammensetzen, was Impfstoffe kosten und wann Sie Geld zurückbekommen können.',
      en: 'Travel vaccinations are not a mandatory benefit of statutory health insurance. Here you can read how the costs at our private practice are made up, what vaccines cost and when you may be reimbursed.',
    },
  },
  sections: [
    {
      id: 'zusammensetzung',
      heading: { de: 'Woraus sich die Kosten zusammensetzen', en: 'What the costs consist of' },
      body: {
        de: ['Die Kosten einer Reiseimpfung bestehen aus drei Teilen:'],
        en: ['The cost of a travel vaccination is made up of three parts:'],
      },
      list: {
        de: [
          'Ärztliche Beratung: Wir prüfen Reiseroute, Gesundheitszustand und Impfpass. Am Ende steht ein schriftlicher Impf- und Reiseplan.',
          'Impfleistung: Aufklärung, Impfung und Eintrag in den Impfausweis – je Termin und je Impfung.',
          'Impfstoff: Ihn bezahlen Sie meist direkt in der Apotheke (Privatrezept). Den FSME- und den Gelbfieber-Impfstoff halten wir vor Ort vorrätig und berechnen ihn ohne Aufschlag zum Einkaufspreis.',
        ],
        en: [
          'Medical consultation: we review your route, your health and your vaccination record, and you receive a written vaccination and travel plan.',
          'Vaccination: informed consent, injection and entry in your vaccination certificate – per appointment and per vaccination.',
          'Vaccine: you usually pay for it directly at the pharmacy (private prescription). We keep the TBE and yellow fever vaccines in stock and charge them at cost, without a mark-up.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Abrechnung nach GOÄ', en: 'Billing under the GOÄ' },
        text: {
          de: 'Als Privatpraxis rechnen wir nach der Gebührenordnung für Ärzte (GOÄ) ab. Die aktuellen Richtwerte finden Sie auf unserer Kostenseite. Vor jeder Leistung besprechen wir die voraussichtlichen Kosten mit Ihnen und halten sie schriftlich fest.',
          en: 'As a private practice we bill under the German medical fee schedule (GOÄ). You will find current guide prices on our fees page. Before any service we discuss the expected costs with you and confirm them in writing.',
        },
      },
      links: [{ label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' }],
    },
    {
      id: 'impfstoffe',
      heading: { de: 'Was Impfstoffe kosten', en: 'What vaccines cost' },
      body: {
        de: [
          'Der größte Posten ist oft der Impfstoff. Die Apothekenpreise reichen je nach Impfstoff von rund 30 Euro bis über 100 Euro pro Dosis, und manche Impfungen brauchen zwei oder drei Dosen. Der Gelbfieber-Impfstoff kostet derzeit rund 72 Euro.',
          'Wir planen nur die Impfungen, die für Ihre Reise sinnvoll sind, und sagen Ihnen auch, worauf Sie verzichten können.',
        ],
        en: [
          'The largest item is often the vaccine. Depending on the vaccine, pharmacy prices range from around 30 euros to over 100 euros per dose, and some vaccinations need two or three doses. The yellow fever vaccine currently costs around 72 euros.',
          'We only plan the vaccinations that make sense for your trip – and we also tell you what you can do without.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Impfpass mitbringen', en: 'Bring your vaccination record' },
        text: {
          de: 'Was bereits geimpft ist, muss nicht noch einmal bezahlt werden. Bringen Sie deshalb Ihren Impfpass und frühere Impfnachweise mit.',
          en: 'Vaccinations you already have do not need to be paid for again. Please bring your vaccination record and any earlier certificates.',
        },
      },
    },
    {
      id: 'krankenkasse',
      heading: { de: 'Zahlt die gesetzliche Krankenkasse?', en: 'Does statutory health insurance pay?' },
      body: {
        de: [
          'Reiseimpfungen gehören nicht zum gesetzlichen Leistungskatalog (§ 20i SGB V). Viele Krankenkassen erstatten sie aber freiwillig als Satzungsleistung. Umfang und Bedingungen unterscheiden sich stark:',
        ],
        en: [
          'Travel vaccinations are not part of the statutory benefits catalogue (Section 20i SGB V). Many statutory insurers nevertheless reimburse them voluntarily under their statutes. Scope and conditions vary widely:',
        ],
      },
      list: {
        de: [
          'Manche Kassen erstatten Impfstoff und Impfleistung auch nach einer Privatrechnung, andere nur bei Impfung in einer Kassenpraxis.',
          'Häufig wird nur der Impfstoff oder ein fester Betrag erstattet, die reisemedizinische Beratung meist nicht.',
          'Fast immer muss die Reise privat sein. Für Dienstreisen ist der Arbeitgeber zuständig.',
        ],
        en: [
          'Some insurers reimburse the vaccine and the vaccination even with a private invoice; others only when you are vaccinated in a statutory-insurance practice.',
          'Often only the vaccine or a fixed amount is reimbursed; the travel medicine consultation usually is not.',
          'The trip almost always has to be private. For business travel, your employer is responsible.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Diese Fragen helfen beim Anruf bei Ihrer Kasse', en: 'Questions to ask your insurer' },
        text: {
          de: 'Übernehmen Sie Reiseimpfungen für mein Reiseziel? Auch mit der Rechnung einer Privatpraxis? Erstatten Sie Impfstoff, Impfleistung und Beratung – ganz oder bis zu welchem Betrag? Welche Unterlagen brauchen Sie? Übernimmt Ihre Kasse Reiseimpfungen nur in Kassenpraxen, kann der Weg über Ihre Hausarztpraxis günstiger sein. Das sagen wir Ihnen offen.',
          en: 'Do you cover travel vaccinations for my destination? Also with an invoice from a private practice? Do you reimburse the vaccine, the vaccination and the consultation – in full or up to what amount? Which documents do you need? If your insurer only covers travel vaccinations in statutory-insurance practices, going through your GP may be cheaper. We will tell you so openly.',
        },
      },
    },
    {
      id: 'privat-beihilfe',
      heading: { de: 'Private Krankenversicherung und Beihilfe', en: 'Private health insurance and civil-service allowance' },
      body: {
        de: [
          'Ob und in welchem Umfang eine private Krankenversicherung Reiseimpfungen erstattet, regelt Ihr Tarif. Nach den Beihilfevorschriften des Bundes und vieler Länder sind Impfungen für private Auslandsreisen in der Regel nicht beihilfefähig. Bitte prüfen Sie das bei Ihrer Beihilfestelle.',
          'Von uns erhalten Sie eine aufgeschlüsselte Rechnung nach GOÄ, die Sie einreichen können.',
        ],
        en: [
          'Whether and to what extent private health insurance reimburses travel vaccinations depends on your plan. Under the allowance rules of the federal government and many German states, vaccinations for private trips abroad are generally not eligible. Please check with your allowance office (Beihilfestelle).',
          'You will receive an itemised GOÄ invoice from us that you can submit.',
        ],
      },
    },
    {
      id: 'arbeitgeber',
      heading: { de: 'Dienstreise: Meist zahlt der Arbeitgeber', en: 'Business travel: usually the employer pays' },
      body: {
        de: [
          'Bei beruflichen Reisen trägt in der Regel der Arbeitgeber die Kosten für Impfungen und Malariavorsorge – sie gehören zu seinen Pflichten im Arbeitsschutz. Mit Ihrem Einverständnis stellen wir die Rechnung direkt an Ihr Unternehmen.',
        ],
        en: [
          'For business travel, the employer usually bears the costs of vaccinations and malaria prevention as part of its occupational health and safety duties. With your consent we can invoice your company directly.',
        ],
      },
      links: [{ label: { de: 'Reisemedizin für Unternehmen', en: 'Travel medicine for companies' }, path: '/unternehmen' }],
    },
    {
      id: 'tipps',
      heading: { de: 'So behalten Sie die Kosten im Griff', en: 'How to keep costs under control' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Früh planen: Wer 6 bis 8 Wochen vor Abreise kommt, kann Impfungen bündeln und braucht seltener Schnellschemata mit zusätzlichen Dosen.',
          'Impfpass mitbringen, damit nichts doppelt geimpft wird.',
          'Mitreisende im selben Termin beraten lassen: Jede Person bekommt einen eigenen Plan, die Routenplanung fällt nur einmal an.',
          'Vorher bei der Krankenkasse oder beim Arbeitgeber nachfragen.',
        ],
        en: [
          'Plan early: if you come 6 to 8 weeks before departure, vaccinations can be combined and rapid schedules with extra doses are rarely needed.',
          'Bring your vaccination record so nothing is given twice.',
          'Have fellow travellers advised in the same appointment: everyone gets their own plan, while the route planning is done only once.',
          'Check with your health insurer or employer beforehand.',
        ],
      },
      links: [
        { label: { de: 'Wann vor der Reise impfen?', en: 'When to get vaccinated before travel?' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
        { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
      ],
    },
  ],
  faq: [
    {
      q: { de: 'Bekomme ich eine Rechnung zum Einreichen?', en: 'Will I receive an invoice to submit?' },
      a: {
        de: 'Ja. Sie erhalten eine aufgeschlüsselte Rechnung nach der Gebührenordnung für Ärzte (GOÄ), die Sie bei Ihrer Krankenkasse, Privatversicherung oder Ihrem Arbeitgeber einreichen können.',
        en: 'Yes. You receive an itemised invoice under the German medical fee schedule (GOÄ) that you can submit to your health insurer, private insurer or employer.',
      },
    },
    {
      q: { de: 'Warum kostet die Beratung extra?', en: 'Why is the consultation charged separately?' },
      a: {
        de: 'Die Beratung ist eine eigenständige ärztliche Leistung: Wir prüfen Reiseroute, Gesundheitszustand und Impfpass und erstellen einen schriftlichen Plan – auch dann, wenn am Ende keine Impfung nötig ist.',
        en: 'The consultation is a medical service in its own right: we review your route, your health and your vaccination record and draw up a written plan – even if no vaccination turns out to be necessary.',
      },
    },
    {
      q: { de: 'Ist die Reiseimpfung beim Hausarzt günstiger?', en: 'Is a travel vaccination cheaper at my GP?' },
      a: {
        de: 'Das hängt von Ihrer Krankenkasse ab. Übernimmt sie Reiseimpfungen nur in Kassenpraxen, kann der Hausarzt günstiger sein. Bei uns erhalten Sie Beratung, schriftlichen Plan und – bei FSME und Gelbfieber – die Impfung aus einer Hand.',
        en: 'That depends on your health insurer. If it only covers travel vaccinations in statutory-insurance practices, your GP may be cheaper. With us you get the consultation, a written plan and – for TBE and yellow fever – the vaccination from a single source.',
      },
    },
  ],
  sourceIds: ['sgb5Schutzimpfungen', 'goae', 'bgbKosteninformation', 'stikoReise2026'],
  lastReviewed: new Date('2026-10-18'),
  related: [
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    { label: { de: 'Reisemedizin für Unternehmen', en: 'Travel medicine for companies' }, path: '/unternehmen' },
  ],
};
