import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Review = ({ name, content }) => {
  useGSAP(() => {
    gsap.from(".reviewData", {
      duration: 5,
      x: 300,
      scrollTrigger: {
        trigger: ".reviewData",
        scroller: "body",
        start: "top 450",
        end: "top 200",
        scrub: 3,
        pin: "reviewData",
      },
    });
  })

  return (
    <div className="reviewData">
      <img src="/quote.png" alt="quote" />
      <p className="review-name">{name}</p>
      <p className="review-content">{content} </p>
    </div>
  );
};

export default Review;
