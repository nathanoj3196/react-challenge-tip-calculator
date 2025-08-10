import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = bill * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <>
      <BillInput bill={bill} setBill={setBill} />
      <SetPercentage tip={tip1} setTip={setTip1}>
        <label>How did you like the service </label>
      </SetPercentage>
      <SetPercentage tip={tip2} setTip={setTip2}>
        <label>How did your friend like the service </label>
      </SetPercentage>
      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>{" "}
      <input
        type="text"
        value={bill}
        placeholder="Bill value"
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function SetPercentage({ children, tip, setTip }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => setTip(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
