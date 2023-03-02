import React from 'react';
import axios from 'axios';

import classes from './Video.module.css';

const Video = (props) => {

    const DeleteVideoHandler = async (event) => {
        await axios.delete(`http://localhost:5000/links/${props.id}`)
        .then((data) => {
            props.onDeleteVideo(data.data.data);
            console.log("deleted the video");
        })
        .catch((err) => {
            console.log("couldn't delete the video");
            console.log(err.message);
        });  
    }

    const baseURL = "https://www.youtube.com/embed/";
    const id_start = props.link.indexOf('=');
    const URL = baseURL + props.link.substring(id_start + 1, id_start + 12);
    
    return (
        <li className={classes.video}>
            <h4 >{ props.title }</h4>
            <iframe
                width="280" 
                height="160" 
                src={URL} 
                title={props.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            <button className={classes.delete} onClick={DeleteVideoHandler}>X</button>
        </li>
    );
}

export default Video;