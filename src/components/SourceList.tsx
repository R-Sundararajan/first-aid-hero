import { ArrowUpRight } from 'lucide-react'
import type { Source } from '../data/guides'

export default function SourceList({ sources }: { sources: Source[] }) {
  return (
    <ul className="source-list">
      {sources.map((source) => (
        <li key={source.url}>
          <a href={source.url} target="_blank" rel="noopener noreferrer">
            {source.name}
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
