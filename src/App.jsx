import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/style.css";

export default function App(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="container" style={{paddingTop:"1rem"}}>
          <h2>About</h2>
          <p>
            This is a simple scaffold. Add your sermons, blogs, and resources as separate components under <code>src/components</code>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
