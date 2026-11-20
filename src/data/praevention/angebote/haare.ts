/**
 * Haarsprechstunde mit Haaranalyse (DE/EN), Seite /praevention/haare, plus
 * der vollständige Text der Unterseite /praevention/haare/prp als `haarePrp`
 * (die Unterseite baut die Leitsitzung). Quelle: haare-seitentexte.md der
 * Sitzung „PRP und Haarsprechstunde" vom 20.11.2026, ohne inhaltliche Zusätze.
 *
 * Offene Entscheidungen (Entscheidungs-PDF Haarsprechstunde/PRP) so
 * formuliert, dass die Texte ohne sie stimmen:
 * - [OFFEN: 1] Variante ohne Auflichtgerät, Nr. 1 + 5 + 250 = ca. 26 €
 *   (Vorgabe der Leitsitzung bis zu Nickis Entscheidung); Satz zum
 *   Auflichtmikroskop deshalb weggelassen.
 * - [OFFEN: 2] Statt „nur nach der Sprechstunde" die medizinische Bedingung:
 *   Diagnose und Blutwerte müssen vorher geklärt sein. Kein Buchungsweg per
 *   E-Mail genannt.
 * - [OFFEN: 3] Kein Betrag je PRP-Sitzung (Vorschlag ca. 200–260 €, drei
 *   Sitzungen ca. 600–760 €), nur: Kosten vorher schriftlich.
 * - [OFFEN: 4/6] Kein Startdatum; Gegenanzeigen als „zum Beispiel".
 * Rezeptpflichtige Tabletten („für Männer, auf Rezept") nicht genannt, weil
 * der Wirkstoff daraus erkennbar wäre (§ 10 HWG, BGH I ZR 74/25); es bleibt
 * „ein Mittel zum Auftragen" oder „eine andere Behandlung".
 */
import type { ClinicalPage } from '../../types';
import type { PreventionOffer } from '../types';
import { haarPreis, caDe, caEn } from '../preise';
import { kostenVorab } from './zwei-termine';

const beideTermine = haarPreis.sprechstunde + haarPreis.befund;

