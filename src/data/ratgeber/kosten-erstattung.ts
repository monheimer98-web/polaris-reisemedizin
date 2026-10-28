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
      de: 'Impfungen für private Reisen sind in der Regel keine Pflichtleistung der gesetzlichen Krankenkassen. Hier erfahren Sie, wie sich die Kosten in unserer Privatpraxis zusammensetzen, was Impfstoffe kosten und wann Sie Geld zurückbekommen können.',
      en: 'Vaccinations for private trips are generally not a mandatory benefit of statutory health insurance. Here you can read how the costs at our private practice are made up, what vaccines cost and when you may be reimbursed.',
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
          'Impfstoff: Vorrätige Impfstoffe (häufig benötigte Reiseimpfstoffe, FSME, Gelbfieber) berechnen wir als Auslage zum tatsächlichen Bezugspreis (§ 10 GOÄ). Seltener benötigte Impfstoffe bezahlen Sie per Privatrezept direkt in der Apotheke.',
        ],
        en: [
          'Medical consultation: we review your route, your health and your vaccination record, and you receive a written vaccination and travel plan.',
          'Vaccination: informed consent, injection and entry in your vaccination certificate – per appointment and per vaccination.',
          'Vaccine: vaccines in stock (commonly needed travel vaccines, TBE, yellow fever) we charge as a disbursement at the actual purchase price (Section 10 GOÄ). Less commonly needed vaccines you pay for directly at the pharmacy via private prescription.',
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
          'Der größte Posten ist oft der Impfstoff. Die Apothekenpreise reichen je nach Impfstoff von rund 30 Euro bis über 100 Euro pro Dosis, und manche Impfungen brauchen zwei oder drei Dosen. In der Apotheke kostet der Gelbfieber-Impfstoff derzeit rund 72 Euro (Stand: Oktober 2026); bei uns wird er zum tatsächlichen Bezugspreis berechnet.',
          'Wir planen nur die Impfungen, die für Ihre Reise sinnvoll sind, und sagen Ihnen auch, worauf Sie verzichten können.',
        ],
        en: [
          'The largest item is often the vaccine. Depending on the vaccine, pharmacy prices range from around 30 euros to over 100 euros per dose, and some vaccinations need two or three doses. At the pharmacy the yellow fever vaccine currently costs around 72 euros (as of October 2026); we charge it at the actual purchase price.',
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
          'Für Impfungen, die nur wegen einer privaten Reise nötig sind, besteht in der gesetzlichen Krankenversicherung kein Anspruch (§ 20i SGB V); eine Ausnahme ist die Polio-Impfung. Anders bei beruflich oder durch eine Ausbildung bedingten Auslandsaufenthalten: Dann sind die von der STIKO empfohlenen Reiseimpfungen eine Kassenleistung – allerdings in einer Kassenpraxis, nicht in unserer Privatpraxis. Für private Reisen erstatten viele Krankenkassen Reiseimpfungen freiwillig als Satzungsleistung. Umfang und Bedingungen unterscheiden sich stark:',
        ],
        en: [
          'Vaccinations needed only because of a private trip are not covered by statutory health insurance (Section 20i SGB V); polio vaccination is an exception. Stays abroad for work or training are different: travel vaccinations recommended by STIKO are then a statutory benefit – but in a statutory-insurance practice, not in our private practice. For private trips, many statutory insurers reimburse travel vaccinations voluntarily under their statutes. Scope and conditions vary widely:',
        ],
      },
      list: {
        de: [
          'Manche Kassen erstatten Impfstoff und Impfleistung auch nach einer Privatrechnung, andere nur bei Impfung in einer Kassenpraxis.',
          'Häufig wird nur der Impfstoff oder ein fester Betrag erstattet, die reisemedizinische Beratung meist nicht.',
          'Satzungsleistungen gelten fast immer nur für private Reisen. Bei Dienstreisen zahlt in der Regel der Arbeitgeber; gesetzlich Versicherte können beruflich oder ausbildungsbedingt nötige Reiseimpfungen alternativ in einer Kassenpraxis erhalten (bei Ausbildung mit Bestätigung der Ausbildungsstätte).',
        ],
        en: [
          'Some insurers reimburse the vaccine and the vaccination even with a private invoice; others only when you are vaccinated in a statutory-insurance practice.',
          'Often only the vaccine or a fixed amount is reimbursed; the travel medicine consultation usually is not.',
          'Voluntary statutory benefits almost always apply only to private trips. For business travel the employer usually pays; people with statutory insurance can alternatively receive travel vaccinations needed for work or training in a statutory-insurance practice (for training, with confirmation from the place of study or training).',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Diese Fragen helfen beim Anruf bei Ihrer Kasse', en: 'Questions to ask your insurer' },
        text: {
          de: 'Übernehmen Sie Reiseimpfungen für mein Reiseziel? Auch mit der Rechnung einer Privatpraxis? Erstatten Sie Impfstoff, Impfleistung und Beratung – ganz oder bis zu welchem Betrag? Welche Unterlagen brauchen Sie? Übernimmt Ihre Kasse Reiseimpfungen nur in Kassenpraxen, kann der Weg über Ihre Hausarztpraxis günstiger sein. Darauf weisen wir Sie vor der Behandlung hin.',
          en: 'Do you cover travel vaccinations for my destination? Also with an invoice from a private practice? Do you reimburse the vaccine, the vaccination and the consultation – in full or up to what amount? Which documents do you need? If your insurer only covers travel vaccinations in statutory-insurance practices, going through your GP may be cheaper. We will point this out to you before treatment.',
        },
      },
    },
    {
      id: 'privat-beihilfe',
      heading: { de: 'Private Krankenversicherung und Beihilfe', en: 'Private health insurance and civil-service allowance' },
      body: {
        de: [
          'Ob und in welchem Umfang eine private Krankenversicherung Reiseimpfungen erstattet, regelt Ihr Tarif. Bei der Beihilfe kommt es auf Ihren Dienstherrn an: Nach den Beihilfevorschriften des Landes NRW sind Schutzimpfungen auch aus Anlass privater Auslandsaufenthalte grundsätzlich beihilfefähig. Beim Bund sind Impfungen für private Auslandsreisen dagegen grundsätzlich nicht beihilfefähig – ausgenommen FSME- und Grippeimpfungen. Andere Länder regeln es unterschiedlich. Bitte klären Sie die Einzelheiten mit Ihrer Beihilfestelle.',
          'Von uns erhalten Sie eine aufgeschlüsselte Rechnung nach GOÄ, die Sie einreichen können.',
        ],
        en: [
          'Whether and to what extent private health insurance reimburses travel vaccinations depends on your plan. For the civil-service allowance (Beihilfe) it depends on your employer: under the North Rhine-Westphalia allowance rules, vaccinations for private stays abroad are generally eligible. Under the federal rules, by contrast, vaccinations for private trips abroad are generally not eligible – except TBE and flu vaccinations. Other German states have different rules. Please check the details with your allowance office (Beihilfestelle).',
          'You will receive an itemised GOÄ invoice from us that you can submit.',
        ],
      },
    },
    {
      id: 'arbeitgeber',
      heading: { de: 'Dienstreise: Meist zahlt der Arbeitgeber', en: 'Business travel: usually the employer pays' },
      body: {
        de: [
          'Bei beruflichen Reisen mit erhöhtem Infektionsrisiko muss der Arbeitgeber die nötigen Impfungen ermöglichen und trägt in der Regel die Kosten für Impfungen und Malariavorsorge – das gehört zum Arbeitsschutz. Gesetzlich Versicherte können beruflich bedingte Reiseimpfungen alternativ in einer Kassenpraxis über ihre Krankenkasse erhalten. Übernimmt Ihr Arbeitgeber die Kosten, rechnen wir auf Wunsch direkt mit ihm ab – dafür brauchen wir Ihre schriftliche Einwilligung.',
        ],
        en: [
          'For business travel with an increased risk of infection, the employer must make the necessary vaccinations available and usually bears the costs of vaccinations and malaria prevention – this is part of occupational health and safety. People with statutory insurance can alternatively receive work-related travel vaccinations through their health insurer in a statutory-insurance practice. If your employer covers the costs, we can invoice them directly on request – for this we need your written consent.',
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
          'Mitreisende im selben Termin beraten lassen: Jede Person bekommt einen eigenen Plan und eine eigene Rechnung; berechnet wird nur der Aufwand, der bei ihr tatsächlich anfällt.',
          'Vorher bei der Krankenkasse oder beim Arbeitgeber nachfragen.',
        ],
        en: [
          'Plan early: if you come 6 to 8 weeks before departure, vaccinations can be combined and rapid schedules with extra doses are rarely needed.',
          'Bring your vaccination record so nothing is given twice.',
          'Have fellow travellers advised in the same appointment: everyone gets their own plan and their own invoice, charged only for the time and effort actually spent on them.',
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
        de: 'Für gesetzlich Versicherte oft ja: Standard- und Auffrischimpfungen (etwa Tetanus, Diphtherie, Keuchhusten, Polio, Masern) sowie beruflich oder ausbildungsbedingt nötige Reiseimpfungen sind in Kassenpraxen eine Kassenleistung, bei uns als Privatpraxis dagegen nicht. Viele Krankenkassen übernehmen auch private Reiseimpfungen nur in Kassenpraxen vollständig. Bei uns erhalten Sie Beratung, schriftlichen Plan und – bei FSME und Gelbfieber – die Impfung in einem Termin.',
        en: 'For people with statutory insurance, often yes: standard vaccinations and boosters (such as tetanus, diphtheria, whooping cough, polio and measles) as well as travel vaccinations needed for work or training are covered in statutory-insurance practices, but not with us as a private practice. Many insurers also cover private travel vaccinations in full only in statutory-insurance practices. With us you get the consultation, a written plan and – for TBE and yellow fever – the vaccination in one appointment.',
      },
    },
  ],
  sourceIds: ['sgb5Schutzimpfungen', 'gbaSchutzimpfungsRichtlinie', 'lbvNrwBeihilfe', 'bbhvImpfungen', 'arbmedvvImpfangebot', 'goae', 'bgbKosteninformation', 'stikoReise2026'],
  lastReviewed: new Date('2026-10-18'),
  related: [
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    { label: { de: 'Reisemedizin für Unternehmen', en: 'Travel medicine for companies' }, path: '/unternehmen' },
  ],
};
