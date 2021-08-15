import { Nav } from './components/navigation/Nav'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'

import './App.scss'
import data from './linkdin-data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav links={Object.keys(data).filter(ele => ele !== 'summary')} logo={data.profile.name} />
      </header>
      <section id="home" className="App-home">
        <h1 className="home-title">{data?.profile?.name}</h1>
        <p
          className="home-summary"
          dangerouslySetInnerHTML={{ __html: data.summary.replace(/\n/g, '<br />') }}
        />
      </section>
      <section id="experiences">
        <h1 className="section-title">Experiences</h1>
        {data.experiences?.map(experience => (
          <Experience key={experience.id} {...experience} />
        ))}
      </section>
      <section id="education">
        <h1 className="section-title">Education</h1>
        {data.education?.map(ele => (
          <Education key={ele.id} {...ele} />
        ))}
      </section>
      <div>{/* Footer */}</div>
    </div>
  )
}

export default App
