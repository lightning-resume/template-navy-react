import './BurgerMenu.scss'

export const BurgerMenu = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
  return (
    <div onClick={onClick} className={isActive ? 'active' : 'no-active'}>
      <div className="burger-line" />
      <div className="burger-line" />
      <div className="burger-line" />
    </div>
  )
}
