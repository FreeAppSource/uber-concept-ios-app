import React, { createContext, useContext, useState } from 'react';

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#000000',
  accentBlue: '#276EF1',
  accentBlueSoft: '#F2F6FE',
  accentGreen: '#47B275',
  accentRed: '#E11900',
  darkGray: '#232323',
  mediumGray: '#545454',
  lightGray: '#757575',
  border: '#E2E2E2',
  borderLight: '#EEEEEE',
  surface: '#FFFFFF',
  surfaceLight: '#F6F6F6',
  card: '#FFFFFF',
  inputBg: '#EEEEEE',
  uberAwto: '#FF4D4D',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  full: 9999,
};

export const palettes = {
  light: {
    bg: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceSubtle: '#F6F6F6',
    card: '#FFFFFF',
    cardBorder: '#E2E2E2',
    text: '#000000',
    subText: '#545454',
    iconColor: '#000000',
    inputBg: '#EEEEEE',
    sheetBg: '#FFFFFF',
    divider: '#EEEEEE',
  },
  dark: {
    bg: '#000000',
    surface: '#121212',
    surfaceSubtle: '#1C1C1C',
    card: '#1E1E1E',
    cardBorder: 'rgba(255, 255, 255, 0.12)',
    text: '#FFFFFF',
    subText: '#AFAFAF',
    iconColor: '#FFFFFF',
    inputBg: '#232323',
    sheetBg: '#121212',
    divider: 'rgba(255, 255, 255, 0.15)',
  },
};

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: palettes.light,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? palettes.dark : palettes.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
