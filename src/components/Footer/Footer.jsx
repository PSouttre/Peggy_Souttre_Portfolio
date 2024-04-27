import './Footer.scss'
import { Link } from "react-router-dom";
import logoLinkedin from '../../assets/icons/logoLinkedin.png'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='linkedIn'>

                <Link to="https://linkedin.com/in/peggy-souttre-825762158" target="_blank" className='linkedinLink'>
                    <img src={logoLinkedin} alt='Logo LinkedIn' className='logoLinkedin'/>
                </Link>  
            </div>
            
            <p className='footer__copyright'>©2024 Peggy Souttre Tous droits réservés</p>
        </footer>
    )
}

export default Footer