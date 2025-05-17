import React,{useState} from 'react';

const App = () => {
  const[state,setState] = useState("");
  const handleChangeName = () => {
    setState(prev => prev +2);
  }
  return(<>
  <header>
<h1>this is my React Project </h1>
<p>{`This is ${state}`}</p>
<button onClick={handleChangeName}>  Click to Reveal my Name</button>
  </header>
  
  </>)
};
export default App;