var express          = require("express"),
    app              = express(),
    mongoose         = require("mongoose"),
    bodyParser       = require("body-parser"),
    Post             = require("./models/post"),
    Comment          = require("./models/comment"),
    methodOverride   = require("method-override"),
    //requiring routes
    indexRoute       = require("./routes/post"),
    commentRoute     = require("./routes/comment");
    
    
    
    
 app.set("view engine","ejs");
 app.use(methodOverride("_method"));
 app.use(bodyParser.urlencoded({extended: true}));
 mongoose.connect("mongodb://localhost/mediashaker");
 
    
   
    


    
    
    
    
app.use(indexRoute);
app.use(commentRoute);
    
    
    
app.listen(process.env.PORT,process.env.IP,function(){
        console.log("server started");
})