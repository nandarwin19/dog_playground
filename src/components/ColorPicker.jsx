import React from "react";

const ColorPicker = ({ label, id, name, onChange }) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <label htmlFor={id} className="text-white">
        {label}:
      </label>
      <input type="color" id={id} name={name} onChange={onChange} />
    </div>
  );
};

export default ColorPicker;
