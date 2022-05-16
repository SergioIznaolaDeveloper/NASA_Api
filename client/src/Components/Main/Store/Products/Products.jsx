import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../../../../redux/actions/cartActions';

function Products(props) {
  const productList = props.products.map( (item,index)  => {
    return <div key={index}> 
      <img src={item.image} alt="producto seleccionado" style={{ width: 200 }}/>
      <p style={{ color:'blue',fontWeight:'bold'}}>
      {item.name}
      </p>
      <p>{item.category}</p>
      <p> CLP${item.price}  </p>
      <button className="button"
              onClick={() => props.addToCart(item)}>
              <i className="fas fa-shopping-cart"></i>
              Agregar al Carro 
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