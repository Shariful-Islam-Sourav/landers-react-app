import React, { useEffect, useState } from "react";
import Lands from "../Lands/Lands";

const Shop = () => {
  const [lands, setLands] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setLands(data));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-4 gap-5 my-10">
      <div className="col-span-3 grid grid-cols-3 gap-5">
        {lands.map((land) => (
          <Lands land={land} key={land.id}></Lands>  
        ))}
      </div>
      <div className="col-span-1 text-center">Cart Area</div>
    </div>
  );
};

export default Shop;
