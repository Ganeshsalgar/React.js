import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //generate the password using string and number and sp.char

  //useRef :- use for copy the password and show to use

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, length, setPassword]);

  //function for useRef:- to copy the password

  const copyPasswordToClipboard = useCallback(() => {
    //this for UI user showing to copy the text
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);

    //copy the text using Window Object
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //use useEffect:-  for the any charge of the dependecies like length , number , and char for regenrate password

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <>
      <div className="w-full max-w-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3 px-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            readOnly
            //this for text that want to copy
            ref={passwordRef}
          />
          <button
            // that is the copied text
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllowed">Charcter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
