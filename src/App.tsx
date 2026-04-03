import { useEffect, useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimeout = window.setTimeout(() => {
      setIsLoading(false)
    }, 900)

    return () => window.clearTimeout(loadingTimeout)
  }, [])

  useEffect(() => {
    if (isLoading) {
      return
    }

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
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading portfolio">
        <div className="loading-screen__content">
          <div className="loading-screen__brand">
            <span className="loading-screen__brand-letter">K</span>
            <span className="loading-screen__brand-letter">N</span>
          </div>
          <h1 className="loading-screen__text">
            <span className="loading-screen__char">K</span>
            <span className="loading-screen__char">a</span>
            <span className="loading-screen__char">v</span>
            <span className="loading-screen__char">i</span>
            <span className="loading-screen__char">r</span>
            <span className="loading-screen__char">u</span>
          </h1>
          <div className="loading-screen__dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="ambient-bg" aria-hidden="true">
        <span className="ambient-bg__orb ambient-bg__orb--one"></span>
        <span className="ambient-bg__orb ambient-bg__orb--two"></span>
        <span className="ambient-bg__orb ambient-bg__orb--three"></span>
      </div>
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
