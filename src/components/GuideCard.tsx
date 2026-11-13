import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Guide } from '../data/guides'
import GuideIcon from './GuideIcon'

export default function GuideCard({
  guide,
  priority = false,
}: {
  guide: Guide
  priority?: boolean
}) {
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className={`guide-card${priority ? ' guide-card-priority' : ''}`}
    >
      <span className="guide-icon">
        <GuideIcon name={guide.icon} />
      </span>
      <div className="guide-card-copy">
        <h3>{guide.shortTitle}</h3>
        <p>{guide.description}</p>
      </div>
      <ArrowRight className="guide-arrow" size={20} aria-hidden="true" />
    </Link>
  )
}
