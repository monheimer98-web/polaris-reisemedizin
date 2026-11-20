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
import { grossesBlutbildGuide, grossesBlutbildSummary } from './grosses-blutbild-kosten';
import { vitaminTestGuide, vitaminTestSummary } from './vitamin-d-test-beim-arzt';
import { blutwerteGuide, blutwerteSummary } from './blutwerte-erklaert';
import { haarausfallUrsachenGuide, haarausfallUrsachenSummary } from './haarausfall-ursachen';
import { haarausfallArztGuide, haarausfallArztSummary } from './haarausfall-welcher-arzt';
import { preventionOffers } from '../praevention/index';

/** Die Haarausfall-Ratgeber verweisen auf die Haarsprechstunde; ohne sie gibt es sie nicht. */
const hatHaare = preventionOffers.some((o) => o.slug === 'haare');

export interface Guide {
  /** URL-Slug unter /ratgeber/ (DE und EN gleich). */
  slug: string;
  summary: Localized;
  page: ClinicalPage;
  /** Ratgeber des Bereichs „Prävention": Salbei, Bereichsnavigation, eigene Terminseite. */
  area?: 'praevention';
  /** Terminart-ID, die der Buchungsknopf vorbelegt (`?art=`). */
  bookingType?: string;
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
  {
    slug: 'grosses-blutbild-kosten',
    summary: grossesBlutbildSummary,
    page: grossesBlutbildGuide,
    area: 'praevention',
    bookingType: 'pv-e2',
  },
  {
    slug: 'vitamin-d-test-beim-arzt',
    summary: vitaminTestSummary,
    page: vitaminTestGuide,
    area: 'praevention',
    bookingType: 'pv-e2',
  },
  {
    slug: 'blutwerte-erklaert',
    summary: blutwerteSummary,
    page: blutwerteGuide,
    area: 'praevention',
    bookingType: 'pv-e2',
  },
  ...(hatHaare
    ? [
        {
          slug: 'haarausfall-ursachen',
          summary: haarausfallUrsachenSummary,
          page: haarausfallUrsachenGuide,
          area: 'praevention' as const,
          bookingType: 'pv-haare',
        },
        {
          slug: 'haarausfall-welcher-arzt',
          summary: haarausfallArztSummary,
          page: haarausfallArztGuide,
          area: 'praevention' as const,
          bookingType: 'pv-haare',
        },
      ]
    : []),
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
