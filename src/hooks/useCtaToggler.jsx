import { useEffect, useState } from 'react'

export function useCtaToggler(heroContToTop) {
  const [isCtaShown, toggleCtaShown] = useState(false)

  const handleScroll = (heroContToTop = 0) => {
    if (window.innerWidth < 768) {
      if (window.pageYOffset > heroContToTop) {
        toggleCtaShown(true)
      } else if (window.pageYOffset < heroContToTop) {
        toggleCtaShown(false)
      }
    }
  }

  useEffect(() => {
    let trackTag = sessionStorage.getItem('__byråguidenTrackingTag')

    if (!trackTag) {
      trackTag = 'SEO'

      sessionStorage.setItem('__byråguidenTrackingTag', trackTag)
    }

    if (window) {
      window.addEventListener('scroll', () => {
        handleScroll(heroContToTop)
      })
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    isCtaShown
  }
}
