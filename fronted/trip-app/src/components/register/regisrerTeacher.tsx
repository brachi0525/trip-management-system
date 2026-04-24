import React, { useEffect, useState, useContext } from 'react'
import { TeacherContext } from "../../context/teacher"
import { useNavigate } from 'react-router';
export const RegisrerTeacher = () => {
    const { registerTeacher } = useContext(TeacherContext);

    const [formData, setFormData] = useState({ fullName: "", classNumber: "", teacherID: "", password: "" });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addTeacher = async (e) => {
        try {
            e.preventDefault();
            const newTeacher = { ...formData };
            setFormData({ fullName: "", classNumber: "", teacherID: "", password: "" });

            if (await registerTeacher(newTeacher)) {
                alert("Teacher registered successfully ");
                navigate("/Login");
            }

        } catch (error) {
            console.log(error)

        }
    };



    return (
        <>
            <br />
            <h1>רישום מורה</h1>
            <br />
            <form onSubmit={addTeacher}>
                <input type="text" name="fullName" placeholder="enter full name" value={formData.fullName} onChange={handleChange} /><br /><br />
                <input type="text" name="classNumber" placeholder="enter classNumber" value={formData.classNumber} onChange={handleChange} /><br /><br />
                <input type="text" name="teacherID" placeholder="enter teacherID" value={formData.teacherID} onChange={handleChange} /><br /><br />
                <input type="password" name="password" placeholder="enter password" value={formData.password} onChange={handleChange} /><br />
                <br />
                <button type="submit">הירשם</button>
            </form>
        </>
    )
}


