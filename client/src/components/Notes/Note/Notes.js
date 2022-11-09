import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import classes from './Notes.module.css';

import NewNote from "../NewNote/NewNote";
import Note from './Note';
import AuthContext from '../../../store/auth-context';

const Notes = (props) => {

    const ctx = useContext(AuthContext);

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            
            await axios.get(`http://localhost:5000/notes/${ctx.userID}`)
            .then(data => {
                setNotes(data.data.data)
            })
            .catch(err => {
                console.log(err.message)
                console.log("error getting notes")
            })  
        }

        fetchNotes().catch((err) => {
            console.log("couldn't fetch notes");
            console.log(err);
          });
    }, []);

    const addNoteHandler = (note) => {
        setNotes((prevNotes) => {
            return [note, ...prevNotes]
        });  
    }

    const deleteNoteHandler = (note) => {
        setNotes((prevNotes) => {
            return prevNotes.filter(noteItem => noteItem._id !== note._id);
        });
    }

    return (
        <div>
            <NewNote onAddNote={addNoteHandler} />
        
            <ul className={classes.notes}>
                {notes.map((noteItem) => (
                    <Note
                        key={noteItem._id}
                        id={noteItem._id} 
                        title={noteItem.title} 
                        note={noteItem.note}
                        onDeleteNote={deleteNoteHandler}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Notes;