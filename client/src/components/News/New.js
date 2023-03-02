import React from 'react';

import classes from './New.module.css';

const New = (props) => {
  const item = props.item;

  return (
    <li className={classes.new}>
      <h2>{item.title}</h2>
      <h3>{item.releaseDate}</h3>
      <h3>By: {item.author}</h3>
      {/* <img src={item.urlToImage} alt=""/> */}
      {!item.content && <p>{item.description}</p>}
      <p>{item.content}</p>
      <a href={item.url}>Click for more info</a>
    </li>
  );
};

export default New;
