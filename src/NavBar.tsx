import { useEffect, useState } from 'react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  const openMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 700) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (window.innerWidth < 700) {
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav className={`navbar ${isOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__container">
        <ul className="navbar__list" id="primary-navigation">
          <li className="navbar__item">
            <a href="#" className="navbar__link" onClick={closeMenu}>Home</a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link" onClick={closeMenu}>About Me</a>
          </li>
          <li className="navbar__item">
            <a href="#projects" className="navbar__link" onClick={closeMenu}>Projects</a>
          </li>
          <li className="navbar__item">
            <a href="#contact" className="navbar__link" onClick={closeMenu}>Contact</a>
          </li>

        </ul>
      </div>

      <button
        className="navbar__icon"
        onClick={openMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        type="button"
      >
        <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </button>
    </nav>
  )

}
export default NavBar;