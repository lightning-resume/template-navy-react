/* eslint-disable */

declare namespace Resume {
  interface Profile {
    name: string
    location: string
    email?: string
    linkedin?: string
  }
  type Summary = string
  type Skills = string[]
  interface Experience {
    id: string
    thumbnail?: string
    position: string
    company: string
    date: string
    description?: string
  }
  interface Education {
    id: string
    thumbnail?: string
    school?: string
    degree?: string
    date?: string
    description?: string
  }
  interface LicensesAndCertifications {
    id: string
    name: string
    thumbnail?: string
    issuedAt?: string
    issuingOrganization?: string
    credentialID?: string
    expiresAt?: string
  }
  interface HonorsAndAwards {
    id: string
    thumbnail?: string
    title: string
    issuer?: string
    date?: string
    description?: string
  }
}
