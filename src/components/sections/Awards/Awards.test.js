import { render, screen } from '@testing-library/react'

import { Awards } from './Awards'

import data from '../../../parsed-resume.json'

describe('Awards', () => {
  const awards = data.honorsAndAwards[0]
  describe('title', () => {
    it('should render the title if passed', () => {
      render(<Awards {...awards} />)
      expect(screen.getByText(awards.title)).toBeTruthy()
    })
  })
  describe('issuer', () => {
    it('should render the issuer if passed', () => {
      const mockedIssuer = 'issuer mocked'
      render(<Awards {...{ ...awards, issuer: mockedIssuer }} />)
      expect(screen.getByText(mockedIssuer)).toBeTruthy()
    })
    it('should not render the issuer if no passed', () => {
      const { container } = render(<Awards {...awards} />)
      expect(container.querySelector('.awards-issuer')).toBeNull()
    })
  })
  describe('date', () => {
    it('should render the date if passed', () => {
      render(<Awards {...awards} />)
      expect(screen.getByText(awards.date)).toBeTruthy()
    })
    it('should not render the date if no passed', () => {
      const { container } = render(<Awards {...{ ...awards, date: undefined }} />)
      expect(container.querySelector('.awards-date')).toBeNull()
    })
  })
  describe('description', () => {
    it('should render the description if passed', () => {
      const { container } = render(<Awards {...awards} />)
      expect(container.querySelector('.awards-description')).toBeTruthy()
    })
    it('should not render the description if no passed', () => {
      const { container } = render(<Awards {...{ ...awards, description: undefined }} />)
      expect(container.querySelector('.awards-description')).toBeNull()
    })
  })
})
