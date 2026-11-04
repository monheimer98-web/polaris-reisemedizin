/**
 * Karten des Bereichs Ausland auf der Startseite und der Leistungsübersicht.
 * Texte stehen im Wörterbuch (src/i18n/ui.ts); Formular-Karten nur mit NACHWEISE_IM_ANGEBOT.
 */
import type { UiKey } from '../../i18n/ui';
import { NACHWEISE_IM_ANGEBOT } from './stand';

interface StartKarte {
  title: string;
  text: string;
  path: string;
  variant: string;
}

const KARTEN: { titleKey: UiKey; textKey: UiKey; path: string; variant: string }[] = [
  { titleKey: 'home.abroadStayTitle', textKey: 'home.abroadStayText', path: '/ausland', variant: 'exchange' },
  { titleKey: 'home.abroadPilgrimTitle', textKey: 'home.abroadPilgrimText', path: '/ausland/pilgerreisen', variant: 'pilgrimage' },
  ...(NACHWEISE_IM_ANGEBOT
    ? [
      { titleKey: 'home.abroadCertTitle' as UiKey, textKey: 'home.abroadCertText' as UiKey, path: '/ausland/nachweise', variant: 'certificate' },
      { titleKey: 'home.abroadFlightTitle' as UiKey, textKey: 'home.abroadFlightText' as UiKey, path: '/ausland/flug-kreuzfahrt-attest', variant: 'flight' },
      ]
    : []),
];

/** Karten mit übersetzten Texten; Pfade ohne Locale-Präfix. */
export function auslandKartenStart(t: (key: UiKey) => string): StartKarte[] {
  return KARTEN.map((k) => ({ title: t(k.titleKey), text: t(k.textKey), path: k.path, variant: k.variant }));
}
