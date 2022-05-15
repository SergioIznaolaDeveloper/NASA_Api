import React, { Component } from 'react';
import Products from '../../../hooks/Products';
import Cart from '../../../hooks/Cart';

export default class App extends Component {
  render() {   
    return (
      <div className="App">
        <p style={{backgroundColor:'#4f92b13b'}}>
        <h1>PRODUCTOS</h1>
        </p>
        <h3 style={{color:'grey'}}>Selecciona poductos para agregarlos al carro de compras</h3>
        <Products/>
        <Cart/>
      </div>
    );
  }
}

