/**
 * Krankheitsbild Typhus (Typhus abdominalis) — fachlicher Inhalt (DE/EN),
 * belegt über das Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Schwerpunkt: bakterielle, über Wasser und Lebensmittel übertragene
 * Allgemeininfektion. Der Abschnitt „Schutzimpfung" bildet die beiden
 * Impfstofftypen (oraler Lebendimpfstoff bzw. parenteraler Totimpfstoff) ab und
 * betont, dass die Impfung nur teilweise schützt und Hygiene zentral bleibt.
 */
import type { ClinicalPage } from '../types';

export const typhusDisease: ClinicalPage = {
  meta: {
    title: { de: 'Typhus', en: 'Typhoid fever' },
    description: {
      de: 'Typhus abdominalis – Erreger, fäkal-orale Übertragung, Verbreitung, Krankheitsverlauf, Impfung und Vorbeugung. Fachlich fundiert und mit Quellen belegt.',
      en: 'Typhoid fever – pathogen, faecal-oral transmission, distribution, course of disease, vaccination and prevention. Evidence-based and fully referenced.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Typhus ist eine bakterielle Allgemeininfektion, die über verunreinigtes Wasser und Lebensmittel übertragen wird und mit hohem Fieber einhergeht. Das Risiko ist vor allem in Südasien erhöht – Hygiene und, je nach Reise, eine Impfung verringern es.',
      en: 'Typhoid fever is a systemic bacterial infection transmitted via contaminated water and food and accompanied by high fever. The risk is particularly raised in South Asia – hygiene and, depending on the trip, vaccination reduce it.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Typhus abdominalis wird durch das Bakterium Salmonella enterica Serovar Typhi ausgelöst. Eng verwandte Erreger (Paratyphi A, B und C) verursachen den meist milderen Paratyphus. Anders als die häufigen Lebensmittel-Salmonellen befallen diese Bakterien den gesamten Körper und nicht nur den Darm.',
          'Der Erreger kommt ausschließlich beim Menschen vor. Ein Teil der Erkrankten scheidet die Bakterien auch nach Abklingen der Beschwerden über längere Zeit aus – sogenannte Dauerausscheider – und kann so weitere Menschen anstecken.',
        ],
        en: [
          'Typhoid fever is caused by the bacterium Salmonella enterica serovar Typhi. Closely related pathogens (Paratyphi A, B and C) cause the usually milder paratyphoid fever. Unlike the common food-borne salmonellae, these bacteria affect the whole body and not just the gut.',
          'The pathogen occurs only in humans. Some of those who fall ill continue to excrete the bacteria for a long time after symptoms subside – so-called chronic carriers – and can thus infect others.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Die Übertragung erfolgt fäkal-oral: über Trinkwasser und Lebensmittel, die mit Ausscheidungen infizierter Personen verunreinigt sind. Häufige Quellen sind unsauberes Wasser, Eiswürfel, ungekochte Speisen sowie roh verzehrtes Obst und Gemüse.',
          'Mangelnde Wasser- und Lebensmittelhygiene begünstigt die Verbreitung. Auch Speisen von Straßenständen und unzureichend gekühlte Lebensmittel können ein Risiko darstellen.',
        ],
        en: [
          'Transmission is faecal-oral: via drinking water and food contaminated with the excretions of infected people. Common sources are unclean water, ice cubes, uncooked dishes and raw fruit and vegetables.',
          'Poor water and food hygiene favours its spread. Food from street stalls and inadequately chilled food can also pose a risk.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Typhus tritt vor allem in Regionen mit eingeschränkter Trinkwasser- und Abwasserhygiene auf. Das höchste Risiko für Reisende besteht auf dem indischen Subkontinent (unter anderem Indien, Pakistan, Bangladesch und Nepal); weitere betroffene Regionen liegen in Südostasien, Afrika und Teilen Lateinamerikas.',
          'Das Risiko steigt mit längeren Aufenthalten, Reisen unter einfachen Bedingungen und dem Besuch von Verwandten und Bekannten. Welche Ziele aktuell betroffen sind, ordnen wir im Beratungsgespräch und anhand der unten genannten Quellen ein.',
        ],
        en: [
          'Typhoid fever occurs mainly in regions with limited drinking-water and sewage hygiene. The highest risk for travellers is on the Indian subcontinent (including India, Pakistan, Bangladesh and Nepal); other affected regions lie in South-East Asia, Africa and parts of Latin America.',
          'The risk rises with longer stays, travel under simple conditions and visits to friends and relatives. Which destinations are currently affected is something we assess in the consultation and on the basis of the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Zwischen Ansteckung und Erkrankung liegen meist ein bis drei Wochen. Typisch ist ein über Tage langsam ansteigendes, dann anhaltend hohes Fieber mit ausgeprägtem Krankheitsgefühl, Kopf- und Bauchschmerzen. Anfangs besteht oft eine Verstopfung statt Durchfall; gelegentlich treten ein vergleichsweise langsamer Puls und blassrote Hautflecken auf.',
          'Unbehandelt kann Typhus über Wochen verlaufen und zu Komplikationen wie Darmblutungen oder einem Darmdurchbruch führen. Mit rechtzeitiger Behandlung ist die Prognose deutlich günstiger.',
        ],
        en: [
          'Between infection and illness there are usually one to three weeks. Typically there is a fever that rises slowly over days and then remains persistently high, with a marked feeling of illness, headache and abdominal pain. Initially there is often constipation rather than diarrhoea; occasionally a comparatively slow pulse and pale-red skin spots occur.',
          'Untreated, typhoid fever can last for weeks and lead to complications such as intestinal bleeding or perforation. With timely treatment the prognosis is considerably better.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Fieber nach Tropenreise abklären', en: 'Have fever after tropical travel assessed' },
        text: {
          de: 'Typhus wird mit Antibiotika behandelt; zunehmende Resistenzen erschweren die Therapie jedoch in manchen Regionen. Hohes oder anhaltendes Fieber während oder nach einer Reise in ein Risikogebiet sollte rasch ärztlich abgeklärt werden – nennen Sie dabei stets Ihr Reiseziel.',
          en: 'Typhoid fever is treated with antibiotics; however, increasing resistance makes treatment more difficult in some regions. High or persistent fever during or after travel to a risk area should be assessed by a doctor promptly – always mention your destination.',
        },
      },
    },
    {
      id: 'schutz',
      heading: { de: 'Lebensmittel- und Trinkwasserhygiene', en: 'Food and water hygiene' },
      body: {
        de: [
          'Da Typhus über Wasser und Lebensmittel übertragen wird, ist eine sorgfältige Hygiene der wichtigste Schutz: nur sicheres Trinkwasser verwenden, auf Eiswürfel verzichten, Speisen frisch und ausreichend erhitzt verzehren und Obst selbst schälen („cook it, boil it, peel it or forget it"). Gründliches Händewaschen unterstützt diesen Schutz.',
          'Diese Regeln verringern das Risiko deutlich. Da die Impfung nur teilweise schützt, bleibt die Lebensmittel- und Trinkwasserhygiene auch nach einer Impfung wichtig.',
        ],
        en: [
          'Because typhoid fever is transmitted via water and food, careful hygiene is the most important protection: use only safe drinking water, avoid ice cubes, eat food fresh and thoroughly heated, and peel fruit yourself ("cook it, boil it, peel it or forget it"). Thorough hand washing supports this protection.',
          'These rules considerably reduce the risk. As vaccination offers only partial protection, food and water hygiene remains important even after vaccination.',
        ],
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Zum Schutz vor Typhus stehen zwei Impfstofftypen zur Verfügung: ein oraler Lebendimpfstoff, der als Kapseln an drei Tagen eingenommen wird (ab dem Alter von fünf Jahren), und ein gespritzter Totimpfstoff aus einem Bestandteil der Bakterienhülle (Vi-Polysaccharid) als Einzeldosis (ab dem Alter von zwei Jahren). Den Totimpfstoff gibt es auch in Kombination mit der Hepatitis-A-Impfung.',
          'Beide Impfstoffe bieten einen begrenzten Schutz von etwa der Hälfte bis zwei Dritteln der Geimpften; die Hygiene bleibt daher entscheidend. Beim oralen Lebendimpfstoff sind zudem zeitliche Abstände zu bestimmten Antibiotika und zur Malariaprophylaxe zu beachten, und er ist bei Immunschwäche oder in der Schwangerschaft nicht geeignet.',
          'Die Ständige Impfkommission (STIKO) und die DTG empfehlen die Typhus-Impfung als Reiseimpfung für bestimmte Reisen in Regionen mit erhöhtem Vorkommen, insbesondere bei einfachen Reisebedingungen oder längeren Aufenthalten. Ob und in welcher Form die Impfung für Sie sinnvoll ist, klären wir individuell im Beratungsgespräch.',
        ],
        en: [
          'Two types of vaccine are available to protect against typhoid fever: an oral live vaccine taken as capsules on three days (from the age of five), and an injected inactivated vaccine made from a component of the bacterial capsule (Vi polysaccharide) given as a single dose (from the age of two). The inactivated vaccine is also available in combination with the hepatitis A vaccine.',
          'Both vaccines offer limited protection in around half to two-thirds of those vaccinated; hygiene therefore remains decisive. The oral live vaccine also requires time intervals from certain antibiotics and from malaria prophylaxis and is not suitable in cases of immunodeficiency or during pregnancy.',
          'The German Standing Committee on Vaccination (STIKO) and the DTG recommend typhoid vaccination as a travel vaccination for certain trips to regions with increased occurrence, particularly under simple travel conditions or on longer stays. Whether and in what form vaccination is sensible for you is something we clarify individually in the consultation.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Impfung ersetzt die Hygiene nicht', en: 'Vaccination does not replace hygiene' },
        text: {
          de: 'Die Typhus-Impfung senkt das Erkrankungsrisiko, bietet aber keinen vollständigen Schutz. Sorgfältige Lebensmittel- und Trinkwasserhygiene bleibt daher auch für Geimpfte die wichtigste Vorbeugung – und schützt zugleich vor anderen Durchfallerkrankungen.',
          en: 'Typhoid vaccination lowers the risk of illness but does not offer complete protection. Careful food and water hygiene therefore remains the most important prevention even for those vaccinated – and at the same time protects against other diarrhoeal diseases.',
        },
      },
    },
  ],
  sourceIds: ['rkiTyphus', 'whoTyphus', 'peiTyphus', 'stikoImpfempfehlungen', 'auswaertigesAmt'],
  lastReviewed: new Date('2026-06-12'),
  related: [
    {
      label: { de: 'Reisemedizinische Beratung', en: 'Travel medicine consultation' },
      path: '/leistungen/reiseberatung',
    },
    {
      label: { de: 'Reiseimpfungen im Überblick', en: 'Travel vaccinations at a glance' },
      path: '/leistungen/reiseimpfungen',
    },
    {
      label: { de: 'Hepatitis A', en: 'Hepatitis A' },
      path: '/krankheitsbilder/hepatitis-a',
    },
    {
      label: { de: 'Risikogebiete', en: 'Risk areas' },
      path: '/risikogebiete',
    },
  ],
};
