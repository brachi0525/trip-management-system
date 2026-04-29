import { createContext, useState } from "react";
import type { student } from "../../../../types/student";

export type StudentContextType = {
    students: student[];
    registerStudent: (student: student) => Promise<boolean>;
    getStudents: () => Promise<void>;

};

export const StudentContext = createContext<Partial<StudentContextType>>({});

export const StudentProvider = (props: any) => {
    const [students, setStudents] = useState<student[]>([]);

    const registerStudent = async (student: student) => {
        try {
            const response = await fetch("http://localhost:3000/student/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(student),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "failed");
            }
            setStudents((prev) => [...prev, data]);
            return true;
        } catch (error) {
            console.log("register error", error);
            throw error

        }
    };
    const getStudents = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:3000/student/",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,

                    },
                }
            );
            const data = await response.json();
            console.log(data)
            setStudents(data);
        } catch (error) {

        }
    }
    const contextValue: StudentContextType = {
        students,
        registerStudent,
        getStudents,
    };

    return (
        <StudentContext.Provider value={contextValue}  >
            {props.children}
        </StudentContext.Provider>
    );
};
