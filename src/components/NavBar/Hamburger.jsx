const Hamburger = ({ togMenu, rf, op }) => {
  return (
    <div id="hamburger" onClick={togMenu} ref={rf}>
      <div id="line1" className={`lines ${op ? "line1" : ""}`}></div>
      <div id="line2" className={`lines ${op ? "line2" : ""}`}></div>
      <div id="line3" className={`lines ${op ? "line3" : ""}`}></div>
    </div>
  );
};

export default Hamburger;
