/* eslint-disable react-hooks/exhaustive-deps */
import './Projet.scss'

import { useEffect } from 'react'
import { useData } from '../../provider/DataProvider'
import { useParams, useNavigate } from 'react-router-dom'
import MainLayout from "../../layout/MainLayout"
// import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from "../../components/Collapse/Collapse"
import { Link } from 'react-router-dom'


const Projet = () => {
    const {projetId} = useParams() // :houseId dans le router main.jsx ligne 19 ;)
    const {data} = useData()
    const navigate = useNavigate()
    const prefixUrl = import.meta.env.PROD ? '/Peggy_Souttre_Projet_8_Portfolio/' : ''

    const projectData = data.filter((projet) => projet.id === projetId)[0]

    // console.log(projectData)

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
            <div className='project__container'>

                <div className='slideshow'>
                    <img src={`${prefixUrl}/images/${projectData.cover}`} />
                </div>  
                
                <div className='header__project'>
                        <h1 className='header__project__title'>
                            {projectData.title}
                        </h1>

                        <div className='header__project__infos'>
                            <div className='header__project__infos__tags'>
                                {projectData.tags.map ((tag, i) => (
                                    <p key={i} className='header__project__infos__tags__tag'>{tag}</p>
                                ))}
                            </div>
                            
                            <Link className='header__project__infos__URL' to={projectData.URL} target='_blank'>Lien Github</Link>
                        </div>
                </div>

                <div className='collapse__project'>
                    <Collapse
                        title={"Description du projet"}
                        content={projectData.description}
                    />

                    <Collapse 
                        title={"Outils utilisés"}
                        content={renderOutils()}
                    />
                </div>
            </div> 
        </MainLayout>
    )
}

export default Projet