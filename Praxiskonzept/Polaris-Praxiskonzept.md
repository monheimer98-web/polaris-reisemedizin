# Polaris — Praxiskonzept (Reise- & Impfmedizin)

> **Lebendes Arbeitsdokument.** Baut Phase für Phase auf (eine Phase = ein durchgearbeiteter,
> gegengecheckter Punkt). Stand: **2026-06-11**.
>
> **Verbindlichkeits-Hinweis:** Alle GOÄ-, Preis- und Rechtsangaben sind ein **recherchierter
> Rahmen** — vor Go-live final abzunehmen mit **Ärztekammer Nordrhein**, **Steuerberater** und
> **privatärztlicher Abrechnungsstelle** (z. B. PVS). Keine verbindliche Abrechnungs-/Rechts-/
> Finanzberatung. **Medizinische Inhalte:** ärztliche Freigabe durch **Alexander Mayer (Arzt)**.

---

## 0 · Masterplan (Phasen, in Reihenfolge)

| Phase | Inhalt | Status |
|---|---|---|
| **0** | Betriebs- & Compliance-Grundlage (Modell, Buchungsprodukte, Rechtsrahmen, Tonalität) | ✅ fertig |
| 1 | Angebotsgliederung (Leistungs-Cluster, je: für wen / Ablauf / Beratungspflicht / Vorlauf / Beschaffungsweg) | ✅ fertig |
| 2 | Preisstruktur GOÄ-konform (Ziffern, Faktoren, Tarife, Erstattung) — **harter Recherchepunkt** | **in Arbeit** |
| 3 | Website-Informationsarchitektur / Seitenkarte (DE+EN) | offen |
| 4 | Content je Seite (Fakten, Quellen, CTAs, HWG-Prüfung) — klinische Fachseiten | offen |
| 5 | Buchungslogik (Dr.-Flex-Terminarten, 2-Klick-Consent, AVV; Gelbfieber gated) | offen |
| 6 | Build, Compliance, QA, Launch — **alles buchbar außer Gelbfieber** | offen |
| 7 | Gelbfieber-Freischaltung nach Zertifizierung | offen |

---

## Entscheidungslog (vom Auftraggeber bestätigt, 2026-06-11)

