const ChartDetails = ({ name, pId, total }) => {
  return (
    <div className="chart-details">
      <p className="loanDetailsP">{name}</p>
      <p id={pId} className="value">
        {`${total}`.toLocaleString("en-IN")}₹
      </p>
    </div>
  );
};

export default ChartDetails;
