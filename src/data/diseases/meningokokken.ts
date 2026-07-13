/**
 * Krankheitsbild Meningokokken — fachlicher Inhalt (DE/EN), belegt über das
 * Quellen-Register. Sachlich, ohne Heilversprechen (HWG-konform).
 *
 * Schwerpunkt: bakterielle Hirnhautentzündung und Blutvergiftung, die rasch
 * lebensbedrohlich werden können. Der Abschnitt „Einreisebestimmungen" bildet
 * die ACWY-Nachweispflicht für Pilgerreisen ab, der Impf-Abschnitt die beiden
 * Impfstoff-Linien (ACWY und B) sowie die STIKO-Empfehlungen.
 */
import type { ClinicalPage } from '../types';

export const meningokokkenDisease: ClinicalPage = {
  meta: {
    title: { de: 'Meningokokken', en: 'Meningococcal disease' },
    description: {
      de: 'Meningokokken – Erreger, Übertragung durch Tröpfchen, Verbreitung, Krankheitsverlauf, Einreisebestimmungen, Impfung und Vorbeugung.',
      en: 'Meningococcal disease – pathogen, droplet transmission, distribution, course of disease, entry requirements, vaccination and prevention.',
    },
    eyebrow: { de: 'Krankheitsbild', en: 'Disease' },
    lead: {
      de: 'Meningokokken sind Bakterien, die eine Hirnhautentzündung und eine Blutvergiftung auslösen können. Diese Erkrankungen sind selten, können aber innerhalb von Stunden lebensbedrohlich werden – verschiedene Impfungen bieten einen wirksamen Schutz.',
      en: 'Meningococci are bacteria that can cause meningitis and blood poisoning. These illnesses are rare but can become life-threatening within hours – various vaccinations offer effective protection.',
    },
  },
  sections: [
    {
      id: 'erreger',
      heading: { de: 'Erreger', en: 'Pathogen' },
      body: {
        de: [
          'Meningokokken (Neisseria meningitidis) sind Bakterien, die beim Menschen vorkommen. Ein Teil der Bevölkerung trägt sie ohne Beschwerden im Nasen-Rachen-Raum. Nur selten gelangen die Bakterien in die Blutbahn oder zu den Hirnhäuten und lösen dort eine schwere Erkrankung aus.',
          'Es werden mehrere Serogruppen unterschieden, vor allem A, B, C, W, X und Y. Welche Gruppe vorherrscht, ist von Region zu Region verschieden. In Deutschland werden invasive Erkrankungen derzeit vor allem durch die Serogruppen B und Y verursacht; dies ist für die Wahl der Impfung von Bedeutung.',
        ],
        en: [
          'Meningococci (Neisseria meningitidis) are bacteria that occur in humans. Part of the population carries them in the nose and throat without symptoms. Only rarely do the bacteria enter the bloodstream or reach the meninges and cause severe illness there.',
          'Several serogroups are distinguished, above all A, B, C, W, X and Y. Which group predominates varies from region to region. In Germany, invasive disease is currently caused mainly by serogroups B and Y; this is relevant to the choice of vaccine.',
        ],
      },
    },
    {
      id: 'uebertragung',
      heading: { de: 'Übertragung', en: 'Transmission' },
      body: {
        de: [
          'Die Bakterien werden über Tröpfchen und Sekrete aus dem Nasen-Rachen-Raum übertragen, etwa beim Husten, Niesen oder Küssen. Eine Ansteckung setzt in der Regel einen engen Kontakt voraus; flüchtige Begegnungen reichen meist nicht aus.',
          'Begünstigt wird die Übertragung durch enges Zusammenleben und Menschenansammlungen. Reiserelevant sind daher unter anderem Gemeinschaftsunterkünfte sowie große Veranstaltungen und Pilgerreisen.',
        ],
        en: [
          'The bacteria are transmitted via droplets and secretions from the nose and throat, for instance when coughing, sneezing or kissing. Infection usually requires close contact; fleeting encounters are generally not enough.',
          'Transmission is favoured by close communal living and crowds. Relevant for travel are therefore, among others, shared accommodation as well as large events and pilgrimages.',
        ],
      },
    },
    {
      id: 'verbreitung',
      heading: { de: 'Verbreitung', en: 'Geographic distribution' },
      body: {
        de: [
          'Meningokokken kommen weltweit vor. Das höchste Risiko für Reisende besteht im sogenannten afrikanischen Meningitisgürtel, der sich südlich der Sahara von Senegal bis Äthiopien erstreckt; dort treten besonders in der Trockenzeit größere Ausbrüche auf.',
          'Ein erhöhtes Risiko besteht außerdem bei großen Menschenansammlungen, etwa bei Pilgerreisen nach Saudi-Arabien. Welche Regionen und Reisezeiten betroffen sind, ordnen wir im Beratungsgespräch und anhand der unten genannten Quellen ein.',
        ],
        en: [
          'Meningococci occur worldwide. The highest risk for travellers is in the so-called African meningitis belt, which stretches south of the Sahara from Senegal to Ethiopia; larger outbreaks occur there particularly in the dry season.',
          'There is also an increased risk at large gatherings, for example during pilgrimages to Saudi Arabia. Which regions and travel times are affected is something we assess in the consultation and on the basis of the sources listed below.',
        ],
      },
    },
    {
      id: 'verlauf',
      heading: { de: 'Krankheitsverlauf', en: 'Course of disease' },
      body: {
        de: [
          'Zwischen Ansteckung und Erkrankung liegen meist drei bis vier Tage. Die Erkrankung beginnt oft plötzlich. Bei einer Hirnhautentzündung (Meningitis) treten hohes Fieber, starke Kopfschmerzen, ein steifer Nacken und Lichtempfindlichkeit auf. Bei einer Blutvergiftung (Sepsis) können punktförmige Hauteinblutungen hinzukommen.',
          'Meningokokken-Erkrankungen können innerhalb von Stunden schwer verlaufen – deshalb zählt bei Verdacht jede Stunde: Wer rasch ärztlich behandelt wird, hat die besten Aussichten. In seltenen, schweren Fällen kann die Erkrankung trotz Behandlung lebensbedrohlich sein oder Folgeschäden hinterlassen. Enge Kontaktpersonen einer erkrankten Person erhalten vorsorglich Antibiotika, um eine Ausbreitung zu verhindern.',
        ],
        en: [
          'Between infection and illness there are usually three to four days. The illness often begins suddenly. With meningitis there is high fever, severe headache, a stiff neck and sensitivity to light. With blood poisoning (sepsis), pinpoint skin bleeds may also appear.',
          'Meningococcal disease can become severe within hours – so if it is suspected, every hour counts: those treated promptly have the best outlook. In rare, severe cases the disease can be life-threatening despite treatment or leave lasting effects. Close contacts of an ill person receive antibiotics as a precaution to prevent its spread.',
        ],
      },
      callout: {
        variant: 'caution',
        title: { de: 'Notfall – sofort handeln', en: 'Emergency – act immediately' },
        text: {
          de: 'Hohes Fieber mit starken Kopfschmerzen, steifem Nacken oder punktförmigen Hauteinblutungen ist ein medizinischer Notfall. Suchen Sie dann ohne Verzögerung ärztliche Hilfe – die Erkrankung wird mit Antibiotika behandelt, und jede Stunde zählt. Nennen Sie dabei eine zurückliegende Reise.',
          en: 'High fever with severe headache, a stiff neck or pinpoint skin bleeds is a medical emergency. Seek medical help without delay – the disease is treated with antibiotics and every hour counts. Mention any recent travel.',
        },
      },
    },
    {
      id: 'einreise',
      heading: { de: 'Einreisebestimmungen', en: 'Entry requirements' },
      body: {
        de: [
          'Für Pilgerreisen nach Mekka (Hadsch und Umrah) verlangt Saudi-Arabien einen gültigen Nachweis einer Meningokokken-Impfung gegen die Serogruppen A, C, W und Y (ACWY). Ohne diesen Nachweis ist die Einreise zu diesem Zweck nicht möglich.',
          'Der Impfnachweis muss meist eine bestimmte Zeit vor der Einreise ausgestellt sein und eine festgelegte Gültigkeitsdauer aufweisen. Da sich solche Vorgaben ändern können, prüfen wir die aktuell geltenden Anforderungen für Ihre Reise gemeinsam.',
        ],
        en: [
          'For pilgrimages to Mecca (Hajj and Umrah), Saudi Arabia requires valid proof of meningococcal vaccination against serogroups A, C, W and Y (ACWY). Without this proof, entry for this purpose is not possible.',
          'The vaccination certificate must usually be issued a certain time before entry and have a defined period of validity. As such requirements can change, we check the rules currently in force for your trip together.',
        ],
      },
    },
    {
      id: 'impfung',
      heading: { de: 'Schutzimpfung', en: 'Vaccination' },
      body: {
        de: [
          'Zum Schutz vor Meningokokken stehen gut verträgliche Totimpfstoffe zur Verfügung, die keine vermehrungsfähigen Bakterien enthalten. Sie richten sich gegen unterschiedliche Serogruppen: ein Konjugatimpfstoff gegen die Gruppen A, C, W und Y (MenACWY) sowie eigene Impfstoffe gegen die Gruppe B (MenB).',
          'Welche Impfung sinnvoll ist, hängt vom Reiseziel, vom Reiseanlass und vom Alter ab. Für Reisen in den Meningitisgürtel und für Pilgerreisen nach Saudi-Arabien ist die ACWY-Impfung maßgeblich; die Impfung gegen die Gruppe B kann je nach Situation ergänzend sinnvoll sein.',
          'Unabhängig von Reisen empfiehlt die Ständige Impfkommission (STIKO) die Meningokokken-B-Impfung als Standardimpfung im Säuglingsalter sowie – seit 2025 – eine MenACWY-Impfung für Jugendliche. Bringen Sie Ihren Impfpass mit; wir prüfen den vorhandenen Schutz und besprechen, welche Impfung für Ihre Reise sinnvoll ist.',
        ],
        en: [
          'Well-tolerated inactivated vaccines that contain no viable bacteria are available to protect against meningococci. They are directed against different serogroups: a conjugate vaccine against groups A, C, W and Y (MenACWY) and separate vaccines against group B (MenB).',
          'Which vaccination is sensible depends on the destination, the purpose of the trip and age. For travel to the meningitis belt and for pilgrimages to Saudi Arabia the ACWY vaccination is decisive; vaccination against group B can be a useful addition depending on the situation.',
          'Independently of travel, the German Standing Committee on Vaccination (STIKO) recommends meningococcal B vaccination as a standard immunisation in infancy and – since 2025 – a MenACWY vaccination for adolescents. Please bring your vaccination record; we check the existing protection and discuss which vaccination is sensible for your trip.',
        ],
      },
      callout: {
        variant: 'info',
        title: { de: 'Welche Impfung – das hängt von der Reise ab', en: 'Which vaccination depends on the trip' },
        text: {
          de: 'Die Impfungen gegen die Serogruppen ACWY und B sind unterschiedliche Impfungen. Welche für Sie sinnvoll oder vorgeschrieben ist, klären wir anhand von Reiseziel, Reiseanlass und vorhandenem Impfschutz gemeinsam im Beratungsgespräch.',
          en: 'The vaccinations against serogroups ACWY and B are different vaccinations. Which is sensible or required for you is something we clarify together in the consultation on the basis of destination, purpose of travel and existing protection.',
        },
      },
    },
  ],
  sourceIds: ['rkiMeningokokken', 'whoMeningitis', 'peiMeningokokken', 'stikoImpfempfehlungen', 'auswaertigesAmt'],
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
      label: { de: 'Risikogebiete', en: 'Risk areas' },
      path: '/risikogebiete',
    },
  ],
};
