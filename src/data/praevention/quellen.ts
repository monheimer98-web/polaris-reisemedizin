/**
 * Quellen des Bereichs „Prävention & Lebensstil". Werden im zentralen
 * Register (`../sources.ts`) eingemischt und sind damit normale `SourceId`s.
 * Abruf/Prüfung: 28.10.2026. Fachartikel über DOI verlinkt (stabil, der
 * Verlag sperrt automatisierte Abrufe).
 */
import type { Source } from '../sources';

const abruf = new Date('2026-10-28');

export const praeventionQuellen = {
  escPraevention2021: {
    publisher: 'European Society of Cardiology (ESC)',
    title: {
      de: 'ESC-Leitlinie zur Prävention von Herz-Kreislauf-Erkrankungen in der klinischen Praxis (2021)',
      en: '2021 ESC Guidelines on cardiovascular disease prevention in clinical practice',
    },
    url: 'https://doi.org/10.1093/eurheartj/ehab484',
    retrieved: abruf,
    note: {
      de: 'Grundlage für die Risikoeinschätzung mit SCORE2 und SCORE2-OP.',
      en: 'Basis for risk assessment with SCORE2 and SCORE2-OP.',
    },
  },
  escEasLipide2019: {
    publisher: 'European Society of Cardiology (ESC) / European Atherosclerosis Society (EAS)',
    title: {
      de: 'ESC/EAS-Leitlinie zum Management von Fettstoffwechselstörungen (2019)',
      en: '2019 ESC/EAS Guidelines for the management of dyslipidaemias',
    },
    url: 'https://doi.org/10.1093/eurheartj/ehz455',
    retrieved: abruf,
  },
  easLpa2022: {
    publisher: 'European Atherosclerosis Society (EAS)',
    title: {
      de: 'Lipoprotein(a) bei Arteriosklerose und Aortenklappenstenose: Konsensus der EAS (2022)',
      en: 'Lipoprotein(a) in atherosclerotic cardiovascular disease and aortic stenosis: EAS consensus statement (2022)',
    },
    url: 'https://doi.org/10.1093/eurheartj/ehac361',
    retrieved: abruf,
    note: {
      de: 'Empfiehlt, Lp(a) bei Erwachsenen mindestens einmal im Leben zu bestimmen.',
      en: 'Recommends measuring Lp(a) at least once in every adult’s lifetime.',
    },
  },
  nvlHypertonie: {
    publisher: 'Programm für Nationale VersorgungsLeitlinien (BÄK, KBV, AWMF)',
    title: {
      de: 'Nationale VersorgungsLeitlinie Hypertonie',
      en: 'National Disease Management Guideline Hypertension (Germany)',
    },
    url: 'https://www.leitlinien.de/themen/hypertonie',
    retrieved: abruf,
  },
  gbaGesundheitsuntersuchung: {
    publisher: 'Gemeinsamer Bundesausschuss (G-BA)',
    title: {
      de: 'Gesundheitsuntersuchungs-Richtlinie',
      en: 'Health check-up guideline (Gesundheitsuntersuchungs-Richtlinie)',
    },
    url: 'https://www.g-ba.de/richtlinien/10/',
    retrieved: abruf,
    note: {
      de: 'Regelt den gesetzlichen Check-up (18–34 Jahre einmalig, ab 35 alle drei Jahre).',
      en: 'Governs the statutory check-up (once between 18 and 34, every three years from 35).',
    },
  },
  awmfAdipositas: {
    publisher: 'AWMF / Deutsche Adipositas-Gesellschaft (DAG)',
    title: {
      de: 'S3-Leitlinie Prävention und Therapie der Adipositas (AWMF-Register 050-001)',
      en: 'S3 guideline on the prevention and treatment of obesity (AWMF register 050-001)',
    },
    url: 'https://register.awmf.org/de/leitlinien/detail/050-001',
    retrieved: abruf,
  },
  awmfMenopause: {
    publisher: 'AWMF / Deutsche Gesellschaft für Gynäkologie und Geburtshilfe (DGGG)',
    title: {
      de: 'S3-Leitlinie Peri- und Postmenopause – Diagnostik und Interventionen (AWMF-Register 015-062)',
      en: 'S3 guideline on peri- and postmenopause – diagnosis and interventions (AWMF register 015-062)',
    },
    url: 'https://register.awmf.org/de/leitlinien/detail/015-062',
    retrieved: abruf,
  },
  dvoOsteoporose: {
    publisher: 'Dachverband Osteologie (DVO) / AWMF',
    title: {
      de: 'S3-Leitlinie Prophylaxe, Diagnostik und Therapie der Osteoporose (AWMF-Register 183-001)',
      en: 'S3 guideline on prevention, diagnosis and treatment of osteoporosis (AWMF register 183-001)',
    },
    url: 'https://register.awmf.org/de/leitlinien/detail/183-001',
    retrieved: abruf,
  },
  awmfMuedigkeit: {
    publisher: 'Deutsche Gesellschaft für Allgemeinmedizin und Familienmedizin (DEGAM)',
    title: {
      de: 'S3-Leitlinie Müdigkeit (AWMF-Register 053-002)',
      en: 'S3 guideline on fatigue in primary care (AWMF register 053-002)',
    },
    url: 'https://register.awmf.org/de/leitlinien/detail/053-002',
    retrieved: abruf,
  },
  awmfInsomnie: {
    publisher: 'Deutsche Gesellschaft für Schlafforschung und Schlafmedizin (DGSM)',
    title: {
      de: 'S3-Leitlinie Insomnie bei Erwachsenen (AWMF-Register 063-003)',
      en: 'S3 guideline on insomnia in adults (AWMF register 063-003)',
    },
    url: 'https://register.awmf.org/de/leitlinien/detail/063-003',
    retrieved: abruf,
  },
  awmfSchlafapnoe: {
    publisher: 'Deutsche Gesellschaft für Schlafforschung und Schlafmedizin (DGSM)',
    title: {
      de: 'S3-Leitlinie Schlafbezogene Atmungsstörungen bei Erwachsenen (AWMF-Register 063-001)',
      en: 'S3 guideline on sleep-related breathing disorders in adults (AWMF register 063-001)',
    },
    url: 'https://register.awmf.org/de/leitlinien/detail/063-001',
    retrieved: abruf,
  },
  whoBewegung2020: {
    publisher: 'World Health Organization (WHO)',
    title: {
      de: 'WHO-Leitlinien zu Bewegung und sitzendem Verhalten (2020)',
      en: 'WHO guidelines on physical activity and sedentary behaviour (2020)',
    },
    url: 'https://www.who.int/publications/i/item/9789240015128',
    retrieved: abruf,
  },
  ewgsop2: {
    publisher: 'European Working Group on Sarcopenia in Older People (EWGSOP2)',
    title: {
      de: 'Sarkopenie: überarbeiteter europäischer Konsens zu Definition und Diagnose (2019)',
      en: 'Sarcopenia: revised European consensus on definition and diagnosis (2019)',
    },
    url: 'https://doi.org/10.1093/ageing/afy169',
    retrieved: abruf,
  },
  dgeProtein: {
    publisher: 'Deutsche Gesellschaft für Ernährung (DGE)',
    title: {
      de: 'Referenzwerte für die Nährstoffzufuhr: Protein',
      en: 'Reference values for nutrient intake: protein',
    },
    url: 'https://www.dge.de/wissenschaft/referenzwerte/protein/',
    retrieved: abruf,
  },
  dgeEmpfehlungen: {
    publisher: 'Deutsche Gesellschaft für Ernährung (DGE)',
    title: {
      de: 'Gut essen und trinken – die DGE-Empfehlungen',
      en: 'Eating and drinking well – the DGE recommendations',
    },
    url: 'https://www.dge.de/gesunde-ernaehrung/gut-essen-und-trinken/dge-empfehlungen/',
    retrieved: abruf,
  },
} satisfies Record<string, Source>;
