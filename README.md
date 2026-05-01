# Vikas Portfolio

An interactive portfolio experience built as a Windows XP-inspired desktop. The goal of this project was to turn a personal site into something memorable, playful, and still functional enough to showcase real work.

Live site: [vikasneriyanuru.com](https://vikasneriyanuru.com)

![Portfolio preview](./public/project-print.jpg)

## What It Includes

- Desktop-style navigation with draggable icons
- Draggable and resizable windows for different sections
- Start menu and taskbar interactions inspired by Windows XP
- Live clock and desktop-style UI behavior
- Browser-style window for embedded exploration
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

Most portfolios feel interchangeable. I wanted this one to reflect personality as much as technical skill, so I leaned into a nostalgic interface and treated the site like a miniature operating system instead of a standard landing page.

## Notes

- Some external websites will not render inside the browser-style window because many sites block iframe embedding for security reasons.
- The project is intentionally styled around Windows XP, but the implementation uses a modern Next.js frontend stack.

## Inspiration

- [xpmsn](https://github.com/boranbatuhan/xpmsn) for reference on XP-style visual details
- [This CodePen](https://codepen.io/jkasun/pen/QrLjXP) for ideas around draggable and resizable interactions
