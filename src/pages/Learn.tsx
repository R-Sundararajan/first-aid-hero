import { ArrowRight, BookOpen, Check, RotateCcw, X } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import GuideIcon from '../components/GuideIcon'
import usePageTitle from '../components/usePageTitle'
import { guides } from '../data/guides'
import { questions } from '../data/quiz'

function KnowledgeQuiz() {
  const [answers, setAnswers] = useState<number[]>(questions.map(() => -1))
  const [submitted, setSubmitted] = useState(false)
  const result = useRef<HTMLDivElement>(null)
  const firstAnswer = useRef<HTMLInputElement>(null)
  const answered = answers.filter((answer) => answer !== -1).length
  const correct = answers.filter((answer, index) => answer === questions[index].correct).length
  useEffect(() => {
    if (submitted) result.current?.focus()
  }, [submitted])
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (answered === questions.length) setSubmitted(true)
  }
  function reset() {
    setAnswers(questions.map(() => -1))
    setSubmitted(false)
    requestAnimationFrame(() => firstAnswer.current?.focus())
  }
  return (
    <section className="quiz-section" id="knowledge-check" aria-labelledby="quiz-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A quick knowledge check</p>
          <h2 id="quiz-title">Test your understanding</h2>
        </div>
        <span className="quiz-length">5 questions</span>
      </div>
      <p className="quiz-intro">
        Choose one answer for each question, then check your answers. This is a learning exercise,
        not a first-aid qualification.
      </p>
      {submitted && (
        <div className="quiz-result" ref={result} tabIndex={-1} role="status">
          <BookOpen size={23} aria-hidden="true" />
          <div>
            <h3>
              You answered {correct} of {questions.length} correctly.
            </h3>
            <p>
              {correct === questions.length
                ? 'You have a good start. Keep learning and practise with a qualified instructor.'
                : 'Read the explanations below, then revisit any skills you want to understand better.'}
            </p>
          </div>
        </div>
      )}
      <form onSubmit={submit} aria-label="First-aid knowledge check">
        {questions.map((question, questionIndex) => (
          <fieldset className="quiz-question" key={question.question} disabled={submitted}>
            <legend>
              <span className="question-number">{questionIndex + 1}.</span>{' '}
              {question.question}
            </legend>
            <div className="quiz-options">
              {question.options.map((option, optionIndex) => (
                <label
                  key={option}
                  className={`quiz-option${answers[questionIndex] === optionIndex ? ' is-selected' : ''}`}
                >
                  <input
                    ref={questionIndex === 0 && optionIndex === 0 ? firstAnswer : undefined}
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    required
                    checked={answers[questionIndex] === optionIndex}
                    onChange={() =>
                      setAnswers((current) =>
                        current.map((answer, index) =>
                          index === questionIndex ? optionIndex : answer,
                        ),
                      )
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {submitted && (
              <div
                className={`answer-feedback ${answers[questionIndex] === question.correct ? 'answer-correct' : 'answer-incorrect'}`}
              >
                {answers[questionIndex] === question.correct ? (
                  <Check size={18} aria-hidden="true" />
                ) : (
                  <X size={18} aria-hidden="true" />
                )}
                <div>
                  <strong>
                    {answers[questionIndex] === question.correct
                      ? 'Correct.'
                      : `Correct answer: ${question.options[question.correct]}`}
                  </strong>
                  <p>{question.explanation}</p>
                  <Link to={question.guide}>
                    {question.guideLabel}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </fieldset>
        ))}
        <div className="quiz-actions">
          {submitted ? (
            <button className="button button-outline" type="button" onClick={reset}>
              <RotateCcw size={17} aria-hidden="true" />
              Try again
            </button>
          ) : (
            <>
              <button
                className="button"
                type="submit"
                disabled={answered !== questions.length}
                aria-describedby="quiz-progress"
              >
                Check my answers
                <ArrowRight size={17} aria-hidden="true" />
              </button>
              <p id="quiz-progress" role="status">
                {answered} of {questions.length} answered
                {answered !== questions.length
                  ? ' · Answer all five to check.'
                  : ' · Ready to check.'}
              </p>
            </>
          )}
        </div>
      </form>
    </section>
  )
}

export default function Learn() {
  usePageTitle('Learn essential first aid')
  return (
    <div className="reading-container page-content learn-page">
      <div className="page-heading">
        <p className="eyebrow">Learn today. Be ready tomorrow.</p>
        <h1>A few skills worth knowing.</h1>
        <p>
          You don’t need to know everything to start learning. Get familiar with the essentials,
          then test your understanding.
        </p>
      </div>
      <div className="learning-context">
        <BookOpen size={20} aria-hidden="true" />
        <p>
          This section is for learning in your own time. Need help right now?{' '}
          <Link to="/guides">
            Go straight to the first-aid guides
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          .
        </p>
      </div>
      <section className="essential-skills" aria-labelledby="essentials-title">
        <h2 id="essentials-title">Start with the essentials</h2>
        <div className="skill-list">
          {[
            {
              guide: guides[0],
              title: 'Recognise when to start CPR',
              text: 'Understand why unresponsiveness and abnormal breathing need immediate action, and how compressions and an AED help.',
            },
            {
              guide: guides[1],
              title: 'Know how to respond to choking',
              text: 'Learn the difference between a strong cough and a severe airway blockage, and when back blows and thrusts are needed.',
            },
            {
              guide: guides[2],
              title: 'Remember the key action for bleeding',
              text: 'Firm, continuous pressure is the first step. Know when to call for help and why an embedded object should stay in place.',
            },
          ].map((skill) => (
            <Link key={skill.guide.slug} className="skill-row" to={`/guides/${skill.guide.slug}`}>
              <span className="guide-icon">
                <GuideIcon name={skill.guide.icon} />
              </span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
                <span className="skill-link">
                  Read the guide
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <KnowledgeQuiz />
      <aside className="training-note">
        <h2>Reading is a beginning. Practice matters.</h2>
        <p>
          A hands-on course helps you build the skills that a website cannot assess. Look for
          training from a recognised first-aid provider, and refresh it regularly.
        </p>
        <Link className="text-link" to="/about#sources">
          Explore our learning sources
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </aside>
    </div>
  )
}
