import React from "react";

function Button({ icon }) {
  return (
    <button className="bg-bs-dark py-2 px-3 rounded-md text-white">
      <img src={icon} alt="store-button-image" className="w-full" />
    </button>
  );
}

export default Button;
