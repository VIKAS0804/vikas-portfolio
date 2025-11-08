"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import FireDetectionRobot from "@/components/fire-detection-robot";

export default function FireDetectionRobotDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <FireDetectionRobot windowId={windowId} />,
      "Autonomous Fire Detection Robot",
      "/png/exe.png"
    );
  };

  return (
    <Icon
      id="fire-detection-robot"
      x={560}
      y={10}
      iconSrc="/png/exe.png"
      title="Fire Detection Robot"
      onDoubleClick={handleDoubleClick}
    />
  );
}

