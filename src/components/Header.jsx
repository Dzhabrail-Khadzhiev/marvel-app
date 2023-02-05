import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-txt">
          <p>Marvel </p>
          <span>information portal</span>
        </div>
        <div className="header-str">
          <div className="header-home">
            <Link to="/">Characters</Link>
          </div>
          <div className="header-cmcs">
            <Link to="/Comics"> / Comics</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
