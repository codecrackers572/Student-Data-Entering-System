# Student Management System API

## Overview
A REST API built with Express.js and SQLite to manage student records (add, view, update, delete), with a simple HTML/JS frontend served from `public/` for listing and managing students.

## Stack
- Node.js + Express
- SQLite (via `sqlite3`), data stored in `students.db` (created automatically on first run)
- Static frontend in `public/index.html`

## Running on Replit
- The `Start application` workflow runs `node server.js` and serves on port 5000 (configured via `process.env.PORT || 5000`, required for Replit's webview).
- No external services or secrets are needed — everything runs self-contained.

## Endpoints
| Method | Endpoint          | Description          |
|--------|-------------------|-----------------------|
| POST   | /students         | Add a new student    |
| GET    | /students         | View all students    |
| GET    | /students/:id     | View one student     |
| PUT    | /students/:id     | Update a student     |
| DELETE | /students/:id     | Delete a student     |

## Testing with Postman
Import `postman_collection.json` and set `base_url` to the app's Replit URL.

## User preferences
None recorded yet.
