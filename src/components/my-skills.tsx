"use client";

import { useState } from "react";
import Image from "next/image";

import Window from "@/components/window/window";

type SkillCategory = {
  name: string;
  skills: Array<{ name: string; proficiency?: number }>;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Java", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "C/C++", proficiency: 80 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "SQL", proficiency: 85 },
      { name: "Bash", proficiency: 75 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", proficiency: 85 },
      { name: "React", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 85 },
      { name: "Next.js", proficiency: 80 },
      { name: "Flask", proficiency: 75 },
      { name: "Django", proficiency: 70 },
      { name: "JUnit", proficiency: 90 },
      { name: "Mockito", proficiency: 85 },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2", proficiency: 85 },
      { name: "AWS S3", proficiency: 80 },
      { name: "AWS RDS", proficiency: 80 },
      { name: "AWS Lambda", proficiency: 75 },
      { name: "AWS CloudFormation", proficiency: 75 },
      { name: "AWS CloudWatch", proficiency: 75 },
      { name: "Docker", proficiency: 85 },
      { name: "Kubernetes", proficiency: 70 },
      { name: "Jenkins", proficiency: 75 },
      { name: "GitHub Actions", proficiency: 80 },
      { name: "CI/CD", proficiency: 80 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "Redis", proficiency: 70 },
    ],
  },
  {
    name: "Data Science & ML",
    skills: [
      { name: "Pandas", proficiency: 80 },
      { name: "NumPy", proficiency: 75 },
      { name: "scikit-learn", proficiency: 70 },
      { name: "TensorFlow", proficiency: 65 },
      { name: "OpenCV", proficiency: 75 },
    ],
  },
  {
    name: "Tools & Practices",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Linux", proficiency: 85 },
      { name: "VS Code", proficiency: 90 },
      { name: "IntelliJ", proficiency: 85 },
      { name: "Agile/Scrum", proficiency: 85 },
      { name: "TDD", proficiency: 85 },
      { name: "Microservices", proficiency: 80 },
      { name: "System Design", proficiency: 80 },
      { name: "Code Review", proficiency: 90 },
    ],
  },
  {
    name: "Certifications",
    skills: [
      { name: "AWS Academy Graduate – Cloud Architecting" },
      { name: "AWS Academy Graduate – Cloud Foundations" },
    ],
  },
];

const ProficiencyStars = ({ proficiency }: { proficiency: number }) => {
  const stars = Math.round((proficiency / 100) * 5);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Image
          key={star}
          src="/png/yellow-star.png"
          width={12}
          height={12}
          alt="star"
          className={star <= stars ? "opacity-100" : "opacity-30"}
        />
      ))}
      <span className="text-[10px] text-gray-600 ml-1">{proficiency}%</span>
    </div>
  );
};

export default function MySkills({ windowId }: { windowId: string }) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  return (
    <Window windowId={windowId} windowTitle="My Skills">
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

        {/* Address Bar */}
        <div className="flex items-center border-b border-gray-300 bg-white px-2 py-1">
          <span className="text-xs text-gray-600 mr-2">Address:</span>
          <div className="flex-1 border border-gray-400 bg-white px-2 py-0.5 text-xs">
            My Skills
          </div>
          <button className="ml-2 px-2 py-0.5 text-xs border border-gray-300 bg-white hover:bg-gray-100">
            Go
          </button>
        </div>

        {/* Content Area - Split View */}
        <div className="flex-1 flex overflow-hidden bg-white">
          {/* Left Panel - Folder Tree */}
          <div className="w-64 border-r border-gray-300 bg-[#f0f0f0] overflow-y-auto">
            <div className="p-2 space-y-1">
              {skillCategories.map((category) => {
                const isExpanded = expandedCategories.has(category.name);
                return (
                  <div key={category.name}>
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full flex items-center gap-1 px-1 py-0.5 text-xs text-left hover:bg-[#d2e5fa] cursor-pointer"
                    >
                      <span className="text-[10px] text-gray-600 w-3">
                        {isExpanded ? "▼" : "▶"}
                      </span>
                      <Image
                        src="/png/folder.png"
                        width={16}
                        height={16}
                        alt="folder"
                      />
                      <span className="text-xs font-semibold text-gray-900">
                        {category.name}
                      </span>
                    </button>
                    {isExpanded && (
                      <div className="ml-4 space-y-0.5">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center gap-1 px-1 py-0.5 text-xs text-gray-700 hover:bg-[#d2e5fa] cursor-pointer"
                          >
                            <Image
                              src="/ico/file.ico"
                              width={14}
                              height={14}
                              alt="file"
                              className="ml-2"
                              onError={(e) => {
                                // Fallback to folder icon if file.ico doesn't exist
                                const target = e.target as HTMLImageElement;
                                target.src = "/png/folder.png";
                              }}
                            />
                            <span className="truncate">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel - Details View */}
          <div className="flex-1 overflow-y-auto p-4 bg-white">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-lg font-bold text-gray-900 border-b-2 border-gray-400 pb-2">
                My Skills
              </h1>

              {skillCategories.map((category) => (
                <div
                  key={category.name}
                  className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Image
                      src="/png/folder.png"
                      width={24}
                      height={24}
                      alt="folder"
                    />
                    <h2 className="text-sm font-bold text-gray-900 uppercase">
                      {category.name}
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between bg-white border border-gray-300 p-2"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <Image
                            src="/ico/file.ico"
                            width={16}
                            height={16}
                            alt="file"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/png/folder.png";
                            }}
                          />
                          <span className="text-xs text-gray-900">
                            {skill.name}
                          </span>
                        </div>
                        {skill.proficiency !== undefined ? (
                          <div className="flex items-center gap-2">
                            <ProficiencyStars proficiency={skill.proficiency} />
                          </div>
                        ) : (
                          <span className="text-[10px] text-gray-600">
                            Certified
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between border-t border-gray-300 bg-[#ece9d8] px-2 py-1">
          <div className="text-xs text-gray-600">
            {skillCategories.reduce(
              (sum, cat) => sum + cat.skills.length,
              0
            )}{" "}
            items
          </div>
          <div className="text-xs text-gray-600">
            {expandedCategories.size} folders expanded
          </div>
        </div>
      </div>
    </Window>
  );
}

