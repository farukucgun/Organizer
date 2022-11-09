import React, {useState, useContext} from 'react';
import axios from 'axios';

import classes from './NewNote.module.css';
import AuthContext from '../../../store/auth-context';

const NewNote = (props) => {

    const ctx = useContext(AuthContext);

    const [enteredNote, setEnteredNote] = useState('')
    const [enteredTitle, setEnteredTitle] = useState('')

    const noteChangeHandler = (event) => {
        setEnteredNote(event.target.value);
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const noteData = {
            title: enteredTitle,
            note: enteredNote,
            user_id: ctx.userID
        }

        await axios.post('http://localhost:5000/notes', noteData)
        .then((data) => {
            props.onAddNote(data.data.data);
            console.log("added the note");
        })
        .catch((err) => {
            console.log("couldn't add the note");
            console.log(err.message);
        });

        setEnteredTitle('');
        setEnteredNote('');
    }
    
    return (
        <div className={classes.new_note}>
            <form onSubmit={submitHandler}>  
                <label htmlFor={classes.note_title}>Enter Title</label>
                <input 
                    type="text" 
                    id={classes.note_title}
                    onChange={titleChangeHandler} 
                    placeholder='title' 
                    value={enteredTitle}
                />
                <textarea  
                    cols="30" 
                    rows="7"
                    id={classes.note_text}
                    onChange={noteChangeHandler}
                    placeholder='add note here...'
                    value={enteredNote}
                />
                <button type='submit' className={classes.submit}>Add Note</button>
            </form>
        </div>
    );
}

export default NewNote;