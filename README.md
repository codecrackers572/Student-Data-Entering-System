# Student Management System API

Backend Development Internship — Task 1

## What this is
A REST API built with **Express.js** and **SQLite** to manage student records (add, view, update, delete), plus a simple HTML frontend to display them.

## Fields
- Student Name
- Student ID
- Email
- Course

## Endpoints
| Method | Endpoint          | Description          |
|--------|-------------------|-----------------------|
| POST   | /students         | Add a new student    |
| GET    | /students         | View all students    |
| GET    | /students/:id     | View one student     |
| PUT    | /students/:id     | Update a student     |
| DELETE | /students/:id     | Delete a student     |

## How to run (on Replit)
1. Import this folder into a new Replit Node.js repl.
2. Replit auto-installs dependencies from `package.json`. If not, run: `npm install`
3. Click **Run**, or type: `node server.js`
4. The server starts on port 3000. Replit gives you a public URL you can use in Postman.
5. Visit the Replit URL in a browser to see the frontend page listing students.

## How to test with Postman
1. Import `postman_collection.json` into the Postman app.
2. Set the `base_url` variable to your Replit URL (e.g. `https://your-repl-name.username.repl.co`).
3. Run each request: Add Student, View All Students, View Single Student, Update Student, Delete Student.
4. Take a screenshot of each response for submission.

## Database
Uses SQLite — data is stored in a file called `students.db`, created automatically the first time the server runs.
