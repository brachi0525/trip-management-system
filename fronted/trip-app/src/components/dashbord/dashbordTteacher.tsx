import React, { useContext, useEffect, useState } from 'react';
import { TeacherContext } from '../../context/teacher';
export const DashbordTeacher = () => {

    const { teachers, getTeachers } = useContext(TeacherContext);
    const [filterData, setFilterData] = useState({ fullName: "", classNumber: "", teacherID: "" });
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const teachersShow = hasSearched ? filteredTeachers : teachers;

    const handleChange = (e) => {
        setFilterData({
            ...filterData,
            [e.target.name]: e.target.value
        });
    };
    const handleSearch = () => {
        const filteredData = teachers.filter(item =>
            Object.entries(filterData)
                .every(([key, value]) => item[key].toString().includes(value))
        );
        setHasSearched(true)
        setFilteredTeachers(filteredData);
    };
    const handleClear = () => {
        setFilterData({ fullName: "", classNumber: "", teacherID: "" })
        setHasSearched(false)
    };
    useEffect(() => {
        getTeachers();

    }, []);



    const listTeachers = teachersShow.map(person =>
        <li>
            <p>
                {person.fullName}: {person.teacherID}: {person.classNumber}
            </p>
        </li>
    );

    return (
        <div className="container">
            <h1>טבלת מורות</h1>

            <form >
                <input type="text" name="fullName" placeholder="search  name" value={filterData.fullName} onChange={handleChange} />
                <input type="text" name="classNumber" placeholder="search classNumber" value={filterData.classNumber} onChange={handleChange} />
                <input type="text" name="teacherID" placeholder="search teacherID" value={filterData.teacherID} onChange={handleChange} />
                <br />
                <button type="button" onClick={handleSearch}>חפש</button>
                <button type="button" onClick={handleClear} >נקה חיפוש</button>
            </form>
            <ul>{listTeachers}</ul>;
        </div>

    )
}

