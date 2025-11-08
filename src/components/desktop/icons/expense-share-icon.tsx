"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import ExpenseShare from "@/components/expense-share";

export default function ExpenseShareDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <ExpenseShare windowId={windowId} />,
      "ExpenseShare - Group Expense Tracker",
      "/png/folder.png"
    );
  };

  return (
    <Icon
      id="expense-share"
      x={340}
      y={10}
      iconSrc="/png/folder.png"
      title="ExpenseShare"
      onDoubleClick={handleDoubleClick}
    />
  );
}

