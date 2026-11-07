/** Sätze, die auf den Fachseiten unter /ausland wortgleich stehen müssen. */
import type { Localized } from '../types';

/** Grenze zu Untersuchungen, die ein Land zugelassenen Stellen vorbehält. */
export const VISA_GRENZE: Localized = {
  de: 'Verlangt ein Land eine Visa-Untersuchung durch zugelassene Stellen, dürfen wir sie nicht durchführen. Das kann auch befristete Visa betreffen.',
  en: 'If a country requires a visa medical examination by appointed doctors, we may not carry it out. This can also apply to temporary visas.',
};

/** Keine Zusage zur Anerkennung einer Bescheinigung. */
export const ANERKENNUNG: Localized = {
  de: 'Ob eine Stelle die Bescheinigung anerkennt, entscheidet diese Stelle.',
  en: 'Whether a body accepts the certificate is for that body to decide.',
};

/** Nur solange NACHWEISE_IM_ANGEBOT aus ist, und nur wo die Leserin sonst ein Angebot erwartet. */
export const KEINE_FORMULARE: Localized = {
  de: 'Formulare und Gesundheitszeugnisse stellen wir derzeit nicht aus.',
  en: 'We do not currently complete forms or health certificates.',
};

/** Buchungsknopf der Pilgerseiten; führt in die allgemeine Reiseberatung, ohne Anlass im Link. */
export const PILGER_BUCHEN: Localized = {
  de: 'Reiseberatung für Ihre Pilgerreise buchen',
  en: 'Book a travel consultation for your pilgrimage',
};

/** Hinweis ohne Beträge; Richtwerte stehen nur auf /kosten. */
export const KOSTEN_HINWEIS: Localized = {
  de: 'Der Betrag hängt vom Aufwand ab. Richtwerte finden Sie auf unserer Kostenseite.',
  en: 'The amount depends on the work involved. You will find guide prices on our fees page.',
};
