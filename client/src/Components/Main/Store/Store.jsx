import Products from './Products';
import Cart from './Cart/Cart';
import React from 'react'
export default function Store(props) {

  return (
      <div className="store">
        <Cart/>
        <h1 className='store__title'>LANDINGS STORE</h1>
        <Products/>
      </div>
  )
}
