/**
 * Allgemeine Reisetipps — praktische, reisemedizinisch fundierte Hinweise
 * (DE/EN), belegt über das Quellen-Register. Sachlich und ohne Heilversprechen
 * (HWG-konform). Bewusst allgemein gehalten: Die individuelle Beratung richtet
 * sich nach Reiseziel, Reisestil und Gesundheitszustand.
 */
import type { ClinicalPage } from './types';

export const travelTipsPage: ClinicalPage = {
  meta: {
    title: { de: 'Allgemeine Reisetipps', en: 'General travel tips' },
    description: {
      de: 'Gesund reisen: praktische Tipps zu Reiseplanung und Impfschutz, Mückenschutz, sicherem Essen und Trinken, Sonne und Hitze sowie zur Rückkehr.',
      en: 'Travel healthy: practical tips on trip planning and vaccinations, mosquito protection, safe food and water, sun and heat, and returning home.',
    },
    eyebrow: { de: 'Reisetipps', en: 'Travel tips' },
    lead: {
      de: 'Wer gut vorbereitet reist, bleibt unterwegs eher gesund. Die folgenden Hinweise fassen allgemein anerkannte reisemedizinische Empfehlungen zusammen. Sie ersetzen keine persönliche Beratung – diese stimmen wir individuell auf Ihr Reiseziel und Ihre Gesundheit ab.',
      en: 'Those who travel well prepared are more likely to stay healthy on the road. The following notes summarise widely accepted travel-medicine recommendations. They do not replace personal advice – which we tailor individually to your destination and your health.',
    },
  },
  sections: [
    {
      id: 'planung',
      heading: { de: 'Frühzeitig planen', en: 'Plan ahead' },
      body: {
        de: [
          'Beginnen Sie die Reisevorbereitung möglichst vier bis sechs Wochen vor der Abreise. Viele Impfungen brauchen Vorlauf: Manche entfalten ihren Schutz erst nach einigen Tagen, andere bestehen aus mehreren Dosen über Wochen. Die Gelbfieberimpfung etwa muss spätestens zehn Tage vor der Einreise erfolgen, damit der internationale Impfnachweis gültig ist.',
          'In der reisemedizinischen Beratung schauen wir gemeinsam auf Reiseziel, Reisezeit, Reisestil und Ihren Gesundheitszustand und besprechen, welche Impfungen und Vorsorgemaßnahmen sinnvoll sind. Auch bei kurzfristigen Reisen lohnt sich die Beratung – häufig lässt sich auch dann noch etwas erreichen.',
        ],
        en: [
          'Start preparing for your trip ideally four to six weeks before departure. Many vaccinations need lead time: some only take effect after a few days, others consist of several doses spread over weeks. The yellow fever vaccination, for example, must be given at least ten days before entry for the international certificate to be valid.',
          'In the travel-medicine consultation we look together at your destination, travel season, travel style and state of health, and discuss which vaccinations and precautions make sense. Even for short-notice trips the consultation is worthwhile – there is often still something that can be done.',
        ],
      },
      list: {
        de: [
          'Impfpass heraussuchen und zur Beratung mitbringen',
          'Reiseapotheke zusammenstellen (inkl. persönlicher Medikamente in ausreichender Menge)',
          'Auslandskrankenversicherung mit Rücktransport prüfen',
          'Reise- und Sicherheitshinweise des Auswärtigen Amts zum Zielland lesen',
        ],
        en: [
          'Find your vaccination record and bring it to the consultation',
          'Put together a travel first-aid kit (including a sufficient supply of personal medication)',
          'Check that you have international health insurance covering repatriation',
          'Read the German Federal Foreign Office travel and safety information for your destination',
        ],
      },
    },
    {
      id: 'mueckenschutz',
      heading: { de: 'Schutz vor Mückenstichen', en: 'Protection against mosquito bites' },
      body: {
        de: [
          'Der Schutz vor Mückenstichen ist eine der wirksamsten Maßnahmen auf Reisen – denn er beugt zugleich mehreren Erkrankungen vor, gegen die es teils keine Impfung gibt, etwa Dengue, Chikungunya, Zika und Malaria. Tagsüber stechende Mücken übertragen Dengue, Chikungunya und Zika; die Malaria übertragenden Mücken stechen vor allem in der Dämmerung und nachts. Sinnvoll ist deshalb ein Schutz rund um die Uhr.',
          'Tragen Sie Mückenschutzmittel (Repellentien) mit bewährten Wirkstoffen wie DEET oder Icaridin auf unbedeckte Haut auf und erneuern Sie sie nach Herstellerangabe. Wird zusätzlich Sonnencreme verwendet, kommt zuerst die Sonnencreme und danach das Repellent auf die Haut. Helle, hautbedeckende Kleidung – bei Bedarf mit Insektenschutz imprägniert – sowie Moskitonetze und mückensichere oder klimatisierte Räume ergänzen den Schutz.',
        ],
        en: [
          'Protection against mosquito bites is one of the most effective measures while travelling – because it prevents several diseases at once, some of which cannot be vaccinated against, such as dengue, chikungunya, Zika and malaria. Day-biting mosquitoes transmit dengue, chikungunya and Zika; the mosquitoes that transmit malaria bite mainly at dusk and at night. Round-the-clock protection therefore makes sense.',
          'Apply insect repellents with proven active ingredients such as DEET or icaridin to exposed skin and reapply them as directed by the manufacturer. If sunscreen is also used, apply the sunscreen first and the repellent afterwards. Light, skin-covering clothing – impregnated with insecticide if needed – along with mosquito nets and mosquito-proof or air-conditioned rooms complete the protection.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'An Tag und Nacht denken', en: 'Think day and night' },
        text: {
          de: 'Mückenschutz schützt nicht nur vor lästigen Stichen, sondern ist echte Krankheitsvorbeugung – und bleibt auch dann wichtig, wenn Sie gegen eine Reisekrankheit geimpft sind.',
          en: 'Mosquito-bite protection does more than prevent annoying bites – it is genuine disease prevention, and remains important even when you are vaccinated against a travel-related illness.',
        },
      },
    },
    {
      id: 'hygiene',
      heading: { de: 'Sicher essen und trinken', en: 'Safe food and water' },
      body: {
        de: [
          'Magen-Darm-Infektionen gehören zu den häufigsten Reisebeschwerden. Vorbeugen lässt sich durch einfache Regeln: Speisen frisch gegart und durchgegart verzehren, Obst und Gemüse selbst schälen, auf rohe oder lauwarm gehaltene Speisen sowie auf Eiswürfel unbekannter Herkunft verzichten. Trinken Sie in Regionen mit unsicherer Wasserversorgung nur abgekochtes, sicher abgefülltes oder zuverlässig aufbereitetes Wasser – und nutzen Sie es auch zum Zähneputzen.',
          'Regelmäßiges, gründliches Händewaschen – bei Bedarf mit Händedesinfektionsmittel – senkt das Infektionsrisiko zusätzlich. Reisedurchfall verläuft meist mild und klingt von selbst ab; im Vordergrund steht dann, ausreichend zu trinken und den Flüssigkeits- und Salzverlust auszugleichen.',
        ],
        en: [
          'Gastrointestinal infections are among the most common travel ailments. They can be prevented with simple rules: eat food freshly and thoroughly cooked, peel fruit and vegetables yourself, and avoid raw or lukewarm-kept dishes as well as ice cubes of unknown origin. In regions with an unsafe water supply, drink only boiled, safely bottled or reliably treated water – and use it for brushing your teeth as well.',
          'Regular, thorough hand washing – with hand sanitiser when needed – further reduces the risk of infection. Travellers’ diarrhoea is usually mild and resolves on its own; the priority is then to drink enough and to replace the loss of fluid and salts.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Wann ärztlich abklären?', en: 'When to seek medical advice' },
        text: {
          de: 'Bei hohem Fieber, blutigem Durchfall, anhaltendem Erbrechen oder Anzeichen von Austrocknung – besonders bei Kindern, älteren oder vorerkrankten Menschen – sollten Sie ärztliche Hilfe in Anspruch nehmen.',
          en: 'In case of high fever, bloody diarrhoea, persistent vomiting or signs of dehydration – especially in children, older people or those with pre-existing conditions – you should seek medical help.',
        },
      },
    },
    {
      id: 'klima',
      heading: { de: 'Sonne, Hitze und Höhe', en: 'Sun, heat and altitude' },
      body: {
        de: [
          'In sonnenreichen Regionen ist konsequenter UV-Schutz wichtig: Sonnencreme mit hohem Lichtschutzfaktor, Kopfbedeckung, Sonnenbrille und Schatten in der Mittagszeit. Bei Hitze sollten Sie körperliche Anstrengung anpassen, ausreichend trinken und dem Körper Zeit zur Gewöhnung geben.',
          'Bei Reisen in große Höhen – etwa beim Bergwandern oder bei Touren in Hochgebirgsregionen – beugt eine langsame Höhenanpassung der Höhenkrankheit vor. Wenn Sie eine solche Reise planen, sprechen Sie uns gern an; Einzelheiten finden Sie auch auf unserer Seite zur Höhenmedizin.',
        ],
        en: [
          'In sunny regions, consistent UV protection is important: sunscreen with a high sun protection factor, a head covering, sunglasses and shade around midday. In hot conditions you should adjust physical exertion, drink enough and give your body time to acclimatise.',
          'For travel to high altitudes – for example mountain hiking or tours in high-mountain regions – a slow ascent helps prevent altitude sickness. If you are planning such a trip, feel free to talk to us; you will also find details on our altitude medicine page.',
        ],
      },
    },
    {
      id: 'nachsorge',
      heading: { de: 'Während und nach der Reise', en: 'During and after the trip' },
      body: {
        de: [
          'Achten Sie unterwegs auf sich und nehmen Sie Beschwerden ernst. Beschwerden können auch erst nach der Rückkehr auftreten – manche Reisekrankheiten zeigen sich Tage bis Wochen später.',
          'Suchen Sie bei Krankheitszeichen nach einer Tropenreise ärztlichen Rat und weisen Sie ausdrücklich auf Ihre Reise hin. Das gilt besonders für Fieber nach einem Aufenthalt in einem Malariagebiet: Fieber nach Tropenreise sollte immer rasch ärztlich abgeklärt werden.',
        ],
        en: [
          'Look after yourself while travelling and take symptoms seriously. Symptoms can also appear only after returning home – some travel-related illnesses show up days to weeks later.',
          'If you develop signs of illness after a trip to the tropics, seek medical advice and explicitly mention your travel. This is especially true for fever after a stay in a malaria area: fever after travelling to the tropics should always be assessed promptly by a doctor.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Fieber nach Tropenreise ernst nehmen', en: 'Take fever after tropical travel seriously' },
        text: {
          de: 'Fieber nach einer Reise in ein Malariagebiet kann auf eine Malaria hinweisen und ist ein Fall für die rasche ärztliche Abklärung – auch dann, wenn Sie eine Malaria-Vorbeugung eingenommen haben.',
          en: 'Fever after travel to a malaria area can indicate malaria and warrants prompt medical assessment – even if you took malaria prevention.',
        },
      },
    },
  ],
  sourceIds: ['stikoImpfempfehlungen', 'dtgReiseimpfungen', 'rkiMalaria', 'whoTravelHealth', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-12'),
  related: [
    {
      label: { de: 'Reiseapotheke – Checkliste', en: 'Travel first-aid kit – checklist' },
      path: '/reiseapotheke',
    },
    {
      label: { de: 'Reiseimpfungen nach Reiseziel', en: 'Travel vaccinations by destination' },
      path: '/reiseziele',
    },
    {
      label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' },
      path: '/leistungen/reiseberatung',
    },
    {
      label: { de: 'Reiseimpfungen', en: 'Travel vaccinations' },
      path: '/leistungen/reiseimpfungen',
    },
    {
      label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' },
      path: '/leistungen/malaria',
    },
  ],
};
