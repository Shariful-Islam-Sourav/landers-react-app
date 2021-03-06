import React, { useEffect, useState } from "react";
import Lands from "../Lands/Lands";
import Wishlist from "../Wishlist/Wishlist";

const Shop = () => {
  //Set Land
  const [lands, setLands] = useState([]);
  //Get Data From JSON
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setLands(data));
  }, []);
  //Set Wishlist
  const [wishlist, setWishlist] = useState([]);
  //Wishlist Handler Function
  const handleWishlist = (land) => {
    const landWishlist = [...wishlist, land];
    setWishlist(landWishlist);
  };
  return (
    <div className="container mx-auto grid grid-cols-4 gap-12 my-10">
      <div className="col-span-3 grid grid-cols-3 gap-5">
        {lands.map((land) => (
          <Lands
            land={land}
            key={land.id}
            handleWishlist={handleWishlist}
          ></Lands>
        ))}
      </div>
      <div className="col-span-1 text-center">
        <Wishlist wishlist={wishlist}></Wishlist>
      </div>
    </div>
  );
};

export default Shop;
