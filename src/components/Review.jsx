const Review = ({ className, imgSrc, alt, name, content }) => {
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
          {content}
        </div>
      </div>
    </div>
  );
};

export default Review;
