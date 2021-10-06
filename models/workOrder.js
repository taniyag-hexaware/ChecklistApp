const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

 {
   userId:{
     type:String
   }
 });
const workOrder = new mongoose.Schema(
  {
    id: {
      type: String,
      required:true,
      unique: true,
    },

    status: {
      type: String,
      enum: ['pending', 'inProgress', 'completed'],
      default:'pending'
    },
    assignedTo: {
      type:userSchema,
      default:null
      
      },
    deadLine: {
      type: Date,
      //required: true
    },
    taskId: [{
      type:String,
      }]

  },

  
  { timestamps: true }
);

module.exports = mongoose.model("workOrder", workOrder);