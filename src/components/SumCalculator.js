import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, n) => acc + n, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const num = parseInt(inputValue, 10);

      if (!isNaN(num)) {
        setNumbers((prev) => [...prev, num]);
      }

      setInputValue("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <p>Sum: {sum}</p>
    </div>
  );
}
