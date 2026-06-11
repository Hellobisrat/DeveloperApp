import express from "express";
import {
  getDevelopers,
  getDeveloperById,
  postDeveloper,
  updateDeveloper,
  deleteDeveloper
} from "../controllers/devcontroller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all developers + POST new developer
router.route("/")
  .get(protect, getDevelopers)
  .post(protect, postDeveloper);

// GET, UPDATE, DELETE developer by ID
router.route("/:id")
  .get(protect, getDeveloperById)
  .put(protect, updateDeveloper)
  .delete(protect, deleteDeveloper);

export default router;
