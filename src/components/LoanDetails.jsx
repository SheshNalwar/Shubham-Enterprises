import React from 'react'
import "../css/component styling/loanDetail.css"
import { LinkBtn } from '../Index'
import { loanDetails } from '../utils/Data'

const LoanDetails = ({ title, info, features, eligibility, process, imgSrc }) => {
    return (
        <div className='loan-details'>
            <h1>{title}</h1>
            <div className="loan-info">
                <div className='info'>
                    <h3>What is {title} ?</h3>
                    <p>{info}</p>
                </div>
                <div className="img">
                    <img src={loanDetails.imgSrc} alt="" />
                </div>
            </div>
            <h3>What are the benefits of {title} ?</h3>

            <p>{features}</p>

            <h3>What is the eligibility to get a {title} ?</h3>

            <p>{eligibility}</p>

            <h3>What is the process to get a {title} ?</h3>

            <div className="process-steps">
                {Object.entries(process).map(([key, value]) => (
                    <div key={key} className="process-step">
                        <p>{value}</p>
                    </div>
                ))}
            </div>

            <LinkBtn
                navTo={"/loanCalculator"}
                name={"Loan Calculator"}
                className={"link-btn"}
            />
        </div>
    )
}

export default LoanDetails
