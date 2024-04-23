import MainLayout from "../../layout/MainLayout"
import Collapse from "../../components/Collapse/Collapse"
import "./About.scss"
import HomeBanner from "../../components/Banner/HomeBanner"

const About = () => {
    document.title = "A propos de moi"
    return (
        <MainLayout>
            <HomeBanner/>

            <div className="container__collapse">
                <Collapse title="Formation Developpeuse" content="Formation OPenClassRooms 2023/2024  Développeur Web" />

                <Collapse title="Parcours" content="" />

                <Collapse title="Soft Skills" content="" />

            </div>

        </MainLayout>  
    )
}

export default About