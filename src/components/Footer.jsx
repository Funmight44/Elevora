import { Link } from 'react-router-dom'
import { AtSign, BriefcaseBusiness, Camera, Sparkles } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Sparkles size={18} />
          </span>{' '}
          elevora<span className="brand-dot">.</span>
        </Link>

        <p>
          A little more clarity.
          <br />
          A lot more possibility.
        </p>

        <div className="socials">
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <BriefcaseBusiness />
          </a>
          <a href="https://www.instagram.com" aria-label="Camera">
            <Camera />
          </a>
          <a href="https://twitter.com" aria-label="AtSign">
            <AtSign />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Funmight</span>
        <div>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact</Link>
          <a href="mailto:hello@elevora.example">Privacy</a>
        </div>
        <span>
          Made for what’s next <span className="gold">✳</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
