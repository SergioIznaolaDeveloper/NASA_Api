import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from '../../../../redux/actions/cartActions';

function Cart(props) {
  const cartList = props.cart.map((item, index) =>{
    return <div key={index}> 
      <p style={{ color: "green"}}>
      {item.name}
      </p>
      <p>EUR€ {item.price}</p>
      <button className="button" 
              onClick={ () => props.removeFromCart(item)} > 
              <i className="fas fa-trash-alt"></i>
              Eliminar  
      </button>
    </div>;
  });

  const totalList=props.cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <div>
      <h1>CARRO DE COMPRAS 
        <i className="fas fa-cart-arrow-down"></i>
      </h1>
      <div  className="cart">
        {cartList}
      </div>
      <h2 style={{color:'#476a7b'}}>Total</h2>
      <div>
      <span style={{ color: "blue" ,fontSize:20}}>
        {totalList}
        </span>
        <p style={{ color: "black"}}>EUR€ 

        </p>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
      cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
      removeFromCart: item => dispatch(removeFromCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);