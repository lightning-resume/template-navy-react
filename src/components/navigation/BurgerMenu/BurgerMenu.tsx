import jsxclassnames from 'jsxclassnames'

import './BurgerMenu.scss'

export const BurgerMenu = ({ isActive, onClick }: { isActive?: boolean; onClick: () => void }) => {
  return (
    <div
      aria-label="navigation menu"
      onClick={onClick}
      className={jsxclassnames('burger-container', isActive ? 'active' : 'no-active')}
    >
      <div className="burger-line first" />
      <div className="burger-line second" />
      <div className="burger-line third" />
    </div>
  )
}
