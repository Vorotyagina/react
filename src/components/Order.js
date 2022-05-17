/* eslint-disable no-else-return */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */

import React from 'react'
import OrderDetail from './OrderDetail'

export default class Order extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0, // сумма
      quantity: 0, // количество
      details: [
        // описание
        {
          id: 1,
          productName: 'Война и мир — Л.Н.Толстой',
          price: 800,
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Две жизни — К.Е.Антарова',
          price: 700,
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Разговор с богом — Н.Д.Уолша',
          price: 1000,
          quantity: 0,
        },
        {
          id: 4,
          productName: 'Хохот Шамана — В.П.Серкин',
          price: 600,
          quantity: 0,
        },
        {
          id: 5,
          productName: 'Хроники Ехо — Макс Фрай',
          price: 400,
          quantity: 0,
        },
      ],
    }
  }

  incrementQuantityWithPrice = (index) => {

    let totalQuantity = this.state.quantity
    let totalAmount = this.state.amount

    const newData = this.state.details.map((object) => {if (object.id === index) { 
      return ( {
        id: object.id,
        productName: object.productName, 
        price: object.price,
        quantity: object.quantity + 1}) }
        else { 
          return ( {
            id: object.id,
            productName: object.productName, 
            price: object.price,
            quantity: object.quantity})
          }})

    newData.forEach((element) => {
            if (element.id === index) {
              totalQuantity += 1
              totalAmount += element.price}
            })

    this.setState({
      amount: totalAmount, 
      quantity: totalQuantity,
      details: newData })
  }  

  decrementQuantityWithPrice = (index) => {
    let totalQuantity = this.state.quantity
    let totalAmount = this.state.amount
    let change = 0
    
    const newData = this.state.details.map((object) => {
    
      if (object.id === index && object.quantity > 0) { 
       change = 1
        return ( {
          id: object.id,
          productName: object.productName, 
          price: object.price,
          quantity: object.quantity - 1})
 
       }
        else { 
          return ( {
            id: object.id,
            productName: object.productName, 
            price: object.price,
            quantity: object.quantity})
          }})
        
    newData.forEach((element) => {
      
      if (element.id === index && totalQuantity > 0 && (change === 1 ? element.quantity > -1 : element.quantity >0 )) {
        totalQuantity -= 1
        totalAmount -= element.price}
      })
    
    this.setState((prevState) => ({
      amount: totalAmount, 
      quantity: totalQuantity,
      details: newData}))
    
  }  

  render() {
    
    return (
      <div className='cards'>
        <OrderDetail items = {this.state.details} 
        increment = {this.incrementQuantityWithPrice} 
        decrement = {this.decrementQuantityWithPrice}
        quantity = {this.quantity}
        amount = {this.amount}
        />
        <div className="order">
          <div className="clear" />
          <p className="total">
            Total Quantity : <b>{this.state.quantity}</b>
          </p>
          <p className="total">
            Total Price : <b>{this.state.amount}/- </b>
          </p>
        </div>
      </div>
    )
  }
}
