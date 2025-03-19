import React from 'react';
import { motion } from 'framer-motion';

interface BlindsAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const BlindsAnimation: React.FC<BlindsAnimationProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 0.3,
          background: `
            linear-gradient(
              180deg, 
              rgba(255,255,255,0) 0%, 
              rgba(255,255,255,0) 10%, 
              #225260 10%, 
              #225260 20%, 
              rgba(255,255,255,0) 20%, 
              rgba(255,255,255,0) 30%, 
              #225260 30%, 
              #225260 40%, 
              rgba(255,255,255,0) 40%, 
              rgba(255,255,255,0) 50%, 
              #225260 50%, 
              #225260 60%, 
              rgba(255,255,255,0) 60%, 
              rgba(255,255,255,0) 70%, 
              #225260 70%, 
              #225260 80%, 
              rgba(255,255,255,0) 80%, 
              rgba(255,255,255,0) 90%, 
              #225260 90%, 
              #225260 100%
            )
          `
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default BlindsAnimation;
