/**
 * Ratgeber „Tollwutimpfung vor der Reise" (DE/EN), Slug
 * `tollwutimpfung-vor-der-reise`. Fachlich nach STIKO/DTG (Epid Bull 27/2026,
 * Kap. 5.12 mit Tabellen 13–15, Ländertabellen im Anhang) und RKI-Ratgeber
 * Tollwut; Stand 28.10.2026. Impfstoffpreis = Apothekenpreis per Privatrezept,
 * Honorar-Richtwerte wie in `kosten.ts` (Link auf /kosten). Bewusst ohne
 * Präparatenamen (HWG), ohne Heilversprechen.
 */
import type { ClinicalPage, Localized } from '../types';
import type { Source } from '../sources';

/** Neue Quellen dieses Ratgebers – zum Einpflegen in `sources.ts`. */
export const tollwutImpfungQuellen = {
  whoRabiesPositionPaper2018: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'Tollwut-Impfstoffe: WHO-Positionspapier (April 2018)',
      en: 'Rabies vaccines: WHO position paper (April 2018)',
    },
    url: 'https://www.who.int/publications/i/item/who-wer9316',
    retrieved: new Date('2026-10-28'),
    note: {
      de: 'Weekly Epidemiological Record 93(16); Grundlage für das verkürzte Zwei-Dosen-Schema vor Exposition und für die Behandlung nach Tierkontakt.',
      en: 'Weekly Epidemiological Record 93(16); basis for the shortened two-dose pre-exposure schedule and for post-exposure treatment.',
    },
  },
} satisfies Record<string, Source>;

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const tollwutImpfungSummary: Localized = {
  de: 'Für wen die Impfung sinnvoll ist, Impfschemata nach STIKO 2026, was nach einem Biss zu tun ist und was die Impfung kostet.',
  en: 'Who the vaccination makes sense for, STIKO 2026 schedules, what to do after a bite and what the vaccination costs.',
};

