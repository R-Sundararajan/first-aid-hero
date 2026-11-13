import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePageTitle from '../components/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <div className="reading-container not-found">
      <p className="eyebrow">Page not found</p>
      <h1>Let’s find the help you need.</h1>
      <p>This address does not match a page. Visit the first-aid library to find a guide.</p>
      <Link className="button" to="/guides">
        <ArrowLeft size={17} aria-hidden="true" />
        Go to first-aid guides
      </Link>
      <p className="muted">
        In an emergency in India, <a href="tel:112">call 112</a>.
      </p>
    </div>
  )
}
