const assert = require('assert');
const user = require('../src/user');


describe('Virtual types',() =>{
    it('PostCount returns number of posts', (done) =>{
        const joe = new user({
            name: 'joe',
            posts: [{title:'PostTitle'}]
        });
        joe.save()
            .then(()=>user.findOne({name:'joe'}))
            .then((user) =>{
                assert(joe.postCount===1);
                done();
            });
    });
})
