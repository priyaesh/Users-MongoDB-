const assert = require ('assert');
const user = require('../src/user');


describe('Reading users out of the database',() => {
    let Hv;
     
    beforeEach((done) => {
        Hv = new user({name:'Hv'});
        Hv.save()
            .then(() => done());

    });

    it('find all users with a name of Hv',(done) =>{
        user.find({name:'Hv'})
            .then((users) => {
                
                assert(users[0]._id.toString() === Hv._id.toString());
                console.log(users);
                done();
                //this.timeout(10000);
            });

    });
});