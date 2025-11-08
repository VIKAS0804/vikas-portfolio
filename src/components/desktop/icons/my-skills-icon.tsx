"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import MySkills from "@/components/my-skills";

export default function MySkillsDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <MySkills windowId={windowId} />,
      "My Skills",
      "/png/folder.png"
    );
  };

  return (
    <Icon
      id="my-skills"
      x={10}
      y={190}
      iconSrc="/png/folder.png"
      title="My Skills"
      onDoubleClick={handleDoubleClick}
    />
  );
}

