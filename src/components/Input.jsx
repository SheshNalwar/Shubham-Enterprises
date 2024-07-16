const Input = ({ min, max, step, val, chg }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={val}
      onChange={chg}
    />
  );
};

export default Input;
