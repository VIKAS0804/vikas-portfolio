"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import AboutMe from "@/components/about-me";

export default function ContactDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <AboutMe windowId={windowId} initialTab="contact" />,
      "System Properties",
      "/png/envelope.png"
    );
  };

  return (
    <Icon
      id="contact-me"
      x={10}
      y={460}
      iconSrc="/png/envelope.png"
      title="Contact Me"
      onDoubleClick={handleDoubleClick}
    />
  );
}

