import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../../../redux/actions/cartActions';

function Products(props) {
  const productList = props.products.map( (item,index)  => {
    return <div key={index} className="product"> 
      <img src={item.image} alt="product" className='product__img'/>
      <p className='product__title'>
      {item.name}
      </p>
      <p className='product__category'>Class: {item.category}</p>
      <p className='product__price'> {item.price.toFixed(2)} € </p>
      <button className="product__button"
              onClick={() => props.addToCart(item)}>
              ADD TO CART 
      </button> 
    </div>
  });
  return (
    <div className= "products">
       { productList }
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
      products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
      addToCart: item => dispatch(addToCart(item))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);