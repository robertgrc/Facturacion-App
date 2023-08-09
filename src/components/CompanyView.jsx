import React from 'react'
import PropTypes from 'prop-types';

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

CompanyView.propTypes = {
  company: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
export default CompanyView