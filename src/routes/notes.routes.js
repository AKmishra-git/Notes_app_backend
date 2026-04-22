import express from "express"

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  searchNotes
} from "../controllers/notes.controller.js";

const router = express.Router();

router.post("/", createNote);
router.get("/search", searchNotes);
router.get("/", getNotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;