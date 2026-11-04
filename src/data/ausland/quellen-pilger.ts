/** Quellen der Pilgerseiten. */
import type { Source } from '../sources';

const ABRUF = new Date('2026-10-31');

export const auslandPilgerQuellen = {
  aaSaudiArabien: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Saudi-Arabien: Reise- und Sicherheitshinweise',
      en: 'Saudi Arabia: travel and safety information',
    },
    url: 'https://www.auswaertiges-amt.de/de/reiseundsicherheit/saudiarabiensicherheit-202298',
    retrieved: ABRUF,
    note: {
      de: 'Stand 31.10.2026, unverändert gültig seit 29.10.2026.',
      en: 'As of 31 October 2026, unchanged since 29 October 2026.',
    },
  },
  aaIsrael: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Israel: Reise- und Sicherheitshinweise',
      en: 'Israel: travel and safety information',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/israel-node/israelsicherheit-203814',
    retrieved: ABRUF,
    note: {
      de: 'Stand 31.10.2026, unverändert gültig seit 29.10.2026.',
      en: 'As of 31 October 2026, unchanged since 29 October 2026.',
    },
  },
  aaIrak: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Irak: Reise- und Sicherheitshinweise',
      en: 'Iraq: travel and safety information',
    },
    url: 'https://www.auswaertiges-amt.de/de/reiseundsicherheit/iraksicherheit-202738',
    retrieved: ABRUF,
    note: {
      de: 'Stand 31.10.2026, unverändert gültig seit 29.10.2026.',
      en: 'As of 31 October 2026, unchanged since 29 October 2026.',
    },
  },
  aaSpanien: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Spanien: Reise- und Sicherheitshinweise',
      en: 'Spain: travel and safety information',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/spanien-node/spaniensicherheit-210534',
    retrieved: ABRUF,
    note: {
      de: 'Stand 31.10.2026, unverändert gültig seit 31.10.2026.',
      en: 'As of 31 October 2026, unchanged since 31 October 2026.',
    },
  },
  aaFrankreich: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Frankreich: Reise- und Sicherheitshinweise',
      en: 'France: travel and safety information',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/frankreich-node/frankreichsicherheit-209524',
    retrieved: ABRUF,
    note: {
      de: 'Stand 31.10.2026, unverändert gültig seit 28.10.2026.',
      en: 'As of 31 October 2026, unchanged since 28 October 2026.',
    },
  },
  aaPortugal: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Portugal: Reise- und Sicherheitshinweise',
      en: 'Portugal: travel and safety information',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/portugal-node/portugalsicherheit-210900',
    retrieved: ABRUF,
    note: {
      de: 'Stand 31.10.2026, unverändert gültig seit 29.07.2026.',
      en: 'As of 31 October 2026, unchanged since 29 July 2026.',
    },
  },
  aaItalien: {
    publisher: 'Auswärtiges Amt',
    title: {
      de: 'Italien: Reise- und Sicherheitshinweise',
      en: 'Italy: travel and safety information',
    },
    url: 'https://www.auswaertiges-amt.de/de/service/laender/italien-node/italiensicherheit-211322',
    retrieved: ABRUF,
    note: {
      de: 'Stand 31.10.2026, unverändert gültig seit 23.10.2026.',
      en: 'As of 31 October 2026, unchanged since 23 October 2026.',
    },
  },
  mohPilgrims: {
    publisher: 'Gesundheitsministerium Saudi-Arabien',
    title: {
      de: 'Pilgrims Health: Übersicht der Gesundheitsvorgaben',
      en: 'Pilgrims Health: overview of health requirements',
    },
    url: 'https://www.moh.gov.sa/en/HealthAwareness/Pilgrims-Health/Pages/default.aspx',
    retrieved: ABRUF,
    note: {
      de: 'Am Abruftag nur Texte für 1447H (2026) aufgeführt, für 1448H (2027) noch keiner.',
      en: 'On the retrieval date only texts for 1447H (2026) were listed, none yet for 1448H (2027).',
    },
  },
  mohHajj: {
    publisher: 'Gesundheitsministerium Saudi-Arabien',
    title: {
      de: 'Health Requirements and Recommendations for Travelers to Saudi Arabia for Hajj, 1447H (2026)',
      en: 'Health Requirements and Recommendations for Travelers to Saudi Arabia for Hajj, 1447H (2026)',
    },
    url: 'https://www.moh.gov.sa/HealthAwareness/Pilgrims-Health/Documents/Hajj-Health-Requirements-English-language.pdf',
    retrieved: ABRUF,
    note: {
      de: 'Zuletzt veröffentlichter Text. Die Vorgaben für 1448H (2027) stehen aus.',
      en: 'Most recently published text. The requirements for 1448H (2027) are still pending.',
    },
  },
  mohUmrah: {
    publisher: 'Gesundheitsministerium Saudi-Arabien',
    title: {
      de: 'Health Requirements and Recommendations for Travelers to Saudi Arabia for Umrah, 1447H (2026)',
      en: 'Health Requirements and Recommendations for Travelers to Saudi Arabia for Umrah, 1447H (2026)',
    },
    url: 'https://www.moh.gov.sa/en/HealthAwareness/Pilgrims-Health/Documents/Health-Regulations-Umrah-EN.pdf',
    retrieved: ABRUF,
    note: {
      de: 'Zuletzt veröffentlichter Text. Die Vorgaben für 1448H (2027) stehen aus.',
      en: 'Most recently published text. The requirements for 1448H (2027) are still pending.',
    },
  },
  cdcHajjUmrah: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: {
      de: 'CDC Yellow Book: Saudi Arabia, Hajj and Umrah Pilgrimages',
      en: 'CDC Yellow Book: Saudi Arabia, Hajj and Umrah Pilgrimages',
    },
    url: 'https://www.cdc.gov/yellow-book/hcp/africa-middle-east/saudi-arabia-hajj-and-umrah-pilgrimages.html',
    retrieved: ABRUF,
    note: {
      de: 'Stand 02.04.2026. Genutzt für Hinweise zu Hitze, Wegen, Füßen und Atemwegen, nicht für die Einreisevorgaben.',
      en: 'As of 2 April 2026. Used for advice on heat, walking, feet and the airways, not for the entry rules.',
    },
  },
} satisfies Record<string, Source>;
