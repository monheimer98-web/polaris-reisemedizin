/**
 * Ratgeber „Malaria-Tabletten: Rezept, Beratung, Kosten" (DE/EN), Slug
 * `malaria-tabletten-rezept`. Fachlich nach den DTG-Empfehlungen zur
 * Malariaprävention 2026 (Flug u Reisemed 2026; 33: 165–203, inkl.
 * Ländertabelle Stand 06/2026); Stand 28.10.2026. Beratungs-Richtwerte wie in
 * `kosten.ts` (Link auf /kosten). Bewusst ohne Präparate- und Wirkstoffnamen
 * (HWG, verschreibungspflichtige Arzneimittel); Vorbeugung als „vorbeugende
 * Tabletteneinnahme" beschrieben, ohne Dosierungen und ohne Heilversprechen.
 */
import type { ClinicalPage, Localized } from '../types';
import type { Source } from '../sources';

/** Neue Quellen dieses Ratgebers – zum Einpflegen in `sources.ts`. */
export const malariaRezeptQuellen = {
  amvvVerschreibungspflicht: {
    publisher: 'Bundesministerium der Justiz',
    title: {
      de: 'Arzneimittelverschreibungsverordnung (AMVV), Anlage 1 – verschreibungspflichtige Stoffe',
      en: 'Ordinance on prescription-only medicines (AMVV), Annex 1 – prescription-only substances',
    },
    url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Führt u. a. die Wirkstoffe der in den DTG-Empfehlungen genannten Malaria-Medikamente (Vorbeugung und Notfallbehandlung) als verschreibungspflichtig.',
      en: 'Lists, among others, the active substances of the malaria medicines named in the DTG recommendations (prevention and standby treatment) as prescription-only.',
    },
  },
} satisfies Record<string, Source>;

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const malariaRezeptSummary: Localized = {
  de: 'Vorbeugende Tabletten oder Notfallmedikament: was wann sinnvoll ist, warum es ein Rezept braucht und was Beratung und Medikament kosten.',
  en: 'Preventive tablets or standby treatment: what makes sense when, why a prescription is needed and what advice and medication cost.',
};

