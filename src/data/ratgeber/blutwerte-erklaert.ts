/**
 * Ratgeber „Welche Blutwerte wofür?" (DE/EN), Bereich „Prävention & Lebensstil".
 * Je Wert kurz: was er sagt, für wen er sinnvoll ist, wann er wenig bringt.
 * Bewusst ohne Grenzwert-Tabellen zum Selbstdiagnostizieren, ohne Präparate,
 * Dosierungen oder Arzneimittelnamen (§ 3, § 10, § 11 HWG). Werte gehören ins
 * Gespräch; die Ärztin oder der Arzt ordnet ein. Quellen nur aus dem
 * vorhandenen Register (`../sources.ts`). Beträge aus `praevention/preise.ts`.
 */
import type { ClinicalPage, Localized } from '../types';
import { zweiTermineWeg, caDe, caEn } from '../praevention/preise';

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const blutwerteSummary: Localized = {
  de: 'Was Blutbild, Ferritin, Vitamin D und B12, TSH, Zucker, Blutfette, Lp(a), Niere, Leber, Harnsäure und Urin sagen – und wann ein Wert wenig bringt.',
  en: 'What blood count, ferritin, vitamin D and B12, TSH, sugar, lipids, Lp(a), kidney, liver, uric acid and urine tests tell you – and when a test tells you little.',
};

