import "./App.css";
import { useState } from "react";

function App(){

const [count, setCount] = useState(0);
function increment(){
  setCount(count+1)
}
function decrement(){
  setCount(count-1)
}

return (
<>
<h1>Incerment - Decrement Counter</h1>
<p>We will create an Increment Decrement Counter</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<h1>{count}</h1>
</>
);
}

export default App;