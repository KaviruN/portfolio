import { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import 'devicon/devicon.min.css'
import './scss/style.scss'
import Hero from './Hero';
import NavBar from "./NavBar"
import SkillCard from './SkillCard';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';



function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    elements.forEach((el, index) => {
      const element = el as HTMLElement
      element.style.setProperty('--reveal-delay', `${index * 80}ms`)
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container">
      <header className='header reveal is-visible'>
        <NavBar />
        <Hero />
      </header>
      <main className="site-main">
        <About />
        <section className='skills reveal'>
          <h2 className='skills__title'>My Skills</h2>
          <div className="skills__cards">
            <SkillCard icon="ri-html5-fill" name="HTML" />
            <SkillCard icon="ri-css3-fill" name="css" />
            <SkillCard icon="ri-javascript-fill" name="JavaScript" />
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
        <Projects />
      </main>
      <Contact />
    </div>
  )
}

export default App
