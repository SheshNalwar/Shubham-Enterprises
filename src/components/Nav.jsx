import React from 'react'
import "../css/nav.css"
const Nav = () => {
    return (
        <>
            <div class="nav">
                <div class="nav-brand">
                    <img id="logo" src="/logo-transparent-gold.png" alt="" />
                    <h1>Shubham Enterprises</h1>
                </div>

                <div class="nav-menu">
                    <li><a href="#" target="_blank" class="nav-color">Home</a></li>
                    <li id="dropdown">
                        <p>Loans</p>
                        <img src="Covers/up-arrow.png" alt="" id="up-arrow" />
                        <div class="dropdown-content">
                            <a href="" target="_blank">Personal Loans</a>
                            <a href="" target="_blank">Business Loans</a>
                            <a href="" target="_blank">Home Loans<br /></a>
                            <a href="" target="_blank">Car Loans </a>
                            <a href="" target="_blank">Commercial Vehicle Loans</a>
                            <a href="" target="_blank">Tractor Loans</a>
                            <a href="" target="_blank">Mortgage Loans</a>
                            <a href="" target="_blank">Agri Loans</a>
                        </div>
                    </li>
                    <li id="dropdown2">
                        <p>Loan Calculator</p>
                        <img src="Covers/up-arrow.png" alt="" id="up-arrow2" />
                        <div class="dropdown-content">
                            <a href="" target="_blank">Personal Loan Calculator</a>
                            <a href="" target="_blank">Business Loan Calculator</a>
                            <a href="" target="_blank">Home Loan Calculator<br /></a>
                            <a href="" target="_blank">Car Loan Calculator</a>
                            <a href="" target="_blank">Commercial Vehicle Loan Calculator</a>
                            <a href="" target="_blank">Tractor Loan Calculator</a>
                            <a href="" target="_blank">Mortgage Loan Calculator</a>
                            <a href="" target="_blank">Agri Loan Calculator</a>
                        </div>
                    </li>
                    <li><a href="#" target="_blank" class="nav-color">About us</a></li>
                    <li><a href="#" target="_blank" class="nav-color">Contact Us</a></li>
                </div>

                <div id="hamburger" onclick="hamburgermenu()">
                    <div id="line1" class="lines"></div>
                    <div id="line2" class="lines"></div>
                    <div id="line3" class="lines"></div>
                </div>
            </div>
        </>
    )
}

export default Nav