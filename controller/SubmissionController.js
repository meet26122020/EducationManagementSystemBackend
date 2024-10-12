import Submission from "../model/SubmissionModel.js";

export const assignGrade = async (req, res) => {
    try {
        const {student, course, grade } = req.body;
        if(!student || !course || !grade){
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (grade < 0 || grade > 100) {
            return res.status(400).json({ message: 'Grade must be between 0 and 100' });
        }
        const submission = await Submission(req.body);
        // submission.grade = grade;
        await submission.save();
        res.json({ message: 'Grade assigned successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getStudentGrades = async (req, res) => {
    try {
        const { studentId, courseId } = req.params;
        const submissions = await Submission.find({ student: studentId, course: courseId });
        res.json(submissions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};