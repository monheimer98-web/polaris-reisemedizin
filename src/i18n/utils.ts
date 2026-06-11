/**
 * i18n-Helfer. Deutsch ist Standard (unpräfixiert), Englisch unter /en/.
 * Englische Seiten nutzen denselben Slug wie Deutsch (nur /en-Präfix).
 */
import { ui, type UiKey } from './ui';
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../config/site';

/** Aktuelle Sprache aus der URL ableiten. */
export function getLangFromUrl(url: URL): Locale {
  const maybe = url.pathname.split('/')[1];
  return (LOCALES as string[]).includes(maybe) ? (maybe as Locale) : DEFAULT_LOCALE;
}

/** Übersetzungsfunktion mit Fallback auf die Standardsprache. */
export function useTranslations(lang: Locale) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[DEFAULT_LOCALE][key];
  };
}

/** Logischer Pfad ohne Locale-Präfix, ohne abschließenden Slash. */
export function getLogicalPath(pathname: string): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  const noTrailing = stripped.replace(/\/+$/, '');
  return noTrailing === '' ? '/' : noTrailing;
}

/** Logischen Pfad in die Ziel-Locale übersetzen. */
export function getLocalizedPath(path: string, lang: Locale): string {
  const logical = getLogicalPath(path);
  if (lang === DEFAULT_LOCALE) return logical;
  return logical === '/' ? '/en' : `/en${logical}`;
}

/** Alle Sprachvarianten eines Pfads (für hreflang & Sprachumschalter). */
export function getAlternateLanguages(pathname: string): { lang: Locale; path: string }[] {
  const logical = getLogicalPath(pathname);
  return LOCALES.map((lang) => ({ lang, path: getLocalizedPath(logical, lang) }));
}

/** BCP-47-Codes für hreflang/lang-Attribute. */
export const HREFLANG: Record<Locale, string> = { de: 'de-DE', en: 'en-US' };

/** „Stand"-Datum lokalisiert ausgeben. */
export function formatReviewDate(date: Date, lang: Locale): string {
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