export const tollwutImpfungGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Tollwutimpfung vor der Reise',
      en: 'Rabies vaccination before travel',
    },
    description: {
      de: 'Tollwutimpfung vor der Reise in Langenfeld: wann sinnvoll, Impfschemata nach STIKO 2026, was nach einem Biss zu tun ist, Kosten und Impfung von Kindern.',
      en: 'Rabies vaccination before travel in Langenfeld: when it makes sense, STIKO 2026 schedules, what to do after a bite, costs and vaccinating children.',
    },
    eyebrow: { de: 'Ratgeber', en: 'Guide' },
    lead: {
      de: 'Tollwut verläuft nach Ausbruch fast immer tödlich. Mit rechtzeitiger Impfung und richtiger Behandlung nach einem Tierkontakt lässt sie sich aber in aller Regel verhindern. Die Impfung vor der Reise ersetzt die Behandlung nach einem Biss nicht, macht sie aber deutlich einfacher. Hier erfahren Sie, für wen sie sinnvoll ist, welche Schemata die STIKO 2026 vorsieht und was die Impfung in unserer Praxis in Langenfeld kostet.',
      en: 'Once symptoms appear, rabies is almost always fatal. With timely vaccination and the right treatment after animal contact, however, it can usually be prevented. Vaccination before travel does not replace treatment after a bite, but makes it much simpler. Here you can read who it makes sense for, which schedules STIKO provides for in 2026 and what the vaccination costs at our practice in Langenfeld.',
    },
  },
  sections: [
    {
      id: 'wann-sinnvoll',
      heading: { de: 'Wann ist die Tollwutimpfung sinnvoll?', en: 'When does rabies vaccination make sense?' },
      body: {
        de: [
          'Tollwut kommt in mehr als 150 Ländern vor, vor allem in Asien und Afrika. Übertragen wird sie meist durch Hunde, aber auch durch Katzen, Affen, andere Säugetiere und Fledermäuse. Die STIKO teilt die Reiseländer nach ihrem Risiko für Hundetollwut ein. Für Länder mit hohem oder moderatem Risiko empfiehlt sie die vorbeugende Impfung, wenn mindestens einer dieser Punkte zutrifft:',
        ],
        en: [
          'Rabies occurs in more than 150 countries, above all in Asia and Africa. It is usually transmitted by dogs, but also by cats, monkeys, other mammals and bats. STIKO classifies destination countries by their risk of dog rabies. For countries with a high or moderate risk, it recommends pre-exposure vaccination if at least one of the following applies:',
        ],
      },
      list: {
        de: [
          'Die ärztliche Versorgung vor Ort ist unzureichend.',
          'Impfstoff und Immunglobulin für die Behandlung nach einem Biss sind vor Ort knapp oder vermutlich nicht verfügbar.',
          'Sie reisen oder wohnen unter einfachen Bedingungen oder planen Aktivitäten mit erhöhtem Risiko, etwa Radfahren oder Laufen.',
        ],
        en: [
          'Medical care at the destination is inadequate.',
          'Vaccine and immunoglobulin for treatment after a bite are scarce or probably unavailable locally.',
          'You travel or stay under basic conditions or plan activities with an increased risk, such as cycling or running.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Reisedauer und Reiseland', en: 'Length of stay and destination' },
        text: {
          de: 'In Ländern mit hohem Risiko – dazu zählen etwa Indien, Indonesien mit Bali, Sri Lanka und Kenia – gelten diese Kriterien unabhängig von der Reisedauer. In Ländern mit moderatem Risiko, etwa Thailand, empfiehlt die STIKO die Impfung bei Aufenthalten über vier Wochen oder wiederholten Kurzreisen. Unabhängig vom Land ist sie sinnvoll, wenn Sie absehbar mit Wildtieren außerhalb Europas, Australiens und Ozeaniens oder weltweit mit Fledermäusen in Kontakt kommen, etwa in Höhlen. Für Kinder und für Reisende, die Familie und Freunde im Herkunftsland besuchen, stellt die STIKO die Indikation großzügig.',
          en: 'In high-risk countries – including India, Indonesia with Bali, Sri Lanka and Kenya – these criteria apply regardless of the length of the trip. In moderate-risk countries such as Thailand, STIKO recommends vaccination for stays of more than four weeks or repeated short trips. Regardless of the country, it makes sense if you foreseeably come into contact with wild animals outside Europe, Australia and Oceania, or with bats anywhere in the world, for example in caves. For children and for travellers visiting friends and relatives in their country of origin, STIKO advises a generous approach.',
        },
      },
      links: [
        { label: { de: 'Krankheitsbild Tollwut', en: 'Rabies – the disease' }, path: '/krankheitsbilder/tollwut' },
        { label: { de: 'Reiseziele', en: 'Destinations' }, path: '/reiseziele' },
      ],
    },
    {
      id: 'schemata',
      heading: { de: 'Impfschemata nach STIKO 2026', en: 'Vaccination schedules according to STIKO 2026' },
      body: {
        de: [
          'Für die vorbeugende Impfung gibt es in Deutschland zwei Totimpfstoffe; beide sind ab Geburt zugelassen. Die STIKO nennt folgende Schemata (Tag 0 ist der Tag der ersten Impfung):',
        ],
        en: [
          'Two inactivated vaccines are available in Germany for pre-exposure vaccination; both are approved from birth. STIKO lists the following schedules (day 0 is the day of the first dose):',
        ],
      },
      list: {
        de: [
          'Grundimmunisierung nach dem herkömmlichen Schema: 3 Dosen an Tag 0, 7 und 21 oder 28 – für alle Altersgruppen und das empfohlene Schema bei geschwächtem Immunsystem. Am besten fünf bis sechs Wochen vor der Abreise beginnen.',
          'Verkürztes Schema mit 2 Dosen: Tag 0 und 7 – bei intaktem Immunsystem und in jedem Alter. Besteht das Risiko weiter, etwa durch erneute Reisen, sollte spätestens nach einem Jahr eine dritte Dosis folgen.',
          'Schnellschema mit 3 Dosen: Tag 0, 3 und 7 – für Erwachsene von 18 bis 64 Jahren mit intaktem Immunsystem, zugelassen für einen der beiden Impfstoffe.',
        ],
        en: [
          'Primary course on the conventional schedule: 3 doses on days 0, 7 and 21 or 28 – for all age groups and the recommended schedule for people with a weakened immune system. Ideally start five to six weeks before departure.',
          'Shortened two-dose schedule: days 0 and 7 – for people with a healthy immune system, at any age. If the risk continues, for example through further trips, a third dose should follow within one year at the latest.',
          'Rapid three-dose schedule: days 0, 3 and 7 – for adults aged 18 to 64 with a healthy immune system; approved for one of the two vaccines.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Auffrischung und Blutkontrollen', en: 'Boosters and blood tests' },
        text: {
          de: 'Nach einer Grundimmunisierung mit drei Dosen geht die STIKO davon aus, dass das Immunsystem auch nach Jahren rasch auf eine erneute Impfung anspricht. Für Reisende sind regelmäßige Auffrischungen oder Blutkontrollen deshalb in der Regel nicht nötig; nach einem Biss genügen dann zwei Impfungen. Bei dauerhaft erhöhtem Risiko, etwa durch beruflichen Tierkontakt, richten sich Auffrischungen nach der Fachinformation. Bei geschwächtem Immunsystem empfiehlt die STIKO, den Impferfolg zwei bis vier Wochen nach der letzten Dosis im Blut zu kontrollieren.',
          en: 'After a three-dose primary course, STIKO assumes that the immune system responds quickly to a further dose even years later. Routine boosters or blood tests are therefore generally not needed for travellers; after a bite, two doses are then sufficient. With a permanently increased risk, for example through occupational contact with animals, boosters follow the product information. For people with a weakened immune system, STIKO recommends checking the antibody response in the blood two to four weeks after the last dose.',
        },
      },
      links: [{ label: { de: 'Wann vor der Reise impfen?', en: 'When to get vaccinated before travel?' }, path: '/ratgeber/wann-vor-der-reise-impfen' }],
    },
    {
      id: 'nach-dem-biss',
      heading: { de: 'Nach einem Biss oder Kratzer: Das ist zu tun', en: 'After a bite or scratch: what to do' },
      body: {
        de: [
          'In einem Tollwut-Gebiet ist jeder Biss, jeder Kratzer und jeder Speichelkontakt mit Schleimhäuten oder Wunden durch ein Säugetier ein Notfall – auch wenn das Tier gesund wirkt und auch wenn Sie geimpft sind. So gehen Sie vor:',
        ],
        en: [
          'In a rabies area, every bite, every scratch and every contact of saliva with mucous membranes or wounds from a mammal is an emergency – even if the animal seems healthy and even if you are vaccinated. Here is what to do:',
        ],
      },
      list: {
        de: [
          'Sofort: die Wunde mindestens 15 Minuten mit Seife oder Spülmittel und viel Wasser auswaschen, danach desinfizieren, etwa mit 70-prozentigem Alkohol oder einem Jodpräparat.',
          'Noch am selben Tag ärztliche Hilfe suchen, den Impfausweis zeigen und die Behandlung nach Tierkontakt (Postexpositionsprophylaxe) beginnen lassen. Dabei wird auch der Tetanusschutz geprüft.',
          'Auch wenn der Kontakt länger zurückliegt: Wegen der langen Inkubationszeit ist die Behandlung auch Wochen bis Monate später noch sinnvoll. Wurden Sie unterwegs nicht behandelt, lassen Sie sich nach der Rückkehr sofort ärztlich untersuchen.',
        ],
        en: [
          'Immediately: wash the wound for at least 15 minutes with soap or detergent and plenty of water, then disinfect it, for example with 70 per cent alcohol or an iodine preparation.',
          'Seek medical help the same day, show your vaccination record and have post-exposure treatment started. Your tetanus protection will also be checked.',
          'Even if the contact was some time ago: because of the long incubation period, treatment still makes sense weeks or months later. If you were not treated while travelling, see a doctor immediately after your return.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Die Vorimpfung ersetzt die Behandlung nicht', en: 'Pre-exposure vaccination does not replace treatment' },
        text: {
          de: 'Auch vollständig Geimpfte brauchen nach einem Biss oder Kratzer sofort eine Wundreinigung und weitere Impfungen. Die Vorimpfung verschafft Zeit und erspart vor allem das oft schwer erhältliche Tollwut-Immunglobulin.',
          en: 'Even fully vaccinated people need immediate wound cleaning and further doses after a bite or scratch. Pre-exposure vaccination buys time and, above all, avoids the need for rabies immunoglobulin, which is often hard to obtain.',
        },
      },
    },
    {
      id: 'behandlung',
      heading: { de: 'Behandlung nach dem Biss: mit und ohne Vorimpfung', en: 'Treatment after a bite: with and without prior vaccination' },
      body: {
        de: [
          'Wie die Behandlung aussieht, hängt von der Art des Kontakts und von Ihrer Vorimpfung ab. Als vollständig vorgeimpft gilt, wer drei Dosen oder innerhalb des letzten Jahres zwei Dosen erhalten hat. Ohne Vorimpfung besteht die Impfserie je nach Schema aus vier bis fünf Impfungen über zwei bis vier Wochen. Bei schwereren Kontakten kommt Tollwut-Immunglobulin hinzu – vorgefertigte Antikörper, die die Zeit überbrücken, bis die Impfung wirkt. Nach mindestens zwei vorbeugenden Dosen ist in der Regel kein Immunglobulin nötig. Gerade dieses Immunglobulin ist in vielen Reiseländern knapp. Es kann zwar bis zu sieben Tage nach der ersten Impfung nachgeholt werden, die Suche danach kann aber eine Fahrt in eine größere Stadt oder eine Unterbrechung der Reise bedeuten.',
          'Die Übersicht gilt für Menschen mit intaktem Immunsystem:',
        ],
        en: [
          'What the treatment involves depends on the type of contact and on your prior vaccination. You count as fully pre-vaccinated if you have had three doses, or two doses within the last year. Without prior vaccination, the series consists of four to five doses over two to four weeks, depending on the schedule. For more serious contact, rabies immunoglobulin is added – ready-made antibodies that bridge the time until the vaccine takes effect. After at least two pre-exposure doses, immunoglobulin is generally not needed. This immunoglobulin in particular is scarce in many destination countries. It can be given up to seven days after the first dose, but finding it may mean travelling to a larger city or interrupting your trip.',
          'The overview applies to people with a healthy immune system:',
        ],
      },
      list: {
        de: [
          'Tier berührt oder gefüttert, Ablecken unverletzter Haut: keine Impfung nötig.',
          'Oberflächliche, nicht blutende Kratzer oder Hautabschürfungen, Lecken oder Knabbern an verletzter Haut: ohne Vorimpfung eine Impfserie; mit vollständiger Vorimpfung zwei Impfungen an Tag 0 und 3.',
          'Bisse und Kratzwunden, Speichel auf Schleimhäuten oder in Wunden, jeder mögliche Biss, Kratzer oder Schleimhautkontakt durch eine Fledermaus: ohne Vorimpfung eine Impfserie plus Immunglobulin; mit vollständiger Vorimpfung zwei Impfungen an Tag 0 und 3, kein Immunglobulin.',
        ],
        en: [
          'Touching or feeding an animal, licks on intact skin: no vaccination needed.',
          'Superficial, non-bleeding scratches or grazes, licking or nibbling of broken skin: without prior vaccination a vaccine series; with full prior vaccination two doses on days 0 and 3.',
          'Bites and scratch wounds, saliva on mucous membranes or in wounds, any possible bite, scratch or mucous-membrane contact from a bat: without prior vaccination a vaccine series plus immunoglobulin; with full prior vaccination two doses on days 0 and 3, no immunoglobulin.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Bei geschwächtem Immunsystem', en: 'With a weakened immune system' },
        text: {
          de: 'Ist das Immunsystem geschwächt, besteht die Behandlung nach einem Biss oder Kratzer immer aus fünf Impfungen und Immunglobulin – auch nach vollständiger Vorimpfung. Wer nur zwei vorbeugende Dosen hat und deren Abschluss länger als ein Jahr zurückliegt, zeigt vor Ort den Impfausweis; die Behandlung legt dann die Ärztin oder der Arzt fest.',
          en: 'If the immune system is weakened, treatment after a bite or scratch always consists of five doses and immunoglobulin – even after full prior vaccination. If you have had only two pre-exposure doses and completed them more than a year ago, show your vaccination record locally; the doctor will then decide on the treatment.',
        },
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Was kostet die Tollwutimpfung?', en: 'How much does rabies vaccination cost?' },
      body: {
        de: [
          'Den Tollwut-Impfstoff erhalten Sie in der Regel per Privatrezept in der Apotheke. Eine Dosis kostet dort derzeit ca. 80 bis 90 € (Apothekenpreis, Stand Oktober 2026). Für das Zwei-Dosen-Schema fallen für den Impfstoff also rund 160 bis 180 € an, für drei Dosen rund 240 bis 270 €. Bitte bringen Sie den Impfstoff in einer Kühltasche direkt zum Impftermin mit.',
          'Hinzu kommen die ärztlichen Leistungen nach GOÄ: die reisemedizinische Beratung mit Ihrem Impfplan und je Termin die Impfung (ca. 32 €). Folgedosen derselben Impfserie innerhalb eines Monats berechnen wir günstiger. Die aktuellen Richtwerte finden Sie auf unserer Kostenseite; die voraussichtlichen Gesamtkosten nennen wir Ihnen vorab schriftlich.',
        ],
        en: [
          'You usually obtain the rabies vaccine from a pharmacy with a private prescription. One dose currently costs approx. €80 to €90 there (pharmacy price, as of October 2026). For the two-dose schedule the vaccine therefore comes to around €160 to €180, for three doses around €240 to €270. Please bring the vaccine to your vaccination appointment in a cool bag.',
          'In addition, there are the medical services under the GOÄ: the travel medicine consultation with your vaccination plan and the vaccination at each appointment (approx. €32). Follow-up doses of the same series within one month are charged at a lower rate. Current guide prices are on our fees page; we give you the expected total cost in writing beforehand.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Zahlt die Krankenkasse?', en: 'Does health insurance pay?' },
        text: {
          de: 'Für private Reisen ist die Tollwutimpfung keine Pflichtleistung der gesetzlichen Krankenkassen. Viele Kassen erstatten Reiseimpfungen aber freiwillig, oft vor allem den Impfstoff. Fragen Sie vorher nach, ob Ihre Kasse auch nach einer Privatrechnung erstattet. Private Versicherungen erstatten je nach Tarif; bei Dienstreisen zahlt in der Regel der Arbeitgeber.',
          en: 'For private trips, rabies vaccination is not a mandatory benefit of statutory health insurance. Many insurers do reimburse travel vaccinations voluntarily, often mainly the vaccine. Ask beforehand whether your insurer also reimburses a private invoice. Private insurers reimburse depending on the plan; for business travel, the employer usually pays.',
        },
      },
      links: [
        { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
        { label: { de: 'Reiseimpfung: Kosten & Erstattung', en: 'Travel vaccination: costs & reimbursement' }, path: '/ratgeber/reiseimpfung-kosten-krankenkasse' },
      ],
    },
    {
      id: 'kinder',
      heading: { de: 'Tollwutimpfung für Kinder', en: 'Rabies vaccination for children' },
      body: {
        de: [
          'Kinder sind besonders gefährdet: Sie gehen eher auf Tiere zu, erzählen nicht immer von einem Biss oder Kratzer und werden wegen ihrer Größe häufiger am Kopf gebissen. Bei Bissen am Kopf kann die Erkrankung schneller ausbrechen. Die STIKO empfiehlt deshalb, die Impfung bei Kindern großzügig einzusetzen.',
          'Die Tollwutimpfung ist ab Geburt möglich. Kinder werden nach dem herkömmlichen Schema oder – bei intaktem Immunsystem – mit zwei Dosen an Tag 0 und 7 geimpft; das Schnellschema an Tag 0, 3 und 7 ist erst ab 18 Jahren zugelassen. Kinder erhalten dieselbe Impfstoffmenge wie Erwachsene, der Impfstoff kostet daher gleich viel. So schützen Sie Ihr Kind unterwegs zusätzlich:',
        ],
        en: [
          'Children are at particular risk: they are more likely to approach animals, do not always mention a bite or scratch and, because of their height, are bitten on the head more often. With bites to the head, symptoms can appear sooner. STIKO therefore recommends a generous approach to vaccinating children.',
          'Rabies vaccination is possible from birth. Children are vaccinated on the conventional schedule or – with a healthy immune system – with two doses on days 0 and 7; the rapid schedule on days 0, 3 and 7 is only approved from age 18. Children receive the same amount of vaccine as adults, so the vaccine costs the same. How to protect your child on the trip as well:',
        ],
      },
      list: {
        de: [
          'Erklären Sie Ihrem Kind, dass es Hunde, Katzen und Affen nicht streicheln oder füttern soll – auch keine Jungtiere.',
          'Beaufsichtigen Sie kleine Kinder in der Nähe von Tieren.',
          'Fragen Sie nach, wenn Ihr Kind mit einem Tier gespielt hat, und nehmen Sie auch kleine Kratzer ernst.',
        ],
        en: [
          'Explain to your child not to stroke or feed dogs, cats or monkeys – including young animals.',
          'Supervise young children near animals.',
          'Ask whether your child has played with an animal, and take even small scratches seriously.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Schwangerschaft und Stillzeit', en: 'Pregnancy and breastfeeding' },
        text: {
          de: 'Die vorbeugende Impfung ist in Schwangerschaft und Stillzeit möglich, wenn der Nutzen ein mögliches Risiko überwiegt. Für die Behandlung nach einem Biss gibt es keine Gegenanzeige – sie muss dann in jedem Fall erfolgen.',
          en: 'Pre-exposure vaccination is possible during pregnancy and breastfeeding if the benefit outweighs any possible risk. There is no contraindication to treatment after a bite – it must be given in any case.',
        },
      },
    },
  ],
  faq: [
    {
      q: { de: 'Brauche ich für meine Reise eine Tollwutimpfung?', en: 'Do I need a rabies vaccination for my trip?' },
      a: {
        de: 'Das hängt vom Reiseland, von der Reisedauer und von Ihrem Reisestil ab. In Ländern mit hohem Tollwut-Risiko wie Indien oder Indonesien empfiehlt die STIKO die Impfung unabhängig von der Reisedauer, wenn die Versorgung nach einem Biss vor Ort nicht gesichert ist, Sie einfach reisen oder etwa Rad fahren oder laufen. In Ländern mit moderatem Risiko gilt das bei Aufenthalten über vier Wochen oder wiederholten Reisen. Für Kinder wird die Impfung großzügig empfohlen.',
        en: 'It depends on the destination, the length of your stay and how you travel. In countries with a high rabies risk such as India or Indonesia, STIKO recommends vaccination regardless of trip length if care after a bite is not assured locally, if you travel under basic conditions or if you cycle or run, for example. In moderate-risk countries this applies to stays of more than four weeks or repeated trips. For children, vaccination is recommended generously.',
      },
    },
    {
      q: { de: 'Wie viele Impfungen brauche ich, und wie lange dauert das?', en: 'How many doses do I need, and how long does it take?' },
      a: {
        de: 'Nach dem herkömmlichen Schema drei Dosen an Tag 0, 7 und 21 oder 28. Bei intaktem Immunsystem reichen für die Reise auch zwei Dosen an Tag 0 und 7; Erwachsene von 18 bis 64 Jahren können zudem ein Schnellschema an Tag 0, 3 und 7 erhalten. Mit den verkürzten Schemata ist die Impfserie also innerhalb einer Woche abgeschlossen.',
        en: 'On the conventional schedule, three doses on days 0, 7 and 21 or 28. With a healthy immune system, two doses on days 0 and 7 are also sufficient for the trip; adults aged 18 to 64 can alternatively have a rapid schedule on days 0, 3 and 7. With the shortened schedules, the series is therefore complete within a week.',
      },
    },
    {
      q: { de: 'Was kostet die Tollwutimpfung?', en: 'How much does rabies vaccination cost?' },
      a: {
        de: 'Der Impfstoff kostet in der Apotheke derzeit ca. 80 bis 90 € pro Dosis – je nach Schema also rund 160 bis 270 €. Hinzu kommen bei uns die Beratung und je Impftermin ca. 32 € ärztliches Honorar; Folgedosen derselben Serie innerhalb eines Monats sind günstiger. Die aktuellen Richtwerte stehen auf unserer Kostenseite.',
        en: 'The vaccine currently costs approx. €80 to €90 per dose at the pharmacy – around €160 to €270 depending on the schedule. In addition, with us there is the consultation and a medical fee of approx. €32 per vaccination appointment; follow-up doses of the same series within one month cost less. Current guide prices are on our fees page.',
      },
    },
    {
      q: { de: 'Muss ich nach einem Biss trotz Impfung zum Arzt?', en: 'Do I need to see a doctor after a bite even if I am vaccinated?' },
      a: {
        de: 'Ja, unbedingt. Waschen Sie die Wunde sofort mindestens 15 Minuten mit Seife und Wasser aus und suchen Sie noch am selben Tag ärztliche Hilfe. Wer vollständig vorgeimpft ist und ein intaktes Immunsystem hat, braucht in der Regel zwei weitere Impfungen an Tag 0 und 3, aber kein Immunglobulin.',
        en: 'Yes, definitely. Wash the wound immediately for at least 15 minutes with soap and water and seek medical help the same day. If you are fully pre-vaccinated and have a healthy immune system, you usually need two further doses on days 0 and 3, but no immunoglobulin.',
      },
    },
    {
      q: { de: 'Muss die Tollwutimpfung aufgefrischt werden?', en: 'Does rabies vaccination need a booster?' },
      a: {
        de: 'Nach drei Dosen für Reisende in der Regel nicht: Nach einem Biss genügen dann zwei Impfungen. Nach dem Zwei-Dosen-Schema sollte bei weiter bestehendem Risiko spätestens nach einem Jahr eine dritte Dosis folgen. Bei dauerhaft erhöhtem Risiko, etwa im Beruf, besprechen wir Auffrischungen individuell.',
        en: 'After three doses, generally not for travellers: after a bite, two doses are then sufficient. After the two-dose schedule, a third dose should follow within one year at the latest if the risk continues. With a permanently increased risk, for example at work, we discuss boosters individually.',
      },
    },
  ],
  // Neue ID ist erst nach dem Einpflegen von `tollwutImpfungQuellen` in sources.ts gültig.
  sourceIds: [
    'stikoReise2026',
    'stikoReiseLaender2026',
    'rkiTollwut',
    'whoRabies',
    'whoRabiesPositionPaper2018',
    'peiTollwut',
    'goae',
    'sgb5Schutzimpfungen',
    'bgbKosteninformation',
  ],
  lastReviewed: new Date('2026-10-28'),
  related: [
    { label: { de: 'Krankheitsbild Tollwut', en: 'Rabies – the disease' }, path: '/krankheitsbilder/tollwut' },
    { label: { de: 'Reiseimpfungen', en: 'Travel vaccinations' }, path: '/leistungen/reiseimpfungen' },
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
  ],
};
