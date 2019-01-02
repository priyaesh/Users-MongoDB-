const assert = require('assert');
const user = require('../src/user');


describe ('Deleting a user',() =>{
    let Hv;

    beforeEach ((done) => {
        Hv = new user({name:'Hv'})
        Hv.save()
            .then(() => done());
    });

    it('model instace remove',(done) =>{
        Hv.remove()
            .then(() => 
                user.findOne({ name: 'Hv'}))
            .then((users) => {
                assert(users === null);
                done();
                // this.timeout(500);
                // setTimeout(done, 300);
            
        });
    
    });


    // it('class remove', (done) =>{
    //     user.remove({name: 'Hv'})
    //         .then(() => user.findOne({ name: 'Hv'}))
    //         .then((user) => {
    //             asssert(user === null);
    //             done();
    //         });
    // });

    it('find id and remove',() =>{

    });

    it('find by name and remove',() =>{

    });
});