import mongoose from "mongoose";
import { student } from "../../../../types/student"
import { number } from "zod";

const { Schema } = mongoose;

const studentSchema = new Schema<student>({
    fullName: { type: String, required: true },
    classNumber: { type: String, required: true },
    studentID: { type: number, required: true, unique: true },

})
const Student = mongoose.model<student>("Student", studentSchema);
export default Student;