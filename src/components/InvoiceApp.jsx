import React from 'react'
import getInvoice from '../services/getInvoice'
import InvoiceView from './InvoiceView';
import ClientView from './ClientView';
import CompanyView from './CompanyView';
import ListItemsView from './ListItemsView';

const InvoiceApp = () => {

  const { id, client, company, items, name } = getInvoice();
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
            <ListItemsView items={items} />
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceApp