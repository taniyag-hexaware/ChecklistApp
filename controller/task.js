const task = require("../models/task");

//topost

exports.createtask  = (req, res) => {

    const Task  = new task ({
        id: req.body.id,
        steps: req.body.steps,
        status: req.body.status
    
    });

    Task.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new task."
        });
    });


};

//toget
exports.getAlltasks = (req, res) => {

    task.find()
        .sort("-createdAt")
        .exec((err, tasks) => {
            // error checking
            if (err || !tasks) {
                return res.status(400).json({
                    error: "Something went wrong in finding all tasks",
                });
            }
            // return all the task in json format
            res.json(tasks);
        });
};

//togetbyid
exports.gettask = (req, res) => {

    task.findById(req.params.id)
        .then(task => {
            if (!task.id) {
                return res.status(404).send({
                    message: "task not found with id 1" + req.params.id
                });
            }

            res.send(task);

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "task not found with id 2" + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error getting task with id 3" + req.params.id
            });
        });
};

//toputupdate

exports.updatetask = (req, res) => {
    // Validate Request
  console.log("req.body", req.body);
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }
  // Find task and update it with the request body
  user.findByIdAndUpdate(req.params.id, {
    id: req.body.id,
    steps: req.body.steps,
    status: req.body.status


  }, { new: true })
    .then(task => {
      if (!task) {
        return res.status(404).send({
          message: "task not found with id 1" + req.params.id
        });
      }
      res.send(task);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "task not found with id 2" + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating task with id 3" + req.params.id
      });
    });
};

//todeletetask

exports.deletetask = (req, res) => {
    user.findByIdAndRemove(req.params.id)
      .then(task => {
        if (!task) {
          return res.status(404).send({
            message: "task not found with id " + req.params.id
          });
        }
        res.send({ message: "task deleted successfully!" });
      }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: "task not found with id " + req.params.id
          });
        }
        return res.status(500).send({
          message: "Could not delete task with id " + req.params.id
        });
      });
  };
