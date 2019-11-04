import React from "react";

const Button = ({ value, handleClick, className }) => (
  <div>
    <input className={className} type="submit" value={value} onClick={handleClick} />
  </div>
);

export default Button;