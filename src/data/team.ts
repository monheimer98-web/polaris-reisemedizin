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
      de: 'Die Praxis',
      en: 'Our practice',
    },
    description: {
      de: 'Lernen Sie unsere Praxis für Reise- und Impfmedizin kennen – mit ärztlicher Beratung auf Grundlage gesicherter Fachquellen.',
      en: 'Get to know our travel and vaccination medicine practice – with medical advice grounded in trusted professional sources.',
    },
    eyebrow: {
      de: 'Über uns',
      en: 'About us',
    },
    lead: {
      de: 'Ärztliche Kompetenz mit einem klaren Anspruch: eine sorgfältige, persönliche Reiseimpfberatung auf dem Stand gesicherter Fachquellen. Lernen Sie die Praxis und unseren Ansatz kennen.',
      en: 'Medical expertise with one clear standard: careful, personal travel-vaccination advice based on trusted professional sources. Get to know the practice and our approach.',
    },
  },
  intro: {
    de: [
      'Unsere Praxis ist auf Reise- und Impfmedizin spezialisiert. Wir beraten Sie vor Reisen in Risikogebiete, führen die empfohlenen und vorgeschriebenen Impfungen durch und stellen die erforderlichen Nachweise aus – darunter den internationalen Impfnachweis für Gelbfieber.',
      'Dabei nehmen wir uns Zeit: Sie sollen in Ruhe fragen können und am Ende genau wissen, welche Impfungen und Vorkehrungen für Ihre Reise sinnvoll sind.',
    ],
    en: [
      'Our practice specialises in travel and vaccination medicine. We advise you ahead of trips to risk areas, administer the recommended and required vaccinations and issue the necessary certificates – including the international certificate for yellow fever.',
      'We take our time: you should be able to ask your questions calmly and leave knowing exactly which vaccinations and precautions make sense for your trip.',
    ],
  },
  teamHeading: {
    de: 'Ihr Arzt',
    en: 'Your physician',
  },
  teamLead: {
    de: 'Beratung und Impfungen liegen in ärztlicher Hand – persönlich und auf dem Stand gesicherter Fachquellen.',
    en: 'Advice and vaccinations are in the physician’s hands – personal and based on trusted professional sources.',
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
      'Bei uns sollen Sie sich vom ersten Moment an gut aufgehoben fühlen. Wir beraten Reisende sorgfältig und unabhängig und richten jede Empfehlung an Ihrer konkreten Reise aus.',
      'Die Praxis ist als staatlich autorisierte Gelbfieberimpfstelle zugelassen und führt Reiseimpfungen wie die Gelbfieber- und die FSME-Impfung durch. Termine vereinbaren Sie bequem online; die persönliche Beratung findet in Ruhe vor Ort statt.',
    ],
    en: [
      'From the very first moment, you should feel in good hands with us. We advise travellers carefully and independently and tailor every recommendation to your specific trip.',
      'The practice is licensed as a state-authorised yellow fever vaccination centre and provides travel vaccinations such as the yellow fever and TBE vaccination. You can book appointments conveniently online; the personal consultation takes place, unhurried, on site.',
    ],
  },
};
