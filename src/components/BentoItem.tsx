"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoItem({ children, className, delay = 0 }: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "glass-card rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group transition-all",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
