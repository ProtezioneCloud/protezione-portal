
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 800, // Increased default duration from 500 to 800ms
  threshold = 0.1,
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'animate-fade-in-up';
      case 'right':
        return 'animate-slide-in-right';
      case 'none':
        return 'animate-fade-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? getAnimationClass() : 'opacity-0',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
