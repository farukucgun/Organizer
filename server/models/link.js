import mongoose from 'mongoose';
// I should add date here 

const linkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    isVideo: {
        type: Boolean,
        required: true
    }
})

const Link = mongoose.model('Link', linkSchema);

export default Link;