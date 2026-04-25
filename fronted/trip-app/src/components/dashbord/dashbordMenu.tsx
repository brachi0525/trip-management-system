import { NavLink } from "react-router"
 const DashbordMenu = () => {

    return <nav>
        <NavLink to="/DashbordTeacher">דשבורד מורה</NavLink> <br />
        <NavLink to="/DashbordStudent"> דשבורד תלמידה</NavLink><br />
        <NavLink to="/Map">  מפת מיקומים </NavLink>

    </nav>
}
export default DashbordMenu