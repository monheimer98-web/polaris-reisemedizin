/** Quellen der Fachseiten unter /ausland (Studium, Austausch, Au-pair, Work & Travel, Visum, Flug). */
import type { Source } from '../sources';

const ABRUF = new Date('2026-10-31');

export const auslandFachQuellen = {
  cfrAuPair: {
    publisher: 'U.S. Code of Federal Regulations (Cornell LII)',
    title: { de: '22 CFR § 62.31: Au-pair-Programm', en: '22 CFR § 62.31: Au pairs' },
    url: 'https://www.law.cornell.edu/cfr/text/22/62.31',
    retrieved: ABRUF,
    note: {
      de: 'Abs. (d)(4): Teilnahmefähigkeit, belegt durch eine körperliche Untersuchung. Impfungen nennt die Vorschrift nicht.',
      en: 'Para. (d)(4): capable of fully participating, evidenced by a physical. The section does not mention vaccinations.',
    },
  },
  cfrHighSchool: {
    publisher: 'U.S. Code of Federal Regulations (Cornell LII)',
    title: { de: '22 CFR § 62.25: Austauschschülerinnen und -schüler', en: '22 CFR § 62.25: Secondary school students' },
    url: 'https://www.law.cornell.edu/cfr/text/22/62.25',
    retrieved: ABRUF,
    note: {
      de: 'Die Vorschrift enthält keine Impfvorgabe.',
      en: 'The section contains no vaccination requirement.',
    },
  },
  isd411Austausch: {
    publisher: 'Issaquah School District (USA)',
    title: { de: 'Regelung 3142: Austauschschüler (Beispiel eines Schulbezirks)', en: 'Regulation 3142: exchange students (example of a school district)' },
    url: 'https://www.isd411.org/about-us/regulations/3000-series/3142/3142p',
    retrieved: ABRUF,
    note: {
      de: 'Beispiel, keine allgemeine Regel: schriftlicher Impfnachweis, sonst kein Schulzugang.',
      en: 'An example, not a general rule: written proof of immunization, otherwise no admission.',
    },
  },
  ontarioIspa: {
    publisher: 'Government of Ontario',
    title: { de: 'Impfungen für Kinder an Schulen (Immunization of School Pupils Act)', en: 'Vaccines for children at school (Immunization of School Pupils Act)' },
    url: 'https://www.ontario.ca/page/vaccines-children-school',
    retrieved: ABRUF,
    note: { de: 'Stand der Seite: 16.09.2025.', en: 'Page updated: 16 September 2025.' },
  },
  auHealthExams: {
    publisher: 'Australian Government, Department of Home Affairs',
    title: { de: 'Welche Gesundheitsuntersuchungen nötig sind', en: 'What health examinations you need' },
    url: 'https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/what-health-examinations-you-need',
    retrieved: ABRUF,
    note: { de: 'Stand der Seite: 21.09.2026.', en: 'Page updated: 21 September 2026.' },
  },
  auPanel: {
    publisher: 'Australian Government, Department of Home Affairs',
    title: { de: 'Gesundheitsuntersuchungen vereinbaren, zugelassene Stellen außerhalb Australiens', en: 'Arrange your health examinations, approved panel physicians outside Australia' },
    url: 'https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/arrange-your-health-examinations',
    retrieved: ABRUF,
  },
  auWorkingHoliday: {
    publisher: 'Australian Government, Department of Home Affairs',
    title: { de: 'Working Holiday Visum (Subclass 417), Hinweis zur Bearbeitungszeit', en: 'Working Holiday visa (subclass 417), notice on processing times' },
    url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417',
    retrieved: ABRUF,
  },
  nzHealth: {
    publisher: 'Immigration New Zealand',
    title: { de: 'Gesundheitsanforderungen für Visa', en: 'Health requirements for visas' },
    url: 'https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/health-requirements/',
    retrieved: ABRUF,
  },
  nzPanel: {
    publisher: 'Immigration New Zealand',
    title: { de: 'Zugelassene Ärztinnen und Ärzte für Röntgen und Untersuchung', en: 'Doctors who can do X-rays and medical examinations' },
    url: 'https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/health-requirements/doctors-who-can-do-x-rays-and-medical-examinations/',
    retrieved: ABRUF,
  },
  caTemporary: {
    publisher: 'Immigration, Refugees and Citizenship Canada',
    title: { de: 'Medizinische Untersuchung für befristete Aufenthalte', en: 'Medical exam requirements for temporary residents' },
    url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents.html',
    retrieved: ABRUF,
    note: { de: 'Stand der Seite: 04.08.2026.', en: 'Page modified: 4 August 2026.' },
  },
  caCountries: {
    publisher: 'Immigration, Refugees and Citizenship Canada',
    title: { de: 'Länderliste für befristete Aufenthalte', en: 'Country requirements for temporary residents' },
    url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/medical-exams/requirements-temporary-residents/country-requirements.html',
    retrieved: ABRUF,
    note: { de: 'Stand der Seite: 16.07.2026.', en: 'Page modified: 16 July 2026.' },
  },
  caPanel: {
    publisher: 'Immigration, Refugees and Citizenship Canada',
    title: { de: 'Suche nach zugelassenen Ärztinnen und Ärzten', en: 'Find a panel physician' },
    url: 'https://secure.cic.gc.ca/pp-md/pp-list.aspx',
    retrieved: ABRUF,
  },
  cdcPanel: {
    publisher: 'Centers for Disease Control and Prevention (CDC)',
    title: { de: 'Ernannte Ärztinnen und Ärzte für US-Einwanderungsuntersuchungen', en: 'Panel physicians for US immigration medical examinations' },
    url: 'https://www.cdc.gov/immigrant-refugee-health/hcp/panel-physicians/index.html',
    retrieved: ABRUF,
    note: { de: 'Stand der Seite: 15.05.2024.', en: 'Page dated 15 May 2024.' },
  },
  usPanelFrankfurt: {
    publisher: 'U.S. Department of State',
    title: { de: 'Hinweise der US-Vertretung Frankfurt für Einwanderungsvisa', en: 'Immigrant visa instructions of the US post in Frankfurt' },
    url: 'https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/FRN-Frankfurt.html',
    retrieved: ABRUF,
  },
  ukTbTest: {
    publisher: 'GOV.UK',
    title: { de: 'Test vor der Einreise für ein britisches Visum, zugelassene Kliniken', en: 'Test for a UK visa, approved clinics' },
    url: 'https://www.gov.uk/tb-test-visa',
    retrieved: ABRUF,
  },
  ifsg43: {
    publisher: 'Bundesministerium der Justiz',
    title: { de: '§ 43 Infektionsschutzgesetz: Belehrung, Bescheinigung', en: 'Section 43 Infection Protection Act: instruction, certificate' },
    url: 'https://www.gesetze-im-internet.de/ifsg/__43.html',
    retrieved: ABRUF,
  },
  thaiVisaBerlin: {
    publisher: 'Königlich Thailändische Botschaft Berlin',
    title: { de: 'Visaarten und erforderliche Unterlagen', en: 'Types of visas and required documents' },
    url: 'https://berlin.thaiembassy.org/de/page/visaarten-und-die-erforderlichen-unterlagen?menu=624aee6e6d28e96cd62b9392',
    retrieved: ABRUF,
    note: { de: 'Liste mit Stand 01.09.2026 als PDF auf der Seite.', en: 'List dated 1 September 2026, PDF on the page.' },
  },
  thaiFormularOA: {
    publisher: 'Außenministerium Thailand',
    title: { de: 'Formular: Gesundheitszeugnis für das Visum Non-Immigrant O/A', en: 'Form: medical certificate for the Non-Immigrant O/A visa' },
    url: 'https://image.mfa.go.th/mfa/0/kjBTSaxCcf/Consular/EVisa/Gesundheitszeugnis.pdf',
    retrieved: ABRUF,
  },
  esFrankfurtMerkblatt: {
    publisher: 'Generalkonsulat von Spanien in Frankfurt',
    title: { de: 'Merkblatt: Aufenthaltsvisum ohne Arbeitsaufnahme (ohne Datum)', en: 'Leaflet: residence visa without employment (undated)' },
    url: 'https://www.exteriores.gob.es/DocumentosAuxiliaresSC/Alemania/FRANCFORT%20(C)/AUFENTHALTSVISA%20OHNE%20ARBEITSAUFNAHME.doc',
    retrieved: ABRUF,
    note: {
      de: 'Beispiel einer anderen Vertretung. Für Ihren Antrag gilt das Merkblatt des für Sie zuständigen Generalkonsulats.',
      en: 'An example from another post. Your application follows the leaflet of the consulate general responsible for you.',
    },
  },
  esLondonVisum: {
    publisher: 'Generalkonsulat von Spanien in London',
    title: { de: 'Aufenthaltsvisum ohne Erwerbstätigkeit', en: 'Non-lucrative residence visa' },
    url: 'https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Visado-de-residencia-no-lucrativa.aspx',
    retrieved: ABRUF,
    note: {
      de: 'Stand 06.07.2026. Beispiel einer anderen Vertretung, gilt für Antragstellende im Vereinigten Königreich.',
      en: 'Dated 6 July 2026. An example from another post, for applicants in the United Kingdom.',
    },
  },
  aeknoBescheinigung: {
    publisher: 'Ärztekammer Nordrhein',
    title: { de: 'Bescheinigung von Attesten für Behörden im Ausland (Checkliste)', en: 'Checklist: certificate for submission to authorities abroad' },
    url: 'https://www.aekno.de/patienten/bescheinigungen-von-attesten/checklist-certificate-for-submission-to-authorities-abroad',
    retrieved: ABRUF,
  },
  brdApostille: {
    publisher: 'Bezirksregierung Düsseldorf',
    title: { de: 'Apostillen und Beglaubigungen', en: 'Apostilles and certifications' },
    url: 'https://www.brd.nrw.de/Themen/Ordnung-Sicherheit/Apostillen-und-Beglaubigungen',
    retrieved: ABRUF,
    note: {
      de: 'Bearbeitungsdauer laut Seite derzeit 8 bis 10 Wochen; der Hinweis ändert sich häufig.',
      en: 'Processing time according to the page currently 8 to 10 weeks; this notice changes often.',
    },
  },
  bgbEinwilligung: {
    publisher: 'Bundesministerium der Justiz',
    title: { de: '§ 630d BGB: Einwilligung', en: 'Section 630d German Civil Code: consent' },
    url: 'https://www.gesetze-im-internet.de/bgb/__630d.html',
    retrieved: ABRUF,
  },
  aeknoMinderjaehrige: {
    publisher: 'Ärztekammer Nordrhein, Rheinisches Ärzteblatt 12/2021',
    title: {
      de: 'Eltern uneinig: Wer darf über Coronaimpfung eines 16-Jährigen entscheiden? (Reihe Arzt und Recht)',
      en: 'Parents disagree: who may decide on COVID-19 vaccination of a 16-year-old? (series on medicine and law)',
    },
    url: 'https://www.aekno.de/aerzte/rheinisches-aerzteblatt/ausgabe/artikel/2021/dezember-2021/eltern-uneinig-wer-darf-ueber-coronaimpfung-eines-16-jaehrigen-entscheiden',
    retrieved: ABRUF,
  },
  ucInternational: {
    publisher: 'University of Cincinnati',
    title: { de: 'Impfvorgaben für internationale Studierende (Beispiel)', en: 'Immunization requirements for international students (example)' },
    url: 'https://www.med.uc.edu/landing-pages/university-health/vaccination/international-student-immunization-requirements',
    retrieved: ABRUF,
  },
  ufCompliance: {
    publisher: 'University of Florida',
    title: { de: 'Gesundheitsformular für Studierende (Beispiel)', en: 'Student health compliance form (example)' },
    url: 'https://healthcompliance.shcc.ufl.edu/wordpress/files/2024/05/ACL-002gen.pdf',
    retrieved: ABRUF,
  },
  unoInternational: {
    publisher: 'University of Nebraska Omaha',
    title: { de: 'Gesundheitsvorgaben für internationale Studierende (Beispiel)', en: 'Health requirements for international students (example)' },
    url: 'https://www.unomaha.edu/undergraduate-admissions/new-student-health-requirement/international-students.php',
    retrieved: ABRUF,
  },
  marylandVisiting: {
    publisher: 'University of Maryland School of Medicine',
    title: { de: 'Voraussetzungen für klinische Gastaufenthalte (Beispiel)', en: 'Requirements for visiting students (example)' },
    url: 'https://medschool.umaryland.edu/osa/visiting-students/application-requirements',
    retrieved: ABRUF,
  },
  condorMedical: {
    publisher: 'Condor',
    title: { de: 'Medizinische Hinweise und Formular für Fluggäste (Beispiel)', en: 'Medical conditions and form for passengers (example)' },
    url: 'https://www.condor.com/eu/fly-enjoy/special-assistance/assistance-for-our-customers/medical-conditions-and-injuries.jsp',
    retrieved: ABRUF,
    note: {
      de: 'Beispiel einer Fluggesellschaft. Für Ihre Reise gelten die Regeln Ihrer Gesellschaft.',
      en: 'An example from one airline. Your trip follows the rules of your airline.',
    },
  },
  princessSchwangerschaft: {
    publisher: 'Princess Cruises',
    title: { de: 'Schwangerschaft an Bord (Beispiel)', en: 'Pregnancy on board (example)' },
    url: 'https://www.princesscruises.de/de/urlaub-mit-princess/nuetzliche-hinweise-allgemeine-infos/schwangerschaft',
    retrieved: ABRUF,
    note: {
      de: 'Beispiel einer Reederei. Für Ihre Reise gelten die Regeln Ihrer Reederei.',
      en: 'An example from one cruise line. Your trip follows the rules of your cruise line.',
    },
  },
} satisfies Record<string, Source>;
