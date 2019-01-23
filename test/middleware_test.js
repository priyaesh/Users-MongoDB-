const assert = require('assert');
const user = require('../src/user');
const BlogPost = require('../src/blogPost');

describe('Middleware',() =>{
    let joe,myBlogPost;
        beforeEach((done)=>{
            joe = new user({name:'joe'});
            myBlogPost = new BlogPost({title:'Js is great', content:'it has many values'});

            joe.blogPosts.push(myBlogPost);
            //myBlogPost.comments.push(comment);
           
            Promise.all([joe.save(),myBlogPost.save()])
                .then(() =>done());
        });
    
it('user cleanup dangaling blogpost on remove', (done)=>{
    joe.remove()
        .then(()=>BlogPost.count())
        .then((count)=>{
           assert(count===0); 
           done();
        });

    });
});