/**
 * /llms.txt – kurze Übersicht der Praxis für KI-Dienste (Vorschlag llmstxt.org).
 * Nicki 20.11.2026: „dass wir auch von KI gefunden werden“. Ob ein Dienst die
 * Datei liest, ist nicht gesichert; sie fasst nur zusammen, was auf den Seiten
 * steht, und wird bei jedem Bau aus denselben Daten erzeugt.
 */
import type { APIRoute } from 'astro';
import { site, SITE_URL } from '../config/site';
import { preventionOffers, preventionPath } from '../data/praevention';
import { haarePrp } from '../data/praevention/angebote/haare';
import { PRP_PFAD, hatPrp } from '../data/praevention/schema';
import { NACHWEISE_IM_ANGEBOT } from '../data/ausland/stand';

const url = (pfad: string) => new URL(pfad.endsWith('/') ? pfad : `${pfad}/`, SITE_URL).href;
const zeile = (name: string, pfad: string, text: string) => `- [${name}](${url(pfad)}): ${text}`;

const praevention = [
  ...preventionOffers.map((o) => zeile(o.page.meta.title.de, preventionPath(o.slug), o.teaser.de)),
  ...(hatPrp
    ? [zeile(haarePrp.meta.title.de, PRP_PFAD, 'Plasma aus dem eigenen Blut bei erblich bedingtem Haarausfall. Der erste Termin beginnt mit einer Haarsprechstunde; passt PRP nicht, wird nicht behandelt.')]
    : []),
  zeile('Beispielkosten Prävention', '/praevention/kosten', 'Richtwerte nach der Gebührenordnung für Ärzte (GOÄ), je Termin und mit Laborwerten.'),
  zeile('Termin Prävention', '/praevention/termin', 'Ersttermine direkt über die Website buchen, auch am Abend und am Samstag.'),
];

const wissen = [
  zeile('Welche Blutwerte wofür?', '/ratgeber/blutwerte-erklaert', 'Die wichtigsten Blutwerte verständlich erklärt.'),
  zeile('Großes Blutbild: Kosten', '/ratgeber/grosses-blutbild-kosten', 'Was ein großes Blutbild zeigt und was es als Selbstzahlerleistung kostet.'),
  zeile('Vitamin-D-Test beim Arzt', '/ratgeber/vitamin-d-test-beim-arzt', 'Wann eine Messung etwas ändert und was sie kostet.'),
  ...(hatPrp
    ? [
        zeile('Haarausfall: Ursachen', '/ratgeber/haarausfall-ursachen', 'Häufige Ursachen bei Frauen und Männern, was man selbst tun kann und wann man zum Arzt geht.'),
        zeile('Haarausfall: zu welchem Arzt?', '/ratgeber/haarausfall-welcher-arzt', 'Hausarztpraxis, Hautarztpraxis, Frauenarztpraxis oder Haarsprechstunde: wer wobei hilft und wann es eilt.'),
      ]
    : []),
];

const reise = [
  zeile('Leistungen', '/leistungen', 'Reisemedizinische Beratung, Reiseimpfungen, Gelbfieberimpfung, Malaria- und Höhenberatung, Impfungen für Erwachsene.'),
  zeile('Reiseziele', '/reiseziele', 'Impf- und Gesundheitshinweise nach Reiseland.'),
  zeile('Krankheitsbilder', '/krankheitsbilder', 'Reisekrankheiten und impfpräventable Erkrankungen erklärt.'),
  ...(NACHWEISE_IM_ANGEBOT
    ? [zeile('Ausland und Nachweise', '/ausland', 'Beratung vor Auslandsaufenthalten, Gesundheitsnachweise und Atteste.')]
    : []),
  zeile('Kosten und Abrechnung', '/kosten', 'Abrechnung nach GOÄ, Beispielkosten der Reisemedizin.'),
  zeile('Termin Reisemedizin und Impfungen', '/termin', 'Termine direkt über die Website buchen.'),
];

const text = `# ${site.brand.legalName}

> Ärztliche Privatpraxis in ${site.contact.city} bei Düsseldorf für Prävention, Reisemedizin und Impfungen. Gesundheitscheck, Blutwerte, Sprechstunde Gewicht und Stoffwechsel mit ärztlicher Ernährungsberatung, Haarsprechstunde${hatPrp ? ' und PRP bei Haarausfall' : ''}; dazu reisemedizinische Beratung und Reiseimpfungen als staatlich zugelassene Gelbfieberimpfstelle. Termine lassen sich direkt über die Website buchen.

- Adresse: ${site.contact.street}, ${site.contact.zip} ${site.contact.city}
- Telefon: ${site.contact.phone}
- E-Mail: ${site.contact.email}
- Abrechnung: Privatpraxis nach der Gebührenordnung für Ärzte (GOÄ), für Selbstzahler und Privatversicherte. Viele gesetzliche Krankenkassen erstatten Reiseimpfungen freiwillig ganz oder teilweise; Umfang und Bedingungen sind je Kasse unterschiedlich.
- Sprachen: Deutsch und Englisch (englische Seiten unter ${url('/en')})
- Einzugsgebiet: ${site.contact.city}, Monheim am Rhein, Hilden, Leichlingen, Solingen, Leverkusen, Düsseldorf

## Prävention

${praevention.join('\n')}

## Wissen zu Blutwerten

${wissen.join('\n')}

## Reisemedizin und Impfungen

${reise.join('\n')}

## Praxis

${zeile('Kontakt und Anfahrt', '/kontakt', 'Adresse, Telefon, Sprechzeiten und Anfahrt.')}
${zeile('Praxis und Team', '/team', 'Wie wir arbeiten.')}
`;

export const GET: APIRoute = () =>
  new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
