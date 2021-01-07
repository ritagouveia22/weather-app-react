import React from "react";
import Weather from "./Weather"

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
          <footer>This project was coded by Rita and it's <a href="https://github.com/ritagouveia22/weather-app-react/" target="_blank" rel="noreferrer">
open-sourced on GitHub
      </a> and hosted on Netlify.
      </footer>
      </div>
     </div>
   
  );
}
