import React from "react";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="site-foot">
        © {new Date().getFullYear()} Your Name — Built with React + Vite
      </footer>
    </div>
  );
}