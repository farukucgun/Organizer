import express from "express";
const router = express.Router();

import linkModel from '../models/link.js';

router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const links = await linkModel.find( {"user_id": user_id} )
    .then(data => {
        res.json({status: 'ok', data})
    })
    .catch(err => {
        res.json({status: 'error', error: "Couldn't find links"})
    })
})

router.post('/', async (req, res) => {
    const { title, link, isVideo, user_id } = req.body;
    const newLink = new linkModel({
        title: title,
        link: link,
        isVideo: isVideo,
        user_id: user_id 
    })
    await newLink.save()
    .then(data => {
        res.json({status: 'ok', data})
    })
    .catch(err => {
        res.json({status: 'error', error: "Couldn't add new link"})
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedLink = await linkModel.findByIdAndDelete(id)
    .then(data => {
        res.json({status: 'ok', data})
    })
    .catch(err => {
        res.json({status: 'error', error: "Couldn't delete link"})
    })
})

export default router;