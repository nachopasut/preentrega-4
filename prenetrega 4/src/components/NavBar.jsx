import "./NavvBar.css"
import Card from "./CartWidget"
function NavBar() {
    return <div className="NavvBar"> 
  <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">Acerca de</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contacto</a>
        </li>
        <Card/>
      
        <source />
      </ul>
    </nav>
    </div>
    }
    
    export default NavBar