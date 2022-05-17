import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from '../../../../redux/actions/cartActions';


function Cart(props) {

  const cartList = props.cart.map((item, index) =>{
    return <div className="cart" key={index}> 
      <img className="cart__img" src={item.image} alt="producto seleccionado" />
      <div className="cart__info">
      <p className="cart__title">
      {item.name}
      </p>
      <p className="cart__price">{item.price.toFixed(2)}€</p>
      <button className="cart__button" 
              onClick={ () => props.removeFromCart(item)} > 
              DELETE  
      </button>
      </div>

    </div>;
  });

  const totalList=props.cart.reduce((sum, product) => sum + product.price, 0)

  return (
    
    <div className="cart__section">
  { props.cart.length > 0 
  ? <><p className="length">{props.cart.length}</p>
  <h2>YOUR LANDING SELECTION 
  </h2>
  <div className="carts__container">
    {cartList}
    </div>
    <div className="cart__total">
  <h2 className="cart__total__title">Total</h2>
  <span className="cart__total__price" >
    {totalList.toFixed(2)}
    </span>
    <p className="cart__total__title">€</p>
</div></>
  : <p></p>}

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