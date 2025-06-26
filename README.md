# 🖥️ Qream Commander

A retro DOS-style file manager interface built with modern web technologies. This project recreates the classic Norton Commander / Total Commander interface with pixel-perfect precision using Next.js, TypeScript, and Tailwind CSS.

## 🚀 Demo

- **Live Demo**: [qream-commander.vercel.app](https://qream-commander.vercel.app)
- **GitHub Repository**: [github.com/user/qream-commander](https://github.com/user/qream-commander)

## ✨ Features

- 🎨 **Pixel-perfect DOS interface** with authentic colors and typography
- 📱 **Responsive design** optimized for desktop screens
- ♿ **Full accessibility support** with ARIA attributes and semantic HTML
- 🎯 **Interactive dropdown menus** with proper keyboard navigation
- ⌨️ **Command input field** with character limit
- 🖼️ **Custom DOS font** (Modern DOS 8x16) with WOFF2 optimization
- 🏗️ **Modern architecture** following SOLID principles

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom theme
- **Font**: Modern DOS 8x16 (WOFF2)
- **Code Quality**: ESLint + Prettier
- **Deployment**: Vercel

## 🏗️ Architecture

### Component Structure

```
src/app/
├── components/           # UI Components
│   ├── Header.tsx       # Menu with dropdown
│   ├── LeftPanel.tsx    # File tree navigation
│   ├── RightPanel.tsx   # File listing columns
│   ├── PreFooter.tsx    # Command input
│   ├── Footer.tsx       # Function keys
│   ├── Main.tsx         # Layout coordinator
│   └── Dropdown.tsx     # Reusable dropdown
├── data/
│   └── data.ts          # Hardcoded application data
├── globals.css          # Global styles & theme
├── layout.tsx           # Root layout
└── page.tsx             # Homepage
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/user/qream-commander.git
   cd qream-commander
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Colors

The DOS color palette is defined in `src/app/globals.css`:

```css
@theme inline {
  --color-dblue: #0000aa; /* Dark blue background */
  --color-lcyan: #55ffff; /* Light cyan text */
  --color-dcyan: #00aaaa; /* Dark cyan highlights */
  --color-yellow: #ffff55; /* Yellow accents */
  --color-lgrey: #aaaaaa; /* Light grey text */
}
```

### Data Structure

Modify the hardcoded data in `src/app/data/data.ts`:

```typescript
export const data = {
  header: { menu: [...] },
  main: { leftPanel: {...}, rightPanel: {...} },
  prefooter: { prompt: "C:\\>" },
  footer: { commands: [...] }
};
```

## ♿ Accessibility Features

- **Semantic HTML5**: `header`, `main`, `aside`, `footer`, `nav`
- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Proper focus indicators and trapping
- **Color Contrast**: Meets WCAG AA standards

## 🧪 Quality Assurance

### Code Quality

```bash
npm run lint          # ESLint checking
npm run build         # Production build test
```

### Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals**: Optimized for all metrics
- **Font Loading**: WOFF2 with font-display: swap

## 📄 License

This project is created for Qream Design Agency as a test task.

## 👨‍💻 Author

**Oleksandr Ananiev**

- Email: oleks.ananiev@gmail.com

## 🙏 Acknowledgments

- **Qream Design Agency** for the opportunity

---

Built with ❤️ for Qream
