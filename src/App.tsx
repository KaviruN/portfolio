import 'remixicon/fonts/remixicon.css'
import "./scss/style.css";
import Hero from './Hero';
import NavBar from "./NavBar"
import SkillCard from './SkillCard';
import 'devicon/devicon.min.css'


function App() {
  return (
    <div className="container">
      <header className='header'>
        <NavBar />
        <Hero />
      </header>
      <main>
        <section className='skills'>
          <SkillCard icon="ri-html5-fill" name="HTML"/>
          <SkillCard icon="ri-css3-fill" name="css"/>
          <SkillCard icon="ri-javascript-fill" name="JvaScript"/>
          <SkillCard icon="devicon-typescript-plain" name="TypeScript"/>
          <SkillCard icon="ri-reactjs-line" name="React"/>
          <SkillCard icon="devicon-sass-original" name="Sass(Scss)"/>
          <SkillCard icon="devicon-git-plain" name="Git"/>
          <SkillCard icon="ri-github-fill" name="GitHub"/>
          <SkillCard icon="devicon-c-plain" name="C"/>
          <SkillCard icon="devicon-python-plain" name="Python"/>
          <SkillCard icon="devicon-django-plain" name="Django"/>
          <SkillCard icon="devicon-djangorest-plain" name="DjangoReset"/>
          
        </section>
      </main>
    </div>
  )
}

export default App
