import { Phone } from 'lucide-react'

export default function CallLink({ className = '' }: { className?: string }) {
  return (
    <a
      href="tel:112"
      className={`button call-link ${className}`}
      aria-label="Call 112, emergency services in India"
    >
      <Phone size={17} aria-hidden="true" />
      Call 112
    </a>
  )
}
