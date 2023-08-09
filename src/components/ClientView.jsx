import React from 'react'
import PropTypes from 'prop-types';

const ClientView = ({ client, title }) => {
    const { name: nameClient, address, lastName } = client
    const { city, country, number, street } = address
    return (
        <>
            <h3>{title}</h3>
            <ul className='list-group'>
                <li className='list-group-item active'>Name:{nameClient} {lastName}</li>
                <li className='list-group-item'>{country}/{city}</li>
                <li className='list-group-item'>Street:{street} # {number}</li>
            </ul>
        </>
    )
}
ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}
export default ClientView