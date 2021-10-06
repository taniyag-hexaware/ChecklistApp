const mongoose = require("mongoose");


const user = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,


        },
        role: {
            type: String,
            enum: ['remote expert','field engg'],
            default:'field engg'

        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", user);