/**
 * Ratgeber „Haarausfall: Ursachen und was Sie tun können" (DE/EN), Bereich
 * Prävention. Nicki, 20.11.2026 abends: Infoseiten zu Haarausfall, auch für
 * Suchmaschinen. Messung am selben Abend (Google Trends, NRW, 12 Monate):
 * „haarausfall" ist das meistgesuchte Thema der Prävention, rund 140-mal so
 * häufig wie „gelbfieberimpfung". Text nach haare-ratgeber-ursachen.md
 * (Notizen der Leitsitzung).
 *
 * Sprachregeln wie auf den Haar-Seiten: keine Marken- oder Wirkstoffnamen von
 * Arzneimitteln, kein „auf Rezept" (§ 10 HWG), keine Wirkversprechen (§ 3 HWG),
 * kein Vorher-nachher (§ 11 HWG). Medikamente als Ursache nur als Gruppen.
 * Beträge aus `praevention/preise.ts`.
 */
import type { ClinicalPage, Localized } from '../types';
import type { Source } from '../sources';
import { haarPreis, caDe, caEn } from '../praevention/preise';

const abruf = new Date('2026-11-20');

/** Quellen der beiden Haarausfall-Ratgeber – in `sources.ts` eingemischt. */
export const haarausfallQuellen = {
  s3AndrogenetischeAlopezie: {
    publisher: 'Journal of the European Academy of Dermatology and Venereology',
    title: {
      de: 'Europäische S3-Leitlinie zur Behandlung des erblich bedingten Haarausfalls bei Frauen und Männern (Kurzfassung)',
      en: 'Evidence-based (S3) guideline for the treatment of androgenetic alopecia in women and in men (short version)',
    },
    url: 'https://pubmed.ncbi.nlm.nih.gov/29178529/',
    retrieved: abruf,
    note: {
      de: 'Kanti V. u. a., 2018; 32 (1): 11–22.',
      en: 'Kanti V et al., 2018; 32 (1): 11–22.',
    },
  },
  daeHaarKopfhaut: {
    publisher: 'Deutsches Ärzteblatt International',
    title: {
      de: 'Diagnostik und Therapie von Haar- und Kopfhauterkrankungen',
      en: 'The diagnosis and treatment of hair and scalp diseases',
    },
    url: 'https://doi.org/10.3238/arztebl.2016.0377',
    retrieved: abruf,
    note: {
      de: 'Wolff H., Fischer T. W., Blume-Peytavi U., 2016; 113: 377–386.',
      en: 'Wolff H, Fischer TW, Blume-Peytavi U, 2016; 113: 377–386.',
    },
  },
  gesundBundHaarausfall: {
    publisher: 'Bundesministerium für Gesundheit (gesund.bund.de)',
    title: {
      de: 'Erblich bedingter Haarausfall beim Mann',
      en: 'Androgenetic alopecia in men (German federal health portal)',
    },
    url: 'https://gesund.bund.de/anlagebedingter-haarausfall-beim-mann',
    retrieved: abruf,
    note: {
      de: 'Geprüft durch die Deutsche Dermatologische Gesellschaft, Stand 05.11.2025. Häufigkeit: bis zu 70 Prozent der Männer und 40 Prozent der Frauen.',
      en: 'Reviewed by the German Dermatological Society, as of 5 November 2025. Frequency: up to 70 per cent of men and 40 per cent of women.',
    },
  },
  akdaeBiotin: {
    publisher: 'Arzneimittelkommission der deutschen Ärzteschaft (AkdÄ)',
    title: {
      de: 'Verfälschte Laborergebnisse bei gleichzeitiger Anwendung von Biotin (Drug Safety Mail 2022-52)',
      en: 'Falsified laboratory results with concurrent use of biotin (Drug Safety Mail 2022-52)',
    },
    url: 'https://www.akdae.de/arzneimittelsicherheit/drug-safety-mail/newsdetail/drug-safety-mail-2022-52',
    retrieved: abruf,
  },
} satisfies Record<string, Source>;

/** Kurzbeschreibung für die Ratgeber-Übersicht. */
export const haarausfallUrsachenSummary: Localized = {
  de: 'Was hinter dünner werdendem Haar stecken kann, wann es von selbst besser wird und wann eine Abklärung sinnvoll ist.',
  en: 'What may be behind thinning hair, when it gets better on its own and when it is worth having it checked.',
};

