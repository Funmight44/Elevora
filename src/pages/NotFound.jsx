import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="not-found wrap">
      <span className="eyebrow">A LITTLE DETOUR</span>
      <h1>
        Well, this is
        <br />
        <em>unexpected.</em>
      </h1>
      <p>
        We can’t find the page you’re looking for, but there’s always another
        way forward.
      </p>
      <Link to="/" className="button">
        Back to the beginning <ArrowRight size={17} />
      </Link>
    </main>
  )
}
