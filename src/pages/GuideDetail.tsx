import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleAlert,
  Info,
  Phone,
  PlayCircle,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SourceList from '../components/SourceList'
import usePageTitle from '../components/usePageTitle'
import { checkedDate, guides, type Guide } from '../data/guides'
import NotFound from './NotFound'

function GuideArticle({ guide }: { guide: Guide }) {
  usePageTitle(`${guide.title} — first-aid steps`)
  return (
    <article className="reading-container guide-page">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/guides">
          <ArrowLeft size={15} aria-hidden="true" />
          All first-aid guides
        </Link>
      </nav>
      <div className="guide-heading">
        <p className="eyebrow">
          Adult first aid <span aria-hidden="true">/</span> {guide.category}
        </p>
        <h1>{guide.title}</h1>
        <p className="recognition">{guide.recognition}</p>
      </div>
      <aside className="emergency-notice" aria-label="Emergency help">
        <Phone size={22} aria-hidden="true" />
        <div>
          <h2>
            <a href="tel:112">Call 112 for emergency help</a>
          </h2>
          <p>{guide.emergency}</p>
        </div>
      </aside>
      <section className="urgent-instructions" aria-labelledby="steps-title">
        <h2 id="steps-title">What to do</h2>
        <ol className="step-list">
          {guide.steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {step.link && (
                  <Link className="text-link step-link" to={step.link.to}>
                    {step.link.label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="precautions" aria-labelledby="precautions-title">
        <h2 id="precautions-title">
          <CircleAlert size={21} aria-hidden="true" />
          Important to remember
        </h2>
        <ul>
          {guide.precautions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="guide-explanation" aria-labelledby="understanding-title">
        <p className="eyebrow">After the immediate actions</p>
        <h2 id="understanding-title">Understand a little more</h2>
        {guide.explanation.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>
      {guide.demonstration && (
        <aside className="demonstration">
          <PlayCircle size={28} aria-hidden="true" />
          <div>
            <h2>See a demonstration</h2>
            <a href={guide.demonstration.url} target="_blank" rel="noopener noreferrer">
              {guide.demonstration.name}
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p>
              For learning after the written steps. Foreign videos may use another emergency number;
              in India, call 112.
            </p>
          </div>
        </aside>
      )}
      <section className="guide-sources" aria-labelledby="guide-sources-title">
        <h2 id="guide-sources-title">Sources & further reading</h2>
        <p>
          Summarised from the sources below; emergency numbers are adapted for India. Sources
          checked {checkedDate}. This content has not been independently medically reviewed.
        </p>
        <SourceList sources={guide.sources} />
      </section>
      <div className="guide-endnote">
        <Info size={18} aria-hidden="true" />
        <p>
          Use this as a reference, alongside the 112 operator’s instructions. Practical training is
          the best way to learn first-aid skills.
        </p>
      </div>
      <Link to="/guides" className="text-link">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to all guides
      </Link>
    </article>
  )
}

export default function GuideDetail() {
  const { slug } = useParams()
  const guide = guides.find((item) => item.slug === slug)
  return guide ? <GuideArticle guide={guide} /> : <NotFound />
}
