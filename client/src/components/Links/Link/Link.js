import React from 'react';
import axios from 'axios';

import classes from './Link.module.css';

const Link = (props) => {

    const deleteLinkHandler = async (event) => {
        await axios.delete(`http://localhost:5000/links/${props.id}`)
        .then((data) => {
            props.onDeleteLink(data.data.data);
            console.log("deleted the link");
        })
        .catch((err) => {
            console.log("couldn't delete the link");
            console.log(err.message);
        });  
    }

    return (
        <li className={classes.link}>
            <a href={props.link}>{props.title}</a>
            <button className={classes.delete} onClick={deleteLinkHandler}>X</button>
        </li>
    );
}

export default Link;