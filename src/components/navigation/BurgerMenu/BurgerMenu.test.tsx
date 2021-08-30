import { render, screen, fireEvent } from '@testing-library/react'

import { BurgerMenu } from './BurgerMenu'

describe('BurgerMenu', () => {
  const mockOnClick = jest.fn()
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('when no active', () => {
    it('should render the component', () => {
      const { container } = render(<BurgerMenu onClick={mockOnClick} />)

      expect(container).toMatchSnapshot()
    })
  })
  describe('when active', () => {
    it('should render the component', () => {
      const { container } = render(<BurgerMenu onClick={mockOnClick} isActive={true} />)

      expect(container).toMatchSnapshot()
    })
  })
  describe('when clock on the burger', () => {
    it('should call callback when click on burgermenu', () => {
      render(<BurgerMenu onClick={mockOnClick} isActive={true} />)
      fireEvent.click(screen.getByLabelText('navigation menu'))

      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
  })
})
