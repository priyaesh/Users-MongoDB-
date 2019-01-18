const mongoose = require('mongoose');
const assert = require('assert');
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
        it('saves a relation between a user and a blogPost',(done)=>{
            user.findOne({name:'joe'})
                .populate('blogPosts')
                .then((user)=>{
                    assert(user.blogPosts[0].title==='Js is great')
                    console.log(user.blogPosts[0]);
                    done();
                });
            });
        it.only('saves full relation graph',(done)=>{
            user.findOne({name:'joe'})
                .populate({
                    path: 'blogPosts',
                    populate:{
                        path:'comments',
                        model:'comment',
                     populate:{
                        path: 'user',
                        model:'user'
                    }
                }   
                })
                .then((user)=>{
                    console.log(user.blogPosts[0].comments[0].user.name);
                    assert(user.name ==='joe');
                    assert(user.blogPosts[0].title ==='Js is great');
                    assert(user.blogPosts[0].comments[0].content ==='it is my content');
                    assert(user.blogPosts[0].comments[0].user.name==='joe');
                    //assert(user.blogPosts[0].)
                    done();
                })

                });
            });
       

