import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./ConnectionDB.js";
import bodyparser from 'body-parser'
import UserRouter from "./router/UserRouter.js";
import CourseRouter from "./router/CourseRouter.js";
import cookieParser from 'cookie-parser'
import submissionRouter from "./router/SubmissionRouter.js";

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(bodyparser.json())
app.use(cookieParser())


app.use("/api/user", UserRouter)
app.use('/api/courses', CourseRouter);
app.use('/api/grades', submissionRouter);


app.get("/", (req, res) => {
    res.send("<center><h1>Education management System</h1> </br> <h2>If You Getting All infotmation about of this Project</h2><a href=https://github.com/meet26122020/EducationManagementSystemBackend  target=_blank>click Here</a></center>")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})
