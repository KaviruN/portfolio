import 'remixicon/fonts/remixicon.css'
import 'devicon/devicon.min.css'
import "./scss/style.css";
import Hero from './Hero';
import NavBar from "./NavBar"
import SkillCard from './SkillCard';
import About from './ABout';



function App() {
  return (
    <div className="container">
      <header className='header'>
        <NavBar />
        <Hero />
      </header>
      <main>
        <About />
        <section className='skills'>
          <h2 className='skills__title'>My Skills</h2>
          <div className="skills__cards">
            <SkillCard icon="ri-html5-fill" name="HTML" />
            <SkillCard icon="ri-css3-fill" name="css" />
            <SkillCard icon="ri-javascript-fill" name="JvaScript" />
            <SkillCard icon="devicon-typescript-plain" name="TypeScript" />
            <SkillCard icon="ri-reactjs-line" name="React" />
            <SkillCard icon="devicon-sass-original" name="Sass(Scss)" />
            <SkillCard icon="devicon-git-plain" name="Git" />
            <SkillCard icon="ri-github-fill" name="GitHub" />
            <SkillCard icon="devicon-c-plain" name="C" />
            <SkillCard icon="devicon-python-plain" name="Python" />
            <SkillCard icon="devicon-django-plain" name="Django" />
            <SkillCard icon="devicon-djangorest-plain" name="DjangoReset" />
          </div>

        </section>
      </main>
    </div>
  )
}

export default App
