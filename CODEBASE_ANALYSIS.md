# Windows XP Portfolio Codebase Analysis

## 1. Where Personal Info is Stored

Personal information is scattered across several files:

### GitHub Username
- **File**: `src/app/page.tsx` (line 4)
- **Location**: `fetch("https://api.github.com/users/VIKAS0804/repos")`
- **Purpose**: Fetches GitHub repositories dynamically

### LinkedIn Profile
- **File**: `src/components/desktop/icons/linkedin-icon.tsx` (line 7)
- **Location**: `window.open("https://www.linkedin.com/in/vikas-neriyanuru/", "_blank")`
- **Purpose**: Opens LinkedIn profile in new tab

### Resume PDF
- **File**: `src/components/desktop/icons/resume-en-icon.tsx` (line 17)
  - Path: `/pdf/vikas-resume.pdf`
- **Physical Location**: `public/pdf/` directory
- **Purpose**: Displays resume PDF in iframe window

### Video URLs
- Video/Media Player component has been removed from the portfolio

---

## 2. Where Project Data is Configured

### Project Description Text
- **File**: `src/utils/constants.ts`
- **Variable**: `thisProjectText`
- **Purpose**: Contains HTML-formatted project description with:
  - Project motivation
  - Tech stack (Next.js v15, Tailwind CSS v3.4, Radix UI v2)
  - Main features list
  - Credits/attributions

### Static Assets
- **Directory**: `public/`
  - `pdf/` - Resume PDFs
  - `png/` - Icon images
  - `webp/` - Optimized images
  - `gif/` - Animated icons
  - `svg/` - SVG icons
  - `ico/` - Icon files

### Dynamic Data
- **GitHub Repos**: Fetched from GitHub API at runtime (see `src/app/page.tsx`)
- **Window State**: Managed by React Context (`src/contexts/desktop-context.tsx`)

---

## 3. Which Files Control the Desktop Icons

### Main Desktop Rendering
- **File**: `src/components/desktop/desktop-content.tsx`
- **Purpose**: Renders all desktop icons (lines 31-40)
- **Icons Currently Displayed**:
  - `IEDesktopIcon` (Internet Explorer)
  - `RecycleBinDesktopIcon`
  - `ReadmeDesktopIcon`
  - `ResumeDesktopIcon`
  - `LinkedinDesktopIcon`
  - `GithubDesktopIcon`

### Individual Icon Components
- **Directory**: `src/components/desktop/icons/`
- **Files**:
  - `ie-icon.tsx` - Internet Explorer icon
  - `recycle-bin-icon.tsx` - Recycle Bin icon
  - `readme-icon.tsx` - README/Project info icon
  - `resume-en-icon.tsx` - Resume icon
  - `linkedin-icon.tsx` - LinkedIn profile icon
  - `github-icon.tsx` - GitHub repos icon
- **Index File**: `src/components/desktop/icons/index.ts` - Exports all icons

### Icon Component Base
- **File**: `src/components/icon/desktop-icon.tsx`
- **Purpose**: Base component for all desktop icons
- **Features**:
  - Draggable positioning (x, y coordinates)
  - Double-click handler
  - Icon image and title display
  - Text color and shadow styling

### Icon Positioning
Each icon component specifies its position using `x` and `y` props:
- Example from `ie-icon.tsx`: `x={10}, y={10}`
- Example from `readme-icon.tsx`: `x={10}, y={190}`
- Example from `resume-en-icon.tsx`: `x={120}, y={10}`

---

## 4. How to Add New Windows/Applications

### Step-by-Step Guide

#### Step 1: Create the Application Component
Create a new component in `src/components/` that represents your application window.

**Example Structure:**
```tsx
// src/components/my-app.tsx
import Window from "@/components/window/window";

export default function MyApp({ windowId }: { windowId: string }) {
  return (
    <Window windowId={windowId} windowTitle="My Application">
      <div className="p-2">
        {/* Your application content here */}
      </div>
    </Window>
  );
}
```

**Alternative**: For simple content, you can use the `Window` component directly with children (see `readme-icon.tsx` for example).

#### Step 2: Create the Desktop Icon Component
Create a new icon component in `src/components/desktop/icons/`.

**Example:**
```tsx
// src/components/desktop/icons/my-app-icon.tsx
"use client";

import { useDesktop } from "@/contexts/desktop-context";
import Icon from "@/components/icon/desktop-icon";
import MyApp from "@/components/my-app";

export default function MyAppDesktopIcon() {
  const { createWindowId, openWindow } = useDesktop();

  const handleDoubleClick = () => {
    const windowId = createWindowId();
    openWindow(
      windowId,
      () => <MyApp windowId={windowId} />,
      "My Application",           // Window title
      "/png/my-icon.png"          // Icon path for taskbar
    );
  };

  return (
    <Icon
      id="my-app"
      x={10}                       // X position on desktop
      y={460}                      // Y position on desktop
      iconSrc="/png/my-icon.png"   // Icon image path
      title="My Application"       // Icon label
      onDoubleClick={handleDoubleClick}
    />
  );
}
```

#### Step 3: Export the Icon
Add the export to `src/components/desktop/icons/index.ts`:
```tsx
import MyAppDesktopIcon from "@/components/desktop/icons/my-app-icon";

export {
  // ... existing exports
  MyAppDesktopIcon,
};
```

#### Step 4: Add Icon to Desktop
Import and add the icon to `src/components/desktop/desktop-content.tsx`:
```tsx
import { MyAppDesktopIcon } from "@/components/desktop/icons";

export default function DeskTopContent({ repos }: { repos: Promise<Array<GithubType>> }) {
  return (
    <div className="w-full" style={{ height: "100%" }} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      {/* ... existing icons */}
      <MyAppDesktopIcon />
      {/* ... rest of component */}
    </div>
  );
}
```

### Key Concepts

#### Window Management
- **Context**: `src/contexts/desktop-context.tsx` manages window state
- **Hook**: `useDesktop()` provides:
  - `createWindowId()` - Generates unique window ID
  - `openWindow(id, component, title, icon)` - Opens a new window
  - `closeWindow(id)` - Closes a window
  - `maximizeWindow(id)` - Maximizes a window
  - `minimizeWindow(id)` - Minimizes a window
  - `getWindowZIndex()` - Gets z-index for window stacking

#### Window Component
- **File**: `src/components/window/window.tsx`
- **Features**:
  - Draggable (via header)
  - Resizable (bottom-right corner)
  - Minimize/Maximize/Close functionality
  - Z-index management for window stacking

#### Window Manager
- **File**: `src/components/window/window-manager.tsx`
- **Purpose**: Renders all open windows from the context state

### Example Implementations

#### Simple Text Window
See `readme-icon.tsx` - Uses `Window` component with HTML content.

#### PDF Viewer
See `resume-en-icon.tsx` - Uses `Window` component with iframe showing PDF.

#### Custom Application
See `github.tsx` - Custom component with interactive content, wrapped in `Window`.

#### External Link
See `linkedin-icon.tsx` - Opens external URL instead of a window (uses `window.open()`).

---

## Summary

- **Personal Info**: GitHub username, LinkedIn URL, resume PDF are in various component files
- **Project Data**: Project description in `constants.ts`, static assets in `public/`, dynamic data from APIs
- **Desktop Icons**: Controlled by `desktop-content.tsx` which renders icon components from `desktop/icons/` directory
- **Adding Apps**: Create application component → Create icon component → Export icon → Add to desktop content

