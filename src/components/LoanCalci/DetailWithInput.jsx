import Input from "../Input";
const DetailWithInput = ({
  label,
  value,
  displayValue,
  unit,
  min,
  max,
  step,
  onChange,
}) => {
  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  return (
    <div>
      <div className="detail">
        <div className="totalSelected">
          <p className="label">{label}</p>
          <p className="amtvalue">
            {displayValue} {unit}
          </p>
        </div>
      </div>
      <Input min={min} max={max} step={step} val={value} chg={handleChange} />
    </div>
  );
};

export default DetailWithInput;
