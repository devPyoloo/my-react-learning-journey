import { useState } from "react"
import Car from './assets/gtrs5.png'

function CarObject() {

  const [cars, setCar] = useState([]);

  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState(""); 

  const handleaddCar = () => {
    const newCar = {year: year,
                    make: make,
                    model: model}
    setCar(c => [...c, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }

  const handleremoveCar = (index) => {
    setCar(cars.filter((_, i) => i !== index))

  }

  const handleYearChange = (e) => {
    setYear(e.target.value)
  };
  
  const handleMakeChange = (e) => {
    setMake(e.target.value)
  };

  const handleModelChange = (e) => {
    setModel(e.target.value)
  };

  return(<>
          <h1>List of my favourite cars</h1>
          {cars.map((car, index) => <p onClick={() => handleremoveCar(index)} key={index}>{car.year} {car.make} {car.model}</p>)}
          <input type="number" value={year} onChange={handleYearChange} />
          <input type="text" value={make} onChange={handleMakeChange} />
          <input type="text" value={model} onChange={handleModelChange} />
          <button onClick={handleaddCar} className="add-car">Add car</button>

          <img src={Car} alt="#Car Photo" />
        </>)



}

export default CarObject