import express from "express";
const router = express.Router();

import userModel from '../models/user.js';

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userModel.create({
        name: name,
        email: email,
        password: password
    })
    .then(data => {
        res.json({status: 'ok', id: data._id})
    })
    .catch(err => {
        return res.status(403).send({error: "Error, couldn't signup"})
        // res.json({status: 'error', error: 'Duplicate email', user: false})
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id)
    .then(data => {
        res.json({status: "ok"})
    })
    .catch(err => {
        res.json({status: 'error', error: "Couldn't delete user"})
    })
})

export default router;