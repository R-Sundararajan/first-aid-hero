import { Info, MapPin } from 'lucide-react'
import CallLink from '../components/CallLink'
import SourceList from '../components/SourceList'
import usePageTitle from '../components/usePageTitle'
import { allSources, checkedDate } from '../data/guides'

export default function About() {
  usePageTitle('About & medical sources')
  return (
    <div className="reading-container page-content about-page">
      <div className="page-heading">
        <p className="eyebrow">A small project with a clear purpose</p>
        <h1>First aid, made easier to find.</h1>
        <p>
          First Aid Hero brings essential first-aid information into one simple, accessible
          reference for people in India.
        </p>
      </div>
      <section className="prose-section">
        <h2>Why this website exists</h2>
        <p>
          When someone needs help, clear information matters. This project helps students, families
          and other bystanders find a first step quickly, and gives visitors a place to learn before
          an emergency happens.
        </p>
        <p>
          It was independently developed for the SSN Youth Red Cross Website Development activity.
          It is an educational student project and is not an official service of SSN, the Indian Red
          Cross Society, the British Red Cross or the American Heart Association.
        </p>
      </section>
      <section className="about-emergency" aria-labelledby="india-emergency-title">
        <div className="panel-kicker">
          <MapPin size={18} aria-hidden="true" />
          EMERGENCY HELP IN INDIA
        </div>
        <h2 id="india-emergency-title">One number to get help: 112.</h2>
        <p>
          India’s Emergency Response Support System connects requests for police, fire and medical
          assistance. Give your location, describe what has happened, and follow the operator’s
          instructions.
        </p>
        <CallLink />
        <p className="muted">
          The call link opens your device’s dialler. This website does not automatically place a
          call, send your location or contact an ambulance.
        </p>
      </section>
      <section className="prose-section" aria-labelledby="limitations-title">
        <h2 id="limitations-title">What this reference can and cannot do</h2>
        <ul className="plain-list">
          <li>
            Guides focus on adults. Baby and child first aid needs age-specific guidance and
            training.
          </li>
          <li>
            It cannot diagnose a condition, assess an injury or replace an emergency operator,
            clinician or practical first-aid course.
          </li>
          <li>
            Content is summarised from recognised public sources. It has not been independently
            medically reviewed or certified.
          </li>
          <li>
            Guidance can change. Follow the emergency operator’s instructions and consult the linked
            sources for more detail.
          </li>
        </ul>
      </section>
      <section className="prose-section" id="sources" tabIndex={-1} aria-labelledby="sources-title">
        <p className="eyebrow">Transparent, traceable information</p>
        <h2 id="sources-title">Our medical & emergency sources</h2>
        <p>
          The British Red Cross first-aid library and American Heart Association guidance inform the
          emergency instructions. NHS and Resuscitation Council UK guidance provide supporting
          detail. The Ministry of Home Affairs confirms India’s emergency number.
        </p>
        <p>
          Source links are also listed beside every guide. Foreign references may say 999 or 911.
          Throughout this website, the emergency number is adapted to <strong>112 for India</strong>
          .
        </p>
        <p className="source-date">
          Sources checked: {checkedDate}. This is a source check, not a clinical review.
        </p>
        <SourceList sources={allSources} />
      </section>
      <section className="prose-section">
        <h2>A simple, private reference</h2>
        <p>
          No account is required. Search and quiz answers are processed in your browser; they are
          not sent to a server. Search terms appear in the page address and may remain in browser
          history. Quiz answers reset when you leave the page.
        </p>
        <p>
          The site uses no analytics, external fonts, embedded videos or third-party trackers.
          External source links open the organisation’s own website, where its privacy policy
          applies. A connection is needed to load the site and open external references; offline
          access is not guaranteed.
        </p>
      </section>
      <div className="guide-endnote">
        <Info size={18} aria-hidden="true" />
        <p>
          Always seek professional help for a serious illness or injury. If you are unsure in an
          emergency, call 112 and describe what you can see.
        </p>
      </div>
    </div>
  )
}
