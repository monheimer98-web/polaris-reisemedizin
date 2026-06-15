/**
 * Informationsarchitektur / Navigation.
 *
 * `path` ist immer der logische (deutsche) Pfad ohne Locale-Präfix.
 * Die lokalisierte URL wird über getLocalizedPath(path, lang) gebildet;
 * englische Seiten liegen unter /en/<gleicher-slug>.
 * `labelKey` verweist auf einen Schlüssel im i18n-Wörterbuch (src/i18n/ui.ts).
 */

export interface NavItem {
  labelKey: string;
  path: string;
  children?: NavItem[];
}

export const primaryNav: NavItem[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  { labelKey: 'nav.process', path: '/ablauf' },
  { labelKey: 'nav.costs', path: '/kosten' },
  { labelKey: 'nav.business', path: '/unternehmen' },
  { labelKey: 'nav.team', path: '/team' },
  { labelKey: 'nav.contact', path: '/kontakt' },
];

/**
 * Footer-Spalte „Information" — kuratierte Sekundärlinks (inkl. FAQ, das bewusst
 * nicht in der Hauptnavigation steht, um die Kopfzeile schlank zu halten).
 * Risikogebiete erscheint im Footer bereits über die Krankheitsbilder-Kinder.
 */
export const footerInfoNav: NavItem[] = [
  { labelKey: 'nav.process', path: '/ablauf' },
  { labelKey: 'nav.destinations', path: '/reiseziele' },
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
