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
            .then(() => user.findOne({ name: 'Hv'}))
            .then((users) => {
                assert(users === null);
                done();
        });
    
    });


    it('class method remove', (done) =>{
        user.remove({name: 'Hv'})
            .then(() => user.findOne({ name: 'Hv'}))
            .then((users) => {
                assert(users === null);
                done();
            });
    });

    it('find by name and remove',(done) =>{
        user.findOneAndRemove({name: 'Hv'})
            .then(() => user.findOne({ name: 'Hv'}))
            .then((users) => {
                assert(users === null);
                done();
            });  

    });

    it('find by id and remove',() =>{
        user.findByIdAndRemove(Hv._id)
            .then(() => user.findOne({ name: 'Hv'}))
            .then((users) => {
                assert(users === null);
                done();
            });

    });
});