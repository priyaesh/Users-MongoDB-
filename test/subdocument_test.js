const assert = require('assert');
const mongoose = require('mongoose');
const user = require('../src/user');

describe('subdocuments', () => {
    it('can create a subdocument',(done) =>{
        const joe = new user({
            name: 'joe',
            posts:[{
                title:'PostTitle'
             }] 
        });
        joe.save()
            .then(() => user.findOne({name:'joe'}))
            .then((user) => {
                console.log(user.name);
                console.log(user.posts[0]);
                assert(user.posts[0].title==='PostTitle');
                done();
            });//.catch((e) => console.log(e))
    });
    it('can add subdocuments to an existing record',(done)=>{
        const joe = new user({
            name: 'joe',
            posts: []
     
        });
        joe.save()
            .then(()=> user.findOne({name:'joe'}))
            .then((user)=>{
                user.posts.push({title:'New Post'});
                return user.save();
            })
            .then(() => user.findOne({name:'joe'}))
            .then((user) => {
                assert(user.posts[0].title ==='New Post');
                done();
            });
    });
    it('Removing sub document',() =>{
        const joe = new user({
            name: 'joe',
            posts: [{title:'joe post1'}]
        });
        joe.save()
            .then(() => user.findOne({name:'joe'}))
            .then((user) => {
                const post =user.post[0];
                post.remove();
                return user.save();
            })
            .then(()=> user.findOne({name:'joe'}))
            .then((user) => {
                assert(user.posts.length===0);
                done();
            });
 
    });

});