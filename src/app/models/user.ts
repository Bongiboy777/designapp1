import { Schema,  models,  model } from "mongoose";

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique:[true, 'Email already exists']
    },
    image: {
        type: String,
    },
    bookmarks: [
       {
        type: Schema.Types.ObjectId,
        ref: 'Properties',
       }
    ]

},{timestamps:true} );


const User = models.User || model('User', UserSchema);



export default User;