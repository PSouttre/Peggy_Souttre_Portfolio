import './HomeBanner.scss'
import img from '../../assets/images/image_source_1.png'

const HomeBanner = () => {
    return (
    <div className='img__banner'>
        <img src={img} alt="Paysage de falaise et océan" />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
    )
}

export default HomeBanner
