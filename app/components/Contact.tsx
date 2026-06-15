'use client';
import { useState, FormEvent } from 'react';

const enquiryTypes = ['New commission', 'Repair / restoration', 'General enquiry', 'Press / collaboration'];

const budgets = ['Under KES 50,000', 'KES 50,000 – 150,000', 'KES 150,000 – 400,000', 'KES 400,000+'];

const socialLinks = [
  { label: 'Instagram', short: 'IG', href: '#' },
  { label: 'Pinterest', short: 'PT', href: '#' },
  { label: 'Facebook', short: 'FB', href: '#' },
  { label: 'LinkedIn', short: 'IN', href: '#' },
];

const contactDetails = [
  { icon: '✉', label: 'Email', value: 'hello@northandknot.co.ke' },
  { icon: '✆', label: 'Phone / WhatsApp', value: '+254 700 123 456' },
  { icon: '⌖', label: 'Workshop', value: 'Industrial Area, Nairobi\nVisits by appointment only' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    enquiryType: '', budget: '', message: '',
  });

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const inputStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--cream)',
    outline: 'none',
    width: '100%',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    padding: '0.75rem 1rem',
    transition: 'border-color 0.2s',
  } as React.CSSProperties;

  return (
    <section id="contact" className="py-24 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
      {/* Left: info */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: 'var(--brass)' }}>Contact</span>
          <span className="block h-px w-10" style={{ background: 'var(--brass)', opacity: 0.4 }} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5" style={{ color: 'var(--white)' }}>
          Start a<br />conversation
        </h2>
        <p className="text-sm leading-relaxed mb-10 max-w-sm" style={{ color: 'var(--cream-muted)' }}>
          Tell us about your space and what you need. We respond to all enquiries within 48 hours.
        </p>

        <div className="flex flex-col gap-7 mb-10">
          {contactDetails.map(c => (
            <div key={c.label} className="flex gap-4 items-start">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm"
                style={{ border: '1px solid var(--border)', color: 'var(--brass)' }}
              >
                {c.icon}
              </div>
              <div>
                <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: 'var(--brass)' }}>
                  {c.label}
                </div>
                <div className="text-sm whitespace-pre-line" style={{ color: 'var(--cream-muted)' }}>
                  {c.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-3">
          {socialLinks.map(s => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center text-xs font-semibold tracking-widest transition-all duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--cream-muted)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brass)'; e.currentTarget.style.color = 'var(--brass)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--cream-muted)'; }}
            >
              {s.short}
            </a>
          ))}
        </div>
      </div>

      {/* Right: form */}
      <div>
        {status === 'success' ? (
          <div
            className="p-6 text-sm leading-relaxed"
            style={{ border: '1px solid var(--brass)', color: 'var(--brass)', background: 'var(--surface)' }}
          >
            <div className="font-display text-2xl mb-2" style={{ color: 'var(--white)' }}>Thank you.</div>
            Your enquiry has been received. We'll be in touch within 48 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {([
                { field: 'firstName', label: 'First name', placeholder: 'e.g. Aisha', auto: 'given-name' },
                { field: 'lastName', label: 'Last name', placeholder: 'e.g. Mutua', auto: 'family-name' }
              ] as const).map(({ field, label, placeholder, auto }) => (
                <div key={field} className="flex flex-col gap-1.5">
                  <label htmlFor={field} className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--cream-muted)' }}>
                    {label}
                  </label>
                  <input
                    required
                    id={field}
                    name={field}
                    autoComplete={auto}
                    style={inputStyle}
                    placeholder={placeholder}
                    value={form[field]}
                    onChange={set(field)}
                    onFocus={e => (e.target.style.borderColor = 'var(--brass)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--cream-muted)' }}>Email address</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                autoComplete="email"
                style={inputStyle}
                placeholder="you@example.com"
                value={form.email}
                onChange={set('email')}
                onFocus={e => (e.target.style.borderColor = 'var(--brass)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {[
              { field: 'enquiryType', label: 'Enquiry type', options: enquiryTypes, placeholder: 'Select one' },
              { field: 'budget', label: 'Approximate budget', options: budgets, placeholder: 'Select a range' },
            ].map(({ field, label, options, placeholder }) => (
              <div key={field} className="flex flex-col gap-1.5">
                <label htmlFor={field} className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--cream-muted)' }}>{label}</label>
                <select
                  id={field}
                  name={field}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  value={form[field as keyof typeof form]}
                  onChange={set(field)}
                  onFocus={e => (e.target.style.borderColor = 'var(--brass)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                >
                  <option value="">{placeholder}</option>
                  {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--cream-muted)' }}>Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                placeholder="Describe the piece, the space it's for, any references..."
                value={form.message}
                onChange={set('message')}
                onFocus={e => (e.target.style.borderColor = 'var(--brass)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm" style={{ color: '#e57373' }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="text-xs font-medium tracking-widest uppercase py-4 px-8 self-start transition-colors duration-200 disabled:opacity-60"
              style={{ background: 'var(--brass)', color: 'var(--forest)' }}
              onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = 'var(--brass-dark)'; }}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--brass)')}
            >
              {status === 'sending' ? 'Sending…' : 'Send enquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}