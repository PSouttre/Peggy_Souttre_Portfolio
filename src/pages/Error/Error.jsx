/* eslint-disable react/no-unescaped-entities */
import './Error.scss'
import { Link } from "react-router-dom"
import MainLayout from "../../layout/MainLayout"

const Error = () => {
    return (
        <MainLayout>
            <div className='container-error-page'>
                <h1>404</h1>

                <p>Oups! La page que vous demandez n'existe pas.</p>
                
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </MainLayout>
    )
}

export default Error