import { createContext, useState, useMemo, useEffect } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(savedTheme);
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
