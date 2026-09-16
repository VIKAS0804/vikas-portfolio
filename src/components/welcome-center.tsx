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
      detail: "See what I built, how it works, and the engineering decisions behind it.",
      icon: "/png/folder.png",
      onClick: openProjects,
    },
    {
      label: "Read my experience",
      detail: "Professional engineering, teaching, and internship experience in one place.",
      icon: "/png/sign-paper.png",
      onClick: openExperience,
    },
    {
      label: "Open my resume",
      detail: "A concise version of my experience, education, and technical background.",
      icon: "/svg/pdf.svg",
      onClick: openResume,
    },
    {
      label: "Contact me",
      detail: "Email, LinkedIn, GitHub, and the easiest ways to start a conversation.",
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
              <div className="welcome-kicker">WELCOME TO MY PORTFOLIO</div>
              <h1>Hi, I&apos;m Vikas Neriyanuru.</h1>
              <p className="welcome-lede">
                I build dependable software across full-stack products, cloud
                systems, and applied machine learning. I care about clear user
                experiences, strong engineering fundamentals, and turning complex
                technical problems into useful products.
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
                <div className="welcome-kicker">START HERE</div>
                <h2 id="quick-start-heading">A recruiter-friendly quick tour</h2>
              </div>
              <span className="availability-pill">Open to software engineering opportunities</span>
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
          </section>
        </div>

        <div className="welcome-status">
          Tip: every desktop icon now opens with one click. Use the top shortcuts
          whenever you want the fastest route.
        </div>
      </div>
    </Window>
  );
}
