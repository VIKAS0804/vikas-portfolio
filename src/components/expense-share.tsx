import Image from "next/image";

import Window from "@/components/window/window";

export default function ExpenseShare({ windowId }: { windowId: string }) {
  return (
    <Window windowId={windowId} windowTitle="ExpenseShare - Group Expense Tracker">
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
                src="/png/folder.png"
                width={48}
                height={48}
                alt="ExpenseShare"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">ExpenseShare</h1>
                <p className="text-xs text-gray-600">
                  Group Expense Tracker - Full-stack expense-sharing app
                </p>
              </div>
            </div>

            {/* Screenshot Placeholder */}
            <div className="border-2 border-gray-400 bg-[#f0f0f0] p-4 shadow-inner">
              <div className="bg-white border border-gray-300 p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Image
                    src="/png/folder.png"
                    width={64}
                    height={64}
                    alt="Screenshot"
                    className="mx-auto mb-2 opacity-50"
                  />
                  <p className="text-xs text-gray-500 font-semibold">
                    Screenshot Coming Soon
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
                Full-stack expense-sharing app with real-time updates. Supports 100+
                concurrent users with Redux state management.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="border-2 border-gray-400 bg-[#f0f0f0] p-3 shadow-inner">
              <h2 className="text-xs font-bold text-gray-900 mb-2 uppercase">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MySQL", "REST", "Redux"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-white border border-gray-300 text-gray-700 font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
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
                    <strong>Intelligent split validation</strong> for expense sharing
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Normalized MySQL schema</strong> with triggers
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>REST APIs</strong> with P95 latency &lt;200ms
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Real-time updates</strong> for live synchronization
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>Redux state management</strong> for predictable updates
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    <strong>100+ concurrent users</strong> support
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
              <button
                disabled
                title="Coming Soon"
                className="px-4 py-1 text-xs border-2 border-t-gray-400 border-l-gray-400 border-r-gray-600 border-b-gray-600 bg-[#d0d0d0] text-gray-500 cursor-not-allowed shadow-[inset_1px_1px_0px_rgba(0,0,0,0.2)]"
              >
                View Demo
              </button>
            </div>
            <div className="text-center text-xs text-gray-500 pb-2">
              GitHub URL: Coming Soon | Live Demo: Coming Soon
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
