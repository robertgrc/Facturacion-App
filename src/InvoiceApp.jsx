import React, { useEffect, useState } from 'react'
import getInvoice from './services/getInvoice'
import InvoiceView from './components/InvoiceView'
import ClientView from './components/ClientView'
import CompanyView from './components/CompanyView'
import ListItemsView from './components/ListItemsView'
import TotalView from './components/TotalView'
import { showErrorAlert, showSuccessAlert } from './components/ErrorMessages'
const InvoiceApp = () => {

  const invoiceInitial = {
    id:0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street:'',
            number: 0
        }
    },
    company:{
        name: '',
        fiscalNumber: 0,
    },
    items:[]
}

  const [invoice, setInvoice] = useState(invoiceInitial);

const [items, setItems] = useState([])

useEffect(() => {
  const data = getInvoice();
  console.log(data)
  setInvoice(data)
  setItems(data.items)
}, [])

const { id, client, company, name, total, items: itemsInitial } = invoice;
//* hacemos una mejora en un solo state y luego desestructuramos
  // const [productValue, setProductValue] = useState('')
  // const [priceValue, setPriceValue] = useState('')
  // const [quantityValue, setQuantityValue] = useState('')
  const [formItemsState, setFormItemsState] = useState({
    product:'',
    price:'',
    quantity:'',
  })

  const {product, price, quantity}= formItemsState;

  const [counter, setCounter] = useState(4)

  const onInputChange = ({target: {name, value}}) => {
    // console.log(name)
    // console.log(value)
    
    setFormItemsState({
      ...formItemsState,
      [ name ]: value
    });
  }
  // const onProductChange = ({target}) => {
  //   console.log(target.value)
  //   setProductValue(target.value)
  // }
  // const onPriceChange = ({target}) => {
  //   console.log(target.value)
  //   setPriceValue(target.value)
  // }
  // const onQuantityChange = ({target}) => {
  //   console.log(target.value)
  //   setQuantityValue(target.value)
  // }

  const onInvoiceItemsSubmit = (event) =>{
      event.preventDefault();
      // Validaciones
      if (product.trim().length <= 1) {
        showErrorAlert('Por favor, ingresa un nombre de producto válido.');
        return;
      }

      if (price.trim().length <= 1) {
        showErrorAlert('Por favor, ingresa un precio válido.');
        return;
      }

      if (isNaN(price.trim())) {
        showErrorAlert('El precio ingresado no es un número válido.');
        return;
      }

      if (quantity.trim().length < 1) {
        showErrorAlert('Por favor, ingresa una cantidad válida.');
        return;
      }

      if (isNaN(quantity.trim())) {
        showErrorAlert('La cantidad ingresada no es un número válido.');
        return;
      }
      showSuccessAlert();
      setItems([...items, {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10)
      }]);
      setFormItemsState({
        product:'',
        price:'',
        quantity:'',
      })
      setCounter( counter + 1 );
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
                value={product}
                onChange={onInputChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Precio"
                className="form-control m-3"
                value={price}
                onChange={event => onInputChange(event)}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Cantidad"
                className="form-control m-3"
                value={quantity}
                onChange={onInputChange}
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