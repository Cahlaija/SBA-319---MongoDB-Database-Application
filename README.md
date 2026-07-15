# Job Tracker API

## Description

The Job Tracker API is a Node.js, Express, and MongoDB application that allows users to manage job opportunities and track applications. The purpose of this application is to store, organize, and update job application information using a RESTful API.

This project uses MongoDB for database storage and Express.js to create API routes for performing CRUD operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- dotenv

## Database Collections

This application uses the following MongoDB collections:

### Users
Stores user information.

### Jobs
Stores available job opportunities and job details.

### Applications
Stores job application records and tracks application status.

---

# API Routes

## Users Routes

### GET /users
Retrieves all users.

### GET /users/:id
Retrieves a single user by ID.

### POST /users
Creates a new user.

### PATCH /users/:id
Updates an existing user.

### DELETE /users/:id
Deletes a user.

---

## Jobs Routes

### GET /jobs
Retrieves all jobs.

### GET /jobs/:id
Retrieves a single job by ID.

### POST /jobs
Creates a new job listing.

### PATCH /jobs/:id
Updates a job listing.

### DELETE /jobs/:id
Deletes a job listing.

---

## Applications Routes

### GET /applications
Retrieves all job applications.

### GET /applications/:id
Retrieves a single application by ID.

### POST /applications
Creates a new job application.

### PATCH /applications/:id
Updates an application status or information.

### DELETE /applications/:id
Deletes an application.

---

# MongoDB Features Implemented

## CRUD Operations

The API supports:

- Create operations using POST routes
- Read operations using GET routes
- Update operations using PATCH routes
- Delete operations using DELETE routes

## Indexes

MongoDB indexes are used on frequently searched fields to improve query performance.

Examples:
- Job title
- Company name
- Application status

## Validation

MongoDB validation rules are used to ensure required fields contain valid data and maintain data consistency.

---

# Installation Instructions

Clone the repository:
