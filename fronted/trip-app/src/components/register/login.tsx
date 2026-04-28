import { useState, useContext } from 'react'
import { TeacherContext } from "../../context/teacher"
import { useNavigate } from 'react-router';
function Login() {

    const [loginData, setLoginData] = useState({ teacherID: "", password: "" });
    const { loginTeacher } = useContext(TeacherContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const login = async (e) => {
        try {
            e.preventDefault();
            setLoginData({ teacherID: "", password: "" });

            const resalt = await loginTeacher(loginData.teacherID, loginData.password);
            const token = resalt.token
            if (token) {
                localStorage.setItem("token", token);
                alert("Login successful");
                navigate("/Map")
            } else {
                alert("Login failed");
            }
        } catch (error) {
            alert(error.message)
            console.log(error)

        }
    };
    return (
        <div className="container">

            <br />
            <h1>כניסת מורה</h1>
            <br />
            <form onSubmit={login}>
                <input type="text" name="teacherID" placeholder="enter teacherID" value={loginData.teacherID} onChange={handleChange} required/><br /><br />
                <input type="password" name="password" placeholder="enter password" value={loginData.password} onChange={handleChange} required/><br />
                <br />
                <button type="submit">היכנס</button>
            </form>
        </div>
    )
}

export default Login