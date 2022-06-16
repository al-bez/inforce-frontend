import { useCallback, useEffect, useRef, useState } from 'react'

const useSticky = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky)
  const ref = useRef<HTMLElement>(null)

  const toggleSticky = useCallback(
    ({ top }) => {
      if (top < 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    },
    [isSticky]
  )

  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(ref.current?.getBoundingClientRect())
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [toggleSticky])

  return [ref, isSticky] as const
}

export default useSticky
