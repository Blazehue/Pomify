# 🍅 Pomify - Pomodoro Timer App.

> Master your time, amplify your focus. A beautiful, feature-rich Pomodoro timer designed for peak productivity.

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](https://pomify.vercel.app) • [Report Bug](https://github.com/Blazehue/Pomify/issues) • [Request Feature](https://github.com/Blazehue/Pomify/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Quick Start](#-quick-start)
- [How to Use](#-how-to-use)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Customization](#-customization)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [Roadmap](#️-roadmap)
- [FAQ](#-faq)
- [License](#-license)

---

## 🎯 Overview

**Pomify** is a modern, full-featured Pomodoro timer application that helps you maintain focus and boost productivity using the proven Pomodoro Technique. Built with the latest web technologies, it offers a delightful user experience with a unique notebook aesthetic that makes time management feel natural and intuitive.

### Why Pomify?

- **🎨 Beautiful Design** - Handcrafted notebook theme that feels personal and warm
- **⚡ Lightning Fast** - Built on Next.js 15 with optimized performance
- **📱 Works Everywhere** - Responsive design for desktop, tablet, and mobile
- **🔒 Privacy First** - All data stored locally, no tracking, no accounts required
- **🎯 Distraction-Free** - Clean interface that keeps you focused on what matters
- **📊 Insightful Analytics** - Track your productivity patterns and celebrate progress

### The Pomodoro Technique

The Pomodoro Technique is a time management method developed by Francesco Cirillo that uses a timer to break work into focused intervals (traditionally 25 minutes), separated by short breaks. This approach helps maintain mental agility and prevents burnout.

---

## ✨ Features

### 🎯 Core Functionality

#### Timer Management
- **Customizable Pomodoro Sessions** - Adjust work duration from 1-60 minutes (default: 25 min)
- **Flexible Break Intervals** - Short breaks (1-30 min) and long breaks (5-60 min)
- **Auto-start Options** - Automatically begin next pomodoro or break
- **Session Tracking** - Real-time counter for completed pomodoros

#### Task Management
- **Create & Organize Tasks** - Add tasks with descriptions and estimated pomodoros
- **Task Selection** - Work on specific tasks or freestyle
- **Progress Tracking** - Visual indicators for task completion
- **Task History** - Review completed tasks and time spent
- **Bulk Operations** - Mark multiple tasks as complete or delete them

#### Statistics & Analytics
- **Daily Overview** - Track today's pomodoros and focus time
- **Weekly Trends** - Visualize productivity patterns across 7 days
- **Monthly Insights** - Long-term productivity analysis
- **Streak Counter** - Maintain and celebrate consecutive productive days
- **Focus Time Calculator** - Total minutes spent in focus mode
- **Task Completion Rate** - Percentage of finished vs. total tasks
- **Interactive Charts** - Beautiful data visualizations using Recharts

### 🎨 Design & User Experience

- **Notebook Aesthetic** - Handwritten-style UI using Architects Daughter font
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Smooth Animations** - Polished transitions powered by Framer Motion
- **Responsive Layout** - Optimized for all screen sizes
- **Accessible Design** - WCAG 2.1 AA compliant with keyboard navigation
- **Custom Color Schemes** - Carefully crafted color palettes for both themes

### 🔔 Notifications & Alerts

- **Browser Notifications** - Desktop alerts when sessions complete.
- **Sound Effects** - Audio cues for timer events (customizable volume)
- **Visual Indicators** - On-screen alerts and status updates.
- **Permission Management** - Easy notification settings control.
- **Toast Messages** - Non-intrusive feedback for user actions.

### 💾 Data Management

- **Local Storage** - All data persists in your browser
- **Session Recovery** - Resume interrupted sessions
- **Export Functionality** - Download your data as JSON
- **Import Capability** - Restore from backup files
- **Auto-save** - Continuous data synchronization

---

## 🎬 Demo

### Screenshots

<div align="center">

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light Mode](screenshots/light-mode.png) | ![Dark Mode](screenshots/dark-mode.png) |

| Timer Active | Statistics Dashboard |
|--------------|---------------------|
| ![Timer](screenshots/timer-active.png) | ![Stats](screenshots/statistics.png) |

</div>

### Live Demo

Experience Pomify in action: **[pomify.vercel.app](https://pomify.vercel.app)**

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** 20.x or higher ([Download](https://nodejs.org/))
- **npm** 10.x or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Blazehue/Pomify.git
   cd Pomify
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   > **Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts in some packages.

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)
   
   You should see the Pomify welcome screen! 🎉

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Preview production build locally
npm run start
```

### Docker Support

Run Pomify in a container:

```bash
# Build the Docker image
docker build -t pomify .

# Run the container
docker run -p 3000:3000 pomify
```

---

## 📖 How to Use

### Getting Started

#### 1. **Set Up Your First Task**
   - Click the "**+**" button in the Tasks section
   - Enter a task name (e.g., "Write project proposal")
   - Optionally set the number of pomodoros needed
   - Press Enter or click "Add Task"

#### 2. **Configure Your Preferences**
   - Click the **⚙️ Settings** icon
   - Adjust timer durations to your preference
   - Enable/disable notifications and sounds
   - Choose your preferred theme

#### 3. **Start Your First Pomodoro**
   - Select a task from your list (or skip for a freestyle session)
   - Click the **Start** button
   - Focus on your task until the timer completes
   - You'll receive a notification when time's up!

#### 4. **Take Your Break**
   - After completing a pomodoro, the break timer starts automatically
   - Use this time to stretch, hydrate, or rest your eyes
   - Short breaks occur after pomodoros 1-3
   - Long breaks occur after every 4th pomodoro

#### 5. **Track Your Progress**
   - View completed pomodoros in the timer display
   - Check the **Statistics Dashboard** for detailed insights
   - Mark tasks as complete using the checkbox
   - Celebrate your productivity! 🎉

### Pro Tips

- **🎯 Single-tasking**: Focus on one task per pomodoro for maximum efficiency
- **📝 Task Estimation**: Break large projects into multiple pomodoros
- **⏸️ Handle Interruptions**: Pause the timer if unavoidable interruptions occur
- **📊 Review Weekly**: Check your statistics every Friday to identify patterns
- **🌙 Night Mode**: Use dark mode during evening sessions to reduce eye strain
- **🔕 Minimize Distractions**: Enable browser notifications but silence other apps

### Keyboard Shortcuts

Boost your efficiency with these shortcuts:

| Shortcut | Action |
|----------|--------|
| `Space` | Start/Pause timer |
| `R` | Reset current timer |
| `N` | Skip to next session |
| `S` | Open settings panel |
| `T` | Focus task input |
| `D` | Toggle dark mode |
| `Esc` | Close dialogs/panels |
| `?` | Show keyboard shortcuts |

---

## 🛠️ Tech Stack

### Core Technologies

- **[Next.js 15.3.5](https://nextjs.org/)** - React framework with App Router and server components
- **[React 19.0.0](https://reactjs.org/)** - UI library with concurrent features
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI

- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon set

### Data & State

- **React Hooks** - Modern state management
- **Local Storage API** - Client-side data persistence
- **Context API** - Global state sharing

### Utilities & Tools

- **[date-fns](https://date-fns.org/)** - Modern JavaScript date utility library
- **[recharts](https://recharts.org/)** - Composable charting library
- **[sonner](https://sonner.emilkowal.ski/)** - Opinionated toast component
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing

---

## 📁 Project Structure

```
pomify/
├── public/                    # Static assets
│   ├── sounds/               # Notification sound files
│   ├── favicon.ico
│   └── manifest.json         # PWA manifest
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles & CSS variables
│   │   └── fonts/            # Local font files
│   │
│   ├── components/
│   │   ├── pomodoro/         # Pomodoro feature components
│   │   │   ├── pomodoro-app.tsx        # Main app container
│   │   │   ├── pomodoro-timer.tsx      # Timer display & controls
│   │   │   ├── task-list.tsx           # Task management UI
│   │   │   ├── task-item.tsx           # Individual task component
│   │   │   ├── statistics-dashboard.tsx # Analytics & charts
│   │   │   ├── settings-panel.tsx      # Settings configuration
│   │   │   └── session-history.tsx     # Completed sessions log
│   │   │
│   │   ├── ui/               # Reusable UI components (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ...           # Other UI primitives
│   │   │
│   │   └── theme-provider.tsx # Theme context provider
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── use-pomodoro-timer.ts    # Timer logic & state
│   │   ├── use-tasks.ts             # Task management
│   │   ├── use-statistics.ts        # Analytics calculations
│   │   ├── use-local-storage.ts     # Storage abstraction
│   │   └── use-notifications.ts     # Notification management
│   │
│   ├── lib/                  # Utility functions & helpers
│   │   ├── utils.ts          # General utilities
│   │   ├── pomodoro-utils.ts # Pomodoro-specific helpers
│   │   ├── storage.ts        # LocalStorage utilities
│   │   └── constants.ts      # App-wide constants
│   │
│   ├── types/                # TypeScript type definitions
│   │   ├── pomodoro.ts       # Timer & session types
│   │   ├── task.ts           # Task-related types
│   │   └── statistics.ts     # Analytics types
│   │
│   └── contexts/             # React contexts
│       └── pomodoro-context.tsx # Global Pomodoro state
│
├── .env.local                # Environment variables (gitignored)
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies & scripts
└── README.md                # Project documentation
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Error tracking
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn

# App Configuration
NEXT_PUBLIC_APP_NAME=Pomify
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Timer Defaults

Customize default timer durations in `src/lib/constants.ts`:

```typescript
export const DEFAULT_DURATIONS = {
  work: 25,           // Focus session duration (minutes)
  shortBreak: 5,      // Short break duration (minutes)
  longBreak: 15,      // Long break duration (minutes)
  longBreakInterval: 4 // Long break after X pomodoros
};

export const TIMER_LIMITS = {
  minWork: 1,
  maxWork: 60,
  minBreak: 1,
  maxBreak: 60
};
```

### Notification Settings

Configure notifications in `src/lib/pomodoro-utils.ts`:

```typescript
export const NOTIFICATION_CONFIG = {
  enabled: true,
  sound: true,
  volume: 0.5,
  soundFile: '/sounds/notification.mp3'
};
```

---

## 🎨 Customization

### Theme Customization

Pomify uses CSS variables for theming. Modify `src/app/globals.css`:

```css
:root {
  /* Light mode colors */
  --background: oklch(0.9821 0 0);
  --foreground: oklch(0.0902 0 0);
  --primary: oklch(0.4891 0 0);
  --primary-foreground: oklch(0.9821 0 0);
  
  /* ... more variables */
}

.dark {
  /* Dark mode colors */
  --background: oklch(0.1412 0 0);
  --foreground: oklch(0.9821 0 0);
  
  /* ... more variables */
}
```

### Adding Custom Fonts

1. Add font files to `src/app/fonts/`
2. Import and configure in `src/app/layout.tsx`:

```typescript
import localFont from 'next/font/local';

const customFont = localFont({
  src: './fonts/your-font.woff2',
  variable: '--font-custom'
});
```

### Custom Components

Create new components following the existing pattern:

```typescript
// src/components/pomodoro/custom-feature.tsx
import { Button } from '@/components/ui/button';

export function CustomFeature() {
  return (
    <div className="p-4">
      {/* Your custom feature */}
    </div>
  );
}
```

---

## 📚 API Reference

### Hooks

#### `usePomodoroTimer()`

Main timer hook with comprehensive state management.

```typescript
const {
  timeLeft,        // Remaining seconds
  isRunning,       // Timer active state
  mode,            // 'work' | 'shortBreak' | 'longBreak'
  completedCount,  // Completed pomodoros
  start,           // Start timer
  pause,           // Pause timer
  reset,           // Reset current session
  skip             // Skip to next session
} = usePomodoroTimer();
```

#### `useTasks()`

Task management hook.

```typescript
const {
  tasks,           // Array of tasks
  addTask,         // (task: Task) => void
  updateTask,      // (id: string, updates: Partial<Task>) => void
  deleteTask,      // (id: string) => void
  toggleComplete   // (id: string) => void
} = useTasks();
```

#### `useStatistics()`

Analytics and statistics hook.

```typescript
const {
  stats,           // Statistics object
  dailyData,       // Chart data for last 7 days
  totalPomodoros,  // Lifetime count
  focusTime,       // Total minutes
  streak           // Current streak
} = useStatistics();
```

---

## 🤝 Contributing

We love contributions! Here's how you can help make Pomify even better.

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Pomify.git`
3. Create a branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines

#### Code Style
- Follow the existing TypeScript and React patterns
- Use functional components with hooks
- Write descriptive variable and function names
- Add JSDoc comments for complex functions
- Run `npm run lint` before committing

#### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add dark mode toggle
fix: resolve timer reset bug
docs: update installation instructions
style: format code with prettier
refactor: simplify statistics calculation
test: add timer hook tests
```

#### Pull Request Process
1. Update the README if adding new features
2. Ensure all tests pass
3. Update documentation as needed
4. Request review from maintainers
5. Address feedback promptly

### Areas for Contribution

- 🐛 **Bug fixes** - Help squash those pesky bugs
- ✨ **New features** - Implement items from the roadmap
- 📝 **Documentation** - Improve or translate docs
- 🎨 **Design** - Enhance UI/UX
- ♿ **Accessibility** - Improve a11y features
- 🌍 **Internationalization** - Add translations
- 🧪 **Testing** - Write unit and integration tests

---

## 🗺️ Roadmap

### Phase 1: Core Enhancements (Q1 2025)
- [ ] Progressive Web App (PWA) support
- [ ] Offline functionality
- [ ] Enhanced keyboard shortcuts
- [ ] Task categories and tags
- [ ] Customizable sound packs

### Phase 2: Advanced Features (Q2 2025)
- [ ] User accounts and authentication
- [ ] Cloud synchronization across devices
- [ ] Team collaboration features
- [ ] Shared pomodoro sessions
- [ ] Advanced analytics and insights

### Phase 3: Integrations (Q3 2025)
- [ ] Calendar integration (Google, Outlook)
- [ ] Project management tools (Trello, Asana, Notion)
- [ ] Spotify/Apple Music integration
- [ ] Browser extension (Chrome, Firefox, Edge)
- [ ] Focus mode (website blocking)

### Phase 4: Mobile & Extensions (Q4 2025)
- [ ] Native mobile apps (iOS & Android)
- [ ] Desktop application (Electron)
- [ ] API for third-party integrations
- [ ] Plugin system for custom extensions
- [ ] AI-powered task estimation

### Future Considerations
- Social features and leaderboards
- Pomodoro templates for different work types
- Time blocking and schedule planning
- Integration with note-taking apps
- Export to productivity reports
- Gamification and achievements

---

## ❓ FAQ

### General Questions

**Q: Do I need to create an account?**  
A: No! Pomify works entirely in your browser with no account required. Your data is stored locally on your device.

**Q: Will my data be lost if I clear my browser?**  
A: Yes, clearing browser data will delete your Pomify data. We recommend exporting your data regularly as a backup.

**Q: Can I use Pomify on multiple devices?**  
A: Currently, data doesn't sync between devices since everything is stored locally. Cloud sync is planned for a future release.

**Q: Is Pomify free?**  
A: Yes, Pomify is completely free and open-source under the MIT license.

### Technical Questions

**Q: Which browsers are supported?**  
A: Pomify works on all modern browsers (Chrome, Firefox, Safari, Edge). For the best experience, use the latest version.(Even Comet)

**Q: Why do notifications not work?**  
A: You need to grant notification permissions to your browser. Check your browser settings if notifications aren't appearing.

**Q: Can I contribute to the project?**  
A: Absolutely! Check our [Contributing](#-contributing) section for guidelines.

**Q: How do I report a bug?**  
A: Open an issue on [GitHub](https://github.com/Blazehue/Pomify/issues) with a detailed description and steps to reproduce.

### Troubleshooting

**Q: The timer doesn't start**  
A: Try refreshing the page. If the issue persists, check your browser console for errors and report them.

**Q: My tasks disappeared**  
A: This usually happens if browser data was cleared. Make sure to export your data regularly.

**Q: Sounds don't play**  
A: Check your browser's autoplay policy and ensure sound is enabled in Pomify settings.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Use privately

Under the conditions:
- 📝 License and copyright notice must be included
- ⚠️ Software is provided "as is" without warranty

---

## 🙏 Acknowledgments

### Inspiration & Credits

- **Francesco Cirillo** - Creator of the [Pomodoro Technique®](https://francescocirillo.com/pages/pomodoro-technique)
- **shadcn** - For the incredible [shadcn/ui](https://ui.shadcn.com/) component library
- **Vercel** - For Next.js and amazing deployment platform
- **Lucide** - For beautiful [open-source icons](https://lucide.dev/)
- **Google Fonts** - For [Architects Daughter](https://fonts.google.com/specimen/Architects+Daughter) font

### Open Source Community

Thank you to all contributors and the open-source community for making projects like this possible!

### Special Thanks

- All beta testers who provided valuable feedback
- The React and Next.js communities
- Everyone who starred, forked, or contributed to this project

---

## 👨‍💻 Author

**Blazehue**

- GitHub: [@Blazehue](https://github.com/Blazehue)
---

## 🌟 Support the Project

If Pomify helps you stay productive, consider:

- ⭐ **Star this repository** to show your support
- 🐛 **Report bugs** to help improve the app
- 💡 **Suggest features** to make it even better
- 🤝 **Contribute code** to join the development
- 📢 **Share with friends** who need better focus

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Blazehue/Pomify?style=social)
![GitHub forks](https://img.shields.io/github/forks/Blazehue/Pomify?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Blazehue/Pomify?style=social)
![GitHub issues](https://img.shields.io/github/issues/Blazehue/Pomify)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Blazehue/Pomify)
![GitHub last commit](https://img.shields.io/github/last-commit/Blazehue/Pomify)

---

<div align="center">

### 🍅 Stay Focused. Stay Productive. Stay Pomified. 🍅

<p>Built with ❤️ using Next.js, React, and TypeScript</p>
<p>© 2025 Pomify. All rights reserved.</p>

[⬆ Back to Top]([#-pomify---pomodoro-timer-app](https://pomify-dun.vercel.app/))

</div>
