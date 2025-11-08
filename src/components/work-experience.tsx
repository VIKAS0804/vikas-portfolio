"use client";

import Image from "next/image";

import Window from "@/components/window/window";

type Experience = {
  company: string;
  title: string;
  location: string;
  duration: string;
  achievements: string[];
};

const experiences: Experience[] = [
  {
    company: "Jio Platforms Limited",
    title: "Software Development Engineer",
    location: "Navi Mumbai, India",
    duration: "Aug 2021 – Dec 2023",
    achievements: [
      "Built platforms serving 400,000+ employees (React, Angular, Node.js)",
      "Reduced manual processing by 40% through automation",
      "Improved query performance by 25% via optimization",
      "Developed geo-targeted alert system, reduced manual work by 60%",
      "Conducted 100+ code reviews",
      "Mentored 3 junior engineers",
      "On-call: <15min incident response time",
    ],
  },
  {
    company: "Inspectinity",
    title: "Software Developer Intern",
    location: "Remote",
    duration: "Jan 2021 – Apr 2021",
    achievements: [
      "Built React dashboards with Node.js backend",
      "Improved render time by 30% via code splitting",
      "Implemented JWT authentication",
      "Mentored junior developers",
    ],
  },
  {
    company: "Aspire Vision Tech",
    title: "Cloud Architect Intern",
    location: "Bengaluru, India",
    duration: "May 2019 – Jul 2019",
    achievements: [
      "Migrated e-commerce app to AWS",
      "Implemented ELB and Auto Scaling",
      "Reduced downtime by 20%",
    ],
  },
  {
    company: "Verzeo",
    title: "ML Project Intern",
    location: "Chennai, India",
    duration: "Dec 2018 – Jan 2019",
    achievements: [
      "Trained text-classification models",
      "Improved F1 score by 15%",
    ],
  },
];

export default function WorkExperience({ windowId }: { windowId: string }) {
  return (
    <Window windowId={windowId} windowTitle="Work Experience">
      <div className="flex flex-col h-full bg-[#f0eede] ml-1">
        {/* Toolbar */}
        <div className="flex items-center border-b border-gray-300 bg-white px-2 py-1">
          <div className="flex gap-2">
            <button className="px-2 py-1 text-xs border border-gray-300 bg-white hover:bg-gray-100">
              File
            </button>
            <button className="px-2 py-1 text-xs border border-gray-300 bg-white hover:bg-gray-100">
              Edit
            </button>
            <button className="px-2 py-1 text-xs border border-gray-300 bg-white hover:bg-gray-100">
              View
            </button>
            <button className="px-2 py-1 text-xs border border-gray-300 bg-white hover:bg-gray-100">
              Go
            </button>
            <button className="px-2 py-1 text-xs border border-gray-300 bg-white hover:bg-gray-100">
              Favorites
            </button>
            <button className="px-2 py-1 text-xs border border-gray-300 bg-white hover:bg-gray-100">
              Tools
            </button>
            <button className="px-2 py-1 text-xs border border-gray-300 bg-white hover:bg-gray-100">
              Help
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3 border-b-2 border-gray-400 pb-3">
              <Image
                src="/png/folder.png"
                width={48}
                height={48}
                alt="Work Experience"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Work Experience
                </h1>
                <p className="text-xs text-gray-600">
                  Professional software development and cloud architecture experience
                </p>
              </div>
            </div>

            {/* Timeline View */}
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-400 bg-[#f0f0f0] shadow-inner"
                >
                  {/* XP Blue Header */}
                  <div
                    className="px-4 py-3 border-b-2 border-[#0831d9]"
                    style={{
                      background:
                        "linear-gradient(180deg, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Image
                            src="/png/folder.png"
                            width={20}
                            height={20}
                            alt="Company"
                          />
                          <h2
                            className="text-sm font-bold text-white"
                            style={{ textShadow: "1px 1px #0f1089" }}
                          >
                            {exp.company}
                          </h2>
                        </div>
                        <div
                          className="text-xs font-semibold text-white ml-7"
                          style={{ textShadow: "1px 1px #0f1089" }}
                        >
                          {exp.title}
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className="text-xs font-semibold text-white"
                          style={{ textShadow: "1px 1px #0f1089" }}
                        >
                          {exp.duration}
                        </div>
                        <div
                          className="text-xs text-white"
                          style={{ textShadow: "1px 1px #0f1089" }}
                        >
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="p-4 bg-white">
                    <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase">
                      Key Achievements
                    </h3>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start gap-2 text-xs text-gray-700"
                        >
                          <span className="text-blue-600 font-bold mt-0.5">•</span>
                          <span className="flex-1 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="border-2 border-gray-400 bg-[#f0f0f0] p-4 shadow-inner">
              <h3 className="text-xs font-bold text-gray-900 mb-3 uppercase">
                Career Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white border border-gray-300 p-2 text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {experiences.length}
                  </div>
                  <div className="text-[10px] text-gray-600">Companies</div>
                </div>
                <div className="bg-white border border-gray-300 p-2 text-center">
                  <div className="text-lg font-bold text-gray-900">400K+</div>
                  <div className="text-[10px] text-gray-600">Users Served</div>
                </div>
                <div className="bg-white border border-gray-300 p-2 text-center">
                  <div className="text-lg font-bold text-gray-900">100+</div>
                  <div className="text-[10px] text-gray-600">Code Reviews</div>
                </div>
                <div className="bg-white border border-gray-300 p-2 text-center">
                  <div className="text-lg font-bold text-gray-900">3</div>
                  <div className="text-[10px] text-gray-600">Engineers Mentored</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between border-t border-gray-300 bg-[#ece9d8] px-2 py-1">
          <div className="text-xs text-gray-600">
            {experiences.length} positions • {experiences.reduce((sum, exp) => sum + exp.achievements.length, 0)} achievements
          </div>
          <div className="text-xs text-gray-600">Aug 2021 – Present</div>
        </div>
      </div>
    </Window>
  );
}

