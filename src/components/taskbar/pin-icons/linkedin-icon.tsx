"use client";

import Icon from "@/components/icon/pin-icon";

export default function IEPinIcon() {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/vikas-neriyanuru/", "_blank");
  };

  return <Icon iconSrc="/png/linkedin.png" onClick={handleClick} />;
}
