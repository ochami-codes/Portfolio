import React from "react";

export default function Hero(){
  return (
    <section id="home" className="container hero" style={{paddingTop: "2.5rem"}}>
      <h1>Welcome to Second Advent Ministries</h1>
      <p>
        Sharing the gospel online — simple, clear, and faithful. This is a demo layout; you can edit the content and add your sermons, articles, and resources.
      </p>

      <div style={{marginTop:"1rem", display:"flex", gap:"0.6rem"}}>
        <a className="btn" href="#projects">Explore Ministry</a>
        <a className="navlink" href="#about" style={{alignSelf:"center"}}>Learn more</a>
      </div>
    </section>
  );
}
