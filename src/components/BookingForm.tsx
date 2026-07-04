/**
 * Terminanfrage-Formular (React-Insel) für das EIGENE Praxis-Terminsystem
 * (praxis-app). Ersetzt für die Buchung das frühere Drittanbieter-iframe.
 *
 * Datenschutz-/Sicherheitsmodell:
 *  - Reine First-Party-Verarbeitung: Das Formular sendet die Anfrage per POST an
 *    `endpoint` (Reverse-Proxy vor der praxis-app). Es ist KEIN Drittanbieter,
 *    kein iframe und kein externes Skript beteiligt – daher kein 2-Klick-Gate
 *    nötig (eine Verbindung entsteht erst beim aktiven Absenden, und zwar zur
 *    eigenen Infrastruktur). Die Einwilligung holen wir per Pflicht-Checkbox ein.
 *  - KEIN Token im Browser: Das BOOKING_TOKEN der praxis-app injiziert der
 *    Reverse-Proxy serverseitig als `X-Booking-Token`-Header (siehe README).
 *  - Übertragung als `application/x-www-form-urlencoded` (》simple request《 →
 *    kein CORS-Preflight). Empfehlung: SAME-ORIGIN-Endpunkt (z. B. „/api/buchung"),
 *    damit es gar nicht erst zu CORS-Problemen kommt (siehe README).
 *  - Anti-Spam: verstecktes Honeypot-Feld. Zusätzlich sollte der Proxy/Server
 *    Rate-Limiting erzwingen (siehe README).
 *  - Solange `endpoint` leer ist (vor Go-live), zeigt die Insel einen neutralen
 *    Platzhalter mit Telefon/E-Mail-Hinweis – ganz ohne Netzwerk-Request.
 *
 * Die Feldnamen im POST-Body entsprechen dem Backend-Vertrag der praxis-app
 * (`datum` = Wunschdatum, `zeit` = Wunschzeit, `abreise_datum` = Abreise). Alle
 * Texte kommen sprachaufgelöst als Props – die Sprachlogik bleibt im Astro-Layer.
 */
import { useEffect, useId, useRef, useState } from 'react';
import type { ChangeEvent, SyntheticEvent } from 'react';

/** In der jeweiligen Sprache aufgelöste Oberflächentexte. */
export interface BookingFormStrings {
  heading: string;
  intro: string;
  labels: {
    terminart: string;
    terminartPlaceholder: string;
    vorname: string;
    nachname: string;
    email: string;
    telefon: string;
    geburtsdatum: string;
    wunschdatum: string;
    wunschzeit: string;
    reiseziel: string;
    abreise: string;
    notiz: string;
    notizPlaceholder: string;
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
  consentRequired: string;
  privacyNote: string;
  honeypotLabel: string;
  placeholderTitle: string;
  placeholderBody: string[];
}

export interface BookingFormProps {
  /** POST-Ziel (Reverse-Proxy vor der praxis-app). Leer = Platzhalter, kein Request. */
  endpoint: string;
  /** Interner Pfad zur eigenen Datenschutzerklärung (für den Einwilligungstext). */
  privacyUrl: string;
  /** Online buchbare Terminarten (id = praxis-app-Terminart), sprachaufgelöst. */
  bookableTypes: { id: string; name: string }[];
  /** Sprachaufgelöste Oberflächentexte. */
  text: BookingFormStrings;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';
type AnyChange = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const EMPTY = {
  terminart: '',
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  geburtsdatum: '',
  wunschdatum: '',
  wunschzeit: '',
  reiseziel: '',
  abreise: '',
  notiz: '',
};
type Values = typeof EMPTY;

/** Pflichtfelder (vom Backend ebenfalls erzwungen). */
const REQUIRED: (keyof Values)[] = ['terminart', 'vorname', 'nachname', 'email', 'wunschdatum'];

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
  min?: string;
  max?: string;
  className?: string;
}) {
  const { id, name, label, type = 'text', value, onChange, required, invalid, optionalLabel, autoComplete, min, max, className } = props;
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
        min={min}
        max={max}
      />
    </div>
  );
}

