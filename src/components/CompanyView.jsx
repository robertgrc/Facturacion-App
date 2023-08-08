import React from 'react'

const CompanyView = ({company, title}) => {
const { fiscalNumber, name: nameCompany } = company
  return (
  <>
    <h3>{title}</h3>
    <ul className='list-group'>
     <li className='list-group-item active'>Name of Company: {nameCompany}</li>
     <li className='list-group-item'>Fiscal number: {fiscalNumber}</li>
    </ul>
  </>
  )
}

export default CompanyView