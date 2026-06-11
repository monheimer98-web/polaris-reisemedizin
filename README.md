# Polaris — Praxis für Reise- & Impfmedizin (Website)

Zweisprachige (DE/EN) Website einer Privatpraxis für Reise- & Impfmedizin.
Statisch gebaut mit **Astro** (SSG), selbst gehostete Schriften, DSGVO-konforme
2-Klick-Einbettung für Terminbuchung und Karte. Inhalte sind sachlich,
HWG-konform und über ein zentrales Quellenregister belegt
(RKI/STIKO · WHO · PEI · DTG · Auswärtiges Amt).

> **Markenname „Polaris"** ist in `src/config/site.ts` (`site.brand.name`)
> mit einer Zeile austauschbar.

---

## Tech-Stack

- **Astro 6** (Static Site Generation), **TypeScript**
- **@astrojs/react** — nur für die Buchungs-/Karten-Insel (`ConsentEmbed`)
- **@astrojs/sitemap** — `sitemap-index.xml`
- **Tailwind CSS v4** (CSS-first, Design-Tokens in `src/styles/global.css`)
- **@fontsource-variable/{inter,fraunces}** — selbst gehostet (kein Google-Fonts-CDN)
- i18n: Deutsch (Standard, ohne Pfad-Präfix) + Englisch (unter `/en/`)

## Lokale Entwicklung

```bash
npm install
npm run dev        # Dev-Server (Standard-Port 4321)
npm run build      # Produktions-Build nach dist/ (43 Seiten + Sitemap)
npm run preview    # gebauten Stand lokal ansehen
npx astro check    # Typprüfung (muss 0 Fehler / 0 Warnungen sein)
```

> Hinweis: `npx astro check` meldet einige *Hints* im Unterordner
> `Reiseprax Polaris /praxis-app` — das ist ein **separates, eigenständiges
> Projekt** (interne Praxis-App) und **gehört nicht zur Website**. Es ist aus
> dem Git-Repository ausgeschlossen (siehe `.gitignore`). Maßgeblich für die
> Website ist allein `src/`.

## Projektstruktur (Auszug)

```
src/
  config/site.ts          # EINZIGE Quelle aller Praxisdaten/Platzhalter
  styles/global.css       # Design-Tokens (Petrol/Gold/Sand), Schriften, .rich-text
  i18n/ui.ts              # UI-Strings DE+EN (manuell synchron gehalten)
  i18n/utils.ts           # getLocale(), t(), getLocalizedPath() …
  data/
    sources.ts            # zentrales Quellen-/Zitationsregister
    types.ts              # Localized<T>, ClinicalPage, ContentSection …
    diseases/*.ts         # Krankheitsbilder (Gelbfieber, FSME)
    services/*.ts         # Leistungsseiten (Impfungen, Beratung, Malaria, Höhe)
    termin.ts             # /termin: Texte + Terminarten (appointmentTypes)
    kosten.ts             # /kosten: GOÄ-Preisorientierung (Richtwerte)
    team.ts kontakt.ts faq.ts impressum.ts datenschutz.ts unternehmen.ts …
  components/             # Header, Footer, Hero, ConsentEmbed, *Content.astro …
  layouts/               # BaseLayout, ContentLayout
  pages/                 # DE unpräfixiert, EN unter /en/
public/images/team/      # Porträtfotos (alexander-mayer.webp, konstantin-mayer.webp)
```

**Seitenmuster:** Fachseiten sind dünne `.astro`-Wrapper über ein typisiertes
Datenmodul + `ContentLayout`. Sonderseiten (`/team`, `/kosten`, `/unternehmen`,
`/termin`) bestehen aus `BaseLayout` + selbsttragender `*Content.astro`-Komponente
(liest die Sprache aus der URL) + einem Datenmodul, das von DE- und EN-Seite
gemeinsam importiert wird.

---

## ⚠ Vor dem Go-Live: Platzhalter ausfüllen

Alle mit `[PLATZHALTER: …]` markierten Werte in **`src/config/site.ts`**
ersetzen (eine Datei, eine Wahrheit):

| Feld | Inhalt |
|------|--------|
| `brand.legalName` | vollständige rechtliche Bezeichnung (Impressum) |
| `contact.phone` + `contact.phoneHref` | Telefonnummer (real) |
| `contact.email` + `contact.emailHref` | E-Mail (real) |
| `professional.chamberName` / `chamberUrl` | zuständige Ärztekammer + URL |
| `professional.professionalRulesUrl` | URL zur Berufsordnung |
| `professional.vatId` | USt-IdNr., falls vorhanden (sonst leer lassen) |
| `yellowFever.authorizationRef` | **Aktenzeichen der Gelbfieber-Zulassung** |
| `yellowFever.authority` | autorisierende Behörde / Bundesland |
| `liabilityInsurance.insurer` | Berufshaftpflicht: Versicherer + Sitz |
| `team[].bio` (DE+EN) | Kurzvita beider Personen (derzeit `[…]`) |

Außerdem:
- **`SITE_URL`** / `brand.domain` prüfen, sobald die finale Domain steht.
- **Texte/Vorlagen** `src/data/impressum.ts` und `src/data/datenschutz.ts` sind
  sorgfältige Vorlagen → **anwaltliche Endabnahme empfohlen**.

---

## Gelbfieber-Terminbuchung aktivieren (sobald die Zulassung vorliegt)

