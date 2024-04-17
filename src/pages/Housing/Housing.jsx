/* eslint-disable react-hooks/exhaustive-deps */
import './Housing.scss'

import { useEffect } from 'react'
import { useData } from '../../provider/DataProvider'
import { useParams, useNavigate } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from "../../components/Collapse/Collapse"


const Housing = () => {
    const {projetId} = useParams() // :houseId dans le router main.jsx ligne 19 ;)
    const {data} = useData()
    const navigate = useNavigate()

    const projectData = data.filter((projet) => projet.id === projetId)[0]

    // ca se joue QU'APRES le 1er rendu
    useEffect(() => {
        if (!projectData) {
            navigate('/error?reason=bad-id')
        }
    }, [])

    if (!projectData){
        return null
    }
    

    const renderOutils = () => {
        return (
            <ul>
                {projectData.outils.map((outil, i) => (
                    <li key={i}>{outil}</li>
                ))}
            </ul>
        )
    }
    

    return (
        <MainLayout>
            <div className='housing__container'>

                <div className='slideshow'>
                    <Slideshow pictures={projectData.cover} />
                </div>
               
                
                <div className='header__housing'>
                    <article className='header__housing__infos'>
                        <h1 className='header__housing__title'>
                            {projectData.title}
                        </h1>

                        {/* <h2 className='header__housing__location'>
                            {housingData.location}
                        </h2> */}

                        <div className='header__housing__tags'>
                            {projectData.tags.map ((tag, i) => (
                                <p key={i} className='header__housing__tags__tag'>{tag}</p>
                            ))}
                        </div>

                        <div className='header__housing__host'>
                            <a className='header__housing__tags_tag'>
                                {projectData.URL}
                            </a>
                        </div>


                    </article>



                            {/* <img src={projectData.host.picture} alt={`${projectData.host.name} propriétaire de ${projectData.title}`} className='header__housing__host__img'/> */}

                        {/* <div className='header__housing__rating'>
                            {ratingStar.map((ratingStarElement) => ratingHousing >= ratingStarElement ?
                                <span key={ratingStarElement.toString()} className='faStarPink'>{starPink}</span> 
                                : <span key={ratingStarElement.toString()} className='faStarGrey'>{starGrey}</span>
                            
                            )}
                        </div> */}

                </div>

                <div className='collapse__housing'>
                    <Collapse
                        title={"Description"}
                        content={projectData.description}
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