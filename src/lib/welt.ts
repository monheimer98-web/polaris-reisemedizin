/**
 * Zwei Themenwelten einer Praxis: „Reisepraxis" (Petrol) und „Prävention"
 * (Salbei). Die Welt ergibt sich aus dem Pfad (alles unter /praevention) oder
 * wird von der Seite gesetzt (z. B. Präventions-Ratgeber unter /ratgeber).
 * Feste, sprechende Pfade: Sie sind die Grundlage der Weiterleitungstabelle,
 * falls der Bereich später eine eigene Adresse bekommt.
 */
import { getLogicalPath } from '../i18n/utils';

export type Welt = 'reise' | 'praevention';

export const WELT_START: Record<Welt, string> = {
  reise: '/',
  praevention: '/praevention',
};

export function weltAusPfad(pathname: string): Welt {
  const logisch = getLogicalPath(pathname).replace(/\/+$/, '') || '/';
  return logisch === '/praevention' || logisch.startsWith('/praevention/') ? 'praevention' : 'reise';
}
