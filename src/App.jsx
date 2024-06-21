import React, { useState } from "react";
import Doing from "./components/Doing";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState("");
  const [doing, setDoing] = useState("");
  const [result, setResult] = useState([]);
  const [nextInput, setNextInput] = useState([]);

  function handleTodo(e) {
    e.preventDefault();
    console.log(e.target);
    setResult((prev) => [...prev, todo]);
    setTodo("");
  }

  function handleDoing(e) {
    e.preventDefault();
    setNextInput((prev) => [...prev, doing]);
  }

  function handleNext(index) {
    setNextInput((prev) => [...prev, result[index]]);
    setResult((prev) => prev.filter((_, id) => id !== index));
  }

  function handlePrev(index) {
    setResult((prev) => [...prev, nextInput[index]]);
    setNextInput((prev) => prev.filter((_, id) => id !== index));
  }

  console.log(result);

  return (
    <>
      <div className="app-container">
        <Todo
          todo={todo}
          setTodo={setTodo}
          handleTodo={handleTodo}
          result={result}
          setResult={setResult}
          handleNext={handleNext}
        />
        <Doing
          doing={doing}
          setDoing={setDoing}
          handleDoing={handleDoing}
          nextInput={nextInput}
          handlePrev={handlePrev}
          setNextInput={setNextInput}
        />
      </div>
    </>
  );
}

export default App;
