import React,{useState} from 'react';

const App = () => {
  const[state,setState] = useState("");
  const handleChangeName = () => {
    setState(prev => prev +2);
    setState(prev => prev +1);
  }
 

  return(<>
  <header>
<h1>this is my React Project </h1>
<p>count:{handleChangeName}</p>
<button onClick={handleChangeName}>  Click to Reveal my Name</button>
  </header>
  
  </>)
};
export default App;