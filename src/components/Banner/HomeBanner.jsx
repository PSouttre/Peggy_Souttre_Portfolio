import './HomeBanner.scss'
import img from '../../assets/images/photo_PS.png'

const HomeBanner = () => {
    return (
    <div className='homebanner'>
        <div className='img__banner'>
            <img src={img} alt="Peggy Souttre, développeuse web" />
        </div>
        <div className='text__banner'>
            <p>Après des années comme déléguée médicale en nutrition puis professeure en lycée professionnel, j'ai souhaité me reconvertir dans un milieu professionnel dynamique et où le partage est de rigueur.</p>
            <br />
            <p>Partie "from scratch", me voilà développeuse web !</p>
            <br />
            <p>Je recherche maintenant une alternance en Alsace pour continuer à évoluer dans ce domaine passionnant. </p>
        </div>
    </div>
    )
}

export default HomeBanner
