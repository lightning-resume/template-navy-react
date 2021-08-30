import './Experience.scss'

export const Experience = (props: Resume.Experience) => {
  const { position, company, date, description } = props
  return (
    <div aria-label="experiences" className="experience-container">
      <h2 className="experience-position">{position}</h2>
      <p className="experience-company">{company}</p>
      <p className="experience-date">{date}</p>
      {description && (
        <p
          className="experience-description"
          dangerouslySetInnerHTML={{ __html: description?.replace(/\n/g, '<br />') }}
        />
      )}
    </div>
  )
}
