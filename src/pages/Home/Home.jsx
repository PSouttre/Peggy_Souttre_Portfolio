import './Home.scss'

import MainLayout from "../../layout/MainLayout"
import HomeBanner from '../../components/Banner/HomeBanner'

const Home = () => {


    // affichage
    return (
        <MainLayout>
            <HomeBanner/>
        </MainLayout>
    )
}

export default Home