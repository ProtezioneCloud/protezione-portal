
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
  initiallyVisible?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
  initiallyVisible = false
}) => {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          
          // Use setTimeout to add a slight delay before setting isVisible
          setTimeout(() => {
            setIsVisible(true);
          }, 10);
          
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
      case 'left':
        return 'animate-slide-in-left';
      case 'down':
        return 'animate-fade-in-down';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? getAnimationClass() : 'opacity-0',
        hasIntersected ? '' : 'invisible', // Add invisible class if never intersected
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        willChange: 'transform, opacity',
        transformOrigin: 'center center',
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
