var mongoose = require("mongoose");


var postSchema= new mongoose.Schema({
    subject:String,
    image:String,
    body:String,
    comments:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
        }
        ]
});

module.exports = mongoose.model("Post",postSchema);