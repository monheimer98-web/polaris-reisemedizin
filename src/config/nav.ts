/**
 * Informationsarchitektur / Navigation.
 *
 * `path` ist immer der logische (deutsche) Pfad ohne Locale-Präfix.
 * Die lokalisierte URL wird über getLocalizedPath(path, lang) gebildet;
 * englische Seiten liegen unter /en/<gleicher-slug>.
 * `labelKey` verweist auf einen Schlüssel im i18n-Wörterbuch (src/i18n/ui.ts).
 */
import { GUTSCHEIN_IM_ANGEBOT, NACHWEISE_IM_ANGEBOT } from '../data/ausland/stand';

export interface NavItem {
  labelKey: string;
  path: string;
  children?: NavItem[];
  /**
   * Gliederung des Untermenüs unter kurzen Überschriften. Ist sie gesetzt, zeigt die Kopfzeile
   * die Gruppen (am Desktop nebeneinander); `children` bleibt die flache Liste der Leistungen
   * für die Fußzeile.
   */
  groups?: NavGroup[];
  /** Verweise in der Fußzeile des gegliederten Untermenüs (zum Beispiel der Ablauf). */
  more?: NavItem[];
}

export interface NavGroup {
  labelKey: string;
  items: NavItem[];
}

/**
 * Anlässe für einen Auslandsaufenthalt. Sie stehen im Menü „Ausland" und zusätzlich als letzte
 * Gruppe im Menü „Leistungen", damit dort sichtbar ist, dass die Praxis das anbietet.
 */
export const abroadOccasions: NavItem[] = [
  { labelKey: 'nav.abroadYear', path: '/ausland/auslandsjahr' },
  { labelKey: 'nav.abroadAuPair', path: '/ausland/au-pair' },
  { labelKey: 'nav.abroadWorkTravel', path: '/ausland/work-and-travel' },
  { labelKey: 'nav.abroadStudy', path: '/ausland/auslandssemester' },
];

/** Pilgerreisen: nur im Menü „Ausland" und als Verweis auf der Leistungsübersicht, nicht im Menü „Leistungen". */
export const abroadPilgrimage: NavItem = { labelKey: 'nav.abroadPilgrimage', path: '/ausland/pilgerreisen' };

/**
 * Menü „Leistungen": alles, was die Praxis anbietet, unter kurzen Überschriften.
 * Die Bescheinigungen liegen technisch unter /ausland, sind aber Leistungen und stehen deshalb hier;
 * diese Gruppe hängt an NACHWEISE_IM_ANGEBOT. Dahinter folgt im Menü die Gruppe mit den Anlässen.
 */
const serviceGroups: NavGroup[] = [
  {
    labelKey: 'nav.groupAdvice',
    items: [
      { labelKey: 'nav.consultation', path: '/leistungen/reiseberatung' },
      { labelKey: 'nav.malaria', path: '/leistungen/malaria' },
      { labelKey: 'nav.altitude', path: '/leistungen/hoehenmedizin' },
    ],
  },
  {
    labelKey: 'nav.groupVaccinations',
    items: [
      { labelKey: 'nav.travelVaccinations', path: '/leistungen/reiseimpfungen' },
      { labelKey: 'nav.yellowFeverVaccination', path: '/leistungen/gelbfieberimpfung' },
      { labelKey: 'nav.fsmeVaccination', path: '/leistungen/fsme-impfung' },
      { labelKey: 'nav.hpvVaccination', path: '/leistungen/hpv-impfung-erwachsene' },
      { labelKey: 'nav.shinglesVaccination', path: '/leistungen/guertelrose-impfung' },
    ],
  },
  ...(NACHWEISE_IM_ANGEBOT
    ? [
        {
          labelKey: 'nav.groupCertificates',
          items: [
            { labelKey: 'nav.certVaccination', path: '/ausland/nachweise' },
            { labelKey: 'nav.certVisa', path: '/ausland/gesundheitszeugnis-visum' },
            { labelKey: 'nav.certFlight', path: '/ausland/flug-kreuzfahrt-attest' },
          ],
        },
      ]
    : []),
];

export const primaryNav: NavItem[] = [
  {
    labelKey: 'nav.services',
    path: '/leistungen',
    groups: [...serviceGroups, { labelKey: 'nav.groupAbroad', items: abroadOccasions }],
    children: serviceGroups.flatMap((group) => group.items),
    more: [{ labelKey: 'nav.process', path: '/ablauf' }],
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
  {
    labelKey: 'nav.abroad',
    path: '/ausland',
    children: [
      ...abroadOccasions,
      abroadPilgrimage,
      ...(NACHWEISE_IM_ANGEBOT ? [{ labelKey: 'nav.abroadCertificates', path: '/ausland/nachweise' }] : []),
      ...(GUTSCHEIN_IM_ANGEBOT ? [{ labelKey: 'nav.voucher', path: '/gutschein' }] : []),
    ],
  },
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
  { labelKey: 'nav.abroad', path: '/ausland' },
  ...(GUTSCHEIN_IM_ANGEBOT ? [{ labelKey: 'nav.voucher', path: '/gutschein' }] : []),
  { labelKey: 'nav.destinations', path: '/reiseziele' },
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

/**
 * Adresse des Buchungsknopfs. Mit Terminart und fester Buchungs-URL geht es direkt in die
 * Buchung mit vorgewählter Terminart (ein Schritt weniger als über die Terminseite). Ohne
 * Terminart oder ohne feste URL (Vorschau-Builds) bleibt es bei der Terminseite.
 */
export function bookingHref(terminPfad: string, bookingType?: string, embedUrl = '', bereich?: 'praevention'): string {
  if (bookingType && embedUrl) {
    try {
      const bereichParam = bereich ? `bereich=${bereich}&` : '';
      return `${new URL(embedUrl).origin}/buchung?${bereichParam}art=${encodeURIComponent(bookingType)}`;
    } catch {
      // ungültige URL im Build: Terminseite nehmen
    }
  }
  return terminPfad + (bookingType ? `?art=${bookingType}` : '');
}
