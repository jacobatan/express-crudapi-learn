import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

// all routes here start with /users
router.get("/", getUsers);

router.post("/", createUser);

// /users/1 => req.params { uid: 1 }

router.get("/:uid", getUser);

router.delete("/:uid", deleteUser);

router.patch("/:uid", updateUser);

export default router;
