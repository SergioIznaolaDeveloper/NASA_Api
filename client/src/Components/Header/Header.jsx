import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { NavigatorContext } from "../../Context/NavigatorContext";

export default function Header() {
  const {navActive} = useContext(NavigatorContext);
  return (
    <header className="header">
      <div className="header__logo"/>
      <div className="header__nav">
      <Link to={'./'}>
        {console.log(navActive)}
        {navActive === "home" 
        ?(
          <button className="nav__button-active">
          Home
          </button>
        ):(
          <button className="nav__button">
          Home
          </button>
        )}
      </Link>
      <Link to={'./landings'}>
        {navActive === "landings" 
        ?(
        <button  className="nav__button-active">
            Landings
        </button>
         ):(
          <button className="nav__button">
            Landings
        </button>
         )}
      </Link>
      <Link to={'./neas'}>
        <button className="nav__button">
            Neas
        </button>
      </Link>
      </div>
    </header>
    );
}



