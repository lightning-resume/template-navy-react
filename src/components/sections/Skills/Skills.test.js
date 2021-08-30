import { render, screen } from '@testing-library/react'

import { Skills } from './Skills'

describe('Skills', () => {
  it('should render the skill passed', () => {
    const mockSkill = 'test skill'
    render(<Skills skill={mockSkill} />)
    expect(screen.getByText(mockSkill)).toBeTruthy()
  })
})
