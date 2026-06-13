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

/**
 * Konfigurierter Basis-Pfad (aus `astro.config` → Vite `BASE_URL`), z. B. „/"
 * bei Root-/Custom-Domain-Hosting oder „/polaris-reisemedizin/" bei einem
 * GitHub-Pages-Projekt-Deploy. `BASE_PREFIX` ist die Variante ohne Slash am
 * Ende („" bzw. „/polaris-reisemedizin"), die sich verlustfrei voranstellen
 * lässt. Bei Root-Hosting ist sie leer → alle Helfer verhalten sich wie zuvor.
 */
const BASE_PREFIX = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Einen wurzel-absoluten Pfad (Asset oder Route) mit dem Basis-Pfad versehen,
 * damit er auch unter einem Unterpfad-Deploy korrekt auflöst.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return path === '/' ? `${BASE_PREFIX}/` : `${BASE_PREFIX}${path}`;
}

/** Logischer Pfad ohne Basis- und Locale-Präfix, ohne abschließenden Slash. */
export function getLogicalPath(pathname: string): string {
  // Basis-Pfad entfernen (zur Laufzeit enthält `Astro.url.pathname` ihn).
  let p = pathname;
  if (BASE_PREFIX && (p === BASE_PREFIX || p.startsWith(`${BASE_PREFIX}/`))) {
    p = p.slice(BASE_PREFIX.length) || '/';
  }
  const stripped = p.replace(/^\/en(?=\/|$)/, '');
  const noTrailing = stripped.replace(/\/+$/, '');
  return noTrailing === '' ? '/' : noTrailing;
}

/** Logischen Pfad in die Ziel-Locale übersetzen (inkl. Basis-Pfad). */
export function getLocalizedPath(path: string, lang: Locale): string {
  const logical = getLogicalPath(path);
  const localized = lang === DEFAULT_LOCALE ? logical : logical === '/' ? '/en' : `/en${logical}`;
  return withBase(localized);
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
