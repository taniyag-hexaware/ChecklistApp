const mongoose = require("mongoose");
const step = new mongoose.Schema(
    {
      
       
            
                
                title:
                {type:String}, 
                description:{type:String},
                status:{type:Boolean,default:false},
           
            

        },

    
    { timestamps: true }
);

module.exports = mongoose.model("step", step);