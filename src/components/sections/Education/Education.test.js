import { render, screen } from '@testing-library/react'

import { Education } from './Education'

import data from '../../../parsed-resume.json'

describe('Education', () => {
  const education = data.education[0]
  fdescribe('degree', () => {
    it('should render the degree if passed', () => {
      const mockedDegree = 'degree mocked'
      render(<Education {...{ ...education, degree: mockedDegree }} />)
      expect(screen.getByText(mockedDegree)).toBeTruthy()
    })
    it('should not render the degree if no passed', () => {
      const { container } = render(<Education {...education} />)
      expect(container.querySelector('education-degree')).toBeNull()
    })
  })
  fdescribe('date', () => {
    it('should render the date if passed', () => {
      const mockDate = 'Feb 2021'
      render(<Education {...{ ...education, date: mockDate }} />)
      expect(screen.getByText(mockDate)).toBeTruthy()
    })
    it('should not render the date if no passed', () => {
      const { container } = render(<Education {...education} />)
      expect(container.querySelector('education-date')).toBeNull()
    })
  })
  fdescribe('school', () => {
    it('should render the school if passed', () => {
      render(<Education {...education} />)
      expect(screen.getByText(education.school)).toBeTruthy()
    })
  })
  fdescribe('description', () => {
    it('should render the description if passed', () => {
      const { container } = render(<Education {...{ ...education, description: 'mocked description' }} />)
      expect(container.querySelector('.education-description')).toBeTruthy()
    })
    it('should not render the description if no passed', () => {
      const { container } = render(<Education {...education} />)
      expect(container.querySelector('.education-description')).toBeNull()
    })
  })
})
