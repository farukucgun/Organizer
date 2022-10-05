// fix unnecessary rendering
// add edit functionality
// add multiple user functionality with authentication
// handle errors better


import React from "react";

import "./App.css";

import Notes from "./components/Notes/Note/Notes";
import Links from "./components/Links/Link/Links";

function App() {

  return (
    <div>
      <h1>Organizer</h1>
      <Notes />
      <Links />
    </div>
  );
}

export default App;
