import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
  },
];

// all routes here start with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(
    `User with name ${user.firstName} ${user.lastName} added to the database!`
  );
});

export default router;
