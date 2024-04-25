/* eslint-disable react/prop-types */
import './Card.scss'

const Card = ({projet}) => {
    const prefixUrl = import.meta.env.PROD ? '/Peggy_Souttre_Projet_8_Portfolio/' : ''

    const imageAlt = projet.logo.split('.')[0].replace(/_/, ' ');

    // On projette le state sur l'affichage (render)
    return (
            <div className='card'>
                <div className='card__image'>
                    <img src={`${prefixUrl}/images/${projet.logo}`} alt={imageAlt}/>
                </div>
                <div className='card__description'>
                    <div className='card__description__title__project'>
                        {projet.title}
                    </div>
                    <div className='card__description__subtitle__project'>
                        {projet.subtitle}
                    </div>
                </div>
            </div>
    )
}

export default Card

