"use client";

import Image from "next/image";

import AWSCapstone from "@/components/aws-capstone";
import CalendarApp from "@/components/calendar-app";
import ExpenseShare from "@/components/expense-share";
import FireDetectionRobot from "@/components/fire-detection-robot";
import Window from "@/components/window/window";
import { useDesktop } from "@/contexts/desktop-context";

const archivedProjects = [
  {
    name: "Calendar Application",
    detail: "An earlier calendar and scheduling interface project.",
    icon: "/png/clock-refresh.png",
    component: CalendarApp,
  },
  {
    name: "ExpenseShare",
    detail: "A group expense-splitting application and UI project.",
    icon: "/png/sign-paper.png",
    component: ExpenseShare,
  },
  {
    name: "AWS Cloud Architecting Capstone",
    detail: "A highly available two-AZ cloud architecture with load balancing, scaling, and managed database services.",
    icon: "/png/network.png",
    component: AWSCapstone,
  },
  {
    name: "Fire Detection Robot",
    detail: "An embedded systems project focused on sensing, robotics, and automated response.",
    icon: "/png/controll.png",
    component: FireDetectionRobot,
  },
];

export default function ProjectArchive({ windowId }: { windowId: string }) {
  const { createWindowId, openWindow } = useDesktop();

  const openArchivedProject = (project: (typeof archivedProjects)[number]) => {
    const id = createWindowId();
    const Component = project.component;
    openWindow(
      id,
      () => <Component windowId={id} />,
      project.name,
      project.icon
    );
  };

  return (
    <Window windowId={windowId} windowTitle="Earlier Projects Archive">
      <div className="archive-window">
        <div className="project-address-bar">
          <span>Address:</span>
          <div>My Computer\Earlier Projects</div>
        </div>
        <div className="archive-intro">
          <Image src="/png/folder.png" width={48} height={48} alt="" />
          <div>
            <h1>Earlier Projects</h1>
            <p>
              These projects remain part of the portfolio history. The current featured
              work is placed directly on the desktop for faster recruiter access.
            </p>
          </div>
        </div>
        <div className="archive-grid">
          {archivedProjects.map((project) => (
            <button key={project.name} onClick={() => openArchivedProject(project)}>
              <Image
                src={project.icon}
                width={36}
                height={36}
                alt=""
              />
              <span>
                <strong>{project.name}</strong>
                <small>{project.detail}</small>
              </span>
            </button>
          ))}
        </div>
      </div>
    </Window>
  );
}
