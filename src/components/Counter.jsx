import { useState } from "react";

const Counter = () => {

const [name, setName] = useState("Guest");

const updateName = () => {
  setName("Jayson")
}

const [age, setAge] = useState(0);

const yourAge = () => {
  setAge(22)

}

const [count, setCount] = useState(0);

const increment = () => {
  setCount(c => c + 1)
}

const decrement = () => {
  setCount(c => c - 1)
}

const reset = () => {
  setCount(0);
}

return (
  <> <p> Name: {name}</p>
  <button onClick={updateName}> Set Name </button>

  <p> Age: {age}</p>
  <button onClick={yourAge}> Set Age </button>
  
<p> {count}</p>
<button className="decrement-button" onClick={decrement}>Decrement</button>
<button className="reset-button" onClick={reset}>Reset</button>
<button className="increment-button" onClick={increment}>Increment</button>
</>
)

}
export default Counter