import React from 'react'
import "../css/homepage.css"
const Homepage = () => {
    return (
        <>
            <section id="landingPage">
                <div className="phuto">
                    <img src="/img3.jpeg" alt="" />
                </div>
                <div className="content">
                    {/* <h1 className="title">SHUBHAM ENTERPRISES</h1> */}
                    <p className="slogan1">
                        Quick Loans, Easy Steps: Your Fast Track to Financial Ease!
                        <img src="/img2.jpeg" alt="" />
                        <img src="/img1.jpeg" alt="" />
                    </p>
                    <p className="slogan">
                        At SHUBHAM ENTERPRISES, we go beyond loans, we empower dreams. With a
                        legacy of trust and financial expertise, we are your dedicated partner
                        in achieving your goals and aspirations.
                    </p>
                    <button>About us</button>
                </div>
            </section>

            <div className="page2">
                <div id="page2-heading">
                    <h1>OUR SERVICES</h1>
                </div>
                <div className="loan-types">
                    <div className="loans">
                        <img src="/personal-loan-icon.png" alt="" />
                        <span>
                            <h4>Personal Loans</h4>
                        </span>
                    </div>
                    <div className="loans">
                        <img src="/business loan icon.png" alt="" />
                        <span>
                            <h4>Business Loans</h4>
                        </span>
                    </div>
                    <div className="loans">
                        <img src="/Home Loan icon.jpg" alt="" />
                        <span>
                            <h4>Home Loans</h4>
                        </span>
                    </div>
                    <div className="loans">
                        <img src="/car loan icon.jpg" alt="" />
                        <span>
                            <h4>Car Loans</h4>
                        </span>
                    </div>
                    <div className="loans">
                        <img src="/commercial vehicle loan icon.jpg" alt="" />
                        <span>
                            <h4>Commercial Vehicle Loans</h4>
                        </span>
                    </div>
                    <div className="loans">
                        <img src="/Tractor loan icon.jpg" alt="" />
                        <span>
                            <h4>Tractor Loans</h4>
                        </span>
                    </div>
                    <div className="loans">
                        <img src="/mortgage loan icon.jpg" alt="" />
                        <span>
                            <h4>Mortgage Loans</h4>
                        </span>
                    </div>
                    <div className="loans">
                        <img src="/agri loan icon.jpg" alt="" />
                        <span>
                            <h4>Agri Loans</h4>
                        </span>
                    </div>
                </div>
            </div>

            <div className="page3">
                <div className="page3-heading">
                    <h2>" In the Words of Our Customers "</h2>
                </div>

                <div className="review-container">
                    <div id="review-box" className="review1">
                        <div className="review-left">
                            <div className="review-img">
                                <img src="/img1.jpeg" alt="" />
                            </div>
                            <div className="review-name">lorem</div>
                        </div>
                        <div className="review-right">
                            <div className="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>

                    <div id="review-box" className="review2">
                        <div className="review-left">
                            <div className="review-img">
                                <img src="/img2.jpeg" alt="" />
                            </div>
                            <div className="review-name">lorem</div>
                        </div>
                        <div className="review-right">
                            <div className="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>

                    <div id="review-box" className="review3">
                        <div className="review-left">
                            <div className="review-img">
                                <img src="/img1.jpeg" alt="" />
                            </div>
                            <div className="review-name">lorem</div>
                        </div>
                        <div className="review-right">
                            <div className="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>

                    <div id="review-box" className="review4">
                        <div className="review-left">
                            <div className="review-img">
                                <img src="/img2.jpeg" alt="" />
                            </div>
                            <div className="review-name">lorem</div>
                        </div>
                        <div className="review-right">
                            <div className="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page4">
                <div className="page4-heading">
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                </div>

                <div className="faq-container">
                    <div className="faq-column">
                        <div className="question" onclick="toggleAnswer('q1')">
                            What is Lorem Ipsum?
                        </div>
                        <div className="answer" id="q1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </div>

                        <div className="question" onclick="toggleAnswer('q2')">
                            Why do we use it?
                        </div>
                        <div className="answer" id="q2">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </div>

                        <div className="question" onclick="toggleAnswer('q3')">
                            Where does it come from?
                        </div>
                        <div className="answer" id="q3">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </div>

                        <div className="question" onclick="toggleAnswer('q4')">Is it safe?</div>
                        <div className="answer" id="q4">
                            Yes, it is safe and widely used in the design and typesetting
                            industry.
                        </div>

                        <div className="question" onclick="toggleAnswer('q5')">
                            How can I get started?
                        </div>
                        <div className="answer" id="q5">
                            Getting started with Lorem Ipsum is easy, just add the text to your
                            design.
                        </div>
                    </div>

                    <div className="faq-column">
                        <div className="question" onclick="toggleAnswer('q6')">
                            What is Lorem Ipsum?
                        </div>
                        <div className="answer" id="q6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </div>

                        <div className="question" onclick="toggleAnswer('q7')">
                            Why do we use it?
                        </div>
                        <div className="answer" id="q7">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </div>

                        <div className="question" onclick="toggleAnswer('q8')">
                            Where does it come from?
                        </div>
                        <div className="answer" id="q8">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </div>

                        <div className="question" onclick="toggleAnswer('q9')">Is it safe?</div>
                        <div className="answer" id="q9">
                            Yes, it is safe and widely used in the design and typesetting
                            industry.
                        </div>

                        <div className="question" onclick="toggleAnswer('q10')">
                            How can I get started?
                        </div>
                        <div className="answer" id="q10">
                            Getting started with Lorem Ipsum is easy, just add the text to your
                            design.
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="top-button">Back To Top</div>
                <div className="footer-lists">
                    <ul>
                        <b>Quick Links</b>
                        <li>Home</li>
                        <li>Loans</li>
                        <li>Loan Calculator</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <b>Our Services </b>
                        <li>Personal Loan</li>
                        <li>Business Loan</li>
                        <li>Home Loan</li>
                        <li>Car Loan</li>
                        <li>Commercial vehicle Loan</li>
                        <li>Tractor Loan</li>
                        <li>Mortgage Loan</li>
                        <li>Agri Loan</li>
                    </ul>
                    <ul>
                        <b>Contact Us</b>
                        <li>Phone: xxxxxxx199</li>
                        <li>Email : xyz@gmail.com</li>
                        <li>Address: Solapur</li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                        <li>Copyright © 2024 Shubham Enterprises</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Homepage