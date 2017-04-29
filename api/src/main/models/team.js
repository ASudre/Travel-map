import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    group: {
        type: String,
        unique: false,
        required: false,
    },
});

module.exports = mongoose.model('Team', teamSchema);
