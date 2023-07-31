import React, {useEffect, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Home2() {
  const [text, setText] = useState('');

  // ONCHANGE HANDLER
  const changetext = (a) => {
    setText(a.target.value);
  };
  // CLEAR TEXT
  const cleartext = () => {
    setText('');

    toast('Text Cleared');
  };
  // LOCASE
  const locase = () => {
    const newtxt = text.toLowerCase();
    setText(newtxt);
    toast('Text Converted to Lower-Case');
  };
  // UPCASE
  const upcase = () => {
    const newtxt2 = text.toUpperCase();
    setText(newtxt2);
    toast('Text Converted to Upper-Case');
  };
  // Remove Spaces
  const Rspace = () => {
    const newtext3 = text.split(/[ ]+/);
    setText(newtext3.join(' '));
    toast('Extra Spaces Removed');
  };
  // COPY TEXT (ISsue)
  const copytext = () => {
    navigator.clipboard.writeText(text);
    toast('Text Copied');
  };

  //
  // const date = Date();
  // const mintes = date.getMinutes();

  // console.log(mintes);

  return (
    <>
      <div className="container ">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Your Text Here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange={changetext}
          ></textarea>
        </div>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <button className="btn btn-primary " onClick={cleartext}>
            Clear Text
          </button>
          <button
            className="btn btn-primary"
            onClick={upcase}
            style={{
              marginLeft: '5px',
            }}
          >
            Upper Case
          </button>
          <button
            className="btn btn-primary"
            onClick={locase}
            style={{
              marginLeft: '5px',
            }}
          >
            Lower Case
          </button>
          <button
            className="btn btn-primary"
            onClick={Rspace}
            style={{
              marginLeft: '5px',
            }}
          >
            Remove Spaces
          </button>
          <button
            // id="firstid"
            className="btn btn-primary"
            onClick={copytext}
            style={{
              marginLeft: '5px',
            }}
          >
            Copy Text
          </button>
        </div>
        <h1>Text Counter</h1>
        <p>
          {
            text.split(' ').filter((f) => {
              return f.length !== 0;
            }).length
          }{' '}
          Words {text.length} Characters
        </p>
        <h1>Read Time</h1>
        <p>
          {0.008 *
            text.split(' ').filter((e) => {
              return e.length != 0;
            }).length}
          Minutes
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : 'Write Something'}</p>
        <ToastContainer />
      </div>
    </>
  );
}

export default Home2;

// create a function which defines closures?

// Example one
// const a = 2;
// function one() {
//   const b = 3;
//   function two() {
//     const c = 4;
//     const x = a + b + c;
//     console.log(x);
//   }
//   two();
// }
// one();

// Example Two
// const now = new Date();
// const printTime = function createClosure() {
//   console.log(now);
// };

// printTime(); // Prints the current date and time.
