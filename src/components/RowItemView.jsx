import React from 'react'

const RowItemView = ({ key, product, price, quantity }) => {

    return (
        <>
            <tr key={key}>
                <td>Producto:{product}</td>
                <td>Precio:{price}</td>
                <td>Quantity:{quantity}</td>
            </tr>
        </>
    )
}

export default RowItemView