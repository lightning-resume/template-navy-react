import { render, screen } from '@testing-library/react'
import App from './App'

import data from './parsed-resume.json'

describe('App', () => {
  it('render the navigation', () => {
    render(<App />)
    expect(screen.queryByLabelText('navigation-menu')).toBeTruthy()
  })
  it('should render the title', () => {
    render(<App />)
    expect(screen.queryByText(data?.profile?.name)).toBeTruthy()
  })
  describe('experiences', () => {
    it('should render as many experiences as it has', () => {
      render(<App />)
      expect(screen.queryAllByLabelText('experiences').length).toBe(data.experiences.length)
    })
    it('should render the experiences title', () => {
      render(<App />)
      expect(screen.queryByLabelText('experiences section')).toBeTruthy()
    })
  })
  describe('Education', () => {
    it('should render as many Education as it has', () => {
      render(<App />)
      expect(screen.queryAllByLabelText('education').length).toBe(data.education.length)
    })
    it('should render the Education title', () => {
      render(<App />)
      expect(screen.queryByLabelText('education section')).toBeTruthy()
    })
  })
  describe('Skills', () => {
    it('should render all the skills passed', () => {
      render(<App />)
      data.skills.map(skill => {
        expect(screen.queryByText(skill)).toBeTruthy()
      })
    })
    it('should render the Skill title', () => {
      render(<App />)
      expect(screen.queryByLabelText('skills section')).toBeTruthy()
    })
  })
  describe('Certifications', () => {
    it('should render all the certifications passed', () => {
      render(<App />)
      expect(screen.queryAllByLabelText('certification').length).toBe(data.licensesAndCertifications.length)
    })
    it('should render the Certifications title', () => {
      render(<App />)
      expect(screen.queryByLabelText('certification section')).toBeTruthy()
    })
  })
  describe('Awards', () => {
    it('should render all the awards passed', () => {
      render(<App />)
      expect(screen.queryAllByLabelText('award').length).toBe(data.honorsAndAwards.length)
    })
    it('should render the awards title', () => {
      render(<App />)
      expect(screen.queryByLabelText('awards section')).toBeTruthy()
    })
  })
})
