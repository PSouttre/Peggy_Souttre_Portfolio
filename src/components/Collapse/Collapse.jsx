/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Collapse.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, content}) => {

    // On définit un state
    const [isDisplay, setIsDisplay] = useState(false)

    // On définit le comportement
    const handleClick = () => {
        setIsDisplay(!isDisplay)
    }
    // On projette le state sur l'affichage
    return (
        <div className='each__collapse'>
            <div
                className="each__collapse__header"
                onClick={handleClick}
            >   
                <h2 className="each__collapse__header__title">{title}</h2>
                <FontAwesomeIcon icon={isDisplay ? faChevronUp : faChevronDown} />
            </div>
            <div className={`each__collapse__content ${isDisplay ? '' : 'hidden'}`}>    
                <div className={'content'}>{content}</div>
            </div>
        </div>
    )
}

export default Collapse