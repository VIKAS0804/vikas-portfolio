# Vikas Portfolio

An interactive portfolio experience built as a Windows XP-inspired desktop. The goal of this project was to turn a personal site into something memorable, playful, and still functional enough to showcase real work.

Live site: [vikasneriyanuru.com](https://vikasneriyanuru.com)

![Portfolio preview](./public/project-print.jpg)

## What It Includes

- Desktop-style navigation with draggable icons
- Personal welcome center that introduces the ideas and interests behind the work
- One-click quick access to projects, experience, resume, and contact information
- Individual desktop folders and detailed case studies for six featured projects
- Mobile-friendly project and welcome windows that do not require desktop gestures
- Draggable and resizable windows for different sections
- Start menu and taskbar interactions inspired by Windows XP
- Live clock and desktop-style UI behavior
- Browser-style window for embedded exploration
- Curated Featured Work window for the projects I am actively building and exploring
- Earlier Projects archive that preserves older work without crowding the main desktop
- GitHub projects window connected to my public repositories

## Tech Stack

- Next.js 15
- React
- Tailwind CSS
- Radix UI

## Running Locally

```bash
git clone https://github.com/VIKAS0804/vikas-portfolio.git
cd vikas-portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Why I Built It

Most portfolios feel interchangeable. I wanted this one to reflect personality as much as technical skill, so I leaned into a nostalgic interface and treated the site like a miniature operating system instead of a standard landing page. It is a passion project in its own right: a place to keep shaping how I present ideas, document what I learn, and connect the products I build. The Featured Work folder keeps the experience playful while giving visitors a fast path to current work in mobile, cloud, applied ML, and systems.

## Notes

- Some external websites will not render inside the browser-style window because many sites block iframe embedding for security reasons.
- The project is intentionally styled around Windows XP, but the implementation uses a modern Next.js frontend stack.

## Inspiration

- [xpmsn](https://github.com/boranbatuhan/xpmsn) for reference on XP-style visual details
- [This CodePen](https://codepen.io/jkasun/pen/QrLjXP) for ideas around draggable and resizable interactions
