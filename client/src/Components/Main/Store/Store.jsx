import Products from './Products';
import Cart from './Cart/Cart';
import React from 'react'

export default function Store() {
  return (
      <div className="store">
        <Cart/>
        <h1>PRODUCTOS</h1>
        <h3 style={{color:'grey'}}>Selecciona poductos para agregarlos al carro de compras</h3>
        <Products/>
      </div>
  )
}
