import React from "react";

function Doing({
  doing,
  setDoing,
  handleDoing,
  nextInput,
  handlePrev,
  setNextInput,
}) {
  return (
    <div className="section">
      <h1>Doing</h1>
      <div className="input-container">
        <input
          type="text"
          value={doing}
          onChange={(e) => setDoing(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit" onClick={handleDoing}>
          Submit
        </button>
      </div>
      <div className="task-list">
        {nextInput.map((item, index) => (
          <div key={index} className="task-item">
            <p>{item}</p>
            <button onClick={() => handlePrev(index)}>Prev</button>
            <button
              onClick={() =>
                setNextInput((prev) => prev.filter((_, id) => id !== index))
              }
            >
              Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doing;
