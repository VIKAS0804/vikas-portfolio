"use client";

import { useState } from "react";
import Image from "next/image";

import Window from "@/components/window/window";
import { useDesktop } from "@/contexts/desktop-context";

type Tab = "general" | "experience" | "skills" | "contact";

export default function AboutMe({ 
  windowId, 
  initialTab = "general" 
}: { 
  windowId: string;
  initialTab?: Tab;
}) {
  const { closeWindow } = useDesktop();
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Window windowId={windowId} windowTitle="System Properties">
      <div className="flex flex-col h-full bg-[#f0eede] ml-1">
        {/* Tabs */}
        <div className="flex border-b-2 border-[#0831d9] bg-white">
          <button
            onClick={() => setActiveTab("general")}
            className={`px-3 py-1 border-r border-gray-300 text-xs font-semibold ${
              activeTab === "general"
                ? "bg-gradient-to-b from-blue-50 to-white text-blue-900 border-b-2 border-[#0831d9]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3 py-1 border-r border-gray-300 text-xs font-semibold ${
              activeTab === "experience"
                ? "bg-gradient-to-b from-blue-50 to-white text-blue-900 border-b-2 border-[#0831d9]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-3 py-1 border-r border-gray-300 text-xs font-semibold ${
              activeTab === "skills"
                ? "bg-gradient-to-b from-blue-50 to-white text-blue-900 border-b-2 border-[#0831d9]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-3 py-1 text-xs font-semibold ${
              activeTab === "contact"
                ? "bg-gradient-to-b from-blue-50 to-white text-blue-900 border-b-2 border-[#0831d9]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 bg-white">
          {/* General Tab */}
          {activeTab === "general" && (
            <div className="flex gap-6">
              {/* Left Side - Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 border-2 border-gray-400 bg-white p-1 shadow-inner">
                  <img
                    src="/images/vikas.jpg"
                    width={128}
                    height={128}
                    alt="Vikas Neriyanuru"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to me.jpg if vikas.jpg doesn't exist
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes("me.jpg")) {
                        target.src = "/images/me.jpg";
                      }
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Information */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Image
                      src="/png/computer.png"
                      width={24}
                      height={24}
                      alt="Computer icon"
                    />
                    <h2 className="text-lg font-bold text-gray-900">
                      Vikas Neriyanuru
                    </h2>
                  </div>
                  <div className="text-sm text-gray-700 mb-2">
                    Software Development Engineer | MS in CS @ Northeastern
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <Image
                      src="/png/home.png"
                      width={16}
                      height={16}
                      alt="Location"
                    />
                    Boston, MA
                  </div>
                </div>

                {/* Bio Section */}
                <div className="border-t border-gray-300 pt-3">
                  <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                    About
                  </h3>
                  <div className="text-xs text-gray-700 leading-relaxed space-y-2">
                    <p>
                      Software engineer with 2+ years of experience building
                      enterprise web platforms at Jio Platforms, serving 400,000+
                      users. Proven track record in full-stack development, cloud
                      architecture, and system design. Currently pursuing MS in
                      Computer Science at Northeastern University (Jan 2025 - May
                      2027).
                    </p>
                    <p>
                      Specialized in building scalable microservices with React,
                      Node.js, and AWS. Reduced manual processing by 40% through
                      intelligent automation and improved system performance by 25%
                      via strategic optimization. Passionate about clean code,
                      system design, and solving complex technical challenges.
                    </p>
                  </div>
                </div>

                {/* Key Stats - XP Style Info Boxes */}
                <div className="border-t border-gray-300 pt-3">
                  <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                    Key Statistics
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border-2 border-gray-400 bg-[#f0f0f0] p-2 shadow-inner">
                      <div className="text-xs font-bold text-gray-900">2+ years</div>
                      <div className="text-[10px] text-gray-600">
                        Professional SDE Experience
                      </div>
                    </div>
                    <div className="border-2 border-gray-400 bg-[#f0f0f0] p-2 shadow-inner">
                      <div className="text-xs font-bold text-gray-900">400K+ users</div>
                      <div className="text-[10px] text-gray-600">Served</div>
                    </div>
                    <div className="border-2 border-gray-400 bg-[#f0f0f0] p-2 shadow-inner">
                      <div className="text-xs font-bold text-gray-900">
                        MS CS @ NEU
                      </div>
                      <div className="text-[10px] text-gray-600">2025-2027</div>
                    </div>
                    <div className="border-2 border-gray-400 bg-[#f0f0f0] p-2 shadow-inner">
                      <div className="text-xs font-bold text-gray-900">
                        AWS Certified
                      </div>
                      <div className="text-[10px] text-gray-600">
                        Cloud Architect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                  Professional Experience
                </h3>
                <div className="space-y-3 text-xs text-gray-700">
                  <div>
                    <div className="font-semibold text-gray-900">
                      Software Development Engineer
                    </div>
                    <div className="text-gray-600">Jio Platforms</div>
                    <div className="mt-1">
                      • Built enterprise web platforms serving 400,000+ users
                    </div>
                    <div>• Reduced manual processing by 40% through automation</div>
                    <div>
                      • Improved system performance by 25% via optimization
                    </div>
                    <div>• Developed scalable microservices architecture</div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                  Education
                </h3>
                <div className="space-y-2 text-xs text-gray-700">
                  <div>
                    <div className="font-semibold text-gray-900">
                      Master of Science in Computer Science
                    </div>
                    <div className="text-gray-600">
                      Northeastern University (Jan 2025 - May 2027)
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                  Certifications
                </h3>
                <div className="text-xs text-gray-700">
                  <div className="font-semibold text-gray-900">
                    AWS Certified Cloud Architect
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-4">
              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                  Full-Stack Technologies
                </h3>
                <div className="text-xs text-gray-700 space-y-1">
                  <div>• React</div>
                  <div>• Node.js</div>
                  <div>• Java</div>
                  <div>• Python</div>
                </div>
              </div>

              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                  Cloud & Architecture
                </h3>
                <div className="text-xs text-gray-700 space-y-1">
                  <div>• AWS (Certified Cloud Architect)</div>
                  <div>• Microservices Architecture</div>
                  <div>• System Design</div>
                  <div>• Cloud Architecture</div>
                </div>
              </div>

              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                  Core Competencies
                </h3>
                <div className="text-xs text-gray-700 space-y-1">
                  <div>• Full-stack Development</div>
                  <div>• Scalable System Design</div>
                  <div>• Performance Optimization</div>
                  <div>• Process Automation</div>
                  <div>• Clean Code Practices</div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="space-y-4">
              <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
                <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase">
                  Contact Information
                </h3>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/png/envelope.png"
                      width={16}
                      height={16}
                      alt="Email"
                    />
                    <span className="font-semibold">Email:</span>
                    <a
                      href="mailto:neriyanuru.v@northeastern.edu"
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      neriyanuru.v@northeastern.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/png/soundon.png"
                      width={16}
                      height={16}
                      alt="Phone"
                    />
                    <span className="font-semibold">Phone:</span>
                    <a
                      href="tel:+16175164456"
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      +1 (617) 516-4456
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/png/linkedin.png"
                      width={16}
                      height={16}
                      alt="LinkedIn"
                    />
                    <span className="font-semibold">LinkedIn:</span>
                    <a
                      href="https://linkedin.com/in/vikas-neriyanuru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("https://linkedin.com/in/vikas-neriyanuru");
                      }}
                    >
                      linkedin.com/in/vikas-neriyanuru
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/png/folder.png"
                      width={16}
                      height={16}
                      alt="GitHub"
                    />
                    <span className="font-semibold">GitHub:</span>
                    <a
                      href="https://github.com/VIKAS0804"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("https://github.com/VIKAS0804");
                      }}
                    >
                      github.com/VIKAS0804
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/png/iexplorer.png"
                      width={16}
                      height={16}
                      alt="Website"
                    />
                    <span className="font-semibold">Website:</span>
                    <a
                      href="https://vikasneriyanuru.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("https://vikasneriyanuru.com");
                      }}
                    >
                      vikasneriyanuru.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
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
