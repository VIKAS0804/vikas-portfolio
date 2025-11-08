import Image from "next/image";

import Window from "@/components/window/window";

export default function FireDetectionRobot({ windowId }: { windowId: string }) {
  return (
    <Window windowId={windowId} windowTitle="Autonomous Fire Detection Robot">
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
              Help
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3 border-b-2 border-gray-400 pb-3">
              <Image
                src="/png/exe.png"
                width={48}
                height={48}
                alt="Fire Detection Robot"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  Autonomous Fire Detection Robot
                </h1>
                <p className="text-xs text-gray-600">
                  Indoor fire-detection robot with computer vision and autonomous
                  navigation
                </p>
              </div>
            </div>

            {/* Robot Photo Placeholder */}
            <div className="border-2 border-gray-400 bg-[#f0f0f0] p-4 shadow-inner">
              <div className="bg-white border border-gray-300 p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Image
                    src="/png/exe.png"
                    width={64}
                    height={64}
                    alt="Robot Photo"
                    className="mx-auto mb-2 opacity-50"
                  />
                  <p className="text-xs text-gray-500 font-semibold">
                    Robot Photo Coming Soon
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
              <h2 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                Description
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                Indoor fire-detection robot with computer vision and autonomous
                navigation. 92% fire detection accuracy. Published at international
                conference.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
              <h2 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "ROS",
                  "Jetson Nano",
                  "OpenCV",
                  "CNN",
                  "LIDAR",
                  "SLAM",
                  "MQTT",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-white border border-gray-300 text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
              <h2 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                Key Features
              </h2>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>CNN trained</strong> on RGB/thermal data for fire detection
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>SLAM navigation</strong> with LIDAR for autonomous movement
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Real-time MQTT alerting</strong> for immediate notifications
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Sensor fusion</strong> for improved accuracy
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>92% detection accuracy</strong> in controlled environments
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Published research</strong> at international conference
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2 border-t border-gray-300">
              <button
                disabled
                title="Coming Soon"
                className="px-4 py-1 text-xs border-2 border-t-gray-400 border-l-gray-400 border-r-gray-600 border-b-gray-600 bg-[#d0d0d0] text-gray-500 cursor-not-allowed shadow-[inset_1px_1px_0px_rgba(0,0,0,0.2)]"
              >
                Open GitHub
              </button>
            </div>
            <div className="text-center text-xs text-gray-500 pb-2">
              GitHub URL: Coming Soon | Publication: Coming Soon
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
