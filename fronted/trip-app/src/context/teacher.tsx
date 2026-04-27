import { createContext, useState } from "react";
import type { teacher } from "../../../../types/teacher";
import type {location} from "../../../../types/location"

export type TeacherContextType = {
    teachers: teacher[];
    registerTeacher: (teacher: teacher) => Promise<boolean>;
    loginTeacher: (teacherID: string, password: string) => Promise<string>;
    getTeachers: () => Promise<void>;
    getLocation: () => Promise<location[]>;
};

export const TeacherContext = createContext<Partial<TeacherContextType>>({});

export const TeacherProvider = (props: any) => {
    const [teachers, setTeachers] = useState<teacher[]>([]);

    const registerTeacher = async (teacher: teacher) => {
        try {
            const response = await fetch(
                "http://localhost:3000/teacher/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(teacher),
                }
            );

            const data = await response.json();

            setTeachers((prev) => [...prev, data]);
            return true
        } catch (error) {
            return false
            console.error("register error:", error);
        }
    };

    const loginTeacher = async (teacherID: string, password: string) => {
        try {
            const response = await fetch(
                "http://localhost:3000/teacher/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ teacherID, password }),
                }
            );

            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            console.error("login error:", error);
            return null;
        }
    };
    const getTeachers = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(
                "http://localhost:3000/teacher/",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            setTeachers(data);
        } catch (error) {

        }

    }

    const getLocation = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(
                "http://localhost:3000/map/",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            return data
        } catch (error) {

        }

    }
    const contextValue: TeacherContextType = {
        teachers,
        registerTeacher,
        loginTeacher,
        getTeachers,
        getLocation,
    };

    return (
        <TeacherContext.Provider value={contextValue}>
            {props.children}
        </TeacherContext.Provider>
    );
};