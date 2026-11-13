import { Brain, Droplet, Flame, HeartPulse, PersonStanding, Wind } from 'lucide-react'
import type { GuideIconName } from '../data/guides'

const icons = {
  heart: HeartPulse,
  wind: Wind,
  droplet: Droplet,
  flame: Flame,
  brain: Brain,
  person: PersonStanding,
}

export default function GuideIcon({ name, size = 24 }: { name: GuideIconName; size?: number }) {
  const Icon = icons[name]
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />
}
