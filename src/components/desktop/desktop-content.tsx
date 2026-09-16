"use client";

import {
  MyComputerDesktopIcon,
  RecycleBinDesktopIcon,
  ReadmeDesktopIcon,
  IEDesktopIcon,
  ResumeDesktopIcon,
  LinkedinDesktopIcon,
  GithubDesktopIcon,
  AboutDesktopIcon,
  MySkillsDesktopIcon,
  WorkExperienceDesktopIcon,
  ContactDesktopIcon,
  ProjectDesktopIcon,
  ProjectArchiveDesktopIcon,
} from "@/components/desktop/icons";
import WindowManager from "@/components/window/window-manager";
import QuickAccess from "@/components/quick-access";
import WelcomeCenter from "@/components/welcome-center";
import { useDesktop } from "@/contexts/desktop-context";
import { handleMouseMove, handleMouseUp } from "@/utils/drag";
import { Suspense, useEffect, useRef } from "react";
import { portfolioProjects } from "@/data/projects";

export type GithubType = { id: number; name: string; html_url: string; language: string, topics: string[] };

export default function DeskTopContent({
  repos,
}: {
  repos: Promise<Array<GithubType>>;
}) {
  const { createWindowId, openWindow } = useDesktop();
  const openedWelcome = useRef(false);

  useEffect(() => {
    if (openedWelcome.current) return;
    openedWelcome.current = true;
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <WelcomeCenter windowId={windowId} />,
      "Welcome",
      "/png/computer.png"
    );
  }, [createWindowId, openWindow]);

  return (
    <div
      className="w-full"
      style={{ height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <QuickAccess />
      {/* Left Column - Primary Actions */}
      <MyComputerDesktopIcon />
      <AboutDesktopIcon />
      <MySkillsDesktopIcon />
      <WorkExperienceDesktopIcon />
      <ResumeDesktopIcon />
      <ContactDesktopIcon />
      
      {/* Current project folders — one click opens a complete case study. */}
      {portfolioProjects.map((project, index) => (
        <ProjectDesktopIcon
          key={project.id}
          project={project}
          x={120}
          y={10 + index * 82}
        />
      ))}
      <ProjectArchiveDesktopIcon />
      
      {/* Other Icons */}
      <IEDesktopIcon />
      <RecycleBinDesktopIcon />
      <ReadmeDesktopIcon />
      <LinkedinDesktopIcon />
      <Suspense>
        <GithubDesktopIcon repos={repos} />
      </Suspense>
      <WindowManager />
    </div>
  );
}
