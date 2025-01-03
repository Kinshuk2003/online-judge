import { Schema, Model } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true 
    },
    password: {
        type: String,
        required: true,
    }
});

export default new Model("User", userSchema);