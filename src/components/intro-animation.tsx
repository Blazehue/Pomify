"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if intro has been shown before
    const introShown = localStorage.getItem("pomify-intro-shown");
    if (introShown) {
      setShowIntro(false);
      setHasShown(true);
    }
  }, []);

  const handleClick = () => {
    setShowIntro(false);
    localStorage.setItem("pomify-intro-shown", "true");
    setHasShown(true);
  };

  if (hasShown && !showIntro) return null;

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background cursor-pointer"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 2, opacity: 0.03 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-red-500 to-orange-500 blur-3xl"
            />
          </div>

          {/* Main logo container */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Tomato icon with bounce animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="relative"
            >
              {/* Tomato emoji styled as logo */}
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[120px] md:text-[180px] filter drop-shadow-2xl"
                >
                  🍅
                </motion.div>
                
                {/* Glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 blur-3xl -z-10"
                />
              </div>
            </motion.div>

            {/* Pomify text with stagger animation */}
            <div className="flex items-center justify-center overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {"Pomify".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground text-center px-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Stay Focused & Productive
            </motion.p>

            {/* Click to continue hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: 2,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="absolute bottom-12 text-sm text-muted-foreground/60"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Click anywhere to continue
            </motion.div>
          </div>

          {/* Decorative floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1, y: [0, -20, 0] }}
            transition={{
              opacity: { delay: 1.5, duration: 1 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-20 right-20 text-6xl"
          >
            ⏰
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1, y: [0, 20, 0] }}
            transition={{
              opacity: { delay: 1.7, duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }}
            className="absolute bottom-32 left-20 text-6xl"
          >
            ✅
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1, rotate: [0, 10, -10, 0] }}
            transition={{
              opacity: { delay: 1.9, duration: 1 },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute top-40 left-32 text-5xl"
          >
            📝
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1, scale: [1, 1.2, 1] }}
            transition={{
              opacity: { delay: 2.1, duration: 1 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            className="absolute bottom-40 right-32 text-5xl"
          >
            🎯
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
