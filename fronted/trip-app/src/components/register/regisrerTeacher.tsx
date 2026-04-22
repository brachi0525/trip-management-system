import React, { useEffect } from 'react'
import { useState } from 'react'

export const RegisrerTeacher = () => {

    const [fullName, SetFullName] = useState("")
    const [classNumber, SetClassNumber] = useState("")
    const [teacherID, SetTeacherID] = useState("")
    const [password, SetPassword] = useState("")




    const addTeacher = async (event:any) => {
        try {
            event.preventDefault();
            const newTeacher = {
                fullName: event.target.fullName.value,
                classNumber: event.target.classNumber.value,
                teacherID: event.target.teacherID.value,
                password: event.target.password.value
            }
            event.preventDefault();

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer my-token',
                    // 'My-Custom-Header': 'foobar'
                },
                body: JSON.stringify(newTeacher)
            };
            const response = await fetch("http://localhost:3000/teacher/register", requestOptions)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <br />
            <h1>רישום מורה</h1>
            <br />
            <form onSubmit={addTeacher}>
                <input type="text" placeholder="enter fullName" name="fullName" /> <br />
                <input type="text" placeholder="enter classNumber" name="classNumber" /> <br />
                <input type="text" placeholder="enter teacherID" name="teacherID" /> <br />
                <input type="password" placeholder="enter password" name="password" /> <br />

                <br />
                <button type="submit">הירשם</button>
            </form>
        </>
    )
}

