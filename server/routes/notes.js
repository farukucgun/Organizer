import express from "express";
const router = express.Router();

import noteModel from '../models/note.js';

router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const notes = await noteModel.find( {"user_id": user_id} )
    .then(data => {
        res.json({status: 'ok', data})
    })
    .catch(err => {
        res.json({status: 'error', error: "Couldn't find notes"})
    })

})

router.post('/', async (req, res) => {
    const { title, note, user_id } = req.body;
    const newNote = new noteModel({
        title: title,
        note: note,
        user_id: user_id
    })
    await newNote.save()
    .then(data => {
        res.json({status: 'ok', data})
    })
    .catch(err => {
        res.json({status: 'error', error: "Couldn't add new note"})
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedNote = await noteModel.findByIdAndDelete(id)
    .then(data => {
        res.json({status: 'ok', data})
    })
    .catch(err => {
        res.json({status: 'error', error: "Couldn't delete notes"})
    })
})

export default router;