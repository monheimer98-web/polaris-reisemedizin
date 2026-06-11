/**
 * Leistung „Malaria-Vorsorge" (DE/EN) — Krankheitsbild und Schutzkonzept,
 * belegt über das Quellen-Register. Sachlich, ohne Heilversprechen, ohne
 * Preisangaben und ohne konkrete Medikamenten-Dosierungen (HWG-konform).
 * Maßgeblich ist die individuelle ärztliche Beratung.
 */
import type { ClinicalPage } from '../types';

export const malariaService: ClinicalPage = {
  meta: {
    title: { de: 'Malaria-Vorsorge', en: 'Malaria prevention' },
    description: {
      de: 'Malaria verstehen und vorbeugen: Verbreitung, konsequenter Mückenschutz, medikamentöse Vorbeugung und Notfallmedikation – individuell für Ihre Reise abgestimmt.',
      en: 'Understanding and preventing malaria: distribution, consistent mosquito protection, preventive medication and standby treatment – tailored individually to your trip.',
    },
    eyebrow: { de: 'Leistung', en: 'Service' },
    lead: {
      de: 'Malaria ist die wichtigste durch Mücken übertragene Reisekrankheit – und gut vermeidbar. Wir bewerten Ihr Risiko für die konkrete Reise und stimmen Mückenschutz und, wenn sinnvoll, eine medikamentöse Vorbeugung individuell ab.',
      en: 'Malaria is the most important mosquito-borne travel disease – and largely preventable. We assess your risk for the specific trip and tailor mosquito protection and, where sensible, preventive medication individually.',
    },
  },
  sections: [
    {
      id: 'was',
      heading: { de: 'Was ist Malaria?', en: 'What is malaria?' },
      body: {
        de: [
          'Malaria wird durch Parasiten (Plasmodien) verursacht, die durch den Stich infizierter Anopheles-Mücken vor allem in der Dämmerung und nachts übertragen werden. Typisch sind Fieber, Schüttelfrost, Kopf- und Gliederschmerzen – Beschwerden, die einem grippalen Infekt ähneln können und deshalb leicht verkannt werden.',
          'Die gefährlichste Form, die Malaria tropica (Plasmodium falciparum), kann innerhalb weniger Tage lebensbedrohlich verlaufen. Entscheidend sind daher Vorbeugung und – bei Fieber nach einer Tropenreise – die rasche ärztliche Abklärung.',
        ],
        en: [
          'Malaria is caused by parasites (plasmodia) transmitted through the bite of infected Anopheles mosquitoes, mainly at dusk and at night. Typical signs are fever, chills, headache and aching limbs – symptoms that can resemble a flu-like infection and are therefore easily mistaken.',
          'The most dangerous form, malaria tropica (Plasmodium falciparum), can become life-threatening within a few days. Prevention and – in the case of fever after a trip to the tropics – prompt medical assessment are therefore crucial.',
        ],
      },
    },
    {
      id: 'wo',
      heading: { de: 'Wo besteht ein Risiko?', en: 'Where is there a risk?' },
      body: {
        de: [
          'Das größte Risiko besteht im tropischen Afrika südlich der Sahara. Weitere Risikogebiete liegen in Teilen Süd- und Südostasiens, Ozeaniens sowie im tropischen Mittel- und Südamerika. Das tatsächliche Risiko schwankt stark – je nach Region, Höhenlage, Reisezeit und Reisestil.',
          'Wir bewerten Ihr Risiko anhand Ihrer konkreten Route und Reisezeit und ziehen dabei die Länderinformationen des Auswärtigen Amts sowie die Empfehlungen der Fachgesellschaften heran.',
        ],
        en: [
          'The greatest risk is in tropical Africa south of the Sahara. Further risk areas lie in parts of South and Southeast Asia, Oceania and tropical Central and South America. The actual risk varies considerably – depending on region, altitude, season and travel style.',
          'We assess your risk based on your specific route and travel dates, drawing on the country information from the Federal Foreign Office and the recommendations of the specialist societies.',
        ],
      },
    },
    {
      id: 'mueckenschutz',
      heading: { de: 'Mückenschutz ist die Basis', en: 'Mosquito protection is the foundation' },
      body: {
        de: [
          'Da es für Reisende keine Impfung gegen Malaria gibt, ist der konsequente Schutz vor Mückenstichen die wichtigste Maßnahme – und er schützt zugleich vor anderen durch Mücken übertragenen Erkrankungen wie Dengue. Bewährt haben sich:',
        ],
        en: [
          'As there is no malaria vaccination for travellers, consistent protection against mosquito bites is the most important measure – and it protects against other mosquito-borne diseases such as dengue at the same time. Proven measures include:',
        ],
      },
      list: {
        de: [
          'wirksame Mückenschutzmittel (Repellentien) auf unbedeckte Haut, besonders abends und nachts,',
          'lange, möglichst helle Kleidung; Hosen und langärmlige Oberteile,',
          'ein imprägniertes Moskitonetz über dem Schlafplatz,',
          'Klimaanlage oder Fliegengitter, wo verfügbar.',
        ],
        en: [
          'effective mosquito repellents on exposed skin, especially in the evening and at night,',
          'long, preferably light-coloured clothing; trousers and long-sleeved tops,',
          'an impregnated mosquito net over your sleeping area,',
          'air conditioning or insect screens where available.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Auch bei Tabletten unverzichtbar', en: 'Essential even when taking tablets' },
        text: {
          de: 'Mückenschutz bleibt wichtig, selbst wenn Sie Medikamente zur Vorbeugung einnehmen – keine Vorbeugung bietet einen vollständigen Schutz.',
          en: 'Mosquito protection remains important even if you take preventive medication – no form of prevention offers complete protection.',
        },
      },
    },
    {
      id: 'medikamente',
      heading: { de: 'Medikamentöse Vorbeugung & Notfallmedikation', en: 'Preventive medication & standby treatment' },
      body: {
        de: [
          'Für Reisen in Gebiete mit höherem Risiko kann eine medikamentöse Vorbeugung (Chemoprophylaxe) sinnvoll sein: Dabei werden vor, während und nach der Reise Tabletten eingenommen. Für Regionen mit geringerem Risiko kommt alternativ ein Notfallmedikament zur Selbstbehandlung („Standby") infrage, das nur bei Fieber und nicht erreichbarer ärztlicher Hilfe angewendet wird.',
          'Welche Strategie und welches Präparat passen, hängt vom Zielgebiet, der Reisedauer, Ihren Vorerkrankungen und Wechselwirkungen mit anderen Medikamenten ab. Diese Auswahl und die Verordnung treffen wir individuell im Beratungsgespräch – eine pauschale Empfehlung gibt es bewusst nicht.',
        ],
        en: [
          'For trips to higher-risk areas, preventive medication (chemoprophylaxis) may be sensible: tablets are taken before, during and after the trip. For lower-risk regions, a standby emergency medication for self-treatment is an alternative, used only in the event of fever when medical help is not reachable.',
          'Which strategy and which medication are suitable depends on the destination, the length of the trip, your pre-existing conditions and interactions with other medications. We make this selection and the prescription individually during the consultation – deliberately, there is no blanket recommendation.',
        ],
      },
    },
    {
      id: 'notfall',
      heading: { de: 'Fieber nach der Reise: nicht abwarten', en: 'Fever after the trip: do not wait' },
      body: {
        de: [
          'Malaria kann sich erst Tage bis Monate nach der Rückkehr bemerkbar machen. Treten nach einem Aufenthalt in einem Risikogebiet Fieber oder grippeähnliche Beschwerden auf, ist das ein medizinischer Notfall.',
        ],
        en: [
          'Malaria can become apparent only days to months after return. If fever or flu-like symptoms occur after staying in a risk area, this is a medical emergency.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Jedes Fieber ernst nehmen', en: 'Take any fever seriously' },
        text: {
          de: 'Suchen Sie bei Fieber nach einer Tropenreise umgehend ärztliche Hilfe und weisen Sie auf Ihre Reise hin – auch dann, wenn die Reise schon Wochen zurückliegt. Eine früh erkannte Malaria ist in der Regel gut behandelbar.',
          en: 'If you develop a fever after a trip to the tropics, seek medical help immediately and mention your trip – even if it was weeks ago. Malaria detected early is usually treatable well.',
        },
      },
    },
  ],
  sourceIds: ['rkiMalaria', 'whoMalaria', 'dtgReiseimpfungen', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-04'),
  related: [
    { label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' }, path: '/leistungen/reiseberatung' },
    { label: { de: 'Risikogebiete', en: 'Risk areas' }, path: '/risikogebiete' },
    { label: { de: 'Kosten & GOÄ', en: 'Costs & GOÄ' }, path: '/kosten' },
  ],
};
