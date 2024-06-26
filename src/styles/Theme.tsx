type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
  quartenary: string;
  background: string;
  backgroundCard: string;
  text: string;
  dark: string;
  disabledText: string;
};

type Fonts = {
  title: string;
  text: string;
  subtitle: string;
};

type FontSizes = {
  small: string;
  medium: string;
  medium2: string;
  large: string;
  big: string;
};

type Spacing = {
  small: string;
  medium: string;
  large: string;
};

export type ThemeType = {
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  spacing: Spacing;
};

export const Theme: ThemeType = {
  colors: {
    primary: "#0b2a77",
    secondary: "#53cfd0",
    tertiary: "#7147f1",
    quartenary: "#122044",
    background: "#111F44",
    backgroundCard: "rgba(59, 130, 246, 0.5)",
    text: "#FFFFFF",
    dark: "rgba(0, 0, 0, 0.5)",
    disabledText: "#d3d3d3",
  },
  fonts: {
    title: "Oswald ,sans-serif",
    text: "Inter,sans-serif",
    subtitle: "Caveat,cursive",
  },
  fontSizes: {
    small: "14px",
    medium: "26px",
    medium2: "36px",
    large: "96px",
    big: "128px",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};
