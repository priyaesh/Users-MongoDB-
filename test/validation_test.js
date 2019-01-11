// const assert = require('assert');
// const user = require('../src/user');

// describe('validating records',()=>{

//     it('requires a user name',() =>{
//         const user = new user({name:undefined});
//         const validationResult = user.validateSync();
//         //console.log(validationResult);
//         const {message} = validationResult.errors.name;

//         assert(message === 'Name is required');
//     });
//     // it('requires a user name longer than 2 characters', ()=>{
//     //     const user = new user({name: 'Hamsa'});
//     //     const validationResult = user.validateSync();
//     //     const {message} = validationResult.errors.name;

//     //     assert (message=== 'Name mist be longer than 2 characters.');
//     // });
// });
