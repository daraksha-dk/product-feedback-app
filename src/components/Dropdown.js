import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      Feature
      <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default Dropdown;
