"use client";

import Image from "next/image";

import { usePortfolioNavigation } from "@/components/portfolio-navigation";

export default function QuickAccess() {
  const {
    openAbout,
    openContact,
    openExperience,
    openProjects,
    openResume,
  } = usePortfolioNavigation();

  const actions = [
    ["About", "/png/me.png", () => openAbout()],
    ["Projects", "/png/folder.png", openProjects],
    ["Experience", "/png/sign-paper.png", openExperience],
    ["Resume", "/svg/pdf.svg", openResume],
    ["Contact", "/png/envelope.png", openContact],
  ] as const;

  return (
    <nav className="quick-access" aria-label="Portfolio quick access">
      <span className="quick-access-label">Quick access</span>
      {actions.map(([label, icon, onClick]) => (
        <button key={label} onClick={onClick}>
          <Image src={icon} width={16} height={16} alt="" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
