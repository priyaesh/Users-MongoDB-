const assert = require('assert');
const user = require('../src/user');

describe('Updating records', () =>{
    let Hv;

    beforeEach((done) => {
        Hv =new user({name:'Hv'})
        Hv.save()
            .then(() => done());
    });

function assertName(operation, done){
    operation
    .then(() => user.find({}))
    .then((users) => {
        assert(users.length ===1);
        assert(users[0].name ==='Hamsavardini');
        done();
    });
}
    it('instance type using set and save', (done) => {
        Hv.set('name','Hamsavardini');
        assertName(Hv.save(),done)  
        });
    
    it('A model instance can update', (done) => {
        assertName(Hv.update({name:'Hamsavardini'}),done);
    });
    it('A model can update',(done)  =>{
        assertName(
            user.update({name:'Hv'},{name:'Hamsavardini'}),
            done
            );

    });
    it('A model class update in one record',(done) => {
       assertName(
            user.findOneAndUpdate({name:'Hv'},{name:'Hamsavardini'}),
            done
       );
    });

    it('A model class can find a record with an id and update',(done) => {
        assertName(
            user.findByIdAndUpdate(Hv._id,{name:'Hamsavardini'}),
            done
        );
    });
});




