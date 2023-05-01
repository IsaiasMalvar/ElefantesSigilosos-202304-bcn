declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      light: string;
      dark: string;
    };

    fonts: {
      secondary: string;
    };

    fontSizes: {
      medium: string;
    };

    spacing: {
      medium: string;
    };
  }
}

const theme = {
  colors: {
    primary: "#433550",
    secondary: "#D35400",
    tertiary: "#C5BBD4",
    quaternary: "FFA500",
    light: "#fff",
    dark: "#000",
  },

  fonts: {
    secondary: "Merriweather",
  },

  fontSizes: {
    medium: "16px",
  },

  spacing: {
    medium: "20px",
  },
};

export default theme;
