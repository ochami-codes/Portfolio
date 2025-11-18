import React from "react";

export default function Projects() {
  const projects = [
      { title: "Second Advent Ministries", desc: "Digital evangelism site" },
          { title: "Mushroom farming plan", desc: "Small farm plan & pricing" },
            ];

              return (
                  <div className="card">
                        <h2>Projects</h2>
                              <div className="projects-grid">
                                      {projects.map((p, i) => (
                                                <article key={i} className="project">
                                                            <h3>{p.title}</h3>
                                                                        <p>{p.desc}</p>
                                                                                  </article>
                                                                                          ))}
                                                                                                </div>
                                                                                                    </div>
                                                                                                      );
                                                                                                      }