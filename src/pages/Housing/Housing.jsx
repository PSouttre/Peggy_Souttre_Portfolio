/* eslint-disable react-hooks/exhaustive-deps */
import './Housing.scss'

import { useEffect } from 'react'
import { useData } from '../../provider/DataProvider'
import { useParams, useNavigate } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from "../../components/Collapse/Collapse"


const Housing = () => {
    const {houseId} = useParams() // :houseId dans le router main.jsx ligne 19 ;)
    const {data} = useData()
    const navigate = useNavigate()

    const housingData = data.filter((house) => house.id === houseId)[0]

    // ca se joue QU'APRES le 1er rendu
    useEffect(() => {
        if (!housingData) {
            navigate('/error?reason=bad-id')
        }
    }, [])

    if (!housingData){
        return null
    }
    

    const renderOutils = () => {
        return (
            <ul>
                {housingData.outils.map((outil, i) => (
                    <li key={i}>{outil}</li>
                ))}
            </ul>
        )
    }
    

    return (
        <MainLayout>
            <div className='housing__container'>

                <div className='slideshow'>
                    <Slideshow pictures={housingData.cover} />
                </div>
               
                
                <div className='header__housing'>
                    <article className='header__housing__infos'>
                        <h1 className='header__housing__title'>
                            {housingData.title}
                        </h1>

                        {/* <h2 className='header__housing__location'>
                            {housingData.location}
                        </h2> */}

                        <div className='header__housing__tags'>
                            {housingData.tags.map ((tag, i) => (
                                <p key={i} className='header__housing__tags__tag'>{tag}</p>
                            ))}
                        </div>

                    </article>

                    {/* <article className='header__housing__host__infos'>

                        <div className='header__housing__host'>
                            <p className='header__housing__host__name'>
                                {housingData.host.name}
                            </p>

                            <img src={housingData.host.picture} alt={`${housingData.host.name} propriétaire de ${housingData.title}`} className='header__housing__host__img'/>
                        </div>

                        <div className='header__housing__rating'>
                            {ratingStar.map((ratingStarElement) => ratingHousing >= ratingStarElement ?
                                <span key={ratingStarElement.toString()} className='faStarPink'>{starPink}</span> 
                                : <span key={ratingStarElement.toString()} className='faStarGrey'>{starGrey}</span>
                            
                            )}
                         </div>
                    </article> */}

                </div>

                <div className='collapse__housing'>
                    <Collapse
                        title={"Description"}
                        content={housingData.description}
                    />

                    <Collapse 
                        title={"Outils"}
                        content={renderOutils()}
                    />
                </div>
            </div> 
        </MainLayout>
    )
}

export default Housing