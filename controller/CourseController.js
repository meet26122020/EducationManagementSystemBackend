import Course from "../model/CourseModel.js";


// Create a new course
export const createCourse = async (req, res) => {
    try {
        const { title, description, startDate, endDate, teacher } = req.body;
        if (!title ||!description ||!startDate ||!endDate ||!teacher) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const course = new Course({ title, description, startDate, endDate, teacher });
        await course.save();
        res.status(201).json({ message: 'Course created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an existing course (only for admins)
export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const course = await Course.findByIdAndUpdate(id, updates, { new: true });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.json({ message: 'Course updated successfully', course });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Delete an existing course (only for admins)
export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// get all courses 
export const getAll = async (req, res) => {
    try {
        const courses = await Course.find();
        if(!courses){
            return res.status(404).json({ message: 'No courses found' });
        }
        res.status(200).json({ message: 'Course found', data: courses });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}


// Enroll a student in a course
export const enrollStudent = async (req, res) => {
    try {
        const { courseId, studentId } = req.body;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.students.push(studentId);
        await course.save();

        res.json({ message: 'Student enrolled successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};