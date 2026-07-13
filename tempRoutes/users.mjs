import express from "express";
import User from "../models/User.mjs";

const router = express.Router();


// GET ALL USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// GET ONE USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// CREATE USER
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// UPDATE USER
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(user);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted"
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


export default router;