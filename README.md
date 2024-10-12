# Education Management System (Backend API)

This project is a backend API for an Education Management System developed using Node.js, Express, and MongoDB. The system handles user authentication, course management, student progress tracking, and grade management.

## Features:
- User Authentication : Signup and login with role-based access (Admin, Teacher, Student) using JWT tokens.
- Course Management : Admins can create, update, and delete courses. Teachers can update course content. Students can enroll in courses.
- Grade Management : Teachers can assign grades to students, and students can view their grades.
- Student Submissions : Students can submit assignments, and teachers can grade them.
- Analytics : Calculate course statistics such as the average grade and total number of submissions.

## Technologies Used:
<ul><li><strong>Node.js</strong> with <strong>Express</strong> for building the backend API.</li><li><strong>MongoDB</strong> as the database.</li><li><strong>Mongoose</strong> for object data modeling (ODM).</li><li><strong>JWT (JSON Web Tokens)</strong> for authentication.</li><li><strong>bcrypt</strong> for password hashing.</li><li><strong>Role-Based Access Control (RBAC)</strong> to restrict API access based on user roles.</li></ul>

## Project Setup
<h3>Prerequisites</h3>
<p>Ensure you have the following installed:</p>
<ul><li>Node.js</li><li>MongoDB (either local or cloud, e.g., MongoDB Atlas)</li><li>Postman (optional, for testing API endpoints)</li></ul>

## <h3>Installation</h3>
<p>Install dependencies:</p>
- npm install
</br>
<p>Create a <code>.env</code> file in the root of your project with the following contents:</p>
PORT=5000 </br>
MONGO_URI=Your MongoDB Atlas Url </br>
JWT_SECRET=your_jwt_secret
</br></br>
Start The server</br>
npm start

<h2>API Endpoints</h2>
<p>Here’s a list of the key API endpoints with their roles and methods:</p>
<h3>User Authentication</h3>
<table><thead><tr><th>Endpoint</th><th>Method</th><th>Description</th><th>Access</th></tr></thead><tbody><tr><td><code>/api/auth/signup</code></td><td>POST</td><td>Sign up as a new user</td><td>Public</td></tr><tr><td><code>/api/auth/login</code></td><td>POST</td><td>Log in and get JWT token</td><td>Public</td></tr></tbody></table>

![signup-My-Workspace](https://github.com/user-attachments/assets/7a665b00-097a-44b9-9e37-2162a088868a)

![login-My-Workspace](https://github.com/user-attachments/assets/52f9b7b1-00d1-468d-82c7-141e5fc46366)

![logout-My-Workspace](https://github.com/user-attachments/assets/679e98a2-65c4-4c85-aacd-d9c64e40f16d)

<h3>Course Management</h3>
<table><thead><tr><th>Endpoint</th><th>Method</th><th>Description</th><th>Access</th></tr></thead><tbody><tr><td><code>/api/courses/create</code></td><td>POST</td><td>Create a new course</td><td>Admin</td></tr><tr><td><code>/api/courses/enroll</code></td><td>POST</td><td>Enroll a student in a course</td><td>Admin</td></tr><tr><td><code>/api/courses/:courseId</code></td><td>PUT</td><td>Update a course</td><td>Admin</td></tr><tr><td><code>/api/courses/:courseId</code></td><td>DELETE</td><td>Delete a course</td><td>Admin</td></tr></tbody></table>

![create-My-Workspace](https://github.com/user-attachments/assets/5069833b-c0aa-4e08-858a-288cf352a437)

![update-My-Workspace](https://github.com/user-attachments/assets/abdcc169-0062-42d2-be06-23c491a70dd4)

![delete-My-Workspace](https://github.com/user-attachments/assets/625f190d-9ae6-4c58-ba7b-3242d7679688)

![get-all-course-My-Workspace](https://github.com/user-attachments/assets/f68585eb-cb2c-4ed2-9469-868169fddff8)

![enroll-My-Workspace](https://github.com/user-attachments/assets/249c0a87-304b-485c-bdf5-445975a3a5d7)

<h3>Grade Management</h3>
<table><thead><tr><th>Endpoint</th><th>Method</th><th>Description</th><th>Access</th></tr></thead><tbody><tr><td><code>/api/grades/assign</code></td><td>POST</td><td>Assign grade to submission</td><td>Teacher</td></tr><tr><td><code>/api/grades/student/:studentId/course/:courseId</code></td><td>GET</td><td>Get student grades in a course</td><td>Teacher, Student</td></tr></tbody></table>

![assign-My-Workspace](https://github.com/user-attachments/assets/495da60a-e9fa-4aec-ac33-9cce8be98991)

![get-grade-My-Workspace](https://github.com/user-attachments/assets/a8b6b3ec-2b7d-4b26-9b5e-a125a6a25084)



<h2>Authentication &amp; Authorization</h2>
<ul><li><strong>JWT-based Authentication</strong>: JWT tokens are used to authenticate users. Tokens are required to access protected routes.</li><li><strong>Role-Based Access Control (RBAC)</strong>: The system uses roles (<code>Admin</code>, <code>Teacher</code>, <code>Student</code>) to restrict access to specific routes.</li></ul>



<h3>Roles &amp; Permissions</h3>
<ul><li><strong>Admin</strong>: Can create, update, delete courses, and manage student enrollment.</li><li><strong>Teacher</strong>: Can assign grades and view student submissions.</li><li><strong>Student</strong>: Can view courses, submit assignments, and view their grades.</li></ul>


<h2>Security</h2>
<ul><li><strong>Password Hashing</strong>: User passwords are hashed using bcrypt before being stored in the database.</li><li><strong>Protected Routes</strong>: Critical routes are protected using JWT and role-based authorization.</li></ul>

<h2>Error Handling</h2>
<ul><li>Proper error handling is implemented for cases such as:<ul><li>Invalid or missing JWT tokens.</li><li>Unauthorized access (e.g., students trying to access teacher-only routes).</li><li>Resource not found (e.g., course not found).</li><li>Validation errors (e.g., missing or incorrect data fields).</li></ul></li></ul>

<h2>Testing</h2>
<p>You can use Postman or similar tools to test the API endpoints. Here's an example of a test flow:</p>
<ol><li><strong>Sign up</strong> a new user as an admin, teacher, or student.</li><li><strong>Log in</strong> to get the JWT token.</li><li>Use the JWT token to access protected routes like creating courses or assigning grades.</li></ol>
