import React from 'react'
import { invoice } from '../data/invoice'

const getInvoice = () => {
    // let total = 0;
    // invoice.items.forEach(item =>{
    //   total = total + item.price * item.quantity;
    // });
    const total = calculateTotal(invoice.items);
    return{...invoice, total}
    
}

export const calculateTotal = (items=[]) =>{
  return items
      .map(item => item.price * item.quantity)
      .reduce((accumulator, currentValue)=>accumulator + currentValue, 0);
}

export default getInvoice