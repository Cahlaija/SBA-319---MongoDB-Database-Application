import express from "express";
import Note from "../models/Note.mjs";

const router = express.Router();


// GET ALL NOTES
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// GET ONE NOTE
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json(note);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// CREATE NOTE
router.post("/", async (req, res) => {
  try {
    const note = await Note.create(req.body);

    res.status(201).json(note);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// UPDATE NOTE
router.patch("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(note);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


// DELETE NOTE
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);

    res.json({
      message: "Note deleted"
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});


export default router;