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
      userId:{
        type:String
      }
      },
    deadLine: {
      type: Date,
      required: true
    },
    taskId: {
      type:Array,
      }

  },

  
  { timestamps: true }
);

module.exports = mongoose.model("workOrder", workOrder);