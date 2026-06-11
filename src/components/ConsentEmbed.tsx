/**
 * Wiederverwendbares 2-Klick-Consent-Gate für externe iframe-Einbettungen
 * (Online-Terminbuchung, Anfahrts-Karte …) — DSGVO-konform.
 *
 * Datenschutz-Kernprinzip: Das Anbieter-iframe wird ERST nach aktiver
 * Einwilligung gerendert – vorher gibt es keinerlei Drittanbieter-Request
 * (kein iframe, kein Skript, keine Vorschau vom Anbieter-Server). Die
 * Einwilligung wird ausschließlich lokal (localStorage) gespeichert und ist
 * jederzeit widerrufbar. Solange `embedUrl` leer ist (kein Anbieter-Konto/AVV),
 * erscheint ein neutraler Platzhalter ganz ohne externe Verbindung.
 *
 * Jede Einbettung erhält über `storageKey` eine EIGENE Einwilligung – die
 * Zustimmung zum Terminanbieter gilt nicht automatisch für den Kartendienst
 * (getrennte Verarbeiter). Sämtliche URLs/Texte kommen als Props (aus
 * `site.*` bzw. der jeweils aufgelösten Sprache).
 */
import { useEffect, useState } from 'react';

/** In der jeweiligen Sprache aufgelöste Oberflächentexte. */
export interface ConsentEmbedLabels {
  consentTitle: string;
  /** Enthält den Platzhalter `{provider}`, der durch den Anbieternamen ersetzt wird. */
  consentLead: string;
  consentPoints: string[];
  privacyIntro: string;
  providerPrivacyLabel: string;
  ourPrivacyLabel: string;
  loadButton: string;
  externalLabel: string;
  iframeTitle: string;
  loadedNote: string;
  revokeLabel: string;
  placeholderTitle: string;
  placeholderBody: string[];
}

export interface ConsentEmbedProps {
  /** Eindeutiger Schlüssel je Einbettung (z. B. „booking", „map") – getrennte Einwilligung. */
  storageKey: string;
  /** Anbietername (z. B. „Dr. Flex", „OpenStreetMap"). */
  provider: string;
  /** Einbettungs-URL des Widgets. Leer = Platzhalter, kein Embed. */
  embedUrl: string;
  /** Datenschutzerklärung des Anbieters (optional). */
  providerPrivacyUrl: string;
  /** Direkter Outbound-Link beim Anbieter als Fallback (optional). */
  externalUrl: string;
  /** Eigene Datenschutzerklärung (interner Pfad). */
  ourPrivacyUrl: string;
  /** Tailwind-Klassen für das iframe (Höhe etc.). */
  frameClassName?: string;
  labels: ConsentEmbedLabels;
}

export default function ConsentEmbed({
  storageKey,
  provider,
  embedUrl,
  providerPrivacyUrl,
  externalUrl,
  ourPrivacyUrl,
  frameClassName = 'h-[760px] w-full border-0',
  labels,
}: ConsentEmbedProps) {
  const key = `polaris:consent:${storageKey}`;
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(key) === '1') setConsented(true);
    } catch {
      /* localStorage nicht verfügbar (z. B. strikte Privatsphäre-Einstellungen) */
    }
  }, [key]);

  function accept() {
    try {
      window.localStorage.setItem(key, '1');
    } catch {
      /* Persistenz optional – Einwilligung gilt zumindest für diese Sitzung. */
    }
    setConsented(true);
  }

  function revoke() {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* nichts zu tun */
    }
    setConsented(false);
  }

  // 1) Noch kein Anbieter-Konto hinterlegt → neutraler Platzhalter, KEIN externer Request.
  if (!embedUrl) {
    return (
      <div className="card">
        <h3 className="font-display text-xl text-petrol-900">{labels.placeholderTitle}</h3>
        <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">
          {labels.placeholderBody.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-5 inline-flex"
          >
            {labels.externalLabel}
          </a>
        ) : null}
      </div>
    );
  }

  // 2) Einwilligung erteilt → Anbieter-iframe laden.
  if (consented) {
    return (
      <div>
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
          <iframe src={embedUrl} title={labels.iframeTitle} loading="lazy" className={frameClassName} />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-soft">
          <p>{labels.loadedNote}</p>
          <button
            type="button"
            onClick={revoke}
            className="font-semibold text-petrol-800 underline decoration-gold-500 underline-offset-4 hover:text-petrol-900"
          >
            {labels.revokeLabel}
          </button>
        </div>
      </div>
    );
  }

  // 3) Standard → Einwilligungsdialog (noch KEIN Drittanbieter-Request).
  const leadParts = labels.consentLead.split('{provider}');

  return (
    <div className="card">
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-petrol-800/[0.06] text-petrol-700"
        aria-hidden="true"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
          <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" strokeLinecap="round" />
          <path d="M12 14v2.5" strokeLinecap="round" />
        </svg>
      </span>

      <h3 className="mt-4 font-display text-xl text-petrol-900">{labels.consentTitle}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">
        {leadParts[0]}
        <strong className="font-semibold text-petrol-900">{provider}</strong>
        {leadParts[1] ?? ''}
      </p>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
        {labels.consentPoints.map((point, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-ink-soft">
        {labels.privacyIntro}{' '}
        {providerPrivacyUrl ? (
          <>
            <a
              href={providerPrivacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-petrol-800 underline decoration-gold-500 underline-offset-4 hover:text-petrol-900"
            >
              {labels.providerPrivacyLabel}
            </a>
            {' · '}
          </>
        ) : null}
        <a
          href={ourPrivacyUrl}
          className="font-medium text-petrol-800 underline decoration-gold-500 underline-offset-4 hover:text-petrol-900"
        >
          {labels.ourPrivacyLabel}
        </a>
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="button" onClick={accept} className="btn-gold">
          {labels.loadButton}
        </button>
        {externalUrl ? (
          <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            {labels.externalLabel}
          </a>
        ) : null}
      </div>
    </div>
  );
}
