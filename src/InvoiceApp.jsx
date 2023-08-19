import React, { useState } from 'react'
import getInvoice from './services/getInvoice'
import InvoiceView from './components/InvoiceView'
import ClientView from './components/ClientView'
import CompanyView from './components/CompanyView'
import ListItemsView from './components/ListItemsView'
import TotalView from './components/TotalView'
import { showErrorAlert, showSuccessAlert } from './components/ErrorMessages'
const InvoiceApp = () => {

  const { id, client, company, items: itemsInitial, name, total } = getInvoice();

  const [productValue, setProductValue] = useState('')
  const [priceValue, setPriceValue] = useState('')
  const [quantityValue, setQuantityValue] = useState('')

  const [items, setItems] = useState(itemsInitial)
  const [counter, setCounter] = useState(4)

  const onProductChange = ({target}) => {
    console.log(target.value)
    setProductValue(target.value)
  }
  const onPriceChange = ({target}) => {
    console.log(target.value)
    setPriceValue(target.value)
  }
  const onQuantityChange = ({target}) => {
    console.log(target.value)
    setQuantityValue(target.value)
  }

  const onInvoiceItemsSubmit = (event) =>{
      event.preventDefault();
      // Validaciones
      if (productValue.trim().length <= 1) {
        showErrorAlert('Por favor, ingresa un nombre de producto válido.');
        return;
      }

      if (priceValue.trim().length <= 1) {
        showErrorAlert('Por favor, ingresa un precio válido.');
        return;
      }

      if (isNaN(priceValue.trim())) {
        showErrorAlert('El precio ingresado no es un número válido.');
        return;
      }

      if (quantityValue.trim().length < 1) {
        showErrorAlert('Por favor, ingresa una cantidad válida.');
        return;
      }

      if (isNaN(quantityValue.trim())) {
        showErrorAlert('La cantidad ingresada no es un número válido.');
        return;
      }
      showSuccessAlert();
      setItems([...items, {
        id: counter,
        product: productValue.trim(),
        price: +priceValue.trim(),
        quantity: parseInt(quantityValue.trim(), 10)
      }]);
      setProductValue('');
      setPriceValue('');
      setQuantityValue('');
      setCounter(counter + 1)
    }
  

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
            <form className="w-50" onSubmit={event => onInvoiceItemsSubmit(event)}>
              <input
                type="text"
                name="product"
                placeholder="Producto"
                className="form-control m-3"
                value={productValue}
                onChange={onProductChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Precio"
                className="form-control m-3"
                value={priceValue}
                onChange={event => onPriceChange(event)}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Cantidad"
                className="form-control m-3"
                value={quantityValue}
                onChange={onQuantityChange}
              />
              <button
                type="submit"
                className='btn btn-primary m-3'
              >
                Nuevo Item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceApp