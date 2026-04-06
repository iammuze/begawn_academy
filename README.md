# BEGAWN Academy — Next.js + Tailwind CSS

India's First Technical Writing Academy landing page built with **Next.js 14** (App Router) and **Tailwind CSS v3**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind directives + base styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── shared.tsx         # Stars + Avatar reusable components
│   ├── Navbar.tsx         # Responsive navigation with mobile menu
│   ├── Hero.tsx           # Hero section with program card
│   ├── TrustBar.tsx       # Stats trust bar
│   ├── CoursesSection.tsx # Filterable course grid
│   ├── Roadmap.tsx        # Interactive 45-day roadmap tabs
│   ├── Tools.tsx          # Tools stack grid
│   ├── WhoShouldJoin.tsx  # Audience profiles + checklist
│   ├── Mentors.tsx        # Instructor cards + testimonial
│   ├── Register.tsx       # 3-step registration form
│   └── Footer.tsx         # Footer with nav columns
└── data/
    └── courses.ts         # Course data + TypeScript types
```

---

## 🎨 Design Tokens

| Token        | Value      | Usage                      |
|--------------|------------|----------------------------|
| `brand-700`  | `#1d4ed8`  | Primary blue — CTAs, links |
| `brand-800`  | `#1e40af`  | Hover states               |
| `slate-900`  | `#0f172a`  | Dark backgrounds           |
| `slate-50`   | `#f8fafc`  | Section backgrounds        |

---

## 🛠 Tech Stack

- **Next.js 14** — App Router, Server Components
- **Tailwind CSS v3** — Utility-first styling
- **TypeScript** — Full type safety
- **React 18** — Client components for interactivity

---

## 📦 Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).

---

## ✏️ Customization

- **Course data** → `src/data/courses.ts`
- **Colors** → `tailwind.config.ts` under `theme.extend.colors`
- **Fonts** → `src/app/globals.css` Google Fonts import
- **Metadata** → `src/app/layout.tsx`
