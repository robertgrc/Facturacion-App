import React from 'react'
import getInvoice from '../services/getInvoice'

const InvoiceApp = () => {

  const { id, client, company, items, name } = getInvoice();
  const { name: nameClient, address, lastName } = client
  const { city, country, number, street } = address
  const { fiscalNumber, name: nameCompany } = company
  return (
    <>
      <div className='container'>
        <div className='card my-3'>
          <div class="card-header">
            Factura
          </div>
          <div className='card-body'>
            <ul className='list-group'>
              <li className='list-group-item'>Id:{id}</li>
              <li className='list-group-item'>Name:{name}</li>
            </ul>
            <div className='row my-4'>
              <div className='col'>
                <h3>Datos del Cliente</h3>
                <ul className='list-group'>
                  <li className='list-group-item active'>Name:{nameClient} {lastName}</li>
                  <li className='list-group-item'>{country}/{city}</li>
                  <li className='list-group-item'>Street:{street} # {number}</li>
                </ul>
              </div>
              <div className='col'>
                <h3>Datos de la Empresa</h3>
                <ul className='list-group'>
                  <li className='list-group-item active'>Name of Company: {nameCompany}</li>
                  <li className='list-group-item'>Fiscal number: {fiscalNumber}</li>
                </ul>
              </div>
            </div>


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
                    <td>Producto:{product}</td>
                    <td>Precio:{price}</td>
                    <td>Quantity:{quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceApp