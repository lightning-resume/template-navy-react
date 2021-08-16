import './BurgerMenu.scss'

export const BurgerMenu = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
  return (
    <div onClick={onClick} className={['burger-container', isActive ? 'active' : 'no-active'].join(' ')}>
      <div className="burger-line first" />
      <div className="burger-line second" />
      <div className="burger-line third" />
    </div>
  )
}
