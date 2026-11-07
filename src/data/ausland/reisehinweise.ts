/**
 * Neutraler Verweis auf die Reise- und Sicherheitshinweise des Auswärtigen Amts.
 * Wir geben dazu keine eigene Einschätzung und zitieren keine Warnungen; die Checklisten
 * nennen nur, dass man die Hinweise für das eigene Reiseland lesen sollte.
 */
import type { RelatedLink } from '../types';

export const linkAaReisehinweise: RelatedLink = {
  label: {
    de: 'Auswärtiges Amt: Reise- und Sicherheitshinweise',
    en: 'Federal Foreign Office: travel and safety advice (in German)',
  },
  path: 'https://www.auswaertiges-amt.de/de/reiseundsicherheit/reise-und-sicherheitshinweise',
};
