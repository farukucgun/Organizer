import express from "express";
const router = express.Router();

import noteModel from '../models/note.js';

router.get('/', async (req, res) => {
    const notes = await noteModel.find({})
    .then(data => {
        console.log('found the notes')
        res.json(data)
    })
    .catch(err => {
        console.log("Couldn't find the notes")
        console.log(err.message)
    })

})

router.post('/', async (req, res) => {
    const newNote = new noteModel({
        title: req.body.title,
        note: req.body.note
    })
    await newNote.save()
    .then(data => {
        console.log('successfully added a new note')
        res.json(data)
    })
    .catch(err => {
        console.log("couldn't add a new note")
        console.log(err.message)
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedNote = await noteModel.findByIdAndDelete(id)
    .then(data => {
        console.log('deleted the note')
        res.json(data)
    })
    .catch(err => {
        console.log("Couldn't delete the note")
        console.log(err.message)
    })
})
export default router;