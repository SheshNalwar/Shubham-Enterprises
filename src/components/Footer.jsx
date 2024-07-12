import React, { useEffect } from 'react'
import "../css/component styling/footer.css"
const Footer = () => {

    useEffect(() => {
        const backToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };


        const setUpBackToTop = () => {
            let btn = document.querySelector(".top-button");
            if (btn) {
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    backToTop();
                });
            }
        };
        setUpBackToTop();
        return () => {
            let btn = document.querySelector(".top-button");
            if (btn) {
                btn.removeEventListener("click", backToTop);
            }
        }
    }, [])


    return (

        <footer>
            <button className="top-button">Back to Top</button>
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
    )
}

export default Footer