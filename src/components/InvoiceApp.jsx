import React from 'react'
import getInvoice from '../services/getInvoice'

const InvoiceApp = () => {

  const {id, client, company, items, name} = getInvoice();
  const {name:nameClient, address, lastName} = client
  const { city,country,number,street} = address
  const { fiscalNumber, name:nameCompany} = company
  return (
    <>
    <h1>Factura</h1>
    <ul>
        <li>Id:{ id}</li>
        <li>Name:{ name}</li>
    </ul>
    <h3>Datos del Cliente</h3>
    <ul>
        <li>Name:{nameClient} {lastName}</li>
        <li>Country:{country}</li>
        <li>City:{city}</li>
        <li>Street:{street} # {number}</li>
    </ul>
    <h3>Datos de la Empresa</h3>
     <ul>
        <li>Name of Company: {nameCompany}</li>
        <li>Fiscal number: {fiscalNumber}</li>
     </ul>
     <br />
     <h4>Productos de la Factura</h4>
    <table>
        <thead>
            <tr>
              <th>Producto:</th>
              <th>Precio:</th>
              <th>Cantidad:</th>
            </tr>
        </thead>
        <tbody>
         {items.map(item=>{ 
            return(
                <tr>
                    <td>Producto:{item.product}</td>
                    <td>Precio:{item.price}</td>
                    <td>Quantity:{item.quantity}</td>
                </tr>
            )
         })}
        </tbody>
    </table>
    </>
  )
}

export default InvoiceApp