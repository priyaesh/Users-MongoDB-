const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post');
//const PostSchema = mongoose.Schema;
 
//import PostSchema from post.js;

const UserSchema = new Schema({
    name: {
       type: String,
       validate:{
           validator:(name) => name.length > 2,
            message: 'Name mist be longer than 2 characters.' 
    },
    required:[true, 'Name is required']
},
    postCount: Number,
    //post: [{type : mongoose.Schema.Types.ObjectId,ref:'post'}]
    posts: [PostSchema]
});

const User = mongoose.model('user',UserSchema);

module.exports = User;