// has the logic of the routes
import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  // adds an id to the user obj
  users.push({ ...user, uid: uuidv4() });

  res.send(
    `User with name ${user.firstName} ${user.lastName} added to the database!`
  );
};

export const getUser = (req, res) => {
  const { uid } = req.params;

  const foundUser = users.find((user) => user.uid === uid);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { uid } = req.params;

  users = users.filter((user) => user.uid !== uid);

  res.send(`User with the id ${uid} deleted from db`);
};

export const updateUser = (req, res) => {
  const { uid } = req.params;
  const { firstName, lastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.uid === uid);

  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }

  if (lastName) {
    userToBeUpdated.lastName = lastName;
  }

  if (age) {
    userToBeUpdated.age = age;
  }

  res.send(`User with uid ${uid}`);
};
