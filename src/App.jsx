import React from "react";

const Button = ({ value }) => {
  return (
    <input
      type="button"
      value={value}
      className="bg-veryDark rounded-lg py-2 px-4 text-white font-extrabold hover:text-veryDark hover:cursor-pointer hover:bg-lightgrayish"
    />
  );
};
const Label = ({ htmlFor }) => {
  return <label htmlFor={htmlFor}> {htmlFor} </label>;
};
const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-lg border-[2px] border-grayish px-2"
    />
  );
};
const App = () => {
  return (
    <div className="flex">
      <div className="font-space fullScreen w-screen h-screen relative bg-grayish">
        <div className="container absolute top-1/2 left-1/2 max-w-[600px]  flex flex-col gap-12 items-center justify-center   -translate-x-1/2 -translate-y-1/2 ">
          <img src="./images/TipsCalculator/logo.svg" alt="logo" />
          <div className="calculator-wrapper grid grid-cols-2 gap-8 bg-white p-8 rounded-xl">
            <form className="grid gap-8">
              <div className="flex flex-col gap-2">
                <Label htmlFor="Bill" />
                <Input placeholder="0" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="Select Tip %" />
                <div className="grid grid-cols-3 gap-3">
                  <Button value="5%" />
                  <Button value="10%" />
                  <Button value="15%" />
                  <Button value="25%" />
                  <Button value="50%" />
                  <Input placeholder="Custom" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="Number of People" />
                <Input placeholder="0" />
              </div>
            </form>

            <div
              id="results"
              className="bg-veryDark rounded-xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between">
                  <span className="text-white capitalize ">Tip Amount</span>
                  <h3 className="text-lightgrayish text-3xl font-extrabold">
                    0.00
                  </h3>
                </div>
                <div className="flex justify-between">
                  <span className="text-white capitalize ">Total</span>
                  <h3 className="text-lightgrayish text-3xl font-extrabold">
                    0.00
                  </h3>
                </div>
              </div>

              <button className="bg-lightgrayish rounded-lg text-veryDark py-2 font-bold">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
