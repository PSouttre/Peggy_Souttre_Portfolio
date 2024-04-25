import './Portfolio.scss'
import MainLayout from "../../layout/MainLayout"


import { useData } from '../../provider/DataProvider'

import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'

const Project = () => {

const {data} = useData();

return (
    <MainLayout>

<div className='container'>
{!data
    ? <p>Loading...</p> 
    : data.map((projet) => {
        return (
            <Link className="container__link" to={`/projet/${projet.id}`} key={projet.id}>
                <Card projet={projet} />
            </Link>
        )
    })
}
</div>
</MainLayout>
)
}

export default Project; 