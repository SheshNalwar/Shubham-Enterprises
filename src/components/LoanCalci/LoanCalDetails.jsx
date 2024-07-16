import { inputDetails, DetailWithInput } from "../../Index";
const LoanCalDetails = ({ stateSetters }) => {
  return (
    <div className="details">
      {inputDetails.map((detail, index) => {
        const [value, setValue] = stateSetters[detail.label];
        const displayValue =
          detail.label === "Amount"
            ? `₹ ${value.toLocaleString("en-IN")}`
            : value;

        return (
          <DetailWithInput
            key={index}
            label={detail.label}
            value={value}
            displayValue={displayValue}
            unit={detail.unit}
            min={detail.min}
            max={detail.max}
            step={detail.step}
            onChange={setValue}
          />
        );
      })}
    </div>
  );
};

export default LoanCalDetails;
