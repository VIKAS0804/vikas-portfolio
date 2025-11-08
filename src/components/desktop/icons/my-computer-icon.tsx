"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import MyComputer from "@/components/my-computer";

export default function MyComputerDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <MyComputer windowId={windowId} />,
      "System Properties",
      "/png/computer.png"
    );
  };

  return (
    <Icon
      id="my-computer"
      x={10}
      y={10}
      iconSrc="/png/computer.png"
      title="My Computer"
      onDoubleClick={handleDoubleClick}
    />
  );
}

