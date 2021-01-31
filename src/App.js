import './App.css';
import React, { useState } from 'react'

function App() {

  const [inputStr, setInputStr] = useState("")

  const convertInput = () => {
    const currIn = document.querySelector("#text-input");
    const currOut = document.querySelector("#text-output");
    const r = fetch("/convertText", 
      {
        method: 'POST',
        body: JSON.stringify({'input': currIn.value}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      return response.json()
    }).then(result => {
      console.log(result)
      currOut.value = result.data
    })
    return;
  }

  return (
    <div className="App">
      <div className="container">
        <div id="header">
          A project by Snacc Overflow
        </div>
        <div id="title">
          🎉EmojIt🎉: Spice up your texts with emojis!
        </div>
        <div class="i-o">
          <div class="input">
            <textarea id="text-input">
              Somebody once told me the world is gonna roll me
              I ain't the sharpest tool in the shed
              She was looking kind of dumb with her finger and her thumb
            </textarea>
          </div>
          <div class="column-separator"></div>
          <div class="output">
            <textarea disabled="readonly" id="text-output">
            Somebody once told 🤙🤙me🤙🤙 the world🎫 is gon na roll me🤙 I ai n't the sharpest tool🧰 in the shed🥀🥀 She💁💁 was looking kind🐊🐊🐊 of dumb with her finger🤞🤞 and her thumb👍👍👍 
            </textarea>
          </div>
        </div>
        <div>
          <button id="submit" onClick={convertInput}>CONVERT</button>
        </div>
        <div class="disclaimer">
          Note: certain emojis are not yet supported by your browser 😔 
        </div>
      </div>
    </div>
  );
}

export default App;
