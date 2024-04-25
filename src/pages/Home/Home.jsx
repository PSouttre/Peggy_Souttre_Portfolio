import MainLayout from "../../layout/MainLayout"
import HomeBanner from '../../components/Banner/HomeBanner'

const Home = () => {
    document.title = "Portfolio Peggy SOUTTRE"

    // affichage
    return (
        <MainLayout>
            <HomeBanner/>
        </MainLayout>
    )
}

export default Home