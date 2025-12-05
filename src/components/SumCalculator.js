import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, n) => acc + n, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleBlur = () => {
    const parsed = parseInt(currentValue, 10);

    if (!isNaN(parsed)) {
      setNumbers((prev) => [...prev, parsed]);
    }

    setCurrentValue("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onBlur={handleBlur}
      />

      <p>Sum: {sum}</p>
    </div>
  );
}
