import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount]=useState(0)
  function decrementCounter(){
    setCount(count-1)

  }
  function incrementCounter(){
    setCount(count+1)
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment and Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decrementCounter} className="border-r-2 text-center w-20 text-5xl">
          -
        </button>
        <div>
          {count}
        </div>
        <button onClick={incrementCounter} className="border-l-2 text-center w-20 text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="text-[#0398d4] font-medium text-2xl">Reset</button>
    </div>

    );
}

export default App;
