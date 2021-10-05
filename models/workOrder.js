const mongoose = require("mongoose");


const workOrder = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,


    },

    status: {
      type: String,
      enum: ['pending', 'inProgress', 'completed'],
      default:'pending'
    },
    assignedTo: {
      type: String,
      enum: ['remote expert', 'field engg'],

    },
    deadLine: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("workOrder", workOrder);