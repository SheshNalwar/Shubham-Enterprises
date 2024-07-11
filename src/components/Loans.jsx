const Loans = ({ imgSrc, alt, loan }) => {
  return (
    <div className="loans">
      <img src={imgSrc} alt={alt} />
      <span>
        <h4>{loan} Loans</h4>
      </span>
    </div>
  );
};

export default Loans;
