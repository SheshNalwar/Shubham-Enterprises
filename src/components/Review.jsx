const Review = ({ className, imgSrc, alt, name }) => {
  return (
    <div className={className}>
      <div className="review-left">
        <div className="review-img">
          <img src={imgSrc} alt={alt} />
        </div>
        <div className="review-name">{name}</div>
      </div>
      <div className="review-right">
        <div className="review-content">
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam animi
          quos reiciendis cumque esse, explicabo "
        </div>
      </div>
    </div>
  );
};

export default Review;
