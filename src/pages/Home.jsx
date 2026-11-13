import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers3,
  Quote,
  Sparkles,
  Target,
} from 'lucide-react'
import SaveButton from '../components/SaveButton'
import '../styles/Home.css'

export default function Home() {
  const features = [
    {
      icon: <Compass />,
      n: '01',
      title: 'Find your north',
      text: 'Get clear on what matters to you, and where you want to go next.',
    },
    {
      icon: <Layers3 />,
      n: '02',
      title: 'Build your toolkit',
      text: 'Turn the strengths you already have into skills that take you further.',
    },
    {
      icon: <Sparkles />,
      n: '03',
      title: 'Make your move',
      text: 'A thoughtful plan makes the next step feel a whole lot closer.',
    },
  ]

  return (
    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <i /> YOUR NEXT CHAPTER STARTS HERE
          </span>
          <h1>
            Good work.
            <br />
            On <em>your terms.</em>
          </h1>
          <p className="hero-lede">
            A more considered approach to building a career you actually feel
            good about.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="button">
              Find your way <ArrowRight size={17} />
            </Link>
            <Link to="/contact" className="text-link">
              A little about us <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="hero-proof">
            <div className="avatars">
              <span>J</span>
              <span>M</span>
              <span>A</span>
              <span>+</span>
            </div>
            <p>
              <strong>For the curious ones</strong>
              <br />
              making their next move.
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1150&q=85"
              alt="Sunlit creative studio with a long table and leafy plants"
            />
            <div className="image-stamp">
              <Sparkles size={16} />
              <span>
                A FRESH
                <br />
                PERSPECTIVE
              </span>
            </div>
            <div className="floating-card">
              <div className="card-icon">
                <Target size={20} />
              </div>
              <div>
                <b>Find your focus</b>
                <span>The rest follows.</span>
              </div>
              <ArrowUpRight size={17} />
            </div>
          </div>
          <div className="image-caption">
            SPACE TO THINK. ROOM TO GROW. <span>↗</span>
          </div>
        </div>

        <div className="hero-index">
          <span>01</span> / 03
        </div>
      </section>

      <section className="ticker">
        <div>
          GROW WITH INTENTION <span>✳</span> MAKE SPACE FOR MORE <span>✳</span>{' '}
          WORK THAT FEELS LIKE YOU <span>✳</span> GROW WITH INTENTION <span>✳</span>
        </div>
      </section>

      <section className="features-section wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">A GOOD PLACE TO BEGIN</span>
            <h2>
              Progress, with a little
              <br />
              <em>more purpose.</em>
            </h2>
          </div>
          <p>
            Big career questions deserve better than one-size-fits-all answers.
            Start where you are. Take it one thoughtful step at a time.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((item) => (
            <article className="feature" key={item.n}>
              <div className="feature-top">
                <span className="feature-icon">{item.icon}</span>
                <span className="feature-n">{item.n} / 03</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link
                to="/about"
                aria-label={`Learn more about ${item.title}`}
              >
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-inner">
          <Quote className="quote-mark" />
          <div>
            <p>
              You don’t have to have it all figured out.
              <br />
              <em>You just have to begin.</em>
            </p>
            <span>A FRIENDLY REMINDER FROM US TO YOU</span>
          </div>
          <SaveButton />
        </div>
      </section>

      <section className="closing wrap">
        <div>
          <span className="eyebrow">WHEN YOU’RE READY</span>
          <h2>
            Your next chapter
            <br />
            is yours to <em>write.</em>
          </h2>
        </div>
        <Link to="/contact" className="button">
          Let’s make a start <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  )
}
