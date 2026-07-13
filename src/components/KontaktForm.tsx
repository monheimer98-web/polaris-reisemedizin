/**
 * Kontaktformular (React-Insel) für die „Kontakt & Anfahrt"-Seite. Leitet eine
 * Nachricht der Website-Besucher:in per E-Mail an die Praxis weiter – KEINE
 * Terminbuchung, KEINE Patientenakte, KEINE Datenbank.
 *
 * Datenschutz-/Sicherheitsmodell (identisch zu `BookingForm`):
 *  - Reine First-Party-Verarbeitung: POST an `endpoint` (Reverse-Proxy vor der
 *    praxis-app, Route `/api/kontakt`). Kein Drittanbieter, kein iframe, kein
 *    externes Skript – daher kein 2-Klick-Gate nötig (die Verbindung entsteht
 *    erst beim aktiven Absenden, und zwar zur eigenen Infrastruktur). Die
 *    Einwilligung holen wir per Pflicht-Checkbox ein.
 *  - KEIN Token im Browser: Das BOOKING_TOKEN injiziert der Reverse-Proxy
 *    serverseitig als `X-Booking-Token`-Header.
 *  - Übertragung als `application/x-www-form-urlencoded` (simple request → kein
 *    CORS-Preflight). Empfehlung: SAME-ORIGIN-Endpunkt (z. B. „/api/kontakt").
 *  - Anti-Spam: verstecktes Honeypot-Feld; zusätzlich Rate-Limiting im Backend.
 *  - Solange `endpoint` leer ist (vor Go-live), zeigt die Insel einen neutralen
 *    Platzhalter mit Telefon/E-Mail-Hinweis – ganz ohne Netzwerk-Request.
 *
 * PFLICHTFELDER: Name, E-Mail (gültig) und Nachricht. Die E-Mail ist bewusst
 * zwingend – ohne gültige Absenderadresse kann die Praxis nicht antworten. Sie
 * wird sowohl hier (Client) als auch serverseitig (`/api/kontakt`) erzwungen.
 *
 * Die Feldnamen im POST-Body entsprechen dem Backend-Vertrag der praxis-app
 * (`name`, `email`, `telefon`, `betreff`, `nachricht`). Alle Texte kommen
 * sprachaufgelöst als Props – die Sprachlogik bleibt im Astro-Layer.
 */
import { useId, useRef, useState } from 'react';
import type { ChangeEvent, SyntheticEvent } from 'react';

/** In der jeweiligen Sprache aufgelöste Oberflächentexte. */
export interface KontaktFormStrings {
  heading: string;
  intro: string;
  labels: {
    name: string;
    email: string;
    telefon: string;
    betreff: string;
    nachricht: string;
    nachrichtPlaceholder: string;
    optional: string;
  };
  /** Einwilligungstext; enthält den Platzhalter `{privacy}` für den Link. */
  consentLabel: string;
  consentLinkLabel: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successBody: string;
  errorTitle: string;
  errorBody: string;
  requiredHint: string;
  emailInvalid: string;
  consentRequired: string;
  privacyNote: string;
  honeypotLabel: string;
  placeholderTitle: string;
  placeholderBody: string[];
}

