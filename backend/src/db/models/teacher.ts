import mongoose from "mongoose";
import {teacher}  from "../../types/teacher"

const { Schema } = mongoose;

const teacherSchema =new Schema<teacher>({
    fullName:  { type: String, required: true },
    classNumber:  { type: String, required: true },
    teacherID:  { type: String, required: true ,unique:true},
    password:{ type: String, required: true },

})
const Teacher= mongoose.model<teacher>("Teacher",teacherSchema);
export default Teacher;