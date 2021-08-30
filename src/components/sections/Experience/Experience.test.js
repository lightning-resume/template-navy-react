import { render, screen } from '@testing-library/react'

import { Experience } from './Experience'

import data from '../../../parsed-resume.json'

describe('Experience', () => {
  const experience = data.experiences[0]
  describe('position', () => {
    it('should render the position if passed', () => {
      render(<Experience {...experience} />)
      expect(screen.getByText(experience.position)).toBeTruthy()
    })
  })
  describe('company', () => {
    it('should render the issuer if passed', () => {
      render(<Experience {...experience} />)
      expect(screen.getByText(experience.company)).toBeTruthy()
    })
  })
  describe('date', () => {
    it('should render the date if passed', () => {
      const { container } = render(<Experience {...experience} />)
      expect(container.querySelector('.experience-date')).toBeTruthy()
    })
  })
  describe('description', () => {
    it('should render the description if passed', () => {
      const mockedDescription = 'mocked description'
      const { container } = render(<Experience {...{ ...experience, description: mockedDescription }} />)
      expect(container.querySelector('.experience-description')).toBeTruthy()
    })
    it('should not render the description if no passed', () => {
      const { container } = render(<Experience {...experience} />)
      expect(container.querySelector('.experience-description')).toBeNull()
    })
  })
})
