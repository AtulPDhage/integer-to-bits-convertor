import React from "react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(7);
  const [output, setOutput] = useState(111);
  console.log(number);

  const sendNumber = (event) => {
    event.preventDefault();

    //logic to convert integer to binary
    let x = Number(number);

    let array = [];

    while (x) {
      let a = x % 2;
      array.push(a);
      x = Math.floor(x / 2);
    }
    array.reverse();

    let str = "";

    for (let i = 0; i < array.length; i++) {
      str += array[i];
    }
    str = Number(str);
    console.log(str);
    setOutput(str);
  };

  return (
    <div className="bg-black w-screen h-screen text-cyan-500 grid place-content-center">
      <div className=" w-96 h-96 rounded-3xl border-white border-2 shadow-xl border-dotted shadow-cyan-300 backdrop-blur-xl">
        <form>
          <h1 className="text-cyan-500  text-3xl font-mono p-4 m-2 text-center border-cyan-300">
            Integer to Bits Convertor !!!
          </h1>
          <div className="text-cyan-500 text-3xl font-mono p-4 m-2 text-center">
            Enter the Integer
          </div>

          <div className="grid place-content-center">
            <input
              type="number"
              id="number"
              onChange={(e) => setNumber(Number(e.target.value))}
              className="text-black outline-none w-80 h-11 rounded-lg text-center text-xl font-bold"
            ></input>
          </div>
          <div className="grid place-content-center m-2">
            <button
              type="submit"
              className="bg-blue-500 text-black  w-80 h-11 rounded-lg text-xl font-mono "
              onClick={sendNumber}
            >
              calculate
            </button>
          </div>
        </form>
        <span className="text-white text-2xl font-bold grid place-content-center  ">
          {`${number} = `} {output}
        </span>
      </div>
    </div>
  );
}

export default App;
