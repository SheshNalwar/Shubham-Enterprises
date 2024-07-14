const Review = ({ className, name, content }) => {
  return (
    <div className={`reviewData ${className}`}>

      <img src="/quote.png" alt="" />
      <p className="review-name">{name}</p>
      <p className="review-content">{content} </p>


    </div>
  );
};

export default Review;
