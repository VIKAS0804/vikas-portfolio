"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import CalendarApp from "@/components/calendar-app";

export default function CalendarAppDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <CalendarApp windowId={windowId} />,
      "Calendar Application",
      "/png/clock-refresh.png"
    );
  };

  return (
    <Icon
      id="calendar-app"
      x={230}
      y={10}
      iconSrc="/png/clock-refresh.png"
      title="Calendar Application"
      onDoubleClick={handleDoubleClick}
    />
  );
}

