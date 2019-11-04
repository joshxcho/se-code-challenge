import React from "react";

const Button = ({ value, handleClick }) => (
  <div>
    <input type="submit" value={value} onClick={handleClick} />
  </div>
);

export default Button;