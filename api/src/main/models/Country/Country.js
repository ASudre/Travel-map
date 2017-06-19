import mongoose from 'mongoose'

const countrySchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
        required: true,
        index: { unique: true },
    },
    isoCode: { type: String, required: true },
    name: { type: String, required: true },
});

export default mongoose.model('Country', countrySchema);
