 var express    = require("express"),
     router     = express.Router(),
     Post       = require("../models/post");
 
// Renders home page - finds all posts in Database
router.get("/",function(req,res){
        Post.find({},function(err,foundPost){
            if(err){
                console.log(err);
            }else{
                res.render("home",{post:foundPost});
            }
        });

    });
    
    
// Renders new post form    
router.get("/new",function(req,res){
        res.render("new");
    });
    

// Create post
router.post("/",function(req,res){
      Post.create(req.body.post,function(err,newPost){
          if(err){
              console.log(err);
          }else{
              res.redirect("/");
          }
      });
    });
    


// Finds post  - populates comments  - renders page with related comments
router.get("/show/:id",function(req,res){
            
    Post.findById(req.params.id).populate("comments").exec(function(err,foundPost){
            if(err){
                console.log(err);
            }else{
             res.render("show",{postP:foundPost});
            }
        });

    });
    
        router.delete("/show/:id/delete",function(req,res){
        Post.findByIdAndRemove(req.params.id,function(err,deletedPost){
            if(err){
                console.log(err);
            }else{
                res.redirect("/");
            }
        });
    });
    
    
module.exports= router;