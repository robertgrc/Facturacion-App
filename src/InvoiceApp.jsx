import React, { useState } from 'react'
import getInvoice from './services/getInvoice'
import InvoiceView from './components/InvoiceView'
import ClientView from './components/ClientView'
import CompanyView from './components/CompanyView'
import ListItemsView from './components/ListItemsView'
import TotalView from './components/TotalView'

const InvoiceApp = () => {

  const { id, client, company, items:itemsInitial, name, total } = getInvoice();
  
  const [productValue, setProductValue] = useState('')
  const [priceValue, setPriceValue] = useState('')
  const [quantityValue, setQuantityValue] = useState('')

  const [items, setItems] = useState(itemsInitial)

  return (
    <>
      <div className='container'>
        <div className='card my-3'>
          <div className="card-header">
            Factura
          </div>
          <div className='card-body'>
            <InvoiceView id={id} name={name} />
            <div className='row my-4'>
              <div className='col'>
                <ClientView client={client} title="Datos del Cliente" />
              </div>
              <div className='col'>
                <CompanyView company={company} title="Datos de la Empresa" />
              </div>
            </div>
            <ListItemsView items={items} title="Productos para la Factura" />
            <TotalView total={total} />
            <form className="w-50" onSubmit={event=>{
              event.preventDefault();
              setItems([...items, { 
                id:4, 
                product:productValue, 
                price: +priceValue, 
                quantity: parseInt(quantityValue, 10)
              }]);
              setProductValue('');
              setPriceValue('');
              setQuantityValue('');
            } }>
              <input
                type="text"
                name="product"
                placeholder="Producto"
                className="form-control m-3"
                value={productValue}
                onChange={event=>{
                  console.log(event.target.value)
                  setProductValue(event.target.value)
                }} 
              />
              <input
                type="text"
                name="price"
                placeholder="Precio"
                className="form-control m-3"
                value={priceValue}
                onChange={event=>{
                  console.log(event.target.value)
                  setPriceValue(event.target.value)
                }}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Cantidad"
                className="form-control m-3"
                value={quantityValue}
                onChange={event=>{
                  console.log(event.target.value)
                  setQuantityValue(event.target.value)
                }}
              />
              <button type="submit" className='btn btn-primary'>Crear Item</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceApp