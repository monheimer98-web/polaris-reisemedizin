/**
 * Kompakte „Steckbrief"-Kernfakten je Krankheitsbild (DE/EN) für die
 * Schnellübersicht oben auf der jeweiligen Seite. Bewusst knapp, scannbar und
 * konsistent mit dem Fließtext der Krankheitsbild-Module; sachlich und
 * HWG-konform (keine Heilversprechen, keine individuelle Beratung).
 *
 * Gekeyt über den Seiten-Slug (= letztes Pfadsegment von
 * /krankheitsbilder/<slug>); `ContentLayout` lädt den passenden Eintrag
 * automatisch, ohne dass die einzelnen Seiten angepasst werden müssen.
 */
import type { Localized } from './types';

export interface DiseaseFacts {
  /** Erreger. */
  pathogen: Localized;
  /** Übertragungsweg. */
  transmission: Localized;
  /** Verbreitung / Regionen. */
  regions: Localized;
  /** Reiseimpfung (verfügbar/Typ, knapp). */
  vaccine: Localized;
  /** Kurzer Schlüsselhinweis (Therapie/Schutz/Besonderheit). */
  note: Localized;
}

export const diseaseFacts: Record<string, DiseaseFacts> = {
  gelbfieber: {
    pathogen: { de: 'Gelbfieber-Virus (Flavivirus)', en: 'Yellow fever virus (flavivirus)' },
    transmission: { de: 'Stechmücken (Aedes, Haemagogus)', en: 'Mosquitoes (Aedes, Haemagogus)' },
    regions: {
      de: 'Subsahara-Afrika und tropisches Südamerika (nicht Asien)',
      en: 'Sub-Saharan Africa and tropical South America (not Asia)',
    },
    vaccine: { de: 'Ja – Lebendimpfstoff (Stamaril®), in der Regel eine Dosis', en: 'Yes – live vaccine (Stamaril®), usually a single dose' },
    note: {
      de: 'Keine ursächliche Therapie; für viele Länder Pflichtimpfung, Nachweis (ICVP) ab Tag 10',
      en: 'No causal therapy; required for entry to many countries, proof (ICVP) valid from day 10',
    },
  },
  dengue: {
    pathogen: { de: 'Dengue-Virus (Flavivirus, vier Typen)', en: 'Dengue virus (flavivirus, four types)' },
    transmission: { de: 'Tagaktive Aedes-Mücken', en: 'Day-active Aedes mosquitoes' },
    regions: { de: 'Tropen und Subtropen weltweit', en: 'Tropics and subtropics worldwide' },
    vaccine: {
      de: 'Ja – Lebendimpfstoff (Qdenga®); nach individueller Indikation',
      en: 'Yes – live vaccine (Qdenga®); based on individual indication',
    },
    note: {
      de: 'Keine ursächliche Therapie; tagsüber konsequenter Mückenschutz',
      en: 'No causal therapy; consistent daytime mosquito protection',
    },
  },
  chikungunya: {
    pathogen: { de: 'Chikungunya-Virus (Alphavirus)', en: 'Chikungunya virus (alphavirus)' },
    transmission: { de: 'Tagaktive Aedes-Mücken', en: 'Day-active Aedes mosquitoes' },
    regions: { de: 'Tropen und Subtropen (Afrika, Asien, Amerika)', en: 'Tropics and subtropics (Africa, Asia, the Americas)' },
    vaccine: {
      de: 'Ja – Lebendimpfstoff (Ixchiq®) oder Totimpfstoff (Vimkunya®); nach Indikation',
      en: 'Yes – live vaccine (Ixchiq®) or inactivated vaccine (Vimkunya®); based on indication',
    },
    note: {
      de: 'Häufig langwierige Gelenkbeschwerden; keine ursächliche Therapie',
      en: 'Often prolonged joint symptoms; no causal therapy',
    },
  },
  fsme: {
    pathogen: { de: 'FSME-Virus (Flavivirus)', en: 'TBE virus (flavivirus)' },
    transmission: { de: 'Zeckenstich (Ixodes ricinus)', en: 'Tick bite (Ixodes ricinus)' },
    regions: {
      de: 'Risikogebiete in Europa und Asien, u. a. Süddeutschland und Österreich',
      en: 'Risk areas across Europe and Asia, incl. southern Germany and Austria',
    },
    vaccine: {
      de: 'Ja – Totimpfstoff; Grundimmunisierung mit drei Dosen',
      en: 'Yes – inactivated vaccine; primary course of three doses',
    },
    note: {
      de: 'Keine ursächliche Therapie; ergänzend Schutz vor Zeckenstichen',
      en: 'No causal therapy; additionally protect against tick bites',
    },
  },
  'hepatitis-a': {
    pathogen: { de: 'Hepatitis-A-Virus (Picornavirus)', en: 'Hepatitis A virus (picornavirus)' },
    transmission: { de: 'Fäkal-oral über Wasser und Lebensmittel', en: 'Faecal-oral via water and food' },
    regions: {
      de: 'Weltweit, vor allem Länder mit niedrigerem Hygienestandard',
      en: 'Worldwide, especially countries with lower hygiene standards',
    },
    vaccine: { de: 'Ja – Totimpfstoff; zwei Dosen, langjähriger Schutz', en: 'Yes – inactivated vaccine; two doses, long-lasting protection' },
    note: {
      de: 'Meist selbstlimitierend; gut durch Impfung vermeidbar',
      en: 'Usually self-limiting; well preventable by vaccination',
    },
  },
  'hepatitis-b': {
    pathogen: { de: 'Hepatitis-B-Virus', en: 'Hepatitis B virus' },
    transmission: { de: 'Blut und Körperflüssigkeiten', en: 'Blood and body fluids' },
    regions: { de: 'Weltweit verbreitet', en: 'Distributed worldwide' },
    vaccine: { de: 'Ja – Totimpfstoff; Grundimmunisierung mit drei Dosen', en: 'Yes – inactivated vaccine; primary course of three doses' },
    note: { de: 'Kann chronisch verlaufen; Impfschutz langfristig', en: 'Can become chronic; vaccination provides long-term protection' },
  },
  typhus: {
    pathogen: { de: 'Salmonella Typhi (Bakterium)', en: 'Salmonella Typhi (bacterium)' },
    transmission: { de: 'Fäkal-oral über Wasser und Lebensmittel', en: 'Faecal-oral via water and food' },
    regions: { de: 'Südasien, Afrika und Lateinamerika', en: 'South Asia, Africa and Latin America' },
    vaccine: {
      de: 'Ja – Schluckimpfung oder Totimpfstoff (Injektion)',
      en: 'Yes – oral vaccine or inactivated vaccine (injection)',
    },
    note: {
      de: 'Antibiotisch behandelbar; zunehmende Resistenzen beachten',
      en: 'Treatable with antibiotics; note increasing resistance',
    },
  },
  tollwut: {
    pathogen: { de: 'Rabiesvirus (Lyssavirus)', en: 'Rabies virus (lyssavirus)' },
    transmission: { de: 'Speichel infizierter Tiere (Biss, Kratzer)', en: 'Saliva of infected animals (bite, scratch)' },
    regions: { de: 'Asien, Afrika und Lateinamerika', en: 'Asia, Africa and Latin America' },
    vaccine: {
      de: 'Ja – Totimpfstoff; vorsorgliche Impfung vor der Reise möglich',
      en: 'Yes – inactivated vaccine; pre-exposure vaccination possible before travel',
    },
    note: {
      de: 'Nach Ausbruch nahezu immer tödlich – nach Kontakt sofort handeln',
      en: 'Almost always fatal once symptoms appear – act immediately after exposure',
    },
  },
  'japanische-enzephalitis': {
    pathogen: { de: 'JE-Virus (Flavivirus)', en: 'JE virus (flavivirus)' },
    transmission: { de: 'Nachtaktive Culex-Mücken', en: 'Night-active Culex mosquitoes' },
    regions: { de: 'Ländliches Süd- und Südostasien, Westpazifik', en: 'Rural South and Southeast Asia, western Pacific' },
    vaccine: { de: 'Ja – Totimpfstoff; zwei Dosen', en: 'Yes – inactivated vaccine; two doses' },
    note: {
      de: 'Selten, aber schwer verlaufend; keine ursächliche Therapie',
      en: 'Rare but can be severe; no causal therapy',
    },
  },
  meningokokken: {
    pathogen: { de: 'Neisseria meningitidis (Bakterium)', en: 'Neisseria meningitidis (bacterium)' },
    transmission: { de: 'Tröpfcheninfektion', en: 'Droplet infection' },
    regions: {
      de: 'Weltweit; „Meningitisgürtel" in Subsahara-Afrika',
      en: 'Worldwide; “meningitis belt” in sub-Saharan Africa',
    },
    vaccine: {
      de: 'Ja – Konjugatimpfstoff (ACWY) und Protein-Impfstoff (B)',
      en: 'Yes – conjugate vaccine (ACWY) and protein-based vaccine (B)',
    },
    note: {
      de: 'Rasch lebensbedrohlich; Nachweispflicht u. a. für Hadsch/Umra',
      en: 'Can rapidly become life-threatening; proof required e.g. for Hajj/Umrah',
    },
  },
  cholera: {
    pathogen: { de: 'Vibrio cholerae (Bakterium)', en: 'Vibrio cholerae (bacterium)' },
    transmission: { de: 'Verunreinigtes Wasser und Lebensmittel', en: 'Contaminated water and food' },
    regions: {
      de: 'Regionen mit unsicherer Wasserversorgung und bei Ausbrüchen',
      en: 'Regions with unsafe water supply and during outbreaks',
    },
    vaccine: { de: 'Ja – Schluckimpfung (oral)', en: 'Yes – oral vaccine' },
    note: {
      de: 'Geringes Risiko für übliche Reisen; Flüssigkeitsersatz ist zentral',
      en: 'Low risk for typical travel; fluid replacement is key',
    },
  },
};
