const assert = require ('assert');
const user = require('../src/user');


describe('Reading users out of the database',() => {
    let Hamsa;
     
    beforeEach((done) => {
        Hamsa = new user({name:'Hamsa'});
        Hamsa.save()
            .then(() => done());

    });

    it('find all users with a name of Hamsa',(done) =>{
        user.find({name:'Hamsa'})
            .then((users) => {
                
                assert(users[0]._id.toString() === Hamsa._id.toString());
                console.log(users);
                done();
                //this.timeout(10000);
            });

    });

    it ('find a user with a particular id',(done) => {
        user.findOne({ _id: Hamsa._id})
            .then((user) => {
                assert(user.name === 'Hamsa');
                done();
                
            });
    });

});
