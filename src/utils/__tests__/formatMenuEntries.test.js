import { formatMenuEntries } from '../formatMenuEntries'

describe('formatMenuEntries', () => {
  describe('when entry is within the filtered out list', () => {
    it('should not return that entry', () => {
      const mockedValues = {
        profile: [1],
        summary: [1],
      }
      expect(formatMenuEntries(mockedValues)).toEqual(['profile'])
    })
  })
  describe('when entry doesnt have any values', () => {
    it('should not be returned', () => {
      const mockedValues = {
        profile: [],
        skills: [1],
        experiences: [1],
      }
      expect(formatMenuEntries(mockedValues)).toEqual(['skills', 'experiences'])
    })
  })
  describe('when entry has mapped name', () => {
    describe('and some values', () => {
      describe('and its not includes on the filterd out values', () => {
        it('should return the mapped name', () => {
          const mockedValues = {
            licensesAndCertifications: [1],
            honorsAndAwards: [1],
          }
          expect(formatMenuEntries(mockedValues)).toEqual(['certifications', 'awards'])
        })
      })
    })
  })
  describe('when entry has not mapped name', () => {
    describe('and some values', () => {
      describe('and its not includes on the filterd out values', () => {
        it('should return the current name', () => {
          const mockedValues = {
            profile: [1],
            skills: [1],
          }
          expect(formatMenuEntries(mockedValues)).toEqual(['profile', 'skills'])
        })
      })
    })
  })
})
