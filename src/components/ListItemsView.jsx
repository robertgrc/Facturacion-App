import React from 'react'
import RowItemView from './RowItemView'

const ListItemsView = ({items}) => {
    return (
        <>
            <h4>Productos de la Factura</h4>
            <table className='table table-striped table-hover' >
                <thead>
                    <tr>
                        <th>Producto:</th>
                        <th>Precio:</th>
                        <th>Cantidad:</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, quantity, price }) => (
                    <tr key={id}>
                        <RowItemView key={id} product={product} price={price} quantity={quantity}/>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListItemsView