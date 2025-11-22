import React from "react";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="footer container" role="contentinfo">
      <div>
        © {year} Second Advent Ministries — Digital evangelism, healthy living, and smart farming.
      </div>
      <div style={{marginTop:"0.5rem", color:"#9aa0a6"}}>
        Built with ❤️ using Vite + React — deployed on Vercel.
      </div>
    </footer>
  );
}
