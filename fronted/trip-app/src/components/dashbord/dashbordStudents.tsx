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
    <tr key={person.studentID}>
        <td style={{ border: '1px solid', padding: '8px' }}>{person.fullName}</td>
        <td style={{ border: '1px solid', padding: '8px' }}>{person.studentID}</td>
        <td style={{ border: '1px solid', padding: '8px' }}>{person.classNumber}</td>
    </tr>
));

    return (
        <div className="container">
            <h1>טבלת תלמידות</h1>

            <form >
                <input type="text" name="fullName" placeholder="חפש לפי שם" value={filterData.fullName} onChange={handleChange} />
                <input type="text" name="studentID" placeholder="חפש לפי תז" value={filterData.studentID} onChange={handleChange} />
                <input type="text" name="classNumber" placeholder="חפש לפי מספר כיתה" value={filterData.classNumber} onChange={handleChange} />
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
                    {listStudents}
                </tbody>
            </table>
        </div>
    )
}