const {Schema, model} = require("mongoose");

module.exports.MultipleFile = model('MultipleFile', Schema({
    images: [
        {
            url: {
                type: String,
                required: true
            }
        }
    ]
}, {timestamps: true}))