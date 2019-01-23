const assert = require ('assert');
const user = require('../src/user');


describe('Reading users out of the database',() => {
    let hamsa,moulesh,megna,maya;
     
    beforeEach((done) => {
        hamsa = new user({name:'Hamsa'});
        moulesh = new user({name:'Moulesh'});
        megna = new user({name:'Megna'});
        maya = new user ({name:'Maya'});

            Promise.all([hamsa.save(),moulesh.save(),megna.save(),maya.save()])
                .then(()=>done());
        
           });

    it('find all users with a name of hamsa',(done) =>{
        user.find({name:'Hamsa'})
            .then((users) => {
                
                assert(users[0]._id.toString() === hamsa._id.toString());
                console.log(users);
                done();
                //this.timeout(10000);
            });

    });

    it ('find a user with a particular id',(done) => {
        user.findOne({ _id: hamsa._id})
            .then((userHamsa) => {
                assert(userHamsa.name === 'Hamsa');
                done();
                
            });
    });

});
