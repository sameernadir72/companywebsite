"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ScrollProgress } from "./components/ui/ScrollProgress";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex min-h-screen flex-1 flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
