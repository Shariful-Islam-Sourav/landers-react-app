import React from "react";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className="header bg-green-500">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" width="60px"/>
        <h2 className="ml-3 text-2xl font-semibold text-white">Landers</h2>
        </div>
        <h2 className="text-white text-lg">Lands Budget: 1000000$</h2>
        <div className="text-xl text-white">
            <a href="_home">Home</a>
            <a className="ml-3" href="_home">Lands</a>
            <a className="ml-3" href="_home">Sellers</a>
            <a className="ml-3" href="_home">Contacts</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
