import 'remixicon/fonts/remixicon.css'
import "./scss/style.css";
import Hero from './Hero';
import NavBar from "./NavBar"


function App() {
  return (
    <div className="container">
      <header className='header'>
        <NavBar />
        <Hero />
      </header>
    </div>
  )
}

export default App
