import Products from './Products';
import Cart from './Cart/Cart';
import React, {useContext, useEffect} from 'react'
import { NavigatorContext } from "../../../Context/NavigatorContext";
export default function Store(props) {
const {setNavActive} = useContext(NavigatorContext);
useEffect(() => {
  setNavActive("store"); // set navbar active
} , [])
  return (
      <div className="store">
        <Cart/>
        <h1 className='store__title'>LANDINGS STORE</h1>
        <Products/>
      </div>
  )
}
