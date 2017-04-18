import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        index: { unique: true },
    },
    password: { type: String, required: true },
    countries: [
        String,
    ],
});

userSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if(!user.isModified('password')) {
        return next();
    }

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if(err) {
            return next(err);
        }

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) {
                return next(err);
            }

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(isMatch);
            }
        });
    });
};

module.exports = mongoose.model('User', userSchema);
