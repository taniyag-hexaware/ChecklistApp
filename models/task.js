const mongoose = require("mongoose");



const stepsSchema = new mongoose.Schema(



    {

       

        title:{type:String}, 

        description:{type:String},

        status:{type:Boolean,default:false}

    });



const task = new mongoose.Schema(

    {

        id: {

            type: String,

            required: true,

            unique: true,




        },

       

         

            

            steps: [{type: stepsSchema}],

            status:{ type: String,

                enum: ['pending', 'inProgress', 'completed'], default:'pending'}

        



    },

    { timestamps: true }

);



module.exports = mongoose.model("task", task);

