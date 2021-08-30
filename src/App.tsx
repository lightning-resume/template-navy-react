import { Helmet } from 'react-helmet'
import { Nav } from './components/navigation/Nav'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Certification } from './components/sections/Certification'
import { Awards } from './components/sections/Awards'
import { Skills } from './components/sections/Skills'
import { formatMenuEntries } from './utils/formatMenuEntries'

import './App.scss'
import data from './parsed-resume.json'

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.profile?.name}</title>
        <link rel="canonical" href={process.env.PUBLIC_URL} />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <Nav links={formatMenuEntries(data)} profile={data.profile} />
        </header>
        <section aria-label="profile section" id="profile" className="App-profile">
          <h1 className="home-title">{data?.profile?.name}</h1>
          <p
            className="home-summary"
            dangerouslySetInnerHTML={{ __html: data.summary.replace(/\n/g, '<br />') }}
          />
        </section>
        {data.experiences?.length !== 0 && (
          <section id="experiences">
            <h1 aria-label="experiences section" className="section-title">
              Experiences
            </h1>
            {data.experiences.map((experience: Resume.Experience) => (
              <Experience key={experience.id} {...experience} />
            ))}
          </section>
        )}
        {data.education?.length !== 0 && (
          <section id="education">
            <h1 aria-label="education section" className="section-title">
              Education
            </h1>
            {data.education.map((ele: Resume.Education) => (
              <Education key={ele.id} {...ele} />
            ))}
          </section>
        )}
        {data.skills?.length !== 0 && (
          <section id="skills">
            <h1 aria-label="skills section" className="section-title">
              Skills
            </h1>
            <div className="section-skills">
              {data.skills.map(ele => (
                <Skills key={ele} skill={ele} />
              ))}
            </div>
          </section>
        )}
        {data.licensesAndCertifications?.length !== 0 && (
          <section id="certifications">
            <h1 aria-label="certification section" className="section-title">
              Certifications
            </h1>
            {data.licensesAndCertifications.map((ele: Resume.LicensesAndCertifications) => (
              <Certification key={ele.id} {...ele} />
            ))}
          </section>
        )}
        {data.honorsAndAwards?.length !== 0 && (
          <section id="awards">
            <h1 aria-label="awards section" className="section-title">
              Awards
            </h1>
            {data.honorsAndAwards.map((ele: Resume.HonorsAndAwards) => (
              <Awards key={ele.id} {...ele} />
            ))}
          </section>
        )}
      </div>
      <footer className="app-footer" aria-label="footer" />
    </>
  )
}

export default App
