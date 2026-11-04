/**
 * Gemeinsame Bausteine der Länderseiten (Callouts, Links, Abschnitt „Reise planen").
 * Ausgelagert, damit neue Länder in eigenen Dateien gepflegt werden können.
 */
import type { ContentSection, Localized, SectionCallout } from '../types';

export const REVIEWED = new Date('2026-10-18');

export const entryRulesCallout: SectionCallout = {
  variant: 'important',
  title: { de: 'Einreisevorschriften prüfen', en: 'Check the entry requirements' },
  text: {
    de: 'Maßgeblich sind die Einreisevorschriften des Ziellandes. Prüfen Sie vor der Abreise die aktuellen Hinweise des Auswärtigen Amts – besonders bei Kombinationsreisen und langen Umstiegen.',
    en: 'The entry requirements of the destination country apply. Check the current advice of the German Federal Foreign Office before departure – especially for combined trips and long layovers.',
  },
};

export const feverCallout: SectionCallout = {
  variant: 'caution',
  title: { de: 'Fieber nach der Reise', en: 'Fever after the trip' },
  text: {
    de: 'Fieber während einer Reise in ein Malariagebiet oder bis zu mehreren Monaten danach muss sofort ärztlich abgeklärt werden – auch wenn Sie vorbeugend Tabletten eingenommen haben. Weisen Sie dabei auf Ihre Reise hin.',
    en: 'Fever during a trip to a malaria area or up to several months afterwards must be checked by a doctor immediately – even if you took preventive tablets. Mention your trip.',
  },
};

export const malariaLink = { label: { de: 'Malaria-Beratung', en: 'Malaria advice' }, path: '/leistungen/malaria' };
export const yellowFeverLink = { label: { de: 'Gelbfieberimpfung', en: 'Yellow fever vaccination' }, path: '/leistungen/gelbfieberimpfung' };
export const rabiesLink = { label: { de: 'Tollwut', en: 'Rabies' }, path: '/krankheitsbilder/tollwut' };
export const jeLink = { label: { de: 'Japanische Enzephalitis', en: 'Japanese encephalitis' }, path: '/krankheitsbilder/japanische-enzephalitis' };
export const typhoidLink = { label: { de: 'Typhus', en: 'Typhoid' }, path: '/krankheitsbilder/typhus' };
export const altitudeLink = { label: { de: 'Höhenmedizin', en: 'Altitude medicine' }, path: '/leistungen/hoehenmedizin' };

/** Gemeinsamer Abschlussabschnitt „Reise planen". */
export function planningSection(extra?: Localized): ContentSection {
  return {
    id: 'planung',
    heading: { de: 'Reise planen', en: 'Planning your trip' },
    body: {
      de: [
        'In unserer reisemedizinischen Sprechstunde in Langenfeld prüfen wir Ihren Impfpass und stellen einen Impf- und Vorsorgeplan für Ihre gesamte Route zusammen – idealerweise sechs bis acht Wochen vor der Abreise. Auch kurzfristig ist noch einiges möglich.',
        ...(extra ? [extra.de] : []),
      ],
      en: [
        'In our travel medicine clinic in Langenfeld we review your vaccination record and draw up a vaccination and prevention plan for your entire route – ideally six to eight weeks before departure. Even at short notice a lot is still possible.',
        ...(extra ? [extra.en] : []),
      ],
    },
    links: [
      { label: { de: 'Wann vor der Reise impfen?', en: 'When to get vaccinated?' }, path: '/ratgeber/wann-vor-der-reise-impfen' },
      { label: { de: 'Kosten & Erstattung', en: 'Costs & reimbursement' }, path: '/ratgeber/reiseimpfung-kosten-krankenkasse' },
      { label: { de: 'Termin buchen', en: 'Book an appointment' }, path: '/termin' },
    ],
  };
}

