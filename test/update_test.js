const assert = require('assert');
const user = require('../src/user');

describe('Updating records', () =>{
    let Hamsa;

    beforeEach((done) => {
        Hamsa =new user({name:'Hamsa'},{likes:0})
        Hamsa.save()
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
        Hamsa.set('name','Hamsavardini');
        assertName(Hamsa.save(),done());
        });
    
    it('A model instance can update', (done) => {
        assertName(Hamsa.update({name:'Hamsavardini'}),done);
    });
    it('A model can update',(done)  =>{
        assertName(
            user.update({name:'Hamsa'},{name:'Hamsavardini'}),
            done
        );
    });
    it('A model class update in one record',(done) => {
       assertName(
            user.findOneAndUpdate({name:'Hamsa'},{name:'Hamsavardini'}),
            done
       );
    });

    it('A model class can find a record with an id and update',(done) => {
        assertName(
            user.findByIdAndUpdate(Hamsa._id, {name:'Hamsavardini'}),
            done
        );
    });
    it('A user can increment the postCount by 1 ', (done) =>{
        user.update({name:'Hamsa'}, {$inc: {likes:1}})
            .then(() => user.findOne({name:'Hamsa'}))
            .then((user) => {
                assert(user.likes===1);
                done();
                });
            });
        });
        

       
        
    
    





