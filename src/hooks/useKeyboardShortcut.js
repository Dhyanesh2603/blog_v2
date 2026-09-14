import { useEffect } from 'react'

export function useKeyboardShortcut(key, callback, { ctrlKey = false, metaKey = false } = {}) {
  useEffect(() => {
    function handler(e) {
      const matchesMeta = metaKey ? (e.metaKey || e.ctrlKey) : true
      const matchesCtrl = ctrlKey ? e.ctrlKey : true

      if (e.key.toLowerCase() === key.toLowerCase() && matchesMeta && matchesCtrl) {
        e.preventDefault()
        callback()
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [key, callback, ctrlKey, metaKey])
}
