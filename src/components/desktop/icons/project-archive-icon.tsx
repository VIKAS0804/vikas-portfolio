"use client";

import Icon from "@/components/icon/desktop-icon";
import ProjectArchive from "@/components/project-archive";
import { useDesktop } from "@/contexts/desktop-context";

export default function ProjectArchiveDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleOpen = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <ProjectArchive windowId={windowId} />,
      "Earlier Projects",
      "/png/folder.png"
    );
  };

  return (
    <Icon
      id="project-archive"
      x={230}
      y={10}
      iconSrc="/png/folder.png"
      title="Earlier Projects"
      onDoubleClick={handleOpen}
    />
  );
}
