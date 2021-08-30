import { render, screen } from '@testing-library/react'

import { Certification } from './Certification'

import data from '../../../parsed-resume.json'

describe('Certification', () => {
  const certification = data.licensesAndCertifications[0]
  describe('name', () => {
    it('should render the name if passed', () => {
      render(<Certification {...certification} />)
      expect(screen.getByText(certification.name)).toBeTruthy()
    })
  })
  describe('issuer', () => {
    it('should render the issuingOrganization if passed', () => {
      const mockedIssuer = 'issuingOrganization mocked'
      render(<Certification {...{ ...certification, issuingOrganization: mockedIssuer }} />)
      expect(screen.getByText(mockedIssuer)).toBeTruthy()
    })
    it('should not render the issuingOrganization if no passed', () => {
      const { container } = render(<Certification {...certification} />)
      expect(container.querySelector('certification-company')).toBeNull()
    })
  })
  describe('issued At', () => {
    it('should render the issued At if passed', () => {
      render(<Certification {...certification} />)
      expect(screen.getByText(`Issued: ${certification.issuedAt}`)).toBeTruthy()
    })
  })
  describe('expires At', () => {
    it('should render the expires At if passed', () => {
      const mockExpires = 'March 2020'
      render(<Certification {...{ ...certification, expiresAt: mockExpires }} />)
      expect(screen.getByText(`Expires: ${mockExpires}`)).toBeTruthy()
    })
  })
  describe('credentialID', () => {
    it('should render the credentialID if passed', () => {
      const mockCredentialId = '1233456'
      render(<Certification {...{ ...certification, credentialID: mockCredentialId }} />)
      expect(screen.getByText(`Credential ID: ${mockCredentialId}`)).toBeTruthy()
    })
  })
})
