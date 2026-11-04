/**
 * Länderseite Dominikanische Republik (DE/EN). Inhalte nach STIKO/DTG (Epid Bull
 * 27/2026 inkl. Ländertabellen), DTG-Malaria 2026 (Ländertabelle Stand 06/2026) und
 * Auswärtigem Amt (Stand 28.10.2026). Bewusst ohne Präparatenamen (HWG);
 * Malaria-Vorbeugung nur als „vorbeugende Tabletteneinnahme" bzw. „Notfallmedikament"
 * beschrieben. Einreise- und Ausbruchslagen ändern sich – jährlich und anlassbezogen prüfen.
 */
import type { ClinicalPage } from '../../types';
import type { Source } from '../../sources';
import {
  entryRulesCallout, feverCallout, malariaLink, rabiesLink, typhoidLink, planningSection,
} from '../laenderBausteine';

/** Neue, landesspezifische Quellen – zum Einpflegen in `sources.ts`. */
export const dominikanischeRepublikQuellen = {
  aaDominikanischeRepublik: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Dominikanische Republik: Reise- und Sicherheitshinweise (Abschnitt Gesundheit)',
      en: 'Dominican Republic: travel and safety information (health section)',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/dominikanischerepublik-node/dominikanischerepubliksicherheit-206146',
    retrieved: new Date('2026-10-28'),
  },
} satisfies Record<string, Source>;

const dengueLink = { label: { de: 'Dengue', en: 'Dengue' }, path: '/krankheitsbilder/dengue' };
const chikungunyaLink = { label: { de: 'Chikungunya', en: 'Chikungunya' }, path: '/krankheitsbilder/chikungunya' };

