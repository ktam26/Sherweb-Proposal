# Project Theme Package

This package contains the core design elements and components for creating similarly themed websites.

## Contents

- **styles/**: Contains global stylesheets (e.g., Tailwind CSS setup).
- **components/**: Reusable React components that define the UI's look and feel.
- **layout/**: Core layout structure for pages.
- **assets/**: Static assets like images and SVGs that are part of the theme.
- **public/**: Publicly accessible static assets.
- **postcss.config.js**: PostCSS configuration (if needed for Tailwind).

## Font Information

This theme uses the 'Switzer' font. Please ensure it is included in your project. You can typically add the following link to your main HTML layout:
`<link rel="stylesheet" href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap" />`

## Setup and Usage

### 1. Tailwind CSS

- Ensure you have Tailwind CSS installed in your new project.
- Copy the `styles/tailwind.css` file into your project's style directory (e.g., `src/styles/`).
- Copy `postcss.config.js` to your project root.
- Update your main layout file to import `tailwind.css` (e.g., `import '@/styles/tailwind.css';`).
- **Important**: This theme uses specific custom properties and some base styles defined in `styles/tailwind.css`. Review this file to understand the base theming.

### 2. Fonts

As mentioned, this theme uses the 'Switzer' font. Include the following link in your main HTML layout file (e.g. `app/layout.tsx` in a Next.js project, or `public/index.html` for other React setups):
`<link rel="stylesheet" href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap" />`

### 3. Core Layout

- The `layout/core-layout.tsx` file provides an example of a root layout structure, including the font import and basic body styling. Adapt this to your project's needs. It's a Next.js App Router layout file, so adjustments will be needed for other frameworks or if using the Pages Router.

### 4. Dependencies

The components in this theme package may rely on the following libraries. Ensure these are installed in your project:

- `clsx`: For conditionally joining class names.
- `@headlessui/react`: For accessible UI components.
- `@heroicons/react` (specifically `@heroicons/react/24/solid`): For icons.
- `framer-motion`: For animations.

You can typically install them using npm or yarn, for example:
`npm install clsx @headlessui/react @heroicons/react framer-motion`
or
`yarn add clsx @headlessui/react @heroicons/react framer-motion`

### 5. Components

- Copy the components from the `components/` directory into your project's components folder.
- You can then import and use these components as needed. For example:
  `import { Button } from '@/components/Button';`
  `import { Heading } from '@/components/Text';`
- **Dependencies**: Some components might have dependencies (e.g., `@headlessui/react`, `@heroicons/react`, `clsx`, `framer-motion`). Ensure these are installed in your project. You'll need to check the `import` statements in each component.
  - `Button.tsx` uses `@headlessui/react`, `clsx`
  - `Navbar.tsx` uses `@headlessui/react`, `@heroicons/react/24/solid`, `framer-motion`, `clsx` (via `Link` and `Logo` likely)
  - `Footer.tsx` likely uses `clsx` (via its sub-components)
  - `Container.tsx` uses `clsx`
  - `Text.tsx` uses `clsx`
  - `Link.tsx` (we need to check its content, but assume it might use `clsx` or Next.js specific link if it's from the original project)

### 6. Static Assets

- The `public/` directory contains static assets like `dot-texture.svg`.
- Copy these assets into your project's public assets directory (often named `public` or `static`).
- Ensure paths to these assets are correctly updated if you use them directly or if they are referenced within components.

## Customization

- **Colors**: Colors are primarily defined using Tailwind CSS utility classes. You can customize the Tailwind configuration in your project or override styles as needed. The default text color `text-gray-950` is set in `layout/core-layout.tsx`.
- **Components**: Modify the copied components to suit your specific requirements.
