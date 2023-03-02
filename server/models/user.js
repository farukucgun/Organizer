import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "user must have a name"]
        },
        email: {
            type: String,
            required: true,
            unique: [true, "user must have a email"]
        },
        password: {
            type: String,
            required: [true, "user must have a password"]
        }
    },
    {collection: 'users'} 
)

const User = mongoose.model('User', userSchema);

export default User;