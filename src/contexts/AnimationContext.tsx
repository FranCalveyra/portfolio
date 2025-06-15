import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnimationContextType {
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimationContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </AnimationContext.Provider>
  );
};