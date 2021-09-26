import React from "react";

const Lands = (prop) => {
  const { name, acres, price, seller, location, img } = prop.land;
  return (
    <div className="shadow-2xl rounded-2xl">
      <img className="rounded-t-2xl" src={img} alt="land-img" width="100%" />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <h2 className="text-xl">
          <i className="fas fa-dollar-sign text-green-500"></i> {price}
        </h2>
        <h2 className="text-lg">
          <i className="fas fa-map text-green-500"></i> {acres} Acres
        </h2>
        <h2>
          <i className="fas fa-map-marker-alt text-green-500"></i> {location}
        </h2>
        <i className="fas fa-home text-green-500"></i>
        <a className="hover:underline ml-1" href="_seller">
          Visit {seller}
        </a>
        <br />
        <div className="flex items-center justify-between">
          <button
            onClick={() => prop.handleWishlist(prop)}
            className="bg-red-500 py-1 px-2 rounded-lg text-white mt-2"
          >
            <i className="fa fa-heart"></i> Add To Wishlist
          </button>
          <a
            href="_call"
            className="bg-green-500 py-1 px-2 rounded-lg text-white mt-2"
          >
            <i className="fas fa-phone"></i> Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lands;
