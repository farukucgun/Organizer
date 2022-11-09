import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import classes from './Links.module.css';

import NewLink from '../NewLink/NewLink';
import Link from './Link';
import Video from '../Video/Video';
import AuthContext from '../../../store/auth-context';

const Links = (props) => {

    const ctx = useContext(AuthContext);

    const [links, setLinks] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchLinks = async () => {
            
            await axios.get(`http://localhost:5000/links/${ctx.userID}`)
            .then(data => {
                const linkData = data.data.data.filter(link => !link.isVideo);
                const videoData = data.data.data.filter(link => link.isVideo);

                setLinks(linkData);
                setVideos(videoData);
            })
            .catch(err => {
                console.log(err.message)
                console.log("error getting links")
            })   
        }

        fetchLinks().catch((err) => {
            console.log("couldn't fetch links");
            console.log(err);
        });
    }, []);

    const addLinkHandler = (link) => {
        link.isVideo ?
        setVideos((prevVideos) => {
            return [link, ...prevVideos]
        })
        :
        setLinks((prevLinks) => {
            return [link, ...prevLinks]
        });   
    }
    
    const deleteLinkHandler = (link) => {
        setLinks((prevLinks) => {
            return prevLinks.filter(linkItem => linkItem._id !== link._id);
        });
    }

    const deleteVideoHandler = (video) => {
        setVideos((prevVideos) => {
            return prevVideos.filter(videoItem => videoItem._id !== video._id);
        });
    }

    return (
        <div>
            <NewLink onAddLink={addLinkHandler} />

            <ul className={classes.links}>
                {links.map((link) => (
                    <Link
                        key={link._id} 
                        id={link._id}
                        title={link.title} 
                        link={link.link}
                        onDeleteLink={deleteLinkHandler}
                    />
                ))}
            </ul>

            <ul className={classes.videos}>
                {videos.map((video) => (
                    <Video
                        key={video._id} 
                        id={video._id}
                        title={video.title} 
                        link={video.link}
                        onDeleteVideo={deleteVideoHandler}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Links;