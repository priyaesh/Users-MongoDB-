const assert = require('assert');
const users = require('../src/user');



describe('Create Users', () =>{
    it('save the Users',(done)=>{
        const Hv = new users({name : 'Hv'});
       
        Hv.save()
            .then(() =>{
                assert(!    Hv.isNew);
                done();
            })
        


    });
});