import { z } from "zod";

export const teacherSchema = z.object({
  fullName: z.string().min(2, "Full name too short"),
  teacherID: z.string().length(9, "TeacherID must be 9 digits"),
  password: z.string().min(6, "Password is required and must be at least 6 characters"),
  classNumber: z.string().min(1, "Class number is required"),
});
export const loginSchema = z.object({
  teacherID: z.string().length(9, "TeacherID must be 9 digits"),
  password: z.string().min(6, "Password is required and must be at least 6 characters"),
});