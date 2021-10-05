const express = require("express");
const router = express.Router();

// these are the controllers
// we will create all of them in the future
const {
  createUser,
  //getUserById,
  getUser,
  deleteUser,
  getAllUsers,
  updateUser,
} = require("../controller/user");

//params
// it will fetch the value from the url
//router.param("userId", getUserById);

// to get all the Users
router.get("/users/", getAllUsers);

// to get a single User
router.get("/user/:userId/", getUser);

// to create a User
router.post("/user/create/", createUser);

// to update the User
router.put("/user/:userId/update", updateUser);

// to delete the User
router.delete("/user/:userId/delete", deleteUser);

// we will export the router to import it in the index.js
module.exports = router;
