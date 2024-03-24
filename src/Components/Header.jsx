
import {NavLink} from 'react-router-dom'

export default function Header() {
    return(
        <>
            <header>
                <NavLink to="/." id="logo">S<span>tina<br/> Hedman.</span></NavLink>
                <nav>
                    <input type="checkbox" id="nav-toggle" style={{ display:"none"}}/>
                    <ul className="menu">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/career">Career</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="bars-menu">
                    <label for="nav-toggle">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                </div>
            </header>
        </>
    )
}