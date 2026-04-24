import React, { useContext, useEffect, useState } from 'react'
import { StudentContext } from '../../context/student'

export const DashbordStudents = () => {

    const { students, getStudents } = useContext(StudentContext);
    const [filterData, setFilterData] = useState({ fullName: "", classNumber: "", studentID: "" });
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const studentsFilteredData = hasSearched ? filteredStudents : students;

    const handleChange = (e) => {
        setFilterData({
            ...filterData,
            [e.target.name]: e.target.value
        });
    };

    const handleSearch = () => {
        const filteredData = students.filter(item =>
            Object.entries(filterData)
                .every(([key, value]) => item[key].toString().includes(value))
        );

        setHasSearched(true);
        setFilteredStudents(filteredData);
    };

    const handleClear = () => {
        setFilterData({ fullName: "", classNumber: "", studentID: "" })
        setHasSearched(false)
    };

    useEffect(() => {
        getStudents();
    }, []);

    const listStudents = studentsFilteredData.map(person => (
        <li key={person.studentID}>
            <p>
                {person.fullName}: {person.studentID}: {person.classNumber}
            </p>
        </li>
    ));

    return (
        <>
            <form >
                <input type="text" name="fullName" placeholder="search  name" value={filterData.fullName} onChange={handleChange} />
                <input type="text" name="classNumber" placeholder="search classNumber" value={filterData.classNumber} onChange={handleChange} />
                <input type="text" name="studentID" placeholder="search studentID" value={filterData.studentID} onChange={handleChange} />
                <br />
                <button type="button" onClick={handleSearch}>חפש</button>
                <button type="button" onClick={handleClear} >נקה חיפוש</button>

            </form>

            <h3>Students</h3>
            <ul>{listStudents}</ul>
        </>
    )
}