import './Header.scss'
import { NavLink } from "react-router-dom";

import img from '../../assets/icons/logo_kasa.png'

const Header = () => {
    return (
        <header id='header'>
            <div>
                {/* <img src={img} alt="logo kasa" /> */}
            </div>
            <nav className='navbar'>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    Accueil
                </NavLink>
                <NavLink to="/a-propos" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    A Propos de moi
                </NavLink>
                <NavLink to="/projets" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    Projets
                </NavLink>

            </nav>
        </header>
    )
}

export default Header

