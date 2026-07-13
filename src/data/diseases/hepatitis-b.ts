/**
 * Krankheitsbild Hepatitis B — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Schwerpunkt: blutübertragene Leberentzündung mit Chronifizierungsrisiko;
 * der Abschnitt „Schutzimpfung" bildet das 3-Dosen-Schema (Totimpfstoff) und
 * die Stellung als Standard- und Reiseimpfung ab.
 */
import type { ClinicalPage } from '../types';

export const hepatitisBDisease: ClinicalPage = {
  meta: {
    title: { de: 'Hepatitis B', en: 'Hepatitis B' },
    description: {
      de: 'Hepatitis B – Erreger, Übertragung über Blut und Schleimhäute, Verbreitung, Krankheitsverlauf mit Chronifizierungsrisiko, Impfung und Vorbeugung.',
      en: 'Hepatitis B – pathogen, transmission via blood and mucous membranes, distribution, course of disease with risk of chronicity, vaccination and prevention.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Hepatitis B ist eine virusbedingte Leberentzündung, die über Blut und Körperflüssigkeiten übertragen wird. Anders als Hepatitis A kann sie chronisch verlaufen – ein gut wirksamer Impfschutz steht zur Verfügung und ist zugleich Standardimpfung im Kindesalter.',
      en: 'Hepatitis B is a viral inflammation of the liver transmitted via blood and body fluids. Unlike hepatitis A it can become chronic – an effective vaccination is available and is also a standard childhood immunisation.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Hepatitis B wird durch das Hepatitis-B-Virus (HBV) ausgelöst, ein behülltes DNA-Virus aus der Familie der Hepadnaviren. Es vermehrt sich in den Leberzellen und löst dort eine Entzündung aus. HBV ist hoch infektiös – bereits kleinste Mengen Blut können für eine Ansteckung ausreichen.',
          'Eine Infektion mit dem Hepatitis-D-Virus ist nur gemeinsam mit Hepatitis B möglich. Wer gegen Hepatitis B geschützt ist, ist daher zugleich vor Hepatitis D geschützt.',
        ],
        en: [
          'Hepatitis B is caused by the hepatitis B virus (HBV), an enveloped DNA virus of the hepadnavirus family. It replicates in the liver cells and causes inflammation there. HBV is highly infectious – even the smallest amounts of blood can be enough to transmit it.',
          'Infection with the hepatitis D virus is only possible together with hepatitis B. Anyone protected against hepatitis B is therefore also protected against hepatitis D.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Hepatitis B wird über Blut und andere Körperflüssigkeiten übertragen. Häufige Wege sind ungeschützte sexuelle Kontakte, der Kontakt mit infiziertem Blut sowie die Übertragung von der Mutter auf das Kind während der Geburt. Das Virus kann auf Oberflächen längere Zeit ansteckend bleiben.',
          'Auf Reisen sind vor allem medizinische und kosmetische Eingriffe mit unzureichend sterilisierten Instrumenten von Bedeutung – etwa Tätowierungen, Piercings, Akupunktur oder zahnärztliche und ärztliche Behandlungen – ebenso wie sexuelle Kontakte. Auch eine notfallmäßige medizinische Versorgung vor Ort kann ein Risiko darstellen.',
        ],
        en: [
          'Hepatitis B is transmitted via blood and other body fluids. Common routes are unprotected sexual contact, contact with infected blood and transmission from mother to child during birth. The virus can remain infectious on surfaces for a considerable time.',
          'When travelling, medical and cosmetic procedures with inadequately sterilised instruments are particularly relevant – such as tattoos, piercings, acupuncture or dental and medical treatment – as is sexual contact. Emergency medical care abroad can also pose a risk.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Hepatitis B kommt weltweit vor. Besonders verbreitet ist sie in Teilen Subsahara-Afrikas, in Ost- und Südostasien, im Nahen und Mittleren Osten, im Amazonasgebiet sowie in Teilen Ost- und Südeuropas. In diesen Regionen tragen anteilig mehr Menschen das Virus dauerhaft in sich.',
          'Das Ansteckungsrisiko hängt weniger von der Art der Unterkunft als vom individuellen Verhalten und von möglichen medizinischen Eingriffen vor Ort ab. Eine Einordnung Ihres Reiseziels nehmen wir im Beratungsgespräch und anhand der unten genannten Quellen vor.',
        ],
        en: [
          'Hepatitis B occurs worldwide. It is particularly common in parts of sub-Saharan Africa, in East and South-East Asia, in the Near and Middle East, in the Amazon region and in parts of Eastern and Southern Europe. In these regions a higher proportion of people carry the virus permanently.',
          'The risk of infection depends less on the type of accommodation than on individual behaviour and possible medical procedures on site. We assess your destination in the consultation and on the basis of the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Zwischen Ansteckung und Erkrankung vergehen in der Regel 45 bis 180 Tage. Die akute Infektion verläuft häufig unbemerkt oder mit unspezifischen Beschwerden wie Müdigkeit, Appetitlosigkeit und Übelkeit; bei einem Teil der Betroffenen kommt es zu einer Gelbsucht (Ikterus). Die meisten Erwachsenen heilen die akute Infektion folgenlos aus.',
          'Entscheidend ist, ob die Infektion chronisch wird. Das Risiko ist stark altersabhängig: Bei im Säuglingsalter infizierten Kindern bleibt die Infektion in bis zu rund 90 Prozent der Fälle bestehen, bei Erwachsenen nur in unter fünf Prozent. Eine chronische Hepatitis B kann über Jahre zu einer Leberzirrhose und zu Leberkrebs führen und ist ein wesentlicher Grund, warum der Impfschutz so wichtig ist.',
        ],
        en: [
          'Between infection and illness there are usually 45 to 180 days. The acute infection often goes unnoticed or causes non-specific symptoms such as tiredness, loss of appetite and nausea; some people develop jaundice. Most adults clear the acute infection without consequences.',
          'The decisive question is whether the infection becomes chronic. The risk is strongly age-dependent: in children infected as infants the infection persists in up to about 90 per cent of cases, in adults in fewer than five per cent. Chronic hepatitis B can lead to liver cirrhosis and liver cancer over the years and is a key reason why vaccination is so important.',
        ],
      },
      callout: {
        variant: 'important',
        title: { de: 'Chronischer Verlauf möglich', en: 'Can become chronic' },
        text: {
          de: 'Für die akute Hepatitis B gibt es keine ursächliche Therapie; behandelt werden können nur die Beschwerden. Eine chronische Infektion lässt sich heute mit antiviralen Medikamenten gut kontrollieren, in der Regel jedoch nicht vollständig heilen – sie erfordert eine dauerhafte ärztliche Begleitung. Umso wichtiger ist die Vorbeugung durch Impfung.',
          en: 'There is no causal therapy for acute hepatitis B; only the symptoms can be treated. A chronic infection can today be well controlled with antiviral medicines but usually not completely cured – it requires ongoing medical care. This makes prevention through vaccination all the more important.',
        },
      },
    },
    {
      id: 'schutz',
      heading: { de: 'Expositionsschutz', en: 'Reducing exposure' },
      body: {
        de: [
          'Das Infektionsrisiko lässt sich verringern, indem Kontakt mit fremdem Blut und ungeschützte sexuelle Kontakte vermieden werden. Auf Reisen empfiehlt es sich, bei Tätowierungen, Piercings und medizinischen Eingriffen auf saubere, möglichst Einweg-Instrumente zu achten und keine Gegenstände wie Rasierer oder Zahnbürsten gemeinsam zu nutzen.',
          'Diese Maßnahmen senken das Risiko, lassen sich im Ernstfall – etwa bei einer notwendigen medizinischen Versorgung – aber nicht immer einhalten. Den zuverlässigsten Schutz bietet daher die Impfung.',
        ],
        en: [
          'The risk of infection can be reduced by avoiding contact with other people’s blood and unprotected sexual contact. When travelling it is advisable to ensure clean, ideally single-use instruments for tattoos, piercings and medical procedures, and not to share items such as razors or toothbrushes.',
          'These measures lower the risk but cannot always be maintained in an emergency – for instance when medical care becomes necessary. The most reliable protection is therefore vaccination.',
        ],
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Zum Schutz vor Hepatitis B stehen gut verträgliche Totimpfstoffe zur Verfügung, die einen gentechnisch hergestellten Bestandteil der Virushülle enthalten und keine vermehrungsfähigen Viren. Verfügbar sind reine Hepatitis-B-Impfstoffe sowie ein Kombinationsimpfstoff gegen Hepatitis A und B.',
          'Die Grundimmunisierung umfasst üblicherweise drei Dosen nach dem Schema 0 – 1 – 6 Monate; für kurzfristige Reisen sind beschleunigte Schemata möglich. Nach vollständiger Impfung besteht ein langjähriger, wahrscheinlich lebenslanger Schutz. Bei bestimmten Personengruppen kann der Impferfolg über die Antikörper (Anti-HBs) kontrolliert werden.',
          'Die Ständige Impfkommission (STIKO) empfiehlt die Hepatitis-B-Impfung als Standardimpfung bereits im Säuglingsalter sowie als Indikations- und Reiseimpfung. Ob und in welcher Form die Impfung für Sie sinnvoll ist – etwa als Kombinationsimpfung mit Hepatitis A – klären wir individuell im reisemedizinischen Beratungsgespräch.',
        ],
        en: [
          'Well-tolerated inactivated vaccines are available to protect against hepatitis B. They contain a genetically engineered component of the viral envelope and no viable viruses. Both single hepatitis B vaccines and a combination vaccine against hepatitis A and B are available.',
          'Primary immunisation usually consists of three doses following a 0 – 1 – 6 month schedule; accelerated schedules are possible for trips at short notice. After complete vaccination there is many years of protection, probably for life. In certain groups the success of vaccination can be checked via the antibodies (anti-HBs).',
          'The German Standing Committee on Vaccination (STIKO) recommends hepatitis B vaccination as a standard immunisation already in infancy and as an indication and travel vaccination. Whether and in what form vaccination is sensible for you – for example as a combination vaccine with hepatitis A – is something we clarify individually in the travel-medicine consultation.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Schon im Kindesalter geimpft?', en: 'Already vaccinated in childhood?' },
        text: {
          de: 'Da Hepatitis B seit vielen Jahren zu den Standardimpfungen im Säuglingsalter gehört, sind viele jüngere Reisende bereits grundimmunisiert. Bringen Sie Ihren Impfpass mit – wir prüfen den vorhandenen Schutz und ergänzen nur das, was tatsächlich nötig ist.',
          en: 'As hepatitis B has been a standard infant immunisation for many years, many younger travellers are already fully immunised. Please bring your vaccination record – we check the existing protection and add only what is actually needed.',
        },
      },
    },
  ],
  sourceIds: ['rkiHepatitisB', 'whoHepatitisB', 'peiHepatitisB', 'stikoImpfempfehlungen', 'auswaertigesAmt'],
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
