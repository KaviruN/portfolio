function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
            <a href="/" className="navbar__link">Home</a>
        </li>
        <li className="navba__item">
            <a href="#about" className="navbar__link">About</a>
        </li>
        <li className="navba__item">
            <a href="#contact" className="navbar__link">Contact</a>
        </li>

      </ul>
    </nav>
  );

}
export default NavBar;