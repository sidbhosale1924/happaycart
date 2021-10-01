import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img
            src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
            alt="Logo"
          />
          <h2>Happay</h2>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-user"></i>
        </div>
      </header>
      <div className="heading">
        <h2>Most Popular</h2>
        <div className="star">
          <div className="hr"></div>
          <i className="far fa-star"></i>
          <div className="hr"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
