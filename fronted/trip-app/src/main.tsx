import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NavLink } from "react-router"
import MainMenu from './components/mainMenu.tsx'
import {RegisrerTeacher} from './components/register/regisrerTeacher.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <MainMenu />
      <Routes>
        <Route path='/RegisrerTeacher' element={<RegisrerTeacher />} />


      </Routes>


      <App />
    </BrowserRouter>

  </StrictMode>,
)
