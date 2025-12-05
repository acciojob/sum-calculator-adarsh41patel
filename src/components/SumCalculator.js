import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  // Recalculate sum asynchronously
  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, n) => acc + n, 0);
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

    e.target.value = ""; // clear input
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        onChange={handleInput}
      />

      {/* REQUIRED BY CYPRESS */}
      <p>Sum: {sum}</p>
    </div>
  );
}
