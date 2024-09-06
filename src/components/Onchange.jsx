import { useState } from "react";

const Onchange = () => {
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");
  const [mode, setMode] = useState("");
  const [color, setColor] =useState("#FFFFFF")

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleModeOfDelivery = (event) => {
    setMode(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className="onchange-container">
              <h1>Type your Name</h1>
      <p>Name: {name}</p>
      <input value={name} onChange={handleNameChange} type="text" />

      <h1>Choose Payment Method</h1>
      <p>Payment: {payment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="Visa">Visa</option>
        <option value="BPO">BPO</option>
        <option value="GCASH">GCASH</option>
        <option value="PayMaya">PayMaya</option>
      </select>
      <br></br>
      <br />

        <h1>Mode of Delivery</h1>
      <lable>
        <input
          value={"Pickup"}
          onChange={handleModeOfDelivery}
          type="radio"
          checked={mode === "Pickup"}
        />
        Pickup
      </lable>
      <lable>
        <input
          value={"Delivery"}
          onChange={handleModeOfDelivery}
          type="radio"
          checked={mode === "Delivery"}
        />
        Delivery
        <p>Shipping: {mode}</p>
      </lable>

      <div className="color-picker">
        <h1>Color Picker</h1>
        <div className="display-color" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
        </div>
        <label>Select a color: </label>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>
    </div>
  );
};

export default Onchange;
