import mongoose from 'mongoose';
// I should add date here 

const linkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "link must have a title"]
        },
        link: {
            type: String,
            required: [true, "link must have a link"]
        },
        isVideo: {
            type: Boolean,
            required: [true, "link must have a isVideo property"]
        },
        user_id: {
            type: String,
            required: [true, "link must have a user_id"]
        }
    },
    {collection: 'links'}
)

const Link = mongoose.model('Link', linkSchema);

export default Link;