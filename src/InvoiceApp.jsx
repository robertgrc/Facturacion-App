import React from 'react'
import getInvoice from './services/getInvoice'
import InvoiceView from './components/InvoiceView'
import ClientView from './components/ClientView'
import CompanyView from './components/CompanyView'
import ListItemsView from './components/ListItemsView'
import TotalView from './components/TotalView'

const InvoiceApp = () => {

  const { id, client, company, items, name, total } = getInvoice();
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
            <ListItemsView items={items} title="Productos para la Factura"/>
            <TotalView total={total} />
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceApp