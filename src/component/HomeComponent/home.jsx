import React, { useState, useEffect } from 'react';
const Home = () => {

  const [count, setCount] = useState(0);


  useEffect(() => {

    document.title = `You clicked button just, Now the click has reached to ${count} times`;
  });

  return (
    <div className="container">
      <h4 className="center">HOME</h4>
      <p>Welcome to HOME Page of HOOKS application</p>
      <p>You clicked {count} times</p>
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
export default Home;