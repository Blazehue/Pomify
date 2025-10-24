# 🍅 Pomify - Pomodoro Timer App

> Stay focused and productive with the Pomodoro Technique

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

### 🎯 Core Functionality
- **Pomodoro Timer** - Classic 25-minute focus sessions with customizable durations
- **Break Management** - Automatic short (5 min) and long (15 min) break intervals
- **Task Management** - Create, track, and manage your tasks with ease
- **Progress Tracking** - Monitor completed pomodoros and track your productivity
- **Statistics Dashboard** - Visualize your productivity patterns and achievements

### 🎨 Design & UX
- **Notebook Theme** - Beautiful handwritten-style interface using Architects Daughter font
- **Dark/Light Mode** - Toggle between themes for comfortable use any time of day
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Smooth Animations** - Polished transitions and interactive elements

### 🔔 Advanced Features
- **Browser Notifications** - Get alerts when sessions complete (with permission)
- **Sound Notifications** - Audio cues for timer completion
- **Auto-start Options** - Automatically begin next session or break
- **Session History** - Review your past pomodoro sessions
- **Local Storage** - Your data persists across browser sessions

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager

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

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📖 How to Use

### Basic Workflow

1. **Add a Task**
   - Click the "+" button in the Tasks section
   - Enter your task name
   - Set the number of pomodoros needed (optional)

2. **Start a Session**
   - Select a task (optional) or work without one
   - Click "Start" to begin your 25-minute focus session
   - Work without distractions until the timer completes

3. **Take Breaks**
   - After each pomodoro, take a 5-minute short break
   - After 4 pomodoros, take a 15-minute long break

4. **Track Progress**
   - View completed pomodoros in real-time
   - Check the Statistics Dashboard for detailed insights
   - Mark tasks as complete when finished

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Space` | Start/Pause timer |
| `R` | Reset timer |
| `Esc` | Close dialogs |

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.3.5** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.x** - Type-safe development

### Styling
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Smooth animations
- **Radix UI** - Unstyled, accessible component primitives

### State Management
- **React Hooks** - Built-in state management
- **Local Storage** - Persistent data storage

### Additional Libraries
- **date-fns** - Modern date utility library
- **lucide-react** - Beautiful icon set
- **recharts** - Composable charting library
- **sonner** - Toast notifications
- **next-themes** - Theme management

## 📁 Project Structure

```
pomify/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles & theme
│   ├── components/
│   │   ├── pomodoro/   # Pomodoro-specific components
│   │   │   ├── pomodoro-app.tsx
│   │   │   ├── pomodoro-timer.tsx
│   │   │   ├── task-list.tsx
│   │   │   ├── statistics-dashboard.tsx
│   │   │   └── settings-panel.tsx
│   │   └── ui/         # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   │   ├── use-pomodoro-timer.ts
│   │   ├── use-statistics.ts
│   │   └── use-tasks.ts
│   ├── lib/            # Utility functions
│   │   ├── utils.ts
│   │   └── pomodoro-utils.ts
│   └── types/          # TypeScript type definitions
│       └── pomodoro.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Theme Customization

Pomify uses a custom "Notebook" theme with a handwritten aesthetic. You can customize the theme by modifying `src/app/globals.css`:

```css
:root {
  --font-sans: var(--font-sans), "Architects Daughter", sans-serif;
  --primary: oklch(0.4891 0 0);
  --background: oklch(0.9821 0 0);
  /* ... more variables */
}
```

### Available Themes
- **Light Mode** - Clean, bright notebook paper aesthetic
- **Dark Mode** - Easy on the eyes for night work sessions

## 🔧 Configuration

### Timer Settings

Customize default timer durations in `src/hooks/use-pomodoro-timer.ts`:

```typescript
const DEFAULT_DURATIONS = {
  work: 25,      // 25 minutes
  shortBreak: 5, // 5 minutes
  longBreak: 15  // 15 minutes
};
```

### Notification Settings

Enable/disable notifications in the Settings Panel (⚙️ icon) or modify defaults in `src/lib/pomodoro-utils.ts`.

## 📊 Statistics & Analytics

Track your productivity with:
- **Daily Pomodoros** - Sessions completed today
- **Total Pomodoros** - Lifetime achievement counter
- **Task Completion Rate** - Percentage of completed tasks
- **Focus Time** - Total minutes spent in focus mode
- **Streak Tracking** - Consecutive days of productivity

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 🐛 Known Issues

- Some browsers may require explicit notification permissions
- Audio notifications may not work on iOS Safari (browser limitation)
- Statistics reset if localStorage is cleared

## 🗺️ Roadmap

- [ ] User accounts and cloud sync
- [ ] Pomodoro analytics and insights
- [ ] Team collaboration features
- [ ] Mobile app (React Native)
- [ ] Browser extension
- [ ] Spotify/Apple Music integration
- [ ] Export data to CSV/JSON
- [ ] Custom sound packs
- [ ] Focus mode (block distracting websites)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the [Pomodoro Technique®](https://francescocirillo.com/pages/pomodoro-technique) by Francesco Cirillo
- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons from [Lucide Icons](https://lucide.dev/)
- Font: [Architects Daughter](https://fonts.google.com/specimen/Architects+Daughter) by Google Fonts

## 👨‍💻 Author

**Blazehue**
- GitHub: [@Blazehue](https://github.com/Blazehue)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you stay productive!

---

<div align="center">
  <p>Built with ❤️ using Next.js and React</p>
  <p>© 2025 Pomify. All rights reserved.</p>
</div>

