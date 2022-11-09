import React from 'react';

import classes from './New.module.css';

const New = (props) => {
  return (
    <li className={classes.new}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <h3>By: {props.author}</h3>
      <img src={props.urlToImage} alt=""/>
      {!props.content && <p>{props.description}</p>}
      <p>{props.content}</p>
      <a href={props.url}>Click for more info</a>
    </li>
  );
};

export default New;
