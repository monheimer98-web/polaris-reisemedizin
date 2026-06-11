/**
 * Ablauf der reisemedizinischen Beratung — Vorbereitung, Sprechstunde,
 * Zeitplanung und Dokumentation. Modell = ClinicalPage (zitiert, identisch
 * DE/EN), da die Seite belegpflichtige Aussagen trifft (Zehn-Tage-Regel,
 * ICVP-Gültigkeit, Impfschemata).
 */
import type { ClinicalPage } from './types';

export const processPage: ClinicalPage = {
  meta: {
    title: {
      de: 'Ablauf der Beratung',
      en: 'How the consultation works',
    },
    description: {
      de: 'So läuft Ihre reisemedizinische Beratung ab: Vorbereitung, Sprechstunde, Impfung, Dokumentation und die richtige Zeitplanung – inklusive der Zehn-Tage-Regel bei der Gelbfieberimpfung.',
      en: 'How your travel-medicine consultation works: preparation, the appointment, vaccination, documentation and the right timing – including the ten-day rule for yellow fever vaccination.',
    },
    eyebrow: {
      de: 'Reisemedizinische Beratung',
      en: 'Travel-medicine consultation',
    },
    lead: {
      de: 'Eine gute Reiseimpfberatung beginnt vor dem Termin und endet mit einem sauber dokumentierten Impfschutz. Hier erfahren Sie, wie Sie sich vorbereiten, was Sie in der Sprechstunde erwartet und warum der zeitliche Vorlauf entscheidend ist.',
      en: 'Good travel-vaccination advice starts before the appointment and ends with properly documented protection. Here you can see how to prepare, what to expect during the consultation and why allowing enough time matters.',
    },
  },
  sections: [
    {
      id: 'ueberblick',
      heading: { de: 'Was Sie erwartet', en: 'What to expect' },
      body: {
        de: [
          'Im Mittelpunkt steht Ihre konkrete Reise. Wir bewerten das gesundheitliche Risiko anhand aktueller, offizieller Quellen, besprechen sinnvolle und gegebenenfalls vorgeschriebene Impfungen und führen diese – soweit angezeigt – direkt in der Praxis durch. Den Abschluss bildet die ordnungsgemäße Dokumentation Ihres Impfschutzes.',
        ],
        en: [
          'Your specific trip is the focus. We assess the health risk using current official sources, discuss advisable and any legally required vaccinations and – where indicated – administer them directly at the practice. Finally, we document your vaccination protection properly.',
        ],
      },
      list: {
        de: [
          'Individuelle Risikobewertung für Ihr Reiseziel',
          'Persönliche Impfempfehlung und Aufklärung',
          'Durchführung der Impfung, sofern angezeigt',
          'Dokumentation im Impfausweis bzw. internationalen Impfnachweis',
        ],
        en: [
          'Individual risk assessment for your destination',
          'Personal vaccination recommendation and consultation',
          'Administration of the vaccination where indicated',
          'Documentation in your vaccination certificate or international certificate',
        ],
      },
    },
    {
      id: 'vorbereitung',
      heading: { de: 'Vor dem Termin: gut vorbereitet', en: 'Before your appointment: well prepared' },
      body: {
        de: [
          'Je genauer wir Ihre Reise und Ihre gesundheitliche Situation kennen, desto präziser fällt die Empfehlung aus. Bringen Sie deshalb bitte Ihren Impfausweis mit – und, falls vorhanden, frühere internationale Impfnachweise.',
          'Hilfreich sind außerdem Angaben zu Reiseroute, Reisezeitraum, Unterkunft und geplanten Aktivitäten sowie zu bestehenden Erkrankungen, regelmäßigen Medikamenten, Allergien und einer möglichen Schwangerschaft.',
        ],
        en: [
          'The more precisely we know your trip and your state of health, the more accurate our recommendation. Please bring your vaccination certificate – and any earlier international certificates you may have.',
          'It also helps to have details of your route, travel dates, accommodation and planned activities, as well as any existing conditions, regular medication, allergies and a possible pregnancy.',
        ],
      },
      list: {
        de: [
          'Impfausweis und ggf. internationaler Impfnachweis',
          'Reiseziel(e), Route, Reisezeitraum und Aufenthaltsdauer',
          'Geplante Aktivitäten und Art der Unterkunft',
          'Vorerkrankungen, Medikamente, Allergien, mögliche Schwangerschaft',
        ],
        en: [
          'Vaccination certificate and any international certificate',
          'Destination(s), route, travel dates and length of stay',
          'Planned activities and type of accommodation',
          'Pre-existing conditions, medication, allergies, possible pregnancy',
        ],
      },
    },
    {
      id: 'sprechstunde',
      heading: { de: 'In der Sprechstunde', en: 'During the consultation' },
      body: {
        de: [
          'Wir gleichen Ihre Reisedaten mit den aktuellen Empfehlungen ab – etwa von RKI/STIKO, WHO und dem Auswärtigen Amt – und unterscheiden dabei klar zwischen medizinisch empfohlenen und zur Einreise rechtlich vorgeschriebenen Impfungen.',
          'Sie erhalten eine verständliche Aufklärung zu Nutzen, möglichen Nebenwirkungen und Gegenanzeigen sowie einen persönlichen, schriftlichen Impf- und Reiseplan. Diesen Plan bekommen Sie unabhängig davon, ob Sie sich anschließend impfen lassen.',
        ],
        en: [
          'We compare your travel details with current recommendations – for example from the RKI/STIKO, the WHO and the Federal Foreign Office – clearly distinguishing between medically recommended vaccinations and those legally required for entry.',
          'You receive clear information on the benefits, possible side effects and contraindications, as well as a personal written vaccination and travel plan. You receive this plan regardless of whether you decide to be vaccinated afterwards.',
        ],
      },
    },
    {
      id: 'termine',
      heading: { de: 'Beratung und Impfung – oft zwei Schritte', en: 'Consultation and vaccination – often two steps' },
      body: {
        de: [
          'Am Anfang steht die ausführliche Beratung mit der Feststellung Ihrer Impftauglichkeit und dem schriftlichen Impf- und Reiseplan. Sie bildet die Grundlage für alle weiteren Schritte.',
          'Notwendige Impfungen führen wir – wenn der passende Impfstoff vorliegt und nichts dagegenspricht – direkt durch. Häufig sind jedoch ein oder mehrere gesonderte Impftermine sinnvoll: etwa bei mehrteiligen Impfschemata oder wenn wir den Impfstoff eigens für Sie bestellen. So erhalten Sie stets frische Ware und genau die Impfung, die Sie brauchen.',
        ],
        en: [
          'It all starts with the in-depth consultation, including the assessment of your fitness for vaccination and the written vaccination and travel plan. This forms the basis for every further step.',
          'We administer necessary vaccinations directly where the right vaccine is available and nothing speaks against it. Often, however, one or more separate vaccination appointments make sense – for example with multi-dose schedules or when we order the vaccine specifically for you. This way you always receive fresh product and exactly the vaccination you need.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Warum getrennte Termine?', en: 'Why separate appointments?' },
        text: {
          de: 'Wir halten keine großen Impfstoffvorräte vorrätig, sondern bestellen gezielt für Sie. Das bedeutet manchmal einen zweiten Termin – dafür erhalten Sie frische, individuell ausgewählte Impfstoffe.',
          en: 'We do not keep large vaccine stocks but order specifically for you. Sometimes that means a second appointment – in return you receive fresh, individually selected vaccines.',
        },
      },
    },
    {
      id: 'timing',
      heading: { de: 'Zeitlich richtig planen', en: 'Plan with enough time' },
      body: {
        de: [
          'Reiseimpfungen brauchen Vorlauf. Manche Impfschemata bestehen aus mehreren Dosen über Wochen – etwa die FSME-Grundimmunisierung – und ein Impfschutz baut sich nicht sofort auf. Vereinbaren Sie Ihren Termin daher möglichst frühzeitig, idealerweise einige Wochen vor Abreise.',
          'Besonders wichtig ist die Zehn-Tage-Regel bei der Gelbfieberimpfung: Der internationale Impfnachweis (ICVP) wird erst ab dem zehnten Tag nach der Impfung gültig.',
        ],
        en: [
          'Travel vaccinations need lead time. Some schedules consist of several doses over weeks – for example the primary TBE immunisation – and protection does not build up immediately. So arrange your appointment as early as possible, ideally several weeks before departure.',
          'The ten-day rule for yellow fever vaccination is particularly important: the international certificate (ICVP) only becomes valid from the tenth day after vaccination.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Mindestens zehn Tage vor Abreise', en: 'At least ten days before departure' },
        text: {
          de: 'Der Gelbfieber-Impfnachweis (ICVP) gilt erst ab dem 10. Tag nach der Impfung. Planen Sie den Termin entsprechend – bei mehrteiligen Impfschemata noch früher.',
          en: 'The yellow fever certificate (ICVP) is only valid from day 10 after vaccination. Plan your appointment accordingly – and even earlier for multi-dose schedules.',
        },
      },
    },
    {
      id: 'nachweis',
      heading: { de: 'Impfnachweis und Dokumentation', en: 'Certificate and documentation' },
      body: {
        de: [
          'Jede Impfung wird in Ihrem Impfausweis dokumentiert. Für Gelbfieber stellen wir zusätzlich den internationalen Impfnachweis (ICVP) aus, der bei der Einreise in bestimmte Länder verlangt wird. Seit der Änderung der Internationalen Gesundheitsvorschriften 2016 gilt dieser Nachweis lebenslang.',
          'Bewahren Sie Ihre Nachweise gut auf und bringen Sie sie zu Folgeterminen und weiteren Reisen wieder mit.',
        ],
        en: [
          'Every vaccination is recorded in your vaccination certificate. For yellow fever we additionally issue the international certificate (ICVP), which is required for entry to certain countries. Since the 2016 amendment to the International Health Regulations, this certificate is valid for life.',
          'Keep your certificates safe and bring them again to follow-up appointments and future trips.',
        ],
      },
    },
  ],
  sourceIds: ['whoPositionPaper', 'dtgReiseimpfungen', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-04'),
  related: [
    { label: { de: 'Reisemedizinische Beratung', en: 'Travel-medicine consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' },
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
  ],
};
