// fix unnecessary rendering
// add edit functionality

// seperate news, notes and links (render one at a time) --> access via header
// add a loading state 
// render something nice when there is no notes or links etc to show 
// show errors to users 
// add some decent styling 

import React, { useContext } from "react";

import "./App.css";

import Notes from "./components/Notes/Note/Notes";
import Links from "./components/Links/Link/Links";
import News from "./components/News/News";
import Header from "./components/Layout/Header";
import Login from "./components/Login/Login";
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <Header />
      {ctx.inLoginPage && <Login />}
      {ctx.isLoggedIn && <Notes />}
      {ctx.isLoggedIn && <Links />}
      <News />
    </div>
  );
}

export default App;
