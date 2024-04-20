const Button = ({ value, setTip }) => {
  return (
    <input
      onClick={(e) => {
        console.log(e.target.value);
        setTip(e.target.value.replace("%", ""));
      }}
      type="button"
      value={value}
      className="bg-veryDark rounded-lg py-2 px-4 text-white font-extrabold hover:text-veryDark hover:cursor-pointer hover:bg-lightgrayish"
    />
  );
};
export default Button;
