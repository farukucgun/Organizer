import React, { useContext } from "react";

import classes from './Navbar.module.css';
// import filler from '../../assets/fillerImage.jpg';
// import btn from '../UI/Button';
import AuthContext from '../../store/auth-context';

const Navbar = (props) => {

    const ctx = useContext(AuthContext);

    const logoutHandler = () => {
        ctx.onLogout();
    }

    const loginPageHandler = () => {
        ctx.changeInLoginPage();
    }

    return (
        <nav className={classes.navbar}>
            <a href="#topNews">Top News</a>
            {/* <a href="#">Empty</a> */}
            {/* <a href="#">About</a> */}
            <button 
                className={classes.login} 
                onClick={ctx.isLoggedIn ? logoutHandler : loginPageHandler}>
                {ctx.isLoggedIn ? 'Logout' : 'Login'}
            </button>
            {/* <img src={filler} alt="" /> */}
        </nav>
    );
};

export default Navbar;