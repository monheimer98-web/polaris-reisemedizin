/**
 * Inhalte der Impressum-Seite (DE+EN).
 *
 * Trennung der Verantwortlichkeiten: die konkreten Pflichtangaben nach § 5 DDG
 * (Name, Anschrift, Kontakt, Kammer, Versicherung, Gelbfieberimpfstelle …)
 * stammen zentral aus `site.ts` und werden erst in `ImpressumContent.astro`
 * eingesetzt; hier liegen ausschließlich die zweisprachigen Beschriftungen,
 * erläuternden Sätze und die rechtliche Boilerplate-Prosa (Haftung, Links,
 * Urheberrecht, Streitbeilegung). So bleibt der Mustertext sauber pflegbar und
 * die echten Daten haben eine einzige Quelle der Wahrheit.
 *
 * Rechtsstand-Hinweis: § 5 DDG (Digitale-Dienste-Gesetz) hat seit Mai 2024 den
 * § 5 TMG abgelöst; die redaktionelle Verantwortlichkeit folgt § 18 Abs. 2 MStV.
 * Die EU-OS-Plattform wurde zum 20. Juli 2025 eingestellt – daher bewusst KEIN
 * (toter) OS-Link, nur die VSBG-Erklärung. Die Pflichtangaben nach § 5 DDG
 * (Anbieter, Kontakt, Kammer/Aufsicht, Berufsrecht, Versicherung, USt) sind
 * vollständig gesetzt.
 */
import type { Localized, LegalSection } from './types';

export interface ImpressumPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  /** Stand der Angaben (für die „Stand: …"-Zeile). */
  lastUpdated: Date;
  /** Beschriftungen für die aus `site.ts` gespeisten Pflichtangaben. */
  labels: {
    providerHeading: Localized;
    responsibleHeading: Localized;
    responsibleNote: Localized;
    contactHeading: Localized;
    phoneLabel: Localized;
    emailLabel: Localized;
    professionHeading: Localized;
    jobTitleLabel: Localized;
    chamberLabel: Localized;
    chamberNote: Localized;
    rulesLabel: Localized;
    rulesText: Localized;
    yellowFeverHeading: Localized;
    yellowFeverIntro: Localized;
    yellowFeverAuthorityLabel: Localized;
    insuranceHeading: Localized;
    insurerLabel: Localized;
    insuranceScopeLabel: Localized;
    vatHeading: Localized;
    /** Hinweis, wenn keine USt-IdNr. vorliegt (Heilbehandlung umsatzsteuerbefreit). */
    vatNote: Localized;
    editorHeading: Localized;
    editorNote: Localized;
  };
  /** Rechtliche Boilerplate-Prosa (Haftung, Links, Urheberrecht, Streitbeilegung). */
  blocks: LegalSection[];
  /** Abschluss-Hinweis (maßgebliche Sprachfassung). */
  closingNote: Localized;
}

