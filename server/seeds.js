import mongoose from "mongoose";
import dotenv from "dotenv";

import Link from "./models/link.js";
import Note from "./models/note.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`Listening on port: ${PORT}`);
    })
    .catch((err) => {
        console.log("Couldn't connect to mongodb");
        console.log(err.message);
    })

const seedLinks = [
    {
        title: "codewars",
        link: "https://www.codewars.com/dashboard",
        isVideo: false
    },
    {
        title: "codingbat",
        link: "https://codingbat.com/java",
        isVideo: false
    },
    {
        title: "leetcode",
        link: "https://leetcode.com/",
        isVideo: false
    },
    {
        title: "10 iconic guitar solos",
        link: "https://www.youtube.com/watch?v=Anop2dCuR2g&ab_channel=PaulDavids",
        isVideo: true
    },
    {
        title: "office impersonations-the office us",
        link: "https://www.youtube.com/watch?v=Bmu1n40bA4Y&ab_channel=TheOffice",
        isVideo: true
    },
    {
        title: "cars 2005 teaser trailer",
        link: "https://www.youtube.com/watch?v=TDAwtQQJOzo&ab_channel=B%C3%BAho718",
        isVideo: true
    }
]

const seedNotes = [
    {
        title: "phys-102",
        note: "physics quiz on tuesday"
    },
    {
        title: "phys-102",
        note: "print the lab docs"
    },
    {
        title: "tennis",
        note: "arrange double tennis match on the weekend"
    }
]

const seedDB = async () => {
    await Link.deleteMany({});
    await Link.insertMany(seedLinks);
    await Note.deleteMany({});
    await Note.insertMany(seedNotes);
}

seedDB().then(() => {
    mongoose.connection.close();
})

// Link.deleteMany({})
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// Link.insertMany(seedLinks)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })