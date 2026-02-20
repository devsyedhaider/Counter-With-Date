import { useState } from "react";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <button onClick={(c) => setStep((c) => c - 1)}>-</button>
        <span style={{ margin: ".5rem" }}> Count : {step} </span>
        <button onClick={(c) => setStep((c) => c + 1)}>+</button>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <button onClick={(c) => setCount((c) => c - step)}>-</button>
        <span style={{ margin: ".5rem" }}> Count : {count} </span>
        <button onClick={(c) => setCount((c) => c + step)}>+</button>
      </div>

      <p style={{ textAlign: "center" }}>
        <span>
          {count === 0
            ? " Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

export default App;
