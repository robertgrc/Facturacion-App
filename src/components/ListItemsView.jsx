import React from 'react'
import RowItemView from './RowItemView'
import PropTypes from 'prop-types';

const ListItemsView = ({items, title}) => {
    return (
        <>
            <h4>{title}</h4>
            <table className='table table-striped table-hover' >
                <thead>
                    <tr>
                        <th>IdProducto:</th>
                        <th>Producto:</th>
                        <th>Precio:</th>
                        <th>Cantidad:</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(items)}
                    {items.map(({id, product, quantity, price }) => (
                        <RowItemView key={id} id={id} product={product} price={price} quantity={quantity}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}
ListItemsView.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default ListItemsView