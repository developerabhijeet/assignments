import React, { useState, useEffect } from 'react';

function Contact() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h5>Hooks says pressed the key for {count} times</h5>
      <input autoFocus type="text" class="form-control" onChange={() => setCount(count + 1)} />
    </div>
  );
}
export default Contact; 