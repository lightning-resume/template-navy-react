interface MappedNamesTypes {
  [key: string]: string
}

type MenuEntriesProps = {
  profile: Resume.Profile
  summary: Resume.Summary
  skills: Resume.Skills
  experiences: Resume.Experience[]
  education: Resume.Education[]
  licensesAndCertifications: Resume.LicensesAndCertifications[]
  honorsAndAwards: Resume.HonorsAndAwards[]
}

const menuKeysFilterOut = ['summary']
const mappedNames: MappedNamesTypes = {
  licensesAndCertifications: 'certifications',
  honorsAndAwards: 'awards',
}

export const formatMenuEntries = (menuEntries: MenuEntriesProps): string[] => {
  const filteredEntries = Object.entries(menuEntries).filter(([key, value]) => {
    if (menuKeysFilterOut.includes(key)) return
    return Array.isArray(value) ? value.length !== 0 : value
  })
  return filteredEntries.map(([key]) => mappedNames[key] || key)
}