export const blutwerteGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Welche Blutwerte wofür? Die Werte einfach erklärt',
      en: 'Blood tests explained: what each value tells you',
    },
    description: {
      de: 'Blutbild, Ferritin, Vitamin D, B12, TSH, HbA1c, Blutfette, Lp(a), Niere und Leber: was jeder Wert sagt, für wen er sinnvoll ist, wann er wenig bringt.',
      en: 'Blood count, ferritin, vitamin D, B12, TSH, HbA1c, lipids, Lp(a), kidney and liver: what each value says, who it suits and when it tells you little.',
    },
    eyebrow: { de: 'Ratgeber Prävention', en: 'Prevention guide' },
    lead: {
      de: 'Blutwerte sind leicht zu bekommen, ihre Bedeutung oft nicht. Hier lesen Sie für die häufigsten Werte, was sie sagen, für wen sie sinnvoll sind und wann sie wenig bringen. Grenzwerte zum Selbstvergleich finden Sie hier bewusst nicht: Werte gehören ins Gespräch.',
      en: 'Blood tests are easy to get, their meaning often is not. Here you can read, for the most common values, what they tell you, who they are useful for and when they tell you little. You will deliberately not find cut-off values for self-checking here: results belong in a conversation.',
    },
  },
  sections: [
    {
      id: 'vorweg',
      heading: { de: 'Vorweg: Ein Wert ist nur so gut wie die Frage', en: 'First: a test is only as good as the question' },
      body: {
        de: [
          'Ein Laborwert ist eine Messung, keine Diagnose. Der Referenzbereich auf dem Befund umfasst die Werte von 95 von 100 gesunden Menschen. Wer viele Werte bestimmen lässt, hat deshalb fast immer einen, der außerhalb liegt, ohne krank zu sein. Sinnvoll ist ein Wert, wenn sein Ergebnis eine Entscheidung ändert.',
          'Damit die Messung stimmt, hilft ein wenig Vorbereitung:',
        ],
        en: [
          'A lab value is a measurement, not a diagnosis. The reference range on the report covers the values of 95 out of 100 healthy people. Anyone who has many values measured will therefore almost always have one outside the range without being ill. A test makes sense when its result changes a decision.',
          'A little preparation helps the measurement to be accurate:',
        ],
      },
      list: {
        de: [
          'Die meisten Werte brauchen keine Nüchternheit. Für den Nüchternzucker essen Sie mindestens acht Stunden nichts; Wasser ist erlaubt.',
          'Präparate mit Biotin können einige Messungen stören, zum Beispiel Schilddrüsenwerte. Bitte sprechen Sie vorher mit uns, ob und wie lange Sie sie pausieren.',
          'Anstrengender Sport am Vortag kann Muskel-, Leber- und Nierenwerte und den Urin verändern.',
          'Während eines Infekts sind Blutbild und Ferritin oft verändert. Dann messen wir lieber später.',
        ],
        en: [
          'Most values do not require fasting. For fasting blood sugar you eat nothing for at least eight hours; water is allowed.',
          'Products containing biotin can interfere with some tests, for example thyroid values. Please talk to us beforehand about whether and for how long to pause them.',
          'Strenuous exercise the day before can change muscle, liver and kidney values and the urine.',
          'During an infection the blood count and ferritin are often altered. It is then better to measure later.',
        ],
      },
    },
    {
      id: 'blutbild',
      heading: { de: 'Kleines und großes Blutbild', en: 'Basic and full blood count' },
      body: {
        de: [
          'Das kleine Blutbild zählt die roten und weißen Blutkörperchen und die Blutplättchen und misst den roten Blutfarbstoff (Hämoglobin). Das große Blutbild unterscheidet zusätzlich die Arten der weißen Blutkörperchen. Es zeigt zum Beispiel eine Blutarmut oder Hinweise auf eine Entzündung.',
        ],
        en: [
          'The basic blood count counts red and white blood cells and platelets and measures haemoglobin. The full blood count additionally distinguishes the types of white blood cells. It shows, for example, anaemia or signs of inflammation.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei anhaltender Müdigkeit, Blässe, Atemnot bei Belastung, starker Regelblutung oder häufigen Infekten. Bei anhaltender Müdigkeit gehört das Blutbild zu den ersten Werten, die die Leitlinie der Allgemeinmedizin empfiehlt.',
          'Bringt wenig: ohne Beschwerden, denn dann ist es selten auffällig. Das große Blutbild sagt gegenüber dem kleinen meist nur dann mehr, wenn die weißen Blutkörperchen auffällig sind oder eine Entzündung vermutet wird.',
          'Gut zu wissen: Blutfette, Zucker, Leber- und Nierenwerte gehören nicht zum Blutbild und werden einzeln bestimmt.',
        ],
        en: [
          'Useful: with persistent tiredness, pallor, breathlessness on exertion, heavy periods or frequent infections. For persistent tiredness, the blood count is among the first tests the German general-practice guideline recommends.',
          'Tells you little: without symptoms, because it is then rarely abnormal. The full blood count usually only adds something over the basic one when the white blood cells are abnormal or inflammation is suspected.',
          'Good to know: blood lipids, sugar, liver and kidney values are not part of the blood count and are measured separately.',
        ],
      },
      links: [{ label: { de: 'Großes Blutbild: Kosten', en: 'Full blood count: costs' }, path: '/ratgeber/grosses-blutbild-kosten' }],
    },
    {
      id: 'ferritin',
      heading: { de: 'Ferritin: der Eisenspeicher', en: 'Ferritin: your iron stores' },
      body: {
        de: [
          'Ferritin zeigt, wie gut die Eisenspeicher gefüllt sind. Das ist aussagekräftiger als das Eisen im Blut, das über den Tag stark schwankt. Wir bestimmen Ferritin zusammen mit einem kleinen Blutbild.',
        ],
        en: [
          'Ferritin shows how well your iron stores are filled. This is more informative than iron in the blood, which varies strongly over the day. We measure ferritin together with a basic blood count.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei starker Regelblutung, nach einer Schwangerschaft, bei rein pflanzlicher Ernährung, regelmäßiger Blutspende, viel Ausdauersport oder vermehrtem Haarausfall.',
          'Bringt wenig: das Eisen im Blut allein. Während eines Infekts oder einer Entzündung kann auch das Ferritin falsch hoch ausfallen.',
          'Gut zu wissen: Ein niedriger Speicherwert bei Männern und bei Frauen nach den Wechseljahren braucht eine Abklärung der Ursache.',
        ],
        en: [
          'Useful: with heavy periods, after a pregnancy, with a purely plant-based diet, regular blood donation, a lot of endurance sport or increased hair loss.',
          'Tells you little: iron in the blood on its own. During an infection or inflammation even ferritin can be falsely high.',
          'Good to know: low iron stores in men and in women after menopause need their cause investigated.',
        ],
      },
    },
    {
      id: 'vitamin-d',
      heading: { de: 'Vitamin D', en: 'Vitamin D' },
      body: {
        de: [
          'Gemessen wird die Speicherform, das 25-OH-Vitamin D. Der Wert schwankt mit der Jahreszeit und ist am Ende des Winters meist am niedrigsten.',
        ],
        en: [
          'What is measured is the storage form, 25-OH vitamin D. The level varies with the season and is usually lowest at the end of winter.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei einer Erkrankung, die die Aufnahme im Darm stört, bei einer Nierenerkrankung oder vor einer geplanten Behandlung wegen Knochenschwund.',
          'Bringt wenig: ohne Beschwerden und ohne Risiko. Der IGeL-Monitor bewertet die Messung dann mit „unklar“: Ein Nutzen ist nicht belegt. Bei Müdigkeit ohne weiteren Hinweis gehört Vitamin D nicht zu den ersten Werten.',
        ],
        en: [
          'Useful: with a condition that impairs absorption in the gut, with kidney disease or before planned treatment for bone loss.',
          'Tells you little: without symptoms and without a risk. The IGeL-Monitor then rates testing as “unclear”: a benefit has not been shown. For tiredness without any other pointer, vitamin D is not among the first tests.',
        ],
      },
      links: [{ label: { de: 'Vitamin D, B12 und Eisen testen lassen', en: 'Testing vitamin D, B12 and iron' }, path: '/ratgeber/vitamin-d-test-beim-arzt' }],
    },
    {
      id: 'vitamin-b12',
      heading: { de: 'Vitamin B12', en: 'Vitamin B12' },
      body: {
        de: [
          'Vitamin B12 braucht der Körper für die Blutbildung und die Nerven. Ein Mangel entwickelt sich meist langsam, über Jahre.',
        ],
        en: [
          'The body needs vitamin B12 for blood formation and the nerves. A deficiency usually develops slowly, over years.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei rein pflanzlicher Ernährung, im höheren Alter, bei bestimmten Medikamenten, die Sie dauerhaft einnehmen, nach Operationen an Magen oder Darm, bei Taubheitsgefühl, Kribbeln, unsicherem Gang oder einer Blutarmut mit großen roten Blutkörperchen.',
          'Bringt wenig: ohne Risiko und ohne Beschwerden; der IGeL-Monitor bewertet die Messung mit „unklar“. Liegt der Wert in einem Graubereich, sagt ein zweiter, genauerer Wert mehr, etwa das Holo-Transcobalamin.',
        ],
        en: [
          'Useful: with a purely plant-based diet, in older age, with certain medicines taken long term, after stomach or bowel surgery, with numbness, tingling, an unsteady gait or anaemia with large red blood cells.',
          'Tells you little: without a risk and without symptoms; the IGeL-Monitor rates testing as “unclear”. If the value is in a grey zone, a second, more precise test says more, such as holotranscobalamin.',
        ],
      },
    },
    {
      id: 'tsh',
      heading: { de: 'TSH: der Schilddrüsenwert', en: 'TSH: the thyroid value' },
      body: {
        de: [
          'TSH ist das Hormon, mit dem die Hirnanhangdrüse die Schilddrüse steuert. Ein hoher Wert kann auf eine Unterfunktion hinweisen, ein niedriger auf eine Überfunktion. Ist TSH auffällig, folgen weitere Schilddrüsenwerte.',
        ],
        en: [
          'TSH is the hormone the pituitary gland uses to control the thyroid. A high value can point to an underactive thyroid, a low value to an overactive one. If TSH is abnormal, further thyroid values follow.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei anhaltender Müdigkeit, Gewichtsveränderung ohne Erklärung, Herzrasen, innerer Unruhe, Haarausfall, Zyklusstörungen oder Kinderwunsch und zur Kontrolle einer bekannten Schilddrüsenerkrankung.',
          'Bringt wenig: als Suchtest ohne Beschwerden. Leicht erhöhte Werte sind häufig, schwanken und normalisieren sich oft von selbst; meist folgt daraus nur eine spätere Kontrolle.',
        ],
        en: [
          'Useful: with persistent tiredness, unexplained weight change, palpitations, restlessness, hair loss, menstrual irregularities or when planning a pregnancy, and to monitor a known thyroid condition.',
          'Tells you little: as a screening test without symptoms. Slightly raised values are common, fluctuate and often return to normal on their own; usually all that follows is a later recheck.',
        ],
      },
    },
    {
      id: 'zucker',
      heading: { de: 'Nüchternzucker und HbA1c', en: 'Fasting blood sugar and HbA1c' },
      body: {
        de: [
          'Der Nüchternzucker ist eine Momentaufnahme nach mindestens acht Stunden ohne Essen. Der HbA1c, auch Langzeitzucker genannt, zeigt den durchschnittlichen Blutzucker der letzten etwa acht bis zwölf Wochen und braucht keine Nüchternheit.',
        ],
        en: [
          'Fasting blood sugar is a snapshot after at least eight hours without food. HbA1c, also called long-term blood sugar, shows the average blood sugar over roughly the last eight to twelve weeks and does not require fasting.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: ab 35 Jahren im Rahmen einer Gesundheitsuntersuchung, früher bei Übergewicht, Bluthochdruck, Diabetes in der Familie oder einem Schwangerschaftsdiabetes in der Vorgeschichte.',
          'Bringt wenig: ein Zuckerwert kurz nach dem Essen. Der HbA1c kann bei Blutarmut, Eisenmangel, nach Blutverlust, in der Schwangerschaft und bei manchen angeborenen Varianten des roten Blutfarbstoffs falsch ausfallen.',
        ],
        en: [
          'Useful: from age 35 as part of a check-up, earlier with excess weight, high blood pressure, diabetes in the family or a history of gestational diabetes.',
          'Tells you little: a sugar value shortly after eating. HbA1c can be misleading with anaemia, iron deficiency, after blood loss, in pregnancy and with some inherited haemoglobin variants.',
        ],
      },
    },
    {
      id: 'blutfette',
      heading: { de: 'Blutfette: LDL, HDL und Triglyzeride', en: 'Blood lipids: LDL, HDL and triglycerides' },
      body: {
        de: [
          'LDL-Cholesterin lagert sich in den Gefäßwänden ab und ist der wichtigste Blutfett-Wert für das Herz-Kreislauf-Risiko. HDL-Cholesterin wird oft als „gutes“ Cholesterin bezeichnet. Triglyzeride steigen nach dem Essen und nach Alkohol an.',
        ],
        en: [
          'LDL cholesterol is deposited in the walls of blood vessels and is the most important lipid value for cardiovascular risk. HDL cholesterol is often called “good” cholesterol. Triglycerides rise after eating and after alcohol.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: als Teil der Einschätzung des Herz-Kreislauf-Risikos, besonders ab etwa 40 Jahren; früher, wenn in der Familie früh Herzinfarkte oder Schlaganfälle vorkamen oder sehr hohe Cholesterinwerte bekannt sind.',
          'Bringt wenig: das Gesamtcholesterin allein. Ein einzelner Blutfett-Wert ist nur ein Baustein; das Risiko ergibt sich erst zusammen mit Alter, Blutdruck, Rauchen, Blutzucker und Familie.',
          'Gut zu wissen: Nüchtern müssen Sie meist nicht sein. Sind die Triglyzeride sehr hoch, wiederholen wir die Messung nüchtern.',
        ],
        en: [
          'Useful: as part of assessing cardiovascular risk, especially from about age 40; earlier if heart attacks or strokes occurred early in your family or very high cholesterol levels are known.',
          'Tells you little: total cholesterol on its own. A single lipid value is only one building block; the risk only emerges together with age, blood pressure, smoking, blood sugar and family history.',
          'Good to know: you usually do not need to fast. If triglycerides are very high, we repeat the test after fasting.',
        ],
      },
    },
    {
      id: 'lpa',
      heading: { de: 'Lp(a): einmal im Leben', en: 'Lp(a): once in a lifetime' },
      body: {
        de: [
          'Lipoprotein(a), kurz Lp(a), ist ein Blutfett, dessen Höhe vor allem vererbt ist. Ein hoher Wert erhöht das Risiko für Herz-Kreislauf-Erkrankungen, auch wenn die übrigen Blutfette unauffällig sind.',
        ],
        en: [
          'Lipoprotein(a), Lp(a) for short, is a blood lipid whose level is largely inherited. A high level increases the risk of cardiovascular disease even when other lipids are normal.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: einmal im Leben bei jedem Erwachsenen, wie es die Europäische Atherosklerose-Gesellschaft empfiehlt, besonders wenn in der Familie früh Herz-Kreislauf-Erkrankungen vorkamen.',
          'Bringt wenig: eine Wiederholung. Der Wert bleibt meist ein Leben lang ähnlich und lässt sich durch Ernährung und Bewegung kaum verändern. Ist er hoch, zählen die übrigen Risikofaktoren umso mehr.',
        ],
        en: [
          'Useful: once in a lifetime in every adult, as the European Atherosclerosis Society recommends, especially if cardiovascular disease occurred early in your family.',
          'Tells you little: a repeat test. The level usually stays similar for life and can hardly be changed by diet and exercise. If it is high, the other risk factors matter all the more.',
        ],
      },
    },
    {
      id: 'niere',
      heading: { de: 'Kreatinin und eGFR: die Nieren', en: 'Creatinine and eGFR: the kidneys' },
      body: {
        de: [
          'Kreatinin entsteht im Muskel und wird über die Nieren ausgeschieden. Aus Kreatinin, Alter und Geschlecht berechnet das Labor die eGFR, eine Schätzung, wie gut die Nieren filtern.',
        ],
        en: [
          'Creatinine is produced in the muscles and excreted by the kidneys. From creatinine, age and sex the laboratory calculates the eGFR, an estimate of how well the kidneys filter.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei Bluthochdruck, Diabetes, Herz-Kreislauf-Erkrankungen, Nierenerkrankungen in der Familie und bei Medikamenten, die über die Nieren ausgeschieden werden.',
          'Kann in die Irre führen: Kreatinin hängt von der Muskelmasse ab. Viel Muskulatur, viel Fleisch am Vortag oder Kreatin als Nahrungsergänzung können den Wert erhöhen, ohne dass die Nieren schlechter arbeiten; bei wenig Muskelmasse kann er trotz schwächerer Nieren normal wirken.',
          'Gut zu wissen: Bei Diabetes und Bluthochdruck zeigt ein Urintest auf Eiweiß (Albumin) eine beginnende Nierenschädigung oft früher als das Kreatinin.',
        ],
        en: [
          'Useful: with high blood pressure, diabetes, cardiovascular disease, kidney disease in the family and with medicines that are excreted by the kidneys.',
          'Can be misleading: creatinine depends on muscle mass. A lot of muscle, a lot of meat the day before or creatine supplements can raise the value without the kidneys working less well; with little muscle mass it can look normal even though the kidneys are weaker.',
          'Good to know: with diabetes and high blood pressure, a urine test for protein (albumin) often shows early kidney damage sooner than creatinine.',
        ],
      },
    },
    {
      id: 'leber',
      heading: { de: 'Leberwerte: ALT, AST und GGT', en: 'Liver values: ALT, AST and GGT' },
      body: {
        de: [
          'ALT (früher GPT) und AST (früher GOT) sind Enzyme, die bei einer Schädigung von Leberzellen ins Blut gelangen. ALT ist dabei typischer für die Leber, AST kommt auch im Muskel vor. Die GGT reagiert empfindlich auf Alkohol, eine Fettleber und einige Medikamente.',
        ],
        en: [
          'ALT and AST are enzymes that enter the blood when liver cells are damaged. ALT is more specific to the liver, while AST is also found in muscle. GGT reacts sensitively to alcohol, fatty liver and some medicines.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei Übergewicht, Diabetes, regelmäßigem Alkohol, bei Medikamenten, die die Leber belasten können, und bei anhaltender Müdigkeit.',
          'Bringt wenig: ein einzelner, leicht erhöhter Wert ist häufig und oft harmlos, etwa nach anstrengendem Sport. Umgekehrt schließen normale Werte eine Fettleber nicht aus.',
        ],
        en: [
          'Useful: with excess weight, diabetes, regular alcohol, medicines that can strain the liver, and persistent tiredness.',
          'Tells you little: a single, slightly raised value is common and often harmless, for example after strenuous exercise. Conversely, normal values do not rule out fatty liver.',
        ],
      },
    },
    {
      id: 'harnsaeure',
      heading: { de: 'Harnsäure', en: 'Uric acid' },
      body: {
        de: [
          'Harnsäure entsteht beim Abbau von Purinen, die der Körper selbst bildet oder mit der Nahrung aufnimmt. Ist zu viel davon im Blut, kann sie sich als Kristalle in Gelenken ablagern und Gicht auslösen oder Nierensteine bilden.',
        ],
        en: [
          'Uric acid is produced when purines are broken down, which the body makes itself or takes in with food. If there is too much in the blood, it can be deposited as crystals in joints and cause gout, or form kidney stones.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei Verdacht auf Gicht, etwa einem plötzlich geröteten, geschwollenen und sehr schmerzhaften Gelenk, oft am großen Zeh, bei Nierensteinen und zur Kontrolle einer bekannten Gicht.',
          'Bringt wenig: ohne Beschwerden. Eine erhöhte Harnsäure ohne Gicht und ohne Nierensteine braucht meist keine Behandlung. Während eines akuten Gichtanfalls kann der Wert sogar normal sein.',
        ],
        en: [
          'Useful: if gout is suspected, for example a suddenly red, swollen and very painful joint, often the big toe, with kidney stones and to monitor known gout.',
          'Tells you little: without symptoms. Raised uric acid without gout and without kidney stones usually needs no treatment. During an acute gout attack the level can even be normal.',
        ],
      },
    },
    {
      id: 'urin',
      heading: { de: 'Urin-Teststreifen', en: 'Urine dipstick' },
      body: {
        de: [
          'Der Teststreifen zeigt in einer Minute, ob sich im Urin zum Beispiel Eiweiß, Zucker, Blut, weiße Blutkörperchen oder Nitrit finden. Nitrit bilden viele Bakterien, die Harnwegsinfekte auslösen.',
        ],
        en: [
          'Within a minute the dipstick shows whether the urine contains, for example, protein, sugar, blood, white blood cells or nitrite. Nitrite is produced by many bacteria that cause urinary tract infections.',
        ],
      },
      list: {
        de: [
          'Sinnvoll: bei Beschwerden beim Wasserlassen, als einfacher Suchtest in der Gesundheitsuntersuchung ab 35 Jahren und bei Diabetes oder Bluthochdruck.',
          'Bringt wenig: als alleiniger Beweis. Ein auffälliger Streifen braucht oft eine Kontrolle, denn Sport, die Regelblutung oder ein verunreinigter Urin können ihn verfälschen. Ein unauffälliger Streifen schließt einen Infekt nicht sicher aus.',
          'Gut zu wissen: Für eine beginnende Nierenschädigung bei Diabetes oder Bluthochdruck ist ein genauerer Urintest auf Albumin besser geeignet.',
        ],
        en: [
          'Useful: with symptoms when passing urine, as a simple screening test in the check-up from age 35 and with diabetes or high blood pressure.',
          'Tells you little: as the only proof. An abnormal strip often needs a recheck, because exercise, a period or a contaminated sample can distort it. A normal strip does not reliably rule out an infection.',
          'Good to know: for early kidney damage with diabetes or high blood pressure, a more precise urine test for albumin is better suited.',
        ],
      },
    },
    {
      id: 'einordnen',
      heading: { de: 'Werte gehören ins Gespräch', en: 'Results belong in a conversation' },
      body: {
        de: [
          'Ob ein Wert für Sie gut, grenzwertig oder auffällig ist, hängt von Alter, Geschlecht, Vorgeschichte, Medikamenten und dem Labor ab. Referenzbereiche unterscheiden sich je nach Labor und Messmethode. Deshalb nennen wir hier bewusst keine Grenzwerte zum Selbstvergleich.',
          'Bei uns ordnet die Ärztin oder der Arzt jeden Wert ein und sagt Ihnen, was daraus folgt: nichts tun, später kontrollieren oder abklären.',
        ],
        en: [
          'Whether a value is good, borderline or abnormal for you depends on age, sex, medical history, medication and the laboratory. Reference ranges differ between laboratories and methods. That is why we deliberately do not give cut-off values for self-checking here.',
          'With us, the doctor assesses each value and tells you what follows: do nothing, recheck later or investigate further.',
        ],
      },
      links: [
        { label: { de: 'Laborwerte-Check', en: 'Blood test check' }, path: '/praevention/laborwerte-check' },
        { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
      ],
      callout: {
        variant: 'info',
        title: { de: 'So bestimmen Sie Werte bei uns', en: 'How to have values measured with us' },
        text: {
          de: `Im Laborwerte-Check besprechen wir zuerst, welche Werte für Ihre Frage etwas aussagen, nehmen Blut ab und ordnen die Ergebnisse in einem schriftlichen Werte-Bogen ein. Das ärztliche Honorar für beide Termine beträgt nach GOÄ ${caDe(zweiTermineWeg.werte)}, dazu kommen die Laborkosten je Wert. Wer wissen möchte, wo er insgesamt steht, ist im Gesundheitscheck mit Untersuchung und Befundbericht besser aufgehoben.`,
          en: `In the blood test check we first discuss which values are informative for your question, take a blood sample and explain the results in a written results sheet. The medical fee for both appointments under the GOÄ is ${caEn(zweiTermineWeg.werte)}, plus lab costs per test. If you want to know where you stand overall, the health check-up with examination and written report is the better fit.`,
        },
      },
    },
  ],
  sourceIds: ['awmfMuedigkeit', 'igelVitaminD', 'igelVitaminB12', 'dvoOsteoporose', 'escEasLipide2019', 'escPraevention2021', 'easLpa2022', 'gbaGesundheitsuntersuchung', 'goae'],
  lastReviewed: new Date('2026-11-20'),
  related: [
    { label: { de: 'Laborwerte-Check', en: 'Blood test check' }, path: '/praevention/laborwerte-check' },
    { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
    { label: { de: 'Großes Blutbild: Kosten', en: 'Full blood count: costs' }, path: '/ratgeber/grosses-blutbild-kosten' },
    { label: { de: 'Vitamin D, B12 und Eisen testen lassen', en: 'Testing vitamin D, B12 and iron' }, path: '/ratgeber/vitamin-d-test-beim-arzt' },
  ],
  faq: [
    {
      q: { de: 'Welche Blutwerte sind für einen Gesundheitscheck wichtig?', en: 'Which blood values matter for a check-up?' },
      a: {
        de: 'Für die Einschätzung von Herz und Stoffwechsel zählen vor allem die Blutfette, der Langzeitzucker (HbA1c) und der Nierenwert, einmal im Leben dazu Lp(a). Weitere Werte sind sinnvoll, wenn es einen Anlass gibt, etwa Beschwerden oder ein besonderes Risiko.',
        en: 'For assessing the heart and metabolism, blood lipids, long-term blood sugar (HbA1c) and the kidney value matter most, plus Lp(a) once in a lifetime. Further values make sense when there is a reason, such as symptoms or a particular risk.',
      },
    },
    {
      q: { de: 'Kann ich meine Werte mit einer Tabelle selbst prüfen?', en: 'Can I check my results myself with a table?' },
      a: {
        de: 'Davon raten wir ab. Referenzbereiche unterscheiden sich je nach Labor, Methode, Alter und Geschlecht, und ein Wert knapp außerhalb ist oft ohne Bedeutung. Ob ein Wert für Sie wichtig ist, zeigt erst das Gespräch.',
        en: 'We advise against it. Reference ranges differ by laboratory, method, age and sex, and a value just outside the range is often meaningless. Whether a value matters for you only becomes clear in a conversation.',
      },
    },
    {
      q: { de: 'Muss ich für Blutwerte nüchtern sein?', en: 'Do I need to fast for blood tests?' },
      a: {
        de: 'Für die meisten nicht, auch nicht für Blutfette und HbA1c. Für den Nüchternzucker essen Sie mindestens acht Stunden nichts; Wasser ist erlaubt.',
        en: 'For most of them, no – not even for blood lipids and HbA1c. For fasting blood sugar you eat nothing for at least eight hours; water is allowed.',
      },
    },
    {
      q: { de: 'Was ist der Unterschied zwischen kleinem und großem Blutbild?', en: 'What is the difference between a basic and a full blood count?' },
      a: {
        de: 'Das große Blutbild unterscheidet zusätzlich die Arten der weißen Blutkörperchen. Ohne Hinweis auf eine Entzündung oder auffällige weiße Blutkörperchen bringt es meist nicht mehr als das kleine.',
        en: 'The full blood count additionally distinguishes the types of white blood cells. Without signs of inflammation or abnormal white blood cells it usually adds little over the basic count.',
      },
    },
    {
      q: { de: 'Wie oft sollte man Blutwerte bestimmen lassen?', en: 'How often should blood values be measured?' },
      a: {
        de: 'Das hängt vom Wert und von Ihrer Situation ab. Die gesetzliche Gesundheitsuntersuchung sieht ab 35 Jahren alle drei Jahre Blutzucker und Blutfette vor. Lp(a) reicht einmal im Leben. Andere Werte wiederholen wir, wenn sich daraus eine Entscheidung ergibt, etwa zur Kontrolle eines auffälligen Werts.',
        en: 'That depends on the value and your situation. The statutory health check includes blood sugar and blood lipids every three years from age 35. Lp(a) is needed once in a lifetime. We repeat other values when a decision follows from them, for example to recheck an abnormal result.',
      },
    },
  ],
};
