"use client";

import { useEffect, useRef } from "react";

const TITLES = [
  "Vikas Neriyanuru | Software Engineer",
  "Full-Stack Developer | React • Node.js • AWS",
  "MS CS @ Northeastern | Boston",
  "2+ Years at Jio Platforms | 400K+ Users",
  "Open for Co-op Opportunities",
  "💻 Vikas Neriyanuru | Portfolio",
];

const ROTATION_INTERVAL = 2500; // 2.5 seconds per title

export function useDynamicTitle(isEnabled: boolean = true) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);
  const originalTitleRef = useRef<string>("");

  useEffect(() => {
    if (!isEnabled) {
      // Restore original title if rotation is disabled
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
      return;
    }

    // Store the original title
    if (!originalTitleRef.current) {
      originalTitleRef.current = document.title;
    }

    const updateTitle = () => {
      document.title = TITLES[currentIndexRef.current];
      currentIndexRef.current = (currentIndexRef.current + 1) % TITLES.length;
    };

    const showCurrentTitle = () => {
      document.title = TITLES[currentIndexRef.current];
    };

    const startRotation = () => {
      // Show current title immediately
      showCurrentTitle();
      // Then start rotating
      intervalRef.current = setInterval(updateTitle, ROTATION_INTERVAL);
    };

    // Initial title display and rotation start
    startRotation();

    // Handle tab visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // Tab is hidden - pause rotation and restore original title
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        if (originalTitleRef.current) {
          document.title = originalTitleRef.current;
        }
      } else {
        // Tab is visible - resume rotation from current index
        if (!intervalRef.current) {
          startRotation();
        }
      }
    };

    // Listen for visibility changes
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      
      // Restore original title on unmount
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
    };
  }, [isEnabled]);
}

