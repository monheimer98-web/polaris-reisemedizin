/**
 * Suchmaschinen-Titel (<title>) für die wichtigsten Seiten – mit Ortsbezug
 * „Langenfeld", damit lokale Suchen („Reiseimpfung Langenfeld") die Praxis
 * finden. Schlüssel = logischer Pfad ohne Sprachpräfix und ohne Slash am Ende.
 * Seiten ohne Eintrag behalten den Standard „{Seitentitel} · Polaris".
 * Die sichtbare Überschrift (H1) der Seite bleibt davon unberührt.
 */
import type { Localized } from './types';

export const seoTitles: Record<string, Localized> = {
  '/': {
    de: 'Reisemedizin & Reiseimpfungen in Langenfeld | Polaris',
    en: 'English-speaking Travel Clinic near Düsseldorf | Polaris',
  },
  '/leistungen/gelbfieberimpfung': {
    de: 'Gelbfieberimpfung in Langenfeld – Termin & Kosten | Polaris',
    en: 'Yellow Fever Vaccination in Langenfeld | Polaris',
  },
  '/leistungen/reiseimpfungen': {
    de: 'Reiseimpfungen in Langenfeld: Was brauche ich? | Polaris',
    en: 'Travel Vaccinations in Langenfeld | Polaris',
  },
  '/leistungen/reiseberatung': {
    de: 'Reisemedizinische Beratung in Langenfeld | Polaris',
    en: 'Travel Health Consultation in Langenfeld | Polaris',
  },
  '/leistungen/fsme-impfung': {
    de: 'FSME-Impfung in Langenfeld | Polaris',
    en: 'TBE Vaccination in Langenfeld | Polaris',
  },
  '/leistungen/malaria': {
    de: 'Malariaprophylaxe & Malaria-Beratung in Langenfeld | Polaris',
    en: 'Malaria Prevention Advice in Langenfeld | Polaris',
  },
  '/kosten': {
    de: 'Preise nach GOÄ – Reisemedizin Langenfeld | Polaris',
    en: 'Fees & Billing – Travel Clinic Langenfeld | Polaris',
  },
  '/termin': {
    de: 'Reiseimpfung in Langenfeld: Termin buchen | Polaris',
    en: 'Book a Travel Vaccination Appointment | Polaris',
  },
  '/kontakt': {
    de: 'Anfahrt & Kontakt – Reisemedizin Langenfeld | Polaris',
    en: 'Directions & Contact – Travel Clinic Langenfeld | Polaris',
  },
  '/ratgeber': {
    de: 'Ratgeber Reiseimpfung & Reisemedizin | Polaris Langenfeld',
    en: 'Travel Vaccination & Travel Health Guides | Polaris',
  },
  '/ratgeber/reiseimpfung-kosten-krankenkasse': {
    de: 'Was kostet eine Reiseimpfung? Kosten & Kasse | Polaris',
    en: 'Travel Vaccination Costs & Reimbursement | Polaris',
  },
  '/ratgeber/wann-vor-der-reise-impfen': {
    de: 'Wann vor der Reise impfen? Vorlaufzeiten | Polaris',
    en: 'When to Get Travel Vaccinations Before a Trip | Polaris',
  },
  '/reiseziele/asien/thailand': {
    de: 'Impfungen für Thailand – Reisemedizin Langenfeld | Polaris',
    en: 'Thailand Travel Vaccinations | Polaris Langenfeld',
  },
  '/reiseziele/asien/indien': {
    de: 'Impfungen für Indien: Typhus, Hepatitis A & mehr | Polaris',
    en: 'India Travel Vaccinations | Polaris Langenfeld',
  },
  '/reiseziele/asien/indonesien-bali': {
    de: 'Impfungen für Bali & Indonesien | Polaris Langenfeld',
    en: 'Bali & Indonesia Travel Vaccinations | Polaris',
  },
  '/reiseziele/afrika/kenia': {
    de: 'Impfungen für Kenia: Gelbfieber, Malaria & mehr | Polaris',
    en: 'Kenya Travel Vaccinations & Malaria Advice | Polaris',
  },
  '/reiseziele/afrika/tansania-sansibar': {
    de: 'Impfungen für Tansania & Sansibar | Polaris Langenfeld',
    en: 'Tanzania & Zanzibar Travel Vaccinations | Polaris',
  },
  '/unternehmen': {
    de: 'Reisemedizin für Firmen im Rheinland | Polaris Langenfeld',
    en: 'Travel Medicine for Companies in the Rhineland | Polaris',
  },
};
