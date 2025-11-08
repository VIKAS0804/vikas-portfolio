"use client";

import Image from "next/image";

import Window from "@/components/window/window";
import { useDesktop } from "@/contexts/desktop-context";
import AboutMe from "@/components/about-me";

export default function MyComputer({ windowId }: { windowId: string }) {
  const { closeWindow, openWindow, createWindowId } = useDesktop();

  const handleOpenAbout = (tab?: "general" | "experience" | "skills" | "contact") => {
    const newWindowId = createWindowId();
    openWindow(
      newWindowId,
      () => <AboutMe windowId={newWindowId} initialTab={tab} />,
      "System Properties",
      "/png/computer.png"
    );
  };

  return (
    <Window windowId={windowId} windowTitle="System Properties">
      <div className="flex flex-col h-full bg-[#f0eede] ml-1">
        {/* Tabs */}
        <div className="flex border-b-2 border-[#0831d9] bg-white">
          <div className="px-3 py-1 border-r border-gray-300 bg-gradient-to-b from-blue-50 to-white text-xs font-semibold text-blue-900 border-b-2 border-[#0831d9]">
            General
          </div>
          <div className="px-3 py-1 border-r border-gray-300 text-xs text-gray-600 hover:bg-gray-50">
            Computer Name
          </div>
          <div className="px-3 py-1 border-r border-gray-300 text-xs text-gray-600 hover:bg-gray-50">
            Hardware
          </div>
          <div className="px-3 py-1 border-r border-gray-300 text-xs text-gray-600 hover:bg-gray-50">
            Advanced
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 bg-white">
          <div className="flex gap-6">
            {/* Left Side - Computer Icon */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-32 h-32 border-2 border-gray-400 bg-white p-2 shadow-inner flex items-center justify-center">
                <Image
                  src="/png/computer.png"
                  width={96}
                  height={96}
                  alt="My Computer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-2 text-xs font-bold text-gray-900 text-center">
                My Computer
              </div>
            </div>

            {/* Right Side - System Information */}
            <div className="flex-1 flex flex-col gap-4">
              {/* System Specs */}
              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase">
                  System
                </h3>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">
                      Processor:
                    </span>
                    <span>Full-Stack Development (React, Node.js, Java)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">
                      Memory:
                    </span>
                    <span>2+ years SDE experience @ Jio Platforms</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">
                      Storage:
                    </span>
                    <span>10+ major projects delivered</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">
                      Operating System:
                    </span>
                    <span>MS CS @ Northeastern</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900 min-w-[80px]">
                      Graphics:
                    </span>
                    <span>AWS Cloud Architect | Docker | Kubernetes</span>
                  </div>
                </div>
              </div>

              {/* Quick Navigation Links */}
              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase">
                  Portfolio Navigation
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleOpenAbout}
                    className="flex items-center gap-2 px-2 py-1 text-xs text-left border border-gray-300 bg-white hover:bg-[#d2e5fa] active:bg-[#b8d4f0]"
                  >
                    <Image
                      src="/png/me.png"
                      width={16}
                      height={16}
                      alt="About Me"
                    />
                    <span>About Me</span>
                  </button>
                  <button
                    onClick={() => {
                      window.open("https://github.com/VIKAS0804", "_blank");
                    }}
                    className="flex items-center gap-2 px-2 py-1 text-xs text-left border border-gray-300 bg-white hover:bg-[#d2e5fa] active:bg-[#b8d4f0]"
                  >
                    <Image
                      src="/png/folder.png"
                      width={16}
                      height={16}
                      alt="Projects"
                    />
                    <span>Projects (GitHub)</span>
                  </button>
                  <button
                    onClick={() => handleOpenAbout("skills")}
                    className="flex items-center gap-2 px-2 py-1 text-xs text-left border border-gray-300 bg-white hover:bg-[#d2e5fa] active:bg-[#b8d4f0]"
                  >
                    <Image
                      src="/png/folder.png"
                      width={16}
                      height={16}
                      alt="Skills"
                    />
                    <span>Skills</span>
                  </button>
                  <button
                    onClick={() => handleOpenAbout("contact")}
                    className="flex items-center gap-2 px-2 py-1 text-xs text-left border border-gray-300 bg-white hover:bg-[#d2e5fa] active:bg-[#b8d4f0]"
                  >
                    <Image
                      src="/png/envelope.png"
                      width={16}
                      height={16}
                      alt="Contact"
                    />
                    <span>Contact</span>
                  </button>
                </div>
              </div>

              {/* Registered Information */}
              <div className="border-t border-gray-300 pt-3">
                <div className="text-xs space-y-1 text-gray-700">
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">
                      Registered to:
                    </span>
                    <span>Vikas Neriyanuru, Northeastern University</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-900">
                      Computer name:
                    </span>
                    <span>VIKAS-DEV-WORKSTATION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-2 p-3 bg-[#ece9d8] border-t border-gray-400">
          <button
            className="px-6 py-0.5 text-xs font-medium border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-[#ece9d8] hover:bg-[#ddd9c8] active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white shadow-[inset_1px_1px_0px_rgba(255,255,255,0.8)]"
            onClick={(e) => {
              e.preventDefault();
              closeWindow(windowId);
            }}
          >
            OK
          </button>
          <button
            className="px-6 py-0.5 text-xs font-medium border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-[#ece9d8] hover:bg-[#ddd9c8] active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white shadow-[inset_1px_1px_0px_rgba(255,255,255,0.8)]"
            onClick={(e) => {
              e.preventDefault();
              closeWindow(windowId);
            }}
          >
            Cancel
          </button>
          <button className="px-6 py-0.5 text-xs font-medium border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-[#ece9d8] hover:bg-[#ddd9c8] active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white shadow-[inset_1px_1px_0px_rgba(255,255,255,0.8)]">
            Apply
          </button>
        </div>
      </div>
    </Window>
  );
}

