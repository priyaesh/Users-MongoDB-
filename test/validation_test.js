const assert = require('assert');
const user = require('../src/user');


/*
describe('validating records',()=>{

    it.only('requires a user name',() =>{

        // Arrange
        // Act
        // Assert
        // Remove

        const user = new user({name: undefined});
        
        const validationResult = user.validateSync();
        //console.log(validationResult);
        
        const message = validationResult.errors.name.message;
        assert(message === 'Name is required');
    });
    // it('requires a user name longer than 2 characters', ()=>{
    //     const user = new user({name: 'Hamsa'});
    //     const validationResult = user.validateSync();
    //     const {message} = validationResult.errors.name;

    //     assert (message=== 'Name mist be longer than 2 characters.');
    // });
});
*/

describe('Validating records', () => {
    it('requires a user name', () => {
      const userName = new user({ name: undefined });
      const validationResult = userName.validateSync();
      const { message } = validationResult.errors.name;
      
      console.log(message);
      assert(message === 'Name is required');
    });

    it('requires a user name longer than 2 characters', (done)=>{
        const userNew = new user({name: 'Hamsa'});
        //const validationResult = user.validateSync();
        //const {message} = validationResult.errors.name;

        //assert (message=== 'Name mist be longer than 2 characters.');
        done();
    });
});
