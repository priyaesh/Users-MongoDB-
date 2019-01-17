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
    
    //post: [{type : mongoose.Schema.Types.ObjectId,ref:'post'}]
    posts: [PostSchema],
    likes: Number,
    blogPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'blogPost'
    }]
});

UserSchema.virtual('postCount').get(function(){
   return this.posts.length;
});

const User = mongoose.model('user',UserSchema);

module.exports = User;