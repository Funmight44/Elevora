import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Phone, Send,Sparkles,} from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please add your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.subject.trim()) {
      nextErrors.subject = 'Please add a subject.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'We’d love to hear a little more.'
    }

    setErrors(nextErrors)
    return !Object.keys(nextErrors).length
  }

  const submit = (event) => {
    event.preventDefault()

    if (validate()) {
      setSent(true)
    }
  }

  const change = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]: '',
    })
  }

  return (
    <main>
      <section className="contact-heading wrap">
        <span className="eyebrow">
          <i /> LET’S START A CONVERSATION
        </span>
        <h1>
          We’re all <em>ears.</em>
        </h1>
        <p>
          Big idea, small question, not-quite-sure-where-to-start — we’d love to
          hear from you.
        </p>
      </section>

      <section className="contact-layout wrap">
        <div className="contact-details">
          <span className="eyebrow">THE DIRECT ROUTE</span>
          <h2>
            Good conversations
            <br />
            start <em>somewhere.</em>
          </h2>
          <p>
            Drop us a note and a real human will get back to you soon. Usually
            within two working days.
          </p>

          <div className="contact-list">
            <a href="mailto:hello@elevora.example">
              <span>
                <Mail />
              </span>
              <div>
                <small>EMAIL</small>
                lahyor44@gmail.com
              </div>
              <ArrowUpRight />
            </a>
            <a href="tel:+2347067325018">
              <span>
                <Phone />
              </span>
              <div>
                <small>GIVE US A CALL</small>
                +2347067325018
              </div>
              <ArrowUpRight />
            </a>
            <div>
              <span>
                <MapPin />
              </span>
              <div>
                <small>FIND US</small>
                Brooklyn, New York
              </div>
            </div>
          </div>

          <div className="contact-note">
            <Sparkles />
            <p>
              Not sure what to say?
              <br />
              <em>“Hi” is a lovely place to start.</em>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          {sent ? (
            <div className="success-state">
              <span>
                <Check />
              </span>
              <span className="eyebrow">MESSAGE RECEIVED</span>
              <h2>
                Thanks for reaching <em>out.</em>
              </h2>
              <p>
                Your note is safely with us. We’ll be in touch within two
                working days.
              </p>
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setSent(false)
                  setForm({ name: '', email: '', subject: '', message: '' })
                }}
              >
                Send another message <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <span className="eyebrow">WRITE US A NOTE</span>
                <span>ALL FIELDS REQUIRED</span>
              </div>

              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="The name your friends call you"
                value={form.name}
                onChange={change}
                aria-invalid={!!errors.name}
              />
              {errors.name && <small className="error">{errors.name}</small>}

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={change}
                aria-invalid={!!errors.email}
              />
              {errors.email && <small className="error">{errors.email}</small>}

              <label htmlFor="subject">What’s this about?</label>
              <input
                id="subject"
                name="subject"
                placeholder="A little something about…"
                value={form.subject}
                onChange={change}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <small className="error">{errors.subject}</small>
              )}

              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Take your time. We’re listening."
                value={form.message}
                onChange={change}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <small className="error">{errors.message}</small>
              )}

              <div className="form-end">
                <small>Your details stay between us. Always.</small>
                <button className="button" type="submit">
                  Send your note <Send size={16} />
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </main>
  )
}
