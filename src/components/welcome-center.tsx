"use client";

import Image from "next/image";

import { usePortfolioNavigation } from "@/components/portfolio-navigation";
import Window from "@/components/window/window";

const credibility = [
  ["Current", "Software Developer Intern at Superstars"],
  ["Teaching", "Graduate TA supporting 60+ Khoury students"],
  ["Previously", "Software Development Engineer at Jio Platforms"],
  ["Education", "MS in Computer Science at Northeastern University"],
];

export default function WelcomeCenter({ windowId }: { windowId: string }) {
  const {
    openAbout,
    openContact,
    openExperience,
    openProjects,
    openResume,
  } = usePortfolioNavigation();

  const actions = [
    {
      label: "Explore featured projects",
      detail: "Open the products and experiments I am most excited about, then dig into how they work.",
      icon: "/png/folder.png",
      onClick: openProjects,
    },
    {
      label: "Read my experience",
      detail: "See the teams, classrooms, and technical problems that have shaped how I build.",
      icon: "/png/sign-paper.png",
      onClick: openExperience,
    },
    {
      label: "Open my resume",
      detail: "A focused view of my experience, education, and technical background.",
      icon: "/svg/pdf.svg",
      onClick: openResume,
    },
    {
      label: "Contact me",
      detail: "Find my email, LinkedIn, and GitHub if something here sparks a conversation.",
      icon: "/png/envelope.png",
      onClick: openContact,
    },
  ];

  return (
    <Window windowId={windowId} windowTitle="Welcome to Vikas's Portfolio" size="large">
      <div className="welcome-center flex h-full flex-col bg-white">
        <div className="welcome-hero">
          <div className="flex items-start gap-4">
            <div className="welcome-photo">
              <Image
                src="/images/vikas.jpg"
                width={104}
                height={104}
                alt="Vikas Neriyanuru"
                priority
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="welcome-kicker">WELCOME TO MY DIGITAL WORKSPACE</div>
              <h1>Hi, I&apos;m Vikas Neriyanuru.</h1>
              <p className="welcome-lede">
                This portfolio is a passion project and a living home for the products,
                systems, experiments, and ideas I care about. I enjoy building dependable
                software across full stack products, cloud systems, and applied machine
                learning, with equal attention to what happens under the hood and how the
                experience feels.
              </p>
              <button className="xp-link" onClick={() => openAbout()}>
                Read the full introduction
              </button>
            </div>
          </div>
        </div>

        <div className="welcome-content">
          <section aria-labelledby="quick-start-heading">
            <div className="section-heading-row">
              <div>
                <div className="welcome-kicker">CHOOSE YOUR PATH</div>
                <h2 id="quick-start-heading">What would you like to explore?</h2>
              </div>
              <span className="passion-pill">Built with curiosity, craft, and Windows XP nostalgia</span>
            </div>
            <div className="welcome-actions">
              {actions.map((action) => (
                <button
                  key={action.label}
                  className="welcome-action"
                  onClick={action.onClick}
                >
                  <Image src={action.icon} width={34} height={34} alt="" />
                  <span>
                    <strong>{action.label}</strong>
                    <small>{action.detail}</small>
                  </span>
                  <span aria-hidden="true" className="welcome-arrow">›</span>
                </button>
              ))}
            </div>
          </section>

          <section className="credibility-panel" aria-labelledby="current-heading">
            <div className="welcome-kicker">AT A GLANCE</div>
            <h2 id="current-heading">What I&apos;m doing now</h2>
            <div className="credibility-grid">
              {credibility.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="passion-note">
              <span>WHAT I LOVE BUILDING</span>
              <p>
                Thoughtful products, reliable systems, useful machine learning,
                and interfaces with a little personality.
              </p>
            </div>
          </section>
        </div>

        <div className="welcome-status">
          Every desktop icon opens with one click. Wander around, open a few
          folders, and make yourself at home.
        </div>
      </div>
    </Window>
  );
}
