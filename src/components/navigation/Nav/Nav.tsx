import { useState, MouseEvent, useCallback, Fragment } from 'react'
import { capitalizeFirstLetter } from 'src/utils/capitalizeLetter'
import { useDisableScroll } from 'src/utils/hooks/useDisableScrool'
import { BurgerMenu } from '../BurgerMenu'

import emailSVG from 'src/assets/email.svg'
import linkedinSVG from 'src/assets/linkedin.svg'

import './Nav.scss'

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
interface NavProps {
  onClick?: () => {}
  links: string[]
  profile: Resume.Profile
}

const DEVICE_DESKTOP = 'desktop'

const isShown = (show: string) => show === 'show'

export const Nav = ({ links, profile }: NavProps) => {
  const [hash, setHash] = useState(window?.location?.hash || links[0])
  const [show, setShow] = useState('hide')
  const handleShowBanner = useCallback(() => {
    return setShow(isShown(show) ? 'hide' : 'show')
  }, [show])
  const handleActive = useCallback(
    (event: MouseEvent, device?: string) => {
      const target = event.target as HTMLElement
      setHash(target.title)
      if (device === DEVICE_DESKTOP) return
      handleShowBanner()
    },
    [hash, show],
  )
  useDisableScroll([isShown(show)])
  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-logo-container">
          <div className="nav-logo">{capitalizeFirstLetter(profile.name)[0]}</div>
          <div className="nav-logo-socials">
            {profile.email && (
              <a href={`mailto:${profile.email}`}>
                <img src={emailSVG} height="15px" width="15px" />
              </a>
            )}
            {profile.linkedin && (
              <a href={`https://${profile.linkedin}`} target={'_blank'} rel="noreferrer">
                <img src={linkedinSVG} height="15px" width="15px" />
              </a>
            )}
          </div>
        </div>
        <div className="nav-burger">
          <BurgerMenu isActive={isShown(show)} onClick={handleShowBanner} />
        </div>
        <nav className="nav">
          <Links links={links} hash={hash} handleActive={ev => handleActive(ev, DEVICE_DESKTOP)} />
        </nav>
      </div>
      <div className="nav-banner-container">
        <div
          className={`nav-banner-lightbox ${show}`}
          onClick={isShown(show) ? handleShowBanner : () => {}}
        />
        <div className={`nav-banner ${show}`}>
          <div className={'nav-banner-content'}>
            <Links links={links} hash={hash} handleActive={handleActive} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
