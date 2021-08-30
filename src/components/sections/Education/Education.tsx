import './Education.scss'

export const Education = (props: Resume.Education) => {
  const { school, degree, date, description } = props
  return (
    <div aria-label="education" className="education-container">
      {degree && <h2 className="education-degree">{degree}</h2>}
      {date && <p className="education-date">{date}</p>}
      <p className="education-school">{school}</p>
      {description && (
        <p
          className="education-description"
          dangerouslySetInnerHTML={{ __html: description?.replace(/\n/g, '<br />') }}
        />
      )}
    </div>
  )
}
