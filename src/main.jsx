import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Provider
import {DataProvider} from './provider/DataProvider'

// PAGES
import Home from "./pages/Home/Home"
import Housing from "./pages/Housing/Housing"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"
import Project from './pages/Project/Project'

// STYLE
import './style/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter
        basename={import.meta.env.PROD ? '/Peggy_Souttre_Projet_8_Portfolio/' : '/'}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/housing/:projetId' element={<Housing />} />
          <Route path='/a-propos' element={<About />} />
          <Route path='/projets' element={<Project/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
