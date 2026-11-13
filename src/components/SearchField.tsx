import { Search, X } from 'lucide-react'
import { useRef, type FormEvent } from 'react'

type SearchFieldProps = {
  id: string
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  hint?: string
}

export default function SearchField({ id, value, onChange, onSubmit, hint }: SearchFieldProps) {
  const input = useRef<HTMLInputElement>(null)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit()
  }
  return (
    <form role="search" className="search-form" onSubmit={submit}>
      <label className="search-label" htmlFor={id}>
        Find first-aid guidance
      </label>
      <div className="search-control">
        <Search size={21} className="search-icon" aria-hidden="true" />
        <input
          ref={input}
          id={id}
          type="search"
          placeholder="Search CPR, choking, burns…"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-describedby={hint ? `${id}-hint` : undefined}
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            className="clear-search icon-button"
            aria-label="Clear search"
            onClick={() => {
              onChange('')
              input.current?.focus()
            }}
          >
            <X size={18} aria-hidden="true" />
          </button>
        )}
        <button className="button search-button" type="submit">
          Search<span className="sr-only"> first-aid guides</span>
        </button>
      </div>
      {hint && (
        <p id={`${id}-hint`} className="search-hint">
          {hint}
        </p>
      )}
    </form>
  )
}