export const dominikanischeRepublik: ClinicalPage = {
  meta: {
    title: { de: 'Impfungen für die Dominikanische Republik', en: 'Travel vaccinations for the Dominican Republic' },
    description: {
      de: 'Dominikanische Republik: empfohlene Impfungen, geringes Malariarisiko in Punta Cana & Co. nach DTG 2026, Dengue und Mückenschutz – reisemedizinische Beratung in Langenfeld.',
      en: 'Dominican Republic: recommended vaccinations, low malaria risk in Punta Cana and other resorts per DTG 2026, dengue and mosquito protection – travel clinic in Langenfeld.',
    },
    eyebrow: { de: 'Reiseziel Karibik', en: 'Destination Caribbean' },
    lead: {
      de: 'Ob Badeurlaub in Punta Cana, Puerto Plata oder auf Samaná oder eine Rundreise über die Insel: Für die Dominikanische Republik genügt meist ein solider Grundschutz – Mückenschutz bleibt trotzdem wichtig. Hier finden Sie die Empfehlungen von STIKO und DTG (Stand Oktober 2026).',
      en: 'Whether a beach holiday in Punta Cana, Puerto Plata or on Samaná or a tour of the island: for the Dominican Republic, solid basic protection is usually enough – but mosquito protection remains important. Here are the STIKO and DTG recommendations (as of October 2026).',
    },
  },
  sections: [
    {
      id: 'einreise',
      heading: { de: 'Einreise: Gelbfieber-Nachweis', en: 'Entry: yellow fever certificate' },
      body: {
        de: [
          'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Nach den Ländertabellen von STIKO und DTG verlangt die Dominikanische Republik einen Nachweis ab einem Alter von einem Jahr nur von Reisenden, die aus den brasilianischen Bundesstaaten Minas Gerais, Espírito Santo, São Paulo oder Rio de Janeiro einreisen oder dort mehr als zwölf Stunden im Transit waren.',
          'Das Auswärtige Amt formuliert allgemeiner: Nachweis bei Einreise aus einem Gelbfieber-Gebiet. Wer vorher in Südamerika unterwegs war, sollte das deshalb vor der Reise klären.',
          'In der Dominikanischen Republik selbst wird Gelbfieber nicht übertragen; eine Impfung zum eigenen Schutz ist nicht nötig.',
        ],
        en: [
          'No vaccination is required when entering directly from Germany. According to the STIKO and DTG country tables, the Dominican Republic requires proof from one year of age only from travellers arriving from the Brazilian states of Minas Gerais, Espírito Santo, São Paulo or Rio de Janeiro, or who spent more than twelve hours in transit there.',
          'The German Federal Foreign Office words this more broadly: proof is required when arriving from a yellow fever area. If you have been travelling in South America beforehand, clarify this before the trip.',
          'Yellow fever is not transmitted in the Dominican Republic itself, so vaccination for your own protection is not needed.',
        ],
      },
      callout: entryRulesCallout,
    },
    {
      id: 'impfungen',
      heading: { de: 'Empfohlene Impfungen', en: 'Recommended vaccinations' },
      body: {
        de: ['Für alle Reisenden empfehlen STIKO und DTG aktuelle Standardimpfungen und die Impfung gegen Hepatitis A. Je nach Reise kommen weitere hinzu:'],
        en: ['For all travellers, STIKO and DTG recommend up-to-date routine vaccinations and vaccination against hepatitis A. Depending on the trip, others are added:'],
      },
      list: {
        de: [
          'Standardimpfungen prüfen und auffrischen, insbesondere Diphtherie, Tetanus, Keuchhusten und Masern. Laut Auswärtigem Amt sind im Land Diphtherie-Fälle bei Kindern aufgetreten, auch mit Todesfällen.',
          'Hepatitis A: für alle Reisenden.',
          'Typhus: bei einfachen Reisebedingungen, längeren Aufenthalten oder Besuchen bei Familie und Freunden.',
          'Hepatitis B: nach individueller Einschätzung, etwa bei längeren Aufenthalten, medizinischen Eingriffen, Tattoos oder Piercings oder neuen Sexualkontakten.',
          'Tollwut: STIKO und DTG stufen das Land als weitgehend frei von Tollwut bei Hunden ein; eine vorbeugende Impfung wird nicht routinemäßig empfohlen. Laut Auswärtigem Amt kommen aber einzelne Fälle vor, meist übertragen durch Hunde, Katzen oder Fledermäuse. Bei Langzeitaufenthalten, absehbarem Umgang mit Tieren oder Höhlentouren mit Fledermäusen besprechen wir die Impfung individuell.',
          'Dengue: Impfung nur für Personen ab vier Jahren, die bereits eine im Labor nachgewiesene Dengue-Infektion hatten und vor Ort ein erhöhtes Ansteckungsrisiko haben, etwa bei längeren Aufenthalten.',
          'Chikungunya: Impfung ab zwölf Jahren bei aktuellen Ausbrüchen oder bei längeren beziehungsweise wiederholten Aufenthalten, wenn ein erhöhtes Risiko für schwere oder chronische Verläufe besteht – etwa ab 60 Jahren oder bei schweren Grunderkrankungen.',
        ],
        en: [
          'Check and boost routine vaccinations, especially diphtheria, tetanus, whooping cough and measles. According to the German Federal Foreign Office, diphtheria cases have occurred in children in the country, including deaths.',
          'Hepatitis A: for all travellers.',
          'Typhoid: for basic travel conditions, longer stays or visits to family and friends.',
          'Hepatitis B: based on individual assessment, for example for longer stays, medical procedures, tattoos or piercings, or new sexual contacts.',
          'Rabies: STIKO and DTG classify the country as largely free of rabies in dogs; pre-exposure vaccination is not routinely recommended. According to the German Federal Foreign Office, however, individual cases do occur, mostly transmitted by dogs, cats or bats. For long-term stays, foreseeable contact with animals or cave tours with bats, we discuss vaccination individually.',
          'Dengue: vaccination only for people aged four and over who have had a laboratory-confirmed dengue infection and face an increased risk of infection locally, for example during longer stays.',
          'Chikungunya: vaccination from twelve years of age during current outbreaks, or for longer or repeated stays if there is an increased risk of a severe or chronic course – for example from age 60 or with serious underlying conditions.',
        ],
      },
      links: [{ label: { de: 'Hepatitis A', en: 'Hepatitis A' }, path: '/krankheitsbilder/hepatitis-a' }, typhoidLink, dengueLink, chikungunyaLink],
    },
    {
      id: 'malaria',
      heading: { de: 'Malaria', en: 'Malaria' },
      body: {
        de: ['Neben Haiti ist die Dominikanische Republik das einzige Land der Karibik mit Malaria. Fast alle Infektionen sind Malaria tropica, die gefährlichste Form. In den Urlaubsregionen ist das Risiko nach den DTG-Empfehlungen 2026 jedoch gering:'],
        en: ['Apart from Haiti, the Dominican Republic is the only country in the Caribbean with malaria. Almost all infections are falciparum malaria, the most dangerous form. According to the DTG recommendations 2026, however, the risk in the holiday regions is low:'],
      },
      list: {
        de: [
          'Geringes Risiko ganzjährig im größten Teil des Landes, auch in den Städten und Touristenorten wie Punta Cana, Bávaro, La Romana, Puerto Plata, Samaná und Santo Domingo – die DTG empfiehlt konsequenten Mückenschutz, aber keine vorbeugende Tabletteneinnahme.',
          'Mittleres Risiko ganzjährig in den Provinzen Azua, Elías Piña und San Juan im Westen und Südwesten – Mückenschutz. Ist von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar, kann nach ärztlicher Beratung ein Notfallmedikament zur Selbstbehandlung mitgeführt werden. Schwangeren empfiehlt die DTG auch hier eine vorbeugende Tabletteneinnahme.',
          'Mückenschutz rund um die Uhr: Malaria-Mücken stechen vor allem abends und nachts, die Überträger von Dengue, Chikungunya und Zika tagsüber.',
        ],
        en: [
          'Low risk all year round in most of the country, including cities and resorts such as Punta Cana, Bávaro, La Romana, Puerto Plata, Samaná and Santo Domingo – DTG recommends consistent mosquito protection but no preventive tablets.',
          'Moderate risk all year round in the provinces of Azua, Elías Piña and San Juan in the west and south-west – mosquito protection. If medical malaria testing cannot be reached from there within 48 hours, an emergency standby treatment can be carried after medical advice. For pregnant women, DTG recommends preventive tablets here as well.',
          'Mosquito protection around the clock: malaria mosquitoes bite mainly in the evening and at night, while the mosquitoes that transmit dengue, chikungunya and Zika bite during the day.',
        ],
      },
      callout: feverCallout,
      links: [malariaLink],
    },
    {
      id: 'risiken',
      heading: { de: 'Weitere Gesundheitsrisiken', en: 'Other health risks' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Dengue landesweit, übertragen durch tagaktive Mücken; Erkrankungen betreffen zunehmend auch Reisende. Mückenschutz deshalb auch tagsüber.',
          'Chikungunya kommt ebenfalls vor; Gelenk- und Muskelschmerzen können lange anhalten.',
          'Zika kann in der Schwangerschaft das Kind schädigen und auch sexuell übertragen werden. Schwangere und Paare mit Kinderwunsch sollten sich vor der Reise ärztlich beraten lassen.',
          'Reisedurchfall, Hepatitis A und Typhus: auf Trinkwasser- und Lebensmittelhygiene achten. Eine Cholera-Impfung ist für Urlaubsreisende in der Regel nicht nötig.',
          'Ciguatera: Vor allem von April bis September können Fische Algengifte enthalten, die schwere Vergiftungen auslösen – man sieht und schmeckt es ihnen nicht an. Lokale Warnungen beachten.',
          'Tollwut: Kontakt zu Hunden, Katzen und Fledermäusen meiden. Nach einem Biss oder Kratzer die Wunde sofort mindestens 15 Minuten mit Seife und Wasser auswaschen und noch am selben Tag ärztliche Hilfe suchen – auch wenn Sie geimpft sind.',
          'HIV und andere sexuell übertragbare Infektionen: Kondome verwenden.',
        ],
        en: [
          'Dengue throughout the country, transmitted by day-biting mosquitoes; travellers are increasingly affected. Use mosquito protection during the day as well.',
          'Chikungunya also occurs; joint and muscle pain can persist for a long time.',
          'Zika can harm the unborn child during pregnancy and can also be transmitted sexually. Pregnant women and couples planning a pregnancy should seek medical advice before the trip.',
          "Travellers' diarrhoea, hepatitis A and typhoid: pay attention to drinking water and food hygiene. Cholera vaccination is usually not needed for holidaymakers.",
          'Ciguatera: especially from April to September, fish can contain algal toxins that cause severe poisoning – you cannot see or taste this. Follow local warnings.',
          'Rabies: avoid contact with dogs, cats and bats. After a bite or scratch, wash the wound immediately with soap and water for at least 15 minutes and seek medical help the same day – even if you are vaccinated.',
          'HIV and other sexually transmitted infections: use condoms.',
        ],
      },
      links: [dengueLink, chikungunyaLink, rabiesLink],
    },
    {
      id: 'tipps',
      heading: { de: 'Reisetipps', en: 'Travel tips' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Auslandskrankenversicherung mit Rücktransport ist unverzichtbar: Es gibt kein Sozialversicherungsabkommen mit Deutschland, Behandlungen sind teurer als hier und müssen meist vorab bezahlt werden. Private Kliniken verlangen oft eine verbindliche Kostenübernahme der Versicherung.',
          'Planbare medizinische Eingriffe empfiehlt das Auswärtige Amt grundsätzlich in Deutschland durchführen zu lassen.',
          'Mückenschutz einpacken: Mückenschutzmittel, helle lange Kleidung und gegebenenfalls ein Moskitonetz; Klimaanlage und Fliegengitter helfen zusätzlich.',
          'Sonnenschutz mit hohem Lichtschutzfaktor und ausreichend trinken – besonders bei Ausflügen in der Mittagshitze.',
          'Reiseapotheke mitnehmen und unterwegs vor hohen Temperaturen schützen.',
        ],
        en: [
          'Travel health insurance that covers repatriation is essential: there is no social security agreement with Germany, treatment costs more than at home and usually has to be paid in advance. Private hospitals often require a binding guarantee of payment from your insurer.',
          'The German Federal Foreign Office advises having planned medical procedures carried out in Germany.',
          'Pack mosquito protection: repellent, light-coloured long clothing and, if needed, a mosquito net; air conditioning and window screens also help.',
          'High-SPF sun protection and plenty to drink – especially on excursions in the midday heat.',
          'Bring a travel first-aid kit and protect it from high temperatures on the way.',
        ],
      },
      links: [
        { label: { de: 'Allgemeine Reisetipps', en: 'General travel tips' }, path: '/reisetipps' },
        { label: { de: 'Reiseapotheke – Checkliste', en: 'Travel first-aid kit – checklist' }, path: '/reiseapotheke' },
      ],
    },
    planningSection(),
  ],
  faq: [
    {
      q: { de: 'Brauche ich für Punta Cana Malaria-Tabletten?', en: 'Do I need malaria tablets for Punta Cana?' },
      a: {
        de: 'Nein. Nach den DTG-Empfehlungen 2026 ist das Malariarisiko in Punta Cana und den anderen Touristenorten gering; empfohlen wird konsequenter Mückenschutz – tagsüber auch wegen Dengue. Für die Provinzen Azua, Elías Piña und San Juan im Westen gelten andere Hinweise, die wir in der Beratung klären.',
        en: 'No. According to the DTG recommendations 2026, the malaria risk in Punta Cana and the other resorts is low; consistent mosquito protection is recommended – during the day as well, because of dengue. Different advice applies to the provinces of Azua, Elías Piña and San Juan in the west, which we clarify in the consultation.',
      },
    },
    {
      q: { de: 'Welche Impfungen brauche ich für die Dominikanische Republik?', en: 'Which vaccinations do I need for the Dominican Republic?' },
      a: {
        de: 'Bei direkter Einreise aus Deutschland ist keine Impfung vorgeschrieben. Empfohlen sind aktuelle Standardimpfungen – besonders Diphtherie und Masern – und Hepatitis A. Typhus, Hepatitis B oder Tollwut besprechen wir je nach Reisestil, Dauer und geplanten Aktivitäten.',
        en: 'No vaccination is required when entering directly from Germany. Up-to-date routine vaccinations – especially diphtheria and measles – and hepatitis A are recommended. We discuss typhoid, hepatitis B or rabies depending on travel style, duration and planned activities.',
      },
    },
    {
      q: { de: 'Gibt es eine Impfung gegen Dengue?', en: 'Is there a vaccine against dengue?' },
      a: {
        de: 'Ja, die STIKO empfiehlt sie aber nur Personen ab vier Jahren, die bereits eine im Labor nachgewiesene Dengue-Infektion hatten und ein erhöhtes Ansteckungsrisiko haben. Für alle anderen bleibt konsequenter Mückenschutz am Tag die wichtigste Vorbeugung.',
        en: 'Yes, but STIKO recommends it only for people aged four and over who have had a laboratory-confirmed dengue infection and face an increased risk of infection. For everyone else, consistent daytime mosquito protection remains the most important prevention.',
      },
    },
  ],
  sourceIds: [
    'stikoReise2026', 'stikoReiseLaender2026', 'dtgMalariaLaender2026', 'dtgMalaria2026',
    'aaDominikanischeRepublik', 'whoYellowFeverCountries',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Lateinamerika & Karibik', en: 'Latin America & Caribbean' }, path: '/reiseziele/lateinamerika' },
    dengueLink,
  ],
};
