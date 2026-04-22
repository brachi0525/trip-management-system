import mongoose from "mongoose";
import {student}  from "../../types/student"

const { Schema } = mongoose;

const studentSchema =new Schema<student>({
    fullName:  { type: String, required: true },
    class:  { type: String, required: true },
    studentID:  { type: String, required: true },

})
const Student= mongoose.model("Student",studentSchema);
export default Student;