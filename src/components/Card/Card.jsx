/* eslint-disable react/prop-types */
import './Card.scss'

const Card = ({logement}) => {

const handleClickLocation = () => {
}

    // On projette le state sur l'affichage (render)
    return (
            <div className='location__card'onClick={handleClickLocation}>
                <div className='location__card__image__cover'>
                    <img src={logement.cover} />
                </div>
                <div className='location__card__title__card'>
                    {logement.title}
                </div>
            </div>
    )
}

export default Card