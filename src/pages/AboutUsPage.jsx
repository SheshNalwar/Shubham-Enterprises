import { Contact, LinkBtn } from "../Index";
import { useEffect } from "react";
import "../css/aboutus.css";
const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="about-us-main">
        <div className="about-us-content">
          <h1 className="aboutUsMainTitle">
            Shubham Enterprises : Your Partner In
            <span className="se"> Financial</span>
            <br></br>
            Solutions
          </h1>
          <p>
            Welcome to Shubham Enterprises, where your financial aspirations
            take center stage. We provide comprehensive, tailored loan solutions
            for personal, business, and urgent financial needs, establishing
            ourselves as a trusted and reliable partner in the financial
            industry.
          </p>
        </div>

        <div className="about-us-image">
          <img src="About-us-img.jpeg" alt="" />
        </div>
      </div>

      <div className="about-us-choose">
        <h1>Why Choose Us?</h1>
        <p>
          At Shubham Enterprises, we are dedicated to delivering exceptional
          service tailored to your needs. Our commitment to transparency means
          you'll never encounter hidden fees or surprises, just straightforward
          terms that you can trust. Backed by our team of experienced advisors,
          we provide expert guidance to empower you with informed decisions.
          With our streamlined processes, we guarantee swift and efficient loan
          application processing, ensuring you receive the financial assistance
          you need without delay.
        </p>

        <div className="about-us-working">
          <img src="/laptop.jpeg" alt="" />
          <img src="/meeting.jpeg" alt="" />
          <img src="/individual.jpeg" alt="" />
        </div>

        <h1 id="commitment">Our Commitment</h1>
        <p>
          At our core, we cultivate enduring relationships grounded in trust and
          respect. By consistently enhancing our services, we strive to deliver
          optimal financial solutions, ensuring our clients' needs are met with
          excellence and reliability. This commitment drives us to evolve and
          innovate, aiming to exceed expectations and foster long-term
          partnerships built on mutual trust and shared success.
        </p>

        <h1 id="contact">Contact Us</h1>
        <p>
          Visit our office or contact us to learn how we can help you achieve
          your financial goals. Let Shubham Enterprises be your partner in
          success.
        </p>

        <div className="contactButton">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
