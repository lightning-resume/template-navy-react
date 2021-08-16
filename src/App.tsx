import { useRef } from 'react'

import { Nav } from './components/navigation/Nav'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Certification } from './components/sections/Certification'
import { Awards } from './components/sections/Awards'
import { Skills } from './components/sections/Skills'
import { formatMenuEntries } from './utils/formatMenuEntries'

import './App.scss'
import data from './linkdin-data.json'

function App() {
  const homeRef = useRef(null)
  const experiencesRef = useRef(null)
  const educationRef = useRef(null)
  const certificationRef = useRef(null)
  const awardsRef = useRef(null)
  const skillsRef = useRef(null)
  return (
    <div className="App">
      <header className="App-header">
        <Nav links={formatMenuEntries(data)} logo={data.profile.name} />
      </header>
      <section ref={homeRef} id="profile" className="App-profile">
        <h1 className="home-title">{data?.profile?.name}</h1>
        <p
          className="home-summary"
          dangerouslySetInnerHTML={{ __html: data.summary.replace(/\n/g, '<br />') }}
        />
      </section>
      <section ref={experiencesRef} id="experiences">
        <h1 className="section-title">Experiences</h1>
        {data.experiences?.map(experience => (
          <Experience key={experience.id} {...experience} />
        ))}
      </section>
      <section ref={educationRef} id="education">
        <h1 className="section-title">Education</h1>
        {data.education?.map(ele => (
          <Education key={ele.id} {...ele} />
        ))}
      </section>
      <section ref={skillsRef} id="skills">
        <h1 className="section-title">Skills</h1>
        <div className="section-skills">
          {data.skills?.map(ele => (
            <Skills key={ele} skill={ele} />
          ))}
        </div>
      </section>
      <section ref={certificationRef} id="certifications">
        <h1 className="section-title">Certifications</h1>
        {data.licensesAndCertifications?.map(ele => (
          <Certification key={ele.id} {...ele} />
        ))}
      </section>
      <section ref={awardsRef} id="awards">
        <h1 className="section-title">Awards</h1>
        {data.honorsAndAwards?.map(ele => (
          <Awards key={ele.id} {...ele} />
        ))}
      </section>
      <div>{/* Footer */}</div>
    </div>
  )
}

export default App
