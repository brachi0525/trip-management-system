import { NavLink } from "react-router"
import '../style.css'

 const DashbordMenu = () => {

    return <nav className="navbar">
  <NavLink to="/DashbordTeacher">דשבורד מורה</NavLink>
  <NavLink to="/DashbordStudent">דשבורד תלמידה</NavLink>
  <NavLink to="/Map">מפת מיקומים</NavLink>
</nav>
}
export default DashbordMenu