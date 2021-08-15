export interface Resume {
  title: string
  experiences: [
    {
      id: string
      thumbnail: string
      position: string
      company: string
      date: string
      description?: string
    },
  ]
  education: [
    {
      id: string
      thumbnail: string
      school: string
      degree?: string
      date?: string
      description?: string
    },
  ]
  licensesAndCertifications: [
    {
      name: string
      thumbnail: string
      issuingOrganization: string
      credentialID: string
    },
  ]
  skills: string[]
  honorsAndAwards: [
    {
      id: string
      thumbnail: string
      title: string
      issuer?: string
      date?: string
      description?: string
    },
  ]
}
