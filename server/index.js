import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import linksRoute from "./routes/links.js";
import notesRoute from "./routes/notes.js";
import signinRoute from "./routes/signin.js";
import signupRoute from "./routes/signup.js";

const app = express();
dotenv.config();

app.use(express.urlencoded({ limit:"30mb", extended: true }));
app.use(express.json({ limit:"30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("home page");
})

app.use("/signup", signupRoute);
app.use("/signin", signinRoute);
app.use("/links", linksRoute);
app.use("/notes", notesRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("Couldn't connect to mongodb");
        console.log(err.message);
    })


