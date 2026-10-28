/**
 * Ratgeber-Bereich (/ratgeber): eigene Ratgeberseiten (ClinicalPage, dynamische
 * Route /ratgeber/[slug]) plus Verweise auf bestehende Ratgeber-Seiten.
 */
import type { ClinicalPage, Localized } from '../types';
import { kostenErstattungGuide } from './kosten-erstattung';
import { wannImpfenGuide } from './wann-impfen';
import { gelbfieberKostenGuide, gelbfieberKostenSummary } from './gelbfieber-kosten';
import { tollwutImpfungGuide, tollwutImpfungSummary } from './tollwut-impfung';
import { malariaRezeptGuide, malariaRezeptSummary } from './malaria-rezept';

export interface Guide {
  /** URL-Slug unter /ratgeber/ (DE und EN gleich). */
  slug: string;
  summary: Localized;
  page: ClinicalPage;
}

export const guides: Guide[] = [
  {
    slug: 'reiseimpfung-kosten-krankenkasse',
    summary: {
      de: 'Woraus sich die Kosten zusammensetzen, was Impfstoffe kosten und wann Kasse, Privatversicherung oder Arbeitgeber zahlen.',
      en: 'What the costs consist of, what vaccines cost and when insurers or employers pay.',
    },
    page: kostenErstattungGuide,
  },
  {
    slug: 'wann-vor-der-reise-impfen',
    summary: {
      de: 'Ideale Vorlaufzeit, Impfschemata im Überblick und was auch kurz vor der Abreise noch sinnvoll ist.',
      en: 'Ideal lead time, vaccination schedules at a glance and what still makes sense shortly before departure.',
    },
    page: wannImpfenGuide,
  },
  {
    slug: 'gelbfieberimpfung-kosten',
    summary: gelbfieberKostenSummary,
    page: gelbfieberKostenGuide,
  },
  {
    slug: 'tollwutimpfung-vor-der-reise',
    summary: tollwutImpfungSummary,
    page: tollwutImpfungGuide,
  },
  {
    slug: 'malaria-tabletten-rezept',
    summary: malariaRezeptSummary,
    page: malariaRezeptGuide,
  },
];

/** Bestehende Seiten, die thematisch in den Ratgeber gehören. */
export const weitereRatgeber: { title: Localized; summary: Localized; path: string }[] = [
  {
    title: { de: 'Reisetipps', en: 'Travel tips' },
    summary: { de: 'Mückenschutz, Essen und Trinken, Sonne und Hitze, Gesundheit nach der Rückkehr.', en: 'Mosquito protection, food and drink, sun and heat, health after your return.' },
    path: '/reisetipps',
  },
  {
    title: { de: 'Reiseapotheke', en: 'Travel health kit' },
    summary: { de: 'Was in die Reiseapotheke gehört – als Checkliste zum Ausdrucken.', en: 'What belongs in your travel health kit – as a printable checklist.' },
    path: '/reiseapotheke',
  },
  {
    title: { de: 'Risikogebiete', en: 'Risk areas' },
    summary: { de: 'Wo Gelbfieber und FSME vorkommen und welche Länder einen Impfnachweis verlangen.', en: 'Where yellow fever and TBE occur and which countries require proof of vaccination.' },
    path: '/risikogebiete',
  },
  {
    title: { de: 'Fragen & Antworten', en: 'FAQ' },
    summary: { de: 'Die häufigsten Fragen zu Beratung, Impfung, Kosten und Ablauf.', en: 'The most frequent questions about consultation, vaccination, costs and procedure.' },
    path: '/faq',
  },
];
