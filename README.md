# HagumaTech website

HagumaTech’s corporate website, introducing Webyacu as its dedicated website service and platform alongside custom digital systems, applications, and technical support.

## Stack

- React 19 and Vite 7
- Plain CSS with custom properties and responsive Grid/Flexbox layouts
- Lucide React icons
- Archivo and Sora through Google Fonts, with local sans-serif fallbacks

## Local development

Run from the repository root with Node.js 20.19+ or 22.12+:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). If npm argument forwarding is unavailable in your shell, start Vite directly:

```sh
node node_modules/vite/bin/vite.js --host 127.0.0.1
```

```sh
npm run lint
npm run build
npm run preview
```

The production output is `dist/`. Local development and verification do not require Docker. The existing Docker/Nginx production configuration is retained.

Production builds explicitly load `vite.config.js` so missing React configuration fails the build rather than producing a broken page. Keep both `vite.config.js` and `package-lock.json` in the Docker build context; the image installs locked dependencies with `npm ci`.

## Page structure

- Hero: HagumaTech’s positioning and the relationship between websites, systems, and support.
- Webyacu: a dedicated introduction, illustrative responsive website, and link to https://www.webyacu.com/.
- Expertise: six service areas with contextual email enquiry links.
- About: local context and working principles.
- Approach: discovery, planning, development, and ongoing care.
- Testimonials: the existing client quotes and attributions.
- Contact/footer: email, phone, location, navigation, and HagumaTech copyright.

Existing public anchors `#hero`, `#services`, `#methodology`, `#why-us`, `#testimonials`, and `#contact` are retained; `#webyacu` is added.

## Brand and accessibility

The supplied `public/HagumaTech Impact Logo.png` is used unchanged in the header and footer. `Brand.jsx` uses a CSS crop to accommodate the source image’s surrounding whitespace. The supplied favicon is retained. The ecosystem and website illustrations are CSS/React visuals, with no extra asset or animation dependencies.

The layout includes keyboard focus indicators, a skip link, an accessible phone navigation toggle with Escape dismissal, support for reduced motion, and a 16px body text baseline that stays readable on phones. Global colors, spacing, and typography live in `src/index.css`; section styles live alongside their React components.

Search and social metadata live in `index.html`. Existing Umami analytics are preserved. Verify the public Webyacu destination and any business claims when changing production content.

All rights reserved © 2026 HagumaTech.
