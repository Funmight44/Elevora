import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X, Sparkles, Heart } from 'lucide-react'
import { useApp } from '../context/AppContext'
function Header() {
  const [open, setOpen] = useState(false)
  const { saved } = useApp()
  const close = () => setOpen(false)
  return <header className="header">
          <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark"><Sparkles size={18}/>
          </span> elevora<span className="brand-dot">.</span>
          </Link><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
          <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
            <NavLink end to="/" onClick={close}>Home</NavLink>
            <NavLink to="/about" onClick={close}>Our story</NavLink><NavLink to="/contact" onClick={close}>Get in touch</NavLink>
            <Link className="nav-cta" to="/contact" onClick={close}>Let’s talk <ArrowUpRight size={16}/>
            </Link>{saved && <span className="saved-note"><Heart size={13} fill="currentColor"/> Saved</span>}
          </nav>
    </header>
}

export default Header

