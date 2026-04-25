import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { NavLink } from "react-router"
import MainMenu from './components/mainMenu.tsx'
import { RegisrerTeacher } from './components/register/regisrerTeacher.tsx'
import { RegisterStudent } from './components/register/registerStudent.tsx'
import Login from './components/register/login.tsx'
import { TeacherProvider } from './context/teacher.tsx'
import { StudentProvider } from './context/student.tsx'
import { DashbordTeacher } from './components/dashbord/dashbordTteacher.tsx'
import { DashbordStudents } from './components/dashbord/dashbordStudents.tsx'
import DashbordMenu from './components/dashbord/dashbordMenu.tsx'
import App from './App.tsx'
import { PrivateRoute } from './components/privateWrapper.tsx'
import { Map } from './components/map/map.tsx'
import  "./App.css";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TeacherProvider>
        <StudentProvider>
          <MainMenu />
          <DashbordMenu />
          <Routes >
            <Route path='/RegisrerTeacher' element={<RegisrerTeacher />} />
            <Route path='/RegisterStudent' element={<RegisterStudent />} />
            <Route path='/Login' element={<Login />} />
            {/* <Route path='/DashbordMenu' element={ <DashbordMenu /> } /> */}

            <Route path='/DashbordTeacher' element={<PrivateRoute><DashbordTeacher /></PrivateRoute>} />
            <Route path='/DashbordStudent' element={<PrivateRoute><DashbordStudents /></PrivateRoute>} />

            <Route path='/Map' element={<PrivateRoute><Map /></PrivateRoute>} />


          </Routes>


          <App />
        </StudentProvider>
      </TeacherProvider>
    </BrowserRouter>

  </StrictMode>,
)
