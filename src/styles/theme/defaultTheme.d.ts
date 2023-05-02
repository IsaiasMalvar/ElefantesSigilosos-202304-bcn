import "styled-components";

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
      primary: string;
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
