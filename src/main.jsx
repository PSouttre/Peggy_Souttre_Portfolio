import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Provider
import {DataProvider} from './provider/DataProvider'

// PAGES
import Home from "./pages/Home/Home"
import Projet from "./pages/Projet/Projet"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"
import Portfolio from './pages/Portfolio/Portfolio'

// STYLE
import './style/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter
        basename={import.meta.env.PROD ? '/Peggy_Souttre_Portfolio/' : '/'}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projet/:projetId' element={<Projet/>} />
          <Route path='/a-propos' element={<About />} />
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
