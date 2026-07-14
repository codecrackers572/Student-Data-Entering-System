// server.js
// Student Management System API
// Backend built with Express.js + SQLite

const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // lets us read JSON from request bodies
app.use(express.static('public')); // serves the frontend page in /public

// ------------------------------
// 1. ADD STUDENT  -> POST /students
// ------------------------------
app.post('/students', (req, res) => {
  const { studentName, studentId, email, course } = req.body;

  if (!studentName || !studentId || !email || !course) {
    return res.status(400).json({ error: 'All fields are required: studentName, studentId, email, course' });
  }

  const sql = `INSERT INTO students (studentName, studentId, email, course) VALUES (?, ?, ?, ?)`;
  db.run(sql, [studentName, studentId, email, course], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({
      message: 'Student added successfully',
      student: { id: this.lastID, studentName, studentId, email, course }
    });
  });
});

// ------------------------------
// 2. VIEW ALL STUDENTS -> GET /students
// ------------------------------
app.get('/students', (req, res) => {
  db.all(`SELECT * FROM students`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// ------------------------------
// 3. VIEW ONE STUDENT -> GET /students/:id
// ------------------------------
app.get('/students/:id', (req, res) => {
  db.get(`SELECT * FROM students WHERE id = ?`, [req.params.id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(row);
  });
});

// ------------------------------
// 4. UPDATE STUDENT -> PUT /students/:id
// ------------------------------
app.put('/students/:id', (req, res) => {
  const { studentName, studentId, email, course } = req.body;

  const sql = `
    UPDATE students
    SET studentName = ?, studentId = ?, email = ?, course = ?
    WHERE id = ?
  `;
  db.run(sql, [studentName, studentId, email, course, req.params.id], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student updated successfully' });
  });
});

// ------------------------------
// 5. DELETE STUDENT -> DELETE /students/:id
// ------------------------------
app.delete('/students/:id', (req, res) => {
  db.run(`DELETE FROM students WHERE id = ?`, [req.params.id], function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
