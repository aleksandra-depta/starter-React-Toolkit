import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      white20: string;
      black: string;
      grey: string;
    };
  }
}
