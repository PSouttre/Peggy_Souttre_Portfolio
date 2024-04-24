import './HomeBanner.scss'
import img from '/images/photo_PS.png'

const HomeBanner = () => {
    return (
    <div className='banner'>
        <div className='banner__img'>
            <img src={img} alt="Peggy Souttre, développeuse web" />
        </div>
        <div className='banner__text'>
            <p className='banner__text__before'>Après des années comme déléguée médicale en nutrition puis professeure en lycée professionnel, j'ai souhaité me reconvertir dans un milieu professionnel <strong>dynamique</strong> et où le <strong>partage</strong> est de rigueur.</p>
            <br />
            <p className='banner__text__now'>Partie "from scratch", me voilà développeuse web !</p>
            <br />
            <p className='banner__text__next'>Je recherche maintenant une <strong>alternance en Alsace</strong> pour continuer à évoluer dans ce domaine passionnant. </p>
        </div>
    </div>
    )
}

export default HomeBanner
