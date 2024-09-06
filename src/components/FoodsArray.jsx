import { useState } from "react"

function Foods() {

  const [foods, setFood] = useState(["Apple", "Banana", "Mango"])

  const handleaddFoods = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFood(f => [...f, newFood])
  }

  const handleremoveFoods = (index) => {
    setFood(f => f.filter((_, i) => i !== index))
  }

 

    const listFoods = foods.map((food, index) => <li onClick={() => handleremoveFoods(index)} key={index}>{food}</li> )


 return (
  <div>
  <ul>{listFoods}</ul>
  <input type="text" id="foodInput" />
  <button onClick={handleaddFoods}>Add food</button>
  </div>
    )


}
export default Foods