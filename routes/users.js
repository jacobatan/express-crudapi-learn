import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [];

// all routes here start with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  // adds an id to the user obj
  users.push({ ...user, uid: uuidv4() });

  res.send(
    `User with name ${user.firstName} ${user.lastName} added to the database!`
  );
});

// /users/1 => req.params { uid: 1 }

router.get("/:uid", (req, res) => {
  const { uid } = req.params;

  const foundUser = users.find((user) => user.uid === uid);

  res.send(foundUser);
});

router

export default router;
