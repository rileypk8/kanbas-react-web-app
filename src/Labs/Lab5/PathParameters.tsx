import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("33");
  const [b, setB] = useState("8");
  return (
    <div>
      <h3>Path Parameters</h3>
      <input className="form-control mb-2" id="wd-path-parameter-a" type="number" value={a}
             onChange={(e) => setA(e.target.value)}/>
      <input className="form-control mb-2" id="wd-path-parameter-b" type="number" value={b}
             onChange={(e) => setB(e.target.value)}/>
      <a className="btn btn-primary me-2" id="wd-path-parameter-add"
         href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
         Plus: {a} + {b}
      </a>
      <a className="btn btn-danger me-2" id="wd-path-parameter-subtract" 
         href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
         Minus: {a} - {b}
      </a>
      <a className="btn btn-warning me-2" id="wd-path-parameter-add"
         href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}>
         Times: {a} * {b}
      </a>
      
      <a className="btn btn-info me-2" id="wd-path-parameter-add"
         href={`${b === `0`? "https://youtu.be/8HqyEHqEYho" : `${REMOTE_SERVER}/lab5/divide/${a}/${b}`}`}>
         Gazinta: {a} / {b}
      </a>
      <br />
      NOTE: "beacause 3 gazinta 12, 4 times..." ::taps cigar & waggles eyebrow:: <br/>
      You let the snarky math major code, it's your fault really. ¯\_(ツ)_/¯ <br />
      Try to divide by zero... (this sparks joy)
      <hr />
    </div>
  );
}