export interface KontaktFormProps {
  /** POST-Ziel (Reverse-Proxy vor der praxis-app). Leer = Platzhalter, kein Request. */
  endpoint: string;
  /** Interner Pfad zur eigenen Datenschutzerklärung (für den Einwilligungstext). */
  privacyUrl: string;
  /** Sprachaufgelöste Oberflächentexte. */
  text: KontaktFormStrings;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';
type AnyChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const EMPTY = {
  name: '',
  email: '',
  telefon: '',
  betreff: '',
  nachricht: '',
};
type Values = typeof EMPTY;

/** Pflichtfelder (vom Backend ebenfalls erzwungen). */
const REQUIRED: (keyof Values)[] = ['name', 'email', 'nachricht'];

/** Einfache, robuste E-Mail-Syntaxprüfung (identisch zur Backend-Regel). */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Kleines, markenkonformes Texteingabefeld (input). */
function TextField(props: {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: AnyChange) => void;
  required?: boolean;
  invalid?: boolean;
  optionalLabel?: string;
  autoComplete?: string;
  className?: string;
}) {
  const { id, name, label, type = 'text', value, onChange, required, invalid, optionalLabel, autoComplete, className } = props;
  return (
    <div className={className}>
      <label className="field-label" htmlFor={id}>
        {label}{' '}
        {required ? (
          <span className="text-gold-700" aria-hidden="true">
            *
          </span>
        ) : optionalLabel ? (
          <span className="font-normal text-ink-soft">{optionalLabel}</span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="field-input"
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required || undefined}
        aria-invalid={invalid || undefined}
        autoComplete={autoComplete}
      />
    </div>
  );
}

export default function KontaktForm({ endpoint, privacyUrl, text }: KontaktFormProps) {
  const [values, setValues] = useState<Values>({ ...EMPTY });
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [validationMsg, setValidationMsg] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const fid = (n: string) => `${uid}-${n}`;

  // Vor Go-live: kein Endpunkt → neutraler Platzhalter, KEIN Netzwerk-Request.
  if (!endpoint) {
    return (
      <div className="card">
        <h3 className="font-display text-xl text-petrol-900">{text.placeholderTitle}</h3>
        <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">
          {text.placeholderBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    );
  }

  const set = (field: keyof Values) => (e: AnyChange) => setValues((v) => ({ ...v, [field]: e.target.value }));
  const missing = (field: keyof Values) => showErrors && REQUIRED.includes(field) && !values[field].trim();
  const emailBad = showErrors && !!values.email.trim() && !EMAIL_RE.test(values.email.trim());

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (status === 'submitting') return;

    // Honeypot ausgefüllt → mit hoher Wahrscheinlichkeit ein Bot. Wir tun so, als
    // sei alles in Ordnung (ohne zu senden), damit der Bot keine Rückmeldung erhält.
    if (honeypot.trim()) {
      setStatus('success');
      return;
    }

    const firstMissing = REQUIRED.find((f) => !values[f].trim());
    if (firstMissing) {
      setShowErrors(true);
      setValidationMsg(text.requiredHint);
      formRef.current?.querySelector<HTMLElement>(`[name="${firstMissing}"]`)?.focus();
      return;
    }
    // E-Mail ist Pflicht UND muss gültig sein – ohne sie kann die Praxis nicht antworten.
    if (!EMAIL_RE.test(values.email.trim())) {
      setShowErrors(true);
      setValidationMsg(text.emailInvalid);
      formRef.current?.querySelector<HTMLElement>('[name="email"]')?.focus();
      return;
    }
    if (!consent) {
      setShowErrors(true);
      setValidationMsg(text.consentRequired);
      formRef.current?.querySelector<HTMLElement>('[name="consent"]')?.focus();
      return;
    }

    setValidationMsg('');
    setStatus('submitting');

    // Body-Feldnamen = Backend-Vertrag der praxis-app. KEIN Token (Proxy injiziert es).
    const body = new URLSearchParams();
    body.set('name', values.name.trim());
    body.set('email', values.email.trim());
    body.set('nachricht', values.nachricht.trim());
    if (values.telefon.trim()) body.set('telefon', values.telefon.trim());
    if (values.betreff.trim()) body.set('betreff', values.betreff.trim());

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body,
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !data || data.ok !== true) throw new Error('contact request failed');
      setStatus('success');
      window.setTimeout(() => successRef.current?.focus(), 0);
    } catch {
      setStatus('error');
      window.setTimeout(() => errorRef.current?.focus(), 0);
    }
  }

  // Erfolg → Bestätigungskarte (Formular ausgeblendet).
  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" aria-live="polite" className="card outline-none">
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-petrol-800/[0.06] text-petrol-700"
          aria-hidden="true"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M5 12.5l4 4 10-10.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-4 font-display text-xl text-petrol-900">{text.successTitle}</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{text.successBody}</p>
      </div>
    );
  }

  const consentParts = text.consentLabel.split('{privacy}');

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="card relative">
      <h3 className="font-display text-xl text-petrol-900">{text.heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text.intro}</p>

      {/* Honeypot: für Menschen unsichtbar (off-screen, nicht fokussierbar, aria-hidden). */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={fid('homepage')}>{text.honeypotLabel}</label>
        <input
          id={fid('homepage')}
          name="homepage"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <TextField id={fid('name')} name="name" label={text.labels.name} required invalid={missing('name')} value={values.name} onChange={set('name')} autoComplete="name" className="sm:col-span-2" />

        <TextField id={fid('email')} name="email" type="email" label={text.labels.email} required invalid={missing('email') || emailBad} value={values.email} onChange={set('email')} autoComplete="email" />
        <TextField id={fid('telefon')} name="telefon" type="tel" label={text.labels.telefon} optionalLabel={text.labels.optional} value={values.telefon} onChange={set('telefon')} autoComplete="tel" />

        <TextField id={fid('betreff')} name="betreff" label={text.labels.betreff} optionalLabel={text.labels.optional} value={values.betreff} onChange={set('betreff')} className="sm:col-span-2" />

        {/* Nachricht */}
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor={fid('nachricht')}>
            {text.labels.nachricht}{' '}
            <span className="text-gold-700" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id={fid('nachricht')}
            name="nachricht"
            rows={5}
            className="field-input"
            placeholder={text.labels.nachrichtPlaceholder}
            value={values.nachricht}
            onChange={set('nachricht')}
            required
            aria-required="true"
            aria-invalid={missing('nachricht') || undefined}
          />
        </div>
      </div>

      {/* Einwilligung */}
      <div className="mt-5 flex items-start gap-3">
        <input
          id={fid('consent')}
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-petrol-800"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          aria-required="true"
          aria-invalid={(showErrors && !consent) || undefined}
        />
        <label htmlFor={fid('consent')} className="text-sm leading-relaxed text-ink-soft">
          {consentParts[0]}
          <a
            href={privacyUrl}
            className="font-medium text-petrol-800 underline decoration-gold-500 underline-offset-4 hover:text-petrol-900"
          >
            {text.consentLinkLabel}
          </a>
          {consentParts[1] ?? ''}
        </label>
      </div>

      {validationMsg ? (
        <p className="mt-4 text-sm font-medium text-red-700" role="alert">
          {validationMsg}
        </p>
      ) : null}

      {status === 'error' ? (
        <div ref={errorRef} tabIndex={-1} role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 outline-none">
          <p className="text-sm font-semibold text-red-800">{text.errorTitle}</p>
          <p className="mt-1 text-sm leading-relaxed text-red-700">{text.errorBody}</p>
        </div>
      ) : null}

      <div className="mt-6">
        <button type="submit" className="btn-gold w-full sm:w-auto" disabled={status === 'submitting'} aria-busy={status === 'submitting' || undefined}>
          {status === 'submitting' ? text.submitting : text.submit}
        </button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-soft">{text.privacyNote}</p>
    </form>
  );
}
