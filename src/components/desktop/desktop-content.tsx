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
  CalendarAppDesktopIcon,
  ExpenseShareDesktopIcon,
  AWSCapstoneDesktopIcon,
  FireDetectionRobotDesktopIcon,
  MySkillsDesktopIcon,
  WorkExperienceDesktopIcon,
  ContactDesktopIcon,
} from "@/components/desktop/icons";
import WindowManager from "@/components/window/window-manager";
import { handleMouseMove, handleMouseUp } from "@/utils/drag";
import { Suspense } from "react";

export type GithubType = { id: number; name: string; html_url: string; language: string, topics: string[] };

export default function DeskTopContent({
  repos,
}: {
  repos: Promise<Array<GithubType>>;
}) {
  return (
    <div
      className="w-full"
      style={{ height: "100%" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Left Column - Primary Actions */}
      <MyComputerDesktopIcon />
      <AboutDesktopIcon />
      <MySkillsDesktopIcon />
      <WorkExperienceDesktopIcon />
      <ResumeDesktopIcon />
      <ContactDesktopIcon />
      
      {/* Right Side - Projects Row */}
      <CalendarAppDesktopIcon />
      <ExpenseShareDesktopIcon />
      <AWSCapstoneDesktopIcon />
      <FireDetectionRobotDesktopIcon />
      
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
