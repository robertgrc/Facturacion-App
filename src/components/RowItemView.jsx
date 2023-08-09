import React from 'react'
import PropTypes from 'prop-types';

const RowItemView = ({id, product, price, quantity }) => {

    return (
        <>
            <tr>
                <td>IdProducto:{id}</td>
                <td>Producto:{product}</td>
                <td>Precio:{price}</td>
                <td>Quantity:{quantity}</td>
            </tr>
        </>
    )
}
RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
}

export default RowItemView