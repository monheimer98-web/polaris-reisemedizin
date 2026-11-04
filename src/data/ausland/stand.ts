/** „Inhaltlich geprüft“-Datum aller Ausland-Seiten. Bei der ärztlichen Freigabe auf das Freigabedatum setzen. */
export const AUSLAND_GEPRUEFT = new Date('2026-10-31');

/**
 * Bieten wir Formular oder Bescheinigung, Zeugnis mit Untersuchung und die Bescheinigung für Medikamente an?
 * Ja: Die Praxis fällt unter § 19 UStG, auf der Rechnung steht keine Umsatzsteuer.
 * Zum Abschalten: Wert auf false setzen und neu bauen. Seiten, Verweise, Preiszeilen und Texte hängen allein hieran.
 */
export const NACHWEISE_IM_ANGEBOT = true;

/**
 * Wertgutschein: vorerst nicht im Angebot. Zum Einschalten auf true setzen und
 * src/pages/_gutschein.astro und src/pages/en/_gutschein.astro ohne Unterstrich benennen.
 */
export const GUTSCHEIN_IM_ANGEBOT = false;
