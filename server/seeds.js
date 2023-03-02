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
        isVideo: false,
        user_id: "6359a7f8a4c2021f92b10d56"
    },
    {
        title: "codingbat",
        link: "https://codingbat.com/java",
        isVideo: false,
        user_id: "6359a7f8a4c2021f92b10d56"
    },
    {
        title: "leetcode",
        link: "https://leetcode.com/",
        isVideo: false,
        user_id: "6359a7f8a4c2021f92b10d56"
    },
    {
        title: "10 iconic guitar solos",
        link: "https://www.youtube.com/watch?v=Anop2dCuR2g&ab_channel=PaulDavids",
        isVideo: true,
        user_id: "6359a7f8a4c2021f92b10d56"
    },
    {
        title: "office impersonations-the office us",
        link: "https://www.youtube.com/watch?v=Bmu1n40bA4Y&ab_channel=TheOffice",
        isVideo: true,
        user_id: "6359a7f8a4c2021f92b10d56"
    },
    {
        title: "cars 2005 teaser trailer",
        link: "https://www.youtube.com/watch?v=TDAwtQQJOzo&ab_channel=B%C3%BAho718",
        isVideo: true,
        user_id: "6359a7f8a4c2021f92b10d56"
    }
]

const seedNotes = [
    {
        title: "demonstration",
        note: "find some videos and links to seed the db",
        user_id: "6359a7f8a4c2021f92b10d56"
    },
    {
        title: "update cv",
        note: "update cv with new skills and projects after cv workshop",
        user_id: "6359a7f8a4c2021f92b10d56"
    },
    {
        title: "tennis",
        note: "don't forget to attend tennis lesson on weekend",
        user_id: "6359a7f8a4c2021f92b10d56"
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