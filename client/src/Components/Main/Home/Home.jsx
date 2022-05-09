import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1 className='home__title'>STARS</h1>
      {/* Link to List.js */}
      <Link to={'./landings'}>
        <button variant="raised">
            Landings
        </button>
      </Link>
      <Link to={'./neas'}>
        <button variant="raised">
            Neas
        </button>
      </Link>
    </div>
    );
}
