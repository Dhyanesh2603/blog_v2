import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    function updateProgress() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)))
      }
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

export default useScrollProgress;