export const malariaRezeptGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Malaria-Tabletten: Rezept, Beratung, Kosten',
      en: 'Malaria tablets: prescription, advice, costs',
    },
    description: {
      de: 'Malaria-Tabletten gibt es nur auf Rezept. Beratung in Langenfeld ca. 28 € mit Einnahme- und Schutzplan – Vorbeugung oder Notfallmedikament nach DTG 2026.',
      en: 'Malaria tablets are prescription-only. Advice in Langenfeld for approx. €28 with a personal medication and protection plan – prevention or standby treatment per DTG 2026.',
    },
    eyebrow: { de: 'Ratgeber', en: 'Guide' },
    lead: {
      de: 'Medikamente gegen Malaria sind verschreibungspflichtig. Ob Sie vorbeugend Tabletten einnehmen, ein Notfallmedikament mitnehmen oder vor allem auf Mückenschutz setzen, hängt nach den Empfehlungen der DTG von Ihrem Reiseziel ab. Hier erfahren Sie, wie Sie in unserer Praxis in Langenfeld zu Beratung und Rezept kommen und was das kostet.',
      en: 'Malaria medicines are prescription-only. Whether you take preventive tablets, carry a standby treatment or rely mainly on mosquito protection depends on your destination, according to the DTG recommendations. Here you can read how to get advice and a prescription at our practice in Langenfeld and what it costs.',
    },
  },
  sections: [
    {
      id: 'vorbeugen-oder-notfall',
      heading: { de: 'Vorbeugen oder Notfallmedikament? Das Reiseziel entscheidet', en: 'Prevention or standby treatment? Your destination decides' },
      body: {
        de: [
          'Die Deutsche Gesellschaft für Tropenmedizin, Reisemedizin und Globale Gesundheit (DTG) bewertet jedes Jahr das Malariarisiko für jedes Land, oft auch für einzelne Regionen. Danach richtet sich unsere Empfehlung (Stand: DTG-Empfehlungen 2026):',
        ],
        en: [
          'Every year the German Society for Tropical Medicine, Travel Medicine and Global Health (DTG) assesses the malaria risk for each country, often for individual regions as well. Our recommendation is based on this (as of the DTG recommendations 2026):',
        ],
      },
      list: {
        de: [
          'Hohes Risiko, etwa in weiten Teilen Afrikas südlich der Sahara: vorbeugende Tabletteneinnahme – je nach Region ganzjährig oder während der Malariasaison – und konsequenter Mückenschutz.',
          'Mittleres Risiko: konsequenter Mückenschutz, vorbeugende Tabletten in der Regel nicht. Ein Notfallmedikament zur Selbstbehandlung kommt infrage, wenn von dort eine ärztliche Malaria-Diagnostik nicht innerhalb von 48 Stunden erreichbar ist. Nach Einschätzung der DTG ist das heute nur selten der Fall.',
          'Geringes Risiko, etwa in den typischen Urlaubsregionen Thailands: Mückenschutz genügt.',
          'Malariafrei, etwa Bangkok und einige andere Großstädte in Asien und Lateinamerika: keine besonderen Maßnahmen gegen Malaria.',
        ],
        en: [
          'High risk, for example in large parts of sub-Saharan Africa: preventive tablets – all year round or during the malaria season, depending on the region – plus consistent mosquito protection.',
          'Moderate risk: consistent mosquito protection, usually no preventive tablets. A standby treatment for self-treatment is an option if medical malaria testing cannot be reached from there within 48 hours. According to the DTG, this is rarely the case today.',
          'Low risk, for example in the typical holiday regions of Thailand: mosquito protection is sufficient.',
          'Malaria-free, for example Bangkok and some other large cities in Asia and Latin America: no specific measures against malaria.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Besondere Reisende', en: 'Travellers at higher risk' },
        text: {
          de: 'Schwangeren und Familien mit Kindern unter fünf Jahren rät die DTG von Urlaubsreisen in Gebiete mit hohem Malariarisiko ab. Ist die Reise unvermeidbar, ist die vorbeugende Einnahme besonders wichtig; Schwangere sollten sie auch in Gebieten mit mittlerem Risiko einnehmen, und auch voll gestillte Säuglinge brauchen eigene Tabletten. Langzeitreisende nehmen zusätzlich ein Notfallmedikament mit. Wer Familie und Freunde in einem Malariagebiet besucht, unterschätzt das Risiko oft: Eine früher erworbene Teilimmunität lässt nach längerer Zeit außerhalb von Malariagebieten nach, und in Deutschland geborene Kinder haben keine.',
          en: 'The DTG advises pregnant women and families with children under five against holidays in high-risk malaria areas. If the trip is unavoidable, preventive medication is particularly important; pregnant women should also take it in moderate-risk areas, and even fully breastfed infants need their own tablets. Long-term travellers also carry a standby treatment. People visiting friends and relatives in a malaria area often underestimate the risk: partial immunity acquired earlier wanes after a longer time outside malaria areas, and children born in Germany have none.',
        },
      },
      links: [
        { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
        { label: { de: 'Reiseziele', en: 'Destinations' }, path: '/reiseziele' },
      ],
    },
    {
      id: 'rezept',
      heading: { de: 'Warum Sie ein ärztliches Rezept brauchen', en: 'Why you need a medical prescription' },
      body: {
        de: [
          'Alle Medikamente zur Vorbeugung und Behandlung der Malaria sind in Deutschland verschreibungspflichtig. Welches Mittel passt, hängt nicht nur vom Reiseziel ab, sondern auch von Reisedauer, Alter und Körpergewicht, einer Schwangerschaft, Vorerkrankungen – etwa von Herz, Leber, Nieren oder Psyche – und von Wechselwirkungen mit Medikamenten, die Sie bereits einnehmen. Deshalb steht vor dem Rezept ein ärztliches Gespräch.',
          'Für private Reisen erhalten Sie ein Privatrezept und bezahlen das Medikament in der Apotheke. Besorgen Sie Malaria-Medikamente vor der Abreise in Deutschland: Im Reiseland angebotene Mittel können ungeeignet, gefälscht oder von schlechter Qualität sein.',
        ],
        en: [
          'All medicines for the prevention and treatment of malaria are prescription-only in Germany. Which medicine is suitable depends not only on the destination but also on the length of the trip, your age and body weight, pregnancy, pre-existing conditions – for example of the heart, liver, kidneys or mental health – and interactions with medicines you already take. That is why a medical consultation comes before the prescription.',
          'For private trips you receive a private prescription and pay for the medicine at the pharmacy. Obtain malaria medicines in Germany before you leave: products offered at the destination may be unsuitable, counterfeit or of poor quality.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Bitte zur Beratung mitbringen', en: 'Please bring to the consultation' },
        text: {
          de: 'Ihre Reiseroute mit Daten, eine Liste Ihrer Medikamente und – falls vorhanden – Erfahrungen mit früheren Malaria-Mitteln. Bei Kindern brauchen wir das aktuelle Körpergewicht, denn danach richtet sich die Dosis.',
          en: 'Your route with dates, a list of your medicines and – if applicable – your experience with previous malaria medicines. For children we need the current body weight, as the dose depends on it.',
        },
      },
    },
    {
      id: 'beratung-kosten',
      heading: { de: 'Beratung und Kosten', en: 'Consultation and costs' },
      body: {
        de: [
          'Die Malaria-Beratung allein kostet bei uns ca. 28 €. Sie erhalten einen persönlichen Einnahme- und Schutzplan zum Mitnehmen und, wenn eine Vorbeugung oder ein Notfallmedikament für Ihre Reise medizinisch angezeigt ist, ein Privatrezept. Malaria- und Höhenberatung zusammen kosten ca. 38 €. Planen Sie ohnehin eine reisemedizinische Beratung für eine Fernreise (ca. 38 €), ist das Malaria-Rezept darin enthalten, wenn es für Ihre Reise sinnvoll ist.',
          'Das Medikament bezahlen Sie in der Apotheke. Der Preis unterscheidet sich je nach Mittel und hängt von der Packungsgröße ab, also davon, wie lange Sie es einnehmen. Wir besprechen das mit Ihnen, bevor wir das Rezept ausstellen. Die aktuellen Richtwerte für die Beratung finden Sie auf unserer Kostenseite.',
        ],
        en: [
          'The malaria consultation on its own costs approx. €28 with us. You receive a personal medication and protection plan to take home and, if preventive medication or a standby treatment is medically indicated for your trip, a private prescription. Malaria and altitude advice together cost approx. €38. If you are planning a travel medicine consultation for a long-haul trip anyway (approx. €38), the malaria prescription is included where it makes sense for your trip.',
          'You pay for the medicine at the pharmacy. The price varies by medicine and depends on the pack size, that is, on how long you take it. We discuss this with you before issuing the prescription. Current guide prices for the consultation are on our fees page.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Wer zahlt?', en: 'Who pays?' },
        text: {
          de: 'Einen gesetzlichen Anspruch auf Malaria-Medikamente für private Reisen gibt es nicht. Manche Krankenkassen erstatten sie aber freiwillig als Satzungsleistung (§ 20i Abs. 2 SGB V), private Versicherungen je nach Tarif. Bei Dienstreisen trägt in der Regel der Arbeitgeber die Kosten. Sie erhalten von uns eine Rechnung nach GOÄ zum Einreichen; den Apothekenbeleg reichen Sie gesondert ein.',
          en: 'There is no statutory entitlement to malaria medicines for private trips. Some statutory insurers do reimburse them voluntarily under their statutes (Section 20i(2) SGB V), private insurers depending on the plan. For business travel, the employer usually bears the costs. You receive a GOÄ invoice from us to submit; submit the pharmacy receipt separately.',
        },
      },
      links: [
        { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
        { label: { de: 'Termin buchen', en: 'Book an appointment' }, path: '/termin' },
      ],
    },
    {
      id: 'mueckenschutz',
      heading: { de: 'Mückenschutz bleibt die wichtigste Maßnahme', en: 'Mosquito protection remains the most important measure' },
      body: {
        de: [
          'Keine Tablette schützt vollständig. Malaria-Mücken stechen vor allem in der Dämmerung und nachts; in Malariagebieten kommen aber auch tagaktive Mücken vor, die etwa Dengue übertragen. Schützen Sie sich deshalb rund um die Uhr:',
        ],
        en: [
          'No tablet gives complete protection. Malaria mosquitoes bite mainly at dusk and at night, but malaria areas also have day-active mosquitoes that transmit dengue, for example. So protect yourself around the clock:',
        ],
      },
      list: {
        de: [
          'Mückenschutzmittel mit DEET (30–50 %) oder Icaridin (ab 20 %) auf alle unbedeckten Hautstellen auftragen und bei anhaltendem Risiko nach etwa vier bis sechs Stunden erneuern. Sonnencreme 20 bis 30 Minuten vorher auftragen.',
          'Lange, locker sitzende, helle Kleidung tragen, am besten mit Insektenschutz imprägniert.',
          'Unter einem imprägnierten Moskitonetz schlafen; Räume mit Klimaanlage oder Mückengittern bevorzugen.',
          'Nicht verlassen auf Mückenschutz-Armbänder, Knoblauch oder Vitamin B12 – sie schützen nicht oder kaum.',
        ],
        en: [
          'Apply repellent containing DEET (30–50 %) or icaridin (from 20 %) to all exposed skin and reapply after about four to six hours if the risk continues. Apply sunscreen 20 to 30 minutes beforehand.',
          'Wear long, loose-fitting, light-coloured clothing, ideally impregnated with insecticide.',
          'Sleep under an impregnated mosquito net; prefer rooms with air conditioning or insect screens.',
          'Do not rely on repellent wristbands, garlic or vitamin B12 – they offer little or no protection.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Mückenschutz bei Kindern', en: 'Mosquito protection for children' },
        text: {
          de: 'Achten Sie auf die Altersfreigabe des Mittels. Bei kleinen Kindern tragen Erwachsene den Mückenschutz auf – nicht auf die Hände und nicht ins Gesicht sprühen. Moskitonetze über Bett und Spielfläche sind besonders wichtig.',
          en: 'Check the minimum age stated for the product. For young children, adults apply the repellent – not on the hands and not sprayed into the face. Mosquito nets over beds and play areas are particularly important.',
        },
      },
      links: [
        { label: { de: 'Reisetipps', en: 'Travel tips' }, path: '/reisetipps' },
        { label: { de: 'Reiseapotheke', en: 'Travel health kit' }, path: '/reiseapotheke' },
      ],
    },
    {
      id: 'fieber',
      heading: { de: 'Fieber während oder nach der Reise', en: 'Fever during or after the trip' },
      body: {
        de: [
          'Malaria beginnt frühestens etwa sieben Tage nach der Ankunft im Malariagebiet – meist mit hohem Fieber, Schüttelfrost, Kopf- und Gliederschmerzen, manchmal auch mit Durchfall. Das ähnelt einer Grippe. Die gefährlichste Form kann innerhalb weniger Tage lebensbedrohlich werden.',
          'Jedes unklare Fieber ab dem siebten Tag nach der Ankunft im Malariagebiet und bis zu mehreren Monaten nach der Rückkehr muss deshalb umgehend ärztlich abgeklärt werden, mit einem Bluttest auf Malaria. Das gilt auch, wenn Sie vorbeugend Tabletten eingenommen haben. Sagen Sie dabei immer, wo Sie waren.',
        ],
        en: [
          'Malaria starts at the earliest about seven days after arriving in a malaria area – usually with high fever, chills, headache and aching limbs, sometimes also with diarrhoea. This resembles flu. The most dangerous form can become life-threatening within a few days.',
          'Any unexplained fever from the seventh day after arriving in a malaria area until several months after your return must therefore be checked by a doctor immediately, with a blood test for malaria. This also applies if you took preventive tablets. Always say where you have been.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Fieberthermometer einpacken', en: 'Pack a thermometer' },
        text: {
          de: 'Nehmen Sie in Malariagebiete ein Fieberthermometer mit. Bei Fieber ab 38 °C suchen Sie umgehend ärztliche Hilfe. Ein mitgeführtes Notfallmedikament nehmen Sie nur ein, wenn diese nicht innerhalb von 48 Stunden erreichbar ist und das Fieber länger als 24 Stunden anhält – genau nach Ihrem schriftlichen Plan. Lassen Sie sich danach trotzdem so bald wie möglich ärztlich untersuchen.',
          en: 'Take a thermometer with you to malaria areas. If you have a fever of 38 °C or more, seek medical help immediately. Take a standby treatment only if medical help cannot be reached within 48 hours and the fever lasts longer than 24 hours – exactly as set out in your written plan. Even then, see a doctor as soon as possible afterwards.',
        },
      },
    },
    {
      id: 'kurzfristig',
      heading: { de: 'Kurz vor der Abreise: Was jetzt noch geht', en: 'Shortly before departure: what is still possible' },
      body: {
        de: [
          'Für die Malaria-Vorbeugung ist es selten zu spät. Bei manchen Mitteln beginnt die Einnahme ein bis zwei Tage vor der Ankunft im Malariagebiet; sie eignen sich auch für kurzfristige Reisen. Andere beginnt man bei der ersten Anwendung zwei bis drei Wochen vor der Abreise, um die Verträglichkeit zu prüfen. Nach dem Verlassen des Malariagebiets wird je nach Mittel noch eine bis vier Wochen weiter eingenommen.',
          'Kommen Sie deshalb auch wenige Tage vor dem Abflug noch zur Beratung. Planen Sie Zeit für die Apotheke ein, falls ein Mittel erst bestellt werden muss.',
        ],
        en: [
          'It is rarely too late for malaria prevention. With some medicines, you start taking them one to two days before arriving in the malaria area; they are also suitable for last-minute trips. With others, first-time users start two to three weeks before departure to check tolerability. After leaving the malaria area, you continue taking the medicine for one to four weeks, depending on the product.',
          'So come for a consultation even a few days before your flight. Allow time for the pharmacy in case a medicine has to be ordered.',
        ],
      },
      links: [
        { label: { de: 'Wann vor der Reise impfen?', en: 'When to get vaccinated before travel?' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
        { label: { de: 'Termin buchen', en: 'Book an appointment' }, path: '/termin' },
      ],
    },
  ],
  faq: [
    {
      q: { de: 'Brauche ich für meine Reise Malaria-Tabletten?', en: 'Do I need malaria tablets for my trip?' },
      a: {
        de: 'Das hängt vom genauen Reiseziel, der Reisezeit und Ihrem Reisestil ab. Nach den DTG-Empfehlungen 2026 ist die vorbeugende Einnahme vor allem in Gebieten mit hohem Risiko sinnvoll, etwa in weiten Teilen Afrikas südlich der Sahara. In Gebieten mit mittlerem oder geringem Risiko genügt meist konsequenter Mückenschutz. Wir prüfen Ihre Route in der Beratung.',
        en: 'It depends on your exact destination, the time of year and how you travel. According to the DTG recommendations 2026, preventive medication mainly makes sense in high-risk areas, for example in large parts of sub-Saharan Africa. In moderate- or low-risk areas, consistent mosquito protection is usually sufficient. We check your route in the consultation.',
      },
    },
    {
      q: { de: 'Bekomme ich Malaria-Tabletten ohne Rezept?', en: 'Can I get malaria tablets without a prescription?' },
      a: {
        de: 'Nein. Malaria-Medikamente sind in Deutschland verschreibungspflichtig. Sie erhalten sie nach einer ärztlichen Beratung per Privatrezept in der Apotheke.',
        en: 'No. Malaria medicines are prescription-only in Germany. You receive them at the pharmacy with a private prescription after a medical consultation.',
      },
    },
    {
      q: { de: 'Was kostet die Malaria-Beratung mit Rezept?', en: 'How much does malaria advice with a prescription cost?' },
      a: {
        de: 'Die Malaria-Beratung allein kostet bei uns ca. 28 €, inklusive persönlichem Einnahme- und Schutzplan und, wenn medizinisch angezeigt, Privatrezept. Im Rahmen einer reisemedizinischen Beratung für eine Fernreise (ca. 38 €) ist das Malaria-Rezept enthalten, wenn es sinnvoll ist. Das Medikament bezahlen Sie in der Apotheke; der Preis hängt vom Mittel und von der Reisedauer ab.',
        en: 'The malaria consultation on its own costs approx. €28 with us, including a personal medication and protection plan and, where medically indicated, a private prescription. As part of a travel medicine consultation for a long-haul trip (approx. €38), the malaria prescription is included where it makes sense. You pay for the medicine at the pharmacy; the price depends on the product and the length of your trip.',
      },
    },
    {
      q: { de: 'Zahlt die Krankenkasse Malaria-Tabletten?', en: 'Does health insurance pay for malaria tablets?' },
      a: {
        de: 'Für private Reisen gibt es keinen gesetzlichen Anspruch. Manche Krankenkassen erstatten Malaria-Medikamente freiwillig, private Versicherungen je nach Tarif. Bei Dienstreisen zahlt in der Regel der Arbeitgeber. Fragen Sie am besten vorher nach.',
        en: 'For private trips there is no statutory entitlement. Some health insurers reimburse malaria medicines voluntarily, private insurers depending on the plan. For business travel, the employer usually pays. It is best to ask beforehand.',
      },
    },
    {
      q: { de: 'Schützen Malaria-Tabletten vollständig?', en: 'Do malaria tablets give complete protection?' },
      a: {
        de: 'Nein. Sie senken das Risiko deutlich, ersetzen aber keinen Mückenschutz. Fieber während oder nach der Reise muss auch nach korrekter Einnahme sofort ärztlich abgeklärt werden.',
        en: 'No. They considerably reduce the risk but do not replace mosquito protection. Fever during or after the trip must be checked by a doctor immediately, even if you took the tablets correctly.',
      },
    },
  ],
  // Neue ID ist erst nach dem Einpflegen von `malariaRezeptQuellen` in sources.ts gültig.
  sourceIds: [
    'dtgMalaria2026',
    'dtgMalariaLaender2026',
    'rkiMalaria',
    'whoMalaria',
    'amvvVerschreibungspflicht',
    'sgb5Schutzimpfungen',
    'goae',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' }, path: '/leistungen/malaria' },
    { label: { de: 'Höhenmedizin', en: 'Altitude medicine' }, path: '/leistungen/hoehenmedizin' },
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
  ],
};
