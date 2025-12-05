import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  // Recalculate sum whenever numbers change
  useEffect(() => {
    // Run asynchronously to avoid UI blocking
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleInput = (e) => {
    const value = e.target.value;

    if (value === "") return;

    const parsed = parseInt(value, 10);

    if (!isNaN(parsed)) {
      setNumbers((prev) => [...prev, parsed]);
    }

    e.target.value = ""; // clear input after each entry
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        onChange={handleInput}
        style={{ width: "200px", padding: "10px", fontSize: "18px" }}
      />

      <h3>Sum: {sum}</h3>
    </div>
  );
}
