import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../models/User.mjs";
import Job from "../models/Job.mjs";
import Note from "../models/Note.mjs";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await User.deleteMany({});
await Job.deleteMany({});
await Note.deleteMany({});

const users = await User.insertMany([
  {
    name: "Cahlaija Knight",
    email: "cahlaija@email.com",
    role: "job seeker"
  },
  {
    name: "John Smith",
    email: "john@email.com",
    role: "job seeker"
  },
  {
    name: "Maria Lopez",
    email: "maria@email.com",
    role: "job seeker"
  },
  {
    name: "David Brown",
    email: "david@email.com",
    role: "job seeker"
  },
  {
    name: "Sarah White",
    email: "sarah@email.com",
    role: "job seeker"
  }
]);

const jobs = await Job.insertMany([
  {
    company: "Google",
    position: "Software Engineer Intern",
    status: "Applied",
    location: "Remote",
    salary: 70000,
    userId: users[0]._id
  },
  {
    company: "Amazon",
    position: "Frontend Developer",
    status: "Interview",
    location: "Remote",
    salary: 80000,
    userId: users[0]._id
  },
  {
    company: "Microsoft",
    position: "Web Developer",
    status: "Offer",
    location: "New York",
    salary: 90000,
    userId: users[1]._id
  },
  {
    company: "Apple",
    position: "Software Developer",
    status: "Rejected",
    location: "California",
    salary: 85000,
    userId: users[2]._id
  },
  {
    company: "Meta",
    position: "Backend Engineer",
    status: "Applied",
    location: "Remote",
    salary: 95000,
    userId: users[3]._id
  }
]);

await Note.insertMany([
  {
    jobId: jobs[0]._id,
    note: "Interview scheduled"
  },
  {
    jobId: jobs[1]._id,
    note: "Prepare JavaScript questions"
  },
  {
    jobId: jobs[2]._id,
    note: "Offer received"
  },
  {
    jobId: jobs[3]._id,
    note: "Application rejected"
  },
  {
    jobId: jobs[4]._id,
    note: "Waiting for response"
  }
]);

console.log("Database seeded");

await mongoose.connection.close();