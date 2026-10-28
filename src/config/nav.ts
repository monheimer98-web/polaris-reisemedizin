/**
 * Informationsarchitektur / Navigation.
 *
 * `path` ist immer der logische (deutsche) Pfad ohne Locale-Präfix.
 * Die lokalisierte URL wird über getLocalizedPath(path, lang) gebildet;
 * englische Seiten liegen unter /en/<gleicher-slug>.
 * `labelKey` verweist auf einen Schlüssel im i18n-Wörterbuch (src/i18n/ui.ts);
 * `label` (zweisprachig) hat Vorrang und wird für datengetriebene Einträge
 * genutzt (Angebote „Prävention & Lebensstil").
 */
import type { Localized } from '../data/types';
import { PREVENTION_PATH, preventionOffers, preventionPath } from '../data/praevention';

export interface NavItem {
  labelKey: string;
  label?: Localized;
  path: string;
  children?: NavItem[];
  /** Eigener Bereich mit eigener Farbwelt (Salbei). */
  area?: 'praevention';
}

/** Reise-Leistungen (Gruppe „Leistungen" im Bereich Reisemedizin, Footer-Spalte). */
export const travelServicesNav: NavItem = {
  labelKey: 'nav.services',
  path: '/leistungen',
  children: [
    { labelKey: 'nav.consultation', path: '/leistungen/reiseberatung' },
    { labelKey: 'nav.travelVaccinations', path: '/leistungen/reiseimpfungen' },
    { labelKey: 'nav.yellowFeverVaccination', path: '/leistungen/gelbfieberimpfung' },
    { labelKey: 'nav.fsmeVaccination', path: '/leistungen/fsme-impfung' },
    { labelKey: 'nav.malaria', path: '/leistungen/malaria' },
    { labelKey: 'nav.altitude', path: '/leistungen/hoehenmedizin' },
  ],
};

export const destinationsNav: NavItem = {
  labelKey: 'nav.destinations',
  path: '/reiseziele',
  children: [
    { labelKey: 'nav.destAfrica', path: '/reiseziele/afrika' },
    { labelKey: 'nav.destAsia', path: '/reiseziele/asien' },
    { labelKey: 'nav.destLatinAmerica', path: '/reiseziele/lateinamerika' },
    { labelKey: 'nav.destMiddleEast', path: '/reiseziele/naher-osten-nordafrika' },
    { labelKey: 'nav.destEurope', path: '/reiseziele/europa' },
    { labelKey: 'nav.destOceania', path: '/reiseziele/ozeanien' },
  ],
};

export const diseasesNav: NavItem = {
  labelKey: 'nav.diseases',
  path: '/krankheitsbilder',
  children: [
    { labelKey: 'nav.yellowFever', path: '/krankheitsbilder/gelbfieber' },
    { labelKey: 'nav.dengue', path: '/krankheitsbilder/dengue' },
    { labelKey: 'nav.chikungunya', path: '/krankheitsbilder/chikungunya' },
    { labelKey: 'nav.fsme', path: '/krankheitsbilder/fsme' },
    { labelKey: 'nav.hepatitisA', path: '/krankheitsbilder/hepatitis-a' },
    { labelKey: 'nav.hepatitisB', path: '/krankheitsbilder/hepatitis-b' },
    { labelKey: 'nav.typhus', path: '/krankheitsbilder/typhus' },
    { labelKey: 'nav.rabies', path: '/krankheitsbilder/tollwut' },
    { labelKey: 'nav.japaneseEncephalitis', path: '/krankheitsbilder/japanische-enzephalitis' },
    { labelKey: 'nav.meningococcal', path: '/krankheitsbilder/meningokokken' },
    { labelKey: 'nav.cholera', path: '/krankheitsbilder/cholera' },
    { labelKey: 'nav.riskAreas', path: '/risikogebiete' },
  ],
};

/**
 * Hauptnavigation: zwei gleichrangige Bereiche der einen Praxis
 * („Reisemedizin" mit Leistungen, Reisezielen und Krankheitsbildern als
 * Gruppen; „Prävention & Lebensstil" mit eigener Farbwelt), dazu Firmen,
 * Kosten und Praxis. Gruppen (Einträge mit eigenen `children`) erscheinen am
 * Desktop als Spalten, mobil als Zwischenüberschriften.
 */
export const primaryNav: NavItem[] = [
  {
    labelKey: 'nav.travelMedicine',
    path: '/leistungen',
    children: [travelServicesNav, destinationsNav, diseasesNav],
  },
  {
    labelKey: 'nav.preventionArea',
    path: PREVENTION_PATH,
    area: 'praevention',
    children: [
      { labelKey: 'nav.preventionArea', label: { de: 'Übersicht', en: 'Overview' }, path: PREVENTION_PATH },
      ...preventionOffers.map((o) => ({ labelKey: 'nav.preventionArea', label: o.shortName, path: preventionPath(o.slug) })),
    ],
  },
  { labelKey: 'nav.business', path: '/unternehmen' },
  { labelKey: 'nav.costs', path: '/kosten' },
  {
    labelKey: 'nav.team',
    path: '/team',
    children: [
      { labelKey: 'nav.team', label: { de: 'Team', en: 'Team' }, path: '/team' },
      { labelKey: 'nav.process', path: '/ablauf' },
      { labelKey: 'nav.faq', path: '/faq' },
      { labelKey: 'nav.contact', path: '/kontakt' },
    ],
  },
];

/** Alle Pfade eines Eintrags einschließlich Gruppen (für „aktiv"-Markierung). */
export function navPaths(item: NavItem): string[] {
  return [item.path, ...(item.children ?? []).flatMap(navPaths)];
}

/**
 * Footer-Spalte „Information" — kuratierte Sekundärlinks (inkl. FAQ, das bewusst
 * nicht in der Hauptnavigation steht, um die Kopfzeile schlank zu halten).
 * Risikogebiete erscheint im Footer bereits über die Krankheitsbilder-Kinder.
 */
export const footerInfoNav: NavItem[] = [
  { labelKey: 'nav.process', path: '/ablauf' },
  { labelKey: 'nav.destinations', path: '/reiseziele' },
  { labelKey: 'nav.preventionArea', path: PREVENTION_PATH },
  { labelKey: 'nav.guides', path: '/ratgeber' },
  { labelKey: 'nav.travelTips', path: '/reisetipps' },
  { labelKey: 'nav.travelKit', path: '/reiseapotheke' },
  { labelKey: 'nav.costs', path: '/kosten' },
  { labelKey: 'nav.business', path: '/unternehmen' },
  { labelKey: 'nav.team', path: '/team' },
  { labelKey: 'nav.faq', path: '/faq' },
];

/** Pfade für den Footer (Rechtliches). */
export const legalNav: NavItem[] = [
  { labelKey: 'nav.imprint', path: '/impressum' },
  { labelKey: 'nav.privacy', path: '/datenschutz' },
];

/** Buchungs-Route (CTA). */
export const BOOKING_PATH = '/termin';
