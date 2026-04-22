import { NavLink ,Link} from "react-router"
 const MainMenu = () => {

    return <nav>
        <NavLink to="/RegisrerTeacher">רישום מורה</NavLink> <br />
        <NavLink to="/Login"> כניסת מורה</NavLink><br />
        <NavLink to="/RegisterStudent"> רישום תלמידה </NavLink>

    </nav>
}
export default MainMenu