const assert = require('assert');
//const mongoose = require('mongoose');
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

});