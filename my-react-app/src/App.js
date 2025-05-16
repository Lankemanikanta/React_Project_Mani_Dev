import React,{useState} from 'react';

const App = () => {
  const[count,setCount] = useState(0);
  const countIncrease = () => {
    setCount(prev => prev + 2);
  }
  const countDecrease = () => {
    setCount(prev => prev - 1);
  }
  return(<>
  <header>
<h1>this is my React Project </h1>
<p>count:{count}</p>
<button onClick={countIncrease}>  Click to Increase</button>
<button onClick={countDecrease}>  Click to Decrease</button>

  </header>
  
  </>)
};
export default App;