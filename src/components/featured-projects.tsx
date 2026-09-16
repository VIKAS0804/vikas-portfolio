"use client";

import Image from "next/image";

import Window from "@/components/window/window";

const projects = [
  {
    name: "Fintech Coach",
    description:
      "A mobile coach for understanding spending habits and making calmer financial decisions.",
    stack: "Expo, TypeScript, Plaid, Supabase, PostgreSQL",
    href: "https://github.com/VIKAS0804/fintech-coach-app",
    status: "In active development",
  },
  {
    name: "ThinkStruct",
    description:
      "Hybrid patent search with semantic retrieval, RRF re-ranking, evaluation tooling, and a 10M+ pgvector system design.",
    stack: "Python, Flask, scikit-learn, PostgreSQL, pgvector",
    href: "https://github.com/VIKAS0804/ThinkStruct-assessment",
    status: "Featured project",
  },
  {
    name: "MoodSync",
    description:
      "Mood-adaptive music discovery powered by a custom DSP pipeline, Spotify integration, and a mobile experience.",
    stack: "Python, FastAPI, React Native, Spotify, PostgreSQL",
    href: "https://github.com/VIKAS0804/Moodsync",
    status: "In active development",
  },
  {
    name: "IoT Sensor Dashboard",
    description:
      "An end-to-end shipment-condition dashboard for ingesting and visualizing connected sensor data.",
    stack: "React Native, MQTT, Cloud Run, Firestore, Pub/Sub",
    href: "https://github.com/VIKAS0804/personal-iot-sensor-dashboard",
    status: "Featured project",
  },
];

export default function FeaturedProjects({ windowId }: { windowId: string }) {
  return (
    <Window windowId={windowId} windowTitle="Featured Work">
      <div className="flex h-full flex-col bg-[#f0eede] ml-1">
        <div className="flex items-center border-b border-gray-300 bg-white px-2 py-1">
          <span className="text-xs text-gray-600 mr-2">Address:</span>
          <div className="flex-1 border border-gray-400 bg-white px-2 py-0.5 text-xs">
            My Computer\Featured Work
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-white p-4">
          <div className="mx-auto max-w-4xl space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-gray-400 pb-3">
              <Image
                src="/png/folder.png"
                width={48}
                height={48}
                alt="Featured work"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Featured Work</h1>
                <p className="text-xs text-gray-600">
                  Selected projects across mobile, cloud, applied ML, and systems.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="border-2 border-gray-400 bg-[#f0f0f0] shadow-inner"
                >
                  <div
                    className="border-b-2 border-[#0831d9] px-3 py-2"
                    style={{
                      background:
                        "linear-gradient(180deg, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h2
                        className="text-sm font-bold text-white"
                        style={{ textShadow: "1px 1px #0f1089" }}
                      >
                        {project.name}
                      </h2>
                      <span
                        className="whitespace-nowrap text-[10px] text-white"
                        style={{ textShadow: "1px 1px #0f1089" }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 bg-white p-3">
                    <p className="text-xs leading-relaxed text-gray-700">
                      {project.description}
                    </p>
                    <p className="text-[11px] leading-relaxed text-gray-600">
                      <span className="font-semibold text-gray-800">Stack: </span>
                      {project.stack}
                    </p>
                    <button
                      onClick={() => window.open(project.href, "_blank", "noopener,noreferrer")}
                      className="border-2 border-b-gray-600 border-l-gray-400 border-r-gray-600 border-t-gray-400 bg-[#ece9d8] px-3 py-1 text-xs font-semibold text-gray-800 hover:bg-white"
                    >
                      Open repository
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 bg-[#ece9d8] px-2 py-1 text-xs text-gray-600">
          {projects.length} selected projects
        </div>
      </div>
    </Window>
  );
}
