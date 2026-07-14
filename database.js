// database.js
// Sets up the SQLite database and the "students" table.
// SQLite stores everything in a single file (students.db) - no server install needed.

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./students.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database (students.db)');
  }
});

// Create the students table if it doesn't already exist
db.run(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    studentName TEXT NOT NULL,
    studentId TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    course TEXT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Error creating table:', err.message);
  } else {
    console.log('Students table ready.');
  }
});

module.exports = db;
