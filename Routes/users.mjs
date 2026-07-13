import express from "express";
import User from "../models/User.mjs";

const router = express.Router();


// GET ALL USERS
router.get("/", async(req,res)=>{
  const users = await User.find();
  res.json(users);
});


// CREATE USER
router.post("/", async(req,res)=>{
  const user = await User.create(req.body);
  res.json(user);
});


// UPDATE USER
router.patch("/:id", async(req,res)=>{
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(user);
});


// DELETE USER
router.delete("/:id", async(req,res)=>{
  await User.findByIdAndDelete(req.params.id);
  res.json({message:"User deleted"});
});


export default router;