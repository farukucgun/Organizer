import express from "express";
const router = express.Router();

import linkModel from '../models/link.js';

router.get('/', async (req, res) => {
    const links = await linkModel.find({})
    .then(data => {
        console.log('found the links')
        res.json(data)
    })
    .catch(err => {
        console.log("couldn't find the links")
        console.log(err.message)
    })
})

router.post('/', async (req, res) => {
    const newLink = new linkModel({
        title: req.body.title,
        link: req.body.link,
        isVideo: req.body.isVideo
    })
    await newLink.save()
    .then(data => {
        console.log('successfully added a new link')
        res.json(data)
    })
    .catch(err => {
        console.log("couldn't add a new link")
        console.log(err.message)
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedLink = await linkModel.findByIdAndDelete(id)
    .then(data => {
        console.log('deleted the link')
        res.json(data)
    })
    .catch(err => {
        console.log("Couldn't delete the link")
        console.log(err.message)
    })
})

export default router;