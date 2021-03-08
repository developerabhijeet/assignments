import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, auth } from './actions';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const counter = useSelector(state => state.counter)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch();
  const btnText = login?'Logout':'Login';
  return (
    <div className="App">
      <h1>Counter{counter}</h1>
      <button className="btn btn-success" onClick={()=>dispatch(increment())}> + </button>
      <button className="btn btn-danger" onClick={()=>dispatch(decrement())}> - </button>
      <p>{login?<h3>LogedIn</h3>:<h3>Not Yet LogedIn</h3>}</p>
      <button className="btn btn-danger" onClick={()=>dispatch(auth())}> {btnText} </button>
      
    </div>
  );
}

export default App;
