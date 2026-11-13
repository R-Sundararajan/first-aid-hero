import { ArrowRight, BookOpen, HandHeart, Phone, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CallLink from '../components/CallLink'
import GuideCard from '../components/GuideCard'
import GuideIcon from '../components/GuideIcon'
import SearchField from '../components/SearchField'
import usePageTitle from '../components/usePageTitle'
import { guides } from '../data/guides'

export default function Home() {
  usePageTitle('Know what to do when it matters')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  return (
    <>
      <div className="service-strip">
        <div className="container">
          <ShieldCheck size={15} aria-hidden="true" />
          <span>Clear guidance. A calmer first response.</span>
          <span className="strip-location">First-aid reference for India</span>
        </div>
      </div>
      <div className="container home-content">
        <section className="home-intro" aria-labelledby="home-title">
          <div className="intro-copy">
            <p className="eyebrow">A little knowledge can make a difference</p>
            <h1 id="home-title">
              Know what to do
              <br />
              when it matters.
            </h1>
            <p className="intro-description">
              Simple, step-by-step first aid for the moments you need it.
              <br className="desktop-break" /> Find help now, or learn a skill for tomorrow.
            </p>
          </div>
          <aside className="emergency-panel" aria-label="Emergency help in India">
            <span className="panel-kicker">
              <Phone size={17} aria-hidden="true" />
              IN AN EMERGENCY
            </span>
            <h2>Get professional help first.</h2>
            <p>Call India’s emergency services. Give your location and follow the operator.</p>
            <CallLink />
            <span className="panel-footnote">Police · Fire · Medical assistance</span>
          </aside>
        </section>
        <div className="home-search">
          <SearchField
            id="home-search"
            value={query}
            onChange={setQuery}
            onSubmit={() =>
              navigate(`/guides${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`)
            }
          />
        </div>
        <section className="priority-section" aria-labelledby="priority-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">When every moment counts</p>
              <h2 id="priority-title">Quick access to urgent help</h2>
            </div>
            <Link to="/guides" className="text-link browse-link">
              Browse all guides
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="priority-grid">
            {guides.slice(0, 3).map((guide) => (
              <GuideCard key={guide.slug} guide={guide} priority />
            ))}
          </div>
          <div className="more-topics">
            <span>Also in the library</span>
            <div>
              {guides.slice(3).map((guide) => (
                <Link key={guide.slug} to={`/guides/${guide.slug}`}>
                  <GuideIcon name={guide.icon} size={17} />
                  {guide.shortTitle}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="learning-section" aria-labelledby="learning-title">
          <div className="learning-symbol">
            <HandHeart size={50} strokeWidth={1.25} aria-hidden="true" />
          </div>
          <div className="learning-copy">
            <p className="eyebrow">Be ready before you need to be</p>
            <h2 id="learning-title">Confidence starts with knowing.</h2>
            <p>
              Recognising a warning sign and knowing your first step can help you act while
              professional help is on the way. Take a few minutes to build your understanding.
            </p>
          </div>
          <Link className="button button-outline" to="/learn">
            <BookOpen size={17} aria-hidden="true" />
            Explore & learn
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </section>
        <p className="scope-note">
          Our guides focus on adults. Babies and children need age-specific first aid. Call 112 for
          help.
        </p>
      </div>
    </>
  )
}
