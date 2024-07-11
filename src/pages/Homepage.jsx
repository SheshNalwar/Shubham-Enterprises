import React from 'react'
import "../css/homepage.css"
const Homepage = () => {
    return (
        <>
            <section id="landingPage">
                <div class="phuto">
                    <img src="Covers/img3.jpeg" alt="" />
                </div>
                <div class="content">
                    {/* <h1 class="title">SHUBHAM ENTERPRISES</h1> */}
                    <p class="slogan1">
                        Quick Loans, Easy Steps: Your Fast Track to Financial Ease!
                        <img src="Covers/img2.jpeg" alt="" />
                        <img src="Covers/img1.jpeg" alt="" />
                    </p>
                    <p class="slogan">
                        At SHUBHAM ENTERPRISES, we go beyond loans, we empower dreams. With a
                        legacy of trust and financial expertise, we are your dedicated partner
                        in achieving your goals and aspirations.
                    </p>
                    <button>About us</button>
                </div>
            </section>

            <div class="page2">
                <div id="page2-heading">
                    <h1>OUR SERVICES</h1>
                </div>
                <div class="loan-types">
                    <div class="loans">
                        <img src="Covers/personal-loan-icon.png" alt="" />
                        <span>
                            <h4>Personal Loans</h4>
                        </span>
                    </div>
                    <div class="loans">
                        <img src="Covers/business loan icon.png" alt="" />
                        <span>
                            <h4>Business Loans</h4>
                        </span>
                    </div>
                    <div class="loans">
                        <img src="Covers/Home Loan icon.jpg" alt="" />
                        <span>
                            <h4>Home Loans</h4>
                        </span>
                    </div>
                    <div class="loans">
                        <img src="Covers/car loan icon.jpg" alt="" />
                        <span>
                            <h4>Car Loans</h4>
                        </span>
                    </div>
                    <div class="loans">
                        <img src="Covers/commercial vehicle loan icon.jpg" alt="" />
                        <span>
                            <h4>Commercial Vehicle Loans</h4>
                        </span>
                    </div>
                    <div class="loans">
                        <img src="Covers/Tractor loan icon.jpg" alt="" />
                        <span>
                            <h4>Tractor Loans</h4>
                        </span>
                    </div>
                    <div class="loans">
                        <img src="Covers/mortgage loan icon.jpg" alt="" />
                        <span>
                            <h4>Mortgage Loans</h4>
                        </span>
                    </div>
                    <div class="loans">
                        <img src="Covers/agri loan icon.jpg" alt="" />
                        <span>
                            <h4>Agri Loans</h4>
                        </span>
                    </div>
                </div>
            </div>

            <div class="page3">
                <div class="page3-heading">
                    <h2>" In the Words of Our Customers "</h2>
                </div>

                <div class="review-container">
                    <div id="review-box" class="review1">
                        <div class="review-left">
                            <div class="review-img">
                                <img src="Covers/img1.jpeg" alt="" />
                            </div>
                            <div class="review-name">lorem</div>
                        </div>
                        <div class="review-right">
                            <div class="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>

                    <div id="review-box" class="review2">
                        <div class="review-left">
                            <div class="review-img">
                                <img src="Covers/img2.jpeg" alt="" />
                            </div>
                            <div class="review-name">lorem</div>
                        </div>
                        <div class="review-right">
                            <div class="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>

                    <div id="review-box" class="review3">
                        <div class="review-left">
                            <div class="review-img">
                                <img src="Covers/img1.jpeg" alt="" />
                            </div>
                            <div class="review-name">lorem</div>
                        </div>
                        <div class="review-right">
                            <div class="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>

                    <div id="review-box" class="review4">
                        <div class="review-left">
                            <div class="review-img">
                                <img src="Covers/img2.jpeg" alt="" />
                            </div>
                            <div class="review-name">lorem</div>
                        </div>
                        <div class="review-right">
                            <div class="review-content">
                                " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                                animi quos reiciendis cumque esse, explicabo "
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page4">
                <div class="page4-heading">
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                </div>

                <div class="faq-container">
                    <div class="faq-column">
                        <div class="question" onclick="toggleAnswer('q1')">
                            What is Lorem Ipsum?
                        </div>
                        <div class="answer" id="q1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </div>

                        <div class="question" onclick="toggleAnswer('q2')">
                            Why do we use it?
                        </div>
                        <div class="answer" id="q2">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </div>

                        <div class="question" onclick="toggleAnswer('q3')">
                            Where does it come from?
                        </div>
                        <div class="answer" id="q3">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </div>

                        <div class="question" onclick="toggleAnswer('q4')">Is it safe?</div>
                        <div class="answer" id="q4">
                            Yes, it is safe and widely used in the design and typesetting
                            industry.
                        </div>

                        <div class="question" onclick="toggleAnswer('q5')">
                            How can I get started?
                        </div>
                        <div class="answer" id="q5">
                            Getting started with Lorem Ipsum is easy, just add the text to your
                            design.
                        </div>
                    </div>

                    <div class="faq-column">
                        <div class="question" onclick="toggleAnswer('q6')">
                            What is Lorem Ipsum?
                        </div>
                        <div class="answer" id="q6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </div>

                        <div class="question" onclick="toggleAnswer('q7')">
                            Why do we use it?
                        </div>
                        <div class="answer" id="q7">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </div>

                        <div class="question" onclick="toggleAnswer('q8')">
                            Where does it come from?
                        </div>
                        <div class="answer" id="q8">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </div>

                        <div class="question" onclick="toggleAnswer('q9')">Is it safe?</div>
                        <div class="answer" id="q9">
                            Yes, it is safe and widely used in the design and typesetting
                            industry.
                        </div>

                        <div class="question" onclick="toggleAnswer('q10')">
                            How can I get started?
                        </div>
                        <div class="answer" id="q10">
                            Getting started with Lorem Ipsum is easy, just add the text to your
                            design.
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div class="top-button">Back To Top</div>
                <div class="footer-lists">
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
                <div class="footer-bottom">
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