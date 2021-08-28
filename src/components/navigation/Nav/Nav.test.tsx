import { screen, render, fireEvent } from '@testing-library/react'

import { Nav } from './Nav'

const mockProfile = {
  name: 'test',
  location: 'Madrid',
  email: '',
  linkedin: '',
}

const setMockProps = (props?: { links?: string[]; profile?: Resume.Profile }) => {
  return {
    links: ['first', 'second'],
    profile: mockProfile,
    ...props,
  }
}

describe('Nav', () => {
  describe('social links', () => {
    it('should render email if exist', () => {
      render(<Nav {...setMockProps({ profile: { ...mockProfile, email: 'test@asd.com' } })} />)
      const node = screen.getByLabelText('mail to')
      expect(node).toBeTruthy()
      expect(node).toMatchSnapshot()
    })
    it('should no render email if no exist', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('mail to')).toBeFalsy()
    })
    it('should render linkedin if exist', () => {
      render(<Nav {...setMockProps({ profile: { ...mockProfile, linkedin: 'test@linkedin.com' } })} />)

      const node = screen.getByLabelText('linkedin profile')
      expect(node).toBeTruthy()
      expect(node).toMatchSnapshot()
    })
    it('should no render linkedin if no exist', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('linkedin profile')).toBeFalsy()
    })
    it('should render the burger menu', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('navigation menu')).toBeTruthy()
    })
    it('should render lightbox as hidden', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('navigation-lightbox-hide')).toBeTruthy()
      expect(screen.queryByLabelText('navigation-lightbox-show')).toBeFalsy()
    })
  })
  describe('onClick burgerMenu', () => {
    it('should change shown state of lightbox', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('navigation-lightbox-hide')).toBeTruthy()

      fireEvent.click(screen.queryByLabelText('navigation menu') as HTMLElement)

      expect(screen.queryByLabelText('navigation-lightbox-show')).toBeTruthy()
    })
    it('should change shown state of banner', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('navigation-banner-hide')).toBeTruthy()

      fireEvent.click(screen.queryByLabelText('navigation menu') as HTMLElement)

      expect(screen.queryByLabelText('navigation-banner-show')).toBeTruthy()
    })
  })
  describe('onClick lightbox', () => {
    it('should change shown state of lightbox', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('navigation-lightbox-hide')).toBeTruthy()

      fireEvent.click(screen.queryByLabelText('navigation menu') as HTMLElement)

      expect(screen.queryByLabelText('navigation-lightbox-show')).toBeTruthy()

      fireEvent.click(screen.queryByLabelText('navigation-lightbox-show') as HTMLElement)

      expect(screen.queryByLabelText('navigation-lightbox-hide')).toBeTruthy()
    })
    it('should change shown state of banner', () => {
      render(<Nav {...setMockProps()} />)

      expect(screen.queryByLabelText('navigation-banner-hide')).toBeTruthy()

      fireEvent.click(screen.queryByLabelText('navigation menu') as HTMLElement)

      expect(screen.queryByLabelText('navigation-banner-show')).toBeTruthy()

      fireEvent.click(screen.queryByLabelText('navigation-lightbox-show') as HTMLElement)

      expect(screen.queryByLabelText('navigation-banner-hide')).toBeTruthy()
    })
  })
})
