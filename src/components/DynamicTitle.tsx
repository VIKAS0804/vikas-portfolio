"use client";

import { useDynamicTitle } from "@/hooks/useDynamicTitle";

export default function DynamicTitle() {
  useDynamicTitle(true);
  return null; // This component doesn't render anything
}

