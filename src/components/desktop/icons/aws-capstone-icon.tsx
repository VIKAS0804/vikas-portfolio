"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import AWSCapstone from "@/components/aws-capstone";

export default function AWSCapstoneDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <AWSCapstone windowId={windowId} />,
      "AWS Cloud Architecting Capstone",
      "/png/network.png"
    );
  };

  return (
    <Icon
      id="aws-capstone"
      x={450}
      y={10}
      iconSrc="/png/network.png"
      title="AWS Capstone"
      onDoubleClick={handleDoubleClick}
    />
  );
}

