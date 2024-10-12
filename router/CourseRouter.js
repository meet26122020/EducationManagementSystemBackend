import express from "express";
import { Auth } from "../middelware/AuthMiddleware.js";
import { restrictTo } from "../middelware/roleMiddleware.js";
import { createCourse, deleteCourse, enrollStudent, getAll, updateCourse } from "../controller/CourseController.js";

const CourseRouter = express.Router()

CourseRouter.post('/create', Auth, restrictTo('admin'), createCourse);
CourseRouter.put('/:id', Auth, restrictTo('admin'), updateCourse);
CourseRouter.delete('/:id', Auth, restrictTo('admin'), deleteCourse);
CourseRouter.post('/enroll', Auth, restrictTo('admin'), enrollStudent);
CourseRouter.get("/", Auth, restrictTo('admin', 'teacher', 'student'), getAll);


export default CourseRouter