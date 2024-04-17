/* eslint-disable react/prop-types */
import './Card.scss'

const Card = ({projet}) => {

const handleClickLocation = () => {
}

    // On projette le state sur l'affichage (render)
    return (
            <div className='location__card'onClick={handleClickLocation}>
                <div className='location__card__image__cover'>
                    <img src={projet.cover} />
                </div>
                <div className='location__card__title__card'>
                    {projet.title}
                </div>
            </div>
    )
}

export default Card