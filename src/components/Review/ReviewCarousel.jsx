import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { reviewsData } from "../../Index";
import Review from "./Review";
const ReviewCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 500, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      containerClass="review-container"
      infinite
      rewindWithAnimation
      rewind
    >
      {reviewsData.map((review, index) => {
        return (
          <Review key={index} name={review.name} content={review.content} />
        );
      })}
    </Carousel>
  );
};

export default ReviewCarousel;
