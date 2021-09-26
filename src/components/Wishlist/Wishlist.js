import React from "react";
import WishlistName from "../WishlistNames/WishlistName";

const Wishlist = (prop) => {
  const { wishlist } = prop;
  let total = 0;
  for (const item of wishlist) {
    const landPrice = item.land.price;
    total += landPrice;
  }
  return (
    <div className="shadow-2xl h-1/5 top-0 sticky mt-2 rounded-2xl p-5 overflow-y-auto">
      <h2 className="text-2xl my-5 font-semibold">Wishlist</h2>
      <hr />
      <div className="text-left ml-3 mt-3">
        <h2 className="text-xl my-2">Lands Added: {wishlist.length}</h2>
        <h2 className="text-xl">Total Value: $ {total}</h2>
        {wishlist.map((land) => (
          <WishlistName landDetails={land} key={Math.random()}></WishlistName>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
