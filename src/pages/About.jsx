import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Eye, Lightbulb, Target } from 'lucide-react'

export default function About() {
  return (
    <main>
      <section className="page-hero wrap">
        <span className="eyebrow">
          <i /> A LITTLE ABOUT US
        </span>
        <h1>
          There’s no one
          <br />
          way to <em>get there.</em>
        </h1>
        <div className="page-intro">
          <span>OUR STORY, IN A NUTSHELL</span>
          <p>
            We’re here for the moments when “what’s next?” starts to feel like
            a really good question.
          </p>
        </div>
      </section>

      <section className="about-image wrap">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85"
          alt="A small, collaborative team sharing ideas around a table"
        />
        <div className="image-label">
          A MORE HUMAN WAY FORWARD <span>✳</span>
        </div>
      </section>

      <section className="mission wrap">
        <div className="mission-title">
          <span className="eyebrow">WHAT WE BELIEVE</span>
          <h2>
            Good things grow
            <br />
            from <em>good questions.</em>
          </h2>
        </div>
        <div className="mission-copy">
          <p className="mission-lede">
            Careers aren’t ladders. They’re yours to shape, change, and make
            meaningful along the way.
          </p>
          <p>
            Elevora is a space for people in the middle of becoming. We bring
            practical tools and honest encouragement to help you see what’s
            possible and choose your next step with confidence.
          </p>
          <Link to="/contact" className="text-link">
            Come say hello <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="values">
        <div className="values-inner wrap">
          <span className="eyebrow">OUR NORTH STARS</span>
          <div className="value-grid">
            <article>
              <Target />
              <h3>Purpose, not pressure.</h3>
              <p>Make choices that feel like yours, at a pace that’s right for you.</p>
            </article>
            <article>
              <Eye />
              <h3>Clarity over quick fixes.</h3>
              <p>Better questions open doors that shortcuts never will.</p>
            </article>
            <article>
              <Lightbulb />
              <h3>Curiosity is a strength.</h3>
              <p>Stay open. Your next good idea can come from anywhere.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="closing wrap">
        <div>
          <span className="eyebrow">A GOOD FIRST STEP</span>
          <h2>
            Tell us what’s
            <br />
            on your <em>mind.</em>
          </h2>
        </div>
        <Link to="/contact" className="button">
          Get in touch <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  )
}
