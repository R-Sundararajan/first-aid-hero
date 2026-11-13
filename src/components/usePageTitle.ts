import { useEffect } from 'react'

export default function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | First Aid Hero`
  }, [title])
}
