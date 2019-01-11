const assert = require('assert');
const user = require('../src/user');



describe('Create users', () =>{
    it('save the users',(done)=>{
        const Hamsa = new user({name : 'Hamsa'});
       
        Hamsa.save()
            .then(() =>{
                assert(!Hamsa.isNew);
                done();
            })
        


    });
});