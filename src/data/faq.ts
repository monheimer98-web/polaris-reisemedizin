/**
 * Inhalte der FAQ-Seite (DE+EN).
 *
 * Selbsttragend wie die übrigen Marketing-Seiten: nur redaktionelle Texte,
 * keine belegpflichtigen Einzelaussagen (daher KEINE ClinicalPage). Die
 * Antworten bleiben bewusst sachlich und HWG-konform – keine Heilversprechen,
 * keine Preisangaben; wo eine individuelle Abwägung nötig ist, verweisen sie
 * auf das persönliche Beratungsgespräch. Die Fragen sind thematisch gruppiert
 * und werden als native `<details>`-Akkordeons gerendert (kein JS-Island).
 */
import type { Localized } from './types';

/** Eine Frage mit (ggf. mehrabsätziger) Antwort. */
export interface FaqItem {
  q: Localized;
  a: Localized<string[]>;
}

/** Thematische Gruppe mehrerer Fragen. */
export interface FaqGroup {
  title: Localized;
  items: FaqItem[];
}

export interface FaqPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  groups: FaqGroup[];
  /** Abschluss-Hinweis: persönliche Beratung statt pauschaler Antworten. */
  note: Localized;
}

export const faqPage: FaqPage = {
  meta: {
    title: {
      de: 'Häufige Fragen',
      en: 'Frequently asked questions',
    },
    description: {
      de: 'Antworten auf häufige Fragen rund um Terminbuchung, Ablauf, Gelbfieber- und FSME-Impfung sowie Kosten – sachlich und auf Grundlage gesicherter Fachquellen.',
      en: 'Answers to common questions about booking, the consultation, yellow fever and TBE vaccination and costs – factual and based on trusted professional sources.',
    },
    eyebrow: {
      de: 'Fragen & Antworten',
      en: 'Questions & answers',
    },
    lead: {
      de: 'Hier finden Sie Antworten auf die häufigsten Fragen zu Terminen, Ablauf und unseren Impfungen. Eine individuelle Beratung ersetzen sie nicht – dafür nehmen wir uns im persönlichen Gespräch Zeit.',
      en: 'Here you will find answers to the most common questions about appointments, the consultation and our vaccinations. They do not replace individual advice – we take time for that in a personal conversation.',
    },
  },
  groups: [
    {
      title: {
        de: 'Termin & Ablauf',
        en: 'Appointments & consultation',
      },
      items: [
        {
          q: {
            de: 'Wie vereinbare ich einen Termin?',
            en: 'How do I make an appointment?',
          },
          a: {
            de: [
              'Am einfachsten buchen Sie Ihren Termin online über unsere Terminseite. Alternativ erreichen Sie uns telefonisch oder per E-Mail – die Kontaktdaten finden Sie auf der Kontaktseite und im Seitenfuß.',
            ],
            en: [
              'The easiest way is to book your appointment online via our appointments page. Alternatively, you can reach us by phone or email – you will find the contact details on the contact page and in the footer.',
            ],
          },
        },
        {
          q: {
            de: 'Was sollte ich zum Termin mitbringen?',
            en: 'What should I bring to the appointment?',
          },
          a: {
            de: [
              'Bringen Sie bitte Ihren Impfpass mit – oder eine vorhandene Dokumentation früherer Impfungen. Hilfreich sind außerdem Ihre Reiseroute mit allen Ländern und Regionen, der Reisezeitraum sowie Angaben zu Vorerkrankungen und regelmäßig eingenommenen Medikamenten.',
            ],
            en: [
              'Please bring your vaccination certificate – or any documentation of previous vaccinations. It also helps to have your itinerary with all countries and regions, your travel dates and information on any pre-existing conditions and regular medication.',
            ],
          },
        },
        {
          q: {
            de: 'Wie lange vor der Reise sollte ich kommen?',
            en: 'How far in advance of my trip should I come?',
          },
          a: {
            de: [
              'So früh wie möglich – idealerweise einige Wochen vor der Abreise. Manche Impfungen werden über mehrere Dosen aufgebaut, und der Impfschutz braucht Zeit, um sich zu entwickeln.',
              'Für die Gelbfieberimpfung gilt: Der internationale Impfnachweis ist erst ab dem zehnten Tag nach der Impfung gültig. Planen Sie diese Frist bei Pflicht-Einreiseländern unbedingt ein.',
            ],
            en: [
              'As early as possible – ideally a few weeks before departure. Some vaccinations are built up over several doses, and protection needs time to develop.',
              'For the yellow fever vaccination: the international certificate is only valid from the tenth day after vaccination. Be sure to allow for this period when travelling to countries that require it on entry.',
            ],
          },
        },
        {
          q: {
            de: 'Brauche ich eine Überweisung?',
            en: 'Do I need a referral?',
          },
          a: {
            de: [
              'Nein. Als Privatpraxis können Sie einen Termin direkt mit uns vereinbaren – ganz ohne Überweisung.',
            ],
            en: [
              'No. As a private practice, you can arrange an appointment directly with us – no referral required.',
            ],
          },
        },
        {
          q: {
            de: 'Beraten Sie auch auf Englisch?',
            en: 'Do you also advise in English?',
          },
          a: {
            de: [
              'Ja. Beratung und Aufklärung bieten wir auf Deutsch und Englisch an. Diese Website steht Ihnen ebenfalls in beiden Sprachen zur Verfügung.',
            ],
            en: [
              'Yes. We offer advice and information in German and English. This website is also available in both languages.',
            ],
          },
        },
      ],
    },
    {
      title: {
        de: 'Gelbfieberimpfung',
        en: 'Yellow fever vaccination',
      },
      items: [
        {
          q: {
            de: 'Wer darf die Gelbfieberimpfung durchführen?',
            en: 'Who is allowed to administer the yellow fever vaccination?',
          },
          a: {
            de: [
              'Die Gelbfieberimpfung darf in Deutschland ausschließlich von staatlich autorisierten Gelbfieberimpfstellen durchgeführt werden. Unsere Praxis besitzt diese Zulassung und stellt den international gültigen Impfnachweis aus.',
            ],
            en: [
              'In Germany, the yellow fever vaccination may only be administered by state-authorised yellow fever vaccination centres. Our practice holds this authorisation and issues the internationally valid certificate.',
            ],
          },
        },
        {
          q: {
            de: 'Wie lange ist der Gelbfieber-Impfschutz gültig?',
            en: 'How long is the yellow fever vaccination valid?',
          },
          a: {
            de: [
              'Nach den Internationalen Gesundheitsvorschriften (IHR) und der Position der Weltgesundheitsorganisation (WHO) gilt eine einmalige Gelbfieberimpfung als lebenslang gültig. Eine Auffrischung ist für die meisten Reisenden nicht mehr erforderlich.',
              'Der internationale Impfnachweis (ICVP) wird ab dem zehnten Tag nach der Impfung wirksam.',
            ],
            en: [
              'Under the International Health Regulations (IHR) and the position of the World Health Organization (WHO), a single yellow fever vaccination is considered valid for life. A booster is no longer required for most travellers.',
              'The international certificate (ICVP) becomes effective from the tenth day after vaccination.',
            ],
          },
        },
        {
          q: {
            de: 'Was ist der internationale Impfnachweis (ICVP)?',
            en: 'What is the international certificate (ICVP)?',
          },
          a: {
            de: [
              'Der ICVP („International Certificate of Vaccination or Prophylaxis") ist das international anerkannte Dokument, das eine Gelbfieberimpfung bescheinigt. Einige Länder verlangen ihn als Voraussetzung für die Einreise. Wir tragen die Impfung in Ihren Impfpass ein und stellen den Nachweis aus.',
            ],
            en: [
              'The ICVP ("International Certificate of Vaccination or Prophylaxis") is the internationally recognised document certifying a yellow fever vaccination. Some countries require it as a condition of entry. We record the vaccination in your vaccination certificate and issue the document.',
            ],
          },
        },
        {
          q: {
            de: 'Für wen ist die Gelbfieberimpfung nicht geeignet?',
            en: 'For whom is the yellow fever vaccination not suitable?',
          },
          a: {
            de: [
              'Ob die Gelbfieberimpfung für Sie geeignet ist, prüfen wir individuell. Bei bestimmten Vorerkrankungen, einer Immunschwäche, in der Schwangerschaft, bei sehr jungen Säuglingen oder bei einer Allergie gegen Bestandteile des Impfstoffs ist besondere Vorsicht geboten.',
              'Bringen Sie relevante Vorbefunde mit, damit wir Nutzen und mögliche Risiken im Aufklärungsgespräch gemeinsam abwägen können.',
            ],
            en: [
              'Whether the yellow fever vaccination is suitable for you is something we assess individually. Particular caution is required with certain pre-existing conditions, a weakened immune system, during pregnancy, in very young infants or with an allergy to components of the vaccine.',
              'Please bring relevant medical records so that we can weigh the benefits and possible risks together during the consultation.',
            ],
          },
        },
      ],
    },
    {
      title: {
        de: 'FSME-Impfung',
        en: 'TBE (FSME) vaccination',
      },
      items: [
        {
          q: {
            de: 'Wann ist die FSME-Impfung sinnvoll?',
            en: 'When is the TBE vaccination advisable?',
          },
          a: {
            de: [
              'Die FSME-Impfung wird vor allem für Menschen empfohlen, die sich in ausgewiesenen Risikogebieten aufhalten und dort Zecken ausgesetzt sein können – etwa bei Aufenthalten in der Natur. Ob sie für Sie infrage kommt, hängt von Ihrem Reiseziel und Ihren Aktivitäten ab.',
            ],
            en: [
              'The TBE vaccination is recommended above all for people who spend time in designated risk areas where they may be exposed to ticks – for example during outdoor activities. Whether it is right for you depends on your destination and your activities.',
            ],
          },
        },
        {
          q: {
            de: 'Wie viele Impfungen sind für den FSME-Schutz nötig?',
            en: 'How many doses are needed for TBE protection?',
          },
          a: {
            de: [
              'Die Grundimmunisierung besteht aus drei Impfdosen in festgelegten Abständen. Anschließend sind regelmäßige Auffrischungen vorgesehen. Den genauen Impfplan stimmen wir auf Ihre Situation und Ihren Zeitrahmen ab.',
            ],
            en: [
              'Primary immunisation consists of three doses at defined intervals. Regular boosters are scheduled thereafter. We tailor the exact schedule to your situation and your timeframe.',
            ],
          },
        },
        {
          q: {
            de: 'Wo liegen die FSME-Risikogebiete?',
            en: 'Where are the TBE risk areas?',
          },
          a: {
            de: [
              'In Deutschland weist das Robert Koch-Institut die Risikogebiete jährlich aus; betroffen sind vor allem Teile Süd- und Mitteldeutschlands. Auch in Teilen Europas und Asiens kommt FSME vor. Einen Überblick und Verweise auf die maßgeblichen Live-Quellen finden Sie auf unserer Seite zu den Risikogebieten.',
            ],
            en: [
              'In Germany, the Robert Koch Institute designates the risk areas each year; these mainly affect parts of southern and central Germany. TBE also occurs in parts of Europe and Asia. You will find an overview and links to the authoritative live sources on our risk areas page.',
            ],
          },
        },
      ],
    },
    {
      title: {
        de: 'Kosten & Organisation',
        en: 'Costs & organisation',
      },
      items: [
        {
          q: {
            de: 'Werden die Kosten von der Krankenkasse übernommen?',
            en: 'Are the costs covered by health insurance?',
          },
          a: {
            de: [
              'Reiseimpfungen zählen in der Regel zu den individuellen Gesundheitsleistungen und werden als Selbstzahlerleistung abgerechnet. Einige gesetzliche Krankenkassen erstatten bestimmte Reiseimpfungen freiwillig – ob und in welchem Umfang, klären Sie bitte vorab mit Ihrer Krankenkasse.',
              'Die für Sie anfallenden Kosten besprechen wir transparent vor der Impfung.',
            ],
            en: [
              'Travel vaccinations are generally individual health services and are billed as a self-pay service. Some statutory health insurers voluntarily reimburse certain travel vaccinations – please check in advance with your insurer whether and to what extent this applies.',
              'We will explain the costs that apply to you transparently before the vaccination.',
            ],
          },
        },
        {
          q: {
            de: 'Kann ich mich auch ohne konkrete Reise beraten lassen?',
            en: 'Can I get advice even without a specific trip planned?',
          },
          a: {
            de: [
              'Ja. Eine reisemedizinische Beratung ist auch dann sinnvoll, wenn Sie eine Reise erst planen oder Ihren Impfstatus grundsätzlich überprüfen lassen möchten.',
            ],
            en: [
              'Yes. Travel-medicine advice can be worthwhile even if you are only planning a trip or simply want to have your vaccination status reviewed.',
            ],
          },
        },
      ],
    },
  ],
  note: {
    de: 'Ihre Frage ist nicht dabei? Sprechen Sie uns gern an – im persönlichen Gespräch gehen wir auf Ihre individuelle Situation ein.',
    en: 'Your question not covered here? Please get in touch – in a personal conversation we address your individual situation.',
  },
};
