import React, { useState, useEffect } from 'react';

const useMyHook = title => {
  useEffect(() => {
    document.title = title;
  }, [title])
}

function About() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  useMyHook(`You clicked button now it reached to ${count} times `);


  return (
    <div className="container">
      <h4 className="center">ABOUT</h4>
      <p>Welcome to ABOUT Page of HOOKS application</p>
      <p>You clicked {count} times</p>
      <button className="btn btn-warning" onClick={incrementCount}>Click me</button>
    </div>
  )
}
export default About;  