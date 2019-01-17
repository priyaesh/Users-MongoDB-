const mongoose = require('mongoose');
const user = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('assiocation',() =>{
    let joe,myBlogPost,comment;
        beforeEach((done)=>{
            joe = new user({name:'joe'});
            //console.log(name);
            myBlogPost = new BlogPost({title:'Js is great', content:'it has many values'});
            comment = new Comment({content:'it is my content'});

            joe.blogPosts.push(myBlogPost);
            //console.log(joe.blogPost);

            myBlogPost.comments.push(comment);
            comment.user = joe;
            
            Promise.all([joe.save(),myBlogPost.save(),comment.save()])
                .then(() =>done());
        });   
        it.only('saves a relation between a user and a blogPost',(done)=>{
            user.findOne({name:'joe'})
                .populate('blogPosts')
                .then((user)=>{
                    console.log(user);
                    done();
                });
            });
        });

