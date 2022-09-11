import React, { useEffect } from 'react';

import api from "superagent";

import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.NODE_ENV);
  useEffect(() => {
    const main = async () => {
      const res = await api
        .get(
          "https://heroku-notes-mongo-backend.herokuapp.com/notes"
        )
        .set("accept", "json")
        .then((res) => res.body);
      console.log(res);
    }
    main();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
