# Polaris — Praxis für Reise- & Impfmedizin (Website)

Zweisprachige (DE/EN) Website einer Privatpraxis für Reise- & Impfmedizin.
Statisch gebaut mit **Astro** (SSG), selbst gehostete Schriften, DSGVO-konforme
Terminbuchung über das **eigene Praxissystem** (First-Party-Formular, kein
Drittanbieter) und 2-Klick-Karte. Inhalte sind sachlich,
HWG-konform und über ein zentrales Quellenregister belegt
(RKI/STIKO · WHO · PEI · DTG · Auswärtiges Amt).

> **Markenname „Polaris"** ist in `src/config/site.ts` (`site.brand.name`)
> mit einer Zeile austauschbar.

---

## Tech-Stack

- **Astro 6** (Static Site Generation), **TypeScript**
- **@astrojs/react** — für das Terminanfrage-Formular (`BookingForm`) und die Karten-Insel (`ConsentEmbed`)
- **@astrojs/sitemap** — `sitemap-index.xml`
- **Tailwind CSS v4** (CSS-first, Design-Tokens in `src/styles/global.css`)
- **@fontsource-variable/{inter,fraunces}** — selbst gehostet (kein Google-Fonts-CDN)
- i18n: Deutsch (Standard, ohne Pfad-Präfix) + Englisch (unter `/en/`)

## Lokale Entwicklung

