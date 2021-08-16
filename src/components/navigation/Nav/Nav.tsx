import { useState, MouseEvent, useCallback } from 'react'
import { capitalizeFirstLetter } from 'src/utils/capitalizeLetter'
import './Nav.scss'

interface NavProps {
  onClick?: () => {}
  links: string[]
  logo: string
}

export const Nav = ({ links, logo = 'My CV' }: NavProps) => {
  const [hash, setHash] = useState(window?.location?.hash || links[0])
  const handleActive = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      setHash(target.title)
    },
    [hash],
  )
  return (
    <div className="nav-container">
      <div className="nav-logo">{capitalizeFirstLetter(logo)[0]}</div>
      <div className="nav">
        {links.map(link => (
          <a
            key={link}
            className={['nav-link', hash.includes(link) && 'active'].filter(ele => ele).join(' ')}
            href={`#${link}`}
          >
            <span title={link} onClick={handleActive}>
              {capitalizeFirstLetter(link)}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
