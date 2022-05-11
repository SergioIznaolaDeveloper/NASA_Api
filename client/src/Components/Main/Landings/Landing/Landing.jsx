import React from 'react'


export default function Landing(props) {

  return ( 
    <div>{/* Check to see if any items are found*/}
    {props.data.length ? (
      <div className="landings__container">
        {/* Render the props.data of items */}
        {props.data.map((item, i) => {
          return (
            <div className="landing__container" key={i}>
              <div className="id-img">
                <p className='landing__id'>#{i+1}</p>
                {item.recclass === "H6" || item.recclass === "H5" || item.recclass === "H3-5" ? 
                <div className="landing__imgH"></div> 
                : item.recclass === "L6"  || item.recclass === "L5" || item.recclass === "LL5" || item.recclass === "LL6" || item.recclass === "LL4" || item.recclass === "L4" 
                  ? <div className="landing__imgL"></div>
                  : item.recclass === "Diogenite" || item.recclass === "Diogenite-pm" 
                  ? <div className="landing__imgD"></div>
                    : item.recclass === "Aubrite" || item.recclass === "C" || item.recclass === "Unknown" || item.recclass === "Pallasite"  || item.recclass === "Eucrite-mmict"
                    ?<div className="landing__imgVar"></div>
                    : <div className="landing__img"></div>}
                </div>
              <div className="landing__container-info">
              <div className='data-data'>
                <p className="landing__info-t">Name:</p>
                <p className="landing__info">{item.name}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Id:</p>
                <p className="landing__info">{item.id}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Recclass:</p>
                <p className="landing__info">{item.recclass}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Mass: </p>
                <p className="landing__info">{item.mass}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Year: </p>
                <p className="landing__info">{item.year}</p>
              </div>
              <div className='data-data'>
                <p className="landing__info-t">Latitude: </p>
                <p className="landing__info">{item.reclat}</p>
                </div>
              <div className='data-data'>
                <p className="landing__info-t">Longitude: </p>
                <p className="landing__info">{item.reclong}</p>
              </div>
              <form action={`/api/astronomy/landings/delete/${item.id}`}method='POST'>
                <button className='landing__button'>DELETE LANDING</button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <div>
        <h2>No data Items Found</h2>
      </div>
    )}</div>
  )
}