1. **Kühlkette:** validierter Impfkühlschrank **vorhanden**.
2. **Lager:** **kein breites Standlager** der teuren/vielen Reiseimpfstoffe. Beschaffung patientenbezogen
   über **(a) Privatrezept** oder **(b) patientenindividuelle Bestellung** (Praxis ordert die konkrete
   Dosis, lagert sie kurz im validierten Kühlschrank, Patient kommt zum dann „für ihn vorrätigen" Termin).
3. **Gelbfieber:** nach Zulassung **vor Ort vorrätig** (eigener Weg; Gabe nur in autorisierter Stelle).
4. **Preise:** **transparente Preisliste** auf der Website, **deutlich als „Abrechnung nach GOÄ" ausgeschildert**.
5. **Seitentiefe:** **klinische Fachseiten je Thema** (Niveau wie Gelbfieber/FSME), Quellbasis = die
   Reisemed-App (`/Users/nicki/vaxio-reisemed-app`) + eigene Ergänzung.
6. **Ärztliche Freigabe:** bestätigt (Alexander Mayer gibt alle medizinischen Inhalte frei).
7. **Tonalität (neu):** clever, premium, marketingfreundlich, sachlich. **Nie** „kein Arzt" o. Ä. schreiben.
8. **Personenbezeichnung (neu):** Alexander Mayer ist **Arzt** (Approbation), **kein Facharzt** →
   Begriff **„Facharzt" nirgends** verwenden.
9. **B2B-Säule aufgenommen (2026-06-11):** „Reisemedizin für Unternehmen / Geschäftsreisende" wird eigene
   Angebots-Säule — als **reisemedizinische** Leistung (Beratung, Impfungen, Malaria-/Höhenprophylaxe;
   Abrechnung an Arbeitgeber). **Nicht** als formale arbeitsmed. Vorsorge / „G35"-Bescheinigung
   (§ 7 ArbMedVV → Facharzt Arbeitsmedizin / Zusatzbez. Betriebsmedizin). Kooperation mit Betriebsärzten möglich.

---

## Phase 0 · Betriebs- & Compliance-Grundlage

### 0.1 Betriebsmodell — „Beratung zuerst, indikationsgerechte Beschaffung, Gabe beim (Folge-)Termin"

- **Ablauf-Grundmuster:** Reisemedizinische Beratung → individueller schriftlicher Impf-/Vorsorgeplan →
  Beschaffung über Rezept **(a)** oder patientenindividuelle Bestellung **(b)** → Impftermin
  (häufig Folgetermin; bei (b) als geplanter Termin mit vorbestellter Dosis).
- **(a) Privatrezept:** Patient holt den Impfstoff **gekühlt** in der Apotheke und bringt ihn mit;
  Praxis prüft Kühlketten-Integrität vor Gabe. Null Kapitalbindung, keep-it-simple.
- **(b) Patientenindividuelle Bestellung:** Praxis bestellt die konkrete Dosis, lagert sie kurz im
  validierten Kühlschrank → kontrollierte Kühlkette, bequemer für den Patienten; minimaler Vorlauf.
- **Gelbfieber (nach Zulassung):** vor Ort vorrätig, Gabe + ICVP-Dokumentation in der autorisierten Stelle.
- **Optionale spätere Optimierung:** kleines Arbeits-Lager der nachweislichen Top-Renner (z. B. Hep A,
  Hep A+B, Typhus, Tdap-IPV, FSME) für „Beratung + Impfung am selben Tag", **sobald Volumen bekannt** —
  jetzt **nicht** festgelegt, nur vermerkt.
- **Begründung:** kapitalschonend, kein Verfall/Bruch, geringe Kühlketten-Haftung; klinisch der
  indikationsgetriebene Goldstandard; markenkohärent („Orientierung für gesundes Reisen").
- **Größtes Risiko + Gegenmittel:** Zwei-Termin-Friktion vs. „Sofort-Impfer" (Hausarzt/Apotheke).
  Gegenmittel: klare „früh buchen"-Kommunikation (Vorlaufzeiten), reibungsarme Folgetermin-Buchung,
  optional späteres Mini-Arbeitslager der Renner.

### 0.2 Buchungsprodukte (kundenseitige Terminarten)

| # | Produkt | Inhalt | Abrechnung (Rahmen) | Direkt buchbar? |
|---|---|---|---|---|
| 1 | **Reisemedizinische Beratung** (Flaggschiff) | umfassend, zielbasiert; Impf-/Malaria-/Höhenplan; längerer Slot | Beratung GOÄ Nr. 1/3 (+ ggf. Unters. 7/8) | ja |
| 2 | **Impftermin (direkt)** | bekannter Einzelbedarf/Booster (FSME, Hep, Tdap …); Pflicht-Aufklärung + Injektion | Aufklärung Nr. 1 + Impfung 375–378 (+ Impfstoff) | ja |
| 3 | **Folge-/Impftermin** | Gabe nach Beratung/Bestellung | Impfung 375–378 (+ Impfstoff) | via Beratung |
| 4 | **Malaria- / Höhenmedizin-Beratung** | reine Beratung + Rezept, kein Lager | Beratung Nr. 1/3 | ja oder Teil v. #1 |
| 5 | **Gelbfieber-Termin** | gebaut, **deaktiviert bis Zulassung** | (später) | **nein (gated)** |
| 6 | **Reisemedizin für Unternehmen / Geschäftsreisende** (B2B) | Beratung + Impfungen + Malaria-/Höhenprophylaxe für beruflich Reisende; **Arbeitgeber zahlt**. *Keine* G35-/arbeitsmed. Vorsorge-Bescheinigung. | nach Aufwand (Arbeitgeber-Rechnung) | Firmen-Anfrage |

> **Wichtig:** Auch der „direkte" Impftermin (#2) enthält die **gesetzlich verpflichtende Aufklärung**
> vor jeder Impfung — die Beratung wird daher **nie verschenkt**.

### 0.3 Compliance- & Tonalitäts-Rahmen (verbindlich für alle Phasen)

- **Selbstzahler/IGeL:** Reiseimpfungen sind **keine medizinisch notwendige Heilbehandlung** → vor
  Behandlungsbeginn ist eine **schriftliche Behandlungs-/Kostenvereinbarung** (IGeL-Vereinbarung,
  § 630c/§ 630e BGB) **zwingend**. → muss in Praxisablauf **und** Buchungsflow abgebildet werden.
- **Aufklärungspflicht** vor jeder Impfung (§ 630e BGB) → fester Bestandteil jedes Impftermins.
- **GOÄ-Abrechnung (Rahmen, Details → Phase 2):** Beratung Nr. 1/3, Untersuchung 7/8, Impfung 375–378,
  Steigerungsfaktor; Impfstoff via **Privatrezept** *oder* **Auslage § 10 GOÄ**. ⚠ **GOÄ-Reform beachten** —
  exakte Ziffern/Faktoren/Beträge in Phase 2 gegen die **zum Go-live gültige GOÄ-Fassung** prüfen lassen.
- **HWG:** sachliche **Preisliste zulässig** (reine Preisangaben fallen nicht unters Werbeverbot,
  § 1 Abs. 7 HWG). **Verboten/heikel:** „gratis/Rabatt"-Anpreisung (§ 7 HWG), Heilversprechen/Garantien,
  Angst- oder Vergleichswerbung. Preisliste klar „Abrechnung nach GOÄ" ausschildern.
- **Erstattung — nur faktisch, nie versprechen:** GKV kann Reiseimpfungen als **freiwillige
  Satzungsleistung** (auch Privatreisen) erstatten — je Kasse verschieden, jederzeit änderbar; Patient
  zahlt zunächst selbst und reicht ein. PKV nach Tarif. **Berufliche Reisen → Arbeitgeber zahlt**
  (Fürsorgepflicht/ArbMedVV). Website: „Erstattung abhängig von Kasse/Versicherung — bitte vorab klären."
- **Tonalität:** clever, premium, marketingfreundlich, sachlich. **Nie** „kein Arzt"/Negativ-Labels.
  Konstantin Mayer positiv als Teil des **medizinischen Praxisteams** (Organisation & Ablauf).
- **Personenbezeichnung:** Alexander Mayer = **Arzt** (Approbation), **nicht** „Facharzt".
  Erlaubt: „ärztliche Leitung/Verantwortung", „Arzt — Reise- & Impfmedizin" (Tätigkeitsbeschreibung).
  **Begriff „Facharzt" nirgends** verwenden.
- **B2B-Abgrenzung (ArbMedVV):** Polaris bietet die **reisemedizinische** Leistung für beruflich Reisende
  (jeder approbierte Arzt zulässig; Arbeitgeber zahlt). Die **formale arbeitsmedizinische Vorsorge /
  „G35"-Bescheinigung** bleibt Facharzt Arbeitsmedizin / Zusatzbez. Betriebsmedizin vorbehalten
  (§ 7 ArbMedVV) → **nicht** anbieten/ausstellen; stattdessen Kooperation/Verweis. Begriffe „G35",
  „arbeitsmedizinische Vorsorge", „Tropentauglichkeitsuntersuchung" auf der Website **vermeiden**.
- **Qualifikations-Asset (optional, Marketing):** Fortbildung „Reisemedizinische Gesundheitsberatung"
  (Bundesärztekammer-Curriculum) bzw. DTG-Qualifikation stärkt Vertrauen — **erst ausloben, wenn erworben**.
- **Content-Audit (Phase 4/6):** Bestand auf „Facharzt", „zwei approbierte Ärzt:innen", „kein Arzt",
  unzutreffende Plural-/Status-Behauptungen prüfen und bereinigen.
- **Quellen sichtbar:** `src/data/sources.ts` + App-Provenance (RKI/STIKO · WHO · PEI · DTG ·
  Auswärtiges Amt · WMS), Stand-Datum, jährliche Aktualisierung markiert.

### 0.4 Gelbfieber-Gating (bis Zulassung)

- Seite **Gelbfieber/Gelbfieberimpfung** + Termin-Flow werden **gebaut**, Buchung jedoch **deaktiviert**
  (Hinweis „in Vorbereitung / ab Zulassung").
- Beratung darf Gelbfieber fachlich **empfehlen**, den Bedarf dokumentieren und provisorisch planen
  bzw. an eine autorisierte Stelle verweisen — **ehrlich kommuniziert**.
- `site.ts` Felder `yellowFever.authorizationRef` / `authority` bleiben Platzhalter bis Zulassung (Phase 7).

### 0.5 Verifizierte Fakten (recherchiert + quellenübergreifend gegengecheckt, 2026-06-11)

- **HWG/Preisliste:** reine Preislisten/Preisangaben fallen nicht unter das HWG-Werbeverbot
  (§ 1 Abs. 7 HWG); Vorsicht bei „kostenlos/vergünstigt" (§ 7 HWG). → transparente GOÄ-Preisliste ist ok.
- **GOÄ-Impfabrechnung:** Beratung Nr. 1 (ggf. 3), Untersuchung 7/8, Impfung **375–378**; Impfstoff per
  **Privatrezept** oder **§ 10 Auslage**; **§ 630-BGB-Vereinbarung** vor IGeL zwingend.
  (Quellen: DGPAR, abrechnungsstelle.com, Dt. Ärzteblatt GOÄ-Ratgeber, PVS, IWW — konsistent.)
- **GKV-Erstattung:** keine Pflichtleistung; viele Kassen erstatten freiwillig als **Satzungsleistung**.
  (Quellen: krankenkassen.de, CRM, krankenkasseninfo — konsistent.)
- **Berufliche Reisen:** **Arbeitgeber** trägt Impf-/Malariaprophylaxe-Kosten (ArbMedVV, „G35").
  (Quellen: Haufe, Tropeninstitut, International SOS — konsistent.) → **B2B-Standbein-Chance.**
- **B2B / ArbMedVV-Abgrenzung:** formale arbeitsmed. Vorsorge / „G35" nur durch Facharzt Arbeitsmedizin /
  Zusatzbez. Betriebsmedizin (§ 7 ArbMedVV); **reisemed. Beratung + Reiseimpfungen darf jeder approbierte
  Arzt** (Hausärzte impfen alle Reiseimpfungen außer Gelbfieber). (Quellen: ArbMedVV § 7 [gesetze-im-internet,
  buzer], DTG-Handlungsanleitung G35, Branchenpraxis Reisemedizin für Unternehmen — konsistent.)

### 0.6 Offene Punkte → zugeordnete Phase

- Exakte GOÄ-Ziffern/Faktoren/€ + Tarifzuschnitt (Vollberatung vs. Impftermin vs. Malaria/Höhe) → **Phase 2**
  (mit Abrechnungsstelle validieren; GOÄ-Reform-Stand prüfen).
- Slot-Längen + konkrete Dr.-Flex-Terminarten → **Phase 5**.
- Mini-Arbeitslager der Renner (ja/welche) → **später, nach Volumen**.
- B2B-Standbein → **entschieden: aufgenommen** als „Reisemedizin für Unternehmen" (Entscheidungslog 9; Säule G).

---

## Phase 1 · Angebotsgliederung

> Kunden-sichtbare Cluster. Klinische Tiefe je Thema → Phase 4. Preise → Phase 2. Quellbasis = Reisemed-App (bequellt).

### Überblick — 7 Säulen
- **A** Reisemedizinische Beratung *(Einstieg/Flaggschiff)*
- **B** Reiseimpfungen
- **C** Malariaprophylaxe
- **D** Höhenmedizin
- **E** Weitere Reisevorsorge
- **F** Besondere Reisende *(Querschnitt)*
- **G** Reisemedizin für Unternehmen / Geschäftsreisende *(B2B)*

### A · Reisemedizinische Beratung
- **Was:** individuelle, zielbasierte Beratung; persönlicher Impf-/Malaria-/Höhen-/Vorsorgeplan; ICVP-Planung; schriftlicher Plan.
- **Für wen:** alle Reisenden — Urlaub, Fernreise, Langzeit/Auswanderer, Risikoprofile.
- **Ablauf:** Anamnese + Reiseroute/Aktivität/Dauer → Empfehlung → Beschaffung (Rezept/Bestellung) → Impf-/Folgetermin(e).
- **Beratungspflicht:** ist die Leistung selbst (immer abrechenbar). **Vorlauf:** ideal 4–6 Wochen vor Abreise.
- **Buchbar:** **direkt** (Haupteinstieg). **App:** alle Module.

### B · Reiseimpfungen
Direkter Impftermin nur bei **bekanntem Einzelbedarf/Booster**; alles Komplexe via Beratung (A). Beschaffung: Privatrezept oder patientenindiv. Bestellung; Gelbfieber **gated**.

| Impfung | Typ | Offering-Hinweis | Direkt buchbar? |
|---|---|---|---|
| Gelbfieber | Lebend | nur autorisierte Stelle, ICVP | **gated** (vor Ort nach Zulassung) |
| Hepatitis A | Tot | Reise-Klassiker, breit indiziert | ja |
| Hepatitis B | Tot | Standard + Reise | ja |
| Hepatitis A+B | Tot (Kombi) | Reise-Klassiker | ja |
| FSME | Tot | DE-Risikogeb. + Reise | ja (Booster) |
| Tollwut (präexpositionell) | Tot | Mehrfachschema, Vorlauf | via Beratung |
| Meningokokken ACWY | Tot (Konjugat) | Pilger/Sahel, teils Pflicht | ja |
| Japanische Enzephalitis | Tot | Asien, Mehrfachschema | via Beratung |
| Typhus | Tot (oral: Lebend) | Klassiker | ja |
| Cholera | Tot (oral) | Risikogebiete | ja |
| Poliomyelitis | Tot (IPV) | Auffrischung reisebezogen | ja |
| Tdap-IPV-Booster | Tot | Standard-Auffrischung | ja |
| MMR | Lebend | Standard, vor Reise prüfen | ja |
| Influenza | Tot | saisonal + Reise | ja |
| Pneumokokken | Tot | Risikogruppen | ja |
| Herpes Zoster | Tot | ≥60 / Risiko | ja |
| Dengue (Qdenga®) | Lebend | Premium; Vorerkrankung beachten | via Beratung |
| Chikungunya (Vimkunya®) | Tot (VLP) | neu, Premium | via Beratung |

*„Direkt buchbar?" = darf als fokussierter Impftermin ohne Vollberatung; finale Zuordnung mit Arzt in Phase 5.*

### C · Malariaprophylaxe
- **Was:** Beratung + Rezept; Prophylaxe ja/nein, Standby (SBET), Expositionsschutz. Kein Lager (Rezept).
- **Mittel:** Atovaquon/Proguanil · Doxycyclin · Mefloquin · Artemether/Lumefantrin (SBET) · Chloroquin.
- **Buchbar:** Teil der Beratung (A) oder eigener Slot. **App:** malaria-drugs, malaria-geo, Entscheidungshilfe.

### D · Höhenmedizin
- **Was:** Aufstiegs-/Akklimatisationsplan + Rezept (AMS/HACE/HAPE-Prävention). Reine Beratung + Rezept.
- **Mittel:** Acetazolamid · Dexamethason · Nifedipin · PDE-5-Hemmer. **Buchbar:** Beratung. **App:** altitude.

### E · Weitere Reisevorsorge (beratend, 0 Lager)
Reisedurchfall/SBET · Thrombose-Prophylaxe (Langstrecke) · Mückenschutz · Reiseapotheke · Tollwut-PEP-Verhalten ·
HIV-PEP/PrEP-Beratung · Jetlag · Hitze/Sonne · Tauchen & Fliegen. → meist Teil der Beratung; einzelne als eigener Anlass.

### F · Besondere Reisende (Querschnitt-Schwerpunkt)
Schwangere/Stillende · Kinder · Ältere · Immunsupprimierte/chron. Kranke · Asplenie. → erhöhter Beratungsbedarf,
eigene Info-Seite, **kein** eigenes Buchungsprodukt (läuft über A). **App:** besondere-reisende.

### G · Reisemedizin für Unternehmen / Geschäftsreisende (B2B)
- **Was:** Beratung + Impfungen + Malaria-/Höhenprophylaxe für beruflich Reisende/Entsendungen; **Abrechnung an Arbeitgeber**.
- **Abgrenzung:** **keine** arbeitsmed. Vorsorge / „G35"-Bescheinigung (Betriebsarzt-vorbehalten, § 7 ArbMedVV) → Kooperation/Verweis.
- **Buchbar:** Firmen-Anfrage / Rahmenvereinbarung. **Option:** BÄK-Fortbildung „Reisemed. Gesundheitsberatung" als Vertrauens-Asset.

### Offene Mini-Entscheidungen → Phase 5 (mit Arzt)
- Finale „direkt buchbar vs. nur via Beratung"-Zuordnung je Impfung.
- Ob C/D eigene Slots bekommen oder nur in A laufen.
- B2B-Tiefe: eigene Landingpage + Rahmenvertrag vs. simple Firmen-Anfrage.

---

## Phase 2 · Preisstruktur (GOÄ-konform)

> **Recherchierter Rahmen, kein verbindlicher Tarif.** Alle Beträge sind die rechnerischen
> GOÄ-Werte (Punktwert × Punktzahl × Steigerungsfaktor) bzw. Markt-Richtwerte. **Vor Go-live
> final abnehmen** mit **privatärztlicher Abrechnungsstelle (PVS)** und **Steuerberater**.
> ⚠ **GOÄ-Reform noch nicht in Kraft** (Stand 2026; frühestens 2027) → die zum Go-live
> **gültige GOÄ-Fassung** maßgeblich. Quellenstand: 2026-06-11.

### 2.1 Abrechnungsgrundlagen

- **Privatpraxis → Abrechnung nach GOÄ** (amtliche Gebührenordnung für Ärzte).
- **Punktwert:** **0,0582873 €** (seit 1996 unverändert). Honorar = Punktzahl × Punktwert × Faktor.
- **Steigerungsfaktor (§ 5 GOÄ):** Regelspanne **bis 2,3×** ohne gesonderte Begründung;
  **2,3×–3,5×** nur mit **schriftlicher Begründung** auf der Rechnung; >3,5× nur per
  schriftlicher Honorarvereinbarung. **Alle Beträge unten auf Basis 2,3×** (Standard);
  3,5×-Wert in Klammern, wo relevant.
- **Reiseimpfung = IGeL/Selbstzahler** (keine medizinisch notwendige Heilbehandlung) →
  **schriftliche Behandlungs-/Kostenvereinbarung (§ 630c/§ 630e BGB) vor Behandlungsbeginn zwingend.**
- **Aufklärungspflicht (§ 630e BGB)** vor jeder Impfung — fester Bestandteil jedes Impftermins.

### 2.2 Honorar-Bausteine (GOÄ-Ziffern)

| Ziffer | Leistung | 2,3× | (3,5×) | Hinweis |
|---|---|---|---|---|
| **Nr. 1** | Beratung (auch Impfaufklärung) | **10,72 €** | (16,32 €) | Impfaufklärung nur **neben Nr. 375** zusätzlich abrechenbar |
| **Nr. 3** | Eingehende Beratung (≥ 10 Min) | **20,11 €** | (30,60 €) | nur **allein** oder mit Untersuchung 5/6/7/8/800/801; nicht neben Nr. 1 am selben Tag |
| **Nr. 30/34** | **Umfangreiche Beratung/Erörterung ≥ 20 Min** (ggf. analog) | **~40–50 €** | | die „ausführliche Reiseberatung" der Profis (s. 2.4b); als **IGeL-Selbstzahler-Pauschale** |
| Nr. 6 | Untersuchung (Teil-Status) | 13,41 € | | optional |
| **Nr. 5** | Symptombez. Untersuchung (**Inspektion/Allgemeinzustand**) | **10,72 €** | (16,32 €) | **Impftauglichkeit** privat gesondert berechenbar; **kein „Abhören" nötig** — Standard-Baustein der Vollberatung |
| Nr. 7 | Untersuchung Organsystem (voller Status) | ~21,45 € | (~32,64 €) | **nur wenn tatsächlich erbracht** (z. B. kardiopulmonal vor Lebendimpfung) — nicht pauschal |
| Nr. 8 | Ganzkörperstatus | ~34,86 € | | umfangreichere Untersuchung |
| **Nr. 375** | Schutzimpfung i. m./s. c. (inkl. Impfpass-Eintrag) | **10,72 €** | (16,32 €) | **je Impfung/Injektion** |
| Nr. 376 | Schutzimpfung **oral** (inkl. Beratungsgespräch) | 10,72 € | | z. B. Typhus oral, Cholera oral |
| **Nr. 377** | Zusatzinjektion bei **Parallelimpfung** | **6,70 €** | (10,20 €) | jede **weitere zeitgleiche** Injektion |
| Nr. 378 | Simultanimpfung (Tetanus aktiv + passiv) | 16,09 € | | Sonderfall Wundstarrkrampf |
| **Nr. 70** | Kurze Bescheinigung / **Gelbfiebersiegel (ICVP)** | **~5,36 €** | | nur Gelbfieber (internationaler Impfnachweis) |
| **Nr. 75** | **Ausführlicher schriftl. Bericht / individueller Reiseplan** | **~17,43 €** | (~26,52 €) | greifbares Deliverable; **sauberer Hebel Richtung 60 €** (s. 2.4c) |
| Nr. 2 | Wiederholungs-/Privatrezept (ohne erneute Konsultation) | ~3,15 € | | kleiner Zusatz |

**Abrechnungslogik (Kernregeln):**
- **Impftauglichkeits-Untersuchung ist privat gesondert berechenbar** (Nr. 5–8) — **anders als in der GKV.**
  → an jedem Erst-/Impftermin ein legitimer, wertiger Baustein, **wenn tatsächlich durchgeführt & dokumentiert**.
- **Vollberatung ~60 € — sauber, ohne Analog-Risiko, ohne „Abhören":** **Nr. 3 (↑ Faktor bis 3,5×) + symptombez. Untersuchung Nr. 5 (Inspektion/Impftauglichkeit) + schriftl. Impfplan Nr. 75.**
  (Nr. 3 ist ausdrücklich **neben einer Untersuchung 5/6/7/8** abrechenbar.) Bsp.: Nr. 3 @ 3,5× (30,60 €) + Nr. 5 (10,72 €) + Nr. 75 (17,43 €) = **~59 €**.
  **Nr. 7** (voller Organstatus, ~21 €) **nur**, wenn tatsächlich erbracht (z. B. kardiopulmonal vor Lebendimpfung) — **nicht** pauschal. ⚠ **„Nr. 30 analog" meiden** — wird von Kostenträgern häufig beanstandet (§ 6 Abs. 2 GOÄ: „Beratung bleibt Beratung", längere Dauer macht keine andere Leistung).
- **Impfaufklärung als Nr. 1 nur neben Nr. 375.** Bei **Nr. 376/377/378 ist die Beratung enthalten** → nicht zusätzlich.
- **Mehrfachimpfung am selben Tag:** erste Injektion **Nr. 375**, jede weitere **Nr. 377** (6,70 €).
  (Nr. 1 und Nr. 377 nicht nebeneinander — Abrechnungsstelle wählt die güns­tigste zulässige Kombi.)
- Steigerungsfaktor 2,3×→3,5× hebt alle Beträge **mit kurzer Begründung** auf der Rechnung (Zeit/Schwierigkeit/Komplexität);
  > 3,5× nur per schriftlicher **Honorarvereinbarung § 2 GOÄ** (vorab signiert) — späterer Premium-Hebel.

### 2.3 Impfstoff-Beschaffung & -Berechnung

- **(a) Privatrezept:** Patient kauft den Impfstoff gekühlt in der Apotheke → **kein Posten auf der
  Praxisrechnung**; Praxis berechnet nur das ärztliche Honorar (Aufklärung + Injektion 375/377).
- **(b) Auslage § 10 GOÄ:** Praxis legt den (patientenindividuell bestellten) Impfstoff aus →
  **1 : 1 als Auslage** auf der Rechnung (Einkaufspreis, **kein Aufschlag**).
- **Gelbfieber (nach Zulassung):** **Stamaril® ≈ 72 €** Apothekenpreis (vor Ort vorrätig; § 10 oder Rezept).
- Auf der Website **Impfstoffkosten immer getrennt vom Honorar** ausweisen (kein „Paketpreis" suggerieren).

### 2.4 Kundenseitige Richtwerte (Preislisten-Basis)

> Spannen, weil Faktor (2,3×–3,5×) und Bausteine je Fall variieren. Mappt auf Buchungsprodukte (0.2).
> **Impfstoff jeweils separat** (Rezept/Auslage), wo nicht anders vermerkt. **Marktziel:** nicht unter
> marktüblich — Vollberatung **Ziel ~60 €** (Floor 50 €; Markt ~40–60 €, s. 2.4c), Erstimpfung deutlich über dem reinen Folge-Impftermin.

| Produkt | GOÄ-Bausteine | **Honorar (bleibt bei uns)** | Impfstoff |
|---|---|---|---|
| **Reisemed. Vollberatung** (Flaggschiff, > 20 Min, **immer inkl. schriftl. Impfplan + Impftauglichkeit**) | **Nr. 3 (↑ Faktor) + Nr. 5 (Inspektion/Impftauglichkeit) + Nr. 75 (schriftl. Impfplan)** | **~ 55–65 €** | separat (Rezept) |
| …**+ Rezept-Zusatz** (Malaria/Standby etc., *während* der Beratung entschieden) | höherer Faktor auf Nr. 3 / Nr. 2 | **+ ~ 5–10 €** | Rezept (Apotheke) |
| …**2./3. Person**, **gleiches Reiseziel** (eigene Rechnung; eigene Impftauglichkeit + eigener Impfplan, **ohne** geteilte Zielrecherche) | Nr. 3 + Nr. 5 (+ Nr. 75) | **~ 25–35 € je Person** | separat |
| **Malaria-/Höhen-Beratung** (eigener Termin, inkl. Rezept) — **flat je Person** | Nr. 3 (+ ggf. Nr. 5) | **~ 30–40 €** | Rezept (Apotheke) |
| Kurz-/Fokusberatung (1 Frage) | Nr. 1 | ~ 11–16 € | — |
| **Erst-Impftermin FSME** *(direkt buchbar, ohne Vollberatung)* | Nr. 1 + Nr. 5 + Nr. 375 | **~ 32–45 €** | + Impfstoff (FSME ~47 €) |
| **Reiner Folge-Impftermin** (Plan steht) | Nr. 1 + Nr. 375 | **~ 20 €** | + Impfstoff |
| …jede weitere zeitgleiche Impfung | Nr. 377 | + ~ 7 € | + Impfstoff |
| **Gelbfieber-Erstimpfung** *(gated, direkt buchbar)* | Nr. 1 + Nr. 5 + Nr. 375 + **Nr. 70** (Siegel) | **Honorar ~ 40–48 € + Stamaril ~ 72 €** → ~ 110–120 € all-in | vor Ort |
| **B2B / Unternehmen** | nach Aufwand | **individuelles Angebot / Rahmenvertrag** | je Leistung |

**Der „Untersuchungs"-Baustein — ehrlich gehalten:** bei uns = **Inspektion (Allgemeinzustand, ggf. Impfstelle) + Impftauglichkeits-Beurteilung** = **Nr. 5** — **kein Abhören, kein Ganzkörperstatus**. Nr. 5 ist als Impftauglichkeit **privat gesondert berechenbar** (anders als GKV), **wenn tatsächlich erbracht & dokumentiert**. **Nr. 7** (voller Organstatus, ~21 €) nur, wenn aus echtem Anlass wirklich durchgeführt — nicht pauschal.

**Der schriftliche Impfplan ist das Herzstück:** Die Vollberatung liefert **immer** einen **individuellen, schriftlichen Impf-/Reiseplan** (Nr. 75). Damit ist die ~60 € **auch dann verdient, wenn der Patient sich gegen die Impfung entscheidet** — die ärztliche Leistung (Beratung + Prüfung + Plan) wurde erbracht. Die **Impfung selbst** (Nr. 375) wird **separat** am Impftermin abgerechnet.

**Zwei Impf-Szenarien — der Schlüssel gegen „nur 20 €":**
- **Erst-Impftermin direkt** (jemand bucht gezielt FSME/Gelbfieber, **ohne** vorherige Vollberatung): **volle Leistung** — Aufklärung + Impftauglichkeit (Nr. 5) + Impfung (+ bei Gelbfieber Siegel Nr. 70) → **~ 32–48 € Honorar**, **nicht** 20 €.
- **Reiner Folge-Impftermin** (Impfplan steht bereits aus der Vollberatung, Patient kommt nur zur Spritze): **~ 20 €** — bewusst schlank.

**Mehrere Personen (Paar/Familie), gleiches Reiseziel:** **jede Person = eigener Behandlungsvertrag + eigene Rechnung** (GOÄ ist patientenbezogen). Kein „Familienrabatt" (HWG). Die **geteilte Zielrecherche** fällt nur einmal an → für Person 2/3 bleibt die **individuelle** Leistung (eigene Beratung Nr. 3 + Impftauglichkeit Nr. 5 + **eigener** Impfplan) → natürlicherweise **~ 25–35 € je Person**. **Nur bei gleichem Ziel**; unterschiedliche Ziele = **je eine volle Vollberatung**.

**Rezept innerhalb einer Beratung vs. eigener Beratungstermin:** Wird ein Rezept (Malaria/Standby) **während** der laufenden Vollberatung entschieden, ist das **kein** großer Extra-Posten — die zusätzliche Wirkstoff-/Risikoabwägung rechtfertigt einen **höheren Faktor** (bzw. **Nr. 2**, 3,15 €) → **+ ~ 5–10 €**. Ein **eigener** Malaria-/Höhen-Termin kostet dagegen **mehr (~ 30–40 €)**, weil dort die **ganze Beratung** neu erbracht wird — flat je Person (keine 2.-Person-Staffel).

*Markt-Referenz: Vollberatung ~50 €; Gelbfieber-Honorar-Paket ~48 € (Uni Greifswald) + Impfstoff; all-in ~80–120 €.
Plausibilitäts-Anker — Polaris rechnet GOÄ-basiert.*

### 2.4b Marktvergleich (Peer-Abrechnungsmodelle) & Ertragslogik

**Recherchierte Modelle vergleichbarer Reise-/Privatpraxen (2026-06-11):**
- **Modell A — Klinik/Institut (Charité, Tropeninstitut):** Beratung **Nr. 3 ~20 €**; umfangreiche
  reisemed. Beratung teils als **„Nr. 30 analog" ~50 €** — **⚠ häufig von Kostenträgern beanstandet**
  (§ 6 Abs. 2 GOÄ); **+ ~10 € je Impfung** (Nr. 375); **+ Impfstoff**.
- **Modell B — viele Reisepraxen:** **Pauschal ~30 € Beratung + Impfplan + Reiseunterlagen**,
  **+ ~10 € je Impfleistung**, **+ Impfstoff**.
- **Modell C — Gelbfieber-Paket (Uni Greifswald):** **~48 € Honorar** (Kurzberatung + Impftauglichkeit
  + Impfleistung + Gelbfiebersiegel) **+ Impfstoff**. → bestätigt: Gelbfieber-Honorar ~48 €, nicht ~20 €.
- **Referenz-Endpreise:** Gelbfieber all-in **82–120 €**; Malaria-Rezept **~20 €**; FSME-Impfstoff ~47 €.
- **Fazit + empfohlenes Polaris-Modell:** Unser GOÄ-Baukasten **deckt den Markt 1:1** — **ohne** Analog-Risiko:
  Vollberatung **Nr. 3 (↑ Faktor) + Nr. 5 (Inspektion/Impftauglichkeit) + Nr. 75 (schriftl. Impfplan) → ~55–65 €**;
  je Impfung Nr. 375 (~10 €); Gelbfieber-Paket inkl. Nr. 70; **Impfstoff durchlaufend**.
  *(„Nr. 30 analog" bewusst gemieden; **kein Ganzkörperstatus** behauptet — schriftlicher Impfplan + ehrliche Inspektion erreichen das Honorar rechtssicher.)*

**Ertragslogik (wichtig fürs Geschäftsmodell):**
- **Einnahme = Honorar.** Am **Impfstoff verdient die Praxis nichts**: Privatrezept = keine Marge;
  § 10-Auslage = **1 : 1 ohne Aufschlag**. → Die Marge liegt in **Beratung + Impf-Honorar + Volumen + B2B**,
  bewusst **nicht** im Impfstoff. Das steuert Preis-, Slot- und Beratungslogik.
- **Faustzahl:** typischer Reisepatient (Vollberatung + 1–2 Impfungen am Impftermin) ≈ **60–90 € Honorar**
  (Impfstoff obendrauf, durchlaufend). Lukrativität skaliert über **Beratungstiefe + Impfplan (Nr. 3 + Nr. 5 + Nr. 75)**,
  **Terminvolumen** und **B2B**.
- **Impftauglichkeits-Untersuchung** (i. d. R. **Nr. 5** — Inspektion/Impftauglichkeit, **kein Abhören**) ist **privat gesondert berechenbar** (anders als GKV) und gehört
  medizinisch zu jedem Erst-/Impftermin (v. a. vor Gelbfieber-Lebendimpfstoff) → **wertiger Standard-Baustein**,
  **wenn tatsächlich durchgeführt & dokumentiert**. Exakte Same-Session-Kombis von der Abrechnungsstelle abnehmen lassen
  — **insb. Nr. 75**: ob der patienten­individuelle **schriftliche Impfplan** als Nr. 75 berechnet wird (klassisch = Befundbericht)
  oder alternativ über einen höheren **Faktor auf Nr. 3** kompensiert wird, **vor Go-live mit der Abrechnungsstelle bestätigen**.

### 2.4c Wie kommt eine **reine Beratung (ohne Impfung) auf ~60 €**? — Peer-Tarife & Polaris-Rezept

**Konkrete Beratungs-Stufen der Profis (abgerufen 2026-06-11):**

| Anbieter | „kleine" Beratung | „große" reisemed. Beratung | wie zusammengesetzt |
|---|---|---|---|
| **Charité** (Internat. Gesundheit) | **20,11 €** (Nr. 3) | Beratung **+ Impfplan + Impftauglichkeit ~30,82 €**; **ausführlich > 20 Min ~40,22 €** | gestaffelte Beratungs­ziffer (Nr. 3 → Nr. 30/analog), höherer Faktor |
| **Infektiologikum** | **~20,10 €** (Nr. 3 @ 1,8×) | **~50,00 €** (Nr. 30 analog @ 2,3×) | eine **umfangreiche Beratungs­ziffer** als Pauschale |

**Das Muster dahinter (so erreicht man 50–60 € „auch ohne Impfung"):**
1. **Höherwertige Beratungs­ziffer** statt der kleinen Nr. 1: **Nr. 3** (eingehend, ≥ 10 Min) bzw. für ≥ 20 Min die
   **Erörterungs-/Beratungsziffer Nr. 30/34** (teils „analog"). Das allein bringt 20 → 40–50 €.
2. **Steigerungsfaktor** hochsetzen (bis 3,5× mit kurzer schriftlicher Begründung auf der Rechnung) — eine echte,
   komplexe Reiseberatung **trägt** diese Begründung (mehrere Ziele/Vorerkrankungen/Impfhistorie).
3. **Echte Bausteine danebenlegen**, die in einer Vollberatung ohnehin anfallen — **das ist Polaris' sauberer Weg über 60 €**:
   - **Inspektion/Impftauglichkeit Nr. 5** (Allgemeinzustand, ggf. Impfstelle — **kein Abhören/Ganzkörperstatus**) → **+ ~11–16 €**
   - **schriftlicher, individueller Impf-/Reiseplan als Bericht Nr. 75** → **+ ~17–27 €** (greifbares Deliverable — das *Herzstück*!)
   - **Untersuchung Nr. 7** (voller Organstatus) **nur**, wenn aus echtem Anlass tatsächlich durchgeführt → + ~21–33 €
   - ggf. **Wiederholungs-/Privatrezept Nr. 2** → **+ ~3 €**

> **Polaris-Rezept „Vollberatung ~60 €" (ohne Analog-Risiko, ohne „Abhören"):**
> **Nr. 3 (↑ Faktor)** ~21–31 € **+ Nr. 5 Inspektion/Impftauglichkeit** ~11–16 € **+ schriftl. Impfplan Nr. 75** ~17–27 €
> → **~ 49–74 €** (Beispiel 3,5× / 2,3× / 2,3× = **~59 €**) — alles aus echten, dokumentierten Leistungen. **Kein** „Nr. 30 analog", **kein** Ganzkörperstatus behauptet.

**Warum das rechtssicherer ist als der Charité-/Infektiologikum-Weg:** „Nr. 30 analog" wird von Kostenträgern
häufig beanstandet (längere Dauer ≠ andere Leistung). Im **reinen Selbstzahler-/IGeL-Fall** darf man den
**vereinbarten Betrag dennoch berechnen** — das Beanstandungs-Risiko trifft nur die **spätere Erstattung des Patienten**,
nicht das Recht zu liquidieren. Polaris erreicht **denselben Betrag** aber über **eingehende Beratung + ehrliche Inspektion/Impftauglichkeit +
schriftlichen Impfplan** → für den Patienten **erstattungs­robuster** und für uns ein **höherwertiges Produkt** mit echtem, mitgegebenem Deliverable.

### 2.5 Erstattung (nur faktisch, **nie versprechen**)

- **GKV:** keine Pflichtleistung; viele Kassen erstatten Reiseimpfungen **freiwillig als Satzungsleistung**
  (je Kasse verschieden, jederzeit änderbar). Patient **zahlt zunächst selbst** und reicht die Rechnung ein.
- **PKV:** nach individuellem Tarif.
- **Berufliche Reisen:** **Arbeitgeber** trägt die Kosten (Fürsorgepflicht/ArbMedVV) → B2B.
- **Website-Wording:** „Eine Erstattung hängt von Ihrer Kasse/Versicherung ab — bitte vorab klären."

### 2.6 Preislisten-Darstellung auf der Website (HWG-konform)

- Eigene Seite **„Kosten & Abrechnung — Preise nach GOÄ"**; aus jeder Leistungsseite verlinkt.
- **Transparente Richtwerte/Spannen**, klar gekennzeichnet: „Abrechnung nach GOÄ; der konkrete
  Rechnungsbetrag richtet sich nach Aufwand und Steigerungsfaktor im Einzelfall."
- **§ 630-Hinweis:** „Vor jeder Selbstzahler-Leistung erhalten Sie eine schriftliche Kostenvereinbarung."
- **Impfstoffkosten separat** ausweisen (Rezept/Auslage), Gelbfieber-Impfstoff-Preis erst zur Freischaltung.
- **HWG:** sachlich, keine „gratis/Rabatt/günstig"-Sprache (§ 7 HWG), keine Heilversprechen, keine
  Vergleichs-/Angstwerbung. Reine Preisangaben sind zulässig (§ 1 Abs. 7 HWG).
- **Erstattungs-Hinweis** (2.5) sichtbar, neutral.

### 2.7 Verifizierte Fakten + Quellen (2026-06-11)

- **Punktwert 0,0582873 €**; **GOÄ-Reform noch nicht in Kraft** (frühestens 2027).
  (Quellen: abrechnungsstelle.com, Bundesärztekammer GOÄ-Ratgeber — konsistent.)
- **Impfziffern 2,3×:** Nr. 375 = **10,72 €**, Nr. 376 = 10,72 €, Nr. 377 = **6,70 €** (3,5× = 10,20 €),
  Nr. 378 = 16,09 €. **Impfaufklärung Nr. 1 nur neben 375**; bei 376–378 enthalten.
  (Quellen: medas.de, koelner-abrechnungsdienst.de, abrechnungsstelle.com, privadis.de — konsistent.)
- **Beratung:** Nr. 1 = **10,72 €** (3,5× = 16,32 €); Nr. 3 (≥ 10 Min) = **20,11 €** (3,5× = 30,60 €),
  nur allein oder mit Untersuchung. (Quellen: abrechnungsstelle.com GOÄ-1/GOÄ-3, virchowbund.de — konsistent.)
- **Gelbfieber:** **Stamaril® ≈ 72,15 €** Apothekenpreis; Markt-Praxispreise variieren.
  (Quellen: medizinfuchs.de, shop-apotheke.com, DocMorris, Praxis-West Mayen — konsistent.)
- **Peer-Abrechnungsmodelle:** Beratung Nr. 3 ~20 € / „Nr. 30 analog" ~50 €; Pauschalmodell ~30 € + ~10 €/Impfung
  + Impfstoff; Gelbfieber all-in 82,34 €; Malaria-Rezept ~20 €. (Quellen: doc-k.com, infektiologikum.de,
  reisemedizinpraxis.de, Charité internationale-gesundheit, deutschesarztportal.de, medical-tribune.de — konsistent.)
- **Impftauglichkeits-Untersuchung (Nr. 5–8) privat gesondert berechenbar** (anders als GKV); **Nr. 3 neben
  Untersuchung 5/6/7/8** zulässig → Vollberatung **Nr. 3 + Nr. 5 + Nr. 75 (schriftl. Impfplan) ≈ 55–65 €**; **Gelbfieber-Siegel als Nr. 70**;
  **schriftl. Reisebericht/Impfplan = Nr. 75 (~17,43 €)**; Untersuchungstiefe **ehrlich** (Inspektion = Nr. 5, kein pauschaler Ganzkörperstatus);
  **Gelbfieber-Honorar-Paket ~48 €** (Uni Greifswald). **„Nr. 30 analog" häufig beanstandet** (§ 6 Abs. 2 GOÄ).
  **Mehr-Personen/Familie: jede Person einzeln** abgerechnet. (Quellen: aerzteblatt.de GOÄ-Ratgeber Impfungen,
  abrechnungsstelle.com/impfung, koelner-abrechnungsdienst.de, medizin.uni-greifswald.de, iww.de, dgpar.de — konsistent.)

### 2.8 Offene Punkte → zugeordnete Phase / Validierung

- **Exakte Ziffern-Kombinationen je Terminart + Steigerungsfaktor-Politik** → mit **PVS/Abrechnungsstelle**
  final festzurren (insb. Nr. 1 vs. 377 bei Mehrfachimpfung; Untersuchungsziffern in der Vollberatung).
- **Gelbfieber-Endpreis** → zur **Freischaltung (Phase 7)** final kalkulieren.
- **B2B-Preismodell** (Stundensatz/Pauschale/Rahmenvertrag) → mit Steuerberater bei B2B-Ausbau.
- **Konkrete €-Werte für die Website-Preisliste** → in **Phase 4** (Content) festlegen, nach Validierung.
