import React from 'react';
import axios from 'axios';

import classes from './Note.module.css';

const Note = (props) => {

    const deleteNoteHandler = async (event) => {
        await axios.delete(`http://localhost:5000/notes/${props.id}`)
        .then((data) => {
            props.onDeleteNote(data.data.data);
            console.log("deleted the note");
        })
        .catch((err) => {
            console.log("couldn't delete the note");
            console.log(err.message);
        });  
    }

    return (
        <li className={classes.note}>
            <h4>{ props.title }</h4>
            <p>- { props.note }</p>
            <button className={classes.delete} onClick={deleteNoteHandler}>X</button>
        </li>
    );
}

export default Note;