export const impressumPage: ImpressumPage = {
  meta: {
    title: {
      de: 'Impressum',
      en: 'Imprint',
    },
    description: {
      de: 'Impressum und Anbieterkennzeichnung nach § 5 DDG: verantwortliche Praxis, Praxisinhaber, Kontakt, zuständige Ärztekammer und Berufsrecht.',
      en: 'Imprint and provider identification under Section 5 DDG: responsible practice, practice owner, contact, competent medical association and professional law.',
    },
    eyebrow: {
      de: 'Rechtliches',
      en: 'Legal',
    },
    lead: {
      de: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) sowie § 18 Abs. 2 Medienstaatsvertrag (MStV).',
      en: 'Information pursuant to Section 5 of the German Digital Services Act (DDG) and Section 18 (2) of the Interstate Media Treaty (MStV).',
    },
  },
  lastUpdated: new Date('2026-06-12'),
  labels: {
    providerHeading: {
      de: 'Diensteanbieter',
      en: 'Service provider',
    },
    responsibleHeading: {
      de: 'Praxisinhaber und verantwortlicher Arzt',
      en: 'Practice owner and responsible physician',
    },
    responsibleNote: {
      de: 'Inhaltlich und berufsrechtlich verantwortlich für die ärztlichen Leistungen der Praxis.',
      en: 'Responsible for the practice’s medical services in both editorial and professional-law terms.',
    },
    contactHeading: {
      de: 'Kontakt',
      en: 'Contact',
    },
    phoneLabel: {
      de: 'Telefon',
      en: 'Phone',
    },
    emailLabel: {
      de: 'E-Mail',
      en: 'Email',
    },
    professionHeading: {
      de: 'Berufsbezeichnung und berufsrechtliche Regelungen',
      en: 'Professional title and professional regulations',
    },
    jobTitleLabel: {
      de: 'Gesetzliche Berufsbezeichnung',
      en: 'Statutory professional title',
    },
    chamberLabel: {
      de: 'Zuständige Kammer (Aufsichtsbehörde)',
      en: 'Competent chamber (supervisory authority)',
    },
    chamberNote: {
      de: 'Die zuständige Ärztekammer ist zugleich die berufsrechtliche Aufsichtsbehörde.',
      en: 'The competent medical association is also the supervisory authority under professional law.',
    },
    rulesLabel: {
      de: 'Berufsrechtliche Regelungen',
      en: 'Professional regulations',
    },
    rulesText: {
      de: 'Es gelten insbesondere die Berufsordnung der Ärztekammer Nordrhein sowie das Heilberufsgesetz Nordrhein-Westfalen (HeilBerG NRW). Die berufsrechtlichen Regelungen sind über die Website der Kammer einsehbar.',
      en: 'In particular, the code of professional conduct of the North Rhine Medical Association (Ärztekammer Nordrhein) and the North Rhine-Westphalia Healthcare Professions Act (HeilBerG NRW) apply. The professional regulations can be viewed on the chamber’s website.',
    },
    yellowFeverHeading: {
      de: 'Zulassung als Gelbfieberimpfstelle',
      en: 'Authorisation as a yellow fever vaccination centre',
    },
    yellowFeverIntro: {
      de: 'Die Praxis ist als staatlich autorisierte Gelbfieberimpfstelle nach den Internationalen Gesundheitsvorschriften (IGV) zugelassen.',
      en: 'The practice is authorised as a state-approved yellow fever vaccination centre under the International Health Regulations (IHR).',
    },
    yellowFeverAuthorityLabel: {
      de: 'Autorisierende Behörde',
      en: 'Authorising body',
    },
    insuranceHeading: {
      de: 'Berufshaftpflichtversicherung',
      en: 'Professional indemnity insurance',
    },
    insurerLabel: {
      de: 'Versicherer',
      en: 'Insurer',
    },
    insuranceScopeLabel: {
      de: 'Räumlicher Geltungsbereich',
      en: 'Geographical scope',
    },
    vatHeading: {
      de: 'Umsatzsteuer',
      en: 'Value added tax',
    },
    vatNote: {
      de: 'Ärztliche Heilbehandlungen sind nach § 4 Nr. 14 Umsatzsteuergesetz (UStG) von der Umsatzsteuer befreit; eine Umsatzsteuer-Identifikationsnummer wird daher nicht geführt.',
      en: 'Medical treatment is exempt from VAT under Section 4 No. 14 of the German VAT Act (UStG); a VAT identification number is therefore not held.',
    },
    editorHeading: {
      de: 'Redaktionell verantwortlich (§ 18 Abs. 2 MStV)',
      en: 'Responsible for content (Section 18 (2) MStV)',
    },
    editorNote: {
      de: 'Verantwortlich für den redaktionellen Inhalt ist der oben genannte Arzt; die Anschrift entspricht der Praxisanschrift.',
      en: 'The physician named above is responsible for the editorial content; the address corresponds to the practice address.',
    },
  },
  blocks: [
    {
      id: 'streitbeilegung',
      heading: {
        de: 'Verbraucherstreitbeilegung',
        en: 'Consumer dispute resolution',
      },
      body: {
        de: [
          'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 Verbraucherstreitbeilegungsgesetz – VSBG).',
        ],
        en: [
          'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board (Section 36 of the German Consumer Dispute Resolution Act – VSBG).',
        ],
      },
    },
    {
      id: 'haftung-inhalte',
      heading: {
        de: 'Haftung für Inhalte',
        en: 'Liability for content',
      },
      body: {
        de: [
          'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
          'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.',
        ],
        en: [
          'As a service provider, we are responsible for our own content on these pages in accordance with the general laws pursuant to Section 7 (1) DDG. Under Sections 8 to 10 DDG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate unlawful activity.',
          'Obligations to remove or block the use of information under the general laws remain unaffected by this. Liability in this respect is, however, only possible from the point in time at which a concrete infringement of the law becomes known. Upon becoming aware of such infringements, we will remove this content without delay.',
        ],
      },
    },
    {
      id: 'haftung-links',
      heading: {
        de: 'Haftung für Links',
        en: 'Liability for links',
      },
      body: {
        de: [
          'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
          'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.',
        ],
        en: [
          'Our website contains links to external third-party websites over whose content we have no influence. We can therefore accept no liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.',
          'The linked pages were checked for possible legal violations at the time of linking; unlawful content was not recognisable at that time. Permanent monitoring of the content of the linked pages is, however, not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, we will remove such links without delay.',
        ],
      },
    },
    {
      id: 'urheberrecht',
      heading: {
        de: 'Urheberrecht',
        en: 'Copyright',
      },
      body: {
        de: [
          'Die durch die Praxisbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
          'Soweit die Inhalte auf dieser Seite nicht von uns erstellt wurden, werden die Urheberrechte Dritter beachtet und als solche gekennzeichnet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Inhalte umgehend.',
        ],
        en: [
          'The content and works created by the practice operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.',
          'Insofar as the content on this page was not created by us, the copyrights of third parties are respected and marked as such. Should you nevertheless become aware of a copyright infringement, please notify us accordingly. Upon becoming aware of legal violations, we will remove such content without delay.',
        ],
      },
    },
  ],
  closingNote: {
    de: 'Maßgeblich ist die deutsche Fassung; die englische Übersetzung dient ausschließlich der Information.',
    en: 'The German version shall prevail; the English translation is provided for information only.',
  },
};
