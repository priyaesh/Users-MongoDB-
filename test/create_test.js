const assert = require('assert');
const user = require('../src/user');



describe('Create users', () =>{
    let hamsa;
        it('save the users',(done)=>{
            const hamsa = new user({name : 'Hamsa'});
            hamsa.save()
                .then(() =>{
                    assert(!hamsa.isNew);
                    done();
                });
        
        });
});