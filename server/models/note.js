import mongoose from 'mongoose';
// I should add date here 

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "note must have a title"]
        },
        note: {
            type: String,
            required: [true, "note must have a note"]
        },
        user_id: {
            type: String, 
            required: [true, "note must have a user_id"]
        }
    },
    {collection: 'notes'}
)

const Note = mongoose.model('Note', noteSchema);

export default Note;