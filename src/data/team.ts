/**
 * Inhalte der „Über uns / Team"-Seite.
 *
 * Bewusst KEINE ClinicalPage: Die Seite trifft keine belegpflichtigen
 * medizinischen Aussagen, sondern stellt Praxis und Ärzt:innen vor. Die
 * personenbezogenen Daten (Namen, Rollen, Kurzvita) stammen zentral aus
 * `site.team`; hier liegen nur die redaktionellen Rahmentexte. Der
 * Markenname wird NICHT hartkodiert – in der Komponente kommt er aus
 * `site.brand`, damit ein Marken-Tausch eine Einzeiländerung bleibt.
 */
import type { Localized } from './types';

/** Icon-Variante für die Grundsatz-Karten („Unser Ansatz"). */
export type TeamValueIcon = 'book' | 'shield' | 'calendar' | 'globe';

export interface TeamValue {
  icon: TeamValueIcon;
  title: Localized;
  text: Localized;
}

export interface TeamPage {
  meta: {
    title: Localized;
    description: Localized;
    eyebrow: Localized;
    lead: Localized;
  };
  /** Einleitende Absätze. */
  intro: Localized<string[]>;
  teamHeading: Localized;
  teamLead: Localized;
  valuesHeading: Localized;
  valuesLead: Localized;
  values: TeamValue[];
  practiceHeading: Localized;
  practiceBody: Localized<string[]>;
}

export const teamPage: TeamPage = {
  meta: {
    title: {
      de: 'Ihr Praxisteam',
      en: 'Your practice team',
    },
    description: {
      de: 'Lernen Sie das Team unserer Praxis für Reise- und Impfmedizin kennen – mit einem Beratungsansatz auf Grundlage gesicherter Fachquellen.',
      en: 'Meet the team of our travel and vaccination medicine practice – with an approach to advice grounded in trusted professional sources.',
    },
    eyebrow: {
      de: 'Über uns',
      en: 'About us',
    },
    lead: {
      de: 'Ärztliche Kompetenz und ein eingespieltes Praxisteam mit einem gemeinsamen Anspruch: eine sorgfältige, persönliche Reiseimpfberatung auf dem Stand gesicherter Fachquellen. Lernen Sie das Team und unseren Ansatz kennen.',
      en: 'Medical expertise and a well-coordinated practice team with one shared standard: careful, personal travel-vaccination advice based on trusted professional sources. Get to know the team and our approach.',
    },
  },
  intro: {
    de: [
      'Unsere Praxis ist auf Reise- und Impfmedizin spezialisiert. Wir beraten Sie vor Reisen in Risikogebiete, führen die empfohlenen und vorgeschriebenen Impfungen durch und stellen die erforderlichen Nachweise aus – darunter den internationalen Impfnachweis für Gelbfieber.',
      'Unser Anspruch ist eine Beratung, die sich an gesicherten Fachquellen orientiert und sich Zeit für Ihre individuelle Situation nimmt – sachlich, verständlich und ohne Versprechen, die sich nicht halten lassen.',
    ],
    en: [
      'Our practice specialises in travel and vaccination medicine. We advise you ahead of trips to risk areas, administer the recommended and required vaccinations and issue the necessary certificates – including the international certificate for yellow fever.',
      'Our aim is advice that is guided by trusted professional sources and takes time for your individual situation – factual, clear and without promises that cannot be kept.',
    ],
  },
  teamHeading: {
    de: 'Unser Team',
    en: 'Our team',
  },
  teamLead: {
    de: 'Die ärztliche Beratung und die Impfungen liegen in approbierter Hand; unser medizinischer Mitarbeiter unterstützt Sie bei Organisation und Ablauf rund um Ihren Termin.',
    en: 'Medical advice and vaccinations are in licensed hands; our medical team member supports you with organisation and the practicalities around your appointment.',
  },
  valuesHeading: {
    de: 'Unser Ansatz',
    en: 'Our approach',
  },
  valuesLead: {
    de: 'Vier Grundsätze prägen unsere Arbeit.',
    en: 'Four principles shape our work.',
  },
  values: [
    {
      icon: 'book',
      title: { de: 'Auf gesicherten Quellen', en: 'Based on trusted sources' },
      text: {
        de: 'Unsere Empfehlungen stützen sich auf RKI/STIKO, WHO, das Paul-Ehrlich-Institut, die DTG und das Auswärtige Amt. Jede Fachseite nennt ihre Quellen samt Stand.',
        en: 'Our recommendations draw on the RKI/STIKO, the WHO, the Paul-Ehrlich-Institut, the DTG and the Federal Foreign Office. Every specialist page states its sources and their status.',
      },
    },
    {
      icon: 'shield',
      title: { de: 'Autorisierte Gelbfieberimpfstelle', en: 'Authorised yellow-fever centre' },
      text: {
        de: 'Als staatlich autorisierte Gelbfieberimpfstelle dürfen wir die Gelbfieberimpfung durchführen und den international gültigen Impfnachweis ausstellen.',
        en: 'As a state-authorised yellow fever vaccination centre, we may administer the yellow fever vaccination and issue the internationally valid certificate.',
      },
    },
    {
      icon: 'calendar',
      title: { de: 'Zeit für Ihre Reise', en: 'Time for your trip' },
      text: {
        de: 'Wir nehmen uns Zeit für eine persönliche Beratung, die Ihre Reiseroute, die Saison und Ihre gesundheitliche Situation berücksichtigt.',
        en: 'We take time for a personal consultation that considers your route, the season and your state of health.',
      },
    },
    {
      icon: 'globe',
      title: { de: 'Verständlich und zweisprachig', en: 'Clear and bilingual' },
      text: {
        de: 'Wir beraten auf Deutsch und Englisch und erklären medizinische Sachverhalte sachlich und nachvollziehbar.',
        en: 'We advise in German and English and explain medical matters factually and understandably.',
      },
    },
  ],
  practiceHeading: {
    de: 'Über die Praxis',
    en: 'About the practice',
  },
  practiceBody: {
    de: [
      'Unsere Praxis berät Reisende sorgfältig und unabhängig. Das Leistungsspektrum umfasst derzeit die Gelbfieber- und die FSME-Impfung samt zugehöriger Beratung.',
      'Die Praxis ist als staatlich autorisierte Gelbfieberimpfstelle zugelassen. Termine vereinbaren Sie bequem online; die persönliche Beratung findet vor Ort statt.',
    ],
    en: [
      'Our practice advises travellers carefully and independently. The range of services currently comprises yellow fever and TBE vaccination together with the related consultation.',
      'The practice is licensed as a state-authorised yellow fever vaccination centre. You can book appointments conveniently online; the personal consultation takes place on site.',
    ],
  },
};
