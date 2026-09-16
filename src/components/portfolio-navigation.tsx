"use client";

import AboutMe from "@/components/about-me";
import FeaturedProjects from "@/components/featured-projects";
import ProjectWindow from "@/components/project-window";
import WorkExperience from "@/components/work-experience";
import Window from "@/components/window/window";
import { useDesktop } from "@/contexts/desktop-context";
import type { PortfolioProject } from "@/data/projects";

export function usePortfolioNavigation() {
  const { createWindowId, openWindow } = useDesktop();

  const openAbout = (
    tab: "general" | "experience" | "skills" | "contact" = "general"
  ) => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <AboutMe windowId={windowId} initialTab={tab} />,
      "About Vikas",
      "/png/me.png"
    );
  };

  const openExperience = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <WorkExperience windowId={windowId} />,
      "Experience",
      "/png/folder.png"
    );
  };

  const openProjects = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <FeaturedProjects windowId={windowId} />,
      "Featured Projects",
      "/png/folder.png"
    );
  };

  const openResume = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => (
        <Window windowId={windowId} windowTitle="Vikas Neriyanuru — Resume.pdf">
          <iframe
            src="/pdf/vikas-resume.pdf"
            title="Vikas Neriyanuru resume"
            width="100%"
            height="100%"
          />
        </Window>
      ),
      "Resume",
      "/svg/pdf.svg"
    );
  };

  const openProject = (project: PortfolioProject) => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <ProjectWindow project={project} windowId={windowId} />,
      project.name,
      project.icon
    );
  };

  return {
    openAbout,
    openContact: () => openAbout("contact"),
    openExperience,
    openProjects,
    openProject,
    openResume,
    openSkills: () => openAbout("skills"),
  };
}
