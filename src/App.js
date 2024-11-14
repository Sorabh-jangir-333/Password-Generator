import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLength, setPasswordLength] = useState(8);
  let [fPass, setPass] = useState("");

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;
      console.log(charSet);
      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      alert("Please select at least one option");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
  };
  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxin">
          <input type="text" readOnly value={fPass} />{" "}
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length:</label>
          <input
            type="number"
            min="8"
            max="20"
            value={passwordLength}
            onChange={(event) => setPasswordLength(event.target.value)}
          />
        </div>

        <div className="passLength">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passLength">
          <label>Include lower letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="passLength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>

        <div className="passLength">
          <label>Include special symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="animated-button" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
