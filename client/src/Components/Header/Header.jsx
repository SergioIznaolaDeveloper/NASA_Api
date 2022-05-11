import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo"/>
      <div className="header__nav">
      <Link to={'./'}>
        <button className="nav__button">
            Home
        </button>
      </Link>
      <Link to={'./landings'}>
        <button className="nav__button">
            Landings
        </button>
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



