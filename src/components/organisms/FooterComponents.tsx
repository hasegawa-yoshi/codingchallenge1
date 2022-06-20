import React from "react";
import { Link } from "react-router-dom";

const FooterComponents = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        opacity: "0.7",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 100,
        padding: 5,
        textAlign: "center",
      }}
    >
      <Link to="/" style={{ margin: "5px", color: "white" }}>
        Home
      </Link>
      <Link to="/favorites" style={{ margin: "5px", color: "white" }}>
        お気に入り
      </Link>
    </div>
  );
};

export default FooterComponents;
