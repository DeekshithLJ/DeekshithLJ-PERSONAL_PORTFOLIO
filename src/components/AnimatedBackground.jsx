import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects to give animated look while scrolling
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#1a0000]">
      
      {/* Primary Video - Ink Swirl */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-[130vh] object-cover opacity-80 -top-[15vh] mix-blend-screen"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-in-slow-motion-11913-large.mp4" type="video/mp4" />
      </motion.video>

      {/* Secondary Video - Red Smoke (Parallax in opposite direction) */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{ y: y2 }}
        className="absolute inset-0 w-full h-[130vh] object-cover opacity-60 -top-[15vh] mix-blend-screen"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-red-smoke-on-a-black-background-4277-large.mp4" type="video/mp4" />
      </motion.video>

      {/* Very subtle dark gradient overlay to ensure text is readable, but videos are highly visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
    </div>
  );
};

export default AnimatedBackground;
