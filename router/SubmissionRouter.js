import express  from "express";
import { Auth } from "../middelware/AuthMiddleware.js";
import { assignGrade, getStudentGrades } from "../controller/SubmissionController.js";
import { restrictTo } from "../middelware/roleMiddleware.js";

const submissionRouter = express.Router();

submissionRouter.post('/assign', Auth, restrictTo('teacher'), assignGrade);
submissionRouter.get('/student/:studentId/course/:courseId', Auth, restrictTo('student', 'teacher'), getStudentGrades);

export default submissionRouter