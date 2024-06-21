import React from "react";

function Todo({ todo, setTodo, handleTodo, result, setResult, handleNext }) {
  return (
    <div className="section">
      <h1>Todo</h1>
      <div className="input-container">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit" onClick={handleTodo}>
          Submit
        </button>
      </div>
      <div className="task-list">
        {result.map((item, index) => (
          <div key={index} className="task-item">
            <p>{item}</p>
            <button
              onClick={() =>
                setResult((prev) => prev.filter((_, i) => i !== index))
              }
            >
              Done
            </button>
            <button onClick={() => handleNext(index)}>Next</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
