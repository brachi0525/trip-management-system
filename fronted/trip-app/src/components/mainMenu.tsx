import { NavLink } from "react-router"
import './style.css'

 const MainMenu = () => {

    return <nav className="navbar" >
        <NavLink to="/RegisrerTeacher">רישום מורה</NavLink> 
        <NavLink to="/Login"> כניסת מורה</NavLink>
        <NavLink to="/RegisterStudent"> רישום תלמידה </NavLink>


    </nav>
}
export default MainMenu