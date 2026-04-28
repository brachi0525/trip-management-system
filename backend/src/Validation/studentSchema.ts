import { z } from "zod";

export const studentSchema = z.object({
  fullName: z.string().min(2, "Full name too short"),
  studentID: z.string().length(9, "Student ID must be 9 digits"),
  classNumber: z.string().min(1, "Class number is required"),
});