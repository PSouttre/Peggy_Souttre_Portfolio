import './Footer.scss'
import { NavLink } from "react-router-dom";
import logoLinkedin from '../../assets/icons/logoLinkedin.png'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='linkedIn'>

                <NavLink to="www.linkedin.com/in/peggy-souttre-825762158" className='linkedinLink'>
                    <img src={logoLinkedin} alt='Logo LinkedIn' className='logoLinkedin'/>
                </NavLink>

            
            </div>
            
            <p className='footer__copyright'>©2024 Peggy Souttre Tous droits réservés</p>
            
        </footer>
    )
}

export default Footer