export const haarausfallUrsachenGuide: ClinicalPage = {
  meta: {
    title: {
      de: 'Haarausfall: Ursachen erkennen und was Sie tun können',
      en: 'Hair loss: recognising the causes and what you can do',
    },
    description: {
      de: 'Haarausfall bei Frauen und Männern: häufige Ursachen, was Sie selbst tun können und wann Sie zum Arzt gehen. Ratgeber aus Langenfeld bei Düsseldorf.',
      en: 'Hair loss in women and men: common causes, what you can do yourself and when to see a doctor. A guide from our practice in Langenfeld near Düsseldorf.',
    },
    eyebrow: { de: 'Ratgeber Prävention', en: 'Prevention guide' },
    lead: {
      de: 'Jeder Mensch verliert jeden Tag Haare, meist 50 bis 100. Fallen über Wochen deutlich mehr aus oder wird das Haar sichtbar dünner, steckt fast immer eine erkennbare Ursache dahinter. Viele davon sind harmlos und gehen von selbst vorbei, andere lassen sich gut behandeln. Hier lesen Sie, welche Ursachen häufig sind, was Sie selbst tun können und wann Sie sich ärztlich beraten lassen sollten.',
      en: 'Everyone loses hair every day, usually 50 to 100 hairs. If noticeably more falls out over several weeks or your hair becomes visibly thinner, there is almost always a recognisable cause. Many causes are harmless and pass on their own, others can be treated well. Here you can read which causes are common, what you can do yourself and when you should seek medical advice.',
    },
  },
  sections: [
    {
      id: 'erblich',
      heading: { de: 'Erblich bedingter Haarausfall', en: 'Inherited hair loss' },
      body: {
        de: [
          'Das ist die häufigste Ursache, bei Männern und bei Frauen. Er betrifft bis zu 70 von 100 Männern und bis zu 40 von 100 Frauen im Laufe des Lebens. Die Haarwurzeln reagieren empfindlich auf körpereigene Hormone und bilden mit der Zeit dünnere, kürzere Haare.',
        ],
        en: [
          'This is the most common cause, in men and in women. It affects up to 70 in 100 men and up to 40 in 100 women over the course of their lives. The hair roots react sensitively to the body’s own hormones and over time produce thinner, shorter hairs.',
        ],
      },
      list: {
        de: [
          'Bei Männern beginnt es oft mit Geheimratsecken oder einer lichteren Stelle am Hinterkopf.',
          'Bei Frauen wird meist der Scheitel breiter. Der vordere Haaransatz bleibt oft erhalten.',
          'Es geht langsam, über Jahre. Behandlungen können den Verlauf bremsen. Je früher man beginnt, desto mehr eigenes Haar ist noch da.',
        ],
        en: [
          'In men it often starts with a receding hairline at the temples or a thinner patch at the back of the head.',
          'In women the parting usually becomes wider. The front hairline often stays intact.',
          'It progresses slowly, over years. Treatment can slow it down. The earlier you start, the more of your own hair is still there.',
        ],
      },
    },
    {
      id: 'nach-belastung',
      heading: { de: 'Haarausfall nach einer Belastung für den Körper', en: 'Hair loss after a strain on the body' },
      body: {
        de: [
          'Zwei bis drei Monate nach einem Auslöser fallen plötzlich viele Haare aus, gleichmäßig auf dem ganzen Kopf. Das Haar wächst meist von selbst nach, innerhalb einiger Monate. Typische Auslöser sind:',
        ],
        en: [
          'Two to three months after a trigger, a lot of hair suddenly falls out, evenly across the whole head. The hair usually grows back on its own within a few months. Typical triggers are:',
        ],
      },
      list: {
        de: [
          'hohes Fieber oder eine schwere Infektion,',
          'eine Operation,',
          'eine Geburt,',
          'eine starke Gewichtsabnahme oder eine sehr strenge Diät,',
          'großer seelischer Druck,',
          'das Absetzen der Pille.',
        ],
        en: [
          'high fever or a severe infection,',
          'an operation,',
          'giving birth,',
          'major weight loss or a very strict diet,',
          'severe emotional stress,',
          'stopping the contraceptive pill.',
        ],
      },
    },
    {
      id: 'mangel-medikamente',
      heading: { de: 'Mangel, Schilddrüse und Medikamente', en: 'Deficiencies, thyroid and medication' },
      body: {
        de: [
          'Diese Ursachen lassen sich mit wenigen Blutwerten und einem Gespräch gut klären:',
        ],
        en: [
          'These causes can be clarified well with a few blood tests and a conversation:',
        ],
      },
      list: {
        de: [
          'Eisenmangel, vor allem bei Frauen mit starker Regelblutung, bei pflanzlicher Ernährung oder nach Blutverlust,',
          'eine Über- oder Unterfunktion der Schilddrüse,',
          'seltener ein Mangel an Eiweiß, Zink oder Vitaminen durch einseitige Ernährung,',
          'einige Medikamente, zum Beispiel manche Mittel gegen Bluthochdruck, zur Blutverdünnung oder gegen Rheuma, Hormonpräparate und die Behandlung von Krebs.',
        ],
        en: [
          'iron deficiency, especially in women with heavy periods, with a plant-based diet or after blood loss,',
          'an overactive or underactive thyroid,',
          'less often a lack of protein, zinc or vitamins due to a one-sided diet,',
          'some medicines, for example some drugs for high blood pressure, for thinning the blood or for rheumatism, hormone preparations and cancer treatment.',
        ],
      },
      callout: {
        variant: 'important',
        text: {
          de: 'Setzen Sie ein Medikament nie eigenmächtig ab. Sprechen Sie mit der Ärztin oder dem Arzt, die oder der es verordnet hat.',
          en: 'Never stop a medicine on your own. Talk to the doctor who prescribed it.',
        },
      },
    },
    {
      id: 'kreisrund-kopfhaut',
      heading: { de: 'Kreisrunder Haarausfall, Zug und Kopfhaut', en: 'Patchy hair loss, pulling and the scalp' },
      body: {
        de: [
          'Beim kreisrunden Haarausfall entstehen plötzlich runde, kahle Stellen, oft so groß wie eine Münze. Das Immunsystem richtet sich dabei gegen die Haarwurzeln. Manchmal fallen auch Haare an Bart, Augenbrauen oder Wimpern aus.',
          'Straffe Zöpfe, Dutts, Haarverlängerungen oder häufiges Glätten mit großer Hitze können vor allem am Haaransatz zu Haarausfall führen. Bleibt der Zug über Jahre, kann der Verlust dauerhaft werden.',
          'Ein Pilzbefall (vor allem bei Kindern), Schuppenflechte oder eine starke Entzündung der Kopfhaut können Haare ausfallen lassen. Selten vernarbt die Kopfhaut. Dann wachsen an dieser Stelle keine Haare mehr nach. Diese Formen gehören in die Hautarztpraxis.',
        ],
        en: [
          'In patchy hair loss (alopecia areata), round bald patches suddenly appear, often the size of a coin. The immune system turns against the hair roots. Sometimes hair is also lost from the beard, eyebrows or eyelashes.',
          'Tight braids, buns, hair extensions or frequent straightening with high heat can cause hair loss, especially along the hairline. If the pulling continues for years, the loss can become permanent.',
          'A fungal infection (especially in children), psoriasis or a severe inflammation of the scalp can make hair fall out. Rarely, the scalp scars. Hair then no longer grows back in that area. These forms belong with a dermatologist.',
        ],
      },
    },
    {
      id: 'frauen',
      heading: { de: 'Bei Frauen: Hormone, Geburt und Wechseljahre', en: 'In women: hormones, childbirth and menopause' },
      body: {
        de: [
          'Treten zum Haarausfall Zyklusstörungen, unreine Haut oder mehr Haare am Kinn auf, kann ein Überschuss an männlichen Hormonen dahinterstecken. Auch nach einer Geburt und in den Wechseljahren verändert sich das Haar oft. Bei Frauen spielen außerdem Eisenmangel und die Schilddrüse häufiger eine Rolle als bei Männern.',
        ],
        en: [
          'If hair loss comes with irregular periods, blemished skin or more hair on the chin, an excess of male hormones may be behind it. Hair also often changes after childbirth and during the menopause. In women, iron deficiency and the thyroid also play a role more often than in men.',
        ],
      },
    },
    {
      id: 'selbst-tun',
      heading: { de: 'Was Sie selbst tun können', en: 'What you can do yourself' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Abwarten, wenn es einen klaren Auslöser gab, zum Beispiel eine Geburt oder eine schwere Grippe vor zwei bis drei Monaten. Das Haar erholt sich meist von allein.',
          'Sanft pflegen: milde Haarwäsche, nicht zu heiß föhnen, keine straffen Frisuren, nasses Haar nur vorsichtig kämmen.',
          'Ausgewogen essen und keine sehr strengen Diäten. Genug Eiweiß und Eisen sind wichtig für das Haar.',
          'Eisen und Vitamine nur nach einer Messung nehmen. Bei einem Mangel lohnt sich der Ausgleich. Ohne Mangel helfen die Mittel dem Haar nicht, und zu viel Eisen schadet.',
          'Biotin vor einem Bluttest weglassen. Es steckt in vielen Mitteln für Haare und Nägel und kann Laborwerte verfälschen, zum Beispiel die Schilddrüsenwerte. Lassen Sie es drei Tage vor der Blutabnahme weg.',
          'Vorsicht bei großen Versprechen. Viele Haarwässer, Kapseln und Kuren versprechen mehr, als Studien zeigen.',
          'Fotos machen. Ein Foto vom Scheitel und vom Haaransatz alle paar Monate, immer im gleichen Licht, zeigt besser als der Spiegel, ob sich etwas verändert.',
        ],
        en: [
          'Wait if there was a clear trigger, for example giving birth or a bad bout of flu two to three months ago. The hair usually recovers on its own.',
          'Be gentle: mild shampoo, do not blow-dry too hot, no tight hairstyles, comb wet hair carefully.',
          'Eat a balanced diet and avoid very strict diets. Enough protein and iron are important for your hair.',
          'Only take iron and vitamins after a measurement. If you have a deficiency, correcting it is worthwhile. Without a deficiency they do not help your hair, and too much iron is harmful.',
          'Leave out biotin before a blood test. It is contained in many hair and nail products and can falsify lab results, for example thyroid values. Stop it three days before blood is taken.',
          'Be careful with big promises. Many hair tonics, capsules and treatments promise more than studies show.',
          'Take photos. A photo of your parting and hairline every few months, always in the same light, shows better than the mirror whether something is changing.',
        ],
      },
    },
    {
      id: 'behandlung',
      heading: { de: 'Welche Behandlung in Frage kommt', en: 'Which treatment may be suitable' },
      body: {
        de: ['Die Behandlung richtet sich nach der Ursache. Deshalb steht am Anfang die Abklärung.'],
        en: ['Treatment depends on the cause. That is why it starts with finding out what is behind it.'],
      },
      list: {
        de: [
          'Bei einem Mangel gleicht man ihn aus. Eine Erkrankung der Schilddrüse wird behandelt.',
          'Bei Haarausfall nach einer Belastung braucht es meist nur Geduld.',
          'Beim erblich bedingten Haarausfall gibt es Mittel zum Auftragen auf die Kopfhaut und weitere ärztliche Behandlungen, die wir im Gespräch besprechen. Möglich sind auch eine Behandlung mit Plasma aus dem eigenen Blut (PRP) und eine Haartransplantation. Für PRP ist der Nutzen weniger gut belegt.',
          'Alle Behandlungen des erblich bedingten Haarausfalls wirken nur, solange man sie fortsetzt. Ein Ergebnis zeigt sich frühestens nach einigen Monaten.',
          'Kreisrunder Haarausfall und Erkrankungen der Kopfhaut gehören in die Hautarztpraxis.',
        ],
        en: [
          'A deficiency is corrected. A thyroid condition is treated.',
          'Hair loss after a strain on the body usually only needs patience.',
          'For inherited hair loss there are treatments applied to the scalp and other medical treatments, which we discuss with you. Treatment with plasma from your own blood (PRP) and hair transplantation are also possible. The benefit of PRP is less well established.',
          'All treatments for inherited hair loss only work as long as you continue them. Results show after a few months at the earliest.',
          'Patchy hair loss and scalp diseases belong with a dermatologist.',
        ],
      },
      links: [
        { label: { de: 'Haarsprechstunde', en: 'Hair consultation' }, path: '/praevention/haare' },
        { label: { de: 'PRP bei Haarausfall', en: 'PRP for hair loss' }, path: '/praevention/haare/prp' },
      ],
    },
    {
      id: 'wann-zum-arzt',
      heading: { de: 'Wann Sie zum Arzt gehen sollten', en: 'When you should see a doctor' },
      body: {
        de: ['Lassen Sie sich beraten, wenn:'],
        en: ['Seek advice if:'],
      },
      list: {
        de: [
          'über mehrere Wochen deutlich mehr Haare ausfallen als sonst,',
          'Ihr Haar sichtbar dünner wird oder der Scheitel breiter,',
          'Sie zusätzlich müde sind, frieren, zu- oder abnehmen oder sich Ihr Zyklus verändert,',
          'Sie wissen möchten, ob eine Behandlung für Sie in Frage kommt.',
        ],
        en: [
          'noticeably more hair has been falling out than usual for several weeks,',
          'your hair is visibly thinner or your parting wider,',
          'you are also tired, feel cold, gain or lose weight or your cycle changes,',
          'you would like to know whether treatment could be suitable for you.',
        ],
      },
      links: [
        { label: { de: 'Haarausfall: zu welchem Arzt?', en: 'Hair loss: which doctor to see?' }, path: '/ratgeber/haarausfall-welcher-arzt' },
      ],
      callout: {
        variant: 'caution',
        title: { de: 'Bald in eine Hautarztpraxis', en: 'See a dermatologist soon' },
        text: {
          de: 'Wenn kahle, runde Stellen entstehen oder schnell größer werden, die Kopfhaut juckt, brennt, schmerzt, stark schuppt oder eitert, die Kopfhaut an kahlen Stellen glatt, glänzend oder gerötet ist, Augenbrauen, Wimpern oder Barthaare ausfallen oder ein Kind Haare verliert.',
          en: 'If round bald patches appear or grow quickly, the scalp itches, burns, hurts, flakes heavily or oozes pus, the scalp in bald areas is smooth, shiny or red, eyebrows, eyelashes or beard hair fall out, or a child is losing hair.',
        },
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Was es kostet', en: 'What it costs' },
      body: {
        de: [
          'Die Abklärung in einer Kassenpraxis zahlt die gesetzliche Krankenkasse. Mittel gegen erblich bedingten Haarausfall und PRP zahlen Sie in der Regel selbst.',
          `In unserer Privatpraxis rechnen wir nach der Gebührenordnung für Ärzte (GOÄ) ab. Die Haarsprechstunde kostet ${caDe(haarPreis.sprechstunde)}, die Blutwerte ${caDe(haarPreis.labor)}, die Besprechung des Befunds ${caDe(haarPreis.befund)}. Ob eine private Krankenversicherung zahlt, hängt von Ihrem Vertrag ab.`,
        ],
        en: [
          'Statutory health insurance pays for the investigation at a practice that bills the insurer. You usually pay for treatments for inherited hair loss and for PRP yourself.',
          `In our private practice we bill under the German fee schedule for doctors (GOÄ). The hair consultation costs ${caEn(haarPreis.sprechstunde)}, the blood tests ${caEn(haarPreis.labor)}, the discussion of the results ${caEn(haarPreis.befund)}. Whether private health insurance pays depends on your policy.`,
        ],
      },
    },
  ],
  sourceIds: ['s3AndrogenetischeAlopezie', 'daeHaarKopfhaut', 'gesundBundHaarausfall', 'akdaeBiotin', 'goae'],
  lastReviewed: new Date('2026-11-20'),
  related: [
    { label: { de: 'Haarsprechstunde', en: 'Hair consultation' }, path: '/praevention/haare' },
    { label: { de: 'PRP bei Haarausfall', en: 'PRP for hair loss' }, path: '/praevention/haare/prp' },
    { label: { de: 'Haarausfall: zu welchem Arzt?', en: 'Hair loss: which doctor to see?' }, path: '/ratgeber/haarausfall-welcher-arzt' },
    { label: { de: 'Welche Blutwerte wofür?', en: 'Which blood values for what?' }, path: '/ratgeber/blutwerte-erklaert' },
    { label: { de: 'Vitamin D, B12 und Eisen testen lassen', en: 'Testing vitamin D, B12 and iron' }, path: '/ratgeber/vitamin-d-test-beim-arzt' },
  ],
  faq: [
    {
      q: { de: 'Wie viele Haare am Tag sind normal?', en: 'How many hairs a day is normal?' },
      a: {
        de: 'Meist 50 bis 100. An Tagen mit Haarwäsche können es mehr sein, weil sich gelöste Haare sammeln. Im Herbst fallen bei vielen Menschen etwas mehr Haare aus als sonst.',
        en: 'Usually 50 to 100. On days you wash your hair there may be more, because loose hairs collect. In autumn many people lose a little more hair than usual.',
      },
    },
    {
      q: { de: 'Kann Stress Haarausfall auslösen?', en: 'Can stress cause hair loss?' },
      a: {
        de: 'Ja. Großer seelischer oder körperlicher Druck kann zwei bis drei Monate später zu Haarausfall führen. Meist wächst das Haar danach von selbst wieder nach.',
        en: 'Yes. Severe emotional or physical stress can lead to hair loss two to three months later. The hair usually grows back on its own afterwards.',
      },
    },
    {
      q: { de: 'Wächst das Haar wieder nach?', en: 'Will my hair grow back?' },
      a: {
        de: 'Das hängt von der Ursache ab. Nach einer Infektion, einer Geburt oder einem ausgeglichenen Mangel meist ja. Beim erblich bedingten Haarausfall lässt sich der Verlauf bremsen. Vernarbte Stellen wachsen nicht wieder zu.',
        en: 'That depends on the cause. After an infection, childbirth or a corrected deficiency, usually yes. With inherited hair loss the course can be slowed down. Scarred areas do not grow back.',
      },
    },
    {
      q: { de: 'Helfen Biotin oder Haarvitamine?', en: 'Do biotin or hair vitamins help?' },
      a: {
        de: 'Nur wenn ein Mangel besteht, und der ist selten. Biotin kann außerdem Laborwerte verfälschen. Lassen Sie es drei Tage vor einer Blutabnahme weg.',
        en: 'Only if there is a deficiency, and that is rare. Biotin can also falsify lab results. Stop it three days before blood is taken.',
      },
    },
    {
      q: { de: 'Welche Blutwerte sind sinnvoll?', en: 'Which blood tests make sense?' },
      a: {
        de: 'Häufig hilfreich sind das Ferritin (Eisenspeicher), das kleine Blutbild und der Schilddrüsenwert TSH. Welche Werte bei Ihnen etwas aussagen, klären wir im Gespräch.',
        en: 'Often helpful are ferritin (iron stores), the basic blood count and the thyroid value TSH. Which tests are informative for you is something we clarify in a conversation.',
      },
    },
    {
      q: { de: 'Ist Haarausfall bei Frauen anders als bei Männern?', en: 'Is hair loss different in women and men?' },
      a: {
        de: 'Die Ursachen sind ähnlich, das Muster ist oft anders. Bei Frauen wird meist der Scheitel breiter, und häufiger spielen Eisenmangel, Schilddrüse, Hormone oder eine Geburt eine Rolle.',
        en: 'The causes are similar, the pattern is often different. In women the parting usually widens, and iron deficiency, the thyroid, hormones or childbirth play a role more often.',
      },
    },
    {
      q: { de: 'Ab wann sollte ich etwas unternehmen?', en: 'When should I do something?' },
      a: {
        de: 'Wenn Sie über Wochen mehr Haare verlieren oder das Haar sichtbar dünner wird. Beim erblich bedingten Haarausfall gilt: Je früher die Behandlung beginnt, desto mehr eigenes Haar ist noch da.',
        en: 'If you lose more hair for several weeks or your hair becomes visibly thinner. With inherited hair loss: the earlier treatment begins, the more of your own hair is still there.',
      },
    },
  ],
};
