import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 16
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

// hash password before saving the user

userSchema.pre('save', async function(next) {
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10);
    }

    next();
});

userSchema.method.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;

