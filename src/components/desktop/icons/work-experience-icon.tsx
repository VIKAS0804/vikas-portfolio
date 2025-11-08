"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import WorkExperience from "@/components/work-experience";

export default function WorkExperienceDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <WorkExperience windowId={windowId} />,
      "Work Experience",
      "/png/folder.png"
    );
  };

  return (
    <Icon
      id="work-experience"
      x={10}
      y={280}
      iconSrc="/png/folder.png"
      title="Work Experience"
      onDoubleClick={handleDoubleClick}
    />
  );
}

