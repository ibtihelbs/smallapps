import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Results from "./Results";
const Main = () => {
  const [bill, setBill] = useState("");
  const [poeple, setPoeple] = useState("");
  const [tip, setTip] = useState(1);
  const [result, setResult] = useState({
    tipAmount: 0,
    total: 0,
  });
  const [isEmpty, setIsEmpty] = useState({ bill: true, poeple: true });
  useEffect(() => {
    setResult(() => {
      return { tipAmount: 1 * tip, total: bill * tip * poeple };
    });
  }, [bill]);

  const calculateFn = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      setIsEmpty(() => {
        return { bill: Boolean(bill), poeple: Boolean(poeple) };
      });
      setResult(() => {
        return {
          tipAmount: (bill * tip) / (100 * poeple),
          total: bill / poeple + (bill * tip) / (100 * poeple),
        };
      });
    }
  };
  return (
    <div className="flex">
      <div className="font-space fullScreen w-screen h-screen relative bg-lightgrayish">
        <div className="container absolute top-1/2 left-1/2 max-w-[650px]  flex flex-col gap-12 items-center justify-center   -translate-x-1/2 -translate-y-1/2 ">
          <img src="./images/TipsCalculator/logo.svg" alt="logo" />
          <div className="calculator-wrapper grid grid-cols-2 gap-8 bg-white p-8 rounded-xl">
            <form className="grid gap-8" onKeyUp={calculateFn}>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="Bill" />
                  {!isEmpty.bill ? (
                    <span className="text-[10px] text-red">can't be a 0</span>
                  ) : (
                    ""
                  )}
                </div>
                <Input
                  className={`${!isEmpty.bill ? "border-red" : ""}`}
                  placeholder="0"
                  getInput={setBill}
                  inputValue={bill}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="Select Tip %" />
                <div className="grid grid-cols-3 gap-3">
                  <Button value="5%" setTip={setTip} />
                  <Button value="10%" setTip={setTip} />
                  <Button value="15%" setTip={setTip} />
                  <Button value="25%" setTip={setTip} />
                  <Button value="50%" setTip={setTip} />
                  <Input
                    placeholder="Custom"
                    getInput={setTip}
                    inputValue={""}
                    className={""}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="Number of People" />
                  {!isEmpty.poeple ? (
                    <span className="text-[10px] text-red">can't be a 0</span>
                  ) : (
                    ""
                  )}
                </div>
                <Input
                  className={`${!isEmpty.poeple ? "border-red" : ""}`}
                  placeholder="0"
                  getInput={setPoeple}
                  inputValue={poeple}
                />
              </div>
            </form>

            <Results
              result={result}
              setTip={setTip}
              setBill={setBill}
              setPoeple={setPoeple}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
