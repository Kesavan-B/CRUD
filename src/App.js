import "./App.css";
import { Dats } from "./components/Dats";
import React from "react";
import { Button } from "@mui/material";
import { Main } from "./Main";

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  return (
    <div className={`App  ${darkMode ? "darkmode" : "lightmode"}`}>
      <Button  onClick={()=>setDarkMode(false)}>Light</Button>
      <Button onClick={()=>setDarkMode(true)}>Dark</Button>
      <Dats />
    </div>
    // <>
    // <Main/>
    // </>
  );
}

export default App;
