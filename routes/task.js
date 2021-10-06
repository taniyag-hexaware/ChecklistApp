const express = require("express");
const router = express.Router();

// these are the controllers
// we will create all of them in the future
const {
  createtask,
  gettask,
  deletetask,
  getAlltasks,
  updatetask,
} = require("../controller/task");



// to get all the task
router.get("/tasks/", getAlltasks);

// to get a single task
router.get("/task/:id/", gettask);

// to create a task
router.post("/task/create/", createtask);

// to update the task
router.put("/task/:id/update", updatetask);

// to delete the task
router.delete("/task/:id/delete", deletetask);

// we will export the router to import it in the index.js
module.exports = router;
