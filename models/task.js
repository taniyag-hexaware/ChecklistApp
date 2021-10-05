const mongoose = require("mongoose");


const task = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,


        },
        tasks: {
            type: Array,
            id:{type:String},
            steps: {title:{type:String}, description:{type:String},status:{type:Boolean,default:false}},
            status:{ type: String,
                enum: ['pending', 'inProgress', 'completed'], default:'pending'}
                
            

        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("task", task);