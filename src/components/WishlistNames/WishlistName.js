import React from "react";

const WishlistName = (prop) => {
  const { landDetails } = prop;
  return (
    <div className="shadow-xl rounded-xl flex items-center gap-4 mt-4">
      <img
        className="w-20 rounded-l-xl"
        src={landDetails.land.img}
        alt="land-img"
      />
      <p>{landDetails.land.name}</p>
    </div>
  );
};

export default WishlistName;