```bash
npm install
npm run dev        # Dev-Server (Standard-Port 4321)
npm run build      # Produktions-Build nach dist/ (67 Seiten + Sitemap)
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
    termin.ts             # /termin: Texte + Terminarten + Formulartexte (BookingForm)
    kosten.ts             # /kosten: GOÄ-Preisorientierung (Richtwerte)
    team.ts kontakt.ts faq.ts impressum.ts datenschutz.ts unternehmen.ts …
  components/             # Header, Footer, Hero, BookingForm, ConsentEmbed, *Content.astro …
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
3. **Buchungs-Endpunkt** muss aktiv sein — siehe nächster Abschnitt
   (`site.booking.endpoint`). Solange `endpoint` leer ist, zeigt `/termin` den
   Platzhalter „Online-Terminanfrage in Vorbereitung". Gelbfieber bleibt in der
   praxis-app zusätzlich `gated` (siehe `src/lib/terminarten.ts`) und ist daher
   bewusst **nicht** in `site` → `data/termin.ts` (`bookableTypes`) gelistet.
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

## Online-Terminbuchung einrichten (eigenes Praxissystem)

Die Buchung läuft über das **eigene Praxis-Terminsystem** (die interne
`praxis-app`) — **kein Drittanbieter, kein iframe, keine AVV**. Auf `/termin`
rendert die React-Insel **`BookingForm`** ein Anfrageformular; beim Absenden
geht ein `POST` an `site.booking.endpoint`. Dort entsteht in der praxis-app ein
Termin mit Status **„angefragt"**, den das Backoffice bestätigt. Solange
`endpoint` leer ist, zeigt das Formular einen neutralen Platzhalter mit
Telefon-/E-Mail-Fallback (**kein** Netzwerk-Request).

In **`src/config/site.ts → site.booking`**:

- `provider` — Anzeigename des eigenen Systems (u. a. in der Datenschutzerklärung)
- `endpoint` — `POST`-Ziel des Formulars **(leer = Platzhalter aktiv)**

### Sicherheit: Token NIE im Browser → Reverse-Proxy injiziert es

Die praxis-app schützt ihre Buchungs-API mit einem **`BOOKING_TOKEN`**. Dieses
Token darf **niemals** im statisch ausgelieferten JS/Browser stehen. Lösung:
`endpoint` zeigt **nicht** direkt auf die praxis-app, sondern auf einen
**Reverse-Proxy** (Caddy/nginx — „Variante A" der praxis-app), der

1. den `X-Booking-Token`-Header **serverseitig** setzt (aus einer Server-Env, nie im Repo) und
2. die Anfrage an die intern gebundene praxis-app (`127.0.0.1:4317`) weiterreicht.

**Empfehlung: SAME-ORIGIN.** Website **und** Proxy unter derselben Domain
betreiben und `endpoint` auf einen **relativen Pfad** wie **`/api/buchung`**
setzen. Dann entfällt CORS vollständig. Das Formular sendet bewusst als
`application/x-www-form-urlencoded` (»simple request« → **kein** Preflight).

> **⚠ CORS-Falle bei Cross-Origin:** Liegt der Endpunkt auf einer **anderen**
> Domain und der Proxy setzt **kein** `Access-Control-Allow-Origin`, dann
> *erreicht* der `POST` den Server (der Termin wird angelegt!), aber der Browser
> **blockiert das Lesen der Antwort** → das Formular zeigt fälschlich einen
> Fehler, der Nutzer bucht evtl. doppelt. Daher entweder same-origin nutzen
> **oder** im Proxy `Access-Control-Allow-Origin` setzen **und** `OPTIONS`
> beantworten.

Beispiel-Proxy (Caddy, same-origin):

```caddy
example-praxis.de {
    handle /api/buchung {
        header_up X-Booking-Token "{$BOOKING_TOKEN}"   # serverseitig, aus Server-Env
        reverse_proxy 127.0.0.1:4317
    }
    handle { root * /var/www/polaris/dist; file_server }   # statische Website
}
```

### Backend-Vertrag (praxis-app) — Single Source of Truth

`POST` an `endpoint`, Body `application/x-www-form-urlencoded`. Das Formular
sendet genau diese Feldnamen (Mapping in `src/components/BookingForm.tsx`):

| Formularfeld           | Body-Feld        | Pflicht |
|------------------------|------------------|---------|
| Terminart              | `terminart`      | ja      |
| Vorname / Nachname     | `vorname` / `nachname` | ja |
| E-Mail                 | `email`          | ja      |
| Wunschdatum            | `datum`          | ja      |
| Wunschzeit             | `zeit`           | nein    |
| Telefon                | `telefon`        | nein    |
| Geburtsdatum           | `geburtsdatum`   | nein    |
| Reiseziel              | `reiseziel`      | nein    |
| Abreisedatum           | `abreise_datum`  | nein    |
| Nachricht              | `notiz`          | nein    |

Erfolg: HTTP **201** mit `{ ok: true, appointmentId, status: "angefragt" }`.
Fehler: **400/401** mit `{ ok: false, fehler }`. Das Formular wertet
`res.ok && json.ok === true` aus.

### Terminart-IDs synchron halten

Die buchbaren Arten stehen in **`src/data/termin.ts → bookableTypes`**. Jede
`id` **muss exakt** einer nicht-gesperrten Terminart der praxis-app
(`src/lib/terminarten.ts`) entsprechen — das Backend prüft erneut und weist
unbekannte oder `gated` Arten (z. B. **gelbfieber**) ab. Beim Hinzufügen/Ändern
von Terminarten **beide Stellen** anpassen.

### Anti-Spam

`BookingForm` enthält ein verstecktes **Honeypot-Feld** (`homepage`): von
Menschen unsichtbar; ist es ausgefüllt, wird **nicht** gesendet. Zusätzlich
sollte der Reverse-Proxy/die praxis-app **Rate-Limiting** auf `/api/buchung`
erzwingen (z. B. pro IP/Minute).

> **Keine medizinischen Daten im Formular:** Ein sichtbarer Hinweis bittet darum,
> hier **keine** Gesundheitsdaten einzutragen (die werden vertraulich im Termin
> besprochen). Pflichtfelder beschränken sich auf Kontakt- und Termindaten.

## Kundenstimmen / Bewertungen aktivieren

Die `Reviews`-Sektion der Startseite ist **aufgesetzt, aber bewusst inaktiv**:
Solange `site.reviews.enabled` `false` ist **oder** `items` leer ist, rendert
sie **nichts** – die Startseite bleibt unverändert. So lässt sie sich später
ohne Code-Änderung freischalten, sobald echte Bewertungen vorliegen.

Aktivieren (in `src/config/site.ts → reviews`):

1. Pro echter, **mit ausdrücklicher Einwilligung freigegebener** Bewertung ein
   Objekt in `items` eintragen (`quote` verbatim in Originalsprache, `author`
   datensparsam wie „Sandra M.", optional `rating` 1–5, `date`, `source`).
   **Keine erfundenen Testimonials** – wettbewerbs- und berufsrechtlich unzulässig.
2. Optional `googleProfileUrl` (Outbound-Link zum Google-Profil) und `aggregate`
   (`ratingValue`/`reviewCount`) setzen – Letzteres nur, wenn es **reale**
   Bewertungen widerspiegelt.
3. `enabled: true` setzen → fertig (DE/EN-Texte kommen aus `i18n/ui.ts`,
   Schlüssel `reviews.*`).

First-party & datensparsam: Es werden **keine** Google-/Drittanbieter-Widgets
geladen, kein externer Request, kein Tracking. Eine Schema.org-`aggregateRating`
wird (bei realer Basis) erst später separat ergänzt.

## Reichweitenmessung / Web-Analyse aktivieren

Die Analyse ist **aufgesetzt, aber standardmäßig inaktiv** (wie der leere
Buchungs-Endpoint). Solange `site.analytics.enabled` `false` ist **oder**
`scriptUrl`/`domain` leer sind, wird **kein** Analyse-Skript ausgeliefert und der
Abschnitt „Reichweitenmessung" in der Datenschutzerklärung **nicht** angezeigt –
beides hängt am selben Schalter, damit die Erklärung in jedem Zustand wahr bleibt.

Konzipiert ist eine **cookielose, EU-/self-hosted** Lösung (Plausible oder
Matomo im `disableCookies`-Modus). Cookielos = keine Speicherung/Auslesung auf
dem Endgerät → **kein** Einwilligungsbanner nötig (§ 25 Abs. 1 TDDDG), Verarbeitung
auf Grundlage des berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Der Loader
respektiert „Do Not Track" und „Global Privacy Control": ist eines gesetzt, wird
gar nicht erst geladen.

Aktivieren (in `src/config/site.ts → analytics`), sobald ein eigener
EU-/Self-Hosting-Analyse-Host eingerichtet ist:

1. `provider` wählen (`'Plausible'` oder `'Matomo'`).
2. `scriptUrl` (Anbieter-Skript), `domain` (registrierte Site) und – nur bei
   Matomo – `siteId` setzen.
3. `host` mit dem realen Analyse-Hoster füllen (erscheint in der
   Datenschutzerklärung als Auftragsverarbeiter; **AVV nach Art. 28 DSGVO
   abschließen**).
4. `enabled: true` setzen → fertig. Der Abschnitt „Reichweitenmessung" in der
   Datenschutzerklärung erscheint dann automatisch mit aufgelöstem Anbieter/Host.

> **Hinweis:** Würde stattdessen eine **cookie-basierte** Analyse eingesetzt,
> wäre ein vorgeschaltetes Einwilligungsbanner (Opt-in) zwingend – dann müsste
> das Skript erst **nach** aktiver Einwilligung geladen und die Rechtsgrundlage
> in der Datenschutzerklärung auf Art. 6 Abs. 1 lit. a DSGVO umgestellt werden.

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
