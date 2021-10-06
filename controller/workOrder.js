const workOrder = require("../models/workOrder");

//topost

exports.createWorkOrder = (req, res) => {

    const WorkOrder = new workOrder({
        id: req.body.id,
        status: req.body.status,
        assignedTo: req.body.assignedTo,
        deadLine: req.body.deadLine,
        taskId: req.body.taskId

    });

    WorkOrder.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new workOrder."
        });
    });


};

//toget
exports.getAllWorkOrders = (req, res) => {

    workOrder.find()
        .sort("-createdAt")
        .exec((err, workOrders) => {
            // error checking
            if (err || !workOrders) {
                return res.status(400).json({
                    error: "Something went wrong in finding all workOrders",
                });
            }
            // return all the workOrder in json format
            res.json(workOrders);
        });
};

//togetbyid
exports.getWorkOrder = (req, res) => {

    workOrder.findById(req.params.id)
        .then(workOrder => {
            if (!workOrder.id) {
                return res.status(404).send({
                    message: "workOrder not found with id 1" + req.params.id
                });
            }

            res.send(workOrder);

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "workOrder not found with id 2" + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error getting workOrder with id 3" + req.params.id
            });
        });
};

//toputupdate

exports.updateWorkOrder = (req, res) => {
    // Validate Request
  console.log("req.body", req.body);
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }
  // Find workOrder and update it with the request body
  user.findByIdAndUpdate(req.params.id, {
        id: req.body.id,
        status: req.body.status,
        assignedTo: req.body.assignedTo,
        deadLine: req.body.deadLine,
        taskId: req.body.taskId

  }, { new: true })
    .then(workOrder => {
      if (!workOrder) {
        return res.status(404).send({
          message: "workOrder not found with id 1" + req.params.id
        });
      }
      res.send(workOrder);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "workOrder not found with id 2" + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating workOrder with id 3" + req.params.id
      });
    });
};

//todeleteworkorder

exports.deleteWorkOrder = (req, res) => {
    user.findByIdAndRemove(req.params.id)
      .then(workOrder => {
        if (!workOrder) {
          return res.status(404).send({
            message: "workOrder not found with id " + req.params.id
          });
        }
        res.send({ message: "workOrder deleted successfully!" });
      }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: "workOrder not found with id " + req.params.id
          });
        }
        return res.status(500).send({
          message: "Could not delete workOrder with id " + req.params.id
        });
      });
  };
