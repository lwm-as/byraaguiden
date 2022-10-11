import { useEffect } from 'react'

/**
 * Hook that alerts clicks outside the passed ref
 */
function useOutsideDetecter(ref, resetState) {
  useEffect(() => {
    /**
     * Do something if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        resetState()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useOutsideDetecter
