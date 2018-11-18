import React, { useState, useEffect } from "react";

export default function HooksExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You've clicked ${count} times`;
  });

  return (
    <div>
      <p>You've clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