export const haare: PreventionOffer = {
  slug: 'haare',
  bookingType: 'pv-haare',
  group: 'begleitung',
  stage: 1,
  shortName: { de: 'Haarsprechstunde', en: 'Hair consultation' },
  teaser: {
    de: 'Ihr Haar wird dünner? In der Haarsprechstunde suchen wir nach der Ursache, mit Untersuchung der Kopfhaut und Blutwerten. Danach bekommen Sie einen Plan.',
    en: 'Is your hair getting thinner? In the hair consultation we look for the cause, with an examination of the scalp and blood tests. You then receive a plan.',
  },
  facts: {
    forWhom: {
      de: 'Frauen und Männer, deren Haar langsam dünner wird oder bei denen seit einigen Wochen deutlich mehr Haare ausfallen.',
      en: 'Women and men whose hair is slowly getting thinner or who have noticeably more hair falling out for some weeks.',
    },
    appointments: {
      de: 'Haarsprechstunde ca. 20 Min. in der Praxis; etwa eine Woche später Befund und Plan ca. 15 Min., in der Praxis oder am Telefon.',
      en: 'Hair consultation approx. 20 min at the practice; about a week later results and plan approx. 15 min, at the practice or by phone.',
    },
    fee: {
      de: `Nach GOÄ. Typisch für beide Termine zusammen: ${caDe(beideTermine)}; ein späterer Verlaufstermin ${caDe(haarPreis.verlauf)}.`,
      en: `Under the GOÄ. Typically for both appointments together: ${caEn(beideTermine)}; a later follow-up ${caEn(haarPreis.verlauf)}.`,
    },
    lab: {
      de: `${caDe(haarPreis.labor)} für Ferritin, kleines Blutbild und TSH, je nach Wert auf unserer Rechnung oder vom Labor`,
      en: `${caEn(haarPreis.labor)} for ferritin, basic blood count and TSH, on our invoice or from the laboratory, depending on the test`,
    },
  },
  steps: [
    {
      title: { de: 'Vorher: kurzer Fragebogen', en: 'Beforehand: a short questionnaire' },
      text: {
        de: 'Vorher füllen Sie einen kurzen Fragebogen aus. Bringen Sie eine Liste Ihrer Medikamente und, wenn vorhanden, ältere Blutwerte und eigene Fotos von früher mit. Bitte waschen Sie die Haare am Termintag nicht und verzichten Sie auf Haarspray oder Gel.',
        en: 'Beforehand you fill in a short questionnaire. Bring a list of your medication and, if available, earlier blood results and your own photos from the past. Please do not wash your hair on the day of the appointment and avoid hairspray or gel.',
      },
    },
    {
      title: { de: 'Haarsprechstunde: Gespräch', en: 'Hair consultation: conversation' },
      text: {
        de: 'Etwa 20 Minuten in der Praxis. Wir sprechen über Ihren Verlauf, über Haarausfall in der Familie, über Medikamente, Ernährung, Stress und Infekte der letzten Monate. Bei Frauen sprechen wir auch über Zyklus, Schwangerschaften und Wechseljahre.',
        en: 'About 20 minutes at the practice. We talk about how things have developed, hair loss in your family, medication, diet, stress and infections in recent months. With women we also talk about the menstrual cycle, pregnancies and menopause.',
      },
    },
    {
      title: { de: 'Untersuchung, Fotos und Blutabnahme', en: 'Examination, photos and blood sample' },
      text: {
        de: 'Wir untersuchen Kopfhaut, Haare und Nägel. Mit einem leichten Zug an den Haaren prüfen wir, wie fest sie sitzen. Wir machen Fotos von Scheitel, Stirn und Schläfen, immer mit gleichem Licht, damit sich der Verlauf später vergleichen lässt. Dann nehmen wir Blut ab.',
        en: 'We examine your scalp, hair and nails. With a gentle pull on the hair we check how firmly it is anchored. We take photos of the parting, forehead and temples, always in the same light, so that changes can be compared later. Then we take a blood sample.',
      },
    },
    {
      title: { de: 'Befund und Plan', en: 'Results and plan' },
      text: {
        de: 'Etwa eine Woche später, ca. 15 Minuten, in der Praxis oder am Telefon. Wir besprechen die Blutwerte und das Ergebnis der Untersuchung. Sie bekommen einen Plan, zum Beispiel mit Eisen bei Mangel, einem Mittel zum Auftragen auf die Kopfhaut oder einer anderen Behandlung, die zu Ihrer Form von Haarausfall passt. Wenn es passt, sprechen wir auch über PRP.',
        en: 'About a week later, approx. 15 minutes, at the practice or by phone. We discuss the blood results and the findings of the examination. You receive a plan, for example with iron if you are deficient, a product to apply to the scalp or another treatment that suits your type of hair loss. If appropriate, we also talk about PRP.',
      },
    },
  ],
  costs: {
    de: [
      `Wir sind eine Privatpraxis und rechnen nach der Gebührenordnung für Ärzte (GOÄ) ab. Ärztliches Honorar zum Regelsatz, je Termin: Haarsprechstunde mit Haaranalyse und Blutabnahme ${caDe(haarPreis.sprechstunde)}, Befund und Plan ${caDe(haarPreis.befund)}, ein späterer Verlaufstermin ${caDe(haarPreis.verlauf)}. Die Beträge sind Richtwerte.`,
      `Dazu kommen die Laborkosten für Ferritin, kleines Blutbild und TSH, ${caDe(haarPreis.labor)}. Bei Frauen mit unregelmäßigem Zyklus oder unreiner Haut können weitere Hormonwerte sinnvoll sein; was das kostet, sagen wir Ihnen vorher.`,
      kostenVorab.de,
    ],
    en: [
      `We are a private practice and bill under the German fee schedule for doctors (GOÄ). Medical fee at the standard rate, per appointment: hair consultation with hair analysis and blood sample ${caEn(haarPreis.sprechstunde)}, results and plan ${caEn(haarPreis.befund)}, a later follow-up ${caEn(haarPreis.verlauf)}. The amounts are guide values.`,
      `Lab costs for ferritin, basic blood count and TSH come on top, ${caEn(haarPreis.labor)}. For women with an irregular cycle or blemished skin, further hormone values can be useful; we tell you the cost beforehand.`,
      kostenVorab.en,
    ],
  },
  page: {
    meta: {
      title: { de: 'Haarsprechstunde mit Haaranalyse', en: 'Hair consultation with hair analysis' },
      description: {
        de: 'Haarausfall ärztlich abklären: Gespräch, Untersuchung der Kopfhaut, Blutwerte und ein klarer Plan in zwei Terminen. Privatpraxis in Langenfeld.',
        en: 'Hair loss assessed by a doctor: conversation, scalp examination, blood tests and a clear plan in two appointments. Private practice in Langenfeld.',
      },
      eyebrow: { de: 'Prävention', en: 'Prevention' },
      lead: {
        de: 'Ihr Haar wird dünner, oder es fallen seit einigen Wochen deutlich mehr Haare aus? Dahinter steckt oft etwas, das man erkennen und behandeln kann. Das kann eine erbliche Anlage sein, ein leerer Eisenspeicher, die Schilddrüse oder eine belastende Zeit. In der Haarsprechstunde klären wir, was bei Ihnen dahintersteckt. Danach bekommen Sie einen Plan, der zu Ihnen passt.',
        en: 'Is your hair getting thinner, or has noticeably more hair been falling out for some weeks? Often there is something behind it that can be identified and treated. It may be an inherited tendency, empty iron stores, the thyroid or a stressful period. In the hair consultation we find out what lies behind it in your case. You then receive a plan that suits you.',
      },
    },
    sections: [
      {
        id: 'fuer-wen',
        heading: { de: 'Für wen die Haarsprechstunde passt', en: 'Who the hair consultation is for' },
        body: { de: ['Die Haarsprechstunde passt, wenn:'], en: ['The hair consultation is right for you if:'] },
        list: {
          de: [
            'Ihr Haar langsam dünner wird, an Stirn, Schläfen oder Scheitel,',
            'seit einigen Wochen deutlich mehr Haare ausfallen, etwa nach einem Infekt, einer Geburt, einer Diät oder einer belastenden Zeit,',
            'Ihr Haar sich in den Wechseljahren verändert,',
            'Sie wissen möchten, ob PRP für Sie in Frage kommt.',
          ],
          en: [
            'your hair is slowly getting thinner, at the forehead, temples or parting,',
            'noticeably more hair has been falling out for some weeks, for example after an infection, a birth, a diet or a stressful period,',
            'your hair is changing during menopause,',
            'you would like to know whether PRP could be an option for you.',
          ],
        },
      },
      {
        id: 'haaranalyse',
        heading: { de: 'Haaranalyse: eine ärztliche Untersuchung', en: 'Hair analysis: a medical examination' },
        body: {
          de: [
            'Unsere Haaranalyse ist eine ärztliche Untersuchung. Sie ist kein Mineraltest an abgeschnittenen Haaren, wie ihn manche Labore anbieten.',
          ],
          en: [
            'Our hair analysis is a medical examination. It is not a mineral test on cut hair, as some laboratories offer.',
          ],
        },
      },
      {
        id: 'blutwerte',
        heading: { de: 'Diese Blutwerte bestimmen wir', en: 'The blood tests we do' },
        body: {
          de: [
            'Drei Werte helfen, häufige Ursachen zu erkennen:',
          ],
          en: [
            'Three values help to identify common causes:',
          ],
        },
        list: {
          de: [
            'Ferritin zeigt, wie voll Ihr Eisenspeicher ist. Ein leerer Speicher kann zu vermehrtem Haarausfall beitragen, zum Beispiel nach einer Schwangerschaft, bei starker Regelblutung oder wenn Sie wenig Fleisch essen.',
            'Das kleine Blutbild zählt rote und weiße Blutkörperchen und Blutplättchen. Es zeigt eine Blutarmut. Außerdem zeigt es, ob genug Blutplättchen da sind, falls später PRP in Frage kommt.',
            'TSH ist der Steuerwert der Schilddrüse. Eine Über- oder Unterfunktion kann Haarausfall auslösen und lässt sich gut behandeln.',
          ],
          en: [
            'Ferritin shows how full your iron stores are. Empty stores can contribute to increased hair loss, for example after a pregnancy, with heavy periods or if you eat little meat.',
            'The basic blood count counts red and white blood cells and platelets. It shows anaemia. It also shows whether there are enough platelets, in case PRP comes into question later.',
            'TSH is the control value of the thyroid. An overactive or underactive thyroid can trigger hair loss and can be treated well.',
          ],
        },
        links: [{ label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' }],
        callout: {
          variant: 'info',
          title: { de: 'Vor der Blutabnahme', en: 'Before the blood test' },
          text: {
            de: 'Bitte nehmen Sie in den drei Tagen vor der Blutabnahme kein Biotin ein. Es verfälscht manche Laborwerte. Mittel wie Biotin oder Zink helfen den Haaren übrigens nur, wenn ein Mangel besteht. Bei Frauen mit unregelmäßigem Zyklus oder unreiner Haut können weitere Hormonwerte sinnvoll sein; was das kostet, sagen wir Ihnen vorher.',
            en: 'Please do not take biotin in the three days before the blood test. It distorts some lab values. Incidentally, products such as biotin or zinc only help the hair if there is a deficiency. For women with an irregular cycle or blemished skin, further hormone values can be useful; we tell you the cost beforehand.',
          },
        },
      },
      {
        id: 'hautarzt',
        heading: { de: 'Wann Sie besser direkt zur Hautärztin oder zum Hautarzt gehen', en: 'When to go straight to a dermatologist' },
        body: {
          de: [
            'Wir sind eine Privatpraxis für Reisemedizin und Prävention, keine Hautarztpraxis. Wir klären die häufigen Formen von Haarausfall und die Blutwerte. Direkt zur Hautärztin oder zum Hautarzt sollten Sie, wenn:',
          ],
          en: [
            'We are a private practice for travel medicine and prevention, not a dermatology practice. We clarify the common forms of hair loss and the blood values. You should go straight to a dermatologist if:',
          ],
        },
        list: {
          de: [
            'runde, kahle Stellen entstehen,',
            'die Kopfhaut gerötet, entzündet oder stark schuppig ist, juckt oder Pusteln hat,',
            'an kahlen Stellen Narben zu sehen sind,',
            'Haare abbrechen statt auszufallen,',
            'auch Augenbrauen oder Wimpern ausfallen.',
          ],
          en: [
            'round, bald patches appear,',
            'the scalp is red, inflamed or very scaly, itches or has pustules,',
            'scars are visible in bald areas,',
            'hairs break off rather than fall out,',
            'eyebrows or eyelashes are falling out too.',
          ],
        },
        callout: {
          variant: 'info',
          text: {
            de: 'Fällt uns so etwas in der Sprechstunde auf, schicken wir Sie mit einem kurzen Bericht weiter.',
            en: 'If we notice anything like this in the consultation, we refer you on with a short report.',
          },
        },
      },
      {
        id: 'prp',
        heading: { de: 'PRP: vorher Diagnose und Blutwerte klären', en: 'PRP: diagnosis and blood values first' },
        body: {
          de: [
            'PRP ist eine Behandlung mit Plasma aus Ihrem eigenen Blut. Vorher muss klar sein, welche Form von Haarausfall Sie haben. Außerdem müssen Ihre Blutwerte passen. Beides klären wir in der Haarsprechstunde.',
          ],
          en: [
            'PRP is a treatment with plasma from your own blood. Beforehand it must be clear which form of hair loss you have. Your blood values must also be suitable. We clarify both in the hair consultation.',
          ],
        },
      },
    ],
    sourceIds: ['goae'],
    lastReviewed: new Date('2026-11-20'),
    related: [
      { label: { de: 'Laborwerte-Check', en: 'Blood test check' }, path: '/praevention/laborwerte-check' },
      { label: { de: 'Gesundheitscheck', en: 'Health check-up' }, path: '/praevention/gesundheitscheck' },
      { label: { de: 'Welche Blutwerte wofür?', en: 'Blood tests explained' }, path: '/ratgeber/blutwerte-erklaert' },
      { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
    ],
    faq: [
      {
        q: { de: 'Zahlt meine Krankenversicherung?', en: 'Does my health insurance pay?' },
        a: {
          de: 'Sie erhalten eine Rechnung nach GOÄ. Ob Ihre private Krankenversicherung oder die Beihilfe etwas erstattet, hängt von Ihrem Vertrag ab. Als gesetzlich Versicherte oder Versicherter zahlen Sie die Leistung selbst.',
          en: 'You receive an invoice under the GOÄ. Whether your private health insurance or Beihilfe reimburses anything depends on your contract. With statutory insurance you pay for the service yourself.',
        },
      },
      {
        q: { de: 'Muss ich zur Blutabnahme nüchtern kommen?', en: 'Do I need to fast for the blood test?' },
        a: {
          de: 'Für Ferritin, kleines Blutbild und TSH nicht. Bitte nehmen Sie nur in den drei Tagen davor kein Biotin ein.',
          en: 'Not for ferritin, basic blood count and TSH. Just please do not take biotin in the three days before.',
        },
      },
      {
        q: { de: 'Was soll ich zum Termin mitbringen?', en: 'What should I bring to the appointment?' },
        a: {
          de: 'Eine Liste Ihrer Medikamente und, wenn vorhanden, ältere Blutwerte. Hilfreich sind auch eigene Fotos von früher. Bitte waschen Sie die Haare am Termintag nicht und verzichten Sie auf Haarspray oder Gel.',
          en: 'A list of your medication and, if available, earlier blood results. Your own photos from the past are also helpful. Please do not wash your hair on the day of the appointment and avoid hairspray or gel.',
        },
      },
      {
        q: { de: 'Welche Behandlung kommt in Frage?', en: 'Which treatment is an option?' },
        a: {
          de: 'Das hängt von der Form Ihres Haarausfalls und von Ihren Blutwerten ab. Mittel zum Auftragen sind besser untersucht als PRP. Wir besprechen mit Ihnen ehrlich, was eine Behandlung bringen kann und welche Nebenwirkungen sie haben kann.',
          en: 'That depends on your type of hair loss and your blood values. Products to apply to the scalp have been studied better than PRP. We discuss honestly with you what a treatment can do and which side effects it can have.',
        },
      },
      {
        q: { de: 'Kann ich PRP direkt buchen?', en: 'Can I book PRP directly?' },
        a: {
          de: 'Erst klären wir in der Haarsprechstunde, ob PRP für Sie passt: Die Form Ihres Haarausfalls und Ihre Blutwerte müssen dazu passen. Den PRP-Termin vereinbaren wir danach mit Ihnen.',
          en: 'First we clarify in the hair consultation whether PRP suits you: your type of hair loss and your blood values must fit. We then arrange the PRP appointment with you.',
        },
      },
      {
        q: { de: 'Geht der Befundtermin auch am Telefon?', en: 'Can the results appointment take place by phone?' },
        a: {
          de: 'Ja. Den Befund besprechen wir in der Praxis oder am Telefon, wie es Ihnen lieber ist.',
          en: 'Yes. We discuss the results at the practice or by phone, whichever you prefer.',
        },
      },
    ],
  },
};

/**
 * Vollständiger Text der Unterseite /praevention/haare/prp (baut die
 * Leitsitzung). Seitentitel-Vorschlag: „PRP bei Haarausfall in Langenfeld:
 * Ablauf, Kosten | Polaris". Ohne Betrag je Sitzung und ohne Startdatum, bis
 * Nicki [OFFEN: 3], [OFFEN: 4] und [OFFEN: 6] entscheidet.
 */
export const haarePrp: ClinicalPage = {
  meta: {
    title: { de: 'PRP bei Haarausfall', en: 'PRP for hair loss' },
    description: {
      de: 'PRP aus Eigenblut bei Haarausfall: was es kann, was nicht, Ablauf, Nebenwirkungen und Kosten. Vorher klären wir Diagnose und Blutwerte.',
      en: 'PRP from your own blood for hair loss: what it can and cannot do, procedure, side effects and costs. Diagnosis and blood values come first.',
    },
    eyebrow: { de: 'Prävention', en: 'Prevention' },
    lead: {
      de: 'PRP heißt plättchenreiches Plasma. Wir nehmen Ihnen etwas Blut ab. Eine Zentrifuge trennt daraus den Teil mit vielen Blutplättchen ab. Diesen Teil spritzen wir mit einer sehr feinen Nadel in die Kopfhaut. Die Idee: Wachstumsstoffe aus den Blutplättchen sollen die Haarwurzeln anregen. PRP ist eine Ergänzung. Es ist nicht die erste Wahl bei Haarausfall. Vorher klären wir in der Haarsprechstunde, ob es für Sie in Frage kommt.',
      en: 'PRP stands for platelet-rich plasma. We take a little of your blood. A centrifuge separates out the part with many platelets. We inject this part into the scalp with a very fine needle. The idea: growth factors from the platelets are meant to stimulate the hair roots. PRP is an add-on. It is not the first choice for hair loss. Beforehand we clarify in the hair consultation whether it is an option for you.',
    },
  },
  sections: [
    {
      id: 'studien',
      heading: { de: 'Was Studien zeigen, ehrlich gesagt', en: 'What studies show, honestly' },
      body: { de: [], en: [] },
      list: {
        de: [
          'In Studien hatten Menschen mit erblich bedingtem Haarausfall nach PRP im Mittel etwas mehr Haare als nach einer Scheinbehandlung.',
          'Die Studien sind klein und sehr unterschiedlich gemacht. Ihre Aussagekraft ist gering. Eine sorgfältig verblindete Studie fand keinen klaren Unterschied.',
          'Die europäische Leitlinie zum erblich bedingten Haarausfall spricht sich weder für noch gegen PRP aus.',
          'Für Frauen gibt es zu wenige gute Studien für eine klare Aussage.',
          'Die Wirkung ist nach etwa drei Monaten am größten und lässt danach wieder nach, wenn man nicht auffrischt.',
          'Besser untersucht sind andere Behandlungen, zum Beispiel Mittel zum Auftragen auf die Kopfhaut. PRP kann diese ergänzen, ersetzt sie aber nicht.',
        ],
        en: [
          'In studies, people with inherited hair loss had on average slightly more hair after PRP than after a sham treatment.',
          'The studies are small and conducted very differently. Their evidential value is low. One carefully blinded study found no clear difference.',
          'The European guideline on inherited hair loss makes no recommendation for or against PRP.',
          'For women there are too few good studies for a clear statement.',
          'The effect is greatest after about three months and then wears off again unless it is refreshed.',
          'Other treatments have been studied better, for example products to apply to the scalp. PRP can complement them but does not replace them.',
        ],
      },
    },
    {
      id: 'grenzen',
      heading: { de: 'Was PRP nicht kann', en: 'What PRP cannot do' },
      body: {
        de: [
          'PRP lässt auf Stellen, die schon lange kahl sind, keine neuen Haare wachsen. Es ersetzt keine Haartransplantation. Ob es bei Ihnen etwas bringt, kann vorher niemand sicher sagen.',
        ],
        en: [
          'PRP does not make new hair grow on areas that have been bald for a long time. It does not replace a hair transplant. Nobody can say for certain beforehand whether it will help you.',
        ],
      },
    },
    {
      id: 'fuer-wen',
      heading: { de: 'Für wen PRP in Frage kommt', en: 'Who PRP may be suitable for' },
      body: {
        de: [
          'Für Frauen und Männer mit erblich bedingtem Haarausfall, bei denen die Haarsprechstunde die Diagnose geklärt hat und die Blutwerte passen.',
        ],
        en: [
          'For women and men with inherited hair loss whose diagnosis has been clarified in the hair consultation and whose blood values are suitable.',
        ],
      },
    },
    {
      id: 'nicht-passend',
      heading: { de: 'Wann PRP nicht passt', en: 'When PRP is not suitable' },
      body: { de: ['PRP passt zum Beispiel nicht bei:'], en: ['PRP is not suitable, for example, with:'] },
      list: {
        de: [
          'zu wenigen Blutplättchen oder einer Störung ihrer Funktion,',
          'blutverdünnenden Medikamenten (bitte vorher mit uns besprechen),',
          'einer Entzündung oder Infektion der Kopfhaut,',
          'einer aktiven Krebserkrankung,',
          'Schwangerschaft und Stillzeit,',
          'vernarbendem Haarausfall.',
        ],
        en: [
          'too few platelets or a disorder of their function,',
          'blood-thinning medication (please discuss this with us beforehand),',
          'inflammation or infection of the scalp,',
          'active cancer,',
          'pregnancy and breastfeeding,',
          'scarring hair loss.',
        ],
      },
    },
    {
      id: 'ablauf-sitzung',
      heading: { de: 'So läuft eine Sitzung ab (ca. 45 Minuten)', en: 'How a session works (approx. 45 minutes)' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Kurze Rückfrage zu Ihrem Befinden und Fotos der Kopfhaut.',
          'Wir nehmen etwas Blut aus der Armvene ab, wie bei einer Blutabnahme.',
          'Die Zentrifuge trennt das Plasma ab. Das dauert etwa zehn Minuten.',
          'Die Ärztin oder der Arzt spritzt das Plasma mit einer sehr feinen Nadel an vielen kleinen Stellen in die Kopfhaut.',
          'Danach können Sie direkt nach Hause oder zur Arbeit. Was Sie am selben Tag meiden sollten, steht auf einem Merkblatt, das Sie mitbekommen.',
        ],
        en: [
          'A short check on how you are and photos of the scalp.',
          'We take a little blood from a vein in your arm, as for a blood test.',
          'The centrifuge separates the plasma. This takes about ten minutes.',
          'The doctor injects the plasma into the scalp with a very fine needle at many small points.',
          'Afterwards you can go straight home or to work. What to avoid on the same day is on an information sheet you take with you.',
        ],
      },
    },
    {
      id: 'wie-oft',
      heading: { de: 'Wie oft', en: 'How often' },
      body: {
        de: [
          'Üblich sind drei Sitzungen im Abstand von etwa vier Wochen. Wer weitermachen möchte, frischt danach alle drei bis sechs Monate auf. Nach etwa drei Monaten vergleichen wir die Fotos. Dann entscheiden wir gemeinsam, ob sich die Behandlung für Sie lohnt.',
        ],
        en: [
          'Three sessions about four weeks apart are usual. If you want to continue, you then refresh every three to six months. After about three months we compare the photos. Then we decide together whether the treatment is worthwhile for you.',
        ],
      },
    },
    {
      id: 'nebenwirkungen',
      heading: { de: 'Nebenwirkungen', en: 'Side effects' },
      body: {
        de: [
          'Häufig sind Schmerzen beim Spritzen, ein Spannungsgefühl und eine leichte Schwellung der Kopfhaut für ein bis zwei Tage. An den Einstichstellen können kleine Blutergüsse entstehen. Selten sind eine Entzündung, kleine Narben, eine schuppende Reaktion der Kopfhaut oder für kurze Zeit mehr Haarausfall.',
        ],
        en: [
          'Common are pain during the injections, a feeling of tightness and slight swelling of the scalp for one to two days. Small bruises can form at the injection sites. Rare are inflammation, small scars, a scaly reaction of the scalp or more hair loss for a short time.',
        ],
      },
    },
    {
      id: 'kosten',
      heading: { de: 'Kosten', en: 'Costs' },
      body: { de: [], en: [] },
      list: {
        de: [
          'Was eine Sitzung kostet, hängt von der Zahl der Einstiche ab. Der Betrag setzt sich aus dem ärztlichen Honorar und den PRP-Röhrchen zusammen, die nur einmal verwendet werden.',
          'Es gibt keine Pakete. Sie zahlen jede Sitzung einzeln nach der Gebührenordnung für Ärzte (GOÄ).',
          'Vor der ersten Sitzung bekommen Sie die Kosten schriftlich.',
          'Rechnen Sie damit, dass Sie PRP selbst zahlen.',
          'Vorher kommt die Haarsprechstunde mit Blutwerten; ihre Kosten stehen auf der Seite der Haarsprechstunde.',
        ],
        en: [
          'What a session costs depends on the number of injection points. The amount consists of the medical fee and the single-use PRP tubes.',
          'There are no packages. You pay for each session individually under the German fee schedule for doctors (GOÄ).',
          'You receive the costs in writing before the first session.',
          'Expect to pay for PRP yourself.',
          'Before that comes the hair consultation with blood tests; its costs are on the hair consultation page.',
        ],
      },
    },
    {
      id: 'termin',
      heading: { de: 'So kommen Sie zu einem PRP-Termin', en: 'How to get a PRP appointment' },
      body: {
        de: ['Ab wann wir PRP anbieten, nennen wir hier, sobald es feststeht.'],
        en: ['We will state here from when we offer PRP as soon as this is fixed.'],
      },
      list: {
        de: [
          'Sie buchen die Haarsprechstunde.',
          'Im Befundtermin klären wir, ob PRP für Sie passt.',
          'Passt es, vereinbaren wir Ihren PRP-Termin mit Ihnen.',
        ],
        en: [
          'You book the hair consultation.',
          'In the results appointment we clarify whether PRP suits you.',
          'If it does, we arrange your PRP appointment with you.',
        ],
      },
      links: [{ label: { de: 'Zur Haarsprechstunde', en: 'To the hair consultation' }, path: '/praevention/haare' }],
    },
  ],
  sourceIds: ['goae'],
  lastReviewed: new Date('2026-11-20'),
  related: [
    { label: { de: 'Haarsprechstunde', en: 'Hair consultation' }, path: '/praevention/haare' },
    { label: { de: 'Kosten & Abrechnung', en: 'Fees & billing' }, path: '/kosten' },
  ],
  faq: [
    {
      q: { de: 'Tut PRP weh?', en: 'Does PRP hurt?' },
      a: {
        de: 'Die vielen kleinen Einstiche sind unangenehm. Die meisten beschreiben ein Pieksen oder Brennen. Wir sprechen vorher mit Ihnen ab, wie wir es Ihnen leichter machen.',
        en: 'The many small injections are unpleasant. Most people describe a pricking or burning feeling. We agree with you beforehand how we can make it easier for you.',
      },
    },
    {
      q: { de: 'Wann sieht man etwas?', en: 'When will I see something?' },
      a: {
        de: 'Wenn PRP bei Ihnen wirkt, frühestens nach etwa drei Monaten. Deshalb machen wir Fotos und vergleichen sie dann mit Ihnen.',
        en: 'If PRP works for you, after about three months at the earliest. That is why we take photos and then compare them with you.',
      },
    },
    {
      q: { de: 'Hält das Ergebnis?', en: 'Does the result last?' },
      a: {
        de: 'Nicht von allein. Ohne Auffrischung lässt die Wirkung nach einigen Monaten wieder nach.',
        en: 'Not on its own. Without refreshing, the effect wears off again after a few months.',
      },
    },
    {
      q: { de: 'Kann ich PRP mit anderen Mitteln verbinden?', en: 'Can I combine PRP with other products?' },
      a: {
        de: 'Ja, das ist oft sinnvoll. Studien deuten an, dass PRP zusätzlich zu einem Mittel zum Auftragen etwas mehr bringt. Belegt ist das aber nur schwach.',
        en: 'Yes, that often makes sense. Studies suggest that PRP in addition to a product applied to the scalp helps a little more. However, the evidence for this is weak.',
      },
    },
    {
      q: { de: 'Ist PRP auch etwas für Frauen?', en: 'Is PRP also an option for women?' },
      a: {
        de: 'Es kann eine Möglichkeit sein. Für Frauen gibt es aber noch weniger gute Studien als für Männer. Das besprechen wir offen mit Ihnen.',
        en: 'It can be an option. However, there are even fewer good studies for women than for men. We discuss this openly with you.',
      },
    },
    {
      q: { de: 'Warum kommt vor PRP die Haarsprechstunde?', en: 'Why does the hair consultation come before PRP?' },
      a: {
        de: 'Weil PRP nicht zu jeder Form von Haarausfall passt. Vorher müssen die Diagnose und die Blutplättchen geklärt sein. So zahlen Sie nicht für eine Behandlung, die bei Ihnen nicht passt.',
        en: 'Because PRP does not suit every form of hair loss. The diagnosis and the platelet count must be clarified first. That way you do not pay for a treatment that is not right for you.',
      },
    },
  ],
};
