import React, { useState } from "react";
import "./styles.css";

var emojiDirectory = {
  "😊": "Smile",
  "👌": "OK",
  "😴": "Sleep",
  "😫": "Tired",
  "🤔": "Think",
  "😭": "Crying",
  "⚠": "Warning",
  "😷": "Mask",
  "🎶": "Musical Notes",
  "🎉": "Celebrate"
};

var emojiWeKnow = Object.keys(emojiDirectory);

export default function App() {
  const [meaning, setEmoji] = useState("");

  function eventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDirectory[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this emoji in our database";
    }

    setEmoji(meaning);
    console.log(meaning);
  }

  function emojiCLickHandler(emoji) {
    var meaning = emojiDirectory[emoji];
    setEmoji(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input placeholder="Enter Emoji" onChange={eventHandler}></input>

      <h4>{meaning}</h4>
      <h3>Emojis We Knows</h3>

      {emojiWeKnow.map(function (emoji) {
        console.log(emoji);
        return (
          <span
            style={{
              padding: "1rem 1rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
            onClick={() => {
              emojiCLickHandler(emoji);
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
