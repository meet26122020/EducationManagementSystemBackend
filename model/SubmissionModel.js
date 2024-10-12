import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    grade: { type: Number, default: null }
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission