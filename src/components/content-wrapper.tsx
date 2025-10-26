"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if intro has been shown
    const introShown = localStorage.getItem("pomify-intro-shown");
    
    if (introShown) {
      // If intro was shown before, show content immediately
      setShowContent(true);
    } else {
      // Listen for intro completion
      const handleIntroComplete = () => {
        setShowContent(true);
      };

      window.addEventListener("intro-complete", handleIntroComplete);
      
      return () => {
        window.removeEventListener("intro-complete", handleIntroComplete);
      };
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
