/**
 * Strukturierte Daten (JSON-LD, schema.org) der Themenwelt Prävention.
 *
 * Ziel (Nicki, 20.11.2026): Wer bei Google oder einer KI nach Gesundheitscheck,
 * Blutwerten, Laboruntersuchung oder Haarausfall sucht, soll Polaris finden,
 * nicht nur bei Reiseimpfungen. Deshalb beschreibt jede Leistung sich hier selbst:
 * Art (Untersuchung, Test, Behandlung), Name, ein Satz und die Adresse ihrer Seite.
 * Dieselben Knoten nutzen der Praxis-Knoten (`availableService`), die Übersicht
 * /praevention (Liste der Angebote) und jede Angebotsseite (`about`).
 *
 * Nur Typen und Felder, die schema.org kennt; keine Preise (die Seiten nennen
 * Richtwerte mit „ca.“, ein fester Preis im Code wäre eine falsche Angabe).
 */
import type { Locale } from '../../config/site';
import { preventionOffers, preventionPath } from './index';
import { haarePrp } from './angebote/haare';

type Knoten = Record<string, unknown>;

/** Welche Art von Leistung ein Angebot ist (schema.org-Typ). */
const ART: Record<string, 'MedicalProcedure' | 'MedicalTest'> = {
  gesundheitscheck: 'MedicalProcedure',
  'laborwerte-check': 'MedicalTest',
  'gewicht-und-stoffwechsel': 'MedicalProcedure',
  haare: 'MedicalProcedure',
};

export const PRP_PFAD = '/praevention/haare/prp';

/** Ohne Haarsprechstunde gibt es auch keine PRP-Seite. */
export const hatPrp = preventionOffers.some((o) => o.slug === 'haare');

/**
 * Alle Präventionsleistungen als schema.org-Knoten, in der Reihenfolge der
 * Website. `zuUrl` macht aus einem Pfad die volle Adresse in der Seitensprache.
 */
export function praeventionLeistungen(lang: Locale, zuUrl: (pfad: string) => string): Knoten[] {
  const angebote: Knoten[] = preventionOffers.map((o) => {
    const art = ART[o.slug] ?? 'MedicalProcedure';
    return {
      '@type': art,
      name: o.page.meta.title[lang],
      description: o.teaser[lang],
      url: zuUrl(preventionPath(o.slug)),
      ...(art === 'MedicalProcedure' ? { procedureType: 'https://schema.org/NoninvasiveProcedure' } : {}),
    };
  });
  const prp: Knoten[] = hatPrp
    ? [
        {
          '@type': 'MedicalTherapy',
          name: haarePrp.meta.title[lang],
          description:
            lang === 'de'
              ? 'Behandlung mit plättchenreichem Plasma aus dem eigenen Blut bei erblich bedingtem Haarausfall; der erste Termin beginnt mit einer Haarsprechstunde.'
              : 'Treatment with platelet-rich plasma from your own blood for inherited hair loss; the first appointment begins with a hair consultation.',
          url: zuUrl(PRP_PFAD),
        },
      ]
    : [];
  const tests: Knoten[] = [
    {
      '@type': 'MedicalTest',
      name: lang === 'de' ? 'Vitamin-D-Test' : 'Vitamin D test',
      description:
        lang === 'de'
          ? 'Bestimmung des Vitamin-D-Spiegels im Blut mit ärztlicher Einordnung.'
          : 'Measurement of the vitamin D level in the blood with a medical assessment.',
      url: zuUrl('/ratgeber/vitamin-d-test-beim-arzt'),
    },
    {
      '@type': 'MedicalTest',
      name: lang === 'de' ? 'Großes Blutbild' : 'Full blood count',
      description:
        lang === 'de'
          ? 'Großes Blutbild als Selbstzahlerleistung, mit Besprechung der Werte.'
          : 'Full blood count as a self-pay service, with a discussion of the results.',
      url: zuUrl('/ratgeber/grosses-blutbild-kosten'),
    },
  ];
  return [...angebote, ...prp, ...tests];
}

/** Hauptthema einer Angebotsseite (`about` der MedicalWebPage). */
export function praeventionThema(slug: string, lang: Locale, zuUrl: (pfad: string) => string): Knoten | undefined {
  return praeventionLeistungen(lang, zuUrl).find((k) => k.url === zuUrl(slug === 'prp' ? PRP_PFAD : preventionPath(slug)));
}

/** Zusatz für die PRP-Seite: Gegenanzeigen aus dem Seitentext. */
export function prpGegenanzeigen(lang: Locale): string[] {
  const abschnitt = haarePrp.sections.find((s) => s.id === 'nicht-passend');
  return (abschnitt?.list?.[lang] ?? []).map((t) => t.replace(/[,.]$/, ''));
}

/** Themen, zu denen die Praxis Auskunft gibt (`knowsAbout` am Praxis-Knoten). */
export function praxisThemen(lang: Locale): string[] {
  return lang === 'de'
    ? [
        'Prävention',
        'Gesundheitscheck',
        'Blutwerte',
        'Laboruntersuchung',
        'Vitamin D',
        'Ferritin',
        'Blutbild',
        'Gewicht und Stoffwechsel',
        'Haarausfall',
        ...(hatPrp ? ['PRP bei Haarausfall'] : []),
        'Reisemedizin',
        'Reiseimpfungen',
        'Gelbfieberimpfung',
        'Malariaprophylaxe',
        'Impfungen für Erwachsene',
      ]
    : [
        'Prevention',
        'Health check-up',
        'Blood tests',
        'Laboratory tests',
        'Vitamin D',
        'Ferritin',
        'Blood count',
        'Weight and metabolism',
        'Hair loss',
        ...(hatPrp ? ['PRP for hair loss'] : []),
        'Travel medicine',
        'Travel vaccinations',
        'Yellow fever vaccination',
        'Malaria prevention',
        'Adult vaccinations',
      ];
}
