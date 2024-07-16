const Review = ({ name, content }) => {
  return (
    <div className="reviewData">
      <img src="/quote.png" alt="quote" />
      <p className="review-name">{name}</p>
      <p className="review-content">{content} </p>
    </div>
  );
};

export default Review;
