
import Note from "../models/notes.model.js";


export const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateNote = async (req, res) => {
  try {
    const updated = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const searchNotes = async (req, res) => {
  try {
    const { query } = req.query;

    const notes = await Note.find({
      title: { $regex: query, $options: "i" }
    });

    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};