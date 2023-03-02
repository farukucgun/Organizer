import React from "react";

import classes from './Header.module.css';

import Navbar from "./Navbar";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Organizer</h1>
            </header>
            <Navbar />
        </React.Fragment>    
    );
};

export default Header;