export default function BookingForm({ endpoint, privacyUrl, bookableTypes, text }: BookingFormProps) {
  const [values, setValues] = useState<Values>({ ...EMPTY });

  // Terminart aus der URL vorbelegen (`?art=<id>`): Kommt der Besucher von einer
  // Leistungsseite (z. B. FSME), ist die passende Art direkt gewählt. Erst nach dem
  // Mount, damit SSR- und Client-Hydration übereinstimmen; nur gültige, buchbare IDs.
  useEffect(() => {
    const art = new URLSearchParams(window.location.search).get('art');
    if (art && bookableTypes.some((t) => t.id === art)) {
      setValues((v) => (v.terminart ? v : { ...v, terminart: art }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  const today = new Date().toISOString().slice(0, 10);

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
    body.set('terminart', values.terminart);
    body.set('vorname', values.vorname.trim());
    body.set('nachname', values.nachname.trim());
    body.set('email', values.email.trim());
    body.set('datum', values.wunschdatum);
    if (values.telefon.trim()) body.set('telefon', values.telefon.trim());
    if (values.geburtsdatum) body.set('geburtsdatum', values.geburtsdatum);
    if (values.wunschzeit) body.set('zeit', values.wunschzeit);
    if (values.reiseziel.trim()) body.set('reiseziel', values.reiseziel.trim());
    if (values.abreise) body.set('abreise_datum', values.abreise);
    if (values.notiz.trim()) body.set('notiz', values.notiz.trim());

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body,
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !data || data.ok !== true) throw new Error('booking request failed');
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
        {/* Terminart */}
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor={fid('terminart')}>
            {text.labels.terminart}{' '}
            <span className="text-gold-700" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id={fid('terminart')}
            name="terminart"
            className="field-input"
            value={values.terminart}
            onChange={set('terminart')}
            required
            aria-required="true"
            aria-invalid={missing('terminart') || undefined}
          >
            <option value="" disabled>
              {text.labels.terminartPlaceholder}
            </option>
            {bookableTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <TextField id={fid('vorname')} name="vorname" label={text.labels.vorname} required invalid={missing('vorname')} value={values.vorname} onChange={set('vorname')} autoComplete="given-name" />
        <TextField id={fid('nachname')} name="nachname" label={text.labels.nachname} required invalid={missing('nachname')} value={values.nachname} onChange={set('nachname')} autoComplete="family-name" />

        <TextField id={fid('email')} name="email" type="email" label={text.labels.email} required invalid={missing('email')} value={values.email} onChange={set('email')} autoComplete="email" />
        <TextField id={fid('telefon')} name="telefon" type="tel" label={text.labels.telefon} optionalLabel={text.labels.optional} value={values.telefon} onChange={set('telefon')} autoComplete="tel" />

        <TextField id={fid('wunschdatum')} name="wunschdatum" type="date" label={text.labels.wunschdatum} required invalid={missing('wunschdatum')} value={values.wunschdatum} onChange={set('wunschdatum')} min={today} />
        <TextField id={fid('wunschzeit')} name="wunschzeit" type="time" label={text.labels.wunschzeit} optionalLabel={text.labels.optional} value={values.wunschzeit} onChange={set('wunschzeit')} />

        <TextField id={fid('reiseziel')} name="reiseziel" label={text.labels.reiseziel} optionalLabel={text.labels.optional} value={values.reiseziel} onChange={set('reiseziel')} />
        <TextField id={fid('abreise')} name="abreise" type="date" label={text.labels.abreise} optionalLabel={text.labels.optional} value={values.abreise} onChange={set('abreise')} min={today} />

        <TextField id={fid('geburtsdatum')} name="geburtsdatum" type="date" label={text.labels.geburtsdatum} optionalLabel={text.labels.optional} value={values.geburtsdatum} onChange={set('geburtsdatum')} max={today} autoComplete="bday" />

        {/* Nachricht */}
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor={fid('notiz')}>
            {text.labels.notiz} <span className="font-normal text-ink-soft">{text.labels.optional}</span>
          </label>
          <textarea
            id={fid('notiz')}
            name="notiz"
            rows={4}
            className="field-input"
            placeholder={text.labels.notizPlaceholder}
            value={values.notiz}
            onChange={set('notiz')}
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
