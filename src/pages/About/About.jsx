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
                <Collapse title="Formation Développeuse" content="Formation OpenClassRooms 2023/2024  Développeur Web. Diplôme de niveau 5 (bac + 2). Compétences acquises : construire un site web responsive et dynamique, créer des API et des bases de données, optimiser les performances et réaliser la maintenance de sites web déjà existants, gérer un projet web de A à Z.
                Téchnologies et langages : HTML, CSS, JavaScript, React, Git/GitHub, NodeJS, Express, MongoDB, API REST" />

                <Collapse title="Parcours professionnel" content="Mes années comme déléguée médicale puis professeure m'ont permise de développer mon relationnel aux autres, mes compétences de formatrice et enseignante et de faire preuve de beaucoup (beaucoup) d'autonomie." />

                <Collapse title="Soft Skills" content="Communication, Objectivité, Pertinence, Autonomie et Bonne humeur !" />

            </div>

        </MainLayout>  
    )
}

export default About