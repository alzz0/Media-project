var express     = require("express"),
    router      = express.Router(),
    Post        = require("../models/post"),
    Comment     = require("../models/comment");




// Finds Post id - renders form with chosen id    
        router.get("/show/:id/comment/new",function(req,res){
        Post.findById(req.params.id,function(err,foundPost){
            if(err){
                console.log(err);
            }else{
                        res.render("comment/new",{post:foundPost});
            }
        });

    });
// Finds post - creates comment - pushes comment into post - redirect post+id
    router.post("/show/:id/comment",function(req,res){
        Post.findById(req.params.id,function(err,foundPost){
            if(err){
                console.log(err);
            }else{
                Comment.create(req.body.comment,function(err,newComment){
                    if(err){
                        console.log(err);
                    }else{
                    foundPost.comments.push(newComment);
                    foundPost.save();
                    res.redirect("/show/"+foundPost._id);
                    }
                });
            }
        });
    });
    
        
module.exports= router;
   