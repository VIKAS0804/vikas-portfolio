"use client";

import FeaturedProjects from "@/components/featured-projects";
import Icon from "@/components/icon/desktop-icon";
import { useDesktop } from "@/contexts/desktop-context";

export default function FeaturedProjectsDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <FeaturedProjects windowId={windowId} />,
      "Featured Work",
      "/png/folder.png"
    );
  };

  return (
    <Icon
      id="featured-projects"
      x={450}
      y={190}
      iconSrc="/png/folder.png"
      title="Featured Work"
      onDoubleClick={handleDoubleClick}
    />
  );
}
