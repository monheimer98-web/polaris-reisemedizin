#!/usr/bin/env node
/**
 * Weiterleitungstabelle für einen späteren Umzug der Themenwelt Prävention auf
 * eine eigene Adresse. Liest die gebauten Seiten aus dist/ (nach `npm run build`)
 * und schreibt eine CSV für Cloudflare-Massenweiterleitungen (301).
 *
 *   node scripts/praevention-weiterleitungen.mjs https://polaris-gesundheit.de [ziel|quelle]
 *
 * Standard „ziel": Die neue Adresse leitet auf den Unterpfad der Hauptadresse
 * (Empfehlung: Hauptadresse bleibt, Google-Profil und Bewertungen bleiben ganz).
 * „quelle": umgekehrt, jede Unterseite der Hauptadresse zeigt auf die neue Adresse.
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const HAUPT = 'https://www.polaris-reisemedizin.de';
const [neu = 'https://polaris-gesundheit.de', richtung = 'ziel'] = process.argv.slice(2);
const DIST = new URL('../dist/', import.meta.url).pathname;
const MUSTER = /^\/(en\/)?(praevention(\/|$)|ratgeber\/(blutwerte-erklaert|grosses-blutbild-kosten|vitamin-d-test-beim-arzt)\/)/;

function seiten(dir, basis = '/') {
  return readdirSync(dir).flatMap((name) => {
    const voll = join(dir, name);
    if (statSync(voll).isDirectory()) return seiten(voll, `${basis}${name}/`);
    return name === 'index.html' ? [basis] : [];
  });
}

const pfade = seiten(DIST).filter((p) => MUSTER.test(p)).sort();
const zeilen = ['quelle,ziel,status'];
for (const pfad of pfade) {
  // Auf der neuen Adresse ohne „/praevention": /praevention/gesundheitscheck/ → /gesundheitscheck/
  const kurz = pfad.replace(/^\/(en\/)?praevention\/?/, (_, en) => `/${en ?? ''}`);
  const [a, b] = richtung === 'quelle' ? [`${HAUPT}${pfad}`, `${neu}${kurz}`] : [`${neu}${kurz}`, `${HAUPT}${pfad}`];
  zeilen.push(`${a},${b},301`);
}
const ziel = new URL('../praevention-weiterleitungen.csv', import.meta.url).pathname;
writeFileSync(ziel, `${zeilen.join('\n')}\n`);
console.log(`${pfade.length} Pfade → ${ziel}`);
