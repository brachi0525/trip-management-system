import React, { useContext, useEffect, useState } from 'react'
import { StudentContext } from "../../context/student";
import { useNavigate } from 'react-router';

export const RegisterStudent = () => {
    const { registerStudent } = useContext(StudentContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ fullName: "", classNumber: "", studentID: "" });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addStudent = async (e) => {
        try {
            e.preventDefault();
            const newstudent = { ...formData };
            setFormData({ fullName: "", classNumber: "", studentID: "", });
          if(await registerStudent(newstudent)) 
            alert("Student registered successfully")
        } catch (error) {
            console.log(error);
            alert("Error registering student");

        }
        navigate("/DashbordStudent")
    };



    return (
        <>
            <br />
            <h1>רישום תלמידה</h1>
            <br />
            <form onSubmit={addStudent}>
                <input type="text" name="fullName" placeholder="enter full name" value={formData.fullName} onChange={handleChange} /><br /><br />
                <input type="text" name="classNumber" placeholder="enter classNumber" value={formData.classNumber} onChange={handleChange} /><br /><br />
                <input type="text" name="studentID" placeholder="enter studentID" value={formData.studentID} onChange={handleChange} /><br /><br />
                <button type="submit">הירשם</button>
            </form>
        </>
    )
}

