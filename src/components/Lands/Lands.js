import React from 'react';

const Lands = (prop) => {
    console.log(prop.land);
    const {name,acres,price,seller,location,img} = prop.land;
    return (
        <div className="shadow-2xl rounded-2xl">
           <img className="rounded-t-2xl" src={img} alt="land-img" width="100%"/>
           <div className="p-5">
           <h2 className="text-xl font-semibold">{name}</h2>
           <h2>{acres} Acres</h2>
           <h2><i class="fas fa-dollar-sign text-green-500"></i> {price}</h2>
           <h2><i class="fas fa-map-marker-alt text-green-500"></i> {location}</h2>
           <h2>Name: {seller}</h2>
           </div>
        </div>
    );
};

export default Lands;