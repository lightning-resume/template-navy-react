import './Certification.scss'

export const Certification = (props: Resume.LicensesAndCertifications) => {
  const { name, issuedAt, issuingOrganization, credentialID, expiresAt } = props
  return (
    <div aria-label="certification" className="certification-container">
      <h2 className="certification-name">{name}</h2>
      {issuingOrganization && <p className="certification-company">{issuingOrganization}</p>}
      {issuedAt && <p className="certification-entry">{`Issued: ${issuedAt}`}</p>}
      {expiresAt && <p className="certification-entry">{`Expries: ${expiresAt}`}</p>}
      {credentialID && <p className="certification-entry">{`Credential ID: ${credentialID}`}</p>}
    </div>
  )
}
