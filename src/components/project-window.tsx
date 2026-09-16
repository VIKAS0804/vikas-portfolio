"use client";

import Image from "next/image";

import Window from "@/components/window/window";
import type { PortfolioProject } from "@/data/projects";

export default function ProjectWindow({
  project,
  windowId,
}: {
  project: PortfolioProject;
  windowId: string;
}) {
  return (
    <Window windowId={windowId} windowTitle={`${project.name} — Project Folder`} size="large">
      <div className="project-window">
        <div className="project-address-bar">
          <span>Address:</span>
          <div>My Computer\Featured Projects\{project.name}</div>
        </div>

        <div className="project-hero">
          <Image src={project.icon} width={64} height={64} alt="" />
          <div>
            <div className="project-category">{project.category}</div>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
            <span className="project-status">{project.status}</span>
          </div>
        </div>

        <div className="project-body">
          <main>
            <section className="project-section">
              <span className="project-section-number">01</span>
              <div>
                <h2>The problem</h2>
                <p>{project.problem}</p>
              </div>
            </section>

            <section className="project-section">
              <span className="project-section-number">02</span>
              <div>
                <h2>What was built</h2>
                <p>{project.implementation}</p>
              </div>
            </section>

            <section className="project-section">
              <span className="project-section-number">03</span>
              <div>
                <h2>Engineering highlights</h2>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </section>
          </main>

          <aside>
            <section className="project-side-card">
              <h2>Architecture</h2>
              <ol>
                {project.architecture.map((item, index) => (
                  <li key={item}>
                    <span>{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <section className="project-side-card">
              <h2>Technology</h2>
              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>

            <section className="project-side-card project-links">
              <h2>Explore</h2>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </section>
          </aside>
        </div>

        <div className="project-statusbar">
          {project.highlights.length} engineering highlights · {project.stack.length} core technologies
        </div>
      </div>
    </Window>
  );
}
