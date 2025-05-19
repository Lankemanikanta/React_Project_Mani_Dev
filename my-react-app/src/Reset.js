import React,{useState} from 'react';

const Reset = () => {
  const[count,setCount] = useState("");
 
  return(<>
 <centrt>
   <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
 </centrt>
  
  </>)
};
export default Reset;