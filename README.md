# KnowledgeBaseApp

A React implementation of the Workspace Knowledge Base assignment UI, based on the provided reference screens.

## Tech Stack

- React 18
- Vite 5
- Plain CSS (component-oriented styling in `src/styles/index.css`)

## Implemented

- Layout matching the provided screens:
- Top navigation bar
- Left sidebar navigation
- Knowledge Base content area with card grid
- `Create New` button interaction:
- Opens right-side modal/drawer
- Close with `X` or `Create`
- Reusable components:
- `Topbar`
- `Sidebar`
- `KnowledgeGrid`
- `KnowledgeCard`
- `CreateKnowledgeModal`
- Responsive behavior for desktop/tablet/mobile breakpoints
- Primary and secondary colors aligned with assignment:
- Primary: `#4F46E5`
- Secondary: `#1E1B4B`

## Project Structure

```text
FrontendAssignment/
├── public/
├── src/
│   ├── components/
│   │   ├── CreateKnowledgeModal.jsx
│   │   ├── Icons.jsx
│   │   ├── KnowledgeCard.jsx
│   │   └── KnowledgeGrid.jsx
│   ├── data/
│   │   ├── knowledgeCards.js
│   │   └── navigation.js
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
```

Default local URL:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

To preview production build locally:

```bash
npm run preview
```

## GitHub Repository

```text
https://github.com/ISHA-2026-G8/KnowledgeBase
```
