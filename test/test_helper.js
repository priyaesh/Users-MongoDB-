const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Users_test');
mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on ('error' ,(error)=>{
        console.warn('Warning',error);
    });

    beforeEach((done)=>{
        mongoose.connection.collections.users.drop(() =>{
            done();
        });
    });


