/* eslint-disable react/prop-types */
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

import "./MainLayout.scss"

const MainLayout = ({children}) => {
    return (
        <div className="mainLayout">
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout