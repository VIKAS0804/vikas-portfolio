"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import AboutMe from "@/components/about-me";

export default function AboutDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <AboutMe windowId={windowId} />,
      "System Properties",
      "/png/computer.png"
    );
  };

  return (
    <Icon
      id="about-me"
      x={10}
      y={100}
      iconSrc="/png/me.png"
      title="About Me"
      onDoubleClick={handleDoubleClick}
    />
  );
}

