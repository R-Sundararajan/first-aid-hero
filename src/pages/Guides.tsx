import { SearchX } from 'lucide-react'
import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import GuideCard from '../components/GuideCard'
import SearchField from '../components/SearchField'
import usePageTitle from '../components/usePageTitle'
import { categories, searchGuides } from '../data/guides'

export default function Guides() {
  usePageTitle('First-aid library')
  const [params, setParams] = useSearchParams()
  const query = params.get('q') || ''
  const rawCategory = params.get('category')
  const category = categories.find((item) => item === rawCategory) || 'All topics'
  const results = searchGuides(query, category)
  const resultsHeading = useRef<HTMLParagraphElement>(null)
  function updateFilter(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (value && (key !== 'category' || value !== 'All topics')) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }
  return (
    <div className="container page-content library-page">
      <div className="page-heading">
        <p className="eyebrow">Find a clear first step</p>
        <h1>First-aid library</h1>
        <p>Practical guidance for common emergencies. Choose a topic to see what to do.</p>
      </div>
      <div className="library-search">
        <SearchField
          id="library-search"
          value={query}
          onChange={(value) => updateFilter('q', value)}
          onSubmit={() => resultsHeading.current?.focus()}
          hint="Search by a condition, symptom or keyword. These guides focus on adults."
        />
      </div>
      <div className="category-filters" role="group" aria-label="Filter guides by category">
        {['All topics', ...categories].map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={category === item}
            onClick={() => updateFilter('category', item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="result-count" role="status" ref={resultsHeading} tabIndex={-1}>
        {results.length} {results.length === 1 ? 'guide' : 'guides'}
        {query.trim() ? ` matching “${query.trim()}”` : ' to help you take action'}
        {category !== 'All topics' ? ` · ${category}` : ''}
      </p>
      {results.length ? (
        categories.map((group) => {
          const grouped = results.filter((guide) => guide.category === group)
          return grouped.length ? (
            <section
              className="library-group"
              key={group}
              aria-labelledby={`group-${group.replaceAll(' ', '-').replace('&', 'and')}`}
            >
              <h2 id={`group-${group.replaceAll(' ', '-').replace('&', 'and')}`}>{group}</h2>
              <div className="library-grid">
                {grouped.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </section>
          ) : null
        })
      ) : (
        <div className="empty-state">
          <SearchX size={32} aria-hidden="true" />
          <h2>No matching guides</h2>
          <p>
            Try a shorter term such as “burn”, “blood” or “breathing”, or choose another category.
          </p>
          <button
            type="button"
            className="button button-outline"
            onClick={() => setParams({}, { replace: true })}
          >
            Clear search and filters
          </button>
        </div>
      )}
      <div className="library-help">
        <strong>Not sure what’s wrong?</strong>
        <p>
          If someone is seriously ill, injured or unresponsive, <a href="tel:112">call 112</a>. Tell
          the operator what you can see and follow their instructions.
        </p>
      </div>
    </div>
  )
}
