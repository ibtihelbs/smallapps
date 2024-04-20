import React from "react";

const Input = ({ placeholder, getInput, inputValue, className }) => {
  return (
    <input
      onChange={(e) => {
        getInput(e.target.value);
      }}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      className={`rounded-lg border-[2px] border-grayish px-2 ${className} `}
    />
  );
};

export default Input;
