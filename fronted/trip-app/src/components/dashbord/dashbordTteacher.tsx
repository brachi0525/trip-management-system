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



    const listTeachers = teachersShow.map(person => (
        <tr key={person.teacherID}>
            <td style={{ border: '1px solid', padding: '8px' }}>{person.fullName}</td>
            <td style={{ border: '1px solid', padding: '8px' }}>{person.teacherID}</td>
            <td style={{ border: '1px solid', padding: '8px' }}>{person.classNumber}</td>
        </tr>
    ));

    return (
        <div className="container">
            <h1>טבלת מורות</h1>

            <form >
                <input type="text" name="fullName" placeholder="חפש לפי שם" value={filterData.fullName} onChange={handleChange} />
                <input type="text" name="classNumber" placeholder="חפש לפי כיתה" value={filterData.classNumber} onChange={handleChange} />
                <input type="text" name="teacherID" placeholder="חפש לפי תז" value={filterData.teacherID} onChange={handleChange} />
                <br />
                <button type="button" onClick={handleSearch}>חפש</button>
                <button type="button" onClick={handleClear} >נקה חיפוש</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th > שם מלא </th>
                        <th > תעודת זהות </th>
                        <th > כיתה </th>
                    </tr>
                </thead>
                <tbody>
                    {listTeachers}
                </tbody>
            </table>
        </div>

    )
}

