import { useEffect } from 'react'

const unsetOverflow = () => {
  document.body.style.overflow = 'unset'
  const root = document.getElementById('root') as HTMLElement
  root.style.overflow = 'unset'
}

export const useDisableScroll = (dependency: boolean[]) => {
  useEffect(() => {
    if (dependency[0]) {
      document.body.style.overflow = 'hidden'
      const root = document.getElementById('root') as HTMLElement
      root.style.overflow = 'hidden'
    } else {
      unsetOverflow()
    }
    return () => unsetOverflow()
  }, dependency)
}
