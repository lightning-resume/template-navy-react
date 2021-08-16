import { useState, MouseEvent, useCallback, Fragment } from 'react'
import { capitalizeFirstLetter } from 'src/utils/capitalizeLetter'
import { useDisableScroll } from 'src/utils/hooks/useDisableScrool'
import { BurgerMenu } from '../BurgerMenu'
import './Nav.scss'

interface NavProps {
  onClick?: () => {}
  links: string[]
  logo: string
}

const Links = ({
  links,
  hash,
  handleActive,
}: {
  links: string[]
  hash: string
  handleActive: (event: MouseEvent) => void
}) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export const Nav = ({ links, logo = 'My CV' }: NavProps) => {
  const [hash, setHash] = useState(window?.location?.hash || links[0])
  const [show, setShow] = useState('hide')
  const handleShowBanner = useCallback(() => {
    return setShow(show === 'show' ? 'hide' : 'show')
  }, [show])
  const handleActive = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement
      setHash(target.title)
      handleShowBanner()
    },
    [hash, show],
  )
  useDisableScroll([show === 'show'])
  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-logo">{capitalizeFirstLetter(logo)[0]}</div>
        <div className="nav-burger">
          <BurgerMenu isActive={false} onClick={handleShowBanner} />
        </div>
        <nav className="nav">
          <Links links={links} hash={hash} handleActive={handleActive} />
        </nav>
      </div>
      <div className={`nav-banner-lightbox ${show}`} onClick={show === 'show' ? handleShowBanner : () => {}}>
        <div className={`nav-banner ${show}`}>
          <div className={'nav-banner-content'}>
            <Links links={links} hash={hash} handleActive={handleActive} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
