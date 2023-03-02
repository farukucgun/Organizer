import express from "express";
const router = express.Router();

import userModel from '../models/user.js';

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({"email": email, "password": password})
    if (user){
        return res.json({status: 'ok', id: user._id})
    } else {
        return res.status(403).send({error: "Error, couldn't signin"})
        // return res.json({status: 'error', user: false})
    }
})

export default router;