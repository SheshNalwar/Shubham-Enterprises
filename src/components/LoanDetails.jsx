import React from 'react'

const LoanDetails = ({ title, info, features, eligibility, process }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{info}</p>
            <p>{features}</p>
            <p>{eligibility}</p>
            <p> {process} </p>
        </>
    )
}

export default LoanDetails