Die Gelbfieberimpfung ist **inhaltlich vollständig** umgesetzt, die **Buchung
ist jedoch bewusst deaktiviert**, bis die Praxis als staatlich autorisierte
Gelbfieberimpfstelle zugelassen ist und ein Buchungskonto besteht. Zum
Scharfschalten genau diese Stellen anpassen:

1. **`src/config/site.ts → site.yellowFever`** — `authorizationRef` und
   `authority` mit den echten Zulassungsdaten füllen.
2. **`src/data/termin.ts`** — im Terminarten-Block den Eintrag `id: 'gelbfieber'`
   von `enabled: false` auf **`enabled: true`** setzen (entfernt die
   „In Vorbereitung"-Markierung und aktiviert die Karte).
3. **Buchungs-Widget** muss aktiv sein — siehe nächster Abschnitt
   (`site.booking.embedUrl`). Solange `embedUrl` leer ist, zeigt `/termin` für
   **alle** Terminarten den Platzhalter „Online-Terminbuchung in Vorbereitung".
4. **Vorbereitungs-Texte zurücknehmen**, die aktuell „Online-Buchung in Kürze"
   sagen:
   - `src/data/termin.ts` — Beschreibung der Terminart `gelbfieber`
   - `src/data/kosten.ts` — Gruppe `gelbfieber`: `note` + `item.detail`;
     den Richtwert `price: 'in Vorbereitung'` durch eine GOÄ-Orientierung ersetzen
   - ggf. `src/data/services/gelbfieberimpfung.ts` auf den aktiven Stand prüfen
5. **Wichtig (rechtlich):** Erst wenn die Zulassung tatsächlich erteilt ist,
   dürfen die Aussagen „staatlich autorisierte Gelbfieberimpfstelle" /
   „authorised yellow-fever centre" sichtbar bleiben. Diese Formulierung steht
   an mehreren Stellen (u. a. `src/data/impressum.ts`, `src/i18n/ui.ts`,
   `src/data/faq.ts`, `src/data/team.ts`, `src/data/risikogebiete.ts`,
   `src/data/services/gelbfieberimpfung.ts`). Vor Go-Live entweder die Zulassung
   nachweisen **oder** diese Aussagen temporär entschärfen. **Siehe Warnung unten.**

---

## Online-Terminbuchung einrichten (2-Klick-Lösung + AVV)

Die Buchung wird datenschutzkonform per **2-Klick-Einwilligung** geladen
(`ConsentEmbed`): vor dem aktiven Klick gibt es **keinen** Drittanbieter-Request.

In **`src/config/site.ts → site.booking`**:

- `provider` — Anzeigename des Anbieters (z. B. „Dr. Flex", „Doctolib", „samedi")
- `embedUrl` — Einbettungs-URL des Buchungs-Widgets **(leer = Platzhalter aktiv)**
- `providerPrivacyUrl` — Datenschutzerklärung des Anbieters (für den Consent-Text)
- `externalUrl` — optionaler direkter Buchungslink als Fallback

> **AVV-Pflicht (Art. 28 DSGVO):** Mit dem Buchungsanbieter muss vor Produktiv-
> einsatz ein **Auftragsverarbeitungsvertrag** geschlossen werden. Erst danach
> `embedUrl` setzen.

## Karten-Embed (Anfahrt)

Analog unter `site.map`. `externalUrl` (Routen-Link) lädt ohne Klick nichts und
darf vorbelegt sein; `embedUrl` (interaktive Karte) erst nach geklärter
datenschutzkonformer Einbettung inkl. Consent-Text setzen.

---

## Deployment

Vorgesehen ist zunächst **GitHub Pages** (statisches Deployment via GitHub
Actions, `.github/workflows/deploy.yml`), später Migration auf einen
**EU-/DE-Hoster** (für DSGVO, AVV und Security-Header).

- Bei Projekt-Pages ggf. `base`-Pfad in `astro.config.mjs` setzen (entfällt bei
  Custom-Domain). `.nojekyll` stellt sicher, dass `_astro/` ausgeliefert wird.
- Security-Header (CSP, HSTS …) lassen sich auf GitHub Pages nicht setzen →
  beim späteren EU-Hoster bzw. vorgelagerten Proxy nachrüsten.

---

## Rechtliches & Compliance

- **HWG-konform:** sachliche Information, keine Heilversprechen/Garantien, keine
  reißerischen Vergleiche; medizinischer Disclaimer (Information ≠ individuelle
  Beratung) ist global eingebunden.
- **Preise** erscheinen ausschließlich auf `/kosten` als unverbindliche
  GOÄ-Richtwerte (nicht auf klinischen oder Buchungsseiten).
- **Team:** Alexander Mayer ist **Arzt** (nicht Facharzt → nirgends „Facharzt"/
  „fachärztlich"); Konstantin Mayer ist **medizinischer Mitarbeiter**, durchweg
  positiv beschrieben (nie „kein Arzt").
- **Schriften** selbst gehostet (Google-Fonts-Urteil LG München I); kein
  nicht-essenzieller Cookie standardmäßig.

> ### ⚠ Wichtigster Go-Live-Blocker
> Die Aussage **„staatlich autorisierte Gelbfieberimpfstelle"** (DE+EN) ist an
> mehreren Stellen im Inhalt verankert — am rechtlich sensibelsten im
> **Impressum** (`src/data/impressum.ts`). Diese Aussage darf nur sichtbar
> bleiben, **wenn die Zulassung tatsächlich erteilt ist**. Andernfalls vor dem
> Veröffentlichen entschärfen oder entfernen.
