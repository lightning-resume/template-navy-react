import { capitalizeFirstLetter } from 'src/utils/capitalizeLetter'
import './Nav.scss'

interface NavProps {
  onClick?: () => {}
  links: string[]
  logo: string
}

export const Nav = ({ onClick, links, logo = 'My CV' }: NavProps) => {
  return (
    <div className="nav-container">
      <div>{logo}</div>
      <div className="nav">
        {links.map(link => (
          <a key={link} className="nav-link" href={`#${link}`}>
            <span onClick={onClick}>{capitalizeFirstLetter(link)}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
