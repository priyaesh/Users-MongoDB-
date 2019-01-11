const assert = require('assert');
const user = require('../src/user');


describe ('Deleting a user',() =>{
    let Hamsa;

    beforeEach ((done) => {
        Hamsa = new user({name:'Hamsa'})
        Hamsa.save()
            .then(() => done());
    });

    it('model instace remove',(done) =>{
        Hamsa.remove()
            .then(() => user.findOne({ name: 'Hamsa'}))
            .then((users) => {
                assert(users === null);
                done();
        });
    
    });


    it('class method remove', (done) =>{
        user.remove({name: 'Hamsa'})
            .then(() => user.findOne({ name: 'Hamsa'}))
            .then((users) => {
                assert(users === null);
                done();
            });
    });

    it('find by name and remove',(done) =>{
        user.findOneAndRemove({name: 'Hamsa'})
            .then(() => user.findOne({ name: 'Hamsa'}))
            .then((users) => {
                assert(users === null);
                done();
            });  

    });

    it('find by id and remove',() =>{
        user.findByIdAndRemove(Hamsa._id)
            .then(() => user.findOne({ name: 'Hamsa'}))
            .then((users) => {
                assert(users === null);
                done();
            });

    });
});