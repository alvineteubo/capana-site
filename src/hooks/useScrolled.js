import { useEffect, useState } from 'react'

// Indique si la page a défilé au-delà de `seuil` pixels (pour resserrer l'en-tête).
export default function useScrolled(seuil = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > seuil)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [seuil])

  return scrolled
}
