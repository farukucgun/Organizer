import React, {useState, useContext} from 'react';
import axios from 'axios';

import classes from './NewLink.module.css';
import AuthContext from '../../../store/auth-context';

const NewLink = (props) => {

    const ctx = useContext(AuthContext);

    const [enteredLink, setEnteredLink] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    
    const linkChangeHandler = (event) => {
        setEnteredLink(event.target.value);
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const linkData = {
            title: enteredTitle,
            link: enteredLink,
            isVideo: enteredLink.substring(12, 23) === "youtube.com",
            user_id: ctx.userID
        }

        await axios.post('http://localhost:5000/links', linkData)
        .then((data) => {
            props.onAddLink(data.data.data);
            console.log("added the link");
        })
        .catch((err) => {
            console.log("couldn't add the link");
            console.log(err.message);
        });

        setEnteredLink('');
        setEnteredTitle('');
    }
    
    return (
        <div className={classes.new_link}>
            <form className={classes.link_form} onSubmit={submitHandler}>
                <label htmlFor={classes.link_title}>Enter Title</label>
                <input 
                    type="text" 
                    id={classes.link_title} 
                    onChange={titleChangeHandler} 
                    placeholder='title' 
                    value={enteredTitle}
                />
                <label htmlFor={classes.link_link}>Enter Link</label>
                <input 
                    type="text" 
                    id={classes.link_link} 
                    onChange={linkChangeHandler} 
                    placeholder='link' 
                    value={enteredLink}
                />
                <button type='submit' className={classes.submit}>Add Link</button>
            </form>
        </div>
    );
}

export default NewLink;