import './Awards.scss'

export const Awards = (props: Resume.HonorsAndAwards) => {
  const { title, issuer, date, description } = props
  return (
    <div aria-label="award" className="awards-container">
      <h2 className="awards-title">{title}</h2>
      {issuer && <p className="awards-issuer">{issuer}</p>}
      {date && <p className="awards-date">{date}</p>}
      {description && (
        <p
          className="awards-description"
          dangerouslySetInnerHTML={{ __html: description?.replace(/\n/g, '<br />') }}
        />
      )}
    </div>
  )
}
