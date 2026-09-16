"use client";

import Icon from "@/components/icon/desktop-icon";
import { usePortfolioNavigation } from "@/components/portfolio-navigation";
import type { PortfolioProject } from "@/data/projects";

export default function ProjectDesktopIcon({
  project,
  x,
  y,
}: {
  project: PortfolioProject;
  x: number;
  y: number;
}) {
  const { openProject } = usePortfolioNavigation();

  return (
    <Icon
      id={`project-${project.id}`}
      x={x}
      y={y}
      iconSrc={project.icon}
      title={project.desktopTitle}
      onDoubleClick={() => openProject(project)}
    />
  );
}
