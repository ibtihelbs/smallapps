import React from "react";

const Results = ({ result, setBill, setPoeple, setTip }) => {
  const resetFn = () => {
    setBill("");
    setPoeple("");
    setTip("");
  };
  return (
    <div
      id="results"
      className="bg-veryDark rounded-xl p-8 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between">
          <span className="span text-white capitalize ">Tip Amount</span>
          <h3 className="text-lightgrayish text-3xl font-extrabold">
            {" "}
            {result.tipAmount}{" "}
          </h3>
        </div>
        <div className="flex justify-between">
          <span className="span text-white capitalize ">Total</span>
          <h3 className="text-lightgrayish text-3xl font-extrabold">
            {" "}
            {result.total}{" "}
          </h3>
        </div>
      </div>

      <button
        className="bg-lightgrayish rounded-lg text-veryDark py-2 font-bold"
        onClick={resetFn}
      >
        Reset
      </button>
    </div>
  );
};

export default Results;
