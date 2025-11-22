import React from "react";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <div className="brand">Second Advent Ministries</div>
        <nav className="navlinks" aria-label="Main navigation">
          <a className="navlink" href="#home">Home</a>
          <a className="navlink" href="#about">About</a>
          <a className="navlink" href="#projects">Ministry</a>
          <a className="navlink" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
