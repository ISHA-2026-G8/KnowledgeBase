# Knowledge Base App

A pixel-accurate React implementation of the Workspace Knowledge Base UI, built as a front-end assignment.


## 📸 Screenshots

| Screen 1 - Knowledge Base Home | Screen 2 - Create New Modal |
|---|---|
| Grid of knowledge base cards with sidebar and top bar | Right-side drawer with form fields |

---

## 🛠️ Tech Stack

- React 18 (functional components + hooks)
- Vite 5 (development server and build tooling)
- CSS (custom styles in `src/styles/index.css`)

---

## 📁 Folder Structure

KnowledgeBaseApp/
├── src/
│ ├── components/
│ │ ├── CreateKnowledgeModal.jsx
│ │ ├── Icons.jsx
│ │ ├── KnowledgeCard.jsx
│ │ └── KnowledgeGrid.jsx
│ │
│ ├── data/
│ │ ├── knowledgeCards.js
│ │ └── navigation.js
│ │
│ ├── layout/
│ │ ├── Sidebar.jsx
│ │ └── Topbar.jsx
│ │
│ ├── styles/
│ │ └── index.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
## 🚀 Run Locally

### Prerequisites
- Node.js (v16 or higher) - https://nodejs.org/
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone repository
git clone https://github.com/YOUR_USERNAME/knowledge-base-app.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
Open the app at: `http://localhost:5173`

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder.

---

## Preview Production Build

```bash
npm run preview
```

---

## 🐙 Upload to GitHub

### First Time Setup

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial commit: Knowledge Base UI"

# 4. Add remote
git remote add origin https://github.com/YOUR_USERNAME/knowledgeBase.git

# 5. Push
git branch -M main
git push -u origin main
```

### Subsequent Updates

```bash
git add .
git commit -m "Your commit message"
git push
```

---

## 🌐 Deploy (Free Options)

### Option 1 - Vercel

1. Go to https://vercel.com and sign in
2. Click `Add New Project`
3. Import your repository
4. Keep default build settings
5. Deploy

---

### Option 2 - Netlify

1. Go to https://netlify.com and sign in
2. Click `Add new site` -> `Import an existing project`
3. Select your repository
4. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

---

### Option 3 - GitHub Pages

```bash
# 1. Install gh-pages
npm install -D gh-pages

# 2. Add to package.json scripts:
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"

# 3. Deploy
npm run deploy
```

---

## ✅ Features Implemented

- Pixel-accurate UI inspired by the design reference
- Responsive layout with fixed top bar and sidebar
- Knowledge card grid view
- Search field for filtering cards
- `Create New` button opening a right-side drawer
- Create form fields for name, description, vector store, and embedding model
- Newly created cards rendered in the grid
- Card action menu (Edit/Delete placeholders)
- Pagination controls with rows-per-page selector
- Reusable component-based architecture

---

🧠 How It Works
The app uses mock data from src/data/knowledgeCards.js
UI is split into:
Components → Reusable UI blocks
Layout → Sidebar & Topbar
Data → Static configuration
App.jsx composes the full layout and renders the main UI

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Primary Color | `#4F46E5` |
| Secondary / Dark | `#1E1B4B` |
| Border Radius | `6px` |
| Card Border | `#E5E7EB` |


👩‍💻 Author

Isha Yadav
B.E. Computer Science | Frontend & iOS Developer
