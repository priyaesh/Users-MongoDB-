const assert = require('assert');
const user = require('../src/user');



describe('Create users', () =>{
    it('save the users',(done)=>{
        const Hv = new user({name : 'Hv'});
       
        Hv.save()
            .then(() =>{
                assert(!Hv.isNew);
                done();
            })
        


    });
});