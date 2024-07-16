import { Review, reviewsData } from "../Index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ReviewCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
      autoPlay={true}
      containerClass="review-container"
      autoPlaySpeed={5000}
      infinite
      rewindWithAnimation
      rewind
    >
      {reviewsData.map((review, index) => {
        console.log(index);
        return (
          <Review key={index} name={review.name} content={review.content} />
        );
      })}
    </Carousel>
  );
};

export default ReviewCarousel;
