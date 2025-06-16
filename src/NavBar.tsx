function NavBar() {

  const openMenu = () => {
    const menu = document.querySelector('.navbar__list') as HTMLElement;
    const icon = document.querySelector('.navbar__icon') as HTMLElement;

    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex';
      icon.classList.remove('ri-menu-line');
      icon.classList.toggle('ri-close-line');
    }
    else if (menu.style.display === 'flex') {
      menu.style.display = 'none';
      icon.classList.remove('ri-close-line');
      icon.classList.toggle('ri-menu-line');
    }
    
  }

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
            <a href="#" className="navbar__link">Home</a>
        </li>
        <li className="navba__item">
            <a href="#about" className="navbar__link">About Me</a>
        </li>
        <li className="navba__item">
            <a href="#contact" className="navbar__link">Contact</a>
        </li>

      </ul>
      <i className="ri-menu-line navbar__icon" onClick={openMenu}></i>
    </nav>
  );

}
export default NavBar;