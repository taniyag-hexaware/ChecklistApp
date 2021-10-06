const express = require("express");
const router = express.Router();

// these are the controllers
// we will create all of them in the future
const {
  createUser,
  getUser,
  deleteUser,
  getAllUsers,
  updateUser,
} = require("../controller/user");



// to get all the Users
router.get("/users/", getAllUsers);

// to get a single User
router.get("/user/:id/", getUser);

// to create a User
router.post("/user/create/", createUser);

// to update the User
router.put("/user/:id/update", updateUser);

// to delete the User
router.delete("/user/:id/delete", deleteUser);

// we will export the router to import it in the index.js
module.exports = router;
