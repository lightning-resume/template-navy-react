import { capitalizeFirstLetter } from '../capitalizeLetter'

describe('capitalizeFirstLetter', () => {
  describe('when first letter one is capital', () => {
    it('should return the word with capital letter', () => {
      const mock = 'testword'
      expect(capitalizeFirstLetter(mock)).toBe('Testword')
    })
  })
  describe('when first letter one capital', () => {
    it('should return the same format', () => {
      const mock = 'Testword'
      expect(capitalizeFirstLetter(mock)).toBe('Testword')
    })
  })
})
