import express from "express";
import Job from "../models/Job.mjs";

const router = express.Router();


router.get("/", async(req,res)=>{
  const jobs = await Job.find();
  res.json(jobs);
});


router.get("/:id", async(req,res)=>{
  const job = await Job.findById(req.params.id);
  res.json(job);
});


router.post("/", async(req,res)=>{
  const job = await Job.create(req.body);
  res.json(job);
});


router.patch("/:id", async(req,res)=>{
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(job);
});


router.delete("/:id", async(req,res)=>{
  await Job.findByIdAndDelete(req.params.id);

  res.json({
    message:"Job deleted"
  });
});


